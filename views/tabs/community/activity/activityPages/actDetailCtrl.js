/**
 * Created by hxsd on 2016/6/16.
 */
app.controller("actDetailCtrl",function($scope,$http,$state,$stateParams,$rootScope) {
    $http.post("json/actDetail.json",
    //$rootScope.test.url,
    {busiCode:"101027"
        ,src:"100010|"+$rootScope.user.platformID
        ,token:$rootScope.user.data.token
        ,id:$stateParams.id
    }).success(function (data) {
        $scope.actDetail = data;
    }).finally();
    console.log($stateParams.id);

    $scope.back = function () {
        $state.go('tabs.community.activity');
    }
});