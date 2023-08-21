import { rootContainer } from './ioc';
import { AppHelper, info } from './helpers';
import { Router } from 'express';
import * as swaggerUI from "swagger-ui-express";

export function startApp(routeFunction: ((app: Router) => void | undefined), swaggerDoc: swaggerUI.JsonObject | undefined) {
	info("\n________ ___       _______      ___    ___ ___  ___  ________  _______  \n" +
		"|\\  _____\\\\  \\     |\\  ___ \\    |\\  \\  /  /|\\  \\|\\  \\|\\   __  \\|\\  ___ \\     \n" +
		"\\ \\  \\__/\\ \\  \\    \\ \\   __/|   \\ \\  \\/  / | \\  \\\\\\  \\ \\  \\|\\  \\ \\   __/|    \n" +
		" \\ \\   __\\\\ \\  \\    \\ \\  \\_|/__  \\ \\    / / \\ \\  \\\\\\  \\ \\   _  _\\ \\  \\_|/__  \n" +
		"  \\ \\  \\_| \\ \\  \\____\\ \\  \\_|\\ \\  /     \\/   \\ \\  \\\\\\  \\ \\  \\\\  \\\\ \\  \\_|\\ \\ \n" +
		"   \\ \\__\\   \\ \\_______\\ \\_______\\/  /\\   \\    \\ \\_______\\ \\__\\\\ _\\\\ \\_______\\\n" +
		"    \\|__|    \\|_______|\\|_______/__/ /\\ __\\    \\|_______|\\|__|\\|__|\\|_______|\n" +
		"                                |__|/ \\|__|                                 \n");

	const appHelper = rootContainer.get(AppHelper);
	
	if(routeFunction){
		appHelper.registerRoutes(routeFunction);
	}
	if(swaggerDoc){
		appHelper.registerSwaggerDoc(swaggerDoc);
	}
	appHelper.start();
}
