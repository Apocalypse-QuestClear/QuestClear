angular.module('QuestClear').controller("UsersController", function ($scope, $state, request, userService) {

    $scope.newInfo = {};
    $scope.state = $state;

    $scope.$watch(function () {
        return userService.user;
    }, function (user) {
        $scope.user = user;
    });

    request.get('/users/' + $state.params.uid).then(function (data) {
        $scope.username = data.username;
        $scope.email = data.email;
        $scope.watchQuestions = data.watchQuestions;
        $scope.watchAnswers = data.watchAnswers;
        $scope.userQuestions = data.userQuestions;
        $scope.userAnswers = data.userAnswers;
    });

    $scope.edit = function () {
        $scope.newInfo.username = $scope.username;
        $scope.newInfo.email = $scope.email;
        $scope.newInfo.password = '';
        $scope.newInfo.confirmPassword = '';
        $scope.editMode = true;
    };

    var validate = function() {
        if (!$scope.newInfo.username) {
            $scope.message = '用户名不能为空';
            return false;
        }
        else if ($scope.newInfo.password !== $scope.newInfo.confirmPassword) {
            $scope.message = '密码不一致';
            return false;
        }
        else {
            $scope.message = null;
            return true;
        }
    };

    $scope.submit = function () {
        if (!validate()) {
            return;
        }

        $scope.waiting = true;

        request.post('/users/' + $state.params.uid + '/edit', {
            username: $scope.newInfo.username,
            password: $scope.newInfo.password,
            email: $scope.newInfo.email
        })
            .then(function (data) {
                $scope.message = null;
                $scope.username = $scope.newInfo.username;
                $scope.email = $scope.newInfo.email;
                $scope.editMode = false;
            })
            .catch(function (msg) {
                $scope.message = msg;
            })
            .finally(function () {
                $scope.waiting = false;
            });
    };

    $scope.reset = function () {
        $scope.editMode = false;
    };
});