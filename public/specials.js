var specials=[

function(game,x,y){

	var radius=3.2;


game.grid.forEach(function(v,x2,y2,a){

if(  ((x2-x)*(x2-x)+(y2-y)*(y2-y))<=(radius*radius)  ){a.set(x2,y2,0);

game.pS.burst(x2*size,y2*size,40,size,2000,particleColors[v]);

}
//alert((x2-x)*(x2-x)+(y2-y)*(y2-y));
},x-radius,y-radius,x+radius,y+radius);
//game.fill();
	
	



}




]
