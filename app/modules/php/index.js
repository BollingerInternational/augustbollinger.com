'use strict';
// Php Samples View
module.exports = angular.module('modules.php', [])
    .directive('phpView', require('./phpDirective'))
    .controller('PhpCtrl', require('./PhpController'))
    .config(require('./phpRoutes'));