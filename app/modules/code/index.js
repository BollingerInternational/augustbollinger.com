'use strict';
// Code Samples View
module.exports = angular.module('modules.code', [])
    .directive('codeView', require('./codeDirective'))
    .controller('CodeCtrl', require('./CodeController'))
    .config(require('./codeRoutes'));