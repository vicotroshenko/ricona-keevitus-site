!function(){var e=document.querySelectorAll("[data-modal-open]"),t=document.querySelector("[data-modal-close]"),n=document.querySelector("[data-modal]"),c=document.querySelector(".js-container-slider"),r=document.querySelector(".js-slider"),o=document.querySelectorAll(".js-img"),l=document.querySelector(".js-scale-plus"),s=document.querySelector(".js-scale-minus"),i=document.querySelector("body"),a=[],d=0;function u(){n.classList.toggle("is-hidden"),i.classList.toggle("overflow-hidden")}function g(e){console.log(e.target),c.innerHTML='<img src="'.concat(e.target.src,'" alt="" class="img"/>')}e.forEach((function(e){return e.addEventListener("click",u)})),e.forEach((function(e){return e.addEventListener("click",g)})),t.addEventListener("click",u),null==r||r.addEventListener("click",(function(e){var t=e.target.name;if(void 0===t||""===t)return;if("scale"===t)return c.classList.toggle("increase"),s.classList.toggle("hidden"),l.classList.toggle("hidden"),void r.classList.toggle("scroll-on");var n=a.filter((function(e,t,n){return n.indexOf(e)===t}));d="forward"===t?d+1:d,d=(d=(d="back"===t?d-1:d)>n.length-1?0:d)<0?n.length-1:d,c.innerHTML='<img src="'.concat(n[d],'" alt="slede number').concat(d,'" class="img animation"/>')})),o.forEach((function(e){return a.push(e.src)}))}();
//# sourceMappingURL=index.269c60e1.js.map
