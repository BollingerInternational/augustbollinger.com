'use strict';
// Html Samples View
module.exports = angular.module('modules.html', [])
    .directive('htmlView', require('./htmlDirective'))
    .controller('HtmlCtrl', require('./HtmlController'))
    .config(require('./htmlRoutes'));