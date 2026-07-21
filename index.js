import{a as d,S as p,i as g}from"./assets/vendor-BGqwtSVv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="56762760-0b1ca4d58f75edda673894a64";function y(i){return d.get("https://pixabay.com/api/",{params:{key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>(console.log(r),[]))}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");function L(i){const r=i.map(({largeImageURL:o,webformatURL:s,tags:e,likes:t,views:a,comments:f,downloads:m})=>`<li class="gallery-item">
<a href="${o}">
<img src="${s}" alt="${e}" width="360" height="152">
</a>
<ul class="image-info-list">
<li class="image-info-item">Likes
<p>${t}</p>
</li>
<li class="image-info-item">Views
<p>${a}</p>
</li>
<li class="image-info-item">Comments
<p>${f}</p>
</li>
<li class="image-info-item">Downloads
<p>${m}</p>
</li>
</ul>
</li>`).join("");c.innerHTML=r,q.refresh()}function S(){c.innerHTML=""}function b(){u.classList.add("load")}function n(){u.classList.remove("load")}let q=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const w=document.querySelector("form"),v=document.querySelector('input[type="text"]');w.addEventListener("submit",$);function $(i){i.preventDefault(),S();const r=v.value.trim();r&&(b(),y(r).then(o=>{if(o.length)n(),L(o);else{n(),l();return}}).catch(o=>{n(),l()}))}function l(){g.show({position:"topRight",theme:"dark",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fff",iconUrl:"./img/error.svg",messageSize:"16px"})}
//# sourceMappingURL=index.js.map
