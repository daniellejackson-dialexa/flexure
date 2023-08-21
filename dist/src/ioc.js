"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LazyInject = exports.ProvideSingleton = exports.rootContainer = void 0;
const inversify_1 = require("inversify");
const inversify_binding_decorators_1 = require("inversify-binding-decorators");
const inversify_inject_decorators_1 = __importDefault(require("inversify-inject-decorators"));
require("reflect-metadata");
exports.rootContainer = new inversify_1.Container({ autoBindInjectable: true });
const ProvideSingleton = (identifier) => {
    return (0, inversify_binding_decorators_1.fluentProvide)(identifier)
        .inSingletonScope()
        .done();
};
exports.ProvideSingleton = ProvideSingleton;
let { lazyInject } = (0, inversify_inject_decorators_1.default)(exports.rootContainer);
exports.LazyInject = lazyInject;
exports.rootContainer.load((0, inversify_binding_decorators_1.buildProviderModule)());
