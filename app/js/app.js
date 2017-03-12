(function() {
    'use strict';
    var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute']);

    eventsApp.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {

            $routeProvider.when('/newEvent', {
                    templateUrl: 'templates/NewEvent.html',
                    controller: 'EditEventController'
                })
                .when('/events', {
                    templateUrl: 'templates/EventList.html',
                    controller: 'EventListController'
                })
                .when('/event/:eventId', {
                    templateUrl: 'templates/EventDetails.html',
                    controller: 'EventController',
                    resolve: {
                        event: function($route, eventData) {
                            return eventData.getEvent($route.current.pathParams.eventId).$promise;
                        }
                    }
                })
                .otherwise({ redirectTo: '/events' });

            $locationProvider.html5Mode(true);

        }
    ])

}());
