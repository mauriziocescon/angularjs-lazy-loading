import * as angular from 'angular';

import { contactList } from './contact-list/contact-list.module';

export * from './contact-list/contact-list.module';

const lazyModule = angular.module('lazy', [contactList]);

export const lazy = lazyModule.name;
