import * as angular from "angular";

import { ComponentLoaderController } from "./component-loader.component";

// Addition of angular-mocks and jasmine references is done on the gulpfile
describe("ComponentLoaderController", () => {
    let rootScope: ng.IRootScopeService;
    let httpBackend: ng.IHttpBackendService;
    let q: ng.IQService;
    let componentController: ng.IComponentControllerService;
    let ocLazyLoad: oc.ILazyLoad;

    // Set up the module
    beforeEach(angular.mock.module("app"));

    beforeEach(inject(($rootScope: ng.IRootScopeService,
                       $httpBackend: ng.IHttpBackendService,
                       $q: ng.IQService,
                       $componentController: ng.IComponentControllerService,
                       $ocLazyLoad: oc.ILazyLoad) => {

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

    it("controller.paths is not undefined after $onInit", () => {
        const paths = ["file1.js", "file2.js"];
        const controller = componentController("componentLoader", {}, {paths}) as ComponentLoaderController;
        controller.$onInit();
        expect(controller.paths).not.toBeUndefined("controller.paths is undefined...");
    });

    it("controller.paths is not null after $onInit", () => {
        const paths = ["file1.js", "file2.js"];
        const controller = componentController("componentLoader", {}, {paths}) as ComponentLoaderController;
        controller.$onInit();
        expect(controller.paths).not.toBeNull("controller.paths is null...");
    });

    it("controller.isLoadingData is false after $onInit", () => {
        const paths = ["file1.js", "file2.js"];
        const controller = componentController("componentLoader", {}, {paths}) as ComponentLoaderController;
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
        const paths = ["file1.js", "file2.js"];
        const controller = componentController("componentLoader", {}, {paths}) as ComponentLoaderController;
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
        const paths = ["file1.js", "file2.js"];
        const controller = componentController("componentLoader", {}, {paths}) as ComponentLoaderController;
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
