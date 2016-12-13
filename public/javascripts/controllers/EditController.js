angular.module('QuestClear').controller("EditController", function ($scope, $state, request, userService, alertService) {

    request.get('/answers/' + $state.params.aid + '/edits/' + $state.params.eid).then(function (data) {
        $scope.user = userService.user;
        $scope.edit = data;
    });

    $scope.accept = function () {
        request.post('/answers/' + $state.params.aid + '/edits/' + $state.params.eid + '/accept', {}).then(function () {
            $scope.edit.status = 'accept';
        }).catch(function (err) {
            alertService.showAlert(err);
        });
    };

    $scope.reject = function () {
        request.post('/answers/' + $state.params.aid + '/edits/' + $state.params.eid + '/reject', {}).then(function () {
            $scope.edit.status = 'reject';
        }).catch(function (err) {
            alertService.showAlert(err);
        });
    };
});