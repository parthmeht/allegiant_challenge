angular.module('app', [
    'app.controllers', 'app.services', 'ngRoute'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when("/profile", { templateUrl: "partials/profile.html", controller: "profileController" }).
            when("/profile/:id", { templateUrl: "partials/profile.html", controller: "profileController" }).
            otherwise({ redirectTo: '/profile' });
    }]);