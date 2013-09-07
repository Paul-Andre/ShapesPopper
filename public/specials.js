var specials=[

function(game,x,y){

		var radius=3.2;



	game.pS.explode(x*size,y*size,100,size,2000,redInterpolate);
	game.grid.forEach(function(v,x2,y2,a){

	if(  ((x2-x)*(x2-x)+(y2-y)*(y2-y))<=(radius*radius)  ){a.set(x2,y2,0);

	//game.pS.burst(x2*size,y2*size,40,size,2000,particleColors[v]);
		for (var i=0; i<20;i++){
		
			var angle=(Math.atan2(y2-y,x2-x)+(Math.random()-0.5)*Math.PI*0.5);
			var force=100;
			var life=2000;
			var size=game.size;
			//particles[i].draw(ctx);
			game.pS.makeParticle(x2*size+size*Math.random(),y2*size+size*Math.random(),Math.cos(angle)*40,Math.sin(angle)*force,life*0.5+life*0.5*Math.random(),50,particleColors[v],5*Math.random()*1.5,0.9+Math.random()*0.5)
		}


	}
	//alert((x2-x)*(x2-x)+(y2-y)*(y2-y));
	},x-radius,y-radius,x+radius,y+radius);
	//game.fill();

	var effect={
		//alive:true,
		time:0,
		draw:function(ctx){
	
		for(var i=5;i>0;i--){
		ctx.beginPath();
		ctx.arc((x+.5)*game.size, (y+.5)*game.size, radius*size*Math.abs(Math.sin(this.time/400*Math.PI+i/10))*(i+7)/12, 0, Math.PI*2, true);
		ctx.fillStyle=redInterpolate(Math.sin(this.time/40*Math.PI+i)*.5+.5);
		ctx.fill();
		}
		},
		update:function(delta){
		this.time+=delta;
		if (this.time>400)
		return true;
		return false;
		}
	}


	game.overlays.push(effect)
	



},





function(game,x,y){

		//var radius=3.2;


	game.grid.forEach(function(v,x2,y2,a){

	a.set(x2,y2,0);

	//game.pS.burst(x2*size,y2*size,40,size,2000,particleColors[v]);
	
	var life=2000;
	
		for (var i=0; i<20;i++){
		
		var angle=Math.random()*Math.PI*2;
		//particles[i].draw(ctx);
		game.pS.makeParticle(x2*game.size+game.size*Math.random(),y2*game.size+game.size*Math.random(),Math.random()*5,Math.random()*-10-10,life*0.5+life*0.5*Math.random(),0,particleColors[v],5*Math.random()*5*(game.size/64),1.9+Math.random()*5*(game.size/64))
	}

	//alert((x2-x)*(x2-x)+(y2-y)*(y2-y));
	},0,y,game.width,1);
	//game.fill();
	
	var effect={
		//alive:true,
		time:0,
		draw:function(ctx){
	
		for(var i=5;i>0;i--){
		ctx.beginPath();
		ctx.fillStyle=greenInterpolate(Math.sin(this.time/60*Math.PI+i)*.5+.5);
		var w=size*Math.abs(Math.sin(this.time/400*Math.PI+i/10))*(i+7)/12
		ctx.fillRect(0, (y+.5)*game.size-w*.5,game.width*game.size, w);
		//ctx.fill();
		}
		
		var xO=-((this.time)%100);
		var yO=0;
		var h=game.size/2*(Math.sin(this.time/400*Math.PI+i/10));
		var step=h*2; 

		ctx.beginPath();
		
		var base=(y+.5)*game.size
		ctx.moveTo(0,base);
		
		for(var i=xO; i<=game.width*game.size;i+=step*2){
		ctx.bezierCurveTo(i-0.5*step,base-h,i-0.5*step,base+h,i,base+h);
		ctx.bezierCurveTo(i+0.5*step,base+h,i+0.5*step,base-h,i+step,base-h);	
		}
		ctx.strokeStyle=greenDarkInterpolate((Math.sin(this.time)*.5+.5));
		ctx.lineWidth=4;
		ctx.stroke();
		
		},
		update:function(delta){
		this.time+=delta;
		if (this.time>300)
		return true;
		return false;
		}
	}


	game.overlays.push(effect)




}



];
