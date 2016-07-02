/**
 * Created by hxsd on 2016/6/17.
 */
app.controller("myScoreShareCtrl",function($scope,$rootScope){
    //��߷���ť
    var height=window.innerHeight,width=window.innerWidth;
    $scope.share=function(){
        $rootScope.popupStyle.cover.display="block";
        $rootScope.popupStyle.cover.height=height+"px";
        $rootScope.popupStyle.cover.width=width+"px";
    };

    //�ұ߱��水ť
    $scope.save=function(){
        $(".bh-popup").css("display","block");
        setTimeout('hideGet()',2000);
    };

});

function hideGet(){
    $(".bh-popup").css("display","none");
}