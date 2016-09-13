
var particleColors=["rgba(0,0,0,0)","rgba(0,0,0,0)","#DD3339","#00bb33","#3f5ee5","#ffdd00","#eeeeff"];
var tileColors=["rgba(0,0,0,0)","777788","#AA3339","#00bb33","#3f5ed5","#ffb500","#aaeeff"];
var baseIndex=2;
var baseNumber=5;
var powerIndex=16;


function trans(a, c1,c2){
    return c2*(1-a) + c1*a
}

function makeInterpolate(r1,g1,b1,r2,g2,b2){


	function create(a){

		/*var r=Math.floor(trans(a,r1,r2)/17);
		var g=Math.floor(trans(a,g1,g2)/17);
		var b=Math.floor(trans(a,b1,b2)/17);

		return("#"+r.toString(16)+g.toString(16)+b.toString(16));
		*/
		
		var r=Math.floor(trans(a,r1,r2));
		var g=Math.floor(trans(a,g1,g2));
		var b=Math.floor(trans(a,b1,b2));
var string="rgb("+r+","+g+","+b+")"
		return string ;
	}
	
	var div=16;
	var set=[];
	for(var i=0;i<=div;i++){
		set[i]=create(i/div);
	
	}
	
	return function(a){
	
		return set[Math.floor(a*div)];
	
	}
	
	//return create;


}


/*function redInterpolate(a){

	var r=Math.floor(trans(a,120,255));
	var g=Math.floor(trans(a,40,33));
	var b=Math.floor(trans(a,50,33));

	return("rgb("+r+","+g+","+b+")");
	
}*/


var redInterpolate=makeInterpolate(  120,40,50   ,   255,33,33   );

var greenInterpolate=makeInterpolate(  0,221,51   ,   255,255,255   );
var greenDarkInterpolate=makeInterpolate(  0,221,51   ,   50,100,50  )
