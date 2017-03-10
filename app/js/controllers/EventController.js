(function() {
    'use strict';
    var app = angular.module('eventsApp');

    app.controller('EventController', ['$scope', 'eventData', '$log', function($scope, eventData, $log) {

        eventData.getEvent()
            .$promise
            .then(function(event) {
                $scope.event = event;
                console.log(event);
            })
            .catch(function(response) {
                console.log(response);
            });

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

        $scope.sortorder = '+name';
    }])
}());
