angular.module('QuestClear').controller("HomeController", function ($scope) {
    var homeBg0 = angular.element('.home-bg-0');

    $scope.onmousemove = function ($event) {
        var offsetX = $event.pageX - homeBg0.offset().left - homeBg0.width() / 2;
        var offsetY = $event.pageY - homeBg0.offset().top - homeBg0.height() / 2;

        homeBg0.css('transform', 'scale(1.02, 1.02) translate(' + Math.floor(offsetX * -0.01) + 'px, ' + Math.floor(offsetY * -0.01) + 'px)');
    }
});