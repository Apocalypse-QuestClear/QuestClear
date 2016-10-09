angular.module('QuestClear').controller("RegisterController", function ($scope, $state, $location, userService) {
    $scope.waiting = false;
    $scope.message = null;

    var validate = function() {
        if (!$scope.username) {
            $scope.message = '用户名不能为空';
            return false;
        }
        else if (!$scope.password) {
            $scope.message = '密码不能为空';
            return false;
        }
        else if ($scope.password !== $scope.confirmPassword) {
            $scope.message = '密码不一致';
            return false;
        }
        else {
            $scope.message = null;
            return true;
        }
    };

    $scope.register = function () {
        if (!validate()) {
            return;
        }

        $scope.waiting = true;

        userService.register($scope.username, $scope.password, $scope.email)
            .then(function (data) {
                $scope.message = null;
                if ($state.params.redir) {
                    $location.url($state.params.redir);
                }
                else {
                    $state.go('start');
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