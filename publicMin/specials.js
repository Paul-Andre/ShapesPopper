var specials=[function(t,e,i){var a=3.2;t.grid.forEach(function(n,r,h,o){a*a>=(r-e)*(r-e)+(h-i)*(h-i)&&(o.set(r,h,0),t.pS.burst(r*size,h*size,40,size,2e3,particleColors[n]))},e-a,i-a,e+a,i+a)}];