/* JS Document */
/*****************************
copy  weixin  ID ,add weixin 
*****************************/
$(document).ready(function () {
    // 使用 class 选择器, 这样所有带 copy-wechat-btn 类的元素都能生效
    if ($('.copy-wechat-btn').length > 0) {
        // 使用正确的 ClipboardJS v2.x 语法
        var clipboard = new ClipboardJS('.copy-wechat-btn');
        
        clipboard.on('success', function (e) {
            alert("微信号复制成功");
            // 延时跳转到微信
            setTimeout(function() {
                window.location.href = 'weixin://';
            }, 1500);
            e.clearSelection();
        });
        
        clipboard.on('error', function (e) {
            alert("复制失败，请手动复制微信号：墨芽赫礼");
        });
    }
});
