/**
 * Created by hxsd on 2016/6/15.
 */
app.controller("activityCtrl",function($scope,$http,$state,$rootScope){
    $http.post("json/activity.json",
        //$rootScope.test.url,
        {busiCode:"101025"
            ,src:"100010|"+$rootScope.user.platformID
            ,token:$rootScope.user.data.token
            ,pageNum:1
        }).success(function(data){
        $scope.act = data;
    }).finally();

    $scope.goDetail=function() {
        $state.go('activityPage');
    }
});