import { DIVIDER } from "../definitions";
import { GameStrategy, MoveState } from "../interfaces";

export class DivideBy implements GameStrategy {
    play = (params: Partial<MoveState>) => {
        return {
            before: params.before,
            played: params.played,
            after: (params.before + params.played) / DIVIDER
        }
    }
}

