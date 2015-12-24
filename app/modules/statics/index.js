'use strict';

module.exports = angular.module('modules.statics', [
        require('./about').name,
        require('./contact').name
    ])
    .config(require('./staticsRoutes'))
    .controller('StaticsCtrl', require('./StaticsController'));