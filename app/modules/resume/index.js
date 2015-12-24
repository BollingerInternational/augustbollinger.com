'use strict';
// Resume View
module.exports = angular.module('modules.resume', [])
    .directive('resumeView', require('./resumeDirective'))
    .controller('ResumeCtrl', require('./ResumeController'))
    .config(require('./resumeRoutes'));