(function() {

    'use strict';
    var app = angular.module('eventsApp');

    app.directive('mySample', ['$compile', function($compile) {
        return {
            restrict: 'C',
            template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>",
            scope:{}
            // link: function(scope, elem, attrs, ctrl) {
            //     var markup = '<input type="text" ng-model="sampleData"/>{{sampleData}}</br>';
            //     angular.element(elem).html($compile(markup)(scope));
            // }
        };
    }])

}());