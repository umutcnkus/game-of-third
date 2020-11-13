import React from "react";
import "../App.css"
import "./OnboardingPage.css"
import { Popover, Button, Input } from 'antd';
import { RouteComponentProps } from 'react-router-dom'
import { Game } from "../interfaces";

interface OnboardingPageRouterProps {
}

interface OnboardingPageProps extends RouteComponentProps<OnboardingPageRouterProps> {
    game: Game
}

interface OnboardingPageState {
    enterRoomNumberVisible: boolean;
}
export class OnboardingPage extends React.Component<OnboardingPageProps, OnboardingPageState> {

    constructor(props: OnboardingPageProps) {
        super(props);
        this.state = { enterRoomNumberVisible: false };
    }

    componentDidMount() {
        this.props.game.socket.on("room-created", (params) => this.moveToGameBoard(params));
        this.props.game.socket.on("join-game", (params) => this.props.history.push(`/play/${params.gameId}`));
    }

    initializeNewGame() {
        this.props.game.socket.emit("newGame");
    }

    moveToGameBoard(params) {
        this.props.game.socket.isHost = true;
        console.log('Hey there');
        this.props.history.push(`/play/${params.gameId}`)
    }

    joinExistingGame(roomId) {
        this.props.game.socket.emit("join-game", { roomId: roomId });
        this.props.game.socket.isHost = false;
    }

    render() {
        const { Search } = Input;

        return (
            <div className="col-12 flex v-center">
                <div className="col-4 onboarding-container v-center flex">
                    <div className="button-container w-100 flex">
                        <Button className="menu-button" onClick={this.initializeNewGame.bind(this)} type="primary" block>
                            New Game
                        </Button>
                        <Popover
                            content={
                                <React.Fragment>
                                    <Search onSearch={(value) => this.joinExistingGame(value)} placeholder="Room ID" enterButton />
                                </React.Fragment>

                            }
                            title="Join a Room"
                            trigger="click"
                            visible={this.state.enterRoomNumberVisible}
                        >
                            <Button className="menu-button" onClick={() => this.setState({ enterRoomNumberVisible: !this.state.enterRoomNumberVisible })} block>Join</Button>
                        </Popover>
                        <Button className="menu-button" block>Settings</Button>
                    </div>
                </div>
            </div>
        )
    }
}