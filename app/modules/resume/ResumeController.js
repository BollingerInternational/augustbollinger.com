'use strict';
// Controller naming conventions should start with an uppercase letter
function ResumeCtrl($scope) {
    $scope.swell = [
        {desc: 'Designed, developed and implemented proof of concept, platform independent social application layer (User Interface, application/business and data access tiers) based on 3rd party web services from the cloud (Data provider/storage). Including Firebase authentication service. Also seamless content syndication to social sites like Facebook and Twitter, along with comments, ratings, profiles, favorites, user activities, friends, and fans'},
        {desc: 'Designed, developed, and implemented comprehensive Cannabis Strain Location tool that took in user input via UI/UX and displayed instantaneous results including all pertinent data and vendor location/proximity.'},
        desc: 'Responsible for implementation and deployment of 3rdparty e-commerce provider Recurly into CMS platform. Developed necessary back-end applications to communicate, synchronize and update product information with 3rd party APIs, and assigned databases.'},
        {desc: 'Developed high performance consumer facing components based on AWS (Amazon Web Services) utilizing Lambda asynchronous programming and DynamoDB event triggers.'},
        {desc: 'Performed SEO performance tuning and configuration to the Director of SEO specifications.'},
        {desc: 'Developed and deployed miscellaneous projects including Geo-location, 3-way data binding via AngularFire, Google Analytics Content Experiments, dynamic email creation, Webbots, Spiders, Screen Scrapers, Data Harvesting Armadas.'},
        {desc: 'Worked independently with little supervision'},
        {desc: 'Practicing regular and continued self-education'},
        {desc: 'Responsible for the following assets: papaganja.com, surfline.com'},
        {desc: 'Technologies used: Linux, Apache, MySQL, PHP, JavaScript, AWS, S3, DynamoDB, Lambda, Firebase, AngularFire, AngularJS, NodeJS, Express, Phantom, Casper, Spooky, LoDash, Leaflet, D3, Three.js, Prerender.io, OpenStreetMaps API, Browserify, Gulp, Yeoman, Spin.js, NoSQL, AJAX, REST, LESS, jQuery, HTML, CSS, Design patterns.'}
    ];
    
    $scope.soap = [
        {desc: 'Direct involvement in New Business Development meetings with clients at client locations and onboarding of clients.'},
        {desc: 'Responsible for managing client interactions when building/editing websites to their specifications.'},
        {desc: 'Developed high performance e-commerce solutions utilizing Woo Commerce and Magento.'},
        {desc: 'Designed and Developed custom off-boarding utility that was loaded on a USB fob and delivered in a gift box to client. It contained self-booting UI/UX to manage and traverse all customer assets and information regarding their experience with us.'},
        {desc: 'Designed and developed a customer portal on the company website that allowed direct communication with clients and our customer service department as well as providing clients and account administrators with client data visualizations.'},
        {desc: 'Developed webbots to parse supplier product inventory CSV’s and push updates to client e-commerce websites automated via CRON.'},
        {desc: 'LAMP Stack Administration/Configuration'},
        {desc: 'Technologies used: Linux, Apache, MySQL, PHP, AngularJS, D3.js, WordPress, Magento, PHP, WP Engine, jQuery, BackboneJS, SASS/Compass/Bourbon, HTML, CSS'},
        {desc: 'Work both independently with little supervision and in a team environment'},
        {desc: 'Practicing regular and continued self-education'},
        {desc: 'Responsible for the following assets: aisinnsurance.com, completesenior.com, tiletac.com, shield-clothiing.com, alpha-greek.com, newportwineandfood.com, econoair.com, lakintire.com, mulberry.com, negotiateyourtaxdebt.com, staddus.com'}
    ];
    
    $scope.citizenhawk = [
        {desc: 'Designed, developed and implemented the case management module of the companies HawkNest© Application. It provided a means to persist case data as well as record progress in processes and also provided a private video conferencing solution.'},
        {desc: 'Commissioned a remote LAMP stack and installed NodeJS on it to act as primary solution to harvesting WHOIS data.'},
        {desc: 'Developed a multi-threaded webbot that was able to access up to 2000 SOCKS5 proxy servers simultaneously.'},
        {desc: 'Responsible for the company’s Salesforce.com instance as an administrator.'},
        {desc: 'Developed individual UI/UX for each salesperson via Force.com/Apex that displayed current sales metrics and pipeline via the PHP API.'},
        {desc: 'Responsible for upkeep and commissioning of new hardware, server blades, and multimedia/AV and conference room communication assets and equipment.'},
        {desc: 'Responsible for quarterly report presentation decks.'},
        {desc: 'Worked directly with the CEO in defining new products and strategies.'},
        {desc: 'Developed an application that would parse C-level personnel names and fabricate over 46 most likely email addresses, then run the addresses through a verification phase and return a report of success/failure so that sales personnel could contact targets more efficiently and without paying an expensive finder service.'},
        {desc: 'Developed an application that would take a keyword and search our database of over 125 million .com & .net domains to return a list of matches and WHOIS data for each returned domain as well as traffic data.'},
        {desc: 'Developed a weekly newsletter delivered to CEO and sales personnel before weekly sales meetings. It entailed a scorecard view of sales projections, funnel and closings.'},
        {desc: 'Developed an application that would harvest domain names of sites that contained an image of client assets/logos/trademarks.'},
        {desc: 'Work both independently with little supervision and in a team environment.'},
        {desc: 'Cooperate with Software Engineers, Quality Assurance Engineers, System Administrators, Product Managers and other stakeholders.'},
        {desc: 'Interface with all levels of employees.'},
        {desc: 'Work both independently with little supervision and in a team environment.'},
        {desc: 'Articulate and communicate effectively, both in written and oral formats.'},
        {desc: 'Practicing regular and continued self-education.'},
        {desc: 'Responsible for the following assets: citizenhawk.com, HawkNest, HawkZone, Case Management, Salesforce.com.'},
        {desc: 'Technologies used: Linux, Apache, MySQL, PHP, jQuery, Sencha ExtJS, Sencha Touch, NodeJS, Phantom, Salesforce.com, Force.com, Apex, OpenTok.'},
    ];
    
    $scope.bi = [
        {desc: 'Design/Develop/Implement scalable and maintainable commercial web-based applications.'},
        {desc: 'AWS (Amazon Web Services) resource/system design and implementation'},
        {desc: 'CDN Configuration/Management'},
        {desc: 'Firebase/AngularFire 3 way data binding Application Development'},
        {desc: 'Object Oriented PHP, Object Oriented JavaScript (A little Python, A little Perl)'},
        {desc: 'Develop to web standards (W3C) and for cross-browser compatibility'},
        {desc: 'Develop server-side websites, API\'s, and Web Services (NodeJS, PHP)'},
        {desc: 'Develop singular/multi-threaded webbots, spiders, screen-scrapers (PHP, Phantom, Casper, Spooky)'},
        {desc: 'Commission bots that login, traverse, and harvest secure websites/data'},
        {desc: 'Scaffold/Build/Task Utilities (Yeoman, Grunt, Gulp, Browserify)'},
        {desc: 'Develop with various third-party JavaScript libraries - jQuery, YUI, Dojo, Sencha (ExtJS, Touch), LoDash, etc'},
        {desc: 'Create Data Visualizations - D3 (Graphs, Charts, Bubble, Forced Layout, Donut, Pie, Collision Detection, etc.)'},
        {desc: 'Exceptional hands on experience w/ HTML and CSS.'},
        {desc: 'Model-View-* frameworks (AngularJS, Meteor, React, Backbone, Zend, CodeIgnitor)'},
        {desc: 'CSS preprocessor technology (LESS, SASS, etc.)'},
        {desc: 'Responsive CSS/JavaScript View Frameworks (Bootstrap/Foundation/Material Design & others)'},
        {desc: 'Client-side templating (Handlebars, Jade, Stylus, etc.)'},
        {desc: 'Creating/Processing XML and JSON'},
        {desc: 'Version control systems (Git, Github, BitBucket, etc.) and enhancement tracking systems (JIRA, Bootcamp, etc.)'},
        {desc: 'Adobe CS6 Master Suite Owner (Flash, ActionScript, Flex, Fireworks, Photoshop, Illustrator, etc.)'},
        {desc: 'Create and schedule elaborate CRON processes for automation'},
        {desc: 'WebGL/Three.js for amazing 3D UI and Data Visualizations'},
        {desc: 'Map based web applications tied to Geo-location services (leaflet.js, OpenStreetMaps API, GoogleMaps API)'},
        {desc: 'MySQL - Queries, Joins, Normalization, Referential Integrity, Triggers, Transactions, Stored Procedures.'},
        {desc: 'NoSQL - (MongoDB, DynamoDB)'},
        {desc: 'Mac, Windows, Linux - Installation, Operation, Configuration, Administration'},
        {desc: 'Excellent troubleshooting and problem solving skills'},
        {desc: 'Excellent attention to detail and organization skills'},
        {desc: 'Remote work (10+ years as LAMP/MEAN Remote Server Administrator/Developer)'}
    ];
}
// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
ResumeCtrl.$inject = ['$scope'];
module.exports = ResumeCtrl;
