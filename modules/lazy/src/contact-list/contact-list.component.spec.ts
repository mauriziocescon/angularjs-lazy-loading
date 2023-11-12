import * as angular from 'angular';

import * as i18nEn from '../assets/i18n/en.json';

import { ContactListController } from './contact-list.component';

// Addition of angular-mocks and jasmine references is done on the gulpfile
describe('ContactListController', () => {
  let rootScope: ng.IRootScopeService;
  let httpBackend: ng.IHttpBackendService;
  let q: ng.IQService;
  let componentController: ng.IComponentControllerService;

  // Set up the module
  beforeEach(angular.mock.module('lazy', ($provide: ng.auto.IProvideService) => {
    $provide.value('$translate', () => {/* do nothing */
    });
    $provide.value('UIUtilitiesService', () => {/* do nothing */
    });
    $provide.value('UtilitiesService', () => {/* do nothing */
    });
  }));

  beforeEach(inject(($rootScope: ng.IRootScopeService,
                     $httpBackend: ng.IHttpBackendService,
                     $q: ng.IQService,
                     $componentController: ng.IComponentControllerService) => {

    // Update ui
    rootScope = $rootScope;

    // Set up the mock http service responses
    httpBackend = $httpBackend;

    // Manage fake promises
    q = $q;

    // The $componentController service is used to create instances of controllers
    componentController = $componentController;

    // returns a list of i18n strings
    httpBackend.whenGET((url: string) => {
      return url.startsWith('assets/i18n/');
    }).respond((method: string, url: string, data: string, headers: unknown, params?: any) => {
      const response = i18nEn;
      return [200, response, headers, 'ok'];
    });
  }));

  afterEach(() => {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('controller.contacts is not undefined after $onInit', () => {
    const controller = componentController('contactList', {}, null) as ContactListController;
    controller.$onInit();
    expect(controller.contacts).not.toBeUndefined('controller.contacts is undefined...');
  });

  it('controller.contacts is not null after $onInit', () => {
    const controller = componentController('contactList', {}, null) as ContactListController;
    controller.$onInit();
    expect(controller.contacts).not.toBeNull('controller.contacts is null...');
  });
});
