import { Container } from "inversify";
import "reflect-metadata";
export declare const rootContainer: Container;
export declare const ProvideSingleton: (identifier: any) => (target: any) => any;
export declare const LazyInject: (serviceIdentifier: string | symbol | import("inversify/lib/interfaces/interfaces").interfaces.Newable<any> | import("inversify/lib/interfaces/interfaces").interfaces.Abstract<any>) => (proto: any, key: string) => void;
