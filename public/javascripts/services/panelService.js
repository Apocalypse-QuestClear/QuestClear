/**
 * Created by EdwardChor on 05/11/2016.
 */
angular.module('QuestClear').factory('panelService',function(request){
    var service={};

    var quests=[];

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
        keywords=query['keywords'];
        category=query['category'];
        uid=query['uid'];
        limit=query['limit'];
        after=query['after'];
        return request.post('/panel/querySearch',{
            keywords:keywords,
            category:category,
            uid:uid,
            limit:limit,
            after:after
        })
    };
    service.searchByKeywords=function(key){
        return request.post('/panel/querySearch',{
            keywords:key,
            category:'',
            uid:'',
            limit:'',
            after:''
        })
    };

    service.questsSetter=function(data){
        console.log('quests set');
        quests=data;
    };

    service.questsGetter=function(){
        console.log('quests got');
        return quests;
    };

    return service;
});