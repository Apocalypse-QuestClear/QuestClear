var request = require('request');
var url = require('url');
var _ = require('lodash');

var config = require(__base + 'config');

var service = {};

service.request = function (req, res, method, requestUrl, data) {
    if (config.mockMap.hasOwnProperty(requestUrl)) {
        requestUrl = config.mockUrlPrefix + config.mockMap[requestUrl];
    }
    else {
        requestUrl = config.backendUrlPrefix + requestUrl;
    }

    var urlObj = url.parse(requestUrl, true);

    if (method === 'GET') {
        _.extend(urlObj.query, data);
    }

    return new Promise(function (resolve, reject) {
        request({
            method: method,
            url: url.format(urlObj),
            data: data,
            headers: {
                'x-access-token': req.cookies['access-token']
            }
        }, function (err, response, body) {
            if (err) return reject(err);

            var data = JSON.parse(body);

            if (response.statusCode !== 200) {
                reject({
                    status: response.statusCode,
                    message: data.error
                });
            }
            else {
                resolve(data);
            }
        });
    });
};

service.get = function (req, res, requestUrl, query) {
    return service.request(req, res, 'GET', requestUrl, query);
};

service.post = function (req, res, requestUrl, data) {
    return service.request(req, res, 'POST', requestUrl, data);
};

service.put = function (req, res, requestUrl, data) {
    return service.request(req, res, 'PUT', requestUrl, data);
};

service.patch = function (req, res, requestUrl, data) {
    return service.request(req, res, 'PATCH', requestUrl, data);
};

service.delete = function (req, res, requestUrl, data) {
    return service.request(req, res, 'DELETE', requestUrl, data);
};

module.exports = service;