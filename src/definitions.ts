import { DownOutlined, UpOutlined, RightOutlined } from '@ant-design/icons';
import { MoveObject } from './interfaces';

export const HOST = "www.umutcankus.me:";
export const PORT = "80";

export const DIVIDER = 3;
export const MIN = 10000;
export const MAX = 100000;

export enum MoveValues {
    DECREASE_BY_ONE = -1,
    PASS = 0,
    INCREASE_BY_ONE = 1
}

export const AllPossibleMoves: MoveObject[] = [
    {
        name: "increaseByOne",
        title: "Increase by One",
        icon: UpOutlined,
        value: MoveValues.INCREASE_BY_ONE
    },
    {
        name: "pass",
        title: "Pass",
        icon: RightOutlined,
        value: MoveValues.PASS
    },
    {
        name: "decreaseByOne",
        title: "Decrease by One",
        icon: DownOutlined,
        value: MoveValues.DECREASE_BY_ONE
    },
]

export enum SocketEvent {
    ROOM_CREATED = "room-created",
    GAME_STARTED = "game-started",
    USER_JOINED = "user-joined",
    MOVE_RECEIVED = "move-received",
    GAME_ACCEPTED = "game-accepted",
    
    CREATE_GAME = "create-game",
    JOIN_GAME = "join-game",
    MOVE = "make-move",
    INITIALIZE = "initialize"
}