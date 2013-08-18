function propagate(grid,x,y,checkFn,callback,reuseGrid){
	var checkGrid= reuseGrid||new binaryData.Grid(grid.width,grid.height,8,false);
	
	var w=grid.width;
	var h=grid.height;
	
	//var color=grid.get(x,y);
	
	function found(x,y){
		checkGrid.set(x,y,1);
		callback(x,y,grid);
		floodPixel(x,y);
		//requestAnimationFrame(function(){floodPixel(x,y);drawGrid();});
	}
		
	function floodPixel(x,y){
	
		if ((x>0)    && !checkGrid.get(x-1,y) && (checkFn(grid.get(x-1,y),x-1,y) )){
				
				found(x-1,y);

		}
		
		if ((y>0)    && !checkGrid.get(x,y-1) && (checkFn(grid.get(x,y-1),x,y-1) ) ){
				
				found(x,y-1);

		}
		
		if ((x<w-1)    && !checkGrid.get(x+1,y) && (checkFn(grid.get(x+1,y),x+1,y) )){
				
				found(x+1,y);

		}
		
		if ((y<h-1)    && !checkGrid.get(x,y+1) && (checkFn(grid.get(x,y+1),x,y+1) )){
				
				found(x,y+1);

		}
	
	}
	
	
	found(x,y);

}



function specialPropagate(grid,x,y,callback,reuseGrid){
	var checkGrid= reuseGrid||new binaryData.Grid(grid.width,grid.height,8,false);
	
	var w=grid.width;
	var h=grid.height;
	
	//var color=grid.get(x,y);
	
	function found(x,y,callback){
		callback(x,y,grid.get(x,y),grid,function(fn){ 
		checkGrid.set(x,y,1);
		floodPixel(x,y,fn);    });
		
		//requestAnimationFrame(function(){floodPixel(x,y);drawGrid();});
	}
		
	function floodPixel(x,y,callback){
	
		if ((x>0)    && !checkGrid.get(x-1,y)  ){
				
				found(x-1,y,callback);

		}
		
		if ((y>0)    && !checkGrid.get(x,y-1) ){
				
				found(x,y-1,callback);

		}
		
		if ((x<w-1)    && !checkGrid.get(x+1,y) ){
				
				found(x+1,y,callback);

		}
		
		if ((y<h-1)    && !checkGrid.get(x,y+1)){
				
				found(x,y+1,callback);

		}
	
	}
	
	
	found(x,y,callback);

}


function flood(grid,x,y,callback,reuseGrid){
	var checkGrid= reuseGrid||new binaryData.Grid(grid.width,grid.height,8,false);
	var endCallback=endCallback||function(){};
	
	var w=grid.width;
	var h=grid.height;
	
	var color=grid.get(x,y);
	
	function found(x,y){
		checkGrid.set(x,y,1);
		callback(x,y,grid);
		floodPixel(x,y);
		//requestAnimationFrame(function(){floodPixel(x,y);drawGrid();});
	}
		
	function floodPixel(x,y){
	
		if ((x>0)    && !checkGrid.get(x-1,y) && (grid.get(x-1,y)==color) ){
				
				found(x-1,y);

		}
		
		if ((y>0)    && !checkGrid.get(x,y-1) && (grid.get(x,y-1)==color) ){
				
				found(x,y-1);

		}
		
		if ((x<w-1)    && !checkGrid.get(x+1,y) && (grid.get(x+1,y)==color) ){
				
				found(x+1,y);

		}
		
		if ((y<h-1)    && !checkGrid.get(x,y+1) && (grid.get(x,y+1)==color) ){
				
				found(x,y+1);

		}
	
	}
	
	
	found(x,y);

}
