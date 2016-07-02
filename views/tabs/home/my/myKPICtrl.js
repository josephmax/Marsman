/**
 * Created by hxsd on 2016/6/17.
 */
app.controller("myKPICtrl", function ($scope, $http, $rootScope, $stateParams) {
    $http.post("json/myKPI.json",
        //$rootScope.test.url,
        {
            busiCode: "101009"
            , src: "100010|" + $rootScope.user.platformID
            , token: $rootScope.user.data.token
            , pageNum: 1
        }).success(function (data) {
            $scope.myKPI = data;
        }).finally();
    $scope.careersGrade = $stateParams.careersGrade;
    /*$scope.$on('$viewContentLoaded', function () {
        alert('1');
    });
    $(function () {
        var radialObj = radialIndicator('#indicatorContainer', {
            barColor: '#87CEEB',
            barWidth: 10,
            roundCorner: true,
            initValue: $scope.careersGrade
        });

    //Using Instance
        radialObj.animate(60);
    });*/
});