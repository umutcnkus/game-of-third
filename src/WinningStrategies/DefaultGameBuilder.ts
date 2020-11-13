import { DefaultConfig } from "../DefaultGameConfig";
import { Game } from "../Game";
import { DivideBy } from "../GameStrategies/DivideBy";
import { GameBuilder, GameMode } from "../interfaces";
import { DivideByPossibility } from "../Possibilities/DivideByThreePossibility";
import { WinByGettingOne } from "./WinByGettingOneStrategy";

export class DefaultGameBuilder implements GameBuilder {
    game = new Game()

    build() {
        this.game.gameStrategy = this.buildGameStrategy()
        this.game.possibility = this.buildPossibility()
        this.game.winStrategy = this.buildWinStrategy()
        this.game.mode = this.buildMode()
        return this.game;
    }
    buildGameStrategy() {
        return new DivideBy()
    }
    buildPossibility() {
        return new DivideByPossibility()
    }
    buildMode() {
        return 'manuel' as GameMode;
    }
    buildWinStrategy() {
        return new WinByGettingOne()
    }

}