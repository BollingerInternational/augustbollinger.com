'use strict';
// Controller naming conventions should start with an uppercase letter
function PhpCtrl($scope) {
    $scope.testVar = 'Hello from PhpController.js';
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
PhpCtrl.$inject = ['$scope'];
module.exports = PhpCtrl;