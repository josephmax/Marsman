/**
 * Created by hxsd on 2016/6/15.
 */
app.controller("homeCtrl",function($scope,$http,$rootScope,$state,$ionicSlideBoxDelegate){
    $http.post("json/bannerTop3.json",
    //$rootScope.test.url,
        {busiCode:"101025"
        ,src:"100010|"+$rootScope.user.platformID
        ,token:$rootScope.user.data.token
        }).success(function(data){
      $scope.banner=data.data.list;
    }).finally(function(){
        $ionicSlideBoxDelegate.update();
    });

    $http.post("json/home5star.json",
        //$rootScope.test.url,
        {busiCode:"101015"
            ,src:"100010|"+$rootScope.user.platformID
            ,token:$rootScope.user.data.token
        }).success(function(data){
            $scope.home5star=data.data.list
        }).finally();

    $scope.pagerClick=function(index){
        $ionicSlideBoxDelegate.slide(index);
    };

    $scope.goSetting=function(){
        $state.go("setting");
    }
});