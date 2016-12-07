angular.module("QuestClear")
    .controller("AnswerEditController",function($scope, $state, alertService, request){

        request.get('/answers/' + $state.params.aid).then(function (data) {
            $scope.steps = data.steps;
            $scope.steps.forEach(function (step, index) {
                step.index = index;
            });
        });

        $scope.addStep = function (index) {
            newStep = {index: -1, title: '', isItem: false, count: 0, detail: ''};
            $scope.steps.splice(index, 0, newStep);
        };

        $scope.deleteStep = function (index) {
            $scope.steps.splice(index, 1);
        };

        $scope.submitAnswer=function(){
            request.post('/answers/' + $state.params.aid + '/edit', {
                title: $scope.title,
                content: $scope.content,
                steps: $scope.steps
            }).then(function(data){
                $scope.message = '';
                alertService.showAlert('提交成功');
                $state.go('answers', {aid: data.aid});
            }).catch(function (err) {
                $scope.message = err;
            });
        };
    });