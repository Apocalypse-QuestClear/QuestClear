angular.module('QuestClear').controller("QuestionsController", function ($scope, $state, request) {
    request.get('/questions/' + $state.params.qid).then(function (data) {
        $scope.quest = data.question;
        $scope.answers = data.answers;
    });
});