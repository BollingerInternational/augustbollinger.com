'use strict';
// Controller naming conventions should start with an uppercase letter
function CodeCtrl($scope) {
    $scope.testVar = 'Hello from CodeController.js';
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
CodeCtrl.$inject = ['$scope'];
module.exports = CodeCtrl;