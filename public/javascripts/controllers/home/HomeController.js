angular.module('QuestClear').controller("HomeController", function ($scope, isMobile) {
    var homeBg0 = angular.element('.home-bg-0');

    if (!isMobile()) {
        $scope.onmousemove = function ($event) {
            var offsetX = $event.pageX - homeBg0.offset().left - homeBg0.width() / 2;
            var offsetY = $event.pageY - homeBg0.offset().top - homeBg0.height() / 2;

            homeBg0.css('transform', 'scale(1.02, 1.02) rotateX(' + offsetY * 0.00075 + 'deg) rotateY(' + -offsetX * 0.0005 + 'deg)');
        }
    }
    else {
        var initX, initY, initZ;
        window.addEventListener("deviceorientation", function ($event) {
            if (initX == null) {
                initX = $event.gamma;
                initY = $event.beta;
            }
            else {
                var offsetX = $event.gamma - initX;
                var offsetY = $event.beta - initY;

                homeBg0.css('transform', 'scale(1.02, 1.02) rotateX(' + offsetY * 0.015 + 'deg) rotateY(' + -offsetX * 0.015 + 'deg)');
            }
        }, false);
    }
});