import * as angular from "angular";

import { IAppConstantsService, IUtilitiesService } from "../app.module";

import { ContactListController } from "./contact-list.component";

// Addition of angular-mocks and jasmine references is done on the gulpfile
describe("ContactListController", () => {
    let rootScope: ng.IRootScopeService;
    let httpBackend: ng.IHttpBackendService;
    let q: ng.IQService;
    let ocLazyLoad: oc.ILazyLoad;
    let componentController: ng.IComponentControllerService;

    // Set up the module
    beforeEach(angular.mock.module("app"));

    beforeEach(inject(($rootScope, $httpBackend, $q, $componentController, $ocLazyLoad, AppConstantsService, UtilitiesService) => {

        // Update ui
        rootScope = $rootScope;

        // Set up the mock http service responses
        httpBackend = $httpBackend;

        // Manage fake promises
        q = $q;

        // The $componentController service is used to create instances of controllers
        componentController = $componentController;

        // ocLazyLoad service
        ocLazyLoad = $ocLazyLoad;
    }));

    afterEach(() => {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it("controller.contacts is not undefined after $onInit", () => {
        const controller = componentController("contactList", null, null) as ContactListController;
        controller.$onInit();
        expect(controller.contacts).not.toBeUndefined("controller.contacts is undefined...");
    });

    it("controller.contacts is not null after $onInit", () => {
        const controller = componentController("contactList", null, null) as ContactListController;
        controller.$onInit();
        expect(controller.contacts).not.toBeNull("controller.contacts is null...");
    });

    it("controller.isLoadingData is false after $onInit", () => {
        const controller = componentController("contactList", null, null) as ContactListController;
        spyOn(ocLazyLoad, "load").and.callFake(() => {
            const deferred = q.defer();
            deferred.resolve();
            return deferred.promise;
        });
        controller.$onInit();
        rootScope.$apply();
        expect(controller.isLoadingData).toBeFalsy("isLoadingData is true after the loading...");
    });

    it("controller.shouldRetry is false after $onInit", () => {
        const controller = componentController("contactList", null, null) as ContactListController;
        spyOn(ocLazyLoad, "load").and.callFake(() => {
            const deferred = q.defer();
            deferred.resolve();
            return deferred.promise;
        });
        controller.$onInit();
        rootScope.$apply();
        expect(controller.shouldRetry).toBeFalsy("shouldRetry is true after the loading...");
    });

    it("controller.showData is false after $onInit", () => {
        const controller = componentController("contactList", null, null) as ContactListController;
        spyOn(ocLazyLoad, "load").and.callFake(() => {
            const deferred = q.defer();
            deferred.resolve();
            return deferred.promise;
        });
        controller.$onInit();
        rootScope.$apply();
        expect(controller.showData).toBeTruthy("showData is false after the loading...");
    });
});
