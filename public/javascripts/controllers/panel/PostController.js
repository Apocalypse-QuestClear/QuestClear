/**
 * Created by EdwardChor on 11/10/2016.
 */
angular.module("QuestClear")
    .controller("PostController",function($scope){
    $scope.categories=['Life','Study','Research']
})
    .directive('postEditor',function(){
        return{
            templateUrl:'views/panel/postEditor.html'
        }});