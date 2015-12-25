'use strict';
// Controller naming conventions should start with an uppercase letter
function MainCtrl($rootScope, $scope) {
    $scope.test = null;
    var d = new Date();
    $scope.thisyear = d.getFullYear();
    console.log('Up and running!');
}
// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
MainCtrl.$inject = ['$rootScope', '$scope'];
module.exports = MainCtrl;
