import { Router } from 'express';
import * as swaggerUI from "swagger-ui-express";
export declare class AppHelper {
    private app;
    private routeRegistration;
    private swaggerDoc;
    private listenPort;
    registerRoutes(registrationFunction: (app: Router) => void): void;
    registerSwaggerDoc(swaggerDoc: swaggerUI.JsonObject): void;
    start(): void;
}
