'use strict';
// Controller naming conventions should start with an uppercase letter
function JsCtrl($scope) {
    $scope.testVar = 'Hello from JsController.js';
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
JsCtrl.$inject = ['$scope'];
module.exports = JsCtrl;