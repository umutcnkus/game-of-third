import { DownOutlined, UpOutlined, RightOutlined, NumberOutlined, SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { MoveObject } from './interfaces';

export const DIVIDER = 3;

export enum MoveValues {
    DECREASE_BY_ONE = -1,
    PASS = 0,
    INCREASE_BY_ONE = 1
}

export const AllPossibleMoves: MoveObject[] = [
    {
        name: "increaseByOne",
        title: "Decrease by One",
        icon: UpOutlined,
        value: MoveValues.INCREASE_BY_ONE
    },
    {
        name: "decreaseByOne",
        title: "Increase by One",
        icon: DownOutlined,
        value: MoveValues.DECREASE_BY_ONE
    },
    {
        name: "pass",
        title: "Increase by One",
        icon: DownOutlined,
        value: MoveValues.PASS
    }
]