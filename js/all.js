"use strict";var _Swiper;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperty(e,t,o){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0===o)return("string"===t?String:Number)(e);o=o.call(e,t||"default");if("object"!==_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}function menuMobile(){var e=$(".dots"),t=$(".menu-mobile"),o=$(".icon-tabler-x"),n=$(".menu-mobile__links a");e.on("click",function(){t.slideDown(),o.css("display","block")}),o.on("click",function(){t.slideUp(),o.css("display","none")}),n.on("click",function(){t.slideUp(),o.css("display","none")})}function scrollTarget(){document.querySelectorAll('a[href^="#"]').forEach(function(t){t.addEventListener("click",function(e){e.preventDefault();var e=t.getAttribute("href").substring(1),e=document.getElementById(e);e&&(e=e.getBoundingClientRect().top+window.scrollY,window.scrollTo({top:e,behavior:"smooth"}))})})}menuMobile(),$(document).ready(function(){AOS.init();new SplitType("#my-text");gsap.to(".char",{y:0,stagger:.05,delay:1,duration:.3,onComplete:function(){gsap.to(".by-code",{opacity:1})}})}),window.addEventListener("load",function(){var e=document.getElementById("loader"),t=document.querySelector(".content");e.style.display="none",t.style.display="block"}),scrollTarget();var swiper2=new Swiper(".mySwiper",(_defineProperty(_Swiper={spaceBetween:10,freeMode:!1,slidesPerView:1.1,speed:800,autoplay:{delay:5e3},loop:!0,navigation:!0,pagination:{el:".swiper-pagination",clickable:!0}},"navigation",{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}),_defineProperty(_Swiper,"breakpoints",{600:{slidesPerView:2,spaceBetween:10},900:{slidesPerView:3,spaceBetween:20}}),_Swiper));$(".js-tilt").tilt({glare:!0,maxGlare:.5});