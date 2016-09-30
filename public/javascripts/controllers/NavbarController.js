angular.module('QuestClear').controller("NavbarController", function ($scope, $state, userService) {
    $scope.$watch(function () {
        return userService.user;
    }, function (user) {
        $scope.user = user;
    });

    $scope.state = $state;

    $scope.logout = function () {
        userService.logout()
            .then(function () {
                $state.go('home.welcome');
            });
    };
});