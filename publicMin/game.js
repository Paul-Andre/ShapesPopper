function makeNewPopperGame(t,i,e){function h(t,i,e){var h;return c.length>0?(h=c.pop(),h.t.forEachSet(function(){return 0}),h.x=t,h.y=i,h.h=e):h={x:t,y:i,t:new binaryData.Array(l,8,!1),h:e,v:0},g.push(h),h}function r(t){c.push(t)}function a(){return Math.floor(4*Math.random()+2)}function n(){v.forEach(function(t,i){if(t)for(var r=0,n=0,o=0;l>o;o++)if(s.get(i,o))n++;else if(n||!r&&u){for(var f=!r&&u?t:0,g=h(i,(o-n-f)*e,n+f),c=0;f>c;c++)g.t.set(c,a());for(var c=0;n>c;c++)g.t.set(c+f,s.get(i,o-n+c)),s.set(i,o-n+c,0);r++}})}var o={grid:new binaryData.Grid(t,i,8,!1),size:e},s=o.grid,f=t,l=i;console.log(s);var g=[],c=[],u=!1;o.chains=g;var m=new binaryData.Grid(t,i,8,!1),v=new binaryData.Array(t,16,!1);return o.grid.forEachSet(function(){return Math.floor(4*Math.random()+2)}),o.draw=function(){var t=this.size;this.grid.forEach(function(i,e,h){i>1&&ctx.drawImage(tiles[i],e*t*ratio,h*t*ratio,t*ratio,t*ratio)}),g.forEach(function(i){i.t.forEach(function(e,h){e>1&&ctx.drawImage(tiles[e],i.x*t*ratio,(h*t+i.y)*ratio)})})},o.update=function(t){for(var i=0;i<g.length;i++){var h=g[i];h.v=Math.min(.5*e,h.v+.03125*e*t),h.y+=Math.min(.03125*h.v*t,.5*e),(s.get(h.x,Math.floor((h.y+h.h*e)/e))||h.y+h.h*e>=l*e)&&(h.t.forEach(function(t,i){t&&s.set(h.x,i+Math.floor(h.y/e),t)}),r(h),g.splice(i,1),i--)}},o.click=function(t,i){if(t=Math.floor(t/e),i=Math.floor(i/e),f>t&&l>i){v.setAll(0);var h=s.get(t,i),r=0;m.setAll(0),h>1&&(propagate(s,t,i,function(t){return t==h},function(e,h){r++,2==r&&(s.set(t,i,0),v.set(t,v.get(t)+1)),r>=2&&(s.set(e,h,0),v.set(e,v.get(e)+1))},m),n())}},o.usedChains=c,o.chains=g,o}