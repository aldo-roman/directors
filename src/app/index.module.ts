/// <reference path='../../.tmp/typings/tsd.d.ts' />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { DirectorIndexController } from './components/director/director.controller.index';
import { DirectorDetailController } from './components/director/director.controller.detail';
import { PropertyDirective } from './components/director/property.directive';

module directors {
    'use strict';

    angular.module('directors', ['ngAnimate', 'ngResource', 'ui.router', 'ngMaterial', 'md.data.table'])
        .config(config)
        .config(routerConfig)
        .run(runBlock)
        .controller('DirectorIndexController', DirectorIndexController)
        .controller('DirectorDetailController', DirectorDetailController)
        .directive('property', PropertyDirective.Factory);
}
