function resizeCanvas(){var t=window.innerWidth,i=window.innerHeight;canvas.width=Math.floor(t*ratio),canvas.height=Math.floor(i*ratio),canvas.style.width=canvas.width/ratio+"px",canvas.style.height=canvas.height/ratio+"px"}function setRatio(t){ratio=t,resizeCanvas(),tiles=createTiles(64*ratio)}function draw(){game.draw(),requestAnimationFrame(draw)}function makeNewPopperGame(t,i,a){function e(){var t;return t=s.length>0?s.pop():{x:0,y:0,t:new binaryData.Array(n,8,!1),h:0},o.push(t),t}var r={grid:new binaryData.Grid(t,i,8,!1),size:a},h=t,n=i,o=[],s=[];r.chains=o,r.grid.forEachSet(function(){return Math.floor(4*Math.random()+1)},0,n-5,h);var f=e();return f.t.forEachSet(function(){return Math.floor(4*Math.random()+1)},0,7),r.draw=function(){var t=this.size;this.grid.forEach(function(i,a,e){ctx.drawImage(tiles[i],a*t*ratio,e*t*ratio,t*ratio,t*ratio)}),o.forEach(function(i){i.t.forEach(function(a,e){ctx.drawImage(tiles[a],i.x*t*ratio,(e*t+i.y)*ratio)})})},r}var canvas=document.getElementById("gameCanvas"),ctx=canvas.getContext("2d"),ratio=1,tiles;setRatio(1);var game=makeNewPopperGame(Math.round(window.innerWidth/64),Math.round(window.innerHeight/64),64);draw();