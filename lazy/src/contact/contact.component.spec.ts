import * as angular from "angular";
import "jquery";
import "angular";
import "angular-animate";
import "angular-aria";
import "angular-messages";
import "angular-mocks";
import "angular-sanitize";
import {ContactController} from "./contact.component";
import {Contact} from "./contact.model";

// Addition of angular-mocks and jasmine references is done on the gulpfile
describe("ContactController", () => {
	let httpBackend: ng.IHttpBackendService;
	let componentController: ng.IComponentControllerService;

	// Set up the module
	beforeEach(angular.mock.module("lazy"));

	beforeEach(inject((_$httpBackend_, _$componentController_) => {

		// Set up the mock http service responses
		httpBackend = _$httpBackend_;

		// The $componentController service is used to create instances of controllers
		componentController = _$componentController_;
	}));

	afterEach(() => {
		httpBackend.verifyNoOutstandingExpectation();
		httpBackend.verifyNoOutstandingRequest();
	});

	it("controller.contact is not undefined after $onInit", () => {
		let contact = new Contact("face", "Desc", "Note");
		let controller = <ContactController>componentController("contact", null, contact);
		controller.$onInit();
		expect(controller.contact).not.toBeUndefined("controller.contact is undefined...");
	});

	it("controller.contact is not null after $onInit", () => {
		let contact = new Contact("face", "Desc", "Note");
		let controller = <ContactController>componentController("contact", null, contact);
		controller.$onInit();
		expect(controller.contact).not.toBeNull("controller.contact is null...");
	});
});