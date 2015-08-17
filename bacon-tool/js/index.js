/**
 * Created by huangzhitan on 15-7-06
 */
$(function () {

    //重新载入页面以获取源代码: http://survey.buzzsponge.com/Bacon/jsongateway.aspx?proxy&destination=fluorine&source=Bacon.FFService.BaconFFService


    /** 常量定义**/
    var SURVEYID = 61;
    var TERMNUM = 22;//term的个数
    var IDPRENUM =4;//draggable元素id的字母前缀字数
    var DROPPOS = {};
    DROPPOS.LEFTMIN = 141;//圆的x坐标最左
    DROPPOS.LEFTMAX = 1362;//圆的x坐标最右
    DROPPOS.TOPMIN = 76;
    DROPPOS.TOPMAX = 676;
    var LEFTBAR = {};
    LEFTBAR.LEFTMIN = 0;
    LEFTBAR.LEFTMAX = 140;
    LEFTBAR.TOPMIN = 50;
    LEFTBAR.TOPMAX = 785;

    /** 方法定义 **/
    //获得当前位置
    $.fn.getNowPosition = function () {
        var position = {};
        var top = $(this).offset().top;
        var left = $(this).offset().left;
        //var top = $(this).position().top;
        //var left = $(this).position().left;
        position.top = top;
        position.left = left;
        return position;
    };
    //获取随机数
    function getRadomNum(Min,Max){
        var Range = Max-Min;
        var Rand =  Math.random();
        return(Min+Math.round(Rand*Range));
    }

    //让draggable元素复位
    $.fn.resetDom = function (startPos) {
//        //获得draggable的位移的left值和top值
//        var moveLeft = (nowPos.left-startPos.left);
//        var moveTop = (nowPos.top-startPos.top);
//        //console.log('startPos:' + startPos.left + ',startPos:' + startPos.top);
        //从当前位置移动到初始位置
        //$(this).css('transform','translate(-'+moveLeft+'px,-'+moveTop+'px)');
        $(this).animate({left:startPos.left,top:startPos.top},'1000',function(){
                var nowPos = $(this).getNowPosition();
                var isIn = isInCircle(nowPos);
                //去掉红色飞刀
                if(!isIn){
                    if($(this).find('img').attr('class')){
                        $(this).find('img').remove();
                    }
                }
        });
    };

    //分割字符串，获得term的id中的数字
    var sliceDragId = function (dragId) {
        var idNum = dragId.slice(IDPRENUM);
        return idNum;
    };
    //判断是否在circle中
    var isInCircle = function(nowPosition){
        var leftIn = nowPosition.left > DROPPOS.LEFTMIN && nowPosition.left < DROPPOS.LEFTMAX;
        var topIn =  nowPosition.top > DROPPOS.TOPMIN && nowPosition.top < DROPPOS.TOPMAX;
        if(leftIn && topIn){
            return true;
        }else{
            return false;
        }
    };
    //判断是否在左边区域
    var isInLefBar = function(nowPosition){
        var leftIn = nowPosition.left > LEFTBAR.LEFTMIN && nowPosition.left < LEFTBAR.LEFTMAX;
        var topIn =  nowPosition.top > LEFTBAR.TOPMIN && nowPosition.top < LEFTBAR.TOPMAX;
        if(leftIn && topIn){
            return true;
        }else{
            return false;
        }
    };
    //字符串转成js对象
    function toObject(str){
        return (new Function('return '+str))();
    }
    /** 初始化同心圆 **/
    //圆也要动态创建
    var context = $("#circle").get(0).getContext("2d");//获得上下文
    function circleone(context){
        context.beginPath();//开始路径
        context.fillStyle = "rgb(117,170,214)";
        context.strokeStyle = "rgb(210,210,210)";
        context.arc(320, 320, 50, 0, Math.PI * 2, false);//绘制一个圆形
        context.closePath();//结束路径
        context.fill();//填充路径
        context.stroke();
        console.log('yuan 1');
    }
    function circletwo(context){
        context.beginPath();//开始路径
        context.fillStyle = "rgb(195,195,195)";
        context.strokeStyle = "rgb(210,210,210)";
        context.arc(320, 320, 100, 0, Math.PI * 2, false);//绘制一个圆形
        context.closePath();//结束路径
        context.fill();//填充路径
        context.stroke();
        console.log('yuan 2');
    }
    function circlethree(context){
        context.beginPath();//开始路径
        context.fillStyle = "rgb(215,215,215)";
        context.strokeStyle = "rgb(210,210,210)";
        context.arc(320, 320, 150, 0, Math.PI * 2, false);//绘制一个圆形
        context.closePath();//结束路径
        context.fill();//填充路径
        context.stroke();
        console.log('yuan 3');
    }
    function circlefour(context){
        context.beginPath();//开始路径
        context.fillStyle = "rgb(233,233,233)";
        context.strokeStyle = "rgb(210,210,210)";
        context.arc(320, 320, 200, 0, Math.PI * 2, false);//绘制一个圆形
        context.closePath();//结束路径
        context.fill();//填充路径
        context.stroke();
        console.log('yuan 4');
    }
    function circlefive(context){
        context.beginPath();//开始路径
        context.fillStyle = "rgb(245,245,245)";
        context.strokeStyle = "rgb(210,210,210)";
        context.arc(320, 320, 250, 0, Math.PI * 2, false);//绘制一个圆形
        context.closePath();//结束路径
        context.fill();//填充路径
        context.stroke();
        console.log('yuan 5');
    }
    function circlesix(context){
        context.beginPath();//开始路径
        context.fillStyle = "rgb(255,255,255)";
        context.strokeStyle = "rgb(210,210,210)";
        context.arc(320, 320, 300, 0, Math.PI * 2, false);//绘制一个圆形
        context.closePath();//结束路径
        context.fill();//填充路径
        context.stroke();
        console.log('yuan 6');
    }
    //圆中的文本
    function circleText(num,valueArray){
        for(var i = 0;i < num;i++){
            $('#concentricCircles').append(' <p id="circleP'+(i+1)+'" class="circle-p">'+valueArray[i]+'</p>');
        }
    }
    function circleDraw(circlenum,context){
        switch(circlenum){
            case 1:circleone(context);
                    break;
            case 2:circleone(context);
                    circletwo(context);
                    break;
            case 3:circleone(context);
                    circletwo(context);
                    circlethree(context);
                    break;
            case 4:circleone(context);
                    circletwo(context);
                    circlethree(context);
                    circlefour(context);
                    break;
            case 5:circleone(context);
                    circletwo(context);
                    circlethree(context);
                    circlefour(context);
                    circlefive(context);
                    break;
            case 6:circleone(context);
                    circletwo(context);
                    circlethree(context);
                    circlefour(context);
                    circlefive(context);
                    circlesix(context);
                    break;
            default:circleone(context);
        }
    }

    //获得service
    var s = new BaconFFService();
    var surveyInfo = s.GetSurvey(SURVEYID);//传回来是字符串
    var surveyObject = toObject(surveyInfo.substring(1,surveyInfo.length-1));
    var max = surveyObject.SurveyObjectsCount;
    var objectCount = surveyObject.SurveyObjectsCount;
    var ValueMax = surveyObject.ValueMax;
    var circleNum = parseInt(ValueMax)-1;
    //动态绘制标靶
    circleDraw(circleNum,context);
    console.log('circleNum = '+circleNum);
    for(var i = 1;i <= objectCount;i++){
        $('#termList').append('<div id="drag'+i+'"><a class="menu"></a></div>');
    }
    //获得随机数
    var randomNum = getRadomNum(1,max);

    $('#drag'+randomNum).addClass('dsp-none');
    var surveyObjects = s.GetSurveyObjects(SURVEYID);
    var objectsLength = surveyObjects.length;
    var surveyObjectsStr = surveyObjects.substring(1,objectsLength-2);
    console.log('surveyObjectsStr:'+surveyObjectsStr);
    var objectArray = surveyObjectsStr.split('},');
    for(var j = 0;j < objectArray.length;j++){
        objectArray[j] = objectArray[j]+'}';
        console.log('objectArray['+j+']:'+ objectArray[j]);
        objectArray[j] = toObject(objectArray[j]);
        console.log('objectArray['+j+']:'+ objectArray[j]);
        $('#drag'+(j+1)).find('.menu').text(objectArray[j].ObjectName);
    }
    var circleHeart =  $('#drag'+randomNum+' a').text();
    console.log('circleHeart:'+circleHeart);
    var circleValueArray = [circleHeart,'Extremely Related','Largely Related','Moderately Related','somewhat Related','slightly Related'];
    //给标靶动态填数据
    circleText(circleNum,circleValueArray);
    console.log('objectArray:'+objectArray);
    //console.log(s.AddSurveyResult());
    //调用保存结果的方法：传入参数为:SurveyID、ResultValue、ResponseID、BzzID、UserName、UserEmail、Memo

    //初始化进度条
    $('#progressBar').progressbar({value:10});

    //将所有term的初始位置保存到数组
    var positionList = [];
    for (var i = 0; i < TERMNUM; i++) {
        var position = $('#drag' + (i + 1)).getNowPosition();
        var object = {left: position.left, top: position.top};
        positionList.push(object);
    }
    //termTextList
    var termTextList = [];//term的初始化

    //console.log('positionList[0].left:' + positionList[0].left + ',positionList[0].top:' + positionList[0].top);
    //调用接口，初始化所有term
    /** 拖动效果 ，jquery.ui.Draggable和Droppable**/
    $('.leftbar div').draggable({
        containment: '.top',
        //distance:'200',//超过200px才开始拖动
        start:function(event,ui){
            $(this).css('transform','none');
        },
        stop:function(event,ui){
            //放开draggable的时候，出现红色飞刀动画
            var dragobject  = $(this);
            var nowPos = dragobject.getNowPosition();
            var isIncir = isInCircle(nowPos);
            var isInbar = isInLefBar(nowPos);
            if(isIncir){
                if(!dragobject.find('img').attr('class')){
                    dragobject.append('<img class="fly-cuter" src="images/flycuter.png" />');
                    //img原来的坐标： top:-70px，left:100px
                    dragobject.find('img').animate({top:-35,left:70});
                }
            }
            if(isInbar){
                var dragId = dragobject.attr('id');
                var idNum = sliceDragId(dragId);
                var startPos = positionList[idNum-1];
                dragobject.resetDom(startPos);
            }
            if(nowPos.top < LEFTBAR.TOPMIN||nowPos.top > DROPPOS.TOPMAX){
                var dragId = dragobject.attr('id');
                var idNum = sliceDragId(dragId);
                var startPos = positionList[idNum-1];
                dragobject.resetDom(startPos);
            }
        }
    });

    $('#circle').droppable({
        accept: ".leftbar div",
        activate:function(event,ui){
            var dragobject = ui.draggable;
            //移除红色飞刀
            if(dragobject.find('img').attr('class')){
                dragobject.find('img').remove();
            }
        },
        out:function(event,ui){
            $('.leftbar div').find('img').remove();
        }
    });
    /** 点击Next,所有term复位，并且最小的圆中的文本发生变化 **/
    $('.next-btn').on('click', function () {
        //所有term复位
        var count = 0;
        for (var i = 0; i < TERMNUM; i++) {
            var drag = $('#drag' + (i + 1));
            var nowPos = drag.getNowPosition();
            var startPos = positionList[i];
            if (startPos.left != nowPos.left || startPos.top != nowPos.top) {
                count+=1;
                drag.resetDom(startPos, nowPos);
            }
        }
        if(count == 0){
            $('#shade').css('background','#929394').removeClass('dsp-none').addClass('dsp-block');
            alert("please select a term on the left and drop onto the target");
            $('#shade').css('background','#fff').removeClass('dsp-block').addClass('dsp-none');
        }
        //最小的圆中的文本发生变化
        $('#circleP6').text();
        //每当点击一次next按钮，更新进度条的状态
        progressbar = $( "#progressBar" );
        var areaValuenow =  progressbar.attr('aria-valuenow');
        areaValuenow = parseInt(areaValuenow);
        if(areaValuenow < 100){
            areaValuenow = parseInt(areaValuenow)+5;
            progressbarInner = progressbar.find( ".ui-progressbar-value" );
            progressbar.progressbar( "option","value",areaValuenow);
        }else{
            //进度条超过100%时，出现遮罩，弹出对话框
            $('#shade').removeClass('dsp-none').addClass('dsp-block');
            $('#excellentJob').removeClass('dsp-none').addClass('dsp-block');
            //十秒钟后刷新页面
            setTimeout(function(){
                location.reload();
            },10000);
        }
    });
    /** 点击帮助按钮，弹出对话框和遮罩 **/
    $('#help').on('click',function(){
        $('#shade').removeClass('dsp-none').addClass('dsp-block');
        $('#helpwrap').removeClass('dsp-none').addClass('dsp-block');
    });
    /** 点击I'm ready按钮，关闭对话框和遮罩**/
    $('#closeHelpBtn').on('click',function(){
        $('#shade').removeClass('dsp-block').addClass('dsp-none');
        $('#helpwrap').removeClass('dsp-block').addClass('dsp-none');
    });
});