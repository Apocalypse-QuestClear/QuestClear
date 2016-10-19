/**
 * Created by EdwardChor on 15/10/2016.
 */
angular.module("QuestClear")
    .controller("AnswerController",function($scope){
        $scope.quest={
            title:'textTitle',
            time:'20120930',
            category:'Life'
        }
    })
    .directive('answerEditor',function(){
        return{
            templateUrl:'views/panel/answerEditor.html'
        }});