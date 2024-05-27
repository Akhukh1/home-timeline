(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var s=n.getElementsByTagName("script");if(s.length)for(var o=s.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=s[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"9757e9f863ee8a00ec8a.png",n=t.p+"85573adf6e8aaff26b85.png";class s{renderMessage(t,e){const n=document.getElementById("root"),s=document.createElement("div"),o=[...document.querySelectorAll(".mess-container")];if(s.classList.add("mess-container"),0===o.length){const o=n.insertBefore(s,document.querySelector(".form-cotauner"));this.messageContent(o,t,e)}else{const a=n.insertBefore(s,o[0]);this.messageContent(a,t,e)}}messageContent(t,e,n){const s=new Date,o=Date.parse(s),a=new Date(o).toLocaleString();let d=document.createElement("div");const r=t.appendChild(d);r.classList.add("data"),r.textContent=a,d=document.createElement("div");const i=t.appendChild(d);i.classList.add("text"),i.textContent=e,d=document.createElement("div");const c=t.appendChild(d);c.classList.add("coords"),c.textContent=n}}class o{befinition(t){navigator.geolocation&&navigator.geolocation.getCurrentPosition((e=>{const{latitude:n,longitude:o}=e.coords,a="["+n.toFixed(5)+", "+o.toFixed(5)+"] ";(new s).renderMessage(t,a)}),(()=>{this.geoInput(t)}))}geoInput(t,e){let n=document.createElement("div");const o=document.body.appendChild(n);o.classList.add("popup");const a=document.createElement("form"),d=o.appendChild(a);d.setAttribute("novalidate",""),d.classList.add("popup-input"),n=document.createElement("div");let r=d.appendChild(n);r.classList.add("form-text"),r.textContent="Что то пощло не так",n=document.createElement("div"),r=d.appendChild(n),r.classList.add("form-text"),r.textContent="К сожалению, нам не удалось определить ваше местоположение, пожалуйста, дайте рахрешение на использование геолокации, либо введите координаты вручную.",n=document.createElement("div"),r=d.appendChild(n),r.classList.add("form-text"),r.textContent="Широта и долгота через запятую";const i=document.createElement("input"),c=d.appendChild(i);c.setAttribute("name","coords"),c.required=!0,c.classList.add("form-input");const l=document.createElement("div"),m=d.appendChild(l);m.classList.add("form-buttons");let u=document.createElement("button");const p=m.appendChild(u);p.setAttribute("type","button"),p.textContent="Отмена",p.classList.add("cancel-btn"),u=document.createElement("button");const h=m.appendChild(u);h.setAttribute("type","submit"),h.textContent="ОК",h.classList.add("submit-btn"),p.addEventListener("click",(t=>{t.preventDefault(),o.remove()})),a.addEventListener("submit",(t=>{t.preventDefault();const n=function(t,e){return!(/^[0-9]{2}.[0-9]{5},\ ?(-|[0-9])[0-9].[0-9]{5}$/.test(t)||/^\[[0-9]{2}.[0-9]{5},\ ?(-|[0-9])[0-9].[0-9]{5}\]$/.test(t)||(""===t?(e.setCustomValidity("Введите координаты"),0):(e.setCustomValidity("Введите координаты в нужном формате"),0)))}(c.value,c);n?a.reportValidity():((new s).renderMessage(e,c.value),o.remove())}))}}const a=document.getElementById("root");new class{constructor(t){if(!(t instanceof HTMLElement))throw new Error("This is not HTML element!");this.container=t}renderForm(){let t=document.createElement("div");const s=this.container.appendChild(t);s.classList.add("form-cotauner");const a=document.createElement("form"),d=s.appendChild(a);d.classList.add("form");const r=document.createElement("textarea"),i=d.appendChild(r);i.setAttribute("rows","2"),i.setAttribute("name","name"),i.required=!0,i.classList.add("input-form");const c=document.createElement("button"),l=d.appendChild(c);l.setAttribute("type","submit"),l.textContent="ОК";let m=document.createElement("img");const u=s.appendChild(m);m.src=e,u.classList.add("microphone"),m=document.createElement("img");const p=s.appendChild(m);m.src=n,p.classList.add("camera"),d.addEventListener("submit",(t=>{t.preventDefault(),(new o).befinition(i.value)}))}}(a).renderForm()})();