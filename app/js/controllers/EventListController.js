(function() {

    'use strict';
    var app = angular.module('eventsApp');

    app.controller('EventListController', ['$scope', '$location',
        'eventData',
        function($scope, $location, eventData) {

            $scope.events = eventData.getAllEvents();

        }
    ])

}());
