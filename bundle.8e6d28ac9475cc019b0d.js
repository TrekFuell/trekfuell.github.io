!function(e){function t(t){for(var l,o,i=t[0],s=t[1],c=t[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);for(u&&u(t);m.length;)m.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],l=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(l=!1)}l&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var l={},r={0:0},a=[];function o(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=l,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;a.push([131,1]),n()}({130:function(e,t,n){var l=n(92);e.exports=(l.default||l).template({1:function(e,t,n,l,r){var a,o=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,s=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'  <div class="row mt-5" style="border-bottom: 1px dashed black">\r\n    <div class="col-sm-12">\r\n      <h6 class="title">'+s("function"==typeof(a=null!=(a=c(n,"title")||(null!=t?c(t,"title"):t))?a:i)?a.call(o,{name:"title",hash:{},data:r,loc:{start:{line:4,column:24},end:{line:4,column:33}}}):a)+'</h6>\r\n    </div>\r\n    <div class="col-sm-12">\r\n      <p class="author font-italic">'+s("function"==typeof(a=null!=(a=c(n,"author")||(null!=t?c(t,"author"):t))?a:i)?a.call(o,{name:"author",hash:{},data:r,loc:{start:{line:7,column:36},end:{line:7,column:46}}}):a)+'</p>\r\n    </div>\r\n    <div class="col-sm-12">\r\n      <p class="text">'+s("function"==typeof(a=null!=(a=c(n,"text")||(null!=t?c(t,"text"):t))?a:i)?a.call(o,{name:"text",hash:{},data:r,loc:{start:{line:10,column:22},end:{line:10,column:30}}}):a)+"</p>\r\n    </div>\r\n  </div>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,l,r){var a;return null!=(a=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:1,column:0},end:{line:13,column:9}}}))?a:""},useData:!0})},131:function(e,t,n){n(132),e.exports=n(339)},320:function(e,t,n){},321:function(e,t,n){var l=n(92);e.exports=(l.default||l).template({1:function(e,t,n,l,r){var a,o,i=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c="function",u=e.escapeExpression,d=e.lambda,m=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'  <div class="col-md-4 mb-4 mt-3 single-news" data-index="'+u(typeof(o=null!=(o=m(n,"id")||(null!=t?m(t,"id"):t))?o:s)===c?o.call(i,{name:"id",hash:{},data:r,loc:{start:{line:2,column:58},end:{line:2,column:64}}}):o)+'">\r\n    <div class="card">\r\n      <img src="'+u(d(null!=(a=null!=t?m(t,"image"):t)?m(a,"small"):a,t))+'"\r\n           class="rounded mx-auto d-block mt-3 img-fluid"\r\n           width="240"\r\n           height="135"\r\n           alt="'+u(typeof(o=null!=(o=m(n,"title")||(null!=t?m(t,"title"):t))?o:s)===c?o.call(i,{name:"title",hash:{},data:r,loc:{start:{line:8,column:16},end:{line:8,column:25}}}):o)+'"\r\n           title="'+u(typeof(o=null!=(o=m(n,"title")||(null!=t?m(t,"title"):t))?o:s)===c?o.call(i,{name:"title",hash:{},data:r,loc:{start:{line:9,column:18},end:{line:9,column:27}}}):o)+'"/>\r\n      <div class="card-body">\r\n        <h6 class="text-center single-news-title" data-index="'+u(typeof(o=null!=(o=m(n,"id")||(null!=t?m(t,"id"):t))?o:s)===c?o.call(i,{name:"id",hash:{},data:r,loc:{start:{line:11,column:62},end:{line:11,column:68}}}):o)+'">\r\n          '+u(typeof(o=null!=(o=m(n,"title")||(null!=t?m(t,"title"):t))?o:s)===c?o.call(i,{name:"title",hash:{},data:r,loc:{start:{line:12,column:10},end:{line:12,column:19}}}):o)+'\r\n        </h6>\r\n        <p class="text-muted">категория: '+u(d(null!=(a=null!=t?m(t,"features"):t)?m(a,"newsCategory"):a,t))+"; дата выхода:\r\n          "+u(d(null!=(a=null!=t?m(t,"features"):t)?m(a,"newsDate"):a,t))+"; активность: "+u(d(null!=(a=null!=t?m(t,"features"):t)?m(a,"newsActivity"):a,t))+";\r\n          рейтинг: "+u(d(null!=(a=null!=t?m(t,"features"):t)?m(a,"newsRating"):a,t))+'</p>\r\n      </div>\r\n      <button type="button"\r\n              class="btn-primary btn-sm w-25 mx-auto mb-3 single-news-btn"\r\n              data-index="'+u(typeof(o=null!=(o=m(n,"id")||(null!=t?m(t,"id"):t))?o:s)===c?o.call(i,{name:"id",hash:{},data:r,loc:{start:{line:20,column:26},end:{line:20,column:32}}}):o)+'">\r\n        Читать\r\n      </button>\r\n    </div>\r\n  </div>\r\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,l,r){var a;return null!=(a=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:1,column:0},end:{line:25,column:9}}}))?a:""},useData:!0})},337:function(e,t,n){var l=n(92);e.exports=(l.default||l).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,l,r){var a,o,i=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c="function",u=e.escapeExpression,d=e.lambda,m=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="col mt-3 single-news" data-index="'+u(typeof(o=null!=(o=m(n,"id")||(null!=t?m(t,"id"):t))?o:s)===c?o.call(i,{name:"id",hash:{},data:r,loc:{start:{line:1,column:46},end:{line:1,column:52}}}):o)+'">\r\n  <div class="card">\r\n    <img src="'+u(d(null!=(a=null!=t?m(t,"image"):t)?m(a,"large"):a,t))+'"\r\n         class="rounded mx-auto d-block mt-3 img-fluid pl-3 pr-3"\r\n         width=550"\r\n         height="370"\r\n         alt="'+u(typeof(o=null!=(o=m(n,"title")||(null!=t?m(t,"title"):t))?o:s)===c?o.call(i,{name:"title",hash:{},data:r,loc:{start:{line:7,column:14},end:{line:7,column:23}}}):o)+'"\r\n         title="'+u(typeof(o=null!=(o=m(n,"title")||(null!=t?m(t,"title"):t))?o:s)===c?o.call(i,{name:"title",hash:{},data:r,loc:{start:{line:8,column:16},end:{line:8,column:25}}}):o)+'"/>\r\n    <div class="card-body">\r\n      <h5 class="card-title text-center font-weight-bold">\r\n        '+u(typeof(o=null!=(o=m(n,"title")||(null!=t?m(t,"title"):t))?o:s)===c?o.call(i,{name:"title",hash:{},data:r,loc:{start:{line:11,column:8},end:{line:11,column:17}}}):o)+'\r\n      </h5>\r\n      <p class="card-text">\r\n        '+u(typeof(o=null!=(o=m(n,"text")||(null!=t?m(t,"text"):t))?o:s)===c?o.call(i,{name:"text",hash:{},data:r,loc:{start:{line:14,column:8},end:{line:14,column:16}}}):o)+'\r\n      </p>\r\n      <p class="text-muted">категория: '+u(d(null!=(a=null!=t?m(t,"features"):t)?m(a,"newsCategory"):a,t))+"; дата выхода:\r\n        "+u(d(null!=(a=null!=t?m(t,"features"):t)?m(a,"newsDate"):a,t))+"; активность: "+u(d(null!=(a=null!=t?m(t,"features"):t)?m(a,"newsActivity"):a,t))+";\r\n        рейтинг: "+u(d(null!=(a=null!=t?m(t,"features"):t)?m(a,"newsRating"):a,t))+"</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"},useData:!0})},339:function(e,t,n){"use strict";n.r(t);n(318),n(320);var l={api:"http://localhost:3006",elements:{mainPage:document.getElementById("mainPage"),filtersPage:document.getElementById("filtersPage"),allNewsPage:document.getElementById("allNewsPage"),singleNewsPage:document.getElementById("singleNewsPage"),singleNewsContainer:document.getElementById("singleNewsContainer"),commentTitle:document.getElementById("commentTitle"),commentAuthor:document.getElementById("commentAuthor"),commentText:document.getElementById("commentText"),postCommentButton:document.getElementById("postCommentButton"),commentsContainer:document.getElementById("commentsContainer"),aboutPage:document.getElementById("aboutPage"),postNewsPage:document.getElementById("postNewsPage"),postForm:document.getElementById("postForm"),emailInput:document.getElementById("emailInput"),nameInput:document.getElementById("nameInput"),countryInput:document.getElementById("countryInput"),topicInput:document.getElementById("topicInput"),textInput:document.getElementById("textInput"),aboutButton:document.getElementById("aboutButton"),errorPage:document.getElementById("errorPage"),checkboxes:document.querySelector("#filtersPage").querySelectorAll("input[type=checkbox]"),clearFiltersBtn:document.getElementById("clearFiltersBtn"),feedbackButton:document.getElementById("feedbackButton"),header:document.getElementById("header")},displayNone:"d-none",displayBlock:"d-block",filterOptions:["newsCategory","newsDate","newsActivity","newsRating"]},r=n(24),a=n.n(r);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var s=n(321),c=n(337),u=n(130),d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.checkboxService=t,this.router=n}var t,n,r;return t=e,(n=[{key:"scrollToContacts",value:function(){a()("#contactsButton").click((function(){a()([document.documentElement,document.body]).animate({scrollTop:a()(".contacts").offset().top},0)}))}},{key:"renderMainPage",value:function(e){var t=l.elements.mainPage,n=l.elements.singleNewsPage,r=l.elements.errorPage,a=l.elements.aboutPage,i=l.elements.postNewsPage;this.scrollToContacts();var s=document.querySelectorAll(".single-news");o(s).forEach((function(e){e.classList.add(l.displayNone)})),o(s).forEach((function(t){e.forEach((function(e){Number(t.dataset.index)===Number(e.id)&&t.classList.remove(l.displayNone)}))})),t.classList.add(l.displayBlock),n.classList.remove(l.displayBlock),r.classList.remove(l.displayBlock),a.classList.remove(l.displayBlock),i.classList.remove(l.displayBlock)}},{key:"generateAllNews",value:function(e){var t=this,n=l.elements.mainPage;l.elements.allNewsPage.innerHTML=s(e);var r=document.querySelectorAll(".single-news-title"),a=document.querySelectorAll(".single-news-btn");r.forEach((function(e){e.style.cursor="pointer",e.addEventListener("click",(function(r){r.preventDefault();var a=e.dataset.index;window.history.pushState(null,null,"/news/".concat(a)),t.router.render(decodeURI(window.location.pathname)),n.classList.remove(l.displayBlock)}))})),a.forEach((function(e){e.addEventListener("click",(function(r){r.preventDefault();var a=e.dataset.index;window.history.pushState(null,null,"/news/".concat(a)),t.router.render(decodeURI(window.location.pathname)),n.classList.remove(l.displayBlock)}))}))}},{key:"initSingleNewsPage",value:function(){var e=this,t=l.elements.singleNewsPage,n=l.elements.header,r=l.elements.aboutPage,a=l.elements.mainPage,o=l.elements.postNewsPage;t.classList.add(l.displayBlock),r.classList.remove(l.displayBlock),a.classList.remove(l.displayBlock),o.classList.remove(l.displayBlock),t.classList.contains(l.displayBlock)&&n.addEventListener("click",(function(n){n.preventDefault(),n.target.classList.contains("main-btn")&&(n.preventDefault(),t.classList.remove(l.displayBlock),window.history.pushState(null,null,e.checkboxService.getCurrentState()),e.router.render(decodeURI(window.location.pathname)))}))}},{key:"renderSingleNewsPage",value:function(e){var t=l.elements.singleNewsPage,n=l.elements.singleNewsContainer,r=l.elements.aboutPage,a=l.elements.postNewsPage,o=l.elements.mainPage,i=window.location.pathname.split("/news/")[1].trim(),s=!1;r.classList.remove(l.displayBlock),a.classList.remove(l.displayBlock),o.classList.remove(l.displayBlock),e.length&&e.forEach((function(e){Number(e.id)===Number(i)&&(s=!0,n.innerHTML=c(e))})),s?t.classList.add(l.displayBlock):this.renderErrorPage()}},{key:"renderComments",value:function(e){l.elements.commentsContainer.innerHTML=u(e)}},{key:"renderErrorPage",value:function(){window.history.pushState(null,null,"/404"),this.router.render(decodeURI(window.location.pathname))}},{key:"initAboutPage",value:function(){var e=this;this.scrollToContacts();var t=l.elements.aboutButton,n=l.elements.aboutPage,r=l.elements.mainPage,a=l.elements.errorPage;r.classList.remove(l.displayBlock),t.addEventListener("click",(function(t){t.preventDefault(),window.history.pushState(null,null,"/about"),e.router.render(decodeURI(window.location.pathname)),r.classList.remove(l.displayBlock),a.classList.remove(l.displayBlock),n.classList.add(l.displayBlock)}))}},{key:"renderAboutPage",value:function(){var e=this,t=l.elements.aboutPage,n=l.elements.header,r=l.elements.postNewsPage,a=l.elements.singleNewsPage,o=l.elements.mainPage;a.classList.remove(l.displayBlock),r.classList.remove(l.displayBlock),o.classList.remove(l.displayBlock),t.classList.add(l.displayBlock),t.classList.contains(l.displayBlock)&&n.addEventListener("click",(function(n){n.preventDefault(),n.target.classList.contains("main-btn")&&(n.preventDefault(),t.classList.remove(l.displayBlock),window.history.pushState(null,null,e.checkboxService.getCurrentState()),e.router.render(decodeURI(window.location.pathname)))}))}},{key:"initPostNewsPage",value:function(){var e=this,t=l.elements.feedbackButton,n=l.elements.postNewsPage,r=l.elements.errorPage,a=l.elements.mainPage;t.addEventListener("click",(function(t){t.preventDefault(),window.history.pushState(null,null,"/feedback"),e.router.render(decodeURI(window.location.pathname)),a.classList.remove(l.displayBlock),r.classList.remove(l.displayBlock),n.classList.add(l.displayBlock)}))}},{key:"renderPostNewsPage",value:function(){var e=this,t=l.elements.postNewsPage,n=l.elements.header,r=l.elements.aboutPage,a=l.elements.singleNewsPage;l.elements.mainPage.classList.remove(l.displayBlock),a.classList.remove(l.displayBlock),r.classList.remove(l.displayBlock),t.classList.add(l.displayBlock),t.classList.contains(l.displayBlock)&&n.addEventListener("click",(function(n){n.preventDefault(),n.target.classList.contains("main-btn")&&(n.preventDefault(),t.classList.remove(l.displayBlock),window.history.pushState(null,null,e.checkboxService.getCurrentState()),e.router.render(decodeURI(window.location.pathname)))}))}},{key:"filterResult",value:function(e,t){var n=l.filterOptions,r=o(e),a=[],i=!1;return this.clearCheckbox(),n.forEach((function(e){t[e]&&t[e].length&&(i&&(r=a,a=[]),t[e].forEach((function(t){r.forEach((function(n){"string"==typeof n.features[e]&&-1!==n.features[e].toLowerCase().indexOf(t)&&(a.push(n),i=!0),"number"==typeof n.features[e]&&n.features[e]===Number(t)&&(a.push(n),i=!0)})),o(document.querySelectorAll("input[name=".concat(e,"]"))).filter((function(e){return e.value===t}))[0].checked=!0})))})),a}},{key:"renderFilterResult",value:function(e,t){var n=t.filters,l=this.filterResult(e,n);this.renderMainPage(l)}},{key:"clearCheckbox",value:function(){o(l.elements.checkboxes).forEach((function(e){e.checked=!1}))}},{key:"initResetCheckbox",value:function(){var e=this;l.elements.clearFiltersBtn.addEventListener("click",(function(t){t.preventDefault(),e.clearCheckbox()}))}}])&&i(t.prototype,n),r&&i(t,r),e}();function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var h=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.routes={404:function(){var e=l.elements.errorPage,t=l.elements.singleNewsPage,n=l.elements.mainPage;e.classList.add(l.displayBlock),t.classList.remove(l.displayBlock),n.classList.remove(l.displayBlock)}},this.allNews=document.querySelectorAll(".single-news"),window.addEventListener("popstate",(function(e){e.preventDefault(),t.render(decodeURI(window.location.pathname))}))}var t,n,r;return t=e,(n=[{key:"addRoute",value:function(e,t){this.routes[e]=t}},{key:"render",value:function(e){var t=e.split("/")[1];m(this.allNews).forEach((function(e){e.classList.remove(l.displayBlock)})),this.routes[t]?this.routes[t]():this.routes[404]()}}])&&f(t.prototype,n),r&&f(t,r),e}();function p(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.subscribers=[]}var t,n,l;return t=e,(n=[{key:"subscribe",value:function(e){this.subscribers.push(e)}},{key:"next",value:function(e){this.subscribers.forEach((function(t){t(e)}))}}])&&p(t.prototype,n),l&&p(t,l),e}();function y(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var g=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._checkboxes=l.elements.checkboxes,this._observable=new v,this.filters={},this.initialState(),this.init()}var t,n,r;return t=e,(n=[{key:"subscribe",value:function(e){this._observable.subscribe(e)}},{key:"init",value:function(){var e=this;this._checkboxes.forEach((function(t){t.addEventListener("click",e.onCheckboxClick.bind(e))})),l.elements.clearFiltersBtn.addEventListener("click",(function(t){t.preventDefault(),e.filters={},e._observable.next("/")}))}},{key:"onCheckboxClick",value:function(e){var t=e.target,n=t.getAttribute("name");if(t.checked)this.filters[n]&&this.filters[n].length||(this.filters[n]=[]),this.filters[n].push(t.value);else{if(this.filters[n]&&this.filters[n].length&&this.filters[n].includes(t.value)){var l=this.filters[n].indexOf(t.value);this.filters[n].splice(l,1)}this.filters[n].length||delete this.filters[n]}this._observable.next(this.createQueryHash())}},{key:"initialState",value:function(){if(window.location.pathname.includes("filter/")){var e=window.location.pathname.split("/filter/")[1].trim();try{this.filters=JSON.parse(decodeURI(e))}catch(e){this.filters={}}}}},{key:"createQueryHash",value:function(){return Object.keys(this.filters).length>0?"/filter/".concat(JSON.stringify(this.filters)):"/"}},{key:"getCurrentState",value:function(){return this.createQueryHash()}}])&&y(t.prototype,n),r&&y(t,r),e}();n(338);function b(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var w=n(130),k=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=l.api}var t,n,r;return t=e,(n=[{key:"sendPost",value:function(){var e=l.elements.emailInput,t=l.elements.nameInput,n=l.elements.countryInput,r=l.elements.topicInput,a=l.elements.textInput;fetch("".concat(this.api,"/suggestedNews"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:"".concat(e.value),name:"".concat(t.value),country:"".concat(n.value),topic:"".concat(r.value),text:"".concat(a.value)})}).then((function(e){return 201!==e.status?Promise.reject(new Error(e.statusText)):Promise.resolve(e)})).then((function(){e.value="",t.value="",n.value="",r.value="",a.value=""}))}},{key:"sendComment",value:function(){var e=this,t=l.elements.commentTitle,n=l.elements.commentAuthor,r=l.elements.commentText;fetch("".concat(this.api,"/comments"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"".concat(t.value),author:"".concat(n.value),text:"".concat(r.value)})}).then((function(e){return 201!==e.status?Promise.reject(new Error(e.statusText)):Promise.resolve(e)})).then((function(){t.value="",n.value="",r.value=""})).then((function(){e.getNewComment()}))}},{key:"getNewComment",value:function(){var e=this,t=l.elements.commentsContainer;fetch("".concat(l.api,"/comments"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.text()})).then((function(n){e.comments=n,t.innerHTML=w(n)}))}},{key:"initPost",value:function(){var e=this,t={submitHandler:function(){e.sendPost();var t=document.createElement("div");t.innerHTML="Ваша новость была успешно отправлена. Спасибо!",t.className="alert alert-success mt-5 font-italic text-monospace",a()("#postForm").after(t),setTimeout((function(){t.remove()}),5e3)},invalidHandler:function(){var e=document.createElement("div");e.innerHTML="Пожалуйста, проверьте правильность ввода данных!",e.className="alert alert-danger mt-5 font-italic text-monospace",a()("#postForm").after(e),setTimeout((function(){e.remove()}),5e3)},rules:{email:{required:!0,email:!0},name:{required:!0,minlength:2},country:{required:!0,minlength:3},topic:{required:!0,minlength:10},text:{required:!0,minlength:50}},messages:{email:{required:"Пожалуйста, введите Ваш email",email:"Ввведите Ваш email в корректном формате, пожалуйста (test@gmail.com)"},name:"Пожалуйста, введите Ваше имя (минимум 2 буквы)",country:"Пожалуйста, введите Вашу страну (минимум 3 буквы)",topic:"Пожалуйста, введите тему Вашей новости (минимум 10 символов)",text:"Пожалуйста, расскажите про Вашу новость (минимум 50 символов)"},validClass:"text-success",errorClass:"text-danger"};a()("#postForm").validate(t)}},{key:"initComment",value:function(){var e=this;l.elements.postCommentButton.addEventListener("click",(function(t){t.preventDefault(),e.sendComment()}))}}])&&b(t.prototype,n),r&&b(t,r),e}();function P(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.news=[],this.comments=[],this.router=new h,this.checkboxService=new g,this.render=new d(this.checkboxService,this.router),this.checkboxService.subscribe(this.onFilterChange.bind(this)),this.post=new k,this.init(),this.initComments()}var t,n,r;return t=e,(n=[{key:"init",value:function(){var e=this;fetch("".concat(l.api,"/news"),{method:"GET",headers:{"Content-Type":"text/html"}}).then((function(e){return e.text()})).then((function(t){e.news=t,e.render.generateAllNews(t),e.render.initSingleNewsPage(),e.post.initComment(),e.render.initResetCheckbox(),e.render.initAboutPage(),e.render.initPostNewsPage(),e.post.initPost(),e.initRouter(),e.router.render(decodeURI(window.location.pathname))}))}},{key:"initComments",value:function(){var e=this;fetch("".concat(l.api,"/comments"),{method:"GET",headers:{"Content-Type":"text/html"}}).then((function(e){return e.text()})).then((function(t){e.comments=t,e.render.renderComments(t)}))}},{key:"initRouter",value:function(){this.router.addRoute("",this.render.renderMainPage.bind(this.render,this.news)),this.router.addRoute("news",this.render.renderSingleNewsPage.bind(this.render,this.news)),this.router.addRoute("filter",this.render.renderFilterResult.bind(this.render,this.news,this.checkboxService)),this.router.addRoute("about",this.render.renderAboutPage.bind(this.render,this.news)),this.router.addRoute("feedback",this.render.renderPostNewsPage.bind(this.render,this.news))}},{key:"onFilterChange",value:function(e){window.history.pushState(null,null,e),this.router.render(decodeURI(window.location.pathname))}}])&&P(t.prototype,n),r&&P(t,r),e}())}});