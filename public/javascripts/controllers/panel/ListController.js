/**
 * Created by EdwardChor on 11/10/2016.
 */
angular.module('QuestClear')
    .controller("ListController",function($scope,userService){
        userService.fetchList(10).then(function (data) {
            $scope.quests = data;
        });
    })
    .directive('questCard', function () {
        return {
            templateUrl:'views/panel/card.html'
        }
    });
