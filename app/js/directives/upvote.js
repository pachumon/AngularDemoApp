(function() {

    'use strict';
    var app = angular.module('eventsApp');

    app.directive('upvote', [function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/templates/directives/upvote.html',
            scope: {
                upvote: '&',
                downvote: '&',
                count: '='
            }

        };
    }])

}());
