import express, { Router, Express, json, urlencoded } from 'express';
import { ProvideSingleton } from "../ioc";
import { info } from "./";
import * as swaggerUI from "swagger-ui-express";

@ProvideSingleton(AppHelper)
export class AppHelper {
	private app: Express | undefined;
	private routeRegistration: ((app: Router) => void) | undefined;
	private swaggerDoc: swaggerUI.JsonObject | undefined;
	private listenPort = process.env.PORT ?? 3333;

	public registerRoutes(registrationFunction: (app: Router) => void){
	    this.routeRegistration = registrationFunction;
	    if(this.app){
		this.routeRegistration(this.app);
	    }
	}

	public registerSwaggerDoc(swaggerDoc: swaggerUI.JsonObject){
	    this.swaggerDoc = swaggerDoc;
	    if(this.app){
		this.app.use(["/openapi"], swaggerUI.serve, swaggerUI.setup(swaggerDoc));
	    }
	}

	public start() {
		if (!this.app) {
			this.app = express();
			this.app.use(urlencoded({
				extended: true,
			}));
			this.app.use(json());
			this.app.listen(this.listenPort, () => {
			    info(`Application listening on ${this.listenPort}`);
			});
			if(this.routeRegistration){
			    this.registerRoutes(this.routeRegistration);
			}
			if(this.swaggerDoc){
			    this.registerSwaggerDoc(this.swaggerDoc);
			}
		}
	}
}
