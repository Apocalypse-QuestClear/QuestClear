/**
 * Created by EdwardChor on 15/10/2016.
 */
angular.module("QuestClear")
    .controller("AnswerController",function($scope,userService){
        quesInfo=userService.checkQ($scope.qid);
        //$scope.quest=questInfo;
        $scope.quest={
            title:'怎样做一个披萨？',
            time:'2016-10-11',
            category:'生活'
        };

        stepN=1;
        step1={title:'', isItem:false, count:0, detail:""};

        $scope.steps=[step1];

        $scope.addStep=function(){
            stepN+=1;
            newStep={title:'',isItem:false,count:0,detail:''};
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