import { DivideByThreeStrategy } from "./GameStrategies/DivideBy";
import { GameConfig } from "./interfaces";
import { WinByGettingOne } from "./WinningStrategies/WinByGettingOneStrategy";

export const DefaultConfig: GameConfig = {
    gameMode: 'manuel',
    winStrategy: new WinByGettingOne(),
    gameStrategy: new DivideByThreeStrategy()
}