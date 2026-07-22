import{a as q,S as v,i as P}from"./assets/vendor-CucEYOFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const B="56762760-0b1ca4d58f75edda673894a64";async function f(t,o){try{return(await q.get("https://pixabay.com/api/?",{params:{key:B,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}catch(n){return console.log(n),[]}}const h=document.querySelector(".gallery"),y=document.querySelector(".loader"),g=document.querySelector(".load-more-btn");let $=new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function m(t){const o=t.map(({largeImageURL:n,webformatURL:u,tags:e,likes:r,views:c,comments:S,downloads:w})=>`<li class="gallery-item">
<a href="${n}">
<img src="${u}" alt="${e}" width="360" height="152">
</a>
<ul class="image-info-list">
<li class="image-info-item">Likes
<p>${r}</p>
</li>
<li class="image-info-item">Views
<p>${c}</p>
</li>
<li class="image-info-item">Comments
<p>${S}</p>
</li>
<li class="image-info-item">Downloads
<p>${w}</p>
</li>
</ul>
</li>`).join("");h.insertAdjacentHTML("beforeend",o),$.refresh()}function M(){h.innerHTML=""}function p(){y.classList.add("load")}function L(){g.classList.add("load")}function s(){g.classList.remove("load")}function i(){y.classList.remove("load")}const C=document.querySelector("form"),O=document.querySelector('input[type="text"]'),x=document.querySelector(".load-more-btn"),E=document.querySelector(".gallery-item");let a=1,b=15,d;C.addEventListener("submit",H);x.addEventListener("click",D);async function H(t){try{if(t.preventDefault(),a=1,s(),M(),d=O.value.trim(),!d)return;p();const o=await f(d,a);if(o.totalHits<=b)s(),i(),l("Sorry, there are no images matching your search query. Please, try again!"),a=1;else if(o.hits.length)i(),m(o.hits),L(),a+=1;else{s(),i(),l("Sorry, there are no images matching your search query. Please, try again!");return}}catch{s(),i(),l("Sorry, there are no images matching your search query. Please, try again!"),a=1}}function l(t){P.show({position:"topRight",theme:"dark",backgroundColor:"#EF4040",message:t,messageColor:"#fff",iconUrl:"./img/error.svg",messageSize:"16px"})}async function D(){try{s(),p();const t=await f(d,a);if(a*b>=t.totalHits)m(t.hits),i(),s(),l("We're sorry, but you've reached the end of search results.");else if(t.hits.length)i(),m(t.hits),T(),L(),a+=1;else{s(),i(),l("We're sorry, but you've reached the end of search results.");return}}catch{s(),i(),l("We're sorry, but you've reached the end of search results."),a=1}}function T(){const{height:t}=E.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
