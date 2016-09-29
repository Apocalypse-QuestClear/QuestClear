angular.module('QuestClear').controller("LoginController", function ($scope, $state, request, userService) {
    $scope.waiting = false;
    $scope.message = null;

    $scope.login = function () {
        $scope.waiting = true;

        request.post('/login', {
            username: $scope.username,
            password: $scope.password
        }).then(function (data) {

            $scope.message = null;
            userService.user = {
                uid: data.uid,
                username: data.username
            };

            $state.go('start');

        }).catch(function (msg) {
            $scope.message = msg;
        }).finally(function () {
            $scope.waiting = false;
        });
    }
});