/**
 * Created by EdwardChor on 15/10/2016.
 */
angular.module("QuestClear")
    .controller("AnswerController",function($scope, $state, alertService, panelService){

        //$scope.quest=questInfo;

        $scope.qid=$state.params.qid;
        // $scope.title=$state.params.title;


        stepN=1;
        step1={title:'', isItem:false, count:"", detail:""};

        $scope.steps=[step1];

        $scope.hideUser=false;

        $scope.addStep=function(){
            stepN+=1;
            newStep={title:'',isItem:false,count:0,detail:''};
            $scope.steps.push(newStep);
        };

        $scope.submitAnswer=function(){
            cnt={
                qid:$scope.qid,
                title:$scope.title,
                steps:$scope.steps,
                hideUser:$scope.hideUser
            };
            panelService.answer(cnt).then(function(data){
                $scope.message=data;
                if(data['aid']){
                    alertService.showAlert('提交成功');
                    $state.go('answers', {aid: data.aid});
                }
            });
        };
    })
    .directive('answerEditor',function(){
        return{
            templateUrl:'views/panel/answerEditor.html'
        }})
    .directive('mdToast',function(){
        return{
            templateUrl:'views/panel/toast.html'
        }
    });