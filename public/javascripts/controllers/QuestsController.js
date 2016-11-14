angular.module('QuestClear').controller("QuestsController", function ($scope, request) {
    request.get('/quests').then(function (data) {
        $scope.quests = data;
    });

    $scope.addProgress = function (step, index, quest) {
        request.post('/quests/modifyProgress', {aid: quest.aid, step_id: step.step_id, progress: ++step.progress});
    };

    $scope.isStepNotDone = function (step) {
        return !step.isItem && step.progress === 0 || step.isItem && step.progress !== step.count;
    };

    $scope.cancelQuest = function (quest, index) {
        request.post('/quests/cancel', {aid: quest.aid}).then(function () {
            $scope.quests.splice(index, 1);
        });
    }
});