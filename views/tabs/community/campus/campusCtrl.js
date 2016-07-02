/**
 * Created by hxsd on 2016/6/15.
 */
app.controller("campusCtrl",function($scope,$state,$http,$rootScope){
    $scope.goDetail=function() {
        $state.go('campusPage');
    };
    $http.post("json/campus.json",
        //$rootScope.test.url,
        {
            busiCode: "101010"
            , src: "100010|" + $rootScope.user.platformID
            , token: $rootScope.user.data.token
            , pageNum: 1
            , newsType: 0
        }).success(function(data){
        $scope.campus = data;
    }).finally();

    /* 下拉刷新 */
    $scope.loadMore = function () {
        $http.post("json/campus.json",
            //$rootScope.test.url,
            {
                busiCode: "101010"
                , src: "100010|" + $rootScope.user.platformID
                , token: $rootScope.user.data.token
                , pageNum: 1
                , newsType: 0
            }).success(function (data) {
            Array.prototype.push.apply($scope.campus.data.newsList, data.data.newsList);
        }).finally(function () {
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    }

});