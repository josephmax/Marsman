/**
 * Created by Administrator on 2016/6/18.
 */
app.controller("indexCtrl", function ($scope, $rootScope, $ionicHistory,$window) {

    $rootScope.test={
        url:"http://221.123.177.56/client.do"
        ,mode:"true"
    };

    //在rootScope中储存登录后的用户数据
    $rootScope.user = {
        data: {
            studentName: "张三",
            token: "KJHLKLJLKSJDJ:LKJ",
            avatar: ""
        }
        ,mobile:""
        ,pwd:""
        ,platformID:""
    };

    //判断设备平台
    ionic.Platform.ready(function () {
        var isIOS = ionic.Platform.isIOS();
        var isAndroid = ionic.Platform.isAndroid();
        if (isAndroid) {
            $rootScope.user.platformID = "00001";
        } else if (isIOS) {
            $rootScope.user.platformID = "00002";
        } else {
            $rootScope.user.platformID = "00003";
        }
    });

    var height = window.innerHeight, width = window.innerWidth;
    $rootScope.popupStyle = {
        cover: {
            "height": height + "px"
            , "width": width + "px"
            , "position": "absolute"
            , "top": 0
            , "left": 0
            , "backgroundColor": "rgba(0,0,0,.5)"
            , "zIndex": 10
            , "display": "none"
        }
        , get: {
            "display": "none"
            , "zIndex": 10
        }
        , assess: {
            "height": "100%"
            , "width": "100%"
            , "background-color": "rgba(0,0,0,.3)"
            , "position": "absolute"
            , "top": 0
            , "left": 0
            , "zIndex":999
            , "display": "none"
        }
    };
    $rootScope.hideCover = function () {
        $rootScope.popupStyle.cover.display = "none";
    };

    $rootScope.go_back=function(){
        $window.history.back();
    }

});