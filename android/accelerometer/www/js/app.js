// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var APP = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

APP.controller("indexController", function ($scope, $interval){

    
    function onSuccess(acceleration) {
        var x = acceleration[0]; 
        var y = acceleration[1];
        var z = acceleration[2]; //not suing for this example

        $scope.top = 50;
        $scope.left = 50;
        if(y > 0){
          $scope.top = 50 + (y * 10) / 2;
        } else {
          $scope.top = 50 - (Math.abs(y) * 10) / 2;
        }
        if(x > 0){
          $scope.left = 50 - ((x * 10)/2);
        } else {
          $scope.left = 50 + ((Math.abs(x) * 10)/2);
        }
        
    };

    document.addEventListener("deviceready", function () {

      sensors.enableSensor("ACCELEROMETER");

      $interval(function(){
        sensors.getState(onSuccess);
      }, 100);


    }, false);

});