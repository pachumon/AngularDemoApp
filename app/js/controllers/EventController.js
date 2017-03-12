(function() {
    'use strict';
    var app = angular.module('eventsApp');

    app.controller('EventController', ['$scope', 'eventData', '$log','$anchorScroll',
     function($scope, eventData, $log,$anchorScroll) {

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

        $scope.scrollToSession = function() {
            $anchorScroll();
        };

        $scope.sortorder = '+name';
    }])
}());
