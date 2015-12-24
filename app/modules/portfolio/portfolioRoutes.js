'use strict';

function portfolioRoutes($stateProvider) {

    var portfolio = {
        name: 'portfolio', // state name
        url: '/portfolio', // url path that activates this state
        template: '<div portfolio-view></div>', // generate the Directive "homeView" - when calling the directive in HTML, the name must not be camelCased
        data: {
            moduleClasses: 'statics', // assign a module class to the <body> tag
            pageClasses: 'portfolio', // assign a page-specific class to the <body> tag
            pageTitle: 'Portfolio', // set the title in the <head> section of the index.html file
            pageDescription: 'Front-end portfolio' // meta description in <head>
        }
    };

    $stateProvider.state(portfolio);
}
portfolioRoutes.$inject = ['$stateProvider'];
module.exports = portfolioRoutes;
