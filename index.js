import{a as w,S as q,i as v}from"./assets/vendor-CucEYOFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const B="56762760-0b1ca4d58f75edda673894a64";async function f(t,r){try{return(await w.get("https://pixabay.com/api/?",{params:{key:B,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:100,page:r}})).data}catch(n){return console.log(n),[]}}const m=document.querySelector(".gallery"),h=document.querySelector(".loader"),p=document.querySelector(".load-more-btn");function y(t){const r=t.map(({largeImageURL:n,webformatURL:u,tags:e,likes:o,views:l,comments:b,downloads:S})=>`<li class="gallery-item">
<a href="${n}">
<img src="${u}" alt="${e}" width="360" height="152">
</a>
<ul class="image-info-list">
<li class="image-info-item">Likes
<p>${o}</p>
</li>
<li class="image-info-item">Views
<p>${l}</p>
</li>
<li class="image-info-item">Comments
<p>${b}</p>
</li>
<li class="image-info-item">Downloads
<p>${S}</p>
</li>
</ul>
</li>`).join("");m.insertAdjacentHTML("beforeend",r),C.refresh()}function $(){m.innerHTML=""}function M(){h.classList.add("load")}function g(){p.classList.add("load")}function s(){p.classList.remove("load")}function a(){h.classList.remove("load")}function L(){const t=document.querySelector(".gallery-item"),{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}let C=new q(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const O=document.querySelector("form"),P=document.querySelector('input[type="text"]'),x=document.querySelector(".load-more-btn");let i=1,d;O.addEventListener("submit",E);x.addEventListener("click",D);function E(t){t.preventDefault(),s(),$(),d=P.value.trim(),d&&(M(),f(d,i).then(r=>{if(r.hits.length)a(),y(r.hits),L(),g(),i+=1;else{s(),a(),c("Sorry, there are no images matching your search query. Please, try again!");return}}).catch(r=>{s(),a(),c(),i=1}))}function c(t){v.show({position:"topRight",theme:"dark",backgroundColor:"#EF4040",message:t,messageColor:"#fff",iconUrl:"./img/error.svg",messageSize:"16px"})}function D(){f(d,i).then(t=>{if(i>t.totalHits/100)s(),c("We're sorry, but you've reached the end of search results.");else if(t.hits.length)a(),y(t.hits),L(),g(),i+=1;else{s(),a(),c();return}}).catch(t=>{s(),a(),c(),i=1})}
//# sourceMappingURL=index.js.map
