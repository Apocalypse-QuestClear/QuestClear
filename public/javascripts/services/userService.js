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
                // console.log(data);
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
                    // console.log(data);
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

    service.test=function(){
             request.post('/panel/list',{
          msg:"this is a test"
      })
          .then(function(data){
              console.log(data)
          })
    };


    service.fetchList=function(num){
            request.post("/panel/fetch",{
                num:num
            })
            .then(function(data){
                return data
            })
    };

    service.ask=function(content){
        request.post("/panel/post",{
            cont:content
        })
            .then(function(data){
                return data
            })
    };

    service.checkQ=function(qid){
        request.post("/panel/checkQ",{
            qid:qid
        })
            .then(function(data){
                return data
            })
    };

    service.checkA=function(qid){
        request.post("/panel/checkA",{
            qid:qid
        })
            .then(function(data){
                return data
            })
    };

    service.answer=function(ans){
        request.post("/panel/answer",{
            ans:ans
        })
    };

    return service;
});