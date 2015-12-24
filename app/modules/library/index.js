'use strict';
// Library View
module.exports = angular.module('modules.library', [])
    .directive('libraryView', require('./libraryDirective'))
    .controller('LibraryCtrl', require('./LibraryController'))
    .config(require('./libraryRoutes'));