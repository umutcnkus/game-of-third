import { WinStrategy } from "../utils/interfaces";

export class WinByGettingOne implements WinStrategy {
    hasWon = (valueToBeChecked) => valueToBeChecked == 1;
}