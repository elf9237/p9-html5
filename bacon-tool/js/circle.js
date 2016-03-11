function draw() {
      // var canvas = document.getElementById("circle");
      // if (canvas.getContext) {
      //   var ctx = canvas.getContext("2d");

      //   ctx.fillStyle = "rgb(200,0,0)";
      //   ctx.beginPath();//开始路径
      //   ctx.fillStyle = "rgb(117,170,214)";
      //   ctx.strokeStyle = "rgb(210,210,210)";
      //   ctx.arc(320, 320, 310, 0, Math.PI * 2, false);//绘制一个圆形
      //   ctx.closePath();//结束路径
      //   ctx.stroke();
      // };
      var canvas = document.getElementById("circle6");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.beginPath();//开始路径
        ctx.fillStyle = "rgb(117,170,214)";
        ctx.strokeStyle = "rgb(210,210,210)";
        ctx.arc(320, 320, 300, 0, Math.PI * 2, false);//绘制一个圆形
        ctx.closePath();//结束路径
        ctx.stroke();
      };
      var canvas = document.getElementById("circle5");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.beginPath();//开始路径
        ctx.fillStyle = "#F5F5F5";
        ctx.strokeStyle = "rgb(210,210,210)";
        ctx.arc(320, 320, 250, 0, Math.PI * 2, false);//绘制一个圆形
        ctx.closePath();//结束路径
        ctx.fill();
        ctx.stroke();
      };
       var canvas = document.getElementById("circle4");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.beginPath();//开始路径
        ctx.fillStyle = "#E9E9E9";
        ctx.strokeStyle = "rgb(210,210,210)";
        ctx.arc(320, 320, 200, 0, Math.PI * 2, false);//绘制一个圆形
        ctx.closePath();//结束路径
        ctx.fill();
        ctx.stroke();
      }
       var canvas = document.getElementById("circle3");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.beginPath();//开始路径
        ctx.fillStyle = "#D7D7D7";
        ctx.strokeStyle = "rgb(210,210,210)";
        ctx.arc(320, 320, 150, 0, Math.PI * 2, false);//绘制一个圆形
        ctx.closePath();//结束路径
        ctx.fill();
        ctx.stroke();
      }
       var canvas = document.getElementById("circle2");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.beginPath();//开始路径
        ctx.fillStyle = "#C3C3C3";
        ctx.strokeStyle = "rgb(210,210,210)";
        ctx.arc(320, 320, 100, 0, Math.PI * 2, false);//绘制一个圆形
        ctx.closePath();//结束路径
        ctx.fill();
        ctx.stroke();
      }
       var canvas = document.getElementById("circle1");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.beginPath();//开始路径
        ctx.fillStyle = "rgb(117,170,214)";
        ctx.strokeStyle = "rgb(210,210,210)";
        ctx.arc(320, 320, 50, 0, Math.PI * 2, false);//绘制一个圆形
        ctx.closePath();//结束路径
        ctx.fill();
        ctx.stroke();
      }
    }

    $(function(){
      $("#termList").children('.ui-draggable').css("height","25px");
    })