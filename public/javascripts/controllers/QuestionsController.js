angular.module('QuestClear').controller("QuestionsController", function ($scope, $state, request) {
    request.get('/questions/' + $state.params.qid).then(function (data) {
        $scope.quest = data.question;
        $scope.quest.qid = $state.params.qid;
        $scope.answers = data.answers;
    });
});