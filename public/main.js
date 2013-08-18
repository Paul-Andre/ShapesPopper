var canvas=document.getElementById("gameCanvas");
var ctx=canvas.getContext("2d");
var ratio=1;
var tiles;

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
tiles=createTiles(64*ratio);
}


var tileColors=["red","green","blue","orange"];


function createTiles(size){

	var tiles=[];
	
	
	for(var i=0;i<tileColors.length;i++){
		
		var tile=document.createElement("canvas");
		var ctx=tile.getContext("2d");
		tile.width=size;
		tile.height=size;
		
		ctx.fillStyle=tileColors[i];
		ctx.fillRect(0,0,size,size);
	
		tiles.push(tile);
	}
	
	return tiles;
}




setRatio(0.125/2);
var game=makeNewPopperGame(Math.round(window.innerWidth/64),Math.round(window.innerHeight/64),64);

function draw(){

	game.draw();
	requestAnimationFrame(draw);
}

draw();


function makeNewPopperGame(w,h,size){

	var game={
		grid:new binaryData.Grid(w,h,8,false),
		size:size

	};

	var chains=[];
	var usedChains=[];
	
	var
	
	
	game.grid.forEachSet(function(){
		return Math.floor(Math.random()*4)
	})

	game.draw=function gameDraw(){
		var size=this.size;
		this.grid.forEach(function(v,x,y){
		
			ctx.drawImage(tiles[v],x*size*ratio,y*size*ratio)
	
		})

	}

	return game;


}
