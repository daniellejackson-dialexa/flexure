"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppHelper = exports.LoggingHelper = exports.error = exports.warning = exports.debug = exports.info = exports.startApp = exports.ProvideSingleton = exports.LazyInject = exports.rootContainer = void 0;
var ioc_1 = require("./src/ioc");
Object.defineProperty(exports, "rootContainer", { enumerable: true, get: function () { return ioc_1.rootContainer; } });
Object.defineProperty(exports, "LazyInject", { enumerable: true, get: function () { return ioc_1.LazyInject; } });
Object.defineProperty(exports, "ProvideSingleton", { enumerable: true, get: function () { return ioc_1.ProvideSingleton; } });
var main_1 = require("./src/main");
Object.defineProperty(exports, "startApp", { enumerable: true, get: function () { return main_1.startApp; } });
var helpers_1 = require("./src/helpers");
Object.defineProperty(exports, "info", { enumerable: true, get: function () { return helpers_1.info; } });
Object.defineProperty(exports, "debug", { enumerable: true, get: function () { return helpers_1.debug; } });
Object.defineProperty(exports, "warning", { enumerable: true, get: function () { return helpers_1.warning; } });
Object.defineProperty(exports, "error", { enumerable: true, get: function () { return helpers_1.error; } });
Object.defineProperty(exports, "LoggingHelper", { enumerable: true, get: function () { return helpers_1.LoggingHelper; } });
Object.defineProperty(exports, "AppHelper", { enumerable: true, get: function () { return helpers_1.AppHelper; } });