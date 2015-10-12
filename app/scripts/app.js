(function() {
    'use strict';
    angular.module('appForshare',['ngRoute', 'appForshare.controllers', 'appForshare.services']);

    function config ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(false);

        $routeProvider
        .when('/',{
            templateUrl  : 'views/home/index.tpl.html',
            controller   : 'HomeController',
            controllerAs : 'homelist'
        })
        .when('/register',{
            templateUrl  : 'views/home/register.html',
            controller   : 'regiterController',
            controllerAs : 'regiter'
        })
        .when('/login',{
            templateUrl  : 'views/home/login.html',
            controller   : 'LoginController',
            controllerAs : 'login'
        })
        .when('/item/:itemId',{
            templateUrl  : 'views/item/items_id.html',
            controller   : 'itemsController',
            controllerAs : 'items'
        })
        .when('/newitems',{
            templateUrl  : 'views/item/new_item.html',
            controller   : 'newitemsController',
            controllerAs : 'newitems'
        })
        .when('/user/:userId',{
            templateUrl  : 'views/user/user_id.html',
            controller   : 'userController',
            controllerAs : 'user'
        })
    }
    angular
    .module('appForshare')
    .config(config);

})();
