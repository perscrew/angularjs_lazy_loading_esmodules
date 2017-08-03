import angular from 'angular';

import {home} from './home';

export const homeModule = 'homeModule';

angular.module(homeModule, []).component('home', home);
