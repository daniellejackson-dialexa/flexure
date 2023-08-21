"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startApp = void 0;
const ioc_1 = require("./ioc");
const helpers_1 = require("./helpers");
function startApp(routeFunction, swaggerDoc) {
    (0, helpers_1.info)("\n________ ___       _______      ___    ___ ___  ___  ________  _______  \n" +
        "|\\  _____\\\\  \\     |\\  ___ \\    |\\  \\  /  /|\\  \\|\\  \\|\\   __  \\|\\  ___ \\     \n" +
        "\\ \\  \\__/\\ \\  \\    \\ \\   __/|   \\ \\  \\/  / | \\  \\\\\\  \\ \\  \\|\\  \\ \\   __/|    \n" +
        " \\ \\   __\\\\ \\  \\    \\ \\  \\_|/__  \\ \\    / / \\ \\  \\\\\\  \\ \\   _  _\\ \\  \\_|/__  \n" +
        "  \\ \\  \\_| \\ \\  \\____\\ \\  \\_|\\ \\  /     \\/   \\ \\  \\\\\\  \\ \\  \\\\  \\\\ \\  \\_|\\ \\ \n" +
        "   \\ \\__\\   \\ \\_______\\ \\_______\\/  /\\   \\    \\ \\_______\\ \\__\\\\ _\\\\ \\_______\\\n" +
        "    \\|__|    \\|_______|\\|_______/__/ /\\ __\\    \\|_______|\\|__|\\|__|\\|_______|\n" +
        "                                |__|/ \\|__|                                 \n");
    const appHelper = ioc_1.rootContainer.get(helpers_1.AppHelper);
    if (routeFunction) {
        appHelper.registerRoutes(routeFunction);
    }
    if (swaggerDoc) {
        appHelper.registerSwaggerDoc(swaggerDoc);
    }
    appHelper.start();
}
exports.startApp = startApp;
