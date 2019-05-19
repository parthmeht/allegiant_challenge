angular.module('app.services', []).
  factory('profileServices', function($http) {

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
  }).factory('customersServices', function($http){
    var customersAPI = {};

    customersAPI.getCustomerData = function(){
      return $http({
        method: 'GET',
        url: '../customers.json'
      });
    }

    return customersAPI;
  });