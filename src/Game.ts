import { io } from "socket.io-client";
import { CustomSocket } from "./App";
import { HOST, MAX, MIN, PORT, SocketEvent } from "./definitions";
import { GameMode, GameStrategy, IGame, Logger, MoveState, Player, Possibility, WinStrategy } from "./interfaces";

export class Game implements IGame {
    possibility: Possibility;
    isHost: boolean = false;
    isSelf: boolean = null;
    isStarted: boolean = false;
    roomId: string;
    isFinished: boolean = false;
    players: Player[] = [];
    mode: GameMode;
    socket: CustomSocket = io(`${HOST}${PORT}`) as CustomSocket;
    winStrategy: WinStrategy;
    gameStrategy: GameStrategy;
    currentValue: number;
    moves: MoveState[] = [];
    logger: Logger;

    constructor(){
        this.socket.on(SocketEvent.USER_JOINED, this.onUserJoined.bind(this));
    }

    addPlayer = (player: Player) => {
        this.players.push(player);
        return this.players
    };

    create(){
        this.reset()
        this.logger.log('Create Event Emitted')
        this.isHost = true;
        this.socket.emit(SocketEvent.CREATE_GAME);
    }

    join(roomId){
        this.reset()
        this.logger.log(`Join Event Emitted: ${roomId}`)
        this.isHost = false;
        this.socket.emit(SocketEvent.JOIN_GAME, { roomId: roomId });
    }

    move(played: number){
        this.logger.log(`Move Event Emitted: ${played}`)
        const playedMove = this.gameStrategy.play({
            before: this.currentValue, 
            played: played,
        });
        const isFinished = this.winStrategy.hasWon(playedMove.after);
        const roomId = this.roomId;
        this.socket.emit(SocketEvent.MOVE, {...playedMove, isFinished: isFinished, roomId: roomId});
    }

    onCreated(handler){
        this.socket.on(SocketEvent.ROOM_CREATED,(params) =>{
            this.logger.log(`OnCreated Event Received: ${JSON.stringify(params)}`)
            this.roomId = params.roomId;
            if(handler) handler(params);
        });
    }

    onAccepted(handler){
        this.socket.on(SocketEvent.GAME_ACCEPTED, (params) =>{
            this.logger.log(`onAccepted Event Received: ${JSON.stringify(params)}`)
            this.roomId = params.roomId;
            if(handler) handler(params);
        });
    }

    onStarted(handler?){
        this.socket.on(SocketEvent.GAME_STARTED, (params) => {
            this.logger.log(`onStarted Event Received: ${JSON.stringify(params)}`)
            this.isStarted = true;
            this.isSelf = this.isHost;
            this.currentValue = params.initialValue;
            if(handler) handler(params)
        });
    }

    onMoveReceived(handler?){
        this.socket.on(SocketEvent.MOVE_RECEIVED, (params) => {
            this.logger.log(`MoveReceived Event Received: ${JSON.stringify(params)}`)            
            this.isFinished = params.isFinished;
            this.currentValue = params.after;
            this.moves.push({...params, isSelf: this.isSelf});
            this.isSelf = !this.isSelf;
            if(handler) handler(params)
        })
    }

    onUserJoined(){
        this.logger.log(`onUserJonined Event Received`)
        const initalValue = Math.floor((Math.random() * MAX) + MIN);
        this.logger.log(`Initialize Event Emitted`)
        this.socket.emit(SocketEvent.INITIALIZE, {initialValue: initalValue, roomId: this.roomId});
    }

    reset(){
        this.currentValue = 0;
        this.isStarted = false;
        this.isSelf = null;
        this.isHost = false;
        this.isFinished = false;
        this.players = [];
        this.moves = [];
    }

}