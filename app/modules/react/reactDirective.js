'use strict';

module.exports = function reactDirective() {
    return {
        controller: 'ReactCtrl', // Called from ReactController.js
        controllerAs: 'reactCtrl',
        bindToController: true,
        restrict: 'EA',
        scope: true,
        template: require('./react.html')
    };
};