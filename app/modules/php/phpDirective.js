'use strict';

module.exports = function phpDirective() {
    return {
        controller: 'PhpCtrl', // Called from PhpController.js
        controllerAs: 'phpCtrl',
        bindToController: true,
        restrict: 'EA',
        scope: true,
        template: require('./php.html')
    };
};