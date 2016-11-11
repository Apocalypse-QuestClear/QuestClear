/**
 * Created by EdwardChor on 05/11/2016.
 */
angular.module('QuestClear').factory('panelService',function(request){
    var service={};

    service.test=function(){
        request.post('/panel/list',{
            msg:"this is a test"
        })
            .then(function(data){
                // console.log(data)
            })
    };


    service.fetchList = function (num) {
        return request.post("/panel/fetch", {
            num: num
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
    };

    service.answer=function(ans){

        return request.post("/panel/answer",{
            ans:ans
        })
    };

    service.searchQuery=function(query){
        kw=query;
        return request.post('/panel/querySearch',{
            keywords:kw
        })
    };

    return service;
});