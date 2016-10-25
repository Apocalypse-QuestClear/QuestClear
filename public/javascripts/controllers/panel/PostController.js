/**
 * Created by EdwardChor on 11/10/2016.
 */
angular.module("QuestClear")
    .controller("PostController",function($scope,userService){
    $scope.categories=['Life','Study','Research'];

    quest={
        title:$scope.title,
        category:$scope.categories,
        hideUser:$scope.hideUser
    };

    $scope.message=userService.ask(quest)

})
    .directive('postEditor',function(){
        return{
            templateUrl:'views/panel/postEditor.html'
        }});