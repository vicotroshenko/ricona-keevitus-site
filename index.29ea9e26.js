!function(){var e,t,n,i;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),i=function(i){var s="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!s),e.classList.toggle("is-open"),"open"===i.currentTarget.name?(t.classList.add("hide"),n.classList.remove("hide")):(t.classList.remove("hide"),n.classList.add("hide"))},t.addEventListener("click",i),n.addEventListener("click",i),window.matchMedia("(min-width: 960px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))}))}();
//# sourceMappingURL=index.29ea9e26.js.map