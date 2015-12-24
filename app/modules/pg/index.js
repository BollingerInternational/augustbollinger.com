'use strict';
// Pg Samples View
module.exports = angular.module('modules.pg', [])
    .directive('pgView', require('./pgDirective'))
    .controller('PgCtrl', require('./PgController'))
    .config(require('./pgRoutes'));