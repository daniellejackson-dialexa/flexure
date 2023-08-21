import { Logger } from "winston";
export declare function debug(message: string): void;
export declare function warning(message: string): void;
export declare function info(message: string): void;
export declare function error(message: string): void;
export declare class LoggingHelper {
    private logger;
    getLogger(): Logger;
}
