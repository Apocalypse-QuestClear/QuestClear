/**
 * Created by EdwardChor on 15/10/2016.
 */
angular.module("QuestClear")
    .controller("AnswerController",function($scope,userService){
        quesInfo=userService.checkQ($scope.qid);
        //$scope.quest=questInfo;
        $scope.quest={
            title:'111',
            time:'111',
            category:'111'
        };

        stepN=3;
        step1={title:'第1步...', isItem:false, count:0, detail:""};
        step2={title:'第2步...', isItem:false, count:0, detail:""};
        step3={title:'第3步...', isItem:false, count:0, detail:""};

        $scope.steps=[step1,step2,step3];

        $scope.addStep=function(){
            stepN+=1;
            newStep={title:'第'+stepN+'步...',isItem:false,count:0,detail:''};
            $scope.steps.push(newStep);
        };

        $scope.submitAnswer=function(){
            cnt=json({
                qid:$scope.qid,
                title:$scope.questInfo['title'],
                steps:$scope.steps,
                hideUser:$scope.hideUser
            });
            $scope=message=userService.answer(cnt)
        }
    })
    .directive('answerEditor',function(){
        return{
            templateUrl:'views/panel/answerEditor.html'
        }});