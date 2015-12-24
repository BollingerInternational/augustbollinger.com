'use strict';

function cssRoutes($stateProvider) {

    var css = {
        name: 'css', // state name
        url: '/css', // url path that activates this state
        template: '<div css-view></div>', // generate the Directive "cssView" - when calling the directive in HTML, the name must not be camelCased
        data: {
            moduleClasses: 'statics', // assign a module class to the <body> tag
            pageClasses: 'css', // assign a page-specific class to the <body> tag
            pageTitle: 'CSS Samples', // set the title in the <head> section of the index.html file
            pageDescription: 'My CSS samples' // meta description in <head>
        }
    };

    $stateProvider.state(css);
}
cssRoutes.$inject = ['$stateProvider'];
module.exports = cssRoutes;
