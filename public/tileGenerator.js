var particleColors=["rgba(0,0,0,0)","rgba(0,0,0,0)","#DD3339","#00bb33","#3f5ee5","#ffdd00","#aaeeff"];
var tileColors=["rgba(0,0,0,0)","rgba(0,0,0,0)","#AA3339","#00bb33","#3f5ed5","#ffb500","#aaeeff"];
var baseIndex=2;
var baseNumber=5;
var powerIndex=16;

function createTiles(size){



	
	function premiumFormat(ctx,i,size){
		ctx.save();
		//ctx.scale(size/100,size/100);
		ctx.translate(50,50);

		ctx.fillStyle = "#efffdf";
		
		
		for(var i=0;i<4;i++,ctx.rotate(Math.PI*i/2)){
		ctx.beginPath();
		ctx.moveTo(50,50);
		ctx.lineTo(25,50);
		ctx.lineTo(50,25);
		ctx.closePath();
		ctx.fill();
		}

		ctx.restore();
	
	}


	//var tileColors=["rgba(0,0,0,0)","rgba(0,0,0,0)","red","green","blue","orange","white"];	
	
	var tiles=[];
	
	
	for(var i=0;i<8;i++){
		
		var tile=document.createElement("canvas");
		var ctx=tile.getContext("2d");
		tile.width=size;
		tile.height=size;
		
		ctx.fillStyle=tileColors[i];
		ctx.fillRect(0,0,size,size);
		
		draw(ctx,i,size);
	
		tiles[i]=tile;
	}
	
	
	function draw(ctx,i,size){
	
		
		ctx.scale(size/100,size/100);
		
		switch(i){
		case(2):
		//premiumFormat(ctx,i);
		
		ctx.fillStyle="#FF3333";
		ctx.beginPath();
		ctx.arc(50, 50, 30, 0, Math.PI*2, true); 
		//ctx.fillRect(25,25,50,50);
		ctx.fill();
		
		break;
		case(3):

//premiumFormat(ctx,i);


ctx.translate(0,-952.36218);

ctx.strokeStyle = "#88FF88";
ctx.lineWidth = 8;
ctx.lineCap = "round";
ctx.lineJoin = "miter";
ctx.miterLimit = 4;

ctx.beginPath();
ctx.moveTo(23.829093,984.91159);
ctx.bezierCurveTo(30.808991,998.54696,41.617135,996.97076,50.783578,987.89926);
ctx.bezierCurveTo(58.963708,979.80385,72.654305,981.86177,78.244668,992.74971);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(24.161064,1008.5132);
ctx.bezierCurveTo(31.140962,1022.1486,41.949106,1020.5724,51.115549,1011.5009);
ctx.bezierCurveTo(59.295679,1003.4055,72.986276,1005.4634,78.576639,1016.3514);

ctx.stroke();



break;
case(4):



ctx.fillStyle = "#7ed3dd";
ctx.beginPath();
ctx.moveTo(33,22.875);
ctx.bezierCurveTo(25.175642,22.875,18.84375,29.238142,18.84375,37.0625);
ctx.bezierCurveTo(18.84375,44.886858,25.175642,51.21875,33,51.21875);
ctx.bezierCurveTo(40.8243580,51.21875,47.15625,44.886858,47.15625,37.0625);
ctx.bezierCurveTo(47.15625,29.238142,40.824358,22.875,33,22.875);
ctx.closePath();
ctx.moveTo(67,23.09375);
ctx.bezierCurveTo(59.175642,23.09375,52.84375,29.425642,52.84375,37.25);
ctx.bezierCurveTo(52.84375,45.074358,59.175642,51.4375,67,51.4375);
ctx.bezierCurveTo(74.824358,51.4375,81.15625,45.074358,81.15625,37.25);
ctx.bezierCurveTo(81.15625,29.425642,74.824358,23.09375,67,23.09375);
ctx.closePath();
ctx.moveTo(50,52.53125);
ctx.bezierCurveTo(42.175642,52.53125,35.84375,58.863142,35.84375,66.6875);
ctx.bezierCurveTo(35.84375,74.511858,42.175642,80.875,50,80.875);
ctx.bezierCurveTo(57.824358,80.875,64.15625,74.511858,64.15625,66.6875);
ctx.bezierCurveTo(64.15625,58.863142,57.824358,52.53125,50,52.53125);
ctx.closePath();
ctx.fill();


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
		case(6):
		


ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;


ctx.save();
ctx.strokeStyle = "#ffffff";
ctx.lineWidth = 8;
ctx.lineCap = "round";
ctx.lineJoin = "miter";
ctx.miterLimit = 4;
ctx.translate(50,50);
for(var j=0;j<3;j++){
for(var i=0;i<2;i++)
{
ctx.beginPath();
ctx.moveTo(8,30);
ctx.lineTo(0,20);
ctx.lineTo(0,-20);
ctx.lineTo(-8,-30);
ctx.stroke();
ctx.scale(1,-1);
}
ctx.rotate(Math.PI*2/3);
}
ctx.restore();



		
		break;
		default:
		break;
		}
	}
	
	return tiles;
}

