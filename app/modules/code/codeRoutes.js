'use strict';

function codeRoutes($stateProvider) {

    var code = {
        name: 'code', // state name
        url: '/code', // url path that activates this state
        template: '<div code-view></div>', // generate the Directive "resumeView" - when calling the directive in HTML, the name must not be camelCased
        data: {
            moduleClasses: 'statics', // assign a module class to the <body> tag
            pageClasses: 'code', // assign a page-specific class to the <body> tag
            pageTitle: 'Code Samples', // set the title in the <head> section of the index.html file
            pageDescription: 'My code samples' // meta description in <head>
        }
    };

    $stateProvider.state(code);
}
codeRoutes.$inject = ['$stateProvider'];
module.exports = codeRoutes;
