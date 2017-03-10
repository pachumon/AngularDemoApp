(function() {
    var app = angular.module('eventsApp');



    app.factory('eventData', ['$resource', function($resource) {

        var resource = $resource('/data/event/:id', { id: '@id' });

        var getEvent = function() {
            return resource.get({ id: 1 });
        };

        var save = function(event) {
            event.id = 999;
            return resource.save(event);
        };

        return {
            getEvent: getEvent,
            save: save
        };
    }])
}());
