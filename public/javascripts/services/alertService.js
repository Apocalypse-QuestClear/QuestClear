angular.module('QuestClear').factory('alertService', function($mdDialog){
    var service={};

    service.showAlert = function(info) {
        return $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title(info)
                .textContent('')
                .ariaLabel('')
                .ok('好')
                .targetEvent()
        );
    };

    return service;
});