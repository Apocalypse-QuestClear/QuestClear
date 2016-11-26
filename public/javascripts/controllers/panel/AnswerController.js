/**
 * Created by EdwardChor on 15/10/2016.
 */
angular.module("QuestClear")
    .controller("AnswerController",function($scope,$state,$mdDialog,$mdToast,panelService){

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
                    info='提交成功';
                    $scope.showAlert(info);
                    $state.go('panel.list')
                }
                // else{
                //     info='提交失败';
                //     $scope.showAlert(info)
                // }
            })
                .catch(function(err){
                    // console.log(err);
                })
        };

        // showCustomToast = function(info) {
        //     $mdToast.show({
        //         hideDelay   : 3000,
        //         position    : 'top right',
        //         controller  : 'AnswerController',
        //         templateUrl : 'views/panel/toast.html'
        //     });
        // };

        $scope.showAlert = function(info) {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title(info)
                    .textContent(info)
                    .ariaLabel('')
                    .ok('朕知道了')
                    .targetEvent()
            );
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