'use strict';

function htmlRoutes($stateProvider) {

    var html = {
        name: 'html', // state name
        url: '/html', // url path that activates this state
        template: '<div html-view></div>', // generate the Directive "htmlView" - when calling the directive in HTML, the name must not be camelCased
        data: {
            moduleClasses: 'statics', // assign a module class to the <body> tag
            pageClasses: 'html', // assign a page-specific class to the <body> tag
            pageTitle: 'HTML 5 Samples', // set the title in the <head> section of the index.html file
            pageDescription: 'My HTML5 samples' // meta description in <head>
        }
    };

    $stateProvider.state(html);
}
htmlRoutes.$inject = ['$stateProvider'];
module.exports = htmlRoutes;
