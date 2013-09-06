var specials=[

function(game,x,y){

	var radius=3.2;

function trans(a, c1,c2){
    return c1*(1-a) + c2*a
}

function colorInterpolate(a){

	var r=Math.floor(trans(a,170,0));
	var g=Math.floor(trans(a,51,100));
	var b=Math.floor(trans(a,57,100));

	return("rgb("+r+","+g+","+b+")");
	
}


game.grid.forEach(function(v,x2,y2,a){

if(  ((x2-x)*(x2-x)+(y2-y)*(y2-y))<=(radius*radius)  ){a.set(x2,y2,0);

game.pS.burst(x2*size,y2*size,40,size,2000,particleColors[v]);

}
//alert((x2-x)*(x2-x)+(y2-y)*(y2-y));
},x-radius,y-radius,x+radius,y+radius);
//game.fill();

var effect={
	//alive:true,
	time:0,
	draw:function(ctx){
	ctx.beginPath();
	ctx.arc((x+.5)*game.size, (y+.5)*game.size, radius*size*Math.abs(Math.sin(this.time/200*Math.PI)), 0, Math.PI*2, true);
	ctx.fillStyle=colorInterpolate(Math.sin(this.time/100*Math.PI)*.5+.5);
	ctx.fill();
	
	},
	update:function(delta){
	this.time+=delta;
	if (this.time>200)
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
