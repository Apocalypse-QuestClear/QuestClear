/**
 * Created by EdwardChor on 11/10/2016.
 */
angular.module("QuestClear")
    .controller("PostController", function ($scope, $state, request) {
        $scope.categories=['Life', 'Study', 'Research'];
        $scope.hideUser = false;

        $scope.submit = function () {

            return request.post("/panel/post", {
                title: $scope.title,
                category: $scope.category,
                hideUser: $scope.hideUser
            }).then(function (data) {
                $scope.message = null;
                $state.go('panel.list');
            }).catch(function (msg) {
                $scope.message = msg;
            });
        };

    })
    .directive('postEditor', function () {
        return {
            templateUrl:'views/panel/postEditor.html'
        }
    });