/**
 * 随机位置
 * @type {Number}
 */
var thisX, thisY;
/**
 * [i ]用于验证通过后动画效果
 * @type {Number}
 */
var i=1;
/**
 * 定时器
 */
var timer;
/**
 * 得到图片宽高
 * @type {[type]}
 */
var imgWidth = $(".blur-top").width();
var imgHeight = $(".blur-top").height();
// 初始化图片显示区域
getRandomVisibleArea();

$(".ok").click(function(event) {
    timer = setInterval(function() {
        console.log('定时器执行');
        setBlurTransition();

    }, 20);
});
/**
 * 程序初始化得到
 * @return {[type]} [description]
 */
function getRandomVisibleArea(){
// 随机图片显示位置
    var leftTopPointX = Math.random() * (imgWidth - 70);
    var leftTopPointY = Math.random() * (imgHeight - 70);
    thisX = leftTopPointX;
    thisY = leftTopPointY;
    $(".blur-top").css("clip", "rect(" + leftTopPointY + "px " + (leftTopPointX + 50) + "px " + (leftTopPointY + 50) + "px " + leftTopPointX + "px)");
}
/**
 * 验证通过后执行的动画
 */
function setBlurTransition() {
    var r = 30 * (i++);
    $(".blur-top").css("clip", "rect(" + (thisY - r) + "px " + (thisX + 50 + r) + "px " + (thisY + 50 + r) + "px " + (thisX - r) + "px)");
   /**
    * 当整张图片已经展现，则清理定时器
    * @param  {[type]} ((thisY -             r) < 0) &&        ((thisX - r) < 0) &&        ((thisY + 50 + r) > imgHeight) &&        ((thisX + 50 + r) > imgWidth) [description]
    * @return {[type]}         [description]
    */
    if (
        ((thisY - r) < 0) &&
        ((thisX - r) < 0) &&
        ((thisY + 50 + r) > imgHeight) &&
        ((thisX + 50 + r) > imgWidth)
    ) {
        clearInterval(timer);
        i = 0;
    }
}