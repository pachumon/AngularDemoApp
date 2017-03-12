(function() {

    'use strict';
    var app = angular.module('eventsApp');

    eventsApp.factory('$exceptionHandler', function() {
        return function(exception) {
            console.log("exception handled: " + exception.message);
        };
    });

}());
