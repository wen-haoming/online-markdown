!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Prism=t():e.Prism=t()}(window,(function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(i(1));function r(e){return e&&e.__esModule?e:{default:e}}(0,r(i(3)).default)(["haml","sql","json","typescript"]),t.default=n.default},function(e,t,i){(function(t){var i=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,i=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof r?new r(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++i}),e.__id},clone:function e(t,i){var r,a;switch(i=i||{},n.util.type(t)){case"Object":if(a=n.util.objId(t),i[a])return i[a];for(var o in r={},i[a]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],i));return r;case"Array":return a=n.util.objId(t),i[a]?i[a]:(r=[],i[a]=r,t.forEach((function(t,n){r[n]=e(t,i)})),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var i in t)if(t[i].src==e)return t[i]}return null}},isActive:function(e,t,i){for(var n="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(n))return!1;e=e.parentElement}return!!i}},languages:{extend:function(e,t){var i=n.util.clone(n.languages[e]);for(var r in t)i[r]=t[r];return i},insertBefore:function(e,t,i,r){var a=(r=r||n.languages)[e],o={};for(var l in a)if(a.hasOwnProperty(l)){if(l==t)for(var s in i)i.hasOwnProperty(s)&&(o[s]=i[s]);i.hasOwnProperty(l)||(o[l]=a[l])}var u=r[e];return r[e]=o,n.languages.DFS(n.languages,(function(t,i){i===u&&t!=e&&(this[t]=o)})),o},DFS:function e(t,i,r,a){a=a||{};var o=n.util.objId;for(var l in t)if(t.hasOwnProperty(l)){i.call(t,l,t[l],r||l);var s=t[l],u=n.util.type(s);"Object"!==u||a[o(s)]?"Array"!==u||a[o(s)]||(a[o(s)]=!0,e(s,i,l,a)):(a[o(s)]=!0,e(s,i,null,a))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,i){var r={callback:i,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),n.hooks.run("before-all-elements-highlight",r);for(var a,o=0;a=r.elements[o++];)n.highlightElement(a,!0===t,r.callback)},highlightElement:function(i,r,a){var o=n.util.getLanguage(i),l=n.languages[o];i.className=i.className.replace(t,"").replace(/\s+/g," ")+" language-"+o;var s=i.parentElement;s&&"pre"===s.nodeName.toLowerCase()&&(s.className=s.className.replace(t,"").replace(/\s+/g," ")+" language-"+o);var u={element:i,language:o,grammar:l,code:i.textContent};function c(e){u.highlightedCode=e,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,n.hooks.run("after-highlight",u),n.hooks.run("complete",u),a&&a.call(u.element)}if(n.hooks.run("before-sanity-check",u),!u.code)return n.hooks.run("complete",u),void(a&&a.call(u.element));if(n.hooks.run("before-highlight",u),u.grammar)if(r&&e.Worker){var p=new Worker(n.filename);p.onmessage=function(e){c(e.data)},p.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(n.highlight(u.code,u.grammar,u.language));else c(n.util.encode(u.code))},highlight:function(e,t,i){var a={code:e,grammar:t,language:i};return n.hooks.run("before-tokenize",a),a.tokens=n.tokenize(a.code,a.grammar),n.hooks.run("after-tokenize",a),r.stringify(n.util.encode(a.tokens),a.language)},tokenize:function(e,t){var i=t.rest;if(i){for(var s in i)t[s]=i[s];delete t.rest}var u=new a;return o(u,u.head,e),function e(t,i,a,s,u,c){for(var p in a)if(a.hasOwnProperty(p)&&a[p]){var m=a[p];m=Array.isArray(m)?m:[m];for(var d=0;d<m.length;++d){if(c&&c.cause==p+","+d)return;var g=m[d],h=g.inside,w=!!g.lookbehind,f=!!g.greedy,v=0,k=g.alias;if(f&&!g.pattern.global){var b=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,b+"g")}for(var y=g.pattern||g,x=s.next,S=u;x!==i.tail&&!(c&&S>=c.reach);S+=x.value.length,x=x.next){var A=x.value;if(i.length>t.length)return;if(!(A instanceof r)){var j=1;if(f&&x!=i.tail.prev){if(y.lastIndex=S,!(R=y.exec(t)))break;var q=R.index+(w&&R[1]?R[1].length:0),F=R.index+R[0].length,G=S;for(G+=x.value.length;q>=G;)x=x.next,G+=x.value.length;if(G-=x.value.length,S=G,x.value instanceof r)continue;for(var D=x;D!==i.tail&&(G<F||"string"==typeof D.value);D=D.next)j++,G+=D.value.length;j--,A=t.slice(S,G),R.index-=S}else{y.lastIndex=0;var R=y.exec(A)}if(R){w&&(v=R[1]?R[1].length:0);q=R.index+v;var T=R[0].slice(v),C=(F=q+T.length,A.slice(0,q)),P=A.slice(F),L=S+A.length;c&&L>c.reach&&(c.reach=L);var E=x.prev;C&&(E=o(i,E,C),S+=C.length),l(i,E,j);var M=new r(p,h?n.tokenize(T,h):T,k,T);x=o(i,E,M),P&&o(i,x,P),j>1&&e(t,i,a,x.prev,S,{cause:p+","+d,reach:L})}}}}}}(e,u,t,u.head,0),function(e){var t=[],i=e.head.next;for(;i!==e.tail;)t.push(i.value),i=i.next;return t}(u)},hooks:{all:{},add:function(e,t){var i=n.hooks.all;i[e]=i[e]||[],i[e].push(t)},run:function(e,t){var i=n.hooks.all[e];if(i&&i.length)for(var r,a=0;r=i[a++];)r(t)}},Token:r};function r(e,t,i,n){this.type=e,this.content=t,this.alias=i,this.length=0|(n||"").length}function a(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function o(e,t,i){var n=t.next,r={value:i,prev:t,next:n};return t.next=r,n.prev=r,e.length++,r}function l(e,t,i){for(var n=t.next,r=0;r<i&&n!==e.tail;r++)n=n.next;t.next=n,n.prev=t,e.length-=r}if(e.Prism=n,r.stringify=function e(t,i){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,i)})),r}var a={type:t.type,content:e(t.content,i),tag:"span",classes:["token",t.type],attributes:{},language:i},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(a.classes,o):a.classes.push(o)),n.hooks.run("wrap",a);var l="";for(var s in a.attributes)l+=" "+s+'="'+(a.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+l+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var i=JSON.parse(t.data),r=i.language,a=i.code,o=i.immediateClose;e.postMessage(n.highlight(a,n.languages[r],r)),o&&e.close()}),!1),n):n;var s=n.util.currentScript();function u(){n.manual||n.highlightAll()}if(s&&(n.filename=s.src,s.hasAttribute("data-manual")&&(n.manual=!0)),!n.manual){var c=document.readyState;"loading"===c||"interactive"===c&&s&&s.defer?document.addEventListener("DOMContentLoaded",u):window.requestAnimationFrame?window.requestAnimationFrame(u):window.setTimeout(u,16)}return n}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */e.exports&&(e.exports=i),void 0!==t&&(t.Prism=i),i.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.languages.markup.doctype.inside["internal-subset"].inside=i.languages.markup,i.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r["language-"+t]={pattern:/[\s\S]+/,inside:i.languages[t]};var a={};a[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},i.languages.insertBefore("markup","cdata",a)}}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.xml=i.languages.extend("markup",{}),i.languages.ssml=i.languages.xml,i.languages.atom=i.languages.xml,i.languages.rss=i.languages.xml,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var i=e.languages.markup;i&&(i.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:i.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},i.tag))}(i),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}}}),i.languages.markup&&i.languages.markup.tag.addInlined("script","javascript"),i.languages.js=i.languages.javascript,function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e=window.Prism,t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',n=/\blang(?:uage)?-([\w-]+)\b/i;e.hooks.add("before-highlightall",(function(e){e.selector+=", "+i})),e.hooks.add("before-sanity-check",(function(n){var r=n.element;if(r.matches(i)){n.code="",r.setAttribute("data-src-status","loading");var o=r.appendChild(document.createElement("CODE"));o.textContent="Loading…";var l=r.getAttribute("data-src"),s=n.language;if("none"===s){var u=(/\.(\w+)$/.exec(l)||[,"none"])[1];s=t[u]||u}a(o,s),a(r,s);var c=e.plugins.autoloader;c&&c.loadLanguages(s);var p=new XMLHttpRequest;p.open("GET",l,!0),p.onreadystatechange=function(){var t,i;4==p.readyState&&(p.status<400&&p.responseText?(r.setAttribute("data-src-status","loaded"),o.textContent=p.responseText,e.highlightElement(o)):(r.setAttribute("data-src-status","failed"),p.status>=400?o.textContent=(t=p.status,i=p.statusText,"✖ Error "+t+" while fetching file: "+i):o.textContent="✖ Error: File does not exist or is empty"))},p.send(null)}})),e.plugins.fileHighlight={highlight:function(t){for(var n,r=(t||document).querySelectorAll(i),a=0;n=r[a++];)e.highlightElement(n)}};var r=!1;e.fileHighlight=function(){r||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),r=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}function a(e,t){var i=e.className;i=i.replace(n," ")+" language-"+t,e.className=i.replace(/\s+/g," ").trim()}}()}).call(this,i(2))},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){e.exports&&(e.exports={core:{meta:{path:"components/prism-core.js",option:"mandatory"},core:"Core"},themes:{meta:{path:"themes/{id}.css",link:"index.html?theme={id}",exclusive:!0},prism:{title:"Default",option:"default"},"prism-dark":"Dark","prism-funky":"Funky","prism-okaidia":{title:"Okaidia",owner:"ocodia"},"prism-twilight":{title:"Twilight",owner:"remybach"},"prism-coy":{title:"Coy",owner:"tshedor"},"prism-solarizedlight":{title:"Solarized Light",owner:"hectormatos2011 "},"prism-tomorrow":{title:"Tomorrow Night",owner:"Rosey"}},languages:{meta:{path:"components/prism-{id}",noCSS:!0,examplesPath:"examples/prism-{id}",addCheckAll:!0},markup:{title:"Markup",alias:["html","xml","svg","mathml","ssml","atom","rss"],aliasTitles:{html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",ssml:"SSML",atom:"Atom",rss:"RSS"},option:"default"},css:{title:"CSS",option:"default",modify:"markup"},clike:{title:"C-like",option:"default"},javascript:{title:"JavaScript",require:"clike",modify:"markup",alias:"js",option:"default"},abap:{title:"ABAP",owner:"dellagustin"},abnf:{title:"ABNF",owner:"RunDevelopment"},actionscript:{title:"ActionScript",require:"javascript",modify:"markup",owner:"Golmote"},ada:{title:"Ada",owner:"Lucretia"},agda:{title:"Agda",owner:"xy-ren"},al:{title:"AL",owner:"RunDevelopment"},antlr4:{title:"ANTLR4",alias:"g4",owner:"RunDevelopment"},apacheconf:{title:"Apache Configuration",owner:"GuiTeK"},apl:{title:"APL",owner:"ngn"},applescript:{title:"AppleScript",owner:"Golmote"},aql:{title:"AQL",owner:"RunDevelopment"},arduino:{title:"Arduino",require:"cpp",owner:"eisbehr-"},arff:{title:"ARFF",owner:"Golmote"},asciidoc:{alias:"adoc",title:"AsciiDoc",owner:"Golmote"},aspnet:{title:"ASP.NET (C#)",require:["markup","csharp"],owner:"nauzilus"},asm6502:{title:"6502 Assembly",owner:"kzurawel"},autohotkey:{title:"AutoHotkey",owner:"aviaryan"},autoit:{title:"AutoIt",owner:"Golmote"},bash:{title:"Bash",alias:"shell",aliasTitles:{shell:"Shell"},owner:"zeitgeist87"},basic:{title:"BASIC",owner:"Golmote"},batch:{title:"Batch",owner:"Golmote"},bbcode:{title:"BBcode",alias:"shortcode",aliasTitles:{shortcode:"Shortcode"},owner:"RunDevelopment"},bison:{title:"Bison",require:"c",owner:"Golmote"},bnf:{title:"BNF",alias:"rbnf",aliasTitles:{rbnf:"RBNF"},owner:"RunDevelopment"},brainfuck:{title:"Brainfuck",owner:"Golmote"},brightscript:{title:"BrightScript",owner:"RunDevelopment"},bro:{title:"Bro",owner:"wayward710"},c:{title:"C",require:"clike",owner:"zeitgeist87"},csharp:{title:"C#",require:"clike",alias:["cs","dotnet"],owner:"mvalipour"},cpp:{title:"C++",require:"c",owner:"zeitgeist87"},cil:{title:"CIL",owner:"sbrl"},clojure:{title:"Clojure",owner:"troglotit"},cmake:{title:"CMake",owner:"mjrogozinski"},coffeescript:{title:"CoffeeScript",require:"javascript",alias:"coffee",owner:"R-osey"},concurnas:{title:"Concurnas",alias:"conc",owner:"jasontatton"},csp:{title:"Content-Security-Policy",owner:"ScottHelme"},crystal:{title:"Crystal",require:"ruby",owner:"MakeNowJust"},"css-extras":{title:"CSS Extras",require:"css",modify:"css",owner:"milesj"},cypher:{title:"Cypher",owner:"RunDevelopment"},d:{title:"D",require:"clike",owner:"Golmote"},dart:{title:"Dart",require:"clike",owner:"Golmote"},dax:{title:"DAX",owner:"peterbud"},dhall:{title:"Dhall",owner:"RunDevelopment"},diff:{title:"Diff",owner:"uranusjr"},django:{title:"Django/Jinja2",require:"markup-templating",alias:"jinja2",owner:"romanvm"},"dns-zone-file":{title:"DNS zone file",owner:"RunDevelopment",alias:"dns-zone"},docker:{title:"Docker",alias:"dockerfile",owner:"JustinBeckwith"},ebnf:{title:"EBNF",owner:"RunDevelopment"},editorconfig:{title:"EditorConfig",owner:"osipxd"},eiffel:{title:"Eiffel",owner:"Conaclos"},ejs:{title:"EJS",require:["javascript","markup-templating"],owner:"RunDevelopment",alias:"eta",aliasTitles:{eta:"Eta"}},elixir:{title:"Elixir",owner:"Golmote"},elm:{title:"Elm",owner:"zwilias"},etlua:{title:"Embedded Lua templating",require:["lua","markup-templating"],owner:"RunDevelopment"},erb:{title:"ERB",require:["ruby","markup-templating"],owner:"Golmote"},erlang:{title:"Erlang",owner:"Golmote"},"excel-formula":{title:"Excel Formula",alias:["xlsx","xls"],owner:"RunDevelopment"},fsharp:{title:"F#",require:"clike",owner:"simonreynolds7"},factor:{title:"Factor",owner:"catb0t"},"firestore-security-rules":{title:"Firestore security rules",require:"clike",owner:"RunDevelopment"},flow:{title:"Flow",require:"javascript",owner:"Golmote"},fortran:{title:"Fortran",owner:"Golmote"},ftl:{title:"FreeMarker Template Language",require:"markup-templating",owner:"RunDevelopment"},gml:{title:"GameMaker Language",alias:"gamemakerlanguage",require:"clike",owner:"LiarOnce"},gcode:{title:"G-code",owner:"RunDevelopment"},gdscript:{title:"GDScript",owner:"RunDevelopment"},gedcom:{title:"GEDCOM",owner:"Golmote"},gherkin:{title:"Gherkin",owner:"hason"},git:{title:"Git",owner:"lgiraudel"},glsl:{title:"GLSL",require:"c",owner:"Golmote"},go:{title:"Go",require:"clike",owner:"arnehormann"},graphql:{title:"GraphQL",optional:["markdown"],owner:"Golmote"},groovy:{title:"Groovy",require:"clike",owner:"robfletcher"},haml:{title:"Haml",require:"ruby",optional:["css","css-extras","coffeescript","erb","javascript","less","markdown","scss","textile"],owner:"Golmote"},handlebars:{title:"Handlebars",require:"markup-templating",owner:"Golmote"},haskell:{title:"Haskell",alias:"hs",owner:"bholst"},haxe:{title:"Haxe",require:"clike",owner:"Golmote"},hcl:{title:"HCL",owner:"outsideris"},hlsl:{title:"HLSL",require:"c",owner:"RunDevelopment"},http:{title:"HTTP",optional:["css","javascript","json","markup"],owner:"danielgtaylor"},hpkp:{title:"HTTP Public-Key-Pins",owner:"ScottHelme"},hsts:{title:"HTTP Strict-Transport-Security",owner:"ScottHelme"},ichigojam:{title:"IchigoJam",owner:"BlueCocoa"},icon:{title:"Icon",owner:"Golmote"},ignore:{title:".ignore",owner:"osipxd",alias:["gitignore","hgignore","npmignore"],aliasTitles:{gitignore:".gitignore",hgignore:".hgignore",npmignore:".npmignore"}},inform7:{title:"Inform 7",owner:"Golmote"},ini:{title:"Ini",owner:"aviaryan"},io:{title:"Io",owner:"AlesTsurko"},j:{title:"J",owner:"Golmote"},java:{title:"Java",require:"clike",owner:"sherblot"},javadoc:{title:"JavaDoc",require:["markup","java","javadoclike"],modify:"java",optional:"scala",owner:"RunDevelopment"},javadoclike:{title:"JavaDoc-like",modify:["java","javascript","php"],owner:"RunDevelopment"},javastacktrace:{title:"Java stack trace",owner:"RunDevelopment"},jolie:{title:"Jolie",require:"clike",owner:"thesave"},jq:{title:"JQ",owner:"RunDevelopment"},jsdoc:{title:"JSDoc",require:["javascript","javadoclike","typescript"],modify:"javascript",optional:["actionscript","coffeescript"],owner:"RunDevelopment"},"js-extras":{title:"JS Extras",require:"javascript",modify:"javascript",optional:["actionscript","coffeescript","flow","n4js","typescript"],owner:"RunDevelopment"},json:{title:"JSON",alias:"webmanifest",aliasTitles:{webmanifest:"Web App Manifest"},owner:"CupOfTea696"},json5:{title:"JSON5",require:"json",owner:"RunDevelopment"},jsonp:{title:"JSONP",require:"json",owner:"RunDevelopment"},jsstacktrace:{title:"JS stack trace",owner:"sbrl"},"js-templates":{title:"JS Templates",require:"javascript",modify:"javascript",optional:["css","css-extras","graphql","markdown","markup"],owner:"RunDevelopment"},julia:{title:"Julia",owner:"cdagnino"},keyman:{title:"Keyman",owner:"mcdurdin"},kotlin:{title:"Kotlin",alias:["kt","kts"],aliasTitles:{kts:"Kotlin Script"},require:"clike",owner:"Golmote"},latex:{title:"LaTeX",alias:["tex","context"],aliasTitles:{tex:"TeX",context:"ConTeXt"},owner:"japborst"},latte:{title:"Latte",require:["clike","markup-templating","php"],owner:"nette"},less:{title:"Less",require:"css",optional:"css-extras",owner:"Golmote"},lilypond:{title:"LilyPond",require:"scheme",alias:"ly",owner:"RunDevelopment"},liquid:{title:"Liquid",owner:"cinhtau"},lisp:{title:"Lisp",alias:["emacs","elisp","emacs-lisp"],owner:"JuanCaicedo"},livescript:{title:"LiveScript",owner:"Golmote"},llvm:{title:"LLVM IR",owner:"porglezomp"},lolcode:{title:"LOLCODE",owner:"Golmote"},lua:{title:"Lua",owner:"Golmote"},makefile:{title:"Makefile",owner:"Golmote"},markdown:{title:"Markdown",require:"markup",alias:"md",owner:"Golmote"},"markup-templating":{title:"Markup templating",require:"markup",owner:"Golmote"},matlab:{title:"MATLAB",owner:"Golmote"},mel:{title:"MEL",owner:"Golmote"},mizar:{title:"Mizar",owner:"Golmote"},monkey:{title:"Monkey",owner:"Golmote"},moonscript:{title:"MoonScript",alias:"moon",owner:"RunDevelopment"},n1ql:{title:"N1QL",owner:"TMWilds"},n4js:{title:"N4JS",require:"javascript",optional:"jsdoc",alias:"n4jsd",owner:"bsmith-n4"},"nand2tetris-hdl":{title:"Nand To Tetris HDL",owner:"stephanmax"},nasm:{title:"NASM",owner:"rbmj"},neon:{title:"NEON",owner:"nette"},nginx:{title:"nginx",owner:"westonganger",require:"clike"},nim:{title:"Nim",owner:"Golmote"},nix:{title:"Nix",owner:"Golmote"},nsis:{title:"NSIS",owner:"idleberg"},objectivec:{title:"Objective-C",require:"c",alias:"objc",owner:"uranusjr"},ocaml:{title:"OCaml",owner:"Golmote"},opencl:{title:"OpenCL",require:"c",modify:["c","cpp"],owner:"Milania1"},oz:{title:"Oz",owner:"Golmote"},parigp:{title:"PARI/GP",owner:"Golmote"},parser:{title:"Parser",require:"markup",owner:"Golmote"},pascal:{title:"Pascal",alias:"objectpascal",aliasTitles:{objectpascal:"Object Pascal"},owner:"Golmote"},pascaligo:{title:"Pascaligo",owner:"DefinitelyNotAGoat"},pcaxis:{title:"PC-Axis",alias:"px",owner:"RunDevelopment"},peoplecode:{title:"PeopleCode",alias:"pcode",owner:"RunDevelopment"},perl:{title:"Perl",owner:"Golmote"},php:{title:"PHP",require:["clike","markup-templating"],owner:"milesj"},phpdoc:{title:"PHPDoc",require:["php","javadoclike"],modify:"php",owner:"RunDevelopment"},"php-extras":{title:"PHP Extras",require:"php",modify:"php",owner:"milesj"},plsql:{title:"PL/SQL",require:"sql",owner:"Golmote"},powerquery:{title:"PowerQuery",alias:["pq","mscript"],owner:"peterbud"},powershell:{title:"PowerShell",owner:"nauzilus"},processing:{title:"Processing",require:"clike",owner:"Golmote"},prolog:{title:"Prolog",owner:"Golmote"},properties:{title:".properties",owner:"Golmote"},protobuf:{title:"Protocol Buffers",require:"clike",owner:"just-boris"},pug:{title:"Pug",require:["markup","javascript"],optional:["coffeescript","ejs","handlebars","less","livescript","markdown","scss","stylus","twig"],owner:"Golmote"},puppet:{title:"Puppet",owner:"Golmote"},pure:{title:"Pure",optional:["c","cpp","fortran"],owner:"Golmote"},purebasic:{title:"PureBasic",require:"clike",alias:"pbfasm",owner:"HeX0R101"},python:{title:"Python",alias:"py",owner:"multipetros"},q:{title:"Q (kdb+ database)",owner:"Golmote"},qml:{title:"QML",require:"javascript",owner:"RunDevelopment"},qore:{title:"Qore",require:"clike",owner:"temnroegg"},r:{title:"R",owner:"Golmote"},racket:{title:"Racket",require:"scheme",alias:"rkt",owner:"RunDevelopment"},jsx:{title:"React JSX",require:["markup","javascript"],optional:["jsdoc","js-extras","js-templates"],owner:"vkbansal"},tsx:{title:"React TSX",require:["jsx","typescript"]},reason:{title:"Reason",require:"clike",owner:"Golmote"},regex:{title:"Regex",modify:["actionscript","coffeescript","flow","javascript","typescript","vala"],owner:"RunDevelopment"},renpy:{title:"Ren'py",alias:"rpy",owner:"HyuchiaDiego"},rest:{title:"reST (reStructuredText)",owner:"Golmote"},rip:{title:"Rip",owner:"ravinggenius"},roboconf:{title:"Roboconf",owner:"Golmote"},robotframework:{title:"Robot Framework",alias:"robot",owner:"RunDevelopment"},ruby:{title:"Ruby",require:"clike",alias:"rb",owner:"samflores"},rust:{title:"Rust",owner:"Golmote"},sas:{title:"SAS",optional:["groovy","lua","sql"],owner:"Golmote"},sass:{title:"Sass (Sass)",require:"css",owner:"Golmote"},scss:{title:"Sass (Scss)",require:"css",optional:"css-extras",owner:"MoOx"},scala:{title:"Scala",require:"java",owner:"jozic"},scheme:{title:"Scheme",owner:"bacchus123"},"shell-session":{title:"Shell session",require:"bash",owner:"RunDevelopment"},smali:{title:"Smali",owner:"RunDevelopment"},smalltalk:{title:"Smalltalk",owner:"Golmote"},smarty:{title:"Smarty",require:"markup-templating",owner:"Golmote"},solidity:{title:"Solidity (Ethereum)",alias:"sol",require:"clike",owner:"glachaud"},"solution-file":{title:"Solution file",alias:"sln",owner:"RunDevelopment"},soy:{title:"Soy (Closure Template)",require:"markup-templating",owner:"Golmote"},sparql:{title:"SPARQL",require:"turtle",owner:"Triply-Dev",alias:"rq"},"splunk-spl":{title:"Splunk SPL",owner:"RunDevelopment"},sqf:{title:"SQF: Status Quo Function (Arma 3)",require:"clike",owner:"RunDevelopment"},sql:{title:"SQL",owner:"multipetros"},iecst:{title:"Structured Text (IEC 61131-3)",owner:"serhioromano"},stylus:{title:"Stylus",owner:"vkbansal"},swift:{title:"Swift",require:"clike",owner:"chrischares"},"t4-templating":{title:"T4 templating",owner:"RunDevelopment"},"t4-cs":{title:"T4 Text Templates (C#)",require:["t4-templating","csharp"],alias:"t4",owner:"RunDevelopment"},"t4-vb":{title:"T4 Text Templates (VB)",require:["t4-templating","vbnet"],owner:"RunDevelopment"},tap:{title:"TAP",owner:"isaacs",require:"yaml"},tcl:{title:"Tcl",owner:"PeterChaplin"},tt2:{title:"Template Toolkit 2",require:["clike","markup-templating"],owner:"gflohr"},textile:{title:"Textile",require:"markup",optional:"css",owner:"Golmote"},toml:{title:"TOML",owner:"RunDevelopment"},turtle:{title:"Turtle",alias:"trig",aliasTitles:{trig:"TriG"},owner:"jakubklimek"},twig:{title:"Twig",require:"markup",owner:"brandonkelly"},typescript:{title:"TypeScript",require:"javascript",optional:"js-templates",alias:"ts",owner:"vkbansal"},unrealscript:{title:"UnrealScript",alias:["uscript","uc"],owner:"RunDevelopment"},vala:{title:"Vala",require:"clike",owner:"TemplarVolk"},vbnet:{title:"VB.Net",require:"basic",owner:"Bigsby"},velocity:{title:"Velocity",require:"markup",owner:"Golmote"},verilog:{title:"Verilog",owner:"a-rey"},vhdl:{title:"VHDL",owner:"a-rey"},vim:{title:"vim",owner:"westonganger"},"visual-basic":{title:"Visual Basic",alias:["vb","vba"],aliasTitles:{vba:"VBA"},owner:"Golmote"},warpscript:{title:"WarpScript",owner:"RunDevelopment"},wasm:{title:"WebAssembly",owner:"Golmote"},wiki:{title:"Wiki markup",require:"markup",owner:"Golmote"},xeora:{title:"Xeora",require:"markup",alias:"xeoracube",aliasTitles:{xeoracube:"XeoraCube"},owner:"freakmaxi"},"xml-doc":{title:"XML doc (.net)",require:"markup",modify:["csharp","fsharp","vbnet"],owner:"RunDevelopment"},xojo:{title:"Xojo (REALbasic)",owner:"Golmote"},xquery:{title:"XQuery",require:"markup",owner:"Golmote"},yaml:{title:"YAML",alias:"yml",owner:"hason"},yang:{title:"YANG",owner:"RunDevelopment"},zig:{title:"Zig",owner:"RunDevelopment"}},plugins:{meta:{path:"plugins/{id}/prism-{id}",link:"plugins/{id}/"},"line-highlight":{title:"Line Highlight",description:"Highlights specific lines and/or line ranges."},"line-numbers":{title:"Line Numbers",description:"Line number at the beginning of code lines.",owner:"kuba-kubula"},"show-invisibles":{title:"Show Invisibles",description:"Show hidden characters such as tabs and line breaks.",optional:["autolinker","data-uri-highlight"]},autolinker:{title:"Autolinker",description:"Converts URLs and emails in code to clickable links. Parses Markdown links in comments."},wpd:{title:"WebPlatform Docs",description:'Makes tokens link to <a href="https://webplatform.github.io/docs/">WebPlatform.org documentation</a>. The links open in a new tab.'},"custom-class":{title:"Custom Class",description:"This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.",owner:"dvkndn",noCSS:!0},"file-highlight":{title:"File Highlight",description:"Fetch external files and highlight them with Prism. Used on the Prism website itself.",noCSS:!0},"show-language":{title:"Show Language",description:"Display the highlighted language in code blocks (inline code does not show the label).",owner:"nauzilus",noCSS:!0,require:"toolbar"},"jsonp-highlight":{title:"JSONP Highlight",description:"Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).",noCSS:!0,owner:"nauzilus"},"highlight-keywords":{title:"Highlight Keywords",description:"Adds special CSS classes for each keyword matched in the code. For example, the keyword <code>if</code> will have the class <code>keyword-if</code> as well. You can have fine grained control over the appearance of each keyword by providing your own CSS rules.",owner:"vkbansal",noCSS:!0},"remove-initial-line-feed":{title:"Remove initial line feed",description:"Removes the initial line feed in code blocks.",owner:"Golmote",noCSS:!0},"inline-color":{title:"Inline color",description:"Adds a small inline preview for colors in style sheets.",require:"css-extras",owner:"RunDevelopment"},previewers:{title:"Previewers",description:"Previewers for angles, colors, gradients, easing and time.",require:"css-extras",owner:"Golmote"},autoloader:{title:"Autoloader",description:"Automatically loads the needed languages to highlight the code blocks.",owner:"Golmote",noCSS:!0},"keep-markup":{title:"Keep Markup",description:"Prevents custom markup from being dropped out during highlighting.",owner:"Golmote",optional:"normalize-whitespace",noCSS:!0},"command-line":{title:"Command Line",description:"Display a command line with a prompt and, optionally, the output/response from the commands.",owner:"chriswells0"},"unescaped-markup":{title:"Unescaped Markup",description:"Write markup without having to escape anything."},"normalize-whitespace":{title:"Normalize Whitespace",description:"Supports multiple operations to normalize whitespace in code blocks.",owner:"zeitgeist87",optional:"unescaped-markup",noCSS:!0},"data-uri-highlight":{title:"Data-URI Highlight",description:"Highlights data-URI contents.",owner:"Golmote",noCSS:!0},toolbar:{title:"Toolbar",description:"Attach a toolbar for plugins to easily register buttons on the top of a code block.",owner:"mAAdhaTTah"},"copy-to-clipboard":{title:"Copy to Clipboard Button",description:"Add a button that copies the code block to the clipboard when clicked.",owner:"mAAdhaTTah",require:"toolbar",noCSS:!0},"download-button":{title:"Download Button",description:"A button in the toolbar of a code block adding a convenient way to download a code file.",owner:"Golmote",require:"toolbar",noCSS:!0},"match-braces":{title:"Match braces",description:"Highlights matching braces.",owner:"RunDevelopment"},"diff-highlight":{title:"Diff Highlight",description:"Highlights the code inside diff blocks.",owner:"RunDevelopment",require:"diff"},"filter-highlight-all":{title:"Filter highlightAll",description:"Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.",owner:"RunDevelopment",noCSS:!0},treeview:{title:"Treeview",description:"A language with special styles to highlight file system tree structures.",owner:"Golmote"}}})}])}));