import { DownOutlined, UpOutlined, RightOutlined } from '@ant-design/icons';
import { MoveObject } from './interfaces';

export const HOST = "http://localhost:";
export const PORT = "1234";

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
        icon: RightOutlined,
        value: MoveValues.DECREASE_BY_ONE
    },
    {
        name: "pass",
        title: "Increase by One",
        icon: DownOutlined,
        value: MoveValues.PASS
    }
]