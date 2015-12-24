'use strict';
// About View
module.exports = angular.module('modules.statics.about', [])
    .directive('aboutView', require('./aboutDirective'))
    .controller('AboutCtrl', require('./AboutController'));