(function() {

    'use strict';
    var app = angular.module('eventsApp');

    app.controller('CookieStoreSampleController', ['$scope', '$cookieStore',
        function($scope, $cookieStore) {

            $scope.event = { id: 1, name: "My Event" };

            $scope.saveEventToCookie = function(event) {
                $cookieStore.put('event', event);
            };

            $scope.getEventFromCookie = function() {
                console.log($cookieStore.get('event'));
            };

            $scope.removeEventCookie = function() {
                $cookieStore.remove('event');
            };

        }
    ])


}());
