/**
 * Created by huangzhitan on 15-7-06
 */
$(function () {
    /** 方法定义**/
    //获得当前位置
    $.fn.getNowPosition = function () {
        var position = {};
        var top = $(this).offset().top;
        var left = $(this).offset().left;
        position.top = top;
        position.left = left;
        return position;

    };
    //让draggable元素复位
    $.fn.resetDom = function (startPos, nowPos) {
        //获得draggable的位移的left值和top值
        var moveLeft = startPos.left - nowPos.left;
        var moveTop = startPos.top - nowPos.top;
        //console.log('moveLeft:' + moveLeft + ',moveTop:' + moveTop);
        //动画:从当前位置移动到初始位置
        $(this).animate({left:startPos.left, top:moveTop}, '1500');
    };
    //分割字符串，获得term的id中的数字
    var sliceDragId = function (dragId) {
        var idNum = dragId.slice(4);
        return idNum;
    }

    /** 初始化同心圆 **/
    var context = $("#circle").get(0).getContext("2d");//获得上下文
    context.beginPath();//开始路径
    context.fillStyle = "rgb(255,255,255)";
    context.strokeStyle = "rgb(210,210,210)";
    context.arc(320, 320, 300, 0, Math.PI * 2, false);//绘制一个圆形
    context.closePath();//结束路径
    context.fill();//填充路径
    context.stroke();

    context.beginPath();//开始路径
    context.fillStyle = "rgb(245,245,245)";
    context.strokeStyle = "rgb(210,210,210)";
    context.arc(320, 320, 250, 0, Math.PI * 2, false);//绘制一个圆形
    context.closePath();//结束路径
    context.fill();//填充路径
    context.stroke();

    context.beginPath();//开始路径
    context.fillStyle = "rgb(233,233,233)";
    context.strokeStyle = "rgb(210,210,210)";
    context.arc(320, 320, 200, 0, Math.PI * 2, false);//绘制一个圆形
    context.closePath();//结束路径
    context.fill();//填充路径
    context.stroke();

    context.beginPath();//开始路径
    context.fillStyle = "rgb(215,215,215)";
    context.strokeStyle = "rgb(210,210,210)";
    context.arc(320, 320, 150, 0, Math.PI * 2, false);//绘制一个圆形
    context.closePath();//结束路径
    context.fill();//填充路径
    context.stroke();

    context.beginPath();//开始路径
    context.fillStyle = "rgb(195,195,195)";
    context.strokeStyle = "rgb(210,210,210)";
    context.arc(320, 320, 100, 0, Math.PI * 2, false);//绘制一个圆形
    context.closePath();//结束路径
    context.fill();//填充路径
    context.stroke();

    context.beginPath();//开始路径
    context.fillStyle = "rgb(117,170,214)";
    context.strokeStyle = "rgb(210,210,210)";
    context.arc(320, 320, 50, 0, Math.PI * 2, false);//绘制一个圆形
    context.closePath();//结束路径
    context.fill();//填充路径
    context.stroke();

    //初始化进度条
    $('#progressBar').progressbar({});


    //将所有term的初始位置保存到数组
    var positionList = [];
    for (var i = 0; i < 15; i++) {
        var position = $('#drag' + (i + 1)).getNowPosition();
        var object = {left: position.left, top: position.top};
        positionList.push(object);
    }

    //termTextList
    var termTextList = [];

    //console.log('positionList[0].left:' + positionList[0].left + ',positionList[0].top:' + positionList[0].top);
    //调用接口，初始化所有term

    /** 拖动效果 ，利用jquery.ui.Draggable和Droppable**/
    $('.leftbar div').draggable({
        revert: true,
        containment: '.top'
        //distance:'200',//超过200px才开始拖动
    });

    $('#circle').droppable({
        accept: ".leftbar div",
        over: function (event, ui) {
            var $that = ui.draggable;
            $that.draggable('option', 'revert', 'false');
        },
        deactivate:function(event,ui){

        }
    });
    //将.left设为droppable
    $('.left').droppable({
        accept: ".leftbar div",
        drop: function (event, ui) {
            var dragObject = ui.draggable;
            var dragId = dragObject.attr('id');
            var idNum = sliceDragId(dragId);
            var startPosition = positionList[idNum - 1];
            var nowPosition = dragObject.getNowPosition();
            dragObject.resetDom(startPosition, nowPosition);
            //console.log('startPosition.left:' + startPosition.left + ',startPosition.top:' + startPosition.top);
        }
    });
    /** 点击Next,所有term复位，并且最小的圆中的文本发生变化 **/
    $('.next-btn').on('click', function () {
        //所有term复位
        for (var i = 0; i < 15; i++) {
            var drag = $('#drag' + (i + 1));
            var nowPos = drag.getNowPosition();
            var startPos = positionList[i];
            if (startPos.left != nowPos.left || startPos.top != nowPos.top) {
                //console.log(nowPos.left + '' + nowPos.top);
                drag.resetDom(startPos, nowPos);
                //drag.animate({left:startPos.left-nowPos.left,top:startPos.top-nowPos.top},'2000');
            }else{
                //弹出对话框，遮罩
                $('#shade').css('background','#929394').removeClass('dsp-none').addClass('dsp-block');
            }
        }
        //最小的圆中的文本发生变化
        $('#circleP6').text();
        //每当点击一次next按钮，更新进度条的状态
        progressbar = $( "#progressBar" );
        var areaValuenow =  progressbar.attr('aria-valuenow');
        areaValuenow = parseInt(areaValuenow);
        if(areaValuenow != 100){
            areaValuenow = parseInt(areaValuenow)+5;
            progressbarInner = progressbar.find( ".ui-progressbar-value" );
            progressbar.progressbar( "option","value",areaValuenow);
        }else{
            //进度条超过100%时点击，弹出对话框
            
        }

    });

    /** 点击帮助按钮，弹出对话框 **/
    $('#help').on('click',function(){
        $('#shade').removeClass('dsp-none').addClass('dsp-block');
        $('#helpwrap').removeClass('dsp-none').addClass('dsp-block');
    });

    $('#closeHelpBtn').on('click',function(){
        $('#shade').removeClass('dsp-block').addClass('dsp-none');
        $('#helpwrap').removeClass('dsp-block').addClass('dsp-none');
    });
});