/**
 * Created by EdwardChor on 11/10/2016.
 */
angular.module('QuestClear')
    .controller("ListController",function($scope,panelService){
            console.log($scope.quests);
            panelService.fetchList(10).then(function (data) {
                $scope.quests = data;
            });
            console.log($scope.quests);


    })
    .directive('questCard', function () {
        return {
            templateUrl:'views/panel/card.html'
        }
    });
