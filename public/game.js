function makeNewPopperGame(w,h,size){

	var game={
		grid:new binaryData.Grid(w,h,8,false),
		size:size,
		width:w,
		height:h,
		chains:[],
		overlays:[]

	};
	
	var particleSystem=createParticleSystem();
	game.pS=particleSystem;
	var grid=game.grid;
	var width=w;
	var height=h;
console.log(grid);
	var chains=game.chains;
	for (var i=0;i<width;i++){
		
		chains.push([]);
	
	}
	var usedChains=[];
	var stage=1;
	var level=0;
	//var
	var levels=[];
	var l=levels;
	l[1]=150;
	l[2]=l[1]+Math.floor(width*height*0.4);
	l[3]=l[2]+Math.floor(width*height*0.4)+width;
	l[4]=l[3]+Math.floor(width*height*0.2);
	l[5]=l[4]+200
	l[6]=l[5]+200
	l[7]=l[6]+150
	l[8]=l[7]+100
	l[9]=l[8]+Math.floor(width*height*0.3);
	l[10]=l[9]+Math.floor(width*height*0.3);
	l[11]=l[10]+width*3;
	l[12]=l[11]+300;
		
	var pullNew=true;
	
	
	var cellsBroken=0;
	
	game.chains=chains;
	var reuseGrid=new binaryData.Grid(w,h,8,false);
	var modifiedColumns=new binaryData.Array(w,16,false);
	game.modifiedClumns=modifiedColumns;
	
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
		if(h>height){console.log(chain);alert(h)}
		chains[x].push(chain);
		return chain;
	}
	
	function recycleChain(chain){
		usedChains.push(chain);	
	}
	
	function onBurstedCells(){
	

		while(cellsBroken>l[level+1]&&level<l.length-1){
		level++;
			//alert(level);
			switch(level){
			case(1):
				pullNew=false;
				//alert("hey");
			break;
			case(2):
				for(var i=0; i<width;i++){
			
					var chain =makeNewChain(i,-size,1)
					chain.t.set(0,6);
					//chain.t.set(1,6);
			
				}
				for(var i=0;i<20*width;i++){
					
					var x=Math.random()*width*size;
				
					particleSystem.makeParticle(x,0,Math.random()*100+10,Math.random()*100+10,Math.random()*1000+1000,50,"white",5,0);
				
				
				}
			break;
			case(3):
				pullNew=true;
				stage=2;
				fill();		
			break;
			case(4):
				stage=3;
			break;
			case(5):
				stage=4;
			break;
			case(6):
				stage=5;
			break;
			case(7):
				stage=6;
			break;
			case(8):
				pullNew=false;
			break;
			case(9):
			//alert("hello");
				for(var i=0; i<width;i++){
			
					var chain =makeNewChain(i,-size,1)
					chain.t.set(0,randomTile());
					//chain.t.set(1,6);
			
				}
			break;
			case(10):
				stage=1;
				for(var i=0; i<width;i++){
					var chain =makeNewChain(i,-3*size,3)
					for(var j=0; j<3; j++){
					chain.t.set(j,randomTile());
					//chain.t.set(1,6);
					}
			
				}
			break;
			case(11):
				pullNew=true;
			break;
			case(12):
				alert("you have won the game at it's current state!");
			break;
			default:
			break;
			}
	
		}
	
	
	}
	
	function randomTile(){
		if (stage==1)
		return rand(4)+2
		if (stage==2)
		return [2,4,5,6][rand(4)];
		if (stage==3)
		return [2,4,4,4,4,5,6,6,6,6,6,6][rand(12)];
		if (stage==4)
		return [2,4,4,4,4,4,6,6,6,6,6,6][rand(12)];
		if (stage==5)
		return [2,2,2,4,5,4,3,5,6,4,6,6][rand(12)];
		if (stage==6)
		return [2,3,4,5,6][rand(5)];
		if (stage==7)
		return [2,3,4,5,6][rand(5)];
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
	
	function fill(){
	
		modifiedColumns.setAll(0);
	
		grid.forEach(function(v,x,y){
			
			if(v==0){
				modifiedColumns.set(x,modifiedColumns.get(x)+1);
			}
		
		});
		
		chains.forEach(function(a,i){
			a.forEach(function(c){
			
				modifiedColumns.set(i,Math.max(0,(modifiedColumns.get(i)-c.h)));
			
			});
		
		
		})
		
		chainify();
	
	}
	
	game.fill=fill;
	
	setInterval(function(){if(pullNew){
		fill();
	}},1000);
	
	
	//var
	
	
	
	/*for(var i=0;i<width;i++){
	
		var chain = makeNewChain(i,(height)*-size+i*-size/8,height)
		chain.t.forEachSet(randomTile);
	
	
	}*/
	
	game.grid.forEachSet(function(){
		return randomTile();
	})
	game.grid.set(5,5,16);


	
	
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
		
		
		chains.forEach(function(cA){
		
			cA.forEach(function(c){
		
			c.t.forEach(function(v,i){
				
				if(v>1){
				ctx.drawImage(tiles[v],c.x*size*ratio,(i*size+c.y)*ratio);
				}
			
			})
			
			});
		
		});
		
		ctx.save();
		ctx.scale(ratio,ratio);
		
		this.overlays.forEach(function(v){v.draw(ctx)});
		
		particleSystem.draw(ctx);
		
		ctx.restore();
		/*ctx.save();
		ctx.scale(ratio,ratio);
		ctx.fillStyle="#FFFFFF";
		ctx.strokeStyle="#223344";
		ctx.font = "60pt Arial";
		ctx.lineWidth=4;
		ctx.strokeText(cellsBroken,20,80);
		ctx.fillText(cellsBroken,20,80);
		ctx.restore();*/
	}
	
	game.update=function(delta){
	
		
		chains.forEach(function(chainArray,j){
		for(var i=0; i<chainArray.length;i++)
		{
		var v=chainArray[i];
		
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
				chainArray.splice(i, 1);
				i--;
				
				
			}
		
		}
		});
		
		for(var i=0;i<this.overlays.length;i++){
		
			if(this.overlays[i].update(delta)){
				this.overlays.splice(i,1);i--;
			}
		
		}
		
		particleSystem.update(delta);
	
	}
	
	function tileCompat(a,b){
	
	if (a>=powerIndex) a=a-powerIndex+baseIndex;
	if (b>=powerIndex) b=b-powerIndex+baseIndex;
	
	return a==b;
	
	
	}
	
	game.click=function(x,y){
	
		var specialQueue=[];
		
		x=Math.floor(x/size);
		y=Math.floor(y/size);
		
		if(x<width&&y<height){
			//modifiedColumns.setAll(0);
			var color=grid.get(x,y);
			var number=0;
			reuseGrid.setAll(0);
		
			if(color>=baseIndex){
			propagate(grid,x,y,function check(v){
				return tileCompat(v,color);
			},
			function callback(x2,y2){
				number++;
				
				function burst(x,y){
					if (grid.get(x,y)>=powerIndex){
					
						specialQueue.push({x:x,y:y,f:grid.get(x,y)-powerIndex});
					
					}
					grid.set(x,y,0);
					//modifiedColumns.set(x,modifiedColumns.get(x)+1);  //to be sure that there were at least 2 cells.
					cellsBroken++;
					//particleSystem.burst(x2*size+size*0.25,y2*size+size*0.25,10,size*0.5,1000,tileColors[color]);
					particleSystem.burst(x*size,y*size,40,size,2000,particleColors[color]);
				}
				
				
				if(number==2){
					burst(x,y);
				}
				if (number>=2){
					burst(x2,y2);
				}
			},reuseGrid)
		
		
			specialQueue.forEach(function(v){specials[v.f](game,v.x,v.y);})
			
			fill();
			}
		}
		
		onBurstedCells();

	}
	
	
	game.usedChains=usedChains;
	game.chains=chains;

	return game;


}
