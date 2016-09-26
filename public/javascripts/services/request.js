angular.module('QuestClear').factory("request", function ($http, config) {
    var service = {};

    service.request = function (method, url, data) {
        return $http({
            method: method,
            url: config.backendUrlPrefix + url,
            data: data
        }).catch(function (response) {
            if (response.data) {
                console.log(response.data);
                return Promise.reject(response.data.message);
            }
            else {
                return Promise.reject();
            }
        });
    };

    service.get = function (url) {
        return service.request('GET', url);
    };

    service.post = function (url, data) {
        return service.request('POST', url, data);
    };

    return service;
});