import * as angular from "angular";
import { ContactListController } from "./contact-list.component";
import { IAppConstantsService, IUtilitiesService } from "../app.module";

// Addition of angular-mocks and jasmine references is done on the gulpfile
describe("ContactListController", () => {
    let rootScope: ng.IRootScopeService;
    let httpBackend: ng.IHttpBackendService;
    let q: ng.IQService;
    let ocLazyLoad: oc.ILazyLoad;
    let componentController: ng.IComponentControllerService;
    let AppConstantsService: IAppConstantsService;
    let UtilitiesService: IUtilitiesService;

    // Set up the module
    beforeEach(angular.mock.module("app"));

    beforeEach(inject((_$rootScope_, _$httpBackend_, _$q_, _$componentController_, _$ocLazyLoad_, _AppConstantsService_, _UtilitiesService_) => {

        // Update ui
        rootScope = _$rootScope_;

        // Set up the mock http service responses
        httpBackend = _$httpBackend_;

        // Manage fake promises
        q = _$q_;

        // The $componentController service is used to create instances of controllers
        componentController = _$componentController_;

        // ocLazyLoad service
        ocLazyLoad = _$ocLazyLoad_;

        AppConstantsService = _AppConstantsService_;
        UtilitiesService = _UtilitiesService_;
    }));

    afterEach(() => {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it("controller.contacts is not undefined after $onInit", () => {
        let controller = <ContactListController>componentController("contactList", null, null);
        controller.$onInit();
        expect(controller.contacts).not.toBeUndefined("controller.contacts is undefined...");
    });

    it("controller.contacts is not null after $onInit", () => {
        let controller = <ContactListController>componentController("contactList", null, null);
        controller.$onInit();
        expect(controller.contacts).not.toBeNull("controller.contacts is null...");
    });

    it("controller.isLoadingData is false after $onInit", () => {
        let controller = <ContactListController>componentController("contactList", null, null);
        spyOn(ocLazyLoad, "load").and.callFake(() => {
            let deferred = q.defer();
            deferred.resolve();
            return deferred.promise;
        });
        controller.$onInit();
        rootScope.$apply();
        expect(controller.isLoadingData).toBeFalsy("isLoadingData is true after the loading...");
    });

    it("controller.shouldRetry is false after $onInit", () => {
        let controller = <ContactListController>componentController("contactList", null, null);
        spyOn(ocLazyLoad, "load").and.callFake(() => {
            let deferred = q.defer();
            deferred.resolve();
            return deferred.promise;
        });
        controller.$onInit();
        rootScope.$apply();
        expect(controller.shouldRetry).toBeFalsy("shouldRetry is true after the loading...");
    });

    it("controller.showData is false after $onInit", () => {
        let controller = <ContactListController>componentController("contactList", null, null);
        spyOn(ocLazyLoad, "load").and.callFake(() => {
            let deferred = q.defer();
            deferred.resolve();
            return deferred.promise;
        });
        controller.$onInit();
        rootScope.$apply();
        expect(controller.showData).toBeTruthy("showData is false after the loading...");
    });
});
