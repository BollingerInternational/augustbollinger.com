'use strict';

module.exports = function contactDirective() {
    return {
        controller: 'ContactCtrl',
        controllerAs: 'contactCtrl',
        bindToController: true,
        restrict: 'EA',
        scope: true,
        template: require('./contact.html')
    };
};
