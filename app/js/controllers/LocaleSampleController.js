(function() {

    'use strict';
    var app = angular.module('eventsApp');

    app.controller('LocaleSampleController', ['$scope', '$locale',
        function($scope, $locale) {

            $scope.myDate = Date.now();
            $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
            
        }
    ])

}());
