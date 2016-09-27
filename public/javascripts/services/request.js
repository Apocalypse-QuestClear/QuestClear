angular.module('QuestClear').factory("request", function ($http, $httpParamSerializer, config) {
    var service = {};

    service.request = function (method, url, data) {
        if (method === 'GET' && data) {
            url = url + '?' + $httpParamSerializer(data);
        }

        return $http({
            method: method,
            url: config.backendUrlPrefix + url,
            data: data
        }).catch(function (response) {
            if (response.data) {
                return Promise.reject(response.data.message);
            }
            else {
                return Promise.reject();
            }
        });
    };

    service.get = function (url, query) {
        return service.request('GET', url, query);
    };

    service.post = function (url, data) {
        return service.request('POST', url, data);
    };

    return service;
});