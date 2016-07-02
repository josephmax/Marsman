/**
 * Created by Administrator on 2016/6/23.
 */
app.filter('trustHtml', function ($sce) {
    return function (input) {
        return $sce.trustAsHtml(input);
    }
});