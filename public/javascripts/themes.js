angular.module('QuestClear').config(function($mdThemingProvider) {
    $mdThemingProvider.theme('white')
        .primaryPalette('grey', {
            'hue-1': '50'
        })
        .accentPalette('blue')
        .warnPalette('red');

    $mdThemingProvider.theme('home')
        .primaryPalette('grey', {
            'hue-1': '50'
        })
        .accentPalette('indigo');
});