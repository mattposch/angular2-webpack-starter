import * as _ from 'lodash';

import * as commonConfig from './config/config.common.json';
import * as devConfig from './config/config.development.json';
import * as testConfig from './config/config.test.json';
import * as prodConfig from './config/config.production.json';

let _config = commonConfig;

if ('production' === ENV) {
  _config = _.merge(_config, prodConfig);
} else if ('test' === ENV) {
  _config = _.merge(_config, testConfig);
} else {
  _config = _.merge(_config, devConfig);
}

export const config = _config;
