"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LoggingHelper_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingHelper = exports.error = exports.info = exports.warning = exports.debug = void 0;
const ioc_1 = require("../ioc");
const winston_1 = require("winston");
function debug(message) {
    ioc_1.rootContainer.get(LoggingHelper).getLogger().debug(message);
}
exports.debug = debug;
function warning(message) {
    ioc_1.rootContainer.get(LoggingHelper).getLogger().warn(message);
}
exports.warning = warning;
function info(message) {
    ioc_1.rootContainer.get(LoggingHelper).getLogger().info(message);
}
exports.info = info;
function error(message) {
    ioc_1.rootContainer.get(LoggingHelper).getLogger().error(message);
}
exports.error = error;
let LoggingHelper = LoggingHelper_1 = class LoggingHelper {
    getLogger() {
        if (!this.logger) {
            this.logger = (0, winston_1.createLogger)({
                transports: [new winston_1.transports.Console()],
                format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.printf(({ timestamp, level, message }) => {
                    return `[${timestamp}] ${level}: ${message}`;
                }))
            });
        }
        return this.logger;
    }
};
LoggingHelper = LoggingHelper_1 = __decorate([
    (0, ioc_1.ProvideSingleton)(LoggingHelper_1)
], LoggingHelper);
exports.LoggingHelper = LoggingHelper;
