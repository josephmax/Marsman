/**
 * Created by hxsd on 2016/6/17.
 */
app.controller("myScoreCtrl",function($scope,$http,$ionicGesture,$state,$rootScope){
    $scope.$on('$ionicView.enter', function() {
        //请求数据获取成绩列表并储存为score数组
        $http.post("json/myScore.json",
            {busiCode:"101008"
                ,src:"100010|"+$rootScope.user.platformID
                ,token:$rootScope.user.data.token
            }).success(function(data) {
                $scope.score = data.data.courseList;
                $scope.scoreInfo=data.data;
        }).then(function() {
            //定义了每一块的宽度为100像素,高度缩放为1.3倍,顶边距为0
            var blockWidth=100,scaleHeight=1.3,paddingTop=30;

            //请求成功后执行，根据请求到的周数设置canvas画布宽度
            $("canvas").attr({"width":blockWidth * ($scope.score.length-1)+20,
                "height":scaleHeight*100+paddingTop+30});
            //定义成绩的等级与对应的显示块Y轴高度
            var scoreRank = ["F", "D", "D+", "C-", "C", "C+", "B-", "B", "B+", "A-", "A", "A+"];
            var scoreY = ["100", "90", "80", "70", "60", "50", "40", "30", "20", "10","5","0"];
            var cxt = document.getElementById("canvas").getContext("2d");

            //开始作画
            cxt.beginPath();
            cxt.moveTo(0, paddingTop+scaleHeight * scoreY[scoreRank.indexOf($scope.score[0].grade)]);
            for (i = 1; i < $scope.score.length; i++) {
                cxt.lineTo(i * blockWidth, paddingTop+scaleHeight * scoreY[scoreRank.indexOf($scope.score[i].grade)]);
            }
            cxt.lineTo(blockWidth * ($scope.score.length-1), scaleHeight*100+paddingTop);
            cxt.lineTo(0, scaleHeight*100+paddingTop);
            cxt.closePath();

            //定义线性渐变的比例
            var canvasGra = cxt.createLinearGradient(0,0,blockWidth * ($scope.score.length-1),0);
            canvasGra.addColorStop(0,"#2cc599");
            canvasGra.addColorStop(1,"#75c7ef");
            cxt.fillStyle =canvasGra;
            cxt.fill();
            for (var i = 1; i < $scope.score.length; i++) {
                cxt.moveTo((i-1)*100+50,scaleHeight*100+paddingTop);
                cxt.lineTo((i-1)*100+50,0);
                cxt.strokeStyle="#ddf6f2";
                cxt.stroke();
            }
            //填充
            cxt.stroke();


            //画笔设为文字颜色
            cxt.fillStyle = "#2ac598";
            cxt.font = "bold 10px '微软雅黑'";
            cxt.textBaseline = 'top';

            //写入每一个值对应的成绩
            for(i in $scope.score){
                cxt.fillText($scope.score[i].grade,i * blockWidth,paddingTop+scaleHeight * scoreY[scoreRank.indexOf($scope.score[i].grade)]-20)
            }
            for (var i = 0; i < $scope.score.length; i++) {
                cxt.fillText("第"+(i+1)+"周",((i+1)-1)*90,scaleHeight*100+paddingTop )
            }
        })
    });

    $scope.back=function(){

        $state.go("tabs.home");
    }
});