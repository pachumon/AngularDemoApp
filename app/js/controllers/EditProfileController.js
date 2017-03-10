(function() {
    'use strict'

    var app = angular.module('eventsApp');

    app.controller('EditProfileController', ['$scope', 'gravatarUrlBuilder', function($scope, gravatarUrlBuilder) {
        $scope.user = {};

        $scope.getGravatarUrl = function(email) {
            return gravatarUrlBuilder.buildGravatarUrl(email);
        };

    }])
}());
