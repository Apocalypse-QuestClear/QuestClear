angular.module('QuestClear').controller("LoginController", function ($scope, $state, $location, userService) {
    $scope.waiting = false;
    $scope.message = null;

    $scope.login = function () {
        $scope.waiting = true;

        userService.login($scope.username, $scope.password)
            .then(function (data) {
                $scope.message = null;
                if ($state.params.redir) {
                    $location.url($state.params.redir);
                }
                else {
                    $state.go('panel');
                }
            })
            .catch(function (msg) {
                $scope.message = msg;
            })
            .finally(function () {
                $scope.waiting = false;
            });
    };
});