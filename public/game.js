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
	//var
	
	var pullNew=true;
	
	
	game.chains=chains;
	var reuseGrid=new binaryData.Grid(w,h,8,false);
	var modifiedColumns=new binaryData.Array(w,16,false);
	
	function makeNewChain(x,y,h){
		var chain;
		if (usedChains.length>0){
			chain=usedChains.pop();
			chain.t.forEachSet(function(){return 0});
			chain.x=x;
			chain.y=y;
			chain.h=h;
		}else{
			chain={x:x,y:y,t:new binaryData.Array(height,8,false),h:h,v:0}
		}
		chains.push(chain);
		return chain;
	}
	
	function recycleChain(chain){
		usedChains.push(chain);	
	}
	
	function randomTile(){
	
		return Math.floor(Math.random()*4+2);
	}
	
	function chainify(){
	
		modifiedColumns.forEach(function(v,i,a){
		
		
			if(v){
				var chainNumber=0;
				var chainLength=0;
				
				for(var j=0;j<height;j++){
					
					
					if(grid.get(i,j)){
						
						chainLength++;
					
					}else if(chainLength||(!chainNumber&&pullNew)){
							var pull=(!chainNumber&&pullNew)?v:0;
					
							var chain=makeNewChain(i,(j-chainLength-pull)*size,chainLength+pull);
							
							for(var k=0;k<pull;k++){
								chain.t.set(k,randomTile());
							}
							for(var k=0;k<chainLength;k++){
								chain.t.set(k+pull,grid.get(i,j-chainLength+k));
								grid.set(i,j-chainLength+k,0)
							}
						
						chainNumber++;
					}
				
				}
			
			}
		
		});
	
	}
	
	
	//var
	
	
	game.grid.forEachSet(function(){
		return Math.floor(Math.random()*4+2)
	})



	
	
	/*function makeRandomChain(){
	
		var chain=makeNewChain();
		chain.x=Math.floor(Math.random()*width);
		chain.h=Math.floor(Math.random()*6)+1;
		chain.y=chain.h*-size-size;
		
		chain.t.forEachSet(function(){
			return Math.floor(Math.random()*4+2)
	

		},0,chain.h)
		
	
	}*/
	
	//setInterval(makeRandomChain,10);

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
		
			v.v=Math.min(size*0.5,v.v+size*0.03125*delta);
			v.y+=Math.min(v.v*delta*0.03125,size*0.5);
			
			if (grid.get(v.x,Math.floor((v.y+v.h*size)/size ) )||v.y+v.h*size>=height*size){
			
				v.t.forEach(function(t,i,a){
				
					if(t){
					grid.set(v.x,i+Math.floor((v.y)/size),t);
					//a.set(i,0);
					};
				})
				
				recycleChain(v);
				chains.splice(i, 1);
				i--;
				
				
			}
		
		}
	
	}
	
	game.click=function(x,y){
		
		x=Math.floor(x/size);
		y=Math.floor(y/size);
		modifiedColumns.setAll(0);
		var color=grid.get(x,y);
		var number=0;
		reuseGrid.setAll(0);
		
		if(color>1){
		propagate(grid,x,y,function check(v){
			return v==color;
		},
		function callback(x2,y2){
			number++;
			if(number==2){
				grid.set(x,y,0);
				modifiedColumns.set(x,modifiedColumns.get(x)+1);  //to be sure that there were at least 2 cells.
			}
			if (number>=2){
				grid.set(x2,y2,0);
				modifiedColumns.set(x2,modifiedColumns.get(x2)+1);							
			}
		},reuseGrid)
		
		chainify();
		};
		
	}
	game.usedChains=usedChains;
	game.chains=chains;

	return game;


}
