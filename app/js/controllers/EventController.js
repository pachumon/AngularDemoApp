(function() {
    'use strict';
    var app = angular.module('eventsApp');

    app.controller('EventController', ['$scope','eventData', function($scope,eventData) {

        $scope.event = eventData.event;

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

        $scope.sortorder='+name';
    }])
}());
