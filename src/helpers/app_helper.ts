import express, { Express, json, urlencoded } from 'express';
import { ProvideSingleton } from "../ioc";
import { info } from "./";

@ProvideSingleton(AppHelper)
export class AppHelper {
	private app: Express | undefined;
	private listenPort = process.env.PORT ?? 3333;

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
			import("../generated/routes").then(routes => {
			    routes.RegisterRoutes(this.app);
			});
		}
	}
}
