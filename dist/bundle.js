!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4),n(5),n(6)},function(e,t){},function(e,t){var n=document.getElementsByTagName("video")[0];document.getElementById("video-btn").addEventListener("click",(function(){1==n.paused?n.play():n.pause()}))},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=document.querySelector(t),this.$btn=document.querySelector("#language-btn"),this.items=n.items,this.$el.querySelector(".dropdown__label").innerHTML=this.items[0].label,this.$el.querySelector(".dropdown__text").innerHTML=this.items[0].text,this.$el.addEventListener("click",(function(e){e.target.classList.contains("dropdown__label")||e.target.classList.contains("language-btn")||e.target.classList.contains("dropdown__text")||e.target.classList.contains("language-btn__img")?r.$el.classList.contains("open")?r.close():r.open():e.target.classList.contains("dropdown__li")&&r.select(e.target.dataset.id)}));var o=this.items.map((function(e){return e.label})).join(" ");this.$el.querySelector(".dropdown__menu").insertAdjacentHTML("afterbegin",o)}var t,r,o;return t=e,(r=[{key:"select",value:function(e){var t=this.items.find((function(t){return t.id===e}));this.$el.querySelector(".dropdown__label").innerHTML=t.label,this.$el.querySelector("dropdown__text").innerHTML=t.text,this.close()}},{key:"open",value:function(){this.$el.classList.add("open"),this.$btn.classList.add("language-btn-transform")}},{key:"close",value:function(){this.$el.classList.remove("open"),this.$btn.classList.remove("language-btn-transform")}}])&&n(t.prototype,r),o&&n(t,o),e}())("#dropdown",{items:[{label:'<li  data-id="msk"  class="dropdown__li"><img src="img/en.png" class="dropdown__img" alt="0"></li>',id:"msk",text:"EN"},{label:'<li data-id="msk1" class="dropdown__li"><img src="img/ua.png"  class="dropdown__img" alt="1"></li>',id:"msk1",text:"UA"},{label:'<li data-id="msk2" class="dropdown__li"><img src="img/ru.png"  class="dropdown__img" alt="2"></li>',id:"msk2",text:"RU"}]})},function(e,t){new function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),document.querySelector(t).onclick=function(){document.querySelector(".burger-menu__line").classList.toggle("burger-menu-active"),document.querySelector(".burger-menu__nav").classList.toggle("burger-menu-active"),document.querySelector(".burger-menu__overley").classList.toggle("burger-menu-active"),document.querySelector(".burger-menu__button").classList.toggle("burger-menu-active"),document.querySelector("body").classList.toggle("burger-menu-active")},document.querySelector(n).onclick=function(){document.querySelector(".burger-menu__line").classList.toggle("burger-menu-active"),document.querySelector(".burger-menu__nav").classList.toggle("burger-menu-active"),document.querySelector(".burger-menu__overley").classList.toggle("burger-menu-active"),document.querySelector("body").classList.toggle("burger-menu-active"),document.querySelector(".burger-menu__button").classList.toggle("burger-menu-active")}}("#button","#overley")},function(e,t,n){},function(e,t,n){}]);