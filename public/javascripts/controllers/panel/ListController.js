/**
 * Created by EdwardChor on 11/10/2016.
 */
angular.module('QuestClear')
    .controller("ListController",function($scope, $state, panelService, request){

        $scope.titles = [];

        if ($state.params.keywords) {
            $scope.titles.push('关键词为"' + $state.params.keywords + '"');
        }

        if ($state.params.uid) {
            request.get('/users/' + $state.params.uid).then(function (data) {
                $scope.titles.push('用户为"' + data.username + '"');
            });
        }

        if ($state.params.category) {
            $scope.titles.push('类别为"' + $state.params.category + '"');
        }

        $scope.$watch('titles', function (titles) {
            if (titles.length > 0) {
                $scope.title = titles.join('，') + '的问题：';
            }
            else {
                $scope.title = '';
            }
        }, true);

        panelService.search({keywords: $state.params.keywords, uid: $state.params.uid, category: $state.params.category}).then(function(data){
            $scope.quests = data;
        });
    })
    .directive('questCard', function (request, alertService) {
        return {
            templateUrl:'views/panel/card.html',
            link: function (scope, element, attrs) {
                scope.watchQuestion = function () {
                    request.post('/questions/' + scope.quest.qid + '/watch', {}).then(function () {
                        alertService.showAlert('关注成功');
                    }).catch(function (err) {
                        alertService.showAlert(err);
                    });
                };
            }
        }
    })
    .directive('searchBox',function(){
       return {
           templateUrl:'views/searchBox.html'
       }
    });