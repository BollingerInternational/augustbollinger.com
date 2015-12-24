'use strict';
// Controller naming conventions should start with an uppercase letter
function HomeCtrl($scope) {
	$scope.testVar = 'Hello from HomeController.js';
}
// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
HomeCtrl.$inject = ['$scope'];
module.exports = HomeCtrl;
