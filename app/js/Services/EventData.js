(function() {
    var app = angular.module('eventsApp');

    app.factory('eventData', [function() {
        var event = {
            name: 'angular boot camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'google headquarters',
                city: 'mountainview',
                province: 'california'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [{
                name: 'directives masterclass',
                creatorName: 'bob smith',
                duration: 1,
                level: 'advanced',
                abstract: 'details about directives',
                upVoteCount: 0
            }, {
                name: 'scopes for fun and profit',
                creatorName: 'john doe',
                duration: 2,
                level: 'introductory',
                abstract: 'details about scopes',
                upVoteCount: 0
            }, {
                name: 'well behaved controllers',
                creatorName: 'jane doe',
                duration: 4,
                level: 'intermediate',
                abstract: 'details about controllers',
                upVoteCount: 0
            }]
        };

        return {
            event: event
        };
    }])
}());
