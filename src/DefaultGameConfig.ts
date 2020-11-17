import { DivideBy } from "./GameStrategies/DivideBy";
import { GameConfig } from "./utils/interfaces";
import { WinByGettingOne } from "./WinningStrategies/WinByGettingOneStrategy";

export const DefaultConfig: GameConfig = {
    gameMode: 'manuel',
    winStrategy: new WinByGettingOne(),
    gameStrategy: new DivideBy()
}