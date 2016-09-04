/**
 * Created by yogen on 3/09/2016.
 */
(function(){
    'use strict';
    angular.module('CordialClientele')
         .controller('ProfileController',['auth','store','$location',function(auth,store,$location){
                 var vm= this;
                 vm.login=login;
                 vm.logout=logout;
                 vm.auth=auth;

                 function login(){
                     auth.signin({},function(profile,token){
                         store.set('profile',profile);
                         store.set('Id_Token',token);
                         $location.path('/profile');
                     },function(error){
                         console.log(error);
                     })
                 };
                 function logout(){
                     store.remove('profile');
                     store.remove('Id_Token');
                     auth.signout();
                     $location.path('/profile')
                 }

        }])
})()