import { Logger } from '../utils/interfaces';

export class ConsoleLogger implements Logger {
    log = (value) => console.log(value);
}