import { Aurelia } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  router: Router | undefined;

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: PLATFORM.moduleName('./views/welcome-view'), nav: true, title: 'Welcome' },
      { route: 'map', name: 'map', moduleId: PLATFORM.moduleName('./views/map-view'), nav: true, title: 'Map' },
      { route: 'grid', name: 'grid', moduleId: PLATFORM.moduleName('./views/grid-view'), nav: true, title: 'Grid' },
    ]);
  }
}