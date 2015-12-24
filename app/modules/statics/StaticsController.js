'use strict';

function StaticsCtrl($scope) {
    $scope.childModulesInheritThis = 'This text is inherited from the About page\'s parent scope (StaticsCtrl).'; // child modules can inherit this
}

StaticsCtrl.$inject = ['$scope'];
module.exports = StaticsCtrl;