var explosionFrames=[];
var beamFrames=[];
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
	
	
	for(var i=0;i<32;i++){
		
		var tile=document.createElement("canvas");
		var ctx=tile.getContext("2d");
		tile.width=size;
		tile.height=size;
		
		if(i>=powerIndex){ctx.fillStyle=tileColors[i-powerIndex+baseIndex]}
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


//ctx.translate(0,0);

ctx.strokeStyle = "#88FF88";
ctx.lineWidth = 9;
ctx.lineCap = "round";
ctx.lineJoin = "miter";
ctx.miterLimit = 4;

ctx.beginPath();
ctx.moveTo(23.829093,32.54941);
ctx.bezierCurveTo(30.808991,46.18478,41.617135,44.60858,50.783578,35.53708);
ctx.bezierCurveTo(58.963708,27.44167,72.654305,29.49959,78.244668,40.38753);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(24.161064,56.15102);
ctx.bezierCurveTo(31.140962,69.78642,41.949106,68.21022,51.115549,59.13872);
ctx.bezierCurveTo(59.295679,51.04332,72.986276,53.10122,78.576639,63.98922);

ctx.stroke();



break;
case(4):



ctx.fillStyle = "#7ed3dd";
/*ctx.beginPath();
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
ctx.fill();*/

ctx.beginPath();
		ctx.arc(33,37.250, 14.156, 0, Math.PI*2, true); 
		//ctx.fillRect(25,25,50,50);
		
ctx.fill();
ctx.beginPath();
		ctx.arc(67,37.250, 14.156, 0, Math.PI*2, true); 
		//ctx.fillRect(25,25,50,50);
		ctx.fill();
ctx.beginPath();
		ctx.arc(50,66.688, 14.156, 0, Math.PI*2, true); 
		//ctx.fillRect(25,25,50,50);
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
case(powerIndex):


		for(var i=1;i>=0;i-=0.25){
		ctx.fillStyle=redInterpolate(1-i);
		ctx.beginPath();
		ctx.arc(50, 50, 30*i, 0, Math.PI*2, true); 
		//ctx.fillRect(25,25,50,50);
		ctx.fill();
		}
		
		ctx.fillStyle="#efffdf";
		ctx.beginPath();
		//ctx.arc(50, 50, 2, 0, Math.PI*2, true); 
		//ctx.fillRect(25,25,50,50);
		ctx.fill();
		ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.lineJoin = "miter";
ctx.miterLimit = 4;
		ctx.translate(50,50);
		for(var i=0;i<10;i++){
		ctx.strokeStyle="#efffdf";
		ctx.beginPath();
		ctx.arc(0, 0, 35, 0, Math.PI/10, false); 
		//ctx.fillRect(25,25,50,50);
		ctx.stroke();
		ctx.rotate(Math.PI*2/10);
		}

		
		break;
		
		
		case(powerIndex+1):


		for(var i=1;i>=0;i-=0.25){
		ctx.fillStyle=greenInterpolate(1-i);
		ctx.beginPath();
		ctx.arc(50, 50, 30*i, 0, Math.PI*2, true); 
		//ctx.fillRect(25,25,50,50);
		ctx.fill();
		}
		
		ctx.fillStyle="#efffdf";
		ctx.beginPath();
		//ctx.arc(50, 50, 2, 0, Math.PI*2, true); 
		//ctx.fillRect(25,25,50,50);
		ctx.fill();
		ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.lineJoin = "miter";
ctx.miterLimit = 4;
		ctx.translate(50,50);
		for(var i=0;i<10;i++){
		ctx.strokeStyle="#efffdf";
		ctx.beginPath();
		ctx.arc(0, 0, 35, 0, Math.PI/10, false); 
		//ctx.fillRect(25,25,50,50);
		ctx.stroke();
		ctx.rotate(Math.PI*2/10);
		}

		
		break;
		default:
		break;
		}
	}
	
	generateAnimations(size);
	
	return tiles;
	
	
	
	
	
	
	
	
}


function generateAnimations(size){


(function(){
	var radius=3.2;
	var animFrames=16;
	var frameLength=25;
	var x=Math.ceil(radius)
	
	var shapeNum=5;
	var effect={
		//alive:true,
		time:0,
		draw:function(ctx){
	
		for(var i=shapeNum;i>0;i--){
		ctx.beginPath();
		ctx.arc((x+.5)*size, (x+.5)*size, radius*size*Math.abs(Math.sin(this.time/400*Math.PI+i/10))*(i+7)/12, 0, Math.PI*2, true);
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
	
	for(var i=0;i<=animFrames;i++){
		
		var img=document.createElement("canvas");
		var ctx=img.getContext("2d");
		img.height=img.width=(x*2+1)*size;
		
		
		effect.update(frameLength)
		effect.draw(ctx);
		explosionFrames.push(img);
		
		
	}
})();

(function(){
	var animFrames=12;
	var frameLength=25;
	//var x=Math.ceil(radius)
	
	var shapeNum=5;

	
	var effect={
		//alive:true,
		time:0,
		draw:function(ctx){
	
		for(var i=shapeNum;i>0;i--){
		ctx.beginPath();
		ctx.fillStyle=greenInterpolate(Math.sin(this.time/60*Math.PI+i)*.5+.5);
		var w=size*Math.abs(Math.sin(this.time/400*Math.PI+i/10))*(i+7)/12
		ctx.fillRect(0, (.5)*size-w*.5,size, w);
		//ctx.fill();
		}
		
		/*	var xO=-((this.time)%100);
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
		ctx.stroke();*/
		
		},
		update:function(delta){
		this.time+=delta;
		if (this.time>300)
		return true;
		else return false;
		}
	}
	
	for(var i=0;i<=animFrames;i++){
		
		var img=document.createElement("canvas");
		var ctx=img.getContext("2d");
		img.height=img.width=size;
		
		
		effect.update(frameLength)
		effect.draw(ctx);
		beamFrames.push(img);
		
		
	}
})();




}

