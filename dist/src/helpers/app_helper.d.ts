import { Router } from 'express';
export declare class AppHelper {
    private app;
    private routeRegistration;
    private listenPort;
    registerRoutes(registrationFunction: (app: Router) => void): void;
    start(): void;
}
