angular.module('app', [
    'app.controllers', 'app.services', 'ngRoute', 'angularUtils.directives.dirPagination'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when("/", {templateUrl: "partials/customers.html", controller: "customerController"}).
            when("/profile", { templateUrl: "partials/profile.html", controller: "profileController" }).
            when("/profile/:id", { templateUrl: "partials/profile.html", controller: "profileController" }).
            otherwise({ redirectTo: '/' });
    }]);