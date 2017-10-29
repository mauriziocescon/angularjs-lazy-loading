export const routingConfigFunc = ($locationProvider: ng.ILocationProvider,
                                  $stateProvider: ng.ui.IStateProvider,
                                  $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
    $stateProvider.state({
        name: "todo-list",
        template: "<todo-list></todo-list>",
        url: "/todo-list",
    });
    $stateProvider.state({
        name: "contact-list",
        template: "<contact-list></contact-list>",
        url: "/contact-list",
    });
    $urlRouterProvider.otherwise("/todo-list");
};

routingConfigFunc.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];
