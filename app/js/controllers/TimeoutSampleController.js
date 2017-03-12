(function() {

    'use strict';
    var app = angular.module('eventsApp');

    app.controller('TimeoutSampleController', ['$scope', '$timeout',
        function($scope, $timeout) {

            var promise = $timeout(function() {
                $scope.name = "John Doe";
            }, 5000);

            $scope.cancel = function() {
                $timeout.cancel(promise);
            }

        }
    ])

}());
