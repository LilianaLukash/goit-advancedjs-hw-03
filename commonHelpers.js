import{i as n,S as u}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const f="45272340-7dc1a3d2f1c55d3a20037b43c";function d(s,e=1){return fetch(`https://pixabay.com/api/?key=${f}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=12`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function m(s){return s.map(e=>`
    <div class="photo-card">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">Likes: ${e.likes}</p>
        <p class="info-item">Views: ${e.views}</p>
        <p class="info-item">Comments: ${e.comments}</p>
        <p class="info-item">Downloads: ${e.downloads}</p>
      </div>
    </div>
  `).join("")}const p=document.querySelector(".search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");p.addEventListener("submit",s=>{s.preventDefault();const e=s.currentTarget.elements.query.value.trim();if(e===""){n.error({title:"Error",message:"Please enter a search term!"});return}c.innerHTML="",l.classList.add("visible"),d(e).then(o=>{o.hits.length===0?n.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):(c.innerHTML=m(o.hits),new u(".gallery a",{captionDelay:250}))}).catch(o=>{n.error({title:"Error",message:`Failed to fetch images. Error: ${o.message}`})}).finally(()=>{l.classList.remove("visible")})});
//# sourceMappingURL=commonHelpers.js.map
