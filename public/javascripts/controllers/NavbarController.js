angular.module('QuestClear').controller("NavbarController", function ($timeout,$q,$log,$scope, $state, userService,panelService) {

    $scope.$watch(function () {
        return userService.user;
    }, function (user) {
        $scope.user = user;
    });


    var self = this;
    var keywords='';

    $scope.query={'keywords':'',
        'category':'',
        'uid':'',
        'limit':'',
        'after':''};

    self.simulateQuery = false;
    self.isDisabled    = false;
    self.candidates        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    // $scope.search=function(){
    //      console.log($scope.query);
    //     $scope.query['keywords']=keywords;
    //     console.log($scope.query);
    //     panelService.searchQuery($scope.query)
    //         .then(function(data){
    //             $state.go('panel.list',{
    //                keywords:keywords
    //             });
    //             console.log('得到了从后端返回的数据！');
    //             console.log(data);
    //             panelService.questsSetter(data);
    //
    //
    //         })
    //         .catch(function(err){
    //             console.log(err)
    //         })
    // };

    $scope.search=function(){
        $state.go('panel.list',{
            keywords:keywords
        });
        console.log($scope.query);
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
        keywords=text;
    }

    function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    }

    function loadAll() {
        var tmpCandidates = '';

        return tmpCandidates.split(/, +/g).map( function (q) {
            return {
                value: q.toLowerCase(),
                display: q
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


