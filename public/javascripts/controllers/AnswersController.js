angular.module('QuestClear').controller("AnswersController", function ($scope, $state, request, alertService) {
    $scope.review = {
        rating: 0
    };

    request.get('/answers/' + $state.params.aid).then(function (data) {
        $scope.quest = data.question;
        $scope.answer = data;
        $scope.answer.aid = $state.params.aid;
        $scope.records = data.comments;
        $scope.review.rating = data.rating;
    });

    $scope.submitRating = function () {
        request.post('/answers/' + $state.params.aid + '/rate', {rate: $scope.review.rating}).then(function () {
            alertService.showAlert('提交成功').then(function () {
                window.location.reload();
            });
        }).catch(function (err) {
            alertService.showAlert(err);
        });
    };

    $scope.submitComment = function () {
        request.post('/answers/' + $state.params.aid + '/comments', {content: $scope.review.comment}).then(function () {
            alertService.showAlert('提交成功').then(function () {
                window.location.reload();
            });
        }).catch(function (err) {
            alertService.showAlert(err);
        });
    };
})
    .directive('reviewArea', function () {
        return {
            templateUrl:'views/reviewArea.html'
        }
    })
    .directive('starRating', function(){
        return {
            restrict: 'EA',
            templateUrl:'views/starRating.html',
            scope: {
                rating: '=',
                editable: '='
            },
            link: function (scope, element, attrs) {
                scope.$watch('rating', function (rating) {
                    if (rating > 0) {
                        element.find('.star-rating-layer-filled').css('width', 102.88 * rating / 5);
                    }
                    else {
                        element.find('.star-rating-layer-filled').css('width', 0);
                    }
                });

                scope.onStarClick = function (rating) {
                    if (scope.editable) {
                        scope.rating = rating;
                    }
                };
            }
        }
    });
