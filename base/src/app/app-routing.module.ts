export const routingConfigFunc = ($locationProvider: ng.ILocationProvider, $stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider.state({
        name: "todo-list",
        url: "/todo-list",
        template: "<todo-list></todo-list>"
    });
    $stateProvider.state({
        name: "contact-list",
        url: "/contact-list",
        template: "<contact-list></contact-list>"
    });
    $urlRouterProvider.otherwise("/todo-list");
};

routingConfigFunc.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];
