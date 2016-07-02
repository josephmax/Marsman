/**
 * Created by hxsd on 2016/6/17.
 */
app.controller("presentDetailCtrl",function($scope,$window,$rootScope,$state,$stateParams,$http){
    $http.post("json/5starDetail.json",
        //$rootScope.test.url,
        {busiCode:"101018"
            ,src:"100010|"+$rootScope.user.platformID
            ,token:$rootScope.user.data.token
            ,id:$stateParams.id
        }).success(function(data){
            $scope.present=data.data;
    }).finally();

});