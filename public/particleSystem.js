function createParticleSystem(){

var particles=[];
var usedParticles=[];

function makeParticle(x,y,vx,vy,life,gravity,color,size,sizeDim){
	var p;
	if (usedParticles.length){
		p=usedParticles.pop();
		p.x=x;
		p.y=y;
		p.vx=vx;
		p.vy=vy;
		p.color=color;
		p.life=life;
		p.size=size;
		p.gravity=gravity;
		p.sizeDim=sizeDim;
	}else{
	p= new Particle(x,y,vx,vy,life,gravity,color,size,sizeDim);
	}
	
	particles.push(p);
	
	return p;

}

function recycleParticle(p){
	usedParticles.push(p);
}


function Particle(x,y,vx,vy,life,gravity,color,size,sizeDim){
	this.x=x;
	this.y=y;
	this.vx=vx;
	this.vy=vy;
	this.size=size;
	this.color=color;
	this.life=life;
	this.gravity=gravity;
	this.sizeDim=sizeDim;
	

}

Particle.prototype.draw=function(ctx){
	ctx.save();
		ctx.fillStyle=this.color;
		ctx.fillRect(this.x,this.y,this.size,this.size);
	ctx.restore();
}

Particle.prototype.update=function(delta){
	this.vy+=this.gravity*delta/100;
	this.x+=this.vx*delta/100;
	this.y+=this.vy*delta/100;
	this.size-=this.sizeDim*delta/100;
	this.life-=delta;
	if (this.life<=0||this.size<=0) return true;
	else return false;
	
}

function updateParticles(delta){

	for (var i=0; i<particles.length;i++){

		if (particles[i].update(delta)){
			recycleParticle(particles[i]);
			particles.splice(i,1);
			i--;
		}

	}
}

function drawParticles(ctx){

	for (var i=0; i<particles.length;i++){

		particles[i].draw(ctx);

	}
}

function burst(x,y,force,spread,life,color){

	for (var i=0; i<20;i++){
		
		var angle=Math.random()*Math.PI*2;
		//particles[i].draw(ctx);
		makeParticle(x+spread*Math.random(),y+spread*Math.random(),Math.cos(angle)*force,Math.sin(angle)*force,life*0.5+life*0.5*Math.random(),50,color,5*Math.random()*1.5,0.9+Math.random()*0.5)
	}


}

function explode(x,y,force,spread,life,color){

	for (var i=0; i<100;i++){
		
		var angle=Math.random()*Math.PI*2;
		//particles[i].draw(ctx);
		makeParticle(x+spread*Math.random(),y+spread*Math.random(),Math.cos(angle)*force,Math.sin(angle)*force*Math.random(),life*0.5+life*0.5*Math.random(),10,color(Math.random()),5*Math.random()*5*(spread/64),1.9+Math.random()*0.5)
	}


}

	return{
		makeParticle:makeParticle,
		update:updateParticles,
		draw:drawParticles,
		burst:burst,
		explode:explode
	
	}
}
