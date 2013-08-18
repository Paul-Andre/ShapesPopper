function makeNewPopperGame(w,h,size){

	var game={
		grid:new binaryData.Grid(w,h,8,false),
		size:size

	};
	
	var grid=game.grid;
	var width=w;
	var height=h;
console.log(grid);
	var chains=[];
	var usedChains=[];
	game.chains=chains;
	
	
	function makeNewChain(){
		var chain;
		if (usedChains.length>0){
			chain=usedChains.pop();
			chain.t.forEachSet(function(){return 0});
		}else{
			chain={x:0,y:0,t:new binaryData.Array(height,8,false),h:0,v:0}
		}
		chains.push(chain);
		return chain;
	}
	
	function recycleChain(chain){
		usedChains.push(chain);	
	}
	//var
	
	
	game.grid.forEachSet(function(){
		return Math.floor(Math.random()*4+2)
	},0,height-5,width)



	
	
	function makeRandomChain(){
	
		var chain=makeNewChain();
		chain.x=Math.floor(Math.random()*width);
		chain.h=Math.floor(Math.random()*6)+1;
		chain.y=chain.h*-size-size;
		
		chain.t.forEachSet(function(){
			return Math.floor(Math.random()*4+2)
	

		},0,chain.h)
		
	
	}
	
	setInterval(makeRandomChain,10);

	game.draw=function gameDraw(){
		var size=this.size;
		
		
		
		this.grid.forEach(function(v,x,y){
			if(v>1){
			ctx.drawImage(tiles[v],x*size*ratio,y*size*ratio,size*ratio,size*ratio)
			}
		})
		
		
		chains.forEach(function(c){
		
			c.t.forEach(function(v,i){
				
				if(v>1){
				ctx.drawImage(tiles[v],c.x*size*ratio,(i*size+c.y)*ratio);
				}
			
			})
		
		});
		

	}
	
	game.update=function(delta){
	
		for(var i=0; i<chains.length;i++)
		{
		var v=chains[i];
		
			v.v=Math.min(size*0.5,v.v+size*0.0625*delta);
			v.y+=v.v*delta*0.125;
			
			if (grid.get(v.x,Math.floor((v.y+v.h*size)/size ) )){
			
				v.t.forEach(function(t,i,a){
				
					if(t){
					grid.set(v.x,i+Math.floor((v.y)/size),t);
					a.set(i,0);
					};
				})
				
				recycleChain(v);
				chains.splice(i, 1);
				i--;
				
				
			}
		
		}
	
	}
	game.usedChains=usedChains;
	game.chains=chains;

	return game;


}
