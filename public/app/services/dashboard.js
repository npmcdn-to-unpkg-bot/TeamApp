angular.module('Teamapp').factory('DashboardService', function($http){
    return{
        getTimeLine: function(){
            return $http.get('/timeline');
        },
        getTimeLineByResource: function(){
            return $http.get('/timeline/resource');
        }
    }
});