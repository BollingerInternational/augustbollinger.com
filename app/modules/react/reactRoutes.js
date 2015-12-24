'use strict';

function reactRoutes($stateProvider) {

    var react = {
        name: 'react', // state name
        url: '/react', // url path that activates this state
        template: '<div react-view></div>', // generate the Directive "resumeView" - when calling the directive in HTML, the name must not be camelCased
        data: {
            moduleClasses: 'statics', // assign a module class to the <body> tag
            pageClasses: 'react', // assign a page-specific class to the <body> tag
            pageTitle: 'React', // set the title in the <head> section of the index.html file
            pageDescription: 'Examples of ReactJS' // meta description in <head>
        }
    };

    $stateProvider.state(react);
}
reactRoutes.$inject = ['$stateProvider'];
module.exports = reactRoutes;
