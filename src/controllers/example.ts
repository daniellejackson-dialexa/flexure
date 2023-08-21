import { Controller, Route, Get } from "tsoa";
import { ProvideSingleton, LazyInject } from "../ioc";
import { ExampleService } from '../services';

@Route("example")
@ProvideSingleton(ExampleController)
export class ExampleController extends Controller {
    @LazyInject(ExampleService) public exampleService!: ExampleService;

    @Get()
    public async example(): Promise<string> {
	return this.exampleService.getAsString();
    }
}
