import { Aurelia, PLATFORM } from "aurelia-framework";

import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';

declare const __DEBUG__: boolean; // This is defined by Webpack build

export function configure(aurelia: Aurelia) {
  aurelia.use.standardConfiguration();

  if (__DEBUG__) {
    aurelia.use.developmentLogging();
  }

  aurelia.start()
    .then(() => aurelia.setRoot(PLATFORM.moduleName("app")));
}
