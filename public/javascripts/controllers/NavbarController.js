angular.module('QuestClear').controller("NavbarController", function ($timeout,$q,$log,$scope, $state, userService) {

    $scope.$watch(function () {
        return userService.user;
    }, function (user) {
        $scope.user = user;
    });


    var self = this;

    self.simulateQuery = false;
    self.isDisabled    = false;

    // list of `state` value/display objects
    self.candidates        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    $scope.search=function(query){

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
    }

    function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
        var tmpCandidates = 'How to make a pizza?, How can I run faster?, How to cook?';

        return tmpCandidates.split(/, +/g).map( function (state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    }


    /**
     * Create filter function for a query string
     */
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


// ******************************
// Internal methods
// ******************************

/**
 * Search for states... use $timeout to simulate
 * remote dataservice call.
 */



