import { Logger } from './interfaces';

export class ConsoleLogger implements Logger {
    log = (value) => console.log(value);
}