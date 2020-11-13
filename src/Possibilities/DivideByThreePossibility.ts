import { DIVIDER } from "../definitions";
import { GameStrategy, Possibility } from "../interfaces";

export class DivideByPossibility implements Possibility {
    isPossible = (current: number, value: number, gameStrategy: GameStrategy) => gameStrategy.play({
        before: current,
        played: value
    }).after % DIVIDER == 0;
}