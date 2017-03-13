(function() {
    'use strict';
    var app = angular.module('eventsApp');

    app.controller('EventController', ['$scope', 'eventData', '$log',
        '$anchorScroll', '$routeParams', '$route',
        function($scope, eventData, $log, $anchorScroll, $routeParams, $route) {

            console.log($route.current.params);

            $scope.event = $route.current.locals.event;


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
        }
    ])
}());
