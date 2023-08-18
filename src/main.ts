import { rootContainer } from './ioc';
import { AppHelper } from './helpers';

const appHelper = rootContainer.get(AppHelper);

appHelper.start();
