import { GameStrategy, Possibility } from "../interfaces";

export class DivideByPossibility implements Possibility {
    isPossible = (current: number, value: number, gameStrategy: GameStrategy) =>Number.isInteger(gameStrategy.play({
        before: current,
        played: value
    }).after);
}