window.jQuery = window.$ = require('jquery');
window._ = require('lodash');

// require('angular-bootstrap');
require('angular-aria');
require('firebase');
require('angularfire');
require('angular-material');
require('angular-ui-router');
require('angular-animate');
require('angular-cookies');
require('angular-resource');
require('angular-sanitize');
require('domready/ready');
require('lodash');
require('restangular');
require('d3');

module.exports = angular.module('common',
    [
        // 'ui.bootstrap',
        'ngAria',
        'firebase',
        'ngMaterial',
        'ui.router',
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'restangular',
        'd3',
        require('./elements/header').name,
        require('./elements/footer').name,
        require('./constants').name,
        require('./directives').name,
        require('./resources').name,
        require('./services').name
    ]);
