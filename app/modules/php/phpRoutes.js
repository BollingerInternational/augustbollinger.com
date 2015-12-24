'use strict';

function phpRoutes($stateProvider) {

    var php = {
        name: 'php', // state name
        url: '/php', // url path that activates this state
        template: '<div php-view></div>', // generate the Directive "phpView" - when calling the directive in HTML, the name must not be camelCased
        data: {
            moduleClasses: 'statics', // assign a module class to the <body> tag
            pageClasses: 'php', // assign a page-specific class to the <body> tag
            pageTitle: 'Php Samples', // set the title in the <head> section of the index.html file
            pageDescription: 'Php Samples' // meta description in <head>
        }
    };

    $stateProvider.state(php);
}
phpRoutes.$inject = ['$stateProvider'];
module.exports = phpRoutes;
