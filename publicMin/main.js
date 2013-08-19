function resizeCanvas(){var t=all.width,e=all.height;canvas.width=Math.floor(t*ratio),canvas.height=Math.floor(e*ratio),canvas.style.width=canvas.width/ratio+"px",canvas.style.height=canvas.height/ratio+"px"}function setRatio(t){ratio=t,resizeCanvas(),tiles=createTiles(size*ratio)}function makeMenu(){var t={},e=makeNewPopperGame(Math.floor(window.innerWidth/size),Math.floor(window.innerHeight/size),size),i=0;return t.draw=function(t){i=(i+t)%2e3;var a=1+.025*Math.sin(i/1e3*Math.PI);ctx.globalAlpha=.5,e.draw(),ctx.globalAlpha=1,ctx.save(),ctx.scale(ratio,ratio),ctx.strokeStyle="#ffffff",ctx.fillStyle="rgba(90,100,250,0.9)",ctx.lineWidth=16,ctx.fillRect(all.width/2-200,all.height/2-300,400,600),ctx.strokeRect(all.width/2-200,all.height/2-300,400,600),ctx.save(),ctx.translate(all.width/2,all.height/2-100),ctx.scale(a,a),ctx.translate(-(all.width/2),-(all.height/2-100)),ctx.strokeStyle="#ffffff",ctx.lineWidth=4,ctx.fillRect(all.width/2-160,all.height/2-100-50,320,100),ctx.strokeRect(all.width/2-160,all.height/2-100-50,320,100),ctx.translate(all.width/2+20+33,all.height/2-100),ctx.fillStyle="#ffffff",ctx.beginPath(),ctx.moveTo(0,-30),ctx.lineTo(0,30),ctx.lineTo(60,0),ctx.closePath(),ctx.fill(),ctx.restore(),ctx.fillStyle="#ffffff",ctx.font="50pt Arial",ctx.fillText("Play",all.width/2-130+20,all.height/2-80),ctx.restore()},t.click=function(t,e){t>=all.width/2-160&&t<=all.width/2-160+320&&e>=all.height/2-100-50&&e<=all.height/2-100-50+100&&initNewGame()},t.drag=function(){},t.over=function(){},t}function initNewGame(){game=makeNewPopperGame(Math.floor(window.innerWidth/size),Math.floor(window.innerHeight/size),size),gameOn=!0}function draw(){ctx.clearRect(0,0,canvas.width,canvas.height),gameOn?(game.update(Date.now()-pastTime),game.draw()):menu.draw(Date.now()-pastTime),pastTime=Date.now(),requestAnimationFrame(draw)}var canvas=document.getElementById("gameCanvas"),ctx=canvas.getContext("2d"),ratio=1,tiles,size=32,alignImage=!1,gameOn=!1;if(Math.min(window.innerWidth,window.innerHeight)<512)var size=32;else var size=64;var pastTime=0,game,all={width:window.innerWidth,height:window.innerHeight};window.onresize=function(){all.width=window.innerWidth,all.height=window.innerHeight,resizeCanvas()},setRatio(1);var menu=makeMenu();pastTime=Date.now(),draw(),canvas.onmousedown=function(t){console.log(t),gameOn?game.click(t.clientX,t.clientY):menu.click(t.clientX,t.clientY)},canvas.onmousemove,canvas.addEventListener("touchstart",function(t){var e=event.targetTouches[0];return gameOn?(game.click(e.pageX,e.pageY),cancelEvent(t)):void 0},!1);