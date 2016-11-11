angular.module('QuestClear').controller("NavbarController", function ($timeout,$q,$log,$scope, $state, userService,panelService) {

    $scope.$watch(function () {
        return userService.user;
    }, function (user) {
        $scope.user = user;
    });


    var self = this;
    var query='';

    self.simulateQuery = false;
    self.isDisabled    = false;
    self.candidates        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    $scope.search=function(){

        panelService.searchQuery(query)
            .then(function(data){
                $state.go('panel.list',{
                   quests:data
                })
            })
    };

    function querySearch (query) {
        var results = query ? self.candidates.filter( createFilterFor(query) ) : self.candidates,
            deferred;
        if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }

    function searchTextChange(text) {
        $log.info('Text changed to ' + text);
        query=text
    }

    function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    }

    function loadAll() {
        var tmpCandidates = '如何制作一个披萨？, 怎样跑得比香港记者快?, 如何拆掉室友的机械键盘?'; //作为侯选项，先给这个功能留一个空

        return tmpCandidates.split(/, +/g).map( function (state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    }


    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };

    }



    $scope.logout = function () {
        userService.logout()
            .then(function () {
                $state.go('home.welcome');
            });
    };

});


