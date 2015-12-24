'use strict';

module.exports = function pgDirective() {
    return {
        controller: 'PgCtrl', // Called from PgController.js
        controllerAs: 'pgCtrl',
        bindToController: true,
        restrict: 'EA',
        scope: true,
        template: require('./pg.html')
    };
};