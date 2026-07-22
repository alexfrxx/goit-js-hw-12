import{a as q,S as v,i as B}from"./assets/vendor-CucEYOFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const P="56762760-0b1ca4d58f75edda673894a64";async function m(t,r){try{return(await q.get("https://pixabay.com/api/?",{params:{key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}catch(n){return console.log(n),[]}}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),y=document.querySelector(".load-more-btn");let $=new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function p(t){const r=t.map(({largeImageURL:n,webformatURL:u,tags:e,likes:o,views:l,comments:w,downloads:S})=>`<li class="gallery-item">
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
<p>${w}</p>
</li>
<li class="image-info-item">Downloads
<p>${S}</p>
</li>
</ul>
</li>`).join("");f.insertAdjacentHTML("beforeend",r),$.refresh()}function M(){f.innerHTML=""}function g(){h.classList.add("load")}function L(){y.classList.add("load")}function a(){y.classList.remove("load")}function s(){h.classList.remove("load")}function b(){const t=document.querySelector(".gallery-item"),{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}const C=document.querySelector("form"),O=document.querySelector('input[type="text"]'),x=document.querySelector(".load-more-btn");let i=1,E=15,d;C.addEventListener("submit",D);x.addEventListener("click",H);async function D(t){try{if(t.preventDefault(),a(),M(),d=O.value.trim(),!d)return;g();const r=await m(d,i);if(r.hits.length)s(),p(r.hits),b(),L(),i+=1;else{a(),s(),c("Sorry, there are no images matching your search query. Please, try again!"),i=1;return}}catch{a(),s(),c("Sorry, there are no images matching your search query. Please, try again!"),i=1}}function c(t){B.show({position:"topRight",theme:"dark",backgroundColor:"#EF4040",message:t,messageColor:"#fff",iconUrl:"./img/error.svg",messageSize:"16px"})}async function H(){try{g();const t=await m(d,i);if(i>t.totalHits/E)s(),a(),c("We're sorry, but you've reached the end of search results.");else if(t.hits.length)a(),s(),p(t.hits),b(),L(),i+=1;else{a(),s(),c();return}}catch{a(),s(),c("We're sorry, but you've reached the end of search results."),i=1}}
//# sourceMappingURL=index.js.map
