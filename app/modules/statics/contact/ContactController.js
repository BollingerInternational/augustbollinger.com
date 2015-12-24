'use strict';

function ContactCtrl($scope) {
    $scope.contactVar = 'This is an example of a sub-module.';
}

ContactCtrl.$inject = ['$scope'];
module.exports = ContactCtrl;