/**
 * Created by EdwardChor on 11/10/2016.
 */
angular.module('QuestClear')
    .controller("ListController",function($timeout,$q,$log,$scope,$state,panelService){

        if($state.params.keywords){
            panelService.searchByKeywords($state.params.keywords).then(function(data){
                $scope.quests = data;
            })
        }
        else{
            panelService.fetchList(10).then(function (data) {
                $scope.quests = data;
            });

        }

        $scope.jumpToAnswer=function(quest){
            $state.go('^.answer',{
                qid:quest.qid
            })

        };

        $scope.test=function(input){
            console.log(input)

        };

        $scope.chipSearch=function(cate) {
            panelService.searchByCategory(cate[0])
                .then(function (data) {
                    console.log(data);
                    $scope.quests=data
                });

        };


        $scope.uidSearch=function(uid){
            panelService.searchByUid(uid)
                .then(function (data) {
                    console.log(data);
                    $scope.quests=data
                });
        }

    })
    .directive('questCard', function () {
        return {
            templateUrl:'views/panel/card.html'
        }
    })
    .directive('searchBox',function(){
       return {
           templateUrl:'views/searchBox.html'
       }
    });