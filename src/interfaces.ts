import { DownOutlined } from '@ant-design/icons';
import { CustomSocket } from './App';

export interface MoveObject {
    title: string;
    icon: typeof DownOutlined;
    value: number;
    name: string;
}

export type GameMode = 'manuel' | 'auto';

export interface Possibility {
    isPossible: (numberToBeChecked: number) => boolean;
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
}

export interface Player {
    isComputer: boolean;
}

export interface Game {
    possibility: Possibility;
    isSelf: boolean;
    players: Player[];
    mode: GameMode;
    socket: CustomSocket;
    winStrategy: WinStrategy;
    gameStrategy: GameStrategy;
    addPlayer: (player: Player) => Player[];
    removePlayer: (player: Player) => void;
}

export interface GameBuilder {
    build: () => Game;
    buildPossibility: () => Possibility;
    buildMode: () => GameMode
}

export interface GameConfig {
    gameMode: GameMode;
    winStrategy: WinStrategy;
    gameStrategy: GameStrategy;
}