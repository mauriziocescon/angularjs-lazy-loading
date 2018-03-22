import template from './component-loader.component.html';
import './component-loader.component.scss';

import {
  IUIUtilitiesService,
  IUtilitiesService,
} from '../app.module';
import { Logger } from '../shared/shared.module';

export class ComponentLoaderController {
  public static $inject = ['$ocLazyLoad', '$translate', 'UIUtilitiesService', 'UtilitiesService'];

  public paths!: string[];

  protected busy!: boolean;
  protected downloadSucceed!: boolean;

  constructor(protected ocLazyLoad: oc.ILazyLoad,
              protected translate: ng.translate.ITranslateService,
              protected uiUtilitiesService: IUIUtilitiesService,
              protected utilitiesService: IUtilitiesService) {
  }

  public get isLoadingData(): boolean {
    return this.busy === true;
  }

  public get shouldRetry(): boolean {
    return this.downloadSucceed === false && this.isLoadingData === false;
  }

  public get showData(): boolean {
    return this.isLoadingData === false && this.shouldRetry === false;
  }

  public get showDownload(): boolean {
    return this.shouldRetry || !this.showData;
  }

  public $onInit(): void {
    this.downloadSucceed = false;
    this.loadModule();
  }

  public $onDestroy(): void {
    // do nothing
  }

  public loadModule(): void {
    this.busy = true;

    this.ocLazyLoad.load(this.paths)
      .then(() => {
        this.busy = false;
        this.downloadSucceed = true;
        this.translate(['COMPONENT_LOADER.MODULE_LOADED'])
          .then((translations: any) => {
            this.uiUtilitiesService.toast(translations['COMPONENT_LOADER.MODULE_LOADED']);
          });
      })
      .catch((e) => {
        this.busy = false;
        Logger.warn(e.toString());
        this.uiUtilitiesService.toast(e.toString());
      });
  }
}

export const ComponentLoaderComponent: ng.IComponentOptions = {
  bindings: {
    paths: '<',
  },
  controller: ComponentLoaderController,
  template: () => {
    return template;
  },
  transclude: true,
};
