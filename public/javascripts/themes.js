angular.module('QuestClear').config(function($mdThemingProvider) {
    $mdThemingProvider.theme('navbarTheme')
        .primaryPalette('grey', {
            'hue-1': '50'
        })
        .accentPalette('blue')
        .warnPalette('red');

    $mdThemingProvider.theme('homeTheme')
        .primaryPalette('blue');
});