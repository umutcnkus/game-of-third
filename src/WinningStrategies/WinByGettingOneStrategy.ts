import { WinStrategy } from "../interfaces";

export class WinByGettingOne implements WinStrategy {
    hasWon = (valueToBeChecked) => valueToBeChecked == 1;
}