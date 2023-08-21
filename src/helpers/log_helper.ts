import { ProvideSingleton, rootContainer } from '../ioc';
import { createLogger, transports, format, Logger } from "winston";

export function debug(message: string){
    rootContainer.get(LoggingHelper).getLogger().debug(message);
}

export function warnring(message: string){
    rootContainer.get(LoggingHelper).getLogger().warn(message);
}

export function info(message: string){
    rootContainer.get(LoggingHelper).getLogger().info(message);
}

export function error(message: string){
    rootContainer.get(LoggingHelper).getLogger().error(message);
}

@ProvideSingleton(LoggingHelper)
export class LoggingHelper {
	private logger: Logger | undefined;

	public getLogger(): Logger {
		if (!this.logger) {
			this.logger = createLogger({
				transports: [new transports.Console()],
				format: format.combine(
					format.colorize(),
					format.timestamp(),
					format.printf(({ timestamp, level, message }) => {
						return `[${timestamp}] ${level}: ${message}`;
					}))
			});
		}
		return this.logger;
	}
}
