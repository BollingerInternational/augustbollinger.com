'use strict';

module.exports = function cssDirective() {
    return {
        controller: 'CssCtrl', // Called from CssController.js
        controllerAs: 'cssCtrl',
        bindToController: true,
        restrict: 'EA',
        scope: true,
        template: require('./css.html')
    };
};