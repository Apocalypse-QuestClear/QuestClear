angular.module('QuestClear').controller("AnswersController", function ($scope, $state, request) {
    request.get('/answers/' + $state.params.aid).then(function (data) {
        $scope.quest = data.question;
        $scope.answer = data;
    });
});