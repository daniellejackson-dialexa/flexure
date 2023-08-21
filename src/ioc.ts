import { Container } from "inversify";
import { buildProviderModule, fluentProvide } from "inversify-binding-decorators";
import getDecorators from "inversify-inject-decorators";
import "reflect-metadata";

export const rootContainer = new Container({ autoBindInjectable: true});

export const ProvideSingleton = (identifier: any) => {
    return fluentProvide(identifier)
    	.inSingletonScope()
	.done();
};

let { lazyInject } = getDecorators(rootContainer);

export const LazyInject = lazyInject;

rootContainer.load(buildProviderModule());
