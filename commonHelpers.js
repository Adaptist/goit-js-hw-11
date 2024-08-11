import{S as d,i as n}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="45384673-88f77579824a7b83d33085da5",y="https://pixabay.com/api/";function g(o){const s=`${y}?key=${p}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(r=>r.ok?r.json():Promise.reject(`Network response was not ok: ${r.statusText}`))}function h(o){o.innerHTML=""}function b(o,s){const r=o.map(({webformatURL:l,largeImageURL:e,tags:t,likes:i,views:u,comments:m,downloads:f})=>`
        <li class="gallery-list-item">
            <a class="gallery-link" href="${e}">
                <img class="gallery-img" src="${l}" 
                    alt="${t}" 
                    title="${t}" />
                <ul class="sub-list">
                    <li class="sub-list-item">
                        <b>Likes</b>
                        <p>${i}</p>
                    </li>
                    <li class="sub-list-item">
                        <b>Views</b>
                        <p>${u}</p>
                    </li>
                    <li class="sub-list-item">
                        <b>Comments</b>
                        <p>${m}</p>
                    </li>
                    <li class="sub-list-item">
                        <b>Downloads</b>
                        <p>${f}</p>
                    </li>
                </ul>
            </a>
        </li>`).join("");s.insertAdjacentHTML("beforeend",r)}const $=document.querySelector("#search-form"),a=document.querySelector(".gallery"),c=document.querySelector("#loader");let L=new d(".gallery a",{});$.addEventListener("submit",o=>{o.preventDefault();const s=o.currentTarget.elements.query.value.trim();if(s===""){n.error({message:"Please enter a search term."});return}h(a),c.style.display="block",g(s).then(r=>{r.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!"}):(b(r.hits,a),L.refresh())}).catch(r=>{n.error({message:r.message})}).finally(()=>{c.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
