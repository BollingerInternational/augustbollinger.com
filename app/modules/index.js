'use strict';
module.exports = angular.module('modules', [
    require('./code').name,
    require('./css').name,
    require('./home').name,
    require('./html').name,
    require('./js').name,
    require('./library').name,
    require('./pg').name,
    require('./php').name,
    require('./portfolio').name,
    require('./resume').name,
    require('./statics').name // Used for static content pages like "About", "Privacy Policy", "404", etc.
])
.controller('MainCtrl', require('./MainController'));
