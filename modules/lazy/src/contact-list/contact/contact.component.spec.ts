import * as angular from "angular";

import * as i18nEn from "../../assets/i18n/en.json";

import { ContactController } from "./contact.component";
import { Contact } from "./contact.model";

// Addition of angular-mocks and jasmine references is done on the gulpfile
describe("ContactController", () => {
    let httpBackend: ng.IHttpBackendService;
    let componentController: ng.IComponentControllerService;

    // Set up the module
    beforeEach(angular.mock.module("lazy"));

    beforeEach(inject(($httpBackend: ng.IHttpBackendService,
                       $componentController: ng.IComponentControllerService) => {

        // Set up the mock http service responses
        httpBackend = $httpBackend;

        // The $componentController service is used to create instances of controllers
        componentController = $componentController;

        // returns a list of i18n strings
        httpBackend.whenGET((url: string) => {
            return url.startsWith("assets/i18n/");
        }).respond((method: string, url: string, data: string, headers: Object, params?: any) => { // tslint:disable-line:ban-types
            const response = i18nEn;
            return [200, response, headers, "ok"];
        });
    }));

    afterEach(() => {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it("controller.contact is not undefined after $onInit", () => {
        const contact = new Contact("face", "Desc", "Note");
        const controller = componentController("contact", {}, {contact}) as ContactController;
        controller.$onInit();
        expect(controller.contact).not.toBeUndefined("controller.contact is undefined...");
    });

    it("controller.contact is not null after $onInit", () => {
        const contact = new Contact("face", "Desc", "Note");
        const controller = componentController("contact", {}, {contact}) as ContactController;
        controller.$onInit();
        expect(controller.contact).not.toBeNull("controller.contact is null...");
    });
});
