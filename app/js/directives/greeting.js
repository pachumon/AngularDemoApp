(function() {

    'use strict';
    var app = angular.module('eventsApp');

    app.directive('greeting', [function() {
            return {
                template: "<div><button class='btn' ng-click='sayHello()'>Say Hello</button><div ng-transclude></div></div>",
                replace: true,
                transclude: true,
                restrict: 'E',
                controller: 'GreetingController'
            };
        }])
        .directive('finnish', [function() {
            return {
                restrict: 'A',
                require: '^greeting',
                link: function(scope, elem, attr, ctrl) {
                    ctrl.addGreeting('hei');
                }
            };
        }])
        .directive('hindi', [function() {
            return {
                restrict: 'A',
                require: '^greeting',
                link: function(scope, elem, attr, ctrl) {
                    ctrl.addGreeting('namaste');
                }
            };
        }]);

    app.controller('GreetingController', ['$scope', function($scope) {
        var greetings = ['hello'];
        $scope.sayHello = function() {
            alert(greetings.join());
        };
        this.addGreeting = function(greeting) {
            greetings.push(greeting);
        };
    }])

}());
