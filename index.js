import{a as q,S as B,i as P}from"./assets/vendor-CucEYOFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const $="56762760-0b1ca4d58f75edda673894a64";async function m(t,r){try{return(await q.get("https://pixabay.com/api/?",{params:{key:$,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}catch(n){return console.log(n),[]}}const y=document.querySelector(".gallery"),p=document.querySelector(".loader"),g=document.querySelector(".load-more-btn");let M=new B(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function f(t){const r=t.map(({largeImageURL:n,webformatURL:u,tags:e,likes:o,views:c,comments:w,downloads:S})=>`<li class="gallery-item">
<a href="${n}">
<img src="${u}" alt="${e}" width="360" height="152">
</a>
<ul class="image-info-list">
<li class="image-info-item">Likes
<p>${o}</p>
</li>
<li class="image-info-item">Views
<p>${c}</p>
</li>
<li class="image-info-item">Comments
<p>${w}</p>
</li>
<li class="image-info-item">Downloads
<p>${S}</p>
</li>
</ul>
</li>`).join("");y.insertAdjacentHTML("beforeend",r),M.refresh()}function C(){y.innerHTML=""}function L(){p.classList.add("load")}function b(){g.classList.add("load")}function i(){g.classList.remove("load")}function a(){p.classList.remove("load")}const O=document.querySelector("form"),x=document.querySelector('input[type="text"]'),E=document.querySelector(".load-more-btn");let s=1,v=15,d;O.addEventListener("submit",H);E.addEventListener("click",D);async function H(t){try{if(t.preventDefault(),s=1,i(),C(),d=x.value.trim(),!d)return;L();const r=await m(d,s);if(r.totalHits<=v)f(r.hits),i(),a(),l("We're sorry, but you've reached the end of search results."),s=1;else if(r.hits.length)a(),f(r.hits),b(),s+=1;else{i(),a(),l("Sorry, there are no images matching your search query. Please, try again!");return}}catch{i(),a(),l("Sorry, there are no images matching your search query. Please, try again!"),s=1}}function l(t){P.show({position:"topRight",theme:"dark",backgroundColor:"#EF4040",message:t,messageColor:"#fff",iconUrl:"./img/error.svg",messageSize:"16px"})}async function D(){try{i(),L();const t=await m(d,s);if(s*v>=t.totalHits)a(),i(),f(t.hits),h(),l("We're sorry, but you've reached the end of search results.");else if(t.hits.length)a(),f(t.hits),h(),b(),s+=1;else{i(),a(),l("We're sorry, but you've reached the end of search results.");return}}catch{i(),a(),l("We're sorry, but you've reached the end of search results."),s=1}}function h(){const t=document.querySelector(".gallery-item"),{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
