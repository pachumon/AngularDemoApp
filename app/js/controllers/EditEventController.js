(function() {
    'use strict'

    var app = angular.module('eventsApp');

    app.controller('EditEventController', ['$scope','eventData', function($scope,eventData) {
        $scope.saveEvent = function(event, neweventform) {
            if (neweventform.$valid) {
                eventData.save(event)
                    .$promise
                    .then(function(response) { console.log('success', response) })
                    .catch(function(response) { console.log('failure', response) });
            }
        };

        $scope.cancelEvent = function() {
            window.location = '/EventDetails.html';
        };
    }])
}());
