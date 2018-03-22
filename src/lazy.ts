import * as angular from 'angular';

import { lazy } from 'lazy';

export const lazyModules = angular.module('lazy-modules', [lazy])
  .name;
