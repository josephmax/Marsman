/**
 * Created by hxsd on 2016/6/15.
 */
app.controller("cgTopCtrl",function($scope,$http,$state){
    $http.get("json/cgTop.json").success(function (data) {
        $scope.cgTopList = data;
    }).finally();
    $scope.loadMore = function () {
        $http.get("json/cgTop.json").success(function (data) {
            // 追加新数据
            Array.prototype.push.apply($scope.cgTopList.data.newsList, data.data.newsList);

        }).finally(function () {
            // 通知框架，更新数据结束 - 撤销图标
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };
    $scope.goDetail=function() {
        $state.go('cgTopPage');
    };
});