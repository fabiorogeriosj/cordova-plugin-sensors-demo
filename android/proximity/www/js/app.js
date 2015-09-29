// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var APP = angular.module('starter', ['ionic','ngCordova'])

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

    $scope.state=1;

    function onSuccess(values) {
        $scope.state = values[0];
        if($scope.state == 0){
          var audio = new Audio('sound/mi.mp3');
          audio.play();
        }
    };

    document.addEventListener("deviceready", function () {

      sensors.enableSensor("PROXIMITY");

      $interval(function(){
        sensors.getState(onSuccess);
      }, 100);


    }, false);

});