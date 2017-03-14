(function() {

    'use strict';
    var app = angular.module('eventsApp');

    app.directive('eventThumbnail', [function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/templates/directives/eventThumbnail.html',
            scope:{
            	event:"="
            }
        };
    }])


}());
