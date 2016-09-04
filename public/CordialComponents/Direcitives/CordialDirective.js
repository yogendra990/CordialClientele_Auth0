/**
 * Created by yogen on 3/09/2016.
 */
(function(){
    'use strict'
    angular.module('CordialClientele')
        .directive('profileDirective',AfterLogin)

    function AfterLogin(){
            return{
                restrict:'AE',
                templateUrl:'../public/CordialComponents/Direcitives/Profile.html'
                  }
        }
})()