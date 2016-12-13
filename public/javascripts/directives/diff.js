angular.module('QuestClear').directive('diff', function () {
    return {
        scope: {
            content: '='
        },
        templateUrl: 'views/shared/diff.html'
    }
});