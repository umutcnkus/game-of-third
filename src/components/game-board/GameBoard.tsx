import { Button, Divider, Modal, Result, Switch, Tag, Tooltip } from 'antd';
import React from "react";
import { RouteComponentProps } from 'react-router-dom';
import "../../App.css";
import { Game } from '../../Game';
import { MoveHolder } from "../move-holder/MoveHolder";
import "./GameBoard.css";
import { PlayerControls } from "./player-controls/PlayerControls";
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';
import { MoveState } from '../../utils/interfaces';
import { AllPossibleMoves } from '../../utils/definitions';

interface GameBoardRouterProps {
    id: string;
}

interface GameBoardProps extends RouteComponentProps<GameBoardRouterProps> {
    game: Game;
}

interface GameBoardState {
    isSelf: boolean;
    isAuto: boolean;
}
export class GameBoard extends React.Component<GameBoardProps, GameBoardState> {
    game = this.props.game;
    moves: MoveState[] = this.game.moves;

    constructor(props) {
        super(props)
        this.state = {
            isSelf: this.game.isHost,
            isAuto: this.isAuto()
        }
    }

    isAuto(){
        return this.game.mode === 'auto'
    }

    componentDidMount() {
        this.game.onMoveReceived((params) => this.onMovePlayed(params));
        this.game.onStarted(() => this.setState({...this.game, isAuto: this.isAuto()}));
    }

    move(value) {
        this.game.move(value);
    }

    onMovePlayed(params) {
        this.setState({...this.game, isAuto: this.isAuto()})
        if (this.isAiTurn()) {
            this.playAI();
        }
    }

    isAiTurn(){
        return this.isAuto() && !this.state.isSelf && !this.game.isFinished;
    }

    playAI(){
        const { currentValue, gameStrategy, possibility } = this.props.game;
        const possibleMoves = AllPossibleMoves.filter((move) => possibility.isPossible(currentValue, move.value, gameStrategy));
        const selecteMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        this.move(selecteMove.value);
    }

    goToHomePage(){
        window.location.href = "/game-of-third"
    }

    changeAutoPlay(isAuto) {
       if(isAuto) {
           this.props.game.mode = 'auto';
           this.game.onUserJoined();
       }
       else{
        this.props.game.mode = 'manuel';
       }
       this.setState({isAuto: isAuto});
    }

    render() {
        const { id } = this.props.match.params;
        return (
            <div className="col-12 flex v-center main-container">
                <div className="col-4 game-board-container flex">
                    <Tooltip  title="Share this with your friends and play together!">
                        <div className="info">
                            <Tag className="game-id-tag" color="blue">{id}</Tag>
                            {!this.props.game.isStarted && <Switch onChange={(checked) => this.changeAutoPlay(checked)} checked={this.state.isAuto} className="auto-play-switch" checkedChildren="Auto Play" unCheckedChildren="Auto Play" defaultChecked />}
                        </div>
                    </Tooltip>
                    <Divider dashed ></Divider>
                    <div className="moves flex">
                        {this.moves.map((move, index) =>
                            <MoveHolder key={index} previousValue={move.before} playedMove={move.played} remainder={move.after} isSelf={move.isSelf} />
                        )
                        }
                    </div>
                    <div className="current-number">
                        <PlayerControls onAutoPlayChange={this.changeAutoPlay.bind(this)} currentValue={this.game.currentValue} game={this.game} onMoveHandler={this.move.bind(this)} />
                    </div>
                </div>
                <Modal
                    title="The End"
                    visible={this.game.isFinished && !this.state.isSelf}
                    onCancel={() => this.goToHomePage()}
                    footer={[
                        <Button type="primary" key="back" onClick={() =>  this.goToHomePage()}>
                            Return to Lobby
                         </Button>,

                    ]}
                >
                    <Result
                        icon={<SmileOutlined />}
                        title="Congrats! You are the champion!"
                    />,
                </Modal>
                <Modal
                    title="The End"
                    visible={this.game.isFinished && this.state.isSelf}
                    onCancel={() => this.goToHomePage()}
                    footer={[
                        <Button type="primary" key="back" onClick={() => this.goToHomePage()}>
                            Return to Lobby
                         </Button>
                    ]}
                >
                    <Result
                        icon={<FrownOutlined />}
                        title="Sorry, not this time."
                    />,
                </Modal>
            </div>
        )
    }
}