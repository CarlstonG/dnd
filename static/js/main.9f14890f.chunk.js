(this["webpackJsonpreact-dnd"]=this["webpackJsonpreact-dnd"]||[]).push([[0],{3:function(e,a,t){e.exports=t(9)},8:function(e,a,t){},9:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(2),o=t.n(c);t(8);function l(e){return r.a.createElement("div",{id:e.id,className:e.className,onDrop:function(e){e.preventDefault();var a=e.dataTransfer.getData("card_id"),t=document.getElementById(a);t.style.display="block",e.target.appendChild(t)},onDrapOver:function(e){e.preventDefault()}},e.children)}function i(e){return r.a.createElement("div",{id:e.id,className:e.className,draggable:e.draggable,onDragStart:function(e){var a=e.target;e.dataTransfer.setData("card_id",a.id),setTimeout((function(){a.style.display="none"}),0)},onDragOver:function(e){e.stopPropagation()}},e.children)}var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"Header"},"DnD Todo Maker! ",r.a.createElement("span",null,"\ud83d\udd8a\ufe0f")),r.a.createElement("main",{className:"flexbox"},r.a.createElement(l,{id:"board-1",className:"board"},r.a.createElement(i,{id:"card-1",className:"card",draggable:"true"},r.a.createElement("p",null,"This is Card 1"))),r.a.createElement(l,{id:"board-2",className:"board"},r.a.createElement(i,{id:"card-2",className:"card",draggable:"true"},r.a.createElement("p",null,"This is Card 2")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[3,1,2]]]);
//# sourceMappingURL=main.9f14890f.chunk.js.map