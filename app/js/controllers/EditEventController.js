(function() {
    'use strict'

    var app = angular.module('eventsApp');

    app.controller('EditEventController', ['$scope', function($scope) {
        $scope.saveEvent = function(event,neweventform) {
        	console.log(neweventform);
            if (neweventform.$valid) {
                window.alert(event.name);
             }
        };

        $scope.cancelEvent = function() {
            window.location = '/EventDetails.html';
        };
    }])
}());
