angular.module('QuestClear').config(function($urlRouterProvider, $stateProvider) {
    $stateProvider
        .state("home", {
            templateUrl: 'views/home/home.html',
            controller: 'HomeController'
        })
        .state('home.welcome', {
            url: "/",
            templateUrl: 'views/home/welcome.html',
            controller: 'WelcomeController'
        })
        .state('home.login', {
            url: "/login",
            templateUrl: 'views/home/login.html',
            controller: 'LoginController'
        })
        .state('home.register', {
            url: "/register",
            templateUrl: 'views/home/register.html',
            controller: 'RegisterController'
        });

    $urlRouterProvider.otherwise('/');
});