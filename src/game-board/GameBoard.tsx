import React from "react";
import "../App.css"
import "./GameBoard.css"
import { Switch, Tag, Divider, Button, Tooltip, Statistic, Card, Modal, Result, notification } from 'antd';
import { RouteComponentProps } from 'react-router-dom'
import { DownOutlined, UpOutlined, RightOutlined, NumberOutlined, SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { CustomSocket } from "../App";
import { MoveHolder } from "../move-holder/MoveHolder";
import { PlayerControls } from "./player-controls/PlayerControls";
import { Game } from "../interfaces";

interface GameBoardRouterProps {
    id: string;
}

interface GameBoardProps extends RouteComponentProps<GameBoardRouterProps> {
    game: Game;
}

interface GameBoardState {
    isSelfTurn: boolean;
    isAutoPlay: boolean;
    isStarted: boolean;
    isFinished: boolean;
    total: number;
}

interface Move {
    before: number;
    played: number;
    after: number;
    isSelf: boolean;
}

export class GameBoard extends React.Component<GameBoardProps, GameBoardState> {
    moves: Move[] = [];

    constructor(props) {
        super(props)
        this.state = {
            isSelfTurn: this.props.game.socket.isHost,
            isStarted: false,
            isAutoPlay: false,
            isFinished: false,
            total: 0
        }
    }

    componentDidMount() {
        this.props.game.socket.on("game-started", (params) => this.startGame(params));
        this.props.game.socket.on("move-played", (params) => this.onMovePlayed(params))
    }

    startGame(params) {
        notification.info({ message: `Game started with initial value: ${params.total}`, duration: 3 })
        this.setState({ total: params.total, isStarted: true, isSelfTurn: this.props.game.socket.isHost });
    }

    move(value) {
        console.log(value);

        this.props.game.socket.emit("moved", { previousValue: this.state.total, playedMove: value })
    }

    onMovePlayed(params) {
        this.moves.push({
            before: params.oldValue,
            played: params.played,
            after: params.newValue,
            isSelf: this.state.isSelfTurn
        })
        this.setState({
            total: params.newValue,
            isSelfTurn: !this.state.isSelfTurn,
            isFinished: params.isFinished
        })
        if (this.state.isAutoPlay && !this.state.isSelfTurn && !this.state.isFinished) {
            const possible_moves = [-1, 0, 1];
            const move = possible_moves[Math.floor(Math.random() * possible_moves.length)];
            this.move(move)
        }
    }

    changeAutoPlay(isAuto) {
        if (isAuto) {
            this.setState({ isStarted: true, total: Math.floor((Math.random() * 1000) + 1) })
        }
        this.setState({ isAutoPlay: isAuto })
    }

    render() {
        const { id } = this.props.match.params;
        const { isSelfTurn, isStarted } = this.state;
        return (
            <div className="col-12 flex v-center">
                <div className="col-4 game-board-container flex">
                    <div className="info">
                        <Tag className="game-id-tag" color="blue">{id}</Tag>
                        {!this.state.isStarted && <Switch onChange={(checked) => this.changeAutoPlay(checked)} checked={this.state.isAutoPlay} className="auto-play-switch" checkedChildren="Auto Play" unCheckedChildren="Auto Play" defaultChecked />}
                    </div>
                    <Divider dashed ></Divider>
                    <div className="moves flex">
                        {this.moves.map((move, index) =>
                            <MoveHolder key={index} previousValue={move.before} playedMove={move.played} remainder={move.after} isSelf={move.isSelf} />
                        )
                        }
                    </div>
                    <div className="current-number">
                        <PlayerControls possibility={this.props.game.possibility} currentValue={this.state.total} onMoveHandler={this.move.bind(this)} />
                    </div>
                </div>
                <Modal
                    title="The End"
                    visible={this.state.isFinished && !this.state.isSelfTurn}
                    onCancel={() => this.setState({ isFinished: false })}
                    footer={[
                        <Button type="primary" key="back" onClick={() => this.props.history.push("/")}>
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
                    visible={this.state.isFinished && this.state.isSelfTurn}
                    onCancel={() => this.setState({ isFinished: false })}
                    footer={[
                        <Button type="primary" key="back" onClick={() => this.props.history.push("/")}>
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