function createTiles(size){


	var tileColors=["rgba(0,0,0,0)","rgba(0,0,0,0)","#AA3339","#00bb33","#3f5eb5","orange"];
	
	var tiles=[];
	
	
	for(var i=0;i<8;i++){
		
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
		case(2):
		ctx.fillStyle="#FF3333";
		ctx.arc(50, 50, 30, 0, Math.PI*2, true); 
		//ctx.fillRect(25,25,50,50);
		ctx.fill();
		break;
		case(3):

ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.translate(0,-952.36218);
ctx.save();
//ctx.fillStyle = "#00ff00";
ctx.strokeStyle = "#88FF88";
ctx.lineWidth = 8;
ctx.lineCap = "round";
ctx.lineJoin = "miter";
ctx.miterLimit = 4;
ctx.beginPath();
ctx.moveTo(23.829093,984.91159);
ctx.bezierCurveTo(30.808991,998.54696,41.617135000000005,996.97076,50.783578,987.89926);
ctx.bezierCurveTo(58.963708,979.80385,72.654305,981.86177,78.24466799999999,992.74971);
//ctx.fill();
ctx.stroke();
//ctx.fillStyle = "rgba(0, 0, 0, 0)";
//ctx.strokeStyle = "#000000";
//ctx.lineWidth = 11.100000381469727;
//ctx.lineCap = "round";
//ctx.lineJoin = "miter";
//ctx.miterLimit = 4;
ctx.beginPath();
ctx.moveTo(24.161064,1008.5132);
ctx.bezierCurveTo(31.140962000000002,1022.1486,41.949106,1020.5724,51.115549,1011.5009);
ctx.bezierCurveTo(59.295679,1003.4055,72.986276,1005.4634,78.576639,1016.3514);
//ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
break;
case(4):

ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.translate(0,-952.36218);
ctx.save();
ctx.fillStyle = "#7ed3ff";
ctx.translate(0,952.36218);
ctx.beginPath();
ctx.moveTo(33,22.875);
ctx.bezierCurveTo(25.175642,22.875,18.84375,29.238142,18.84375,37.0625);
ctx.bezierCurveTo(18.84375,44.886858000000004,25.175642,51.21875,33,51.21875);
ctx.bezierCurveTo(40.824358000000004,51.21875,47.15625,44.886858000000004,47.15625,37.0625);
ctx.bezierCurveTo(47.15625,29.238142,40.824358,22.875,33,22.875);
ctx.closePath();
ctx.moveTo(67,23.09375);
ctx.bezierCurveTo(59.175641999999996,23.09375,52.84375,29.425642,52.84375,37.25);
ctx.bezierCurveTo(52.84375,45.074358000000004,59.175641999999996,51.4375,67,51.4375);
ctx.bezierCurveTo(74.824358,51.4375,81.15625,45.074358000000004,81.15625,37.25);
ctx.bezierCurveTo(81.15625,29.425642,74.824358,23.09375,67,23.09375);
ctx.closePath();
ctx.moveTo(50,52.53125);
ctx.bezierCurveTo(42.175641999999996,52.53125,35.84375,58.863141999999996,35.84375,66.6875);
ctx.bezierCurveTo(35.84375,74.511858,42.175641999999996,80.875,50,80.875);
ctx.bezierCurveTo(57.824358000000004,80.875,64.15625,74.511858,64.15625,66.6875);
ctx.bezierCurveTo(64.15625,58.863141999999996,57.824358000000004,52.53125,50,52.53125);
ctx.closePath();
ctx.fill();
ctx.restore();
ctx.restore();

break;
		case(5):
		



ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.translate(0,-952.36218);
ctx.fillStyle = "#fbee25";
ctx.translate(0,952.36218);
ctx.beginPath();
ctx.moveTo(50,25);
ctx.lineTo(85,75);
ctx.lineTo(15,75);
ctx.closePath();
ctx.fill();

		break;
		default:
		break;
		}
	}
	
	return tiles;
}

