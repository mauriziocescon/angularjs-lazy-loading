import template from './app.component.html';
import './app.component.scss';

export default class AppController {
  public static $inject = [];

  constructor() {
    // do nothing
  }

  public $onInit(): void {
    // do nothing
  }

  public $onDestroy(): void {
    // do nothing
  }
}

export const AppComponent: ng.IComponentOptions = {
  controller: AppController,
  template: () => {
    return template;
  },
};
