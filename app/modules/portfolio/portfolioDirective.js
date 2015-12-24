'use strict';

module.exports = function portfolioDirective() {
    return {
        controller: 'PortfolioCtrl', // Called from PortfolioController.js
        controllerAs: 'portfolioCtrl',
        bindToController: true,
        restrict: 'EA',
        scope: true,
        template: require('./portfolio.html')
    };
};