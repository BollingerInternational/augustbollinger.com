'use strict';

module.exports = function codeDirective() {
    return {
        controller: 'CodeCtrl', // Called from CodeController.js
        controllerAs: 'codeCtrl',
        bindToController: true,
        restrict: 'EA',
        scope: true,
        template: require('./code.html')
    };
};