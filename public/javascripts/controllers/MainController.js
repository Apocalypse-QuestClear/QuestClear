angular.module('QuestClear').controller("MainController", function ($transitions, $state, $location, userService) {
    var unbindEvent = $transitions.onEnter({}, function($transition$) {
        userService.auth()
            .then(function (auth) {
                var home = $transition$.to().name.split('.')[0] === 'home';
                if (home && auth) {
                    $state.go("start");
                    return false;
                }
                else if (!home && !auth) {
                    $state.go('home.welcome', {redir: $location.url()});
                    return false;
                }
            });
    });
});