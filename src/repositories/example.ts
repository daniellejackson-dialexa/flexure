import { ProvideSingleton } from "../ioc";

@ProvideSingleton(ExampleRepository)
export class ExampleRepository{
   public getAll(): Array<String> {
   	return ["No",
	    "but",
	    "really",
	    "the",
	    "Mototrola",
	    "68k",
	    "is",
	    "the",
	    "best",
	    "CPU",
	    "ever",
	    "created."]
   }
}
