var canvas;
var stage;
var txt;
var count = 0;
var newHead;
window.onload = function () {
    canvas = document.getElementById("canvas");

    // 创建一个舞台对象
    stage = new createjs.Stage(canvas);
    //txt = new createjs.Text("Hello CNBlogs->", "20px Arial", "#ff7700");
    //stage.addChild(txt);
    newHead = new head();	
    newHead.y=100;
    stage.addChild(newHead);
    createjs.Ticker.addEventListener("tick", tick);
}

function tick(e)
{
    count++;
    newHead.x=newHead.x+2;
    console.log(newHead.x);
    //txt.text = "Hello CNBlogs->" + count + "☺";
    stage.update();
}