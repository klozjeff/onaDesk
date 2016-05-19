'use strict';
'use strict';

var app = angular.module('myapp', []);

app.config(['$httpProvider', function($httpProvider) {
   $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

function Hello($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        success(function(data) {
            $scope.greeting = data;
        });
}