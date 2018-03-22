export const appConfigFunc = ($httpProvider: ng.IHttpProvider,
                              $ocLazyLoadProvider: oc.ILazyLoadProvider,
                              $translateProvider: ng.translate.ITranslateProvider,
                              tmhDynamicLocaleProvider: ng.dynamicLocale.tmhDynamicLocaleProvider,
                              $mdIconProvider: ng.material.IIconProvider,
                              $mdThemingProvider: ng.material.IThemingProvider) => {
  $httpProvider.defaults.headers = {
    common: {
      'Content-Type': 'application/json',
    },
  };

  $ocLazyLoadProvider.config({
    debug: true,
  });

  $translateProvider.useStaticFilesLoader({
    prefix: 'assets/i18n/',
    suffix: '.json',
  });
  $translateProvider.preferredLanguage('en');

  tmhDynamicLocaleProvider.localeLocationPattern('locales/angular-locale_{{locale}}.js');

  $mdIconProvider
    .defaultFontSet('material-icons');

  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('pink')
    .warnPalette('red')
    .backgroundPalette('grey');
};

appConfigFunc.$inject = ['$httpProvider', '$ocLazyLoadProvider', '$translateProvider', 'tmhDynamicLocaleProvider', '$mdIconProvider', '$mdThemingProvider'];
