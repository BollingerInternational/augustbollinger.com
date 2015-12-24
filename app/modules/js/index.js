'use strict';
// Js Samples View
module.exports = angular.module('modules.js', [])
    .directive('jsView', require('./jsDirective'))
    .controller('JsCtrl', require('./JsController'))
    .config(require('./jsRoutes'));