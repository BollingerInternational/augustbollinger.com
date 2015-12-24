'use strict';

module.exports = function resumeDirective() {
    return {
        controller: 'ResumeCtrl', // Called from ResumeController.js
        controllerAs: 'resumeCtrl',
        bindToController: true,
        restrict: 'EA',
        scope: true,
        template: require('./resume.html')
    };
};