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







setRatio(1);
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
	
	var width=w;
	var height=h;

	var chains=[];
	var usedChains=[];
	game.chains=chains;
	
	
	function makeNewChain(){
		var chain;
		if (usedChains.length>0){
			chain=usedChains.pop();
		}else{
			chain={x:0,y:0,t:new binaryData.Array(height,8,false),h:0}
		}
		chains.push(chain);
		return chain;
	}
	
	//var
	
	
	game.grid.forEachSet(function(){
		return Math.floor(Math.random()*4+1)
	},0,height-5,width)


	var chain=makeNewChain();
	chain.t.forEachSet(function(){
		return Math.floor(Math.random()*4+1)
	

	},0,7)

	game.draw=function gameDraw(){
		var size=this.size;
		
		
		
		this.grid.forEach(function(v,x,y){
		
			ctx.drawImage(tiles[v],x*size*ratio,y*size*ratio,size*ratio,size*ratio)
	
		})
		
		
		chains.forEach(function(c){
		
			c.t.forEach(function(v,i){
			
				ctx.drawImage(tiles[v],c.x*size*ratio,(i*size+c.y)*ratio);
			
			})
		
		});
		

	}

	return game;


}
