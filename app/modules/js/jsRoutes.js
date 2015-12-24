'use strict';

function jsRoutes($stateProvider) {

    var js = {
        name: 'js', // state name
        url: '/js', // url path that activates this state
        template: '<div js-view></div>', // generate the Directive "jsView" - when calling the directive in HTML, the name must not be camelCased
        data: {
            moduleClasses: 'statics', // assign a module class to the <body> tag
            pageClasses: 'js', // assign a page-specific class to the <body> tag
            pageTitle: 'JavaScripts Samples', // set the title in the <head> section of the index.html file
            pageDescription: 'My JavaScript samples' // meta description in <head>
        }
    };

    $stateProvider.state(js);
}
jsRoutes.$inject = ['$stateProvider'];
module.exports = jsRoutes;
