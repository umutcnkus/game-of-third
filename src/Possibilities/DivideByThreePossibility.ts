import { DIVIDER } from "../definitions";
import { Possibility } from "../interfaces";

export class DivideByPossibility implements Possibility {
    isPossible = (value: number) => value % DIVIDER == 0;
}