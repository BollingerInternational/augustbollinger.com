'use strict';
// Controller naming conventions should start with an uppercase letter
function LibraryCtrl($scope, $http) {
    $http({
        method: 'JSONP',
        params: {
            callback: 'JSON_CALLBACK'
        },
        url: 'http://api.compositeanalytics.com/services/v1/cfge/AppleCurrentPrice.php'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.data = response.data;
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('Failure', response);
    });
    $scope.lib = {};
    $scope.lib.angular = [
        {name: 'Responsive Web Design with AngularJS', author: 'Sandeep Kumar Patel', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/8422OS_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'AngularJS Directives', author: 'Alex Vanston', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/0339OS.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Dependency Injection with AngularJS', author: 'Alex Knol', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/6566OS.jpg', bookUrl: '', codeUrl: ''},
        {name: 'ng-book', author: 'Ari Lerner', imgUrl: 'https://www.ng-book.com/images/flatbook-beginners-13.png', bookUrl: 'https://app.box.com/s/7dhaj1a5x4gvil1jfu95rgexqcw1gv2y', codeUrl: 'https://www.dropbox.com/s/0q6dcry1c8r5pqp/code.zip?dl=0'},
        {name: 'AngularJS by Example', author: 'Chandermani', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/3520_AngularJS%20By%20Example.jpg', bookUrl: '', codeUrl: ''},
        {name: 'AngularJS Web Application Development Cookbook', author: 'Matt Frisbie', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/3354OS_B00118_AngularJS%20Web%20Application%20Development%20Cookbook.jpg', bookUrl: '', codeUrl: ''},
        {name: 'AngularJS Web application development Blueprints', author: 'Vinci Rufus', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/5617OS_AngularJS%20Web%20Application%20Development%20Blueprints_Frontcover.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Data-oriented Development with AngularJS', author: 'Manoj Waikar', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/8057OS_Data%20Oriented%20Development%20with%20AngularJS.jpg', bookUrl: '', codeUrl: ''},
        {name: 'AngularJS: Novice to Ninja', author: 'Sandeep Panda', imgUrl: 'https://d2sis3lil8ndrq.cloudfront.net/books/angularjs1_large_3d.png', bookUrl: '', codeUrl: ''},
        {name: 'Mastering Web Application Development With AngularJS', author: 'Pawel Kozlowski, Peter Bacon Darwin', imgUrl: 'http://ecx.images-amazon.com/images/I/51AQSj%2BLbYL._SX404_BO1,204,203,200_.jpg', bookUrl: 'https://www.dropbox.com/s/lsyppz8a01wx8t8/Mastering%20Web%20Application%20Development%20with%20AngularJS%20%5BeBook%5D.pdf?dl=0', codeUrl: 'https://www.dropbox.com/s/vpy6o6po3qvubmx/Mastering%20Web%20Application%20Development%20with%20AngularJS.zip?dl=0'}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.backbone = [
        {name: 'Backbone.js Testing', author: 'Ryan Roemer', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/5248OS.jpg', bookUrl: '', codeUrl: ''},
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.bi = [
        {name: 'Oracle Business Intelligence 11g R1 Cookbook', author: 'Cuneyt Yilmaz', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/6006EN.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Oracle Essbase 11 Development Cookbook', author: 'Jose R. Ruiz', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/3265EN%20Oracle%20Essbase%2011%20Development%20Cookbook.jpg', bookUrl: '', codeUrl: ''},
        {name: 'IBM Cognos Business Intelligence', author: 'Dustin Adkison', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/3562EN_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'IBM Cognos 10 Framework Manager', author: 'Terry Curran', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/5764EN_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Tableau Data Visualization Cookbook', author: 'Ashutosh Nandeshwar', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/9786EN_Tableau%20Data%20Visualization%20Cookbook.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Microsoft System Center 2012 Configuration Manager: Administration Cookbook', author: 'Brian Mason, Greg Ramsey', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/4941EN_Microsoft%20System%20Center%20Configuration%20Manager%202012%20Administration%20Cookbook_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Oracle Data Integrator 11g Cookbook', author: 'Christophe Dupupet et al', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/1742EN.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Getting Started with Citrix XenApp 6', author: 'Guillermo Musumeci', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/1285EN_Getting%20Started%20with%20Citrix%20XenApp%206cov_0.jpg', bookUrl: '', codeUrl: ''},
        {name: 'The Business Analyst\'s Guide to Oracle Hyperion Interactive Reporting 11.1', author: 'Edward J. Cody', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/0363EN_MockupCover_0.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Liferay Beginner’s Guide', author: 'Robert Chen et al', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/7003OS_Liferay%20Beginner\'s%20Guidecov_Low.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Pentaho Data Integration 4 Cookbook', author: 'Adrian Sergio Pulvirenti, María Carina Roldan', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/5245OS_Pentaho%20Data%20Integration%204%20Cookbook.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.bigdata = [
        {name: 'Making Big Data Work for Your Business', author: 'Sudhi Sinha', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/0982IMcov_0.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Hadoop MapReduce Cookbook', author: 'Srinath Perera, Thilina Gunarathne', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/7287OS.jpg', bookUrl: '', codeUrl: ''},
        {name: 'HBase Administration Cookbook', author: 'Yifeng Jiang', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/7140OS_HBase%20Cookbook.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.configmgmt = [
        {name: 'Configuration Management with Chef-Solo', author: 'Naveed ur Rahman', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/2462OS_Cov.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.ci = [
        {name: 'Learning Continuous Integration with TeamCity', author: 'Manoj Mahalingam S', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/9518OT_0.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Jenkins Continuous Integration Cookbook', author: 'Alan Mark Berg', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/7409OS_cover.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.coffeescript = [
        {name: 'CoffeeScript In Action', author: 'Patrick Lee', imgUrl: 'http://www.manning.com/lee/lee_cover150.jpg', bookUrl: 'https://www.dropbox.com/s/r11z9vmdphrr4cw/CoffeeScript_in_Action_final.pdf?dl=0', codeUrl: 'https://www.dropbox.com/s/pq14v44xin6bh04/coffeescript-in-action-master.zip?dl=0'}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.css = [
        {name: 'Responsive Web Design by Example : Beginner\'s Guide', author: 'Thoriq Firdaus', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/5428OT.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Thinking in CSS', author: '', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/Thinking%20in%20CSS.jpg', bookUrl: '', codeUrl: ''},
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.d3 = [
        {name: 'Data Visualization with d3.js', author: 'Swizec Teller', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/0007OS.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Learning D3.js Mapping', author: 'Thomas Newton, Oscar Villarreal', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/5609OS_B01690_Learning_D3.js%20Mapping.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Data Visualization with D3.js Cookbook', author: 'Nick Qi Zhu', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/2162OS.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Mastering D3.js', author: 'Pablo Navarro Castillo', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/6270OS_Mastering%20D3.jpg', bookUrl: '', codeUrl: ''},
        {name: 'D3 Tips And Tricks', author: 'Malcolm MacLean', imgUrl: 'https://s3.amazonaws.com/titlepages.leanpub.com/D3-Tips-and-Tricks/large?1418948838', bookUrl: 'https://www.dropbox.com/s/l9k7m0d1cp0rcby/D3-Tips-and-Tricks.pdf?dl=0', codeUrl: ''},
        {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.fsharp = [
        {name: 'F# for Quantitative Finance', author: 'Johan Astborg', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/4623OS_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Haskell Financial Data Modeling and Predictive Analytics', author: 'Pavel Ryzhov', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/9437OS_0.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.graphics = [
        {name: 'Blender Compositing and Post Processing', author: 'Mythravarun Vepakomma', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/1127OS_Cover_0.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Learning Libgdx Game Development', author: 'Andreas Oehlke', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/6047OS_Maxi_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'gnuplot Cookbook', author: 'Lee Phillips', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/7249OS_gnuplot%20cookbook_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'MATLAB Graphics and Data Visualization Cookbook', author: 'Nivedita Majumdar, Swapnonil Banerjee', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/3165OT.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.html = [
        {name: 'HTML5 Game Development with ImpactJS', author: 'Davy Cielen, Arno Meysman', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/4568OT_0.jpg', bookUrl: '', codeUrl: ''},
        {name: 'HTML5 Canvas Cookbook', author: 'Eric Rowell', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/1369EXP_HTML5%20Canvas%20Cookbook_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'HTML5 Web Application Development By Example : Beginner\'s guide', author: 'J.M. Gustafson', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/5947OTcov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'HTML5 Graphing and Data Visualization Cookbook', author: 'Ben Fhala', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/3707OT.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.java = [
        {name: 'Maven for Eclipse', author: 'Sanjay Shah', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/7122OS_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'R Statistical Application Development by Example Beginner\'s Guide', author: 'Prabhanjan Narayanachar Tattar', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/9441OS_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'PrimeFaces Cookbook', author: 'Mert Çalışkan, Oleg Varaksin', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/9281OS_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Spring Data', author: 'Petri Kainulainen', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/9045OS_Spring%20Data%20Standard%20Guide_Mini.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Spring Web Services 2 Cookbook', author: 'Hamidreza Sattari, Shameer Kunjumohamed', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/5825OS_Spring%20Web%20Services%202%20Cookbook_frontcover.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.js = [
        {name: 'JavaScript and JSON Essentials', author: 'Sai Srinivas Sriparasa', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/6034OS.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Mastering JavaScript High Performance', author: 'Chad R. Adams', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/7296OS.jpg', bookUrl: '', codeUrl: ''},
        {name: 'FusionCharts Beginner\'s Guide: The Official Guide for FusionCharts Suite', author: 'Sanket Nadhani, Pallav Nadhani, Shamasis Bhattacharya', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/1765EXP_FusionCharts%20Beginner%E2%80%99s%20Guide_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Learning Highcharts', author: 'Joe Kuan', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/9083OS_Learning%20Highcharts%20by%20Example.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Object-Oriented JavaScript - Second Edition', author: 'Stoyan Stefanov, Kumar Chetan Sharma', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/3127OT_Object%20Oriented%20JavaScript.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Learning JavaScript Data Structures and Algorithms', author: 'Loiane Groner', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/4874OS_Learning%20JavaScript%20Data%20Structures%20and%20Algorithms.jpg', bookUrl: 'https://www.dropbox.com/s/wbkgs721o7ejepl/Learning%20JavaScript%20Data%20Structures%20and%20Algorithms%20%5BeBook%5D.pdf?dl=0', codeUrl: ''},
        {name: 'Mastering JavaScript Design Patterns', author: 'Simon Timms', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/7986OS_Mastering%20JavaScript%20Design%20Patterns.jpg', bookUrl: 'https://www.dropbox.com/s/pokl6srpr3ga3en/Mastering%20JavaScript%20Design%20Patterns%20%5BeBook%5D.pdf?dl=0', codeUrl: ''},
        {name: 'Lo-Dash Essentials', author: 'Adam Boduch', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/3867_8330OS_Lo-Dash%20Essentials_Cover.jpg', bookUrl: 'https://www.dropbox.com/s/5ukbyxqejrlgoly/Lo-Dash%20Essentials%20%5BeBook%5D.pdf?dl=0', codeUrl: 'https://www.dropbox.com/sh/ptz8igj9q6yf63r/AACRNuqv6tJ5g78iZK32xlQka?dl=0'},
        {name: 'Learning JavaScriptMVC', author: 'Wojciech Bednarski', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/0205OS.jpg', bookUrl: '', codeUrl: ''},
        {name: 'JavaScript Unit Testing', author: 'Hazem Saleh', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/0625OS_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Learning JavaScriptMVC', author: 'Wojciech Bednarski', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/0205OS.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.jquery = [
        {name: 'jQuery Hotshot', author: 'Dan Wellman', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/9106OS_%20jQuery%20Hotshots.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.linux = [
        {name: 'SELinux System Administration', author: 'Sven Vermeulen', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/3170OS.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Oracle WebLogic Server 12c Advanced Administration Cookbook', author: 'Dalton Iwazaki', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/6846EN_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Instant Kali Linux', author: 'Abhinav Singh', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/5664OT_Instant%20Kali%20Linux_cov_1.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Creating Development Environments with Vagrant', author: 'Michael Peacock', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/9182OS_Creating%20Development%20Environments%20with%20Vagrant_cover.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Piwik Web Analytics Essentials', author: 'Stephan A. Miller', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/8482OS_Piwik%20Web%20Analytics_0.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Aptana Studio Beginner\'s Guide', author: 'Thomas Deuling', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/8246OS.jpg', bookUrl: '', codeUrl: ''}
    ];
    $scope.lib.mobile = [
        {name: 'Learning Pentesting for Android Devices', author: 'Aditya Gupta', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/8984OS_Learning%20Pentesting%20for%20Android%20Devices.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Android SQLite Essentials', author: 'Sunny Kumar Aditya, Vikash Kumar Karn', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/2951OS_Android%20SQLite%20Essentials_Mini.jpg', bookUrl: '', codeUrl: ''},
        {name: 'iOS and OS X Network Programming Cookbook', author: 'Jon Hoffman', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/8085OT_Cookbook_cover.jpg', bookUrl: '', codeUrl: ''},
        {name: 'RubyMotion iOS Development Essentials', author: 'Abhishek Nalwaya, Akshat Paul', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/5220OTcov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Android Native Development Kit Cookbook', author: 'Feipeng Liu', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/1505OT.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Android NDK Beginner\'s Guide', author: 'Sylvain Ratabouil', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/1529EXP_Android%20NDK_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Android Application Security Essentials', author: 'Pragati Ogal Rai', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/5603OT_cov.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.minecraft = [
        {name: 'Building Minecraft Server Modifications', author: 'Cody M. Sommer', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/6005OT.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.netw = [
        {name: 'Software Defined Networking with OpenFlow', author: 'Siamak Azodolmolky', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/8726OT_0.jpg', bookUrl: '', codeUrl: ''},
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.node = [
        {name: 'RESTful Web API Design with Node.js ', author: 'Valentin Bojinov', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/5869OS_2899_RESTful%20Web%20API%20Design%20with%20Node.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Express Web Application Development', author: 'Hage Yaapa', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/6548OT.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Node Cookbook', author: 'David Mark Clements', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/7188OS_Node%20Cookbookcov.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.nosql = [
        {name: 'Getting Started with NoSQL', author: 'Gaurav Vaish', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/4988OT_NoSQL%20Standard%20Guide_Mini.jpg', bookUrl: '', codeUrl: ''},
        {name: 'CouchDB and PHP Web Development Beginner’s Guide', author: 'Tim Juravich', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/3586OS%20CouchDB%20and%20PHP%20web%20development.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.opengl = [
        {name: 'Learning Game Physics with Bullet Physics and OpenGL', author: 'Chris Dickinson', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/1879OS%20_Mini.jpg', bookUrl: '', codeUrl: ''},
        {name: 'WebGL Hotshot', author: 'Mitch Williams', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/0919OS_WebGL%20Hotshotcov.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.php = [
        {name: 'PHP Objects, Patterns and Practice', author: 'Matt Zandstra', imgUrl: 'http://ecx.images-amazon.com/images/I/51yMerQZlQL._SX403_BO1,204,203,200_.jpg', bookUrl: 'https://www.dropbox.com/s/h3on5vrgyaywrn0/9781430229254.pdf?dl=0', codeUrl: 'https://www.dropbox.com/s/esd8ek4sf7sthce/9781430229254.zip?dl=0'},
        {name: 'Laravel Application Development Cookbook', author: 'Terry Matula', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/2827OS.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Drupal 7 Mobile Web Development Beginner\'s Guide', author: 'Tom Stovall', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/5627OS_Drupal%207%20Mobile%20Web%20Development_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Web Application Development with Yii and PHP', author: 'Jeffrey Winesett', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/8727OS%20Agile%20Web%20Application%20Development%20with%20Yii.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Drupal 7 Cookbook', author: 'Dylan Spencer James', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/7966OS_Drupal%207%20Cookbook.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Mastering phpMyAdmin 3.4 for Effective MySQL Management', author: 'Marc Delisle', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/7782OS_Mastering%20phpMyAdmin%203.4%20for%20Effective%20MySQL%20Management.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Drupal 7 Business Solutions', author: 'Trevor James, Mark Noble', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/6648OS_Drupal%207%20Business%20Solutions_Front%20cover.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Drupal 7 Media', author: 'Liran Tal', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/6082OS_cover.jpg', bookUrl: '', codeUrl: ''},
        {name: 'PHP Ajax Cookbook', author: 'Milan Sedliak, R. Rajesh Jeba Anbiah , Roshan Bhattarai', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/3081OS_PHP%20Ajax%20Cookbook_cov_Low.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.python = [
        {name: 'NumPy Cookbook', author: 'Ivan Idris', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/8925OS_Numpy%20Cookbook.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Learning IPython for Interactive Computing and Data Visualization', author: 'Cyrille Rossant', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/9932OS.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Building Machine Learning Systems with Python', author: 'Willi Richert, Luis Pedro Coelho', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/1400OS_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Python 3 Object Oriented Programming', author: 'Dusty Phillips', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/1261OS_MockupCover.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Python Text Processing with NLTK 2.0 Cookbook', author: 'Jacob Perkins', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/3609OS_MockupCover_Coockbook_0.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Python Testing Cookbook', author: 'Greg L. Turnquist', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/4668_Python%20Testing%20Cookbook.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.raspberry = [
        {name: 'Raspberry Pi Networking Cookbook', author: 'Rick Golden', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/4605OT_Raspberry%20Pi%20Networking%20Cookbook_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Instant Raspberry Pi Gaming', author: 'Shea Silverman', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/3231OS_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Raspberry Pi Projects for Kids', author: 'Daniel Bates', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/2226OS_Raspberry%20Pi%20Projects%20for%20your%20Kids_Mini_Cover.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Raspberry Pi for Secret Agents', author: 'Stefan Sjogelid', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/5787OT.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Raspberry Pi Robotic Projects', author: 'Richard Grimmett', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/4322OT%20Raspberry%20Pi%20Robotic%20Projects.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.security = [
        {name: 'Enterprise Security: A Data-Centric Approach to Securing the Enterprise', author: 'Aaron Woody', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/5962EN.jpg', bookUrl: '', codeUrl: ''},
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.sencha = [
        {name: 'Sencha Touch Cookbook, Second Edition', author: 'Ajit Kumar', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/9185OS.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.sql = [
        {name: 'Oracle Advanced PL/SQL Developer Professional Guide', author: 'Saurabh K. Gupta', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/7225EN_Oracle%20Advanced%20PLSQL%20Developer%20Professional%20Guide.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Microsoft SQL Server 2012 Security Cookbook', author: 'Rudi Bruchez', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/5887EN_Microsoft%20SQL%20Server%202012%20Security%20cookbook_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Getting Started with SQL Server 2012 Cube Development', author: 'Simon Lidberg', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/9502EN.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.testing = [
        {name: 'Metasploit Penetration Testing Cookbook, Second Edition', author: 'Monika Agarwal, Abhinav Singh', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/6788OS.jpg', bookUrl: '', codeUrl: ''},
        {name: 'BackTrack 5 Wireless Penetration Testing Beginner\'s Guide', author: 'Vivek Ramachandran', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/5580OS_Backtrack%205%20Wireless%20Penetration.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Sonar Code Quality Testing Essentials', author: 'Charalampos S. Arapidis', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/7867OS_Sonar%20Code%20Quality%20Testing.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.three = [
        {name: 'Learning Three.js: The JavaScript 3D Library for WebGL - Second Edition', author: 'Jos Dirksen', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/2215OS.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Three.js Cookbook', author: 'Jos Dirksen', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/3144_Three.js%20Cookbook.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Three.js Essentials', author: 'Jos Dirksen', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/0864OS_Three_Frontcover.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Game Development with Three.js', author: 'Isaac Sukin', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/8539OS.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.typescript = [
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.unity = [
        {name: 'Unity 4.x Cookbook', author: 'Matt Smith, Chico Queiroz', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/0423OT.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Unity 4.x Game AI Programming', author: 'Aung Sithu Kyaw, Clifford Peters, Thet Naing Swe', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/3400OT.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Getting Started with Unity', author: 'Patrick Felicia', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/5848OT_Unity%204%20Outbreak_Mini.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.vmware = [
        {name: 'VMware Workstation - No Experience Necessary', author: 'Sander van Vugt', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/9182EN_Mini.jpg', bookUrl: '', codeUrl: ''},
        {name: 'VMware View 5 Desktop Virtualization Solutions', author: 'Jason Langone, Andre Leibovici', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/1124EN.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.windows = [
        {name: 'Windows PowerShell 4.0 for .NET Developers', author: 'Sherif Talaat', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/8765EN_Developers.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Visual Studio 2013 Cookbook', author: 'Jeff Martin, Richard Banks ', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/1966EN%20_Cover.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Microsoft System Center Virtual Machine Manager 2012 Cookbook', author: 'Edvaldo Alessandro Cardoso', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/6327EN.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Cinder Creative Coding Cookbook', author: 'Rui Madeira, Dawid Gorny', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/8703OS.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Windows Server 2012 Unified Remote Access Planning and Deployment', author: 'Erez Ben-Ari, Bala Natarajan', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/8284EN_0.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Windows Server 2012 Hyper-V Cookbook', author: 'Leandro Carvalho', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/4422EN%20Windows%20Server%202012%20Hyper-V%20Cookbook.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Hyper-V Best Practices', author: 'Benedict Berger', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/6091EN_Hyper-V%20Best%20Practices_cov_0.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Windows Server 2012 Hyper-V Cookbook', author: 'Leandro Carvalho', imgUrl: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/thumbview/4422EN%20Windows%20Server%202012%20Hyper-V%20Cookbook.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Visual Studio 2012 Cookbook', author: 'Richard Banks ', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/6525OT_%20Visual%20Studio%202012%20Cookbook_cov.jpg', bookUrl: '', codeUrl: ''},
        {name: 'WiX: A Developer\'s Guide to Windows Installer XML', author: 'Nick Ramirez', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/3722OS_MockupCover.jpg', bookUrl: '', codeUrl: ''},
        {name: 'Getting Started with C++ Audio Programming for Game Development', author: 'David Gouveia', imgUrl: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/thumbview/9099OTcov_0.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
    $scope.lib.wordpress = [
        {name: 'WordPress Plugin Development Cookbook', author: 'Yannick Lefebvre', imgUrl: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/thumbview/7683OS_WordPress%20Plugin%20Development%20Cookbook_frontcover.jpg', bookUrl: '', codeUrl: ''}
        // {name: '', author: '', imgUrl: '', bookUrl: '', codeUrl: ''},
    ];
}
// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
LibraryCtrl.$inject = ['$scope', '$http'];
module.exports = LibraryCtrl;
