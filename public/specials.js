var specials=[

function(game,x,y){

	var radius=3.2;

function trans(a, c1,c2){
    return c2*(1-a) + c1*a
}

function colorInterpolate(a){

	var r=Math.floor(trans(a,120,255));
	var g=Math.floor(trans(a,40,33));
	var b=Math.floor(trans(a,50,33));

	return("rgb("+r+","+g+","+b+")");
	
}

game.pS.explode(x*size,y*size,100,size,2000,colorInterpolate);
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
	ctx.fillStyle=colorInterpolate(Math.sin(this.time/6*Math.PI+i)*.5+.5);
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

game.pS.burst(x2*size,y2*size,40,size,2000,particleColors[v]);


//alert((x2-x)*(x2-x)+(y2-y)*(y2-y));
},0,y,game.width,1);
//game.fill();
	
	



}



]
