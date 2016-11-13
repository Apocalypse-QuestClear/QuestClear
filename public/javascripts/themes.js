angular.module('QuestClear').config(function($mdThemingProvider) {
    $mdThemingProvider.theme('white')
        .primaryPalette('grey', {
            'hue-1': '50',
            'hue-2': '300'
        })
        .accentPalette('blue')
        .warnPalette('red');

    $mdThemingProvider.theme('home')
        .primaryPalette('grey', {
            'hue-1': '50'
        })
        .accentPalette('indigo');

    $mdThemingProvider.theme('default')
        .primaryPalette('blue', {
            'default': '700'
        });
});