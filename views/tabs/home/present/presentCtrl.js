/**
 * Created by hxsd on 2016/6/17.
 */
app.controller("presentCtrl",function($scope,$http){
    $http.post("json/presentBox.json").success(function(data){
        $scope.presents=data.data.list;
    }).finally();
});