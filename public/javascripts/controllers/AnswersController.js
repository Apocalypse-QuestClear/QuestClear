angular.module('QuestClear').controller("AnswersController", function ($scope, $state, request,userService) {
    request.get('/answers/' + $state.params.aid).then(function (data) {
        $scope.quest = data.question;
        $scope.answer = data;
        $scope.records = data.comments;
        processData($scope.records);
    });

    $scope.ratingValue=0;
    $scope.max=5;
    $scope.readonly=false;
    $scope.uid=userService.user.uid;

    $scope.subComment=function(){
        console.log($scope.review);

        request.post('/answers/'+$state.params.aid+'/comments',{
            content:$scope.content
        })
        .then(function(data){
            if(data['cid']){
                    $scope.review.content=$scope.content;
                    $scope.content=' ';
                    $scope.review.stars=$scope.stars;
                    $scope.review.rate=$scope.ratingValue;
                    $scope.readonly=true;
                    console.log($scope.records);
                    console.log(_records);
                    _records.push($scope.review);
                    console.log(_records);
                    $scope.records=_records;
            }
        });
    };


    $scope.toggle = function(index) {
        if ($scope.readonly == undefined || $scope.readonly === false){
            $scope.ratingValue = index + 1;
        }
        updateStars()
    };

    function updateStars() {
        if($scope.edit==false || $scope.readonly==true){
            return -1
        }
        else{
            _stars = [];
            for (var i = 0; i < $scope.max; i++) {
                _stars.push({
                    filled: i < $scope.ratingValue
                });
            }
            $scope.rate=$scope.ratingValue;
            $scope.stars=_stars
        }
    }


    function processData(data){
        _records=data;

        flag=false;
        for(var i=0;i<_records.length;i++){
            _s=[];
            for(var j=0;j<5;j++){
                _s.push({
                    filled:j<_records[i].rate
                })
            }
            _records[i].stars=_s;
            if($scope.uid==_records[i].uid){
                flag=true
            }
        }
        if(flag){
            $scope.ratingValue=_records[i].rate;
            $scope.review={
                uid:$scope.uid,
                rate:$scope.ratingValue,
                content:'',
                stars:''
            };
            updateStars();
            $scope.edit=false;
            $scope.readonly=true
        }
        else{
            $scope.ratingValue=0;
            $scope.review={
                uid:$scope.uid,
                rate:$scope.ratingValue,
                content:'',
                stars:''
            };
            updateStars();
        }
        $scope.records=_records;
    }
})
    .directive('reviewArea', function () {
        return {
            templateUrl:'views/reviewArea.html'
        }
    })
    .directive('starRating', function(){
        return {
            restrict: 'EA',
            templateUrl:'views/starRating.html'
        }
});
