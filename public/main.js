var canvas=document.getElementById("gameCanvas");
var ctx=canvas.getContext("2d");
var ratio=1;
var tiles;
var size=32;
var alignImage=false;
var gameOn=false;

if(Math.min(window.innerWidth,window.innerHeight)<32*16){
var size=32;
}else{
var size=64;
}


//ctx.fillText("Loading...",50,50);



var pastTime=0;
var game;

var all={
width:window.innerWidth,
height:window.innerHeight
}


window.onresize=function(){

all.width=window.innerWidth;
all.height=window.innerHeight;
resizeCanvas();
}


function resizeCanvas(){
	//canvas.style.width=0;
	//canvas.style.height=0;
	
	var w=all.width;
	var h=all.height;
	
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

/*
function goFullScreen(){
canvas.webkitRequestFullScreen&&canvas.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
canvas.webkitRequestFullscreen&&canvas.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
canvas.mozRequestFullScreen&&canvas.mozRequestFullScreen();
canvas.requestFullscreen&&canvas.requestFullscreen(); // Opera
setRatio(1);


}
*/



function makeMenu(){

	var menu={};
	
	var backDrop=makeNewPopperGame(Math.floor(window.innerWidth/size),Math.floor(window.innerHeight/size),size);
	
	var swing=0;
	
	menu.draw=function(delta){
		
		swing=(swing+delta)%2000;
		
		var scale=1+Math.sin(swing/1000*Math.PI)*0.025;
		ctx.globalAlpha=0.5;
		backDrop.draw();
		ctx.globalAlpha=1;
		ctx.save();
		ctx.scale(ratio,ratio);
		ctx.strokeStyle="#ffffff";
		//#112233
		//ctx.fillStyle="rgba(17,34,51,0.9)";
		ctx.fillStyle="rgba(90,100,250,0.9)";
		ctx.lineWidth = 16;
		ctx.fillRect(all.width/2-200,all.height/2-300,400,600);
		ctx.strokeRect(all.width/2-200,all.height/2-300,400,600);
		
		ctx.save();
		ctx.translate(all.width/2,all.height/2-100);
		ctx.scale(scale,scale);
		
		ctx.translate(-(all.width/2),-(all.height/2-100));		
		ctx.strokeStyle="#ffffff";
		ctx.lineWidth = 4;		
		ctx.fillRect(all.width/2-160,all.height/2-100-50,320,100);
		ctx.strokeRect(all.width/2-160,all.height/2-100-50,320,100);			
		ctx.translate(all.width/2+20+33,all.height/2-100);
		ctx.fillStyle="#ffffff";
		ctx.beginPath();
ctx.moveTo(0,-30);
ctx.lineTo(0,30);
ctx.lineTo(60,0);
ctx.closePath();
ctx.fill();

ctx.restore();	
		
		ctx.fillStyle="#ffffff";
		ctx.font = "50pt Arial";
		ctx.fillText("Play",all.width/2-130+20,all.height/2-80);

		
		ctx.restore();
	}
	
	menu.click=function(x,y){
		
		if (x>=all.width/2-160&&x<=all.width/2-160+320&&
			y>=all.height/2-100-50&&y<=all.height/2-100-50+100){
			
			initNewGame();
		}
		
	
	
	}
	
	menu.drag=function(x,y){
	
	
	}
	
	menu.over=function(x,y){
	
		
	}

return menu;

}
setRatio(1);
var menu=makeMenu();


function initNewGame(){

game=makeNewPopperGame(Math.floor(window.innerWidth/size),Math.floor(window.innerHeight/size),size);
gameOn=true;
}



pastTime=Date.now();
draw();

function draw(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	
	if(gameOn){
	game.update(Date.now()-pastTime);
	game.draw();
	}	else{
	menu.draw(Date.now()-pastTime);}
	
	pastTime=Date.now();
	requestAnimationFrame(draw);
}



canvas.onmousedown=function(evt){
//	console.log(evt);
	if(gameOn)
	game.click(evt.clientX,evt.clientY)
	else{
		
		menu.click(evt.clientX,evt.clientY);
	}

}

//canvas.onmousemove

canvas.addEventListener("touchstart",function(evt){


    var touch = event.targetTouches[0];
    if(gameOn){
    game.click(touch.pageX,touch.pageY);
    //alert("touchy!");
	return cancelEvent(evt);
	}else{
	
	
	}

},false);


