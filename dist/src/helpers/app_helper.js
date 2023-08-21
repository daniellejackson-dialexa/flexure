"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var AppHelper_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppHelper = void 0;
const express_1 = __importStar(require("express"));
const ioc_1 = require("../ioc");
const _1 = require("./");
let AppHelper = AppHelper_1 = class AppHelper {
    constructor() {
        var _a;
        this.listenPort = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3333;
    }
    registerRoutes(registrationFunction) {
        this.routeRegistration = registrationFunction;
        if (this.app) {
            this.routeRegistration(this.app);
        }
    }
    start() {
        if (!this.app) {
            this.app = (0, express_1.default)();
            this.app.use((0, express_1.urlencoded)({
                extended: true,
            }));
            this.app.use((0, express_1.json)());
            this.app.listen(this.listenPort, () => {
                (0, _1.info)(`Application listening on ${this.listenPort}`);
            });
            if (this.routeRegistration) {
                this.routeRegistration(this.app);
            }
        }
    }
};
AppHelper = AppHelper_1 = __decorate([
    (0, ioc_1.ProvideSingleton)(AppHelper_1)
], AppHelper);
exports.AppHelper = AppHelper;
