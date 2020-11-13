import { NumberOutlined } from '@ant-design/icons';
import { Button, Card, Statistic, Tooltip } from "antd";
import React from "react";
import { AllPossibleMoves } from "../../definitions";
import { MoveObject, Possibility } from '../../interfaces';
import "../App.css";
import "./PlayerControls.css";

interface PlayerControlsProps {
    currentValue: number;
    possibility: Possibility;
    onMoveHandler: (playedValue: number) => void;
}

interface PlayerControlsState {
}

export class PlayerControls extends React.Component<PlayerControlsProps, PlayerControlsState> {

    calculatePossibleMoves(valueToBeChecked: number) {
        return AllPossibleMoves.filter(move => this.props.possibility.isPossible(move.value))
    }

    render() {
        const { currentValue } = this.props;
        const possibleMoves: MoveObject[] = this.calculatePossibleMoves(currentValue);

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
                            AllPossibleMoves.map((move, index) => {
                                <Tooltip title={move.title}>
                                    <Button onClick={() => this.props.onMoveHandler(move.value)} className="control-button" disabled={possibleMoves.includes(move)} type="primary" shape="circle" icon={move.icon} />
                                </Tooltip>
                            })
                        }
                    </div>
                </div>
            </Card>
        )
    }
}