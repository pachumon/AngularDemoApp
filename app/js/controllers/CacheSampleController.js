(function() {

    'use strict';
    var app = angular.module('eventsApp');

    app.controller('CacheSampleController', ['$scope', 'myCache',
        function($scope, myCache) {

            $scope.addToCache = function(key, value) {
                myCache.put(key, value);
            };

            $scope.readFromCache = function(key) {
                return myCache.get(key);
            };

            $scope.getCacheStats = function() {
                return myCache.info();
            };

        }
    ])

}());
