import { Controller, Route, Get } from "tsoa";
import { ProvideSingleton, inject } from "../ioc";
import { ExampleService } from '../services';

@Route("example")
@ProvideSingleton(ExampleController)
export class ExampleController extends Controller {
    @inject(ExampleService) public exampleService!: ExampleService;

    @Get()
    public async example(): Promise<string> {
	return this.exampleService.getAsString();
    }
}
