import { NumberOutlined } from '@ant-design/icons';
import { Button, Card, Statistic, Tooltip, Spin, Tag } from "antd";
import React from "react";
import { AllPossibleMoves } from "../../definitions";
import "../../App.css";
import "./PlayerControls.css";
import { Game } from '../../Game';

interface PlayerControlsProps {
    game: Game;
    currentValue: number;
    onMoveHandler: (playedValue: number) => void;
    onAutoPlayChange: (isAuto: boolean) => void;
}

interface PlayerControlsState {
}

export class PlayerControls extends React.Component<PlayerControlsProps, PlayerControlsState> {

    calculatePossibleMoves() {
        const { currentValue, gameStrategy, possibility } = this.props.game;
        return  AllPossibleMoves.filter((move) => possibility.isPossible(currentValue, move.value, gameStrategy));          
    }

    render() {
        const currentValue = this.props.currentValue;
        const possibleMoves: number[] = this.calculatePossibleMoves().map((move) => move.value);
        if(!this.props.game.isStarted){
            return (
                <Card>
                        <div className="waiting-card">
                            <Spin className="spinner" size="default" />
                            <div className="tags">
                                <Tag className="tag" color="magenta">Waiting for Opponent</Tag>
                                <Tag onClick={() => this.props.onAutoPlayChange(true)} className="tag" color="magenta">Use Auto - Play Instead?</Tag>
                            </div>
                        </div>
                </Card>
            )
        }
        return (
            <Card>
                <div className="current-status">
                    <Statistic
                        className="statistics"
                        title="Current Value"
                        value={currentValue}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<NumberOutlined />}
                    />
                    <div className="controls">
                        {
                            AllPossibleMoves.map((move, index) => (
                                <Tooltip key={index} title={move.title}>
                                    <Button onClick={() => this.props.onMoveHandler(move.value)} className="control-button" disabled={!possibleMoves.includes(move.value) || !this.props.game.isSelf} type="primary" shape="circle" icon={< move.icon />} />
                                </Tooltip>
                            ))
                        }
                    </div>
                </div>
            </Card>
        )
    }
}