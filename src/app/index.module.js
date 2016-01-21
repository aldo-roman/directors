/// <reference path='../../.tmp/typings/tsd.d.ts' />
var index_config_1 = require('./index.config');
var index_route_1 = require('./index.route');
var index_run_1 = require('./index.run');
var director_controller_index_1 = require('./components/director/director.controller.index');
var director_controller_detail_1 = require('./components/director/director.controller.detail');
var property_directive_1 = require('./components/director/property.directive');
var directors;
(function (directors) {
    'use strict';
    angular.module('directors', ['ngAnimate', 'ngResource', 'ui.router', 'ngMaterial', 'md.data.table'])
        .config(index_config_1.config)
        .config(index_route_1.routerConfig)
        .run(index_run_1.runBlock)
        .controller('DirectorIndexController', director_controller_index_1.DirectorIndexController)
        .controller('DirectorDetailController', director_controller_detail_1.DirectorDetailController)
        .directive('property', property_directive_1.PropertyDirective.Factory);
})(directors || (directors = {}));
//# sourceMappingURL=index.module.js.map