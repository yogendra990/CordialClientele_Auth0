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
             vm.profiles=[];
             vm.profilePicture;
             function login(){
                     auth.signin({},function(profile,token,picture){
                         store.set('profile',profile);
                         store.set('Id_Token',token);
                         angular.forEach(profile,function(value,key){
                             vm.profiles.push({key:key,value:value});
                         })
                         for(var i=0;i<vm.profiles.length;i++){
                             (vm.profiles[i].key=="picture")? sessionStorage.ProfilePicture= vm.profiles[i].value:console.log('Picture Not Found');
                         }
                         console.log(sessionStorage.ProfilePicture);
                        vm.profilePicture=sessionStorage.ProfilePicture;
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
       .controller('AfterLogin',['store',function(store){
               /*  var vm =this;

           vm.profile=[]
            vm.Stored_Object=store.get('profile');
           // console.log(vm.Stored_Object);
            angular.forEach(vm.Stored_Object,function(value,key){
               vm.profile.push({key:key,value:value});
           })
           console.log(vm.profile);
           for(var i=0;i<vm.profile.length;i++){
               //(vm.profile[i].key=="picture")?vm.profilePicture=vm.profile[i].value:console.log('Picture not found');
               (vm.profile[i].value);
           }*/

        }])
})()