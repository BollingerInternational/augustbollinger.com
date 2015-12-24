'use strict';
// React View
module.exports = angular.module('modules.react', [])
    .directive('reactView', require('./reactDirective'))
    .controller('ReactCtrl', require('./ReactController'))
    .config(require('./reactRoutes'));