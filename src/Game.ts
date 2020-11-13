import { io } from "socket.io-client";
import { CustomSocket } from "./App";
import { HOST, PORT } from "./definitions";
import { GameMode, GameStrategy, Player, Possibility, WinStrategy } from "./interfaces";

export class Game {
    possibility: Possibility;
    isSelf: boolean = true;
    players: Player[] = [];
    mode: GameMode;
    socket: CustomSocket = io(`${HOST}${PORT}`) as CustomSocket;
    winStrategy: WinStrategy;
    gameStrategy: GameStrategy;

    addPlayer = (player: Player) => {
        this.players.push(player);
        return this.players
    };
}