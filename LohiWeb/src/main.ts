import { Aurelia, PLATFORM } from 'aurelia-framework';
import { initialState } from './shared/state/state';

import 'bootstrap/dist/css/bootstrap.css';
import 'nprogress/nprogress.css';
import './styles/styles.css';

declare const __DEBUG__: boolean; // This is defined by Webpack build

export function configure(aurelia: Aurelia) {
  aurelia.use.standardConfiguration();

  if (__DEBUG__) {
    aurelia.use.developmentLogging();
  }
  aurelia.use.plugin(PLATFORM.moduleName('aurelia-store'), { 
    initialState,
    history: {
      limit: 5
    } 
  });

  aurelia.start()
    .then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
