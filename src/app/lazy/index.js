import angular from 'angular';

import {lazy} from './lazy';

export const lazyModule = 'lazy';

angular.module(lazyModule, []).component('lazy', lazy);
