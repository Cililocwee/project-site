(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Spartan&display=swap);"]),i.push([n.id,':root {\n    --shadow-default: text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n\n    /* Main Colors */\n    --primary: #6200ee;\n    --primary-variant: #3700b3;\n    --secondary: #03dac6;\n    --secondary-variant: #018786;\n    /* Backgrounds */\n    --background: #ffffff;\n    --surface: #EEEEEE;\n    --error: #c51162;\n    /* Font */\n    --font-on-primary: #ffffff;\n    --font-on-secondary: #000000;\n    --font-on-background: #000000;\n    --font-on-surface: #000000;\n    --font-on-error: #ffffff;\n\n\n}\n\nhtml,\nbody {\n    width: auto;\n    height: auto;\n}\n\nbody {\n    font-family: "Spartan";\n    color: var(--font-on-surface);\n}\n\na {\n    color: var(--font-on-surface);\n    text-decoration: none;\n}\n\na:visited {\n    color: darkslategray;\n}\n\n.content {\n    margin-top: 50px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n\n.container {\n    width: 600px;\n    padding: 10px 20px;\n    margin-bottom: 35px;\n    border-radius: 10px;\n    background: var(--surface);\n    border-radius: 16px;\n    box-shadow: 0 4px 30px rgb(0 0 0 / 18%);\n    backdrop-filter: blur(4.5px);\n    -webkit-backdrop-filter: blur(4.5px);\n    /* border: 1px solid rgba(255, 255, 255, 0.43); */\n}\n\n@media all and (max-width: 768px) {\n    .container {\n        width: 80%;\n    }\n}\n\n.introduction {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n@media all and (max-width: 768px) {\n    .introduction {\n        flex-direction: column;\n        gap: 10px;\n        align-items: center;\n        padding-bottom: 20px;\n    }\n}\n\n.introblurb {\n    text-align: center;\n    margin: auto;\n}\n\n.portrait {\n    width: 200px;\n    height: 200px;\n    border-radius: 100%;\n    border: 2px solid var(--primary);\n    overflow: hidden;\n    display: flex;\n    justify-content: space-around;\n    background-color: white;\n}\n\n@media all and (max-width: 768px) {\n    .portrait {\n        width: 200px;\n        height: 200px;\n    }\n}\n\n.portrait img {\n    height: inherit;\n    width: auto;\n    border-radius: 100%;\n    transition: scale .75s;\n}\n\n.portrait img:hover {\n    scale: 1.2;\n\n}\n\n.logo {\n    width: 30px;\n    height: auto;\n    margin: auto 10px;\n}\n\n.skillslogo {\n    width: 30px;\n    height: auto;\n    margin: auto 10px;\n}\n\n.skillscategory {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n}\n\n\n.logodivbottom {\n    display: none;\n}\n\n@media all and (max-width: 768px) {\n    .logodivtop {\n        display: none;\n    }\n\n    .logodivbottom {\n        margin-top: 10px;\n        display: block;\n    }\n}\n\n.tabcontainer {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.contenttab {\n    width: auto;\n    background: var(--secondary);\n    padding: 10px 25px;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 5px;\n    /* border: 1px solid black; */\n    /* Safari */\n    -webkit-user-select: none;\n    /* Firefox */\n    -moz-user-select: none;\n    /* IE10+/Edge */\n    -ms-user-select: none;\n    /* Standard */\n    user-select: none;\n}\n\n@media all and (max-width: 768px) {\n    .contenttab {\n        padding: 5px 10px;\n        border-radius: 5px;\n    }\n}\n\n.dropdown {\n    width: 80%;\n    background: var(--secondary);\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 10px;\n    /* border: 1px solid black; */\n    display: flex;\n    flex-direction: column;\n    border-radius: 5px;\n}\n\n@media all and (max-width: 768px) {\n    .dropdown {\n        width: 100%;\n    }\n}\n\n.dropdownheader {\n    font-weight: bold;\n    padding: 5px;\n    /* Safari */\n    -webkit-user-select: none;\n    /* Firefox */\n    -moz-user-select: none;\n    /* IE10+/Edge */\n    -ms-user-select: none;\n    /* Standard */\n    user-select: none;\n}\n\n.dropdownblurb {\n    text-align: left;\n    padding: 0 10px;\n    background-color: var(--secondary-variant);\n    padding-bottom: 10px;\n}\n\n.projectlist {\n    text-decoration: none;\n}\n\n.projectleft {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-right: 1px solid var(--primary);\n    width: 28%;\n    gap: 5px;\n}\n.projectleft a{\n    margin: auto;\n    font-size: .85em;\n}\n.projectlistsmalldevice {\n    display: none;\n}\n\n.projectlistsmalldevicelinks{\n    display: flex;\n    justify-content: center;\n}\n\n@media all and (max-width: 768px) {\n    .projectlistsmalldevice {\n        display: block;\n    }\n\n    .projectlist {\n        display: none;\n    }\n}\n\n.projectbox {\n    background: var(--secondary);\n    /* border: 2px solid var(--secondary-variant); */\n    border-radius: 5px;\n    padding: 10px;\n    color: var(--font-on-secondary);\n    margin-bottom: 20px;\n    display: flex;\n    transition: .5s;\n}\n\n.projectbox:visited {\n    color: white;\n}\n\n.projectbox:hover {\n    background-color: var(--secondary-variant);\n    color: var(--font-on-secondary);\n}\n\n.projectbox a {\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    align-items: center;\n    width: 30%;\n    margin-right: 10px;\n    /* border-right: 1px solid var(--primary); */\n}\n\n.projectblurb {\n    width: 70%;\n    margin-left: auto;\n}\n\n.hidden {\n    display: none;\n}\n\n.returntotop {\n    border: 2px solid var(--primary);\n    position: fixed;\n    bottom: 10px;\n    left: 10px;\n    background: var(--secondary);\n    padding: 2px 5px;\n    border-radius: 5px;\n    /* Safari */\n    -webkit-user-select: none;\n    /* Firefox */\n    -moz-user-select: none;\n    /* IE10+/Edge */\n    -ms-user-select: none;\n    /* Standard */\n    user-select: none;\n}\n\n.contact-me {\n    background: var(--surface);\n    padding: 50px 100px;\n    border-top: 10px solid var(--primary);\n}\n\n@media all and (max-width: 768px) {\n    .contact-me {\n        padding: 10px 20px 50px;\n    }\n\n    .contact me h3{\n        display: none;\n    }\n\n    .contact-me button {\n        margin-top: 10px;\n        margin-left: auto;\n        margin-right: auto;\n    }\n}\n\n.contact-me label,\n.contact-me input,\n.contact-me textarea {\n    display: block;\n    width: 100%;\n    font-size: 12pt;\n    line-height: 24pt;\n    font-family: "Spartan";\n}\n\n.contact-me input {\n    margin-bottom: 24pt;\n}\n\n.contact-me h3 {\n    font-weight: normal;\n    font-size: 10pt;\n    line-height: 24pt;\n    font-style: italic;\n    margin: 0 0 .5em 0;\n}\n\n.contact-me span {\n    font-size: 8pt;\n}\n\n.contact-me em {\n    color: var(--secondary);\n    font-weight: bold;\n}\n\n.contact-me input,\n.contact-me textarea {\n    border: none;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 2px;\n    background: #f8f4e5;\n    padding-left: 5px;\n    outline: none;\n}\n\n.contact-me input:focus,\n.contact-me textarea:focus {\n    border: 1px solid #6bd4b1;\n}\n\n.contact-me textarea {\n    resize: none;\n}\n\n.contact-me button {\n    display: block;\n    float: right;\n    line-height: 24pt;\n    padding: 0 20px;\n    border: none;\n    background: var(--secondary);\n    color: var(--font-on-secondary);\n    letter-spacing: 2px;\n    transition: .2s all ease-in-out;\n    border-bottom: 2px solid transparent;\n    outline: none;\n}\n\n.contact-me button:hover {\n    background: inherit;\n    color: var(--secondary-variant);\n    border-bottom: 2px solid var(--secondary-variant);\n}\n\n.contact-me ::selection {\n    background: #ffc7b8;\n}\n\n.contact-me input:-webkit-autofill,\n.contact-me input:-webkit-autofill:hover,\n.contact-me input:-webkit-autofill:focus,\n.contact-me textarea:-webkit-autofill,\n.contact-me textarea:-webkit-autofill:hover,\n.contact-me textarea:-webkit-autofill:focus {\n    border: 1px solid #6bd4b1;\n    -webkit-text-fill-color: #2A293E;\n    -webkit-box-shadow: 0 0 0px 1000px #f8f4e5 inset;\n    transition: background-color 5000s ease-in-out 0s;\n}',""]);const c=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],l=o.base?d[0]+o.base:d[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var u=e(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);t[c].references--}for(var d=o(n,r),l=0;l<a.length;l++){var s=e(a[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=d}}},569:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),o=e(795),r=e.n(o),a=e(569),i=e.n(a),c=e(565),d=e.n(c),l=e(216),s=e.n(l),p=e(589),u=e.n(p),f=e(426),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const x=document.querySelectorAll(".dropdownheader");for(let n=0;n<x.length;n++)x[n].addEventListener("click",(()=>{x[n].nextElementSibling.classList.toggle("hidden")}));document.querySelector(".aboutcut").addEventListener("click",(()=>{document.getElementById("about").scrollIntoView({behavior:"smooth"})})),document.querySelector(".skillscut").addEventListener("click",(()=>{document.getElementById("skills").scrollIntoView({behavior:"smooth"})})),document.querySelector(".projectscut").addEventListener("click",(()=>{document.getElementById("projects").scrollIntoView({behavior:"smooth"})})),document.querySelector(".contactcut").addEventListener("click",(()=>{document.getElementById("contact").scrollIntoView({behavior:"smooth"})})),document.querySelector(".returntotop").addEventListener("click",(()=>{document.getElementById("introduction").scrollIntoView({behavior:"smooth"})}))})()})();