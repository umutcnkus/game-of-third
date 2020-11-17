import React from "react";
import "../../App.css"
import "./MoveHolder.css"
import { Alert, Tag } from 'antd';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

interface MoveHolderProps {
    previousValue?: number;
    playedMove: number;
    remainder?: number;
    isSelf?: boolean;
}

interface MoveHolderState {

}
export class MoveHolder extends React.Component<MoveHolderProps, MoveHolderState> {

    render() {
        const { previousValue, playedMove, remainder, isSelf } = this.props;
        return (
            
            <ScrollIntoViewIfNeeded className={`single-move-container ${isSelf ? 'self' : 'opponent'}`}>
                {
                    playedMove === -1 &&
                    <React.Fragment>
                        <div className="flex s-move-container">
                            <Alert message="Decreased" type="error" />
                            <div className="calculation-container">
                                <Tag className="previous-tag" color="magenta">{previousValue} - {1}</Tag>
                                <Tag className="fit" color="blue">%</Tag>
                                <Tag className="previous-tag" color="magenta">3</Tag>
                                <Tag className="fit" color="blue">=</Tag>
                                <Tag className="previous-tag" color="magenta">{remainder}</Tag>
                            </div>
                        </div>
                    </React.Fragment>

                }
                {
                    playedMove === 0 &&
                    <React.Fragment>
                        <div className="flex s-move-container">
                            <Alert message="Passed" type="info" />
                            <div className="calculation-container">
                                <Tag className="previous-tag" color="magenta">{previousValue} + {0}</Tag>
                                <Tag className="fit" color="blue">%</Tag>
                                <Tag className="previous-tag" color="magenta">3</Tag>
                                <Tag className="fit" color="blue">=</Tag>
                                <Tag className="previous-tag" color="magenta">{remainder}</Tag>
                            </div>

                        </div>
                    </React.Fragment>
                }
                {
                    playedMove === 1 &&
                    <React.Fragment>
                        <div className="flex s-move-container">
                            <Alert message="Increased" type="success" />
                            <div className="calculation-container">
                                <Tag className="previous-tag" color="magenta">{previousValue} + {1}</Tag>
                                <Tag className="fit" color="blue">%</Tag>
                                <Tag className="previous-tag" color="magenta">3</Tag>
                                <Tag className="fit" color="blue">=</Tag>
                                <Tag className="previous-tag" color="magenta">{remainder}</Tag>
                            </div>
                        </div>
                    </React.Fragment>
                }
            </ScrollIntoViewIfNeeded>
        )
    }
}