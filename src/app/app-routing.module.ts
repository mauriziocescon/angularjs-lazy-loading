export const routingConfigFunc = ($locationProvider: ng.ILocationProvider,
                                  $stateProvider: ng.ui.IStateProvider,
                                  $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
  $stateProvider.state({
    name: 'todo-list',
    template: '<todo-list></todo-list>',
    url: '/todo-list',
  });
  $stateProvider.state({
    name: 'contact-list',
    resolve: {
      paths: () => {
        return ['lazy.js'];
      },
    },
    template: () => {
      return `
                <component-loader paths='$resolve.paths'>
                    <contact-list></contact-list>
                </component-loader>`;
    },
    url: '/contact-list',
  });
  $urlRouterProvider.otherwise('/todo-list');
};

routingConfigFunc.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
