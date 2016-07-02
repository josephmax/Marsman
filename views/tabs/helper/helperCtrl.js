app.controller("helperCtrl", function ($scope, $rootScope, $http) {

    $http.post(
        "json/record.json"
        /*$rootScope.test.url*/,{
         "busiCode":"101020",
         "src":"100010|"+$rootScope.user.platformID,
         "token":$rootScope.user.data.token,
         "pageNum":"1"
         }
    ).success(function (data) {
        $scope.evalue = data.data.list;
        for (i in $scope.evalue) {
            if ($scope.evalue[i].status == 3) {
                $scope.evalue[i].status = "已提交";
            }
        }
    }).finally();
    $scope.showEvaluate = function () {
        console.log("abc");
        $rootScope.popupStyle.assess.display = "block";
    };

    $scope.evalueItem = {
        rate: null
    };
    $rootScope.star = {
        one: {
            background: 'url("images/kongxing.png") no-repeat left top'
            , display: 'block'
            , width: '4.7rem'
            , height: '4.5rem'
            , float: 'left'
            , backgroundSize: 'cover'
        }
        , two: {
            background: 'url("images/kongxing.png") no-repeat left top'
            , display: 'block'
            , width: '4.7rem'
            , height: '4.5rem'
            , float: 'left'
            , backgroundSize: 'cover'
        },
        three: {
            background: 'url("images/kongxing.png") no-repeat left top'
            , display: 'block'
            , width: '4.7rem'
            , height: '4.5rem'
            , float: 'left'
            , backgroundSize: 'cover'
        },
        four: {
            background: 'url("images/kongxing.png") no-repeat left top'
            , display: 'block'
            , width: '4.7rem'
            , height: '4.5rem'
            , float: 'left'
            , backgroundSize: 'cover'
        },
        text:"请打星评价"
    };
    $rootScope.rate = function (star) {
        $scope.evalueItem.rate = star;
        switch (star){
            case 1:
                $rootScope.star.one.background='url("images/shixing.png") no-repeat left top';
                $rootScope.star.two.background='url("images/kongxing.png") no-repeat left top';
                $rootScope.star.three.background='url("images/kongxing.png") no-repeat left top';
                $rootScope.star.four.background='url("images/kongxing.png") no-repeat left top';
                $rootScope.star.text="未解决";
                break;
            case 2:
                $rootScope.star.one.background='url("images/shixing.png") no-repeat left top';
                $rootScope.star.two.background='url("images/shixing.png") no-repeat left top';
                $rootScope.star.three.background='url("images/kongxing.png") no-repeat left top';
                $rootScope.star.four.background='url("images/kongxing.png") no-repeat left top';
                $rootScope.star.text="不满意";
                break;
            case 3:
                $rootScope.star.one.background='url("images/shixing.png") no-repeat left top';
                $rootScope.star.two.background='url("images/shixing.png") no-repeat left top';
                $rootScope.star.three.background='url("images/shixing.png") no-repeat left top';
                $rootScope.star.four.background='url("images/kongxing.png") no-repeat left top';
                $rootScope.star.text="满意";
                break;
            case 4:
                $rootScope.star.one.background='url("images/shixing.png") no-repeat left top';
                $rootScope.star.two.background='url("images/shixing.png") no-repeat left top';
                $rootScope.star.three.background='url("images/shixing.png") no-repeat left top';
                $rootScope.star.four.background='url("images/shixing.png") no-repeat left top';
                $rootScope.star.text="非常满意";
                break;
        }
    };
    $rootScope.submitRate=function(){
        if($scope.evalueItem.rate){
            $http.post($rootScope.test.url
                ,{
                    "busiCode":"101022",
                    "src":"100010|"+$rootScope.user.platformID,
                    "token":$rootScope.user.data.token,
                    "evaluate":$scope.evalueItem.rate
                }).success(function(data){
                console.log(data);
            });
            $scope.evalueItem.rate=null;
            $rootScope.star.one.background='url("images/kongxing.png") no-repeat left top';
            $rootScope.star.two.background='url("images/kongxing.png") no-repeat left top';
            $rootScope.star.three.background='url("images/kongxing.png") no-repeat left top';
            $rootScope.star.four.background='url("images/kongxing.png") no-repeat left top';
            $rootScope.star.text="请打星评价";
            $rootScope.popupStyle.assess.display = "none";
        }
    };
    $(function() {
        /*//ajax请求
         $.ajax({
         url: "json/record.json",
         type: "get",
         dataType: "json",
         success: function (data) {
         if (!data) {
         $(".notice p").html("还没有向火星发出任何求救信号哦");
         $(".status").hide();
         } else {
         $(".status").show();
         var evaluate = "";
         var solution = "";
         for (var i = 0; i < data.data.list.length; i++) {
         var content = data.data.list[i];
         var data1, date, time, nowTime;
         data1 = content.date.split(" ");
         date = data1[0];
         time = data1[1].split(":");
         nowTime = time[0] + ":" + time[1];
         if (content.evaluate == true) {
         evaluate = "已评价";
         } else {
         evaluate = $("<input type='button' value='评价' class='pingJia'>").bind("click",function(){

         $rootScope.popupStyle.assess.display="block";

         });
         }
         if (content.status == 3) {
         solution = "已处理";
         }
         //定义一个行对象
         var row = $("<tr/>");
         //定义第一个单元格对象
         //var cell1 = $("<td/>");
         var cell1 = $("<td/>");
         cell1.append(nowTime + "<br>" + date);
         row.append(cell1);
         //定义第二个单元格对象
         var cell2 = $("<td/>");
         cell2.text(solution).appendTo(row);
         //定义第三个单元格对象
         var cell3 = $("<td/>");
         cell3.append(evaluate);
         row.append(cell3);
         $(".status").append(row);
         }
         }
         }, error: function (data) {
         alert("错误信息：" + data.status + ":" + data.statusText);
         }
         });*/
        //当文本框获取焦点后，“快来帮帮我”按钮高亮显示

        //当文本框失去焦点后，“快来帮帮我”按钮灰显
        $(".jsl_txt").focus(function () {
            $("#jsl_btn").css("background-Color", "#19ADB9");
            $(this).css("boxShadow","0 0 4px #19ADB9");
        }).blur(function () {
            $("#jsl_btn").css("background-Color", "#9ad7db");
            $(this).css("boxShadow","");
        });
        //判断：当文本框为空时，按钮为不可用
        function check() {
            if ($(".jsl_txt").val() == "") {
                $("#jsl_btn").attr("disabled", true);
                return false;
            }
            $("#jsl_btn").attr("disabled", false);
        }

        //"快来帮帮我"按钮的点击事件
        $("#jsl_btn").click(function () {
            //段落首尾空格去除
            var msg = $(".jsl_txt").val().replace(/['\t]/g, '').replace(/\s*!/g, '');
            if (msg == "") {
                //信息非空验证
                $(".jsl_txt").val("");
                return false;
            } else {
                //向服务器端发送表单中的数据
                $.post(
                    "http://221.123.177.56/client.do"
                    , {
                        busiCode: "101021",
                        src: "100010|" + $rootScope.user.platformID,
                        token: $rootScope.user.data.token,
                        content: msg
                    }
                    //通过回调函数查看是否提交成功
                    , function (data) {
                        console.log(data);
                    }
                );
                //清空文本框
                $(".jsl_txt").val("");
            }
        });
    });
});