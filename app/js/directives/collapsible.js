(function() {

    'use strict'
    var app = angular.module('eventsApp');

    app.directive('collapsible', [function() {
        return {
            restrict: 'E',
            replace: true,
            template: '<div><h4 class="well-title" ng-click="toggleVisibility()">{{title}}</h4><div ng-show="visible" ng-transclude></div></div>',
            transclude: true,
            scope: {
                title: '@'
            },
            controller: function($scope) {
                $scope.visible = true;

                $scope.toggleVisibility = function() {
                    $scope.visible = !$scope.visible;
                }
            }
        };
    }])

}());
