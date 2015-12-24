// This config file does not define any routes.
// For module-level route definitions, use the *Routes.js files found in the module folders.

'use strict';

function appConfig($urlRouterProvider, $locationProvider, $mdThemingProvider, $mdIconProvider) {

    // Material Design Theme Configuration
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange');

    // Material Design Icon Provider for FontAwesome
    $mdIconProvider.fontSet('fa', 'fontawesome');

    // Add hashbang prefix for SEO and HTML5 mode to remove #! from the URL.
    // Html5 mode requires server-side configuration. See http://bit.ly/1qLuJ0v
    $locationProvider.html5Mode(true).hashPrefix('!');

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');
}
appConfig.$inject = ['$urlRouterProvider', '$locationProvider', '$mdThemingProvider', '$mdIconProvider'];
module.exports = appConfig;
