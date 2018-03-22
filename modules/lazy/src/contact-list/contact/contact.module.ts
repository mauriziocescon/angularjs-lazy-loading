import * as angular from 'angular';

import { ContactComponent } from './contact.component';
import ContactService from './contact.service';

export * from './contact.model';
export * from './contact.service';

export const contact = angular.module('lazy.contact', [])
  .service('ContactService', ContactService)
  .component('contact', ContactComponent)
  .name;
