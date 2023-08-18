import express, { Express, json, urlencoded } from 'express';
import { RegisterRoutes } from "../generated/routes";
import { ProvideSingleton } from "../ioc";

@ProvideSingleton(AppHelper)
export class AppHelper {
	private app: Express | undefined;

	public start() {
		if (!this.app) {
			this.app = express();
			this.app.use(urlencoded({
				extended: true,
			}));
			this.app.use(json());
			this.app.listen(process.env.PORT ?? 3333, () => {
			});
			RegisterRoutes(this.app);
		}
	}
}
