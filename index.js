import{a as v,S as q,i as B}from"./assets/vendor-CucEYOFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const P="56762760-0b1ca4d58f75edda673894a64";async function m(t,r){try{return(await v.get("https://pixabay.com/api/?",{params:{key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}catch(n){return console.log(n),[]}}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),y=document.querySelector(".load-more-btn");let $=new q(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function p(t){const r=t.map(({largeImageURL:n,webformatURL:u,tags:e,likes:o,views:l,comments:w,downloads:S})=>`<li class="gallery-item">
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
</li>`).join("");f.insertAdjacentHTML("beforeend",r),$.refresh()}function M(){f.innerHTML=""}function g(){h.classList.add("load")}function L(){y.classList.add("load")}function a(){y.classList.remove("load")}function i(){h.classList.remove("load")}function b(){const t=document.querySelector(".gallery-item"),{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}const C=document.querySelector("form"),O=document.querySelector('input[type="text"]'),x=document.querySelector(".load-more-btn");let s=1,E=15,d;C.addEventListener("submit",D);x.addEventListener("click",H);async function D(t){try{if(t.preventDefault(),s=1,a(),M(),d=O.value.trim(),!d)return;g();const r=await m(d,s);if(r.hits.length)i(),p(r.hits),b(),L(),s+=1;else{a(),i(),c("Sorry, there are no images matching your search query. Please, try again!");return}}catch{a(),i(),c("Sorry, there are no images matching your search query. Please, try again!"),s=1}}function c(t){B.show({position:"topRight",theme:"dark",backgroundColor:"#EF4040",message:t,messageColor:"#fff",iconUrl:"./img/error.svg",messageSize:"16px"})}async function H(){try{a(),g();const t=await m(d,s);if(s*E>=t.totalHits)i(),a(),c("We're sorry, but you've reached the end of search results.");else if(t.hits.length)i(),p(t.hits),b(),L(),s+=1;else{a(),i(),c("We're sorry, but you've reached the end of search results.");return}}catch{a(),i(),c("We're sorry, but you've reached the end of search results."),s=1}}
//# sourceMappingURL=index.js.map
