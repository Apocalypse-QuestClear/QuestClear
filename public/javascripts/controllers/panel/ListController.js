/**
 * Created by EdwardChor on 11/10/2016.
 */
angular.module('QuestClear')
    .controller("ListController",function($scope){
        var card1={
            tittle:'How to set up Apache2,PHP,MySql on Ubuntu 14.14?',
            time:'2015-09-23',
            category:'Study',
            uid:'0001'
        };
        var card2={
            tittle:'How can I run faster than H.K. journalist?',
            time:'2015-09-23',
            category:'Study',
            uid:'0001'
        };
        var card3={
            tittle:'How to make a Hawaii pizza?',
            time:'2015-09-23',
            category:'Study',
            uid:'0001'
        };
        var card4={
            tittle:'What is the professional way to chat with Wallace? ',
            time:'2015-09-23',
            category:'Study',
            uid:'0001'
        };
        $scope.quests=[card1,card2,card3,card4];
})
    .directive('questCard',function(){
    return{
        templateUrl:'views/panel/card.html'
    }
});