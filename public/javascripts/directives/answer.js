angular.module('QuestClear').directive('answer', function (request, alertService) {

    function link(scope, element, attrs) {
        scope.acceptQuest = function () {
            request.post('/quests/accept', {aid: scope.answer.aid}).then(function () {
                scope.answer.accepted = true;
            });
        };

        scope.watchAnswer = function () {
            console.log(scope.answer.aid);
            request.post('/answers/' + scope.answer.aid + '/watch', {}).then(function () {
                alertService.showAlert('关注成功');
            }).catch(function (err) {
                alertService.showAlert(err);
            });
        };
    }

    return {
        link: link,
        templateUrl: 'views/shared/answer.html'
    }
});