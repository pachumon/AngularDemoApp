(function() {

    'use strict';
    var app = angular.module('eventsApp');

    app.factory('myCache', ['$cacheFactory', function($cacheFactory) {


        return $cacheFactory('myCache', { capacity: 3 });




    }])
}());
