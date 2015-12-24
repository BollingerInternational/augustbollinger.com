'use strict';

function resumeRoutes($stateProvider) {

    var resume = {
        name: 'resume', // state name
        url: '/resume', // url path that activates this state
        template: '<div resume-view></div>', // generate the Directive "resumeView" - when calling the directive in HTML, the name must not be camelCased
        data: {
            moduleClasses: 'statics', // assign a module class to the <body> tag
            pageClasses: 'resume', // assign a page-specific class to the <body> tag
            pageTitle: 'Resume', // set the title in the <head> section of the index.html file
            pageDescription: 'My resume' // meta description in <head>
        }
    };

    $stateProvider.state(resume);
}
resumeRoutes.$inject = ['$stateProvider'];
module.exports = resumeRoutes;
