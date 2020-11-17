import React from "react";
import "../../App.css"
import "./OnboardingPage.css"
import { Popover, Button, Input } from 'antd';
import { RouteComponentProps } from 'react-router-dom'
import { Game } from '../../Game';

interface OnboardingPageRouterProps {
}

interface OnboardingPageProps extends RouteComponentProps<OnboardingPageRouterProps> {
    game: Game
}

interface OnboardingPageState {
    enterRoomNumberVisible: boolean;
}
export class OnboardingPage extends React.Component<OnboardingPageProps, OnboardingPageState> {
    game: Game = this.props.game;

    constructor(props: OnboardingPageProps) {
        super(props);
        this.state = { enterRoomNumberVisible: false };
    }

    componentDidMount() {
        this.game.onCreated((params) => this.moveToGameBoard(params));
        this.game.onAccepted((params) =>this.moveToGameBoard(params));
    }

    initializeNewGame() {
        this.game.create()
    }

    joinExistingGame(roomId) {
        this.game.join(roomId);
    }

    moveToGameBoard(params) {
        const { history } = this.props;
        history.push(`/play/${params.roomId}`)
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