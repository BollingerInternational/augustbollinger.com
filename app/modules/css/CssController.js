'use strict';
// Controller naming conventions should start with an uppercase letter
function CssCtrl($scope) {
    $scope.testVar = 'Hello from CSSController.js';
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
CssCtrl.$inject = ['$scope'];
module.exports = CssCtrl;