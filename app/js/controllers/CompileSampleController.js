(function() {
    'use strict'

    var app = angular.module('eventsApp');

    app.controller('CompileSampleController', ['$scope', '$compile', '$parse',
        function($scope, $compile, $parse) {

            var getter = $parse('event.name');

            var context1 = { event: { name: 'AngularJS Boot Camp' } };
            var context2 = { event: { name: 'Code Camp' } };


            var setter = getter.assign;
            setter(context2, 'Code Retreat');

            console.log(context2.event.name)

            $scope.appendDivToElement = function(markup) {
                return $compile(markup)($scope).
                appendTo(angular.element("#appendHere"));
            };
        }
    ])
}());
