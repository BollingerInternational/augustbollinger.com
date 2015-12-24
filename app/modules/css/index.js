'use strict';
// CSS Samples View
module.exports = angular.module('modules.css', [])
    .directive('cssView', require('./cssDirective'))
    .controller('CssCtrl', require('./CssController'))
    .config(require('./cssRoutes'));