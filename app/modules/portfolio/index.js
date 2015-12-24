'use strict';
// Portfolio View
module.exports = angular.module('modules.portfolio', [])
    .directive('portfolioView', require('./portfolioDirective'))
    .controller('PortfolioCtrl', require('./PortfolioController'))
    .config(require('./portfolioRoutes'));