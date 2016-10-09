angular.module('QuestClear').factory("userService", function (request) {
    var service = {};

    service.user = {};
    service.authResult = null;

    service.login = function (username, password) {
        return request.post('/login', {
            username: username,
            password: password
        })
            .then(function (data) {
                service.authResult = true;
                service.user = {
                    uid: data.uid,
                    username: data.username
                };

                return data;
            });
    };

    service.register = function (username, password, email) {
        return request.post('/register', {
            username: username,
            password: password,
            email: email
        })
            .then(function (data) {
                service.authResult = true;
                service.user = {
                    uid: data.uid,
                    username: data.username
                };

                return data;
            });
    };

    service.auth = function () {
        if (service.authResult != null) {
            return Promise.resolve(service.authResult);
        }
        else {
            return request.post('/auth', {})
                .then(function (data) {
                    service.authResult = true;
                    service.user = {
                        uid: data.uid,
                        username: data.username
                    };

                    return true;
                })
                .catch(function (msg) {
                    service.authResult = false;
                    service.user = {};
                    return false;
                });
        }
    };

    service.logout = function () {
        return request.post('/logout', {})
            .then(function (data) {
                service.authResult = false;
                service.user = {};
            });
    };

    return service;
});