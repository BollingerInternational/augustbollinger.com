'use strict';
// Contact View
module.exports = angular.module('modules.statics.contact', [])
    .directive('contactView', require('./contactDirective'))
    .controller('ContactCtrl', require('./ContactController'));