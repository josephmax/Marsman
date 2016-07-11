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
    }).finally(function(){
        $scope.careersGrade = $stateParams.careersGrade;
    $('#indicatorContainer').radialIndicator({
        barColor: {
            0: '#bfbfbf',
            70: '#bfbfbf',
            80: 'red',
            90: "#57d1ae"
        },
        barWidth: 8,
        initValue: 0,
        roundCorner: true
    }).css("transform","translate(0,10%) scale(1.3)");


    if ($scope.careersGrade < 80) {
        $("#indicator_text").css("color", "#bfbfbf").text("职业素质分已经不满足毕业标准，请注意");
    } else if ($scope.careersGrade < 90) {
        $("#indicator_text").css("color", "#fb5e5e").text("职业素质分即将不满足毕业标准，请注意");
    } else {
        $("#indicator_text").css("color", "#57d1ae").text("请继续保持良好的考勤和学习状态");
    }
    var radialObj = $('#indicatorContainer').data('radialIndicator');
    radialObj.animate($scope.careersGrade);
    });
});