function cancelEvent(t){return t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,t.cancel=!0,t.returnValue=!1,!1}function rand(t){return Math.floor(Math.random()*t)}!function(){for(var t=0,e=["ms","moz","webkit","o"],a=0;a<e.length&&!window.requestAnimationFrame;++a)window.requestAnimationFrame=window[e[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[a]+"CancelAnimationFrame"]||window[e[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var a=(new Date).getTime(),i=Math.max(0,16-(a-t)),n=window.setTimeout(function(){e(a+i)},i);return t=a+i,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();