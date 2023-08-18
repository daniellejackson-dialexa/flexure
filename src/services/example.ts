import { ProvideSingleton, inject } from "../ioc";
import { ExampleRepository } from '../repositories';

@ProvideSingleton(ExampleService)
export class ExampleService {
    @inject(ExampleRepository) public exampleRepository!: ExampleRepository;

    public getAsString(): string {
	return this.exampleRepository.getAll().join(' ');
    }
}
