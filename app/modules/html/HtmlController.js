'use strict';
// Controller naming conventions should start with an uppercase letter
function HtmlCtrl($scope) {
    $scope.testVar = 'Hello from HtmlController.js';
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
HtmlCtrl.$inject = ['$scope'];
module.exports = HtmlCtrl;