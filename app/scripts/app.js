(function() {
    'use strict';
    angular.module('appForshare',['ngRoute','appForshare.controllers']);

    function config ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
        .when('/',{
            templateUrl  : 'views/home/index.html',
            controller   : 'HomeController',
            controllerAs : 'home'
        })
        .when('/register',{
            templateUrl  : 'views/home/index.html',
            controller   : 'HomeController',
            controllerAs : 'home'
        })
        .when('/login',{
            templateUrl  : 'views/home/index.html',
            controller   : 'HomeController',
            controllerAs : 'home'
        })
        .when('/items/:itemsId',{
            templateUrl  : 'views/home/index.html',
            controller   : 'itemsController',
            controllerAs : 'items'
        })
        .when('/newitems',{
            templateUrl  : 'views/home/index.html',
            controller   : 'HomeController',
            controllerAs : 'home'
        })
        .when('/users/:userId',{
            templateUrl  : 'views/home/index.html',
            controller   : 'HomeController',
            controllerAs : 'home'
        })
    }
    angular
    .module('appForshare')
    .config(config);

})();
