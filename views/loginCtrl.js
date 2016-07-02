/**
 * Created by Administrator on 2016/6/22.
 */
app.controller("loginCtrl",function($rootScope,$http,$scope,$state){
    $scope.login=function(){
        $http.get(

            "json/login.json"

        //以下为非本地数据模拟情况的请求代码
        /*
         $http.post("http://221.123.177.56/client.do",{
            "busiCode":"101001"
            ,"mobile":$rootScope.user.mobile
            ,"pwd":$rootScope.user.pwd
            ,"src":"100010|"+$rootScope.user.platformID
        }*/
        ).success(function(data){
            $rootScope.user.data=data.data;
                $state.go("tabs.home");
        }).error(function(){
                console.log("error");
        })
    }
});