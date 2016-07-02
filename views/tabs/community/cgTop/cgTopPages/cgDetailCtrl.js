/**
 * Created by hxsd on 2016/6/17.
 */
app.controller("cgDetailCtrl",function($scope,$state){
    $scope.back = function () {
        $state.go('tabs.community.cgTop')
    };
});