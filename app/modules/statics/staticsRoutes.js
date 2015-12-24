'use strict';

function staticsRoutes($stateProvider) {

    var statics = {
        name: 'statics',
        abstract: true,  // This makes it so that the url for this route doesn't actually resolve
        url: '/statics',
        template: '<div ui-view></div>', // This injects a new ui-view that the about page directive is injected into
        controller: 'StaticsCtrl'
    };

    var about = {
        name: 'statics.about',
        url: '^/about', // The ^ character makes this url override the parent url
        template: '<div about-view></div>',
        data: {
            moduleClasses: 'statics',
            pageClasses: 'about',
            pageTitle: 'About',
            pageDescription: 'Some description.'
        }
    };

    var contact = {
        name: 'statics.contact',
        url: '^/contact', // The ^ character makes this url override the parent url
        template: '<div contact-view></div>',
        data: {
            moduleClasses: 'statics',
            pageClasses: 'contact',
            pageTitle: 'Contact',
            pageDescription: 'Contact Me'
        }
    };

    $stateProvider.state(statics);
    $stateProvider.state(about);
    $stateProvider.state(contact);

}

staticsRoutes.$inject = ['$stateProvider'];
module.exports = staticsRoutes;