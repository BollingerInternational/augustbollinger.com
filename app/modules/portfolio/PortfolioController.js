'use strict';
// Controller naming conventions should start with an uppercase letter
function PortfolioCtrl ($scope) {
    $scope.testVar = 'Hello from PortfolioController.js';
    
    $scope.urls = [
        {
            url: 'http://www.chaytonfalke.com',
            name: 'Chayton Falke',
            desc: ''
        },{
            url: 'http://tinyurl.com/chaytonfalke',
            name: 'Chayton Falke YouTube Channel',
            desc: 'Instructional videos with additional UI and D3 Data Visualizations of proprietary tools with animations.'
        },{
            url: 'http://pgstrains.ocnova.com',
            name: 'PapaGanja',
            desc: ''
        },{
            url: 'http://www.augustbollinger.com/sencha/animator',
            name: 'The Holley Group',
            desc: 'This one takes a bit to load and has no spinner but it showcases a nice 100% javascript animation.'
        },{
            url: 'http://www.citizenhawk.com',
            name: 'CitizenHawk, Inc.',
            desc: ''
        },{
            url: 'http://www.soapcreativegroup.com',
            name: 'Soap Creative Group',
            desc: ''
        },{
            url: 'http://www.newportwineandfood.com/',
            name: 'Newport Beach Wine & Food Festival',
            desc: ''
        },{
            url: 'http://econoair.com/',
            name: 'Econo Air',
            desc: ''
        },{
            url: 'http://www.aisinsurance.com',
            name: 'AIS Insurance',
            desc: ''
        },{
            url: 'http://www.shield-clothing.com',
            name: 'Shield Clothing',
            desc: ''
        },{
            url: 'http://www.mulberry.com',
            name: 'Mulberry',
            desc: ''
        },{
            url: 'http://www.tiletac.com',
            name: 'TileTac',
            desc: ''
        },{
            url: 'http://www.staddus.com',
            name: 'Staddus',
            desc: ''
        },{
            url: 'http://www.lakintire.com',
            name: 'Lakin Tire',
            desc: ''
        },{
            url: 'http://nowitcounts.com/',
            name: 'Complete Senior/Now It Counts',
            desc: ''
        }
    ];
}
// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
PortfolioCtrl.$inject = ['$scope'];
module.exports = PortfolioCtrl;
