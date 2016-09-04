/**
 * Created by yogen on 3/09/2016.
 */
(function() {
    'use strict'
    var CordialAuth0 = angular.module('CordialClientele', ['auth0', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])
    CordialAuth0
        .config(['$provide', 'authProvider', '$urlRouterProvider', '$stateProvider', '$httpProvider', 'jwtInterceptorProvider', '$urlMatcherFactoryProvider',
            function ($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider, $urlMatcherFactoryProvider) {
                authProvider.init({
                    domain: 'yogendra.auth0.com',
                    clientID: 'hCg7H5zMtRSZlrzYhVa9WJVDnlbA1I1S'
                });
                $urlMatcherFactoryProvider.caseInsensitive(true)
                $stateProvider
                    .state('/', {
                        url: '/home',
                        templateUrl: '../public/Templates/Home/HomeIndex.html'
                    })
                    .state('AboutUs', {
                        url: '/About',
                        templateUrl: '../public/Templates/Home/About.Html'
                    })
                    .state('ContactUs', {
                        url: '/Contact',
                        templateUrl: '../public/Templates/Home/ContactUs.html'
                    })
                    .state('Profile', {
                        url: '/profile',
                        templateUrl: '../public/Templates/AfterLogin/AfterLogin.html',
                        controller: 'CordialAuth0Profile as User'
                    })
                $urlRouterProvider.otherwise('/home')
            }])
})()