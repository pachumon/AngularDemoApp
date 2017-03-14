(function() {

    'use strict';
    var app = angular.module('eventsApp');

    app.directive('repeatX', [function() {
        return {

            compile: function compile(elem, attr) {
                for (var i = 0; i < Number(attr.repeatX) - 1; i++) {
                    elem.after(elem.clone().attr('repeat-x', 0));
                }
                return function postLink(scope, elem, attr, ctrl) {
                    attr.$observe('text', function(newValue) {
                        if (newValue === 'Hello World') {
                            console.log(newValue)
                            elem.css('color', 'red');
                        }
                    });
                }
            }
        };
    }])

}());
