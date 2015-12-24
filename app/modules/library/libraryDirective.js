'use strict';

module.exports = function libraryDirective() {
    return {
        controller: 'LibraryCtrl', // Called from LibraryController.js
        controllerAs: 'libraryCtrl',
        bindToController: true,
        restrict: 'EA',
        scope: true,
        template: require('./library.html')
    };
};
