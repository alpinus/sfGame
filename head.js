(function(window) {
head = function() {
	this.initialize();
}
head._SpriteSheet = new createjs.SpriteSheet({images: ["head.png"], frames: [[0,0,162,100,0,50,50],[162,0,162,100,0,50,50],[324,0,162,100,0,50,50],[0,100,162,100,0,50,50],[162,100,162,100,0,50,50],[324,100,162,100,0,50,50],[0,200,162,100,0,50,50],[162,200,162,100,0,50,50],[324,200,162,100,0,50,50],[0,300,162,100,0,50,50],[162,300,162,100,0,50,50],[324,300,162,100,0,50,50],[0,400,162,100,0,50,50],[162,400,162,100,0,50,50],[324,400,162,100,0,50,50],[0,500,162,100,0,50,50]]});
var head_p = head.prototype = new BitmapAnimation();
head_p.BitmapAnimation_initialize = head_p.initialize;
head_p.initialize = function() {
	this.BitmapAnimation_initialize(head._SpriteSheet);
	this.paused = false;
}
window.head = head;
}(window));

