import { DownOutlined } from '@ant-design/icons';
import { CustomSocket } from '../App';
import { Game } from '../Game';

export interface MoveObject {
    title: string;
    icon: typeof DownOutlined;
    value: number;
    name: string;
}

export type GameMode = 'manuel' | 'auto';

export interface Possibility {
    isPossible: (current: number, numberToBeChecked: number, gameStrategy: GameStrategy) => boolean;
}

export interface WinStrategy {
    hasWon: (value: number) => boolean
}

export interface GameStrategy {
    play: (move: Partial<MoveState>) => MoveState
}

export interface MoveState {
    before: number;
    played: number;
    after: number;
    isSelf?: boolean;
}

export interface Player {
    isComputer: boolean;
}

export interface IGame {
    possibility: Possibility;
    isSelf: boolean;
    players: Player[];
    mode: GameMode;
    socket: CustomSocket;
    winStrategy: WinStrategy;
    gameStrategy: GameStrategy;
}

export interface GameBuilder {
    build: () => Game
    buildPossibility: () => Possibility;
    buildWinStrategy: () => WinStrategy;
    buildGameStrategy: () => GameStrategy;
    buildMode: () => GameMode
}

export interface GameConfig {
    gameMode: GameMode;
    winStrategy: WinStrategy;
    gameStrategy: GameStrategy;
}

export interface Logger {
    log: (value) => void
}