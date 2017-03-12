(function() {
    var app = angular.module('eventsApp');



    app.factory('eventData', ['$resource', function($resource) {

        var resource = $resource('/data/event/:id', { id: '@id' });

        var getEvent = function(eventId) {
            return resource.get({ id: eventId });
        };

        var save = function(event) {
            event.id = 999;
            return resource.save(event);
        };

        var getAllEvents = function() {
            return resource.query();
        };

        return {
            getEvent: getEvent,
            save: save,
            getAllEvents: getAllEvents
        };
    }])
}());
