angular.module('starter', ['ionic', 'ngCordovaOauth'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.controller("MainController", function($scope, $cordovaOauth) {

    $scope.linkedinLogin = function() {
        $cordovaOauth.linkedin("CLIENT_ID_HERE", "CLIENT_SECRET_HERE", ["r_basicprofile", "r_emailaddress"], "my-state-data").then(function(result) {
            console.log(JSON.stringify(result));
        }, function(error) {
            console.log(JSON.stringify(error));
        });
    }

    $scope.imgurLogin = function() {
        $cordovaOauth.imgur("CLIENT_ID_HERE").then(function(result) {
            console.log(JSON.stringify(result));
        }, function(error) {
            console.log(JSON.stringify(error));
        });
    }

    $scope.twitterLogin = function() {
        $cordovaOauth.twitter("CLIENT_ID_HERE", "CLIENT_SECRET_HERE").then(function(result) {
            console.log(JSON.stringify(result));
        }, function(error) {
            console.log(JSON.stringify(error));
        });
    }

    $scope.facebookLogin = function() {
        $cordovaOauth.facebook("367581016657031", ["email"], {"auth_type": "rerequest"}).then(function(result) {
            console.log(JSON.stringify(result));
        }, function(error) {
            console.log(JSON.stringify(error));
        });
    }

	$scope.cleverLogin = function() {
        $cordovaOauth.clever("8b4601209eabeef73670", "7b3575240bcee395fbe4b4f11ff0b9ddbfd29f9e").then(function(result) {
            console.log(JSON.stringify(result));
        }, function(error) {
            console.log(JSON.stringify(error));
        });
    }

});
