import { Logger } from '../shared/shared.module';

import {
  IAppLanguageService,
} from './services/services.module';

export const servicesSetupFunc = ($translateService: ng.translate.ITranslateService,
                                  AppLanguageService: IAppLanguageService) => {
  // setup services
  // Logger.log('ANGULAR CORE OK  ' + UtilitiesService.getNow().toISOString());
  AppLanguageService.start();

  // set language
  $translateService.use(AppLanguageService.getLanguageId());
};

servicesSetupFunc.$inject = ['$translate', 'AppLanguageService'];
