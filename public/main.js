var canvas=document.getElementById("gameCanvas");
var ctx=canvas.getContext("2d");
var ratio=1;
var tiles;
var size=20;
var alignImage=false;


var pastTime=0;
var game;

function resizeCanvas(){
	//canvas.style.width=0;
	//canvas.style.height=0;
	
	var w=window.innerWidth;
	var h=window.innerHeight;
	
	canvas.width=Math.floor(w*ratio)
	canvas.height=Math.floor(h*ratio)
	
	canvas.style.width=canvas.width/ratio+"px";
	canvas.style.height=canvas.height/ratio+"px";
	
}





function setRatio(r){
ratio=r;
resizeCanvas();
tiles=createTiles(size*ratio);
}

function goFullScreen(){
canvas.webkitRequestFullScreen&&canvas.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
canvas.webkitRequestFullscreen&&canvas.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
canvas.mozRequestFullScreen&&canvas.mozRequestFullScreen();
canvas.requestFullscreen&&canvas.requestFullscreen(); // Opera
setRatio(0.5);


}


setRatio(0.5);
game=makeNewPopperGame(Math.floor(window.innerWidth/size),Math.floor(window.innerHeight/size),size);
pastTime=Date.now();
draw();

function draw(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	game.update(Date.now()-pastTime);
	pastTime=Date.now();
	game.draw();	
	requestAnimationFrame(draw);
}






