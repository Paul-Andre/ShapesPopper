function createTiles(size){


	var tileColors=["rgba(0,0,0,0)","red","green","blue","orange"];
	
	var tiles=[];
	
	
	for(var i=0;i<6;i++){
		
		var tile=document.createElement("canvas");
		var ctx=tile.getContext("2d");
		tile.width=size;
		tile.height=size;
		
		
		draw(ctx,i,size);
	
		tiles.push(tile);
	}
	
	
	function draw(ctx,i,size){
	
		ctx.fillStyle=tileColors[i];
		ctx.fillRect(0,0,size,size);
		
		ctx.scale(size/100,size/100);
		switch(i){
		case(1):
		ctx.fillStyle="#990000";
		ctx.arc(50, 50, 30, 0, Math.PI*2, true); 
		//ctx.fillRect(25,25,50,50);
		ctx.fill();
		break;
		case(2):
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(100,0);
ctx.lineTo(100,100);
ctx.lineTo(0,100);
ctx.closePath();
ctx.clip();
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.translate(0,-952.36218);
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 11.100000381469727;
ctx.lineCap = "round";
ctx.lineJoin = "miter";
ctx.miterLimit = 4;
ctx.beginPath();
ctx.moveTo(23.829093,984.91159);
ctx.bezierCurveTo(30.808991,998.54696,41.617135000000005,996.97076,50.783578,987.89926);
ctx.bezierCurveTo(58.963708,979.80385,72.654305,981.86177,78.24466799999999,992.74971);
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 11.100000381469727;
ctx.lineCap = "round";
ctx.lineJoin = "miter";
ctx.miterLimit = 4;
ctx.beginPath();
ctx.moveTo(24.161064,1008.5132);
ctx.bezierCurveTo(31.140962000000002,1022.1486,41.949106,1020.5724,51.115549,1011.5009);
ctx.bezierCurveTo(59.295679,1003.4055,72.986276,1005.4634,78.576639,1016.3514);
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();

		default:
		break;
		}
	}
	
	return tiles;
}
