/**
 * Created by EdwardChor on 11/10/2016.
 */
angular.module('QuestClear').controller("PanelController",function ($scope,$state, $http,$location, userService,request){
    $state.go('.list');
    console.log('this is panelController');
    userService.test()
});