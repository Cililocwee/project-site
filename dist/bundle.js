(()=>{"use strict";var n={942:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"/* Image carousel box */\n\n.main-img {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\n.main-img img,\n.sub-imgs img {\n  width: 80%;\n}\n\n.sub-imgs {\n  display: flex;\n  gap: 5px;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.sub-imgs img {\n  height: 98px;\n  width: 100px;\n}\n\n/* Slide buttons */\n.slide-buttons {\n  position: absolute;\n  left: 2%;\n  top: 30%;\n  transform: translate(-2%, -30%);\n  width: 100%;\n}\n\n.slide-buttons button {\n  width: 20px;\n  height: 50px;\n  background: none;\n  /* color: rgba(255, 255, 255, 0.452); */\n  color: black;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  outline: inherit;\n  font-size: 1.8rem;\n  z-index: 1;\n  scale: 2;\n}\n\n#left-button {\n  margin-left: 2%;\n}\n\n#right-button {\n  margin-left: 90%;\n}\n\n/* Fade in animation for the carousel */\n@keyframes fadeIn {\n  100% {\n    opacity: 1;\n  }\n}\n\n.fade-in {\n  opacity: 0;\n  animation: fadeIn 0.3s ease-in 1 forwards;\n}\n\n#current {\n  aspect-ratio: 100/98;\n  scale: 0.75;\n}\n\n.preview-image {\n  height: 100px;\n  width: 98px;\n}\n",""]);const c=i},426:(n,e,t)=>{t.d(e,{Z:()=>v});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(61),t.b),l=new URL(t(163),t.b),p=new URL(t(420),t.b),u=new URL(t(636),t.b),m=new URL(t(209),t.b),g=i()(r());g.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Spartan&display=swap);"]);var f=s()(d),b=s()(l),x=s()(p),h=s()(u),y=s()(m);g.push([n.id,':root {\n  --shadow-default: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\n    1px 1px 0 #000;\n\n  /* Main Colors */\n  --primary: #03dac6;\n  --primary-light: #b4fef6;\n\n  /* Backgrounds */\n  --background: #ffffff;\n  --surface: #eeeeee;\n  --error: #c51162;\n\n  /* Font */\n  --font-on-primary: #000000;\n  --font-on-background: #000000;\n  --font-on-surface: #000000;\n  --font-on-error: #ffffff;\n}\n\nhtml,\nbody {\n  width: auto;\n  height: auto;\n  background-image: linear-gradient(\n    95.2deg,\n    rgba(173, 252, 234, 1) 26.8%,\n    rgba(192, 229, 246, 1) 64%\n  );\n}\n\nbody {\n  font-family: "Spartan";\n  color: var(--font-on-surface);\n}\n\na {\n  color: var(--font-on-surface);\n  text-decoration: none;\n}\n\na:visited {\n  color: darkslategray;\n}\n\n.content {\n  margin-top: 8rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8rem;\n  padding-bottom: 8rem;\n}\n\n.container {\n  width: 600px;\n  padding: 20px;\n  border-radius: 10px;\n  background: var(--surface);\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgb(0 0 0 / 18%);\n  backdrop-filter: blur(4.5px);\n  -webkit-backdrop-filter: blur(4.5px);\n}\n\n@media all and (max-width: 768px) {\n  .container {\n    width: 80%;\n  }\n}\n\n.introduction {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n@media all and (max-width: 768px) {\n  .introduction {\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n    padding-bottom: 20px;\n  }\n}\n\n.introblurb {\n  text-align: center;\n  margin: auto;\n}\n\n.portrait {\n  width: 200px;\n  height: 200px;\n  border-radius: 100%;\n  border: 2px solid var(--primary-light);\n  overflow: hidden;\n  display: flex;\n  justify-content: space-around;\n  background-color: white;\n}\n\n@media all and (max-width: 768px) {\n  .portrait {\n    width: 200px;\n    height: 200px;\n  }\n}\n\n.portrait img {\n  height: inherit;\n  width: auto;\n  border-radius: 100%;\n  transition: scale 0.75s;\n}\n\n.portrait img:hover {\n  scale: 1.2;\n}\n\n.logo {\n  width: 30px;\n  height: auto;\n  margin: auto 10px;\n}\n\n.contactlogo {\n  width: 50px;\n  height: auto;\n  margin: auto 10px;\n}\n\n#contact a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 10px;\n}\n\n.skillslogo {\n  width: 30px;\n  height: auto;\n  margin: auto 10px;\n}\n\n.skillscategory {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.logodivbottom {\n  display: none;\n}\n\n@media all and (max-width: 768px) {\n  .logodivtop {\n    display: none;\n  }\n\n  .logodivbottom {\n    margin-top: 10px;\n    display: block;\n  }\n}\n\n.tabcontainer {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.contenttab {\n  width: auto;\n  background: var(--primary);\n  padding: 10px 25px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 5px;\n\n  /* Safari */\n  -webkit-user-select: none;\n  /* Firefox */\n  -moz-user-select: none;\n  /* IE10+/Edge */\n  -ms-user-select: none;\n  /* Standard */\n  user-select: none;\n}\n\n@media all and (max-width: 768px) {\n  .contenttab {\n    padding: 5px 10px;\n    border-radius: 5px;\n  }\n}\n\n.dropdown {\n  width: 80%;\n  background: var(--primary);\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n}\n\n@media all and (max-width: 768px) {\n  .dropdown {\n    width: 100%;\n  }\n}\n\n.dropdownheader {\n  font-weight: bold;\n  padding: 5px;\n  /* Safari */\n  -webkit-user-select: none;\n  /* Firefox */\n  -moz-user-select: none;\n  /* IE10+/Edge */\n  -ms-user-select: none;\n  /* Standard */\n  user-select: none;\n}\n\n.dropdownblurb {\n  text-align: left;\n  padding: 0 10px;\n  background-color: var(--primary-light);\n  padding-bottom: 10px;\n}\n\n.projectlist {\n  text-decoration: none;\n}\n\n.hidden {\n  display: none;\n}\n\n.returntotop {\n  position: fixed;\n  bottom: 10px;\n  left: 10px;\n  background: var(--primary);\n  padding: 10px 15px;\n  border-radius: 5px;\n  /* Safari */\n  -webkit-user-select: none;\n  /* Firefox */\n  -moz-user-select: none;\n  /* IE10+/Edge */\n  -ms-user-select: none;\n  /* Standard */\n  user-select: none;\n}\n\n.contact-me {\n  background: var(--surface);\n  padding: 50px 100px;\n  border-top: 10px solid var(--primary-light);\n}\n\n@media all and (max-width: 768px) {\n  .contact-me {\n    padding: 10px 20px 50px;\n  }\n\n  .contact me h3 {\n    display: none;\n  }\n\n  .contact-me button {\n    margin-top: 10px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n.contact-me label,\n.contact-me input,\n.contact-me textarea {\n  display: block;\n  width: 100%;\n  font-size: 12pt;\n  line-height: 24pt;\n  font-family: "Spartan";\n}\n\n.contact-me input {\n  margin-bottom: 24pt;\n}\n\n.contact-me h3 {\n  font-weight: normal;\n  font-size: 10pt;\n  line-height: 24pt;\n  font-style: italic;\n  margin: 0 0 0.5em 0;\n}\n\n.contact-me span {\n  font-size: 8pt;\n}\n\n.contact-me em {\n  color: var(--primary);\n  font-weight: bold;\n}\n\n.contact-me input,\n.contact-me textarea {\n  border: none;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  background: #f8f4e5;\n  padding-left: 5px;\n  outline: none;\n}\n\n.contact-me input:focus,\n.contact-me textarea:focus {\n  border: 1px solid #6bd4b1;\n}\n\n.contact-me textarea {\n  resize: none;\n}\n\n.contact-me button {\n  display: block;\n  float: right;\n  line-height: 24pt;\n  padding: 0 20px;\n  border: none;\n  background: var(--primary);\n  color: var(--font-on-secondary);\n  letter-spacing: 2px;\n  transition: 0.2s all ease-in-out;\n  border-bottom: 2px solid transparent;\n  outline: none;\n}\n\n.contact-me button:hover {\n  background: inherit;\n  color: var(--primary-light);\n  border-bottom: 2px solid var(--primary-light);\n}\n\n.contact-me ::selection {\n  background: #ffc7b8;\n}\n\n.contact-me input:-webkit-autofill,\n.contact-me input:-webkit-autofill:hover,\n.contact-me input:-webkit-autofill:focus,\n.contact-me textarea:-webkit-autofill,\n.contact-me textarea:-webkit-autofill:hover,\n.contact-me textarea:-webkit-autofill:focus {\n  border: 1px solid #6bd4b1;\n  -webkit-text-fill-color: #2a293e;\n  -webkit-box-shadow: 0 0 0px 1000px #f8f4e5 inset;\n  transition: background-color 5000s ease-in-out 0s;\n}\n\nfooter {\n  font-size: 0.8em;\n  text-align: center;\n  position: initial;\n  left: 0px;\n  bottom: 0px;\n  height: 30px;\n  width: 100%;\n}\n\n.projectlist {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n}\n\n.project {\n  height: 250px;\n  width: 250px;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  border-radius: 16px;\n  -webkit-transition: all 0.5s;\n  box-shadow: 0 4px 30px rgb(0 0 0 / 18%);\n  backdrop-filter: blur(4.5px);\n}\n\n.project:hover {\n  transform: scale(1.1);\n}\n\n.project a {\n  text-decoration: none;\n  color: white;\n}\n\n.description {\n  margin-top: auto;\n  border-radius: 0 0 16px 16px;\n  padding: 20px 10px 5px;\n  background: linear-gradient(to bottom, transparent -21%, black 100%);\n  text-shadow: 2px 2px 2px #000000;\n}\n\n#projecta {\n  background-image: url('+f+");\n}\n\n#projectb {\n  background-image: url("+b+");\n}\n\n#projectc {\n  background-image: url("+x+");\n}\n\n#projectalpha {\n  background-image: url("+h+");\n}\n\n#projectbeta {\n  background-image: url("+y+");\n}\n\n.linkbuttons {\n  display: flex;\n  justify-content: space-around;\n  padding: 10px;\n  border-radius: 16px;\n}\n\n.overlay {\n  background: linear-gradient(to bottom, transparent 0%, black 100%);\n  width: 100%;\n  height: 100%;\n}\n",""]);const v=g},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},209:(n,e,t)=>{n.exports=t.p+"e19ea587174d08747695.jpeg"},636:(n,e,t)=>{n.exports=t.p+"c308db247772e01f2320.jpeg"},420:(n,e,t)=>{n.exports=t.p+"c7fc0734c8f9fb63dadc.jpeg"},163:(n,e,t)=>{n.exports=t.p+"2ac61682bef4b4523b1b.jpeg"},61:(n,e,t)=>{n.exports=t.p+"bc0bef484d4a6ce4795a.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var f=t(942),b={};b.styleTagTransform=u(),b.setAttributes=s(),b.insert=i().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=l(),e()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;const x=function(){const n=document.createElement("div");n.classList.add("container"),n.classList.add("project-list");const e=document.createElement("h1");e.innerText="Projects",n.append(e);const t=document.createElement("div");t.classList.add("main-img");const o=document.createElement("img");o.src="../../dist/assets/pokemongame.jpeg",o.id="current",o.alt="main image";const r=document.createElement("div");r.classList.add("slide-buttons");const a=document.createElement("button");a.innerHTML="&lsaquo;",a.id="left-button";const i=document.createElement("button");i.innerHTML="&rsaquo;",i.id="right-button",r.append(a,i);const c=document.createElement("div");c.classList.add("sub-imgs"),c.id="sub-imgs";const s=document.createElement("img");s.src="../../dist/assets/pokemongame.jpeg",s.classList.add("preview-image");const d=document.createElement("img");d.src="../../dist/assets/weather.jpg",d.classList.add("preview-image");const l=document.createElement("img");l.src="../../dist/assets/todo.jpeg",l.classList.add("preview-image");const p=document.createElement("img");p.src="../../dist/assets/signup.jpg",p.classList.add("preview-image");const u=document.createElement("img");u.src="../../dist/assets/resumesite.jpeg",u.classList.add("preview-image"),c.append(s,d,l,p,u),t.append(o),n.append(t,r,c),document.querySelector("#current");const m=c.childNodes;function g(n){m.forEach((n=>n.setAttribute("style","opacity:1"))),"IMG"===n.tagName&&(document.querySelector("#current").src=n.src,document.querySelector("#current").classList.add("fade-in"),setTimeout((()=>{document.querySelector("#current").classList.remove("fade-in")}),500),n.setAttribute("style","opacity:0.6"))}return m[0].setAttribute("style","opacity:0.6"),c.addEventListener("click",(n=>{console.log(n.target),g(n.target)})),a.addEventListener("click",(function(){for(let n=0;n<m.length;n++)if(m[n].src===document.querySelector("#current").src){let e=n-1;e<0&&(e+=m.length),g(m[e]);break}})),i.addEventListener("click",(function(){for(let n=0;n<m.length;n++)if(m[n].src===document.querySelector("#current").src){let e=n+1;e>m.length-1&&(e-=m.length),g(m[e]);break}})),{container:n}}(),h=document.querySelectorAll(".dropdownheader");for(let n=0;n<h.length;n++)h[n].addEventListener("click",(()=>{h[n].nextElementSibling.classList.toggle("hidden")}));document.querySelector(".aboutcut").addEventListener("click",(()=>{document.getElementById("about").scrollIntoView({behavior:"smooth"})})),document.querySelector(".skillscut").addEventListener("click",(()=>{document.getElementById("skills").scrollIntoView({behavior:"smooth"})})),document.querySelector(".projectscut").addEventListener("click",(()=>{document.getElementById("projects").scrollIntoView({behavior:"smooth"})})),document.querySelector(".contactcut").addEventListener("click",(()=>{document.getElementById("contact").scrollIntoView({behavior:"smooth"})})),document.querySelector(".returntotop").addEventListener("click",(()=>{document.getElementById("introduction").scrollIntoView({behavior:"smooth"})})),document.querySelector(".content").appendChild(x.container)})()})();