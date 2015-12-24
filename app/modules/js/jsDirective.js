'use strict';

module.exports = function jsDirective() {
    return {
        controller: 'JsCtrl', // Called from JsController.js
        controllerAs: 'jsCtrl',
        bindToController: true,
        restrict: 'EA',
        scope: true,
        template: require('./js.html')
    };
};