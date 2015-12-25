'use strict';
function AboutCtrl($scope) {
    $scope.aboutme = [
        {item: 'I was born in Los Angeles, CA. However, I was raised in a small town north of Santa Barbara called Lompoc, CA. I graduated high school and spent allot of time surfing and playing the guitar in my high school years. I had a career in controls and attended a community college in Oregon. I have 4 adult children.'},
        {item: 'I currently live in Orange, CA and I enjoy the stock market and tending to my stock market timing website and LAMP/MEAN stack as well as creating web applications and data visualizations. One of my favorite hobbies is the study of ancient aliens and the creation of man. As well as scientific solutions to the mystery\'s of the world and theories about ancient civilizations.'},
        {item: 'I play the guitar and went to GIT (Guitar Institute of Technology) when I was 18.'},
        {item: 'When I was in my 30\'s, I held a construction contractors license in the State of Oregon. I enjoy fine homes and real estate.'},
        {item: 'When I was a kid, I was infatuated with fast cars and racing. In grade school I would go to a local garage after class got out for the day, and offer to sweep the floors just to be in a mechanical environment.'},
        {item: 'When I was 11, I had a paper route. With the profits, I bought a moped. Once I had the moped, I was able to take on an additional route. With the profits, I bought my first car at the age of 13.'}
        // {item: ''},
    ];
}
AboutCtrl.$inject = ['$scope'];
module.exports = AboutCtrl;
