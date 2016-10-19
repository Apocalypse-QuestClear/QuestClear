angular.module('QuestClear').controller("MainController", function ($scope, $transitions, $state, $location, userService) {
    var unbindEvent = $transitions.onBefore({}, function($transition$) {
        return userService.auth()
            .then(function (auth) {
                var home = $transition$.to().name.split('.')[0] === 'home';
                if (home && auth) {
                    $state.go("panel.list",{redir:$location.url()});
                    return false;
                    return $transition$.router.stateService.target('start');
                }
                else if (!home && !auth) {
                    return $transition$.router.stateService.target('home.welcome', {redir: $location.url()});
                }
            });
    });
});