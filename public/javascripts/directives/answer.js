angular.module('QuestClear').directive('answer', function (request) {

    function link(scope, element, attrs) {
        scope.acceptQuest = function () {
            request.post('/quests/accept', {aid: scope.answer.aid}).then(function () {
                scope.answer.accepted = true;
            });
        }
    }

    return {
        link: link,
        templateUrl: 'views/shared/answer.html'
    }
});