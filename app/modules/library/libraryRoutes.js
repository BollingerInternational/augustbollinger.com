'use strict';

function libraryRoutes($stateProvider) {

    var library = {
        name: 'library', // state name
        url: '/library', // url path that activates this state
        template: '<div library-view></div>', // generate the Directive "libraryView" - when calling the directive in HTML, the name must not be camelCased
        data: {
            moduleClasses: 'statics', // assign a module class to the <body> tag
            pageClasses: 'library', // assign a page-specific class to the <body> tag
            pageTitle: 'My Library', // set the title in the <head> section of the index.html file
            pageDescription: 'My library' // meta description in <head>
        }
    };

    $stateProvider.state(library);
}
libraryRoutes.$inject = ['$stateProvider'];
module.exports = libraryRoutes;
