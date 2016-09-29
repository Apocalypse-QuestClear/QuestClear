angular.module('QuestClear').controller("NavbarController", function ($scope, userService) {
    $scope.$watch(function () {
        return userService.user;
    }, function (user) {
        $scope.user = user;
    });
});