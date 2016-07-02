/**
 * Created by hxsd on 2016/6/17.
 */
app.controller("campDetailCtrl",function($scope,$http,$state){
    $scope.$on('$ionicView.enter', function() {
        console.log("entered campus");
    });
    $http.get("json/camDetail.json").success(function(data){
        $scope.camDetail = data;
    }).finally();

    $scope.back = function () {
        $state.go('tabs.community.campus')
    }
});