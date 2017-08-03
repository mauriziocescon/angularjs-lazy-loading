export const appConfigFunc = ($ocLazyLoadProvider: oc.ILazyLoadProvider,
                              $translateProvider: ng.translate.ITranslateProvider,
                              tmhDynamicLocaleProvider: ng.dynamicLocale.tmhDynamicLocaleProvider,
                              $mdIconProvider: ng.material.IIconProvider,
                              $mdThemingProvider: ng.material.IThemingProvider) => {
    $ocLazyLoadProvider.config({
        debug: true,
    });

    $translateProvider.useStaticFilesLoader({
        prefix: "assets/i18n/",
        suffix: ".json",
    });

    tmhDynamicLocaleProvider.localeLocationPattern("lib/angular-locale_{{locale}}.js");

    $mdIconProvider
        .defaultFontSet("material-icons");

    $mdThemingProvider.theme("default")
        .primaryPalette("blue-grey")
        .accentPalette("pink")
        .warnPalette("red")
        .backgroundPalette("grey");
};

appConfigFunc.$inject = ["$ocLazyLoadProvider", "$translateProvider", "tmhDynamicLocaleProvider", "$mdIconProvider", "$mdThemingProvider"];
