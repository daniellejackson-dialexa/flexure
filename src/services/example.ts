import { ProvideSingleton, LazyInject } from "../ioc";
import { ExampleRepository } from '../repositories';

@ProvideSingleton(ExampleService)
export class ExampleService {
    @LazyInject(ExampleRepository) private exampleRepository!: ExampleRepository;

    public getAsString(): string {
	return this.exampleRepository.getAll().join(' ');
    }
}
