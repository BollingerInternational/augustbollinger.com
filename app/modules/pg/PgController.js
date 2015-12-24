'use strict';
// Controller naming conventions should start with an uppercase letter
function PgCtrl($scope) {
    $scope.testVar = 'Hello from PgController.js';
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
PgCtrl.$inject = ['$scope'];
module.exports = PgCtrl;