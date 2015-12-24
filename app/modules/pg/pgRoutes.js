'use strict';

function pgRoutes($stateProvider) {

    var pg = {
        name: 'pg', // state name
        url: '/pg', // url path that activates this state
        template: '<div pg-view></div>', // generate the Directive "pgView" - when calling the directive in HTML, the name must not be camelCased
        data: {
            moduleClasses: 'statics', // assign a module class to the <body> tag
            pageClasses: 'pg', // assign a page-specific class to the <body> tag
            pageTitle: 'PapaGanga Website Sample', // set the title in the <head> section of the index.html file
            pageDescription: 'PapaGanga Website Sample' // meta description in <head>
        }
    };

    $stateProvider.state(pg);
}
pgRoutes.$inject = ['$stateProvider'];
module.exports = pgRoutes;
