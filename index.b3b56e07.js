const e=document.querySelectorAll("[data-modal-open]"),t=document.querySelector("[data-modal-close]"),c=document.querySelector("[data-modal]"),n=document.querySelector(".js-container-slider"),r=document.querySelector(".js-btn-slider-back"),o=document.querySelector(".js-btn-slider-forward");let l=[],a=0;function d(){c.classList.toggle("is-hidden")}function s(e){n.innerHTML=`<img src="${e.target.currentSrc}" alt="" class="img"/>`}function i(e){const t=e.target.name;a="forward"===t?a+1:a-1,a=a>l.length-1?0:a,a=a<0?l.length-1:a,console.log(a),n.innerHTML=`<img src="${l[a]}" alt="" class="img"/>`}e.forEach((e=>e.addEventListener("click",d))),e.forEach((e=>e.addEventListener("click",s))),t.addEventListener("click",d),r.addEventListener("click",i),o.addEventListener("click",i),e.forEach((e=>l.push(e.src))),console.log(l);
//# sourceMappingURL=index.b3b56e07.js.map
