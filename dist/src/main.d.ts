import { Router } from 'express';
import * as swaggerUI from "swagger-ui-express";
export declare function startApp(routeFunction: ((app: Router) => void | undefined), swaggerDoc: swaggerUI.JsonObject | undefined): void;
