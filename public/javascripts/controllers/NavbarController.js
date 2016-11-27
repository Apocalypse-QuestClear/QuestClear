angular.module('QuestClear').controller("NavbarController", function ($scope, $state, userService) {

    $scope.$watch(function () {
        return userService.user;
    }, function (user) {
        $scope.user = user;
    });

    $scope.query = {keywords: ''};

    $scope.search = function (){
        $state.go('panel.list',{
            keywords: $scope.query.keywords,
            uid: undefined,
            category: undefined
        });
    };

    $scope.onSearchKeyUp = function (event) {
        if (event.keyCode === 13) {
            $scope.search();
        }
    };

    $scope.logout = function () {
        userService.logout()
            .then(function () {
                $state.go('home.welcome');
            });
    };

});

