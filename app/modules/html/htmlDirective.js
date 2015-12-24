'use strict';

module.exports = function htmlDirective() {
    return {
        controller: 'HtmlCtrl', // Called from HtmlController.js
        controllerAs: 'htmlCtrl',
        bindToController: true,
        restrict: 'EA',
        scope: true,
        template: require('./html.html')
    };
};