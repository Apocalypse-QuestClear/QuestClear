angular.module('QuestClear').controller("WelcomeController", function ($scope, $state) {
    $scope.redir = $state.params.redir;
});