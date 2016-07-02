/**
 * Created by hxsd on 2016/6/15.
 */
app.config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    $stateProvider.state("login",{
       url:"/login",
       templateUrl:"views/login.html",
       controller:"loginCtrl"
    });

    //配置了一级菜单的虚拟页面
    $stateProvider.state("tabs", {
        url: "/tabs",
        cache:true,
        abstract: true,
        templateUrl: "views/tabs/tabs.html"
    });

    //配置了首页相关的页面路由
    $stateProvider.state("tabs.home", {
        url: "/home",
        cache:true,
        views: {
            "tabs_home": {
                templateUrl: "views/tabs/home/home.html",
                controller: "homeCtrl"
            }
        }
    });

    $stateProvider.state("setting",{
       url:"/setting",
       templateUrl:"views/tabs/home/system/setting.html",
       controller:"settingCtrl"
    });

    //作品盒子列表路由
    $stateProvider.state("present",{
        url:"/present",
        cache:true,
        templateUrl:"views/tabs/home/present/present.html",
        controller:"presentCtrl"
    });

    //作品盒子详情页
    $stateProvider.state("presentDetail",{
        url:"/presentDetail:id",
        cache:true,
        templateUrl:"views/tabs/home/present/presentPages/presentDetail.html",
        controller:"presentDetailCtrl"
    });

    //配置了成绩页面
    $stateProvider.state("myScore", {
        url: "/myScore",
        cache:true,
        templateUrl: "views/tabs/home/my/myScore.html",
        controller: "myScoreCtrl"
    });

    //配置了成绩职素分页面
    $stateProvider.state("myKPI",{
        url:"/myKPI:careersGrade",
        cache:true,
        templateUrl:"views/tabs/home/my/myKPI.html",
        controller:"myKPICtrl"
    });

    //配置了成绩分享页面
    $stateProvider.state("myScoreShare", {
        url: "myScoreShare",
        cache:true,
        templateUrl: "views/tabs/home/my/myScoreShare.html",
        controller: "myScoreShareCtrl"
    });

    //配置了助手相关页面路由
    $stateProvider.state("tabs.helper", {
        url: "/helper",
        cache:true,
        views: {
            "tabs_helper": {
                templateUrl: "views/tabs/helper/helper.html",
                controller: "helperCtrl"
            }
        }
    });

    //配置了社区相关页面的虚拟路径及其二级菜单路由
    $stateProvider.state("tabs.community", {
        url: "/community",
        cache:true,
        abstract: true,
        views: {"tabs_community": {templateUrl: "views/tabs/community/community.html"}}
    });

    //配置了社区二级tab菜单中的活动通知列表页
    $stateProvider.state("tabs.community.activity", {
        url: "/activity",
        cache:true,
        views: {
            "community_activity": {
                templateUrl: "views/tabs/community/activity/activity.html"
                , controller: "activityCtrl"
            }
        }
    });

    //社区菜单下的活动通知详情页
    $stateProvider.state("activityPage", {
        url: "/activityPage:id",
        cache:true,
        templateUrl: "views/tabs/community/activity/activityPages/actDetail.html"
        ,controller: "actDetailCtrl"
        /*views: {
            "community_activity": {
                templateUrl: "views/tabs/community/activity/activityPages/actDetail.html"
                ,controller: "actDetailCtrl"
            }
        }*/
    });

    //配置了社区二级tab菜单中的校园通知列表页
    $stateProvider.state("tabs.community.campus", {
        url: "/campus",
        cache:true,
        views: {
            "community_campus": {
                templateUrl: "views/tabs/community/campus/campus.html"
                , controller: "campusCtrl"
            }
        }
    });

    //社区菜单下的校园通知详情页
    $stateProvider.state("campusPage", {
        url: "/campusPage",
        cache:true,
        templateUrl: "views/tabs/community/campus/campusPages/campDetail.html"
        , controller: "campDetailCtrl"
        /*views: {
            "community_campus": {
                templateUrl: "views/tabs/community/campus/campusPages/campDetail.html"
                , controller: "campDetailCtrl"
            }
        }*/
    });

    //配置了社区二级tab菜单中的CGTop列表页
    $stateProvider.state("tabs.community.cgTop", {
        url: "/cgTop",
        cache:true,
        views: {
            "community_cgTop": {
                templateUrl: "views/tabs/community/cgTop/cgTop.html"
                , controller: "cgTopCtrl"
            }
        }
    });

    //社区菜单下的CGTop详情页
    $stateProvider.state("cgTopPage", {
        url: "/cgTopPage",
        cache:true,
        templateUrl: "views/tabs/community/cgTop/cgTopPages/cgDetail.html"
        ,controller:"cgDetailCtrl"
        /*views: {
            "community_cgTop": {
                templateUrl: "views/tabs/community/cgTop/cgTopPages/cgDetail.html"
                ,controller:"cgDetailCtrl"
            }
        }*/
    });

    //测试用，拟用slidebox实现滑动切页
    $stateProvider.state("tabs.demo", {
        url: "/demo",
        cache:true,
        views: {
            "tabs_demo": {
                templateUrl: "views/tabs/demo/demoIndex.html"
                , controller: "demoCtrl"
            }
        }
    });

    $urlRouterProvider.otherwise("/login");

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
});