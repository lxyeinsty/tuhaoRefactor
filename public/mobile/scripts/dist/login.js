/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(18);

	var $ = __webpack_require__(5),
	    util = __webpack_require__(8),
	    mes = __webpack_require__(9);

	$(function() {
	    var emailInput = $('input[name="email"]'),
	        passwordInput = $('input[name="password"]'),
	        // rememberInput = $('input[name="remember-login"]'),
	        _tokenInput = $('input[name="_token"]');

	    $('#login').tap(function() {
	        var email = emailInput.val(),
	            password = passwordInput.val(),
	            // remember = rememberInput.attr('checked'),
	            _token = _tokenInput.val();

	        if (!email || !password) {
	            util.showMes(mes.inputNotComplete);
	        } else if (!util.mailCheck(email)) {
	            util.showMes(mes.emailFormatWrong);
	        } else {
	            var form = util.createForm({
	                email: email,
	                password: hex_md5(password),
	                // remember: remember,
	                _token: _token
	            });
	            sendLogin(form);
	        }
	    });
	});

	function sendLogin(form) {
	    $.ajax({
	        url: 'user/login',
	        type: 'POST',
	        data: form,
	        processData: false,
	        contentType: false,
	        success: function(data) {
	            if (data.code == 1) {
	                window.location.href = '/';
	            } else if (data.code == 0) {
	                util.showMes(mes.loginErr);
	            } else {
	                util.showMes(mes.accountNotActivate, function() {
	                    window.location.href = '/remind?action=login';
	                });
	            }
	        },
	        error: function() {
	            util.showMes(mes.networkFail);
	        }
	    });
	}


/***/ },

/***/ 5:
/***/ function(module, exports) {

	/* Zepto 1.1.6 - zepto event ajax form ie touch fx fx_methods selector - zeptojs.com/license */
	var Zepto=function(){function A(t){return null==t?String(t):j[C.call(t)]||"object"}function D(t){return"function"==A(t)}function Z(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==A(t)}function k(t){return R(t)&&!Z(t)&&Object.getPrototypeOf(t)==Object.prototype}function q(t){return"number"==typeof t.length}function z(t){return s.call(t,function(t){return null!=t})}function F(t){return t.length>0?n.fn.concat.apply([],t):t}function _(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function I(t){return t in c?c[t]:c[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||l[_(t)]?e:e+"px"}function U(t){var e,n;return f[t]||(e=u.createElement(t),u.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),f[t]=n),f[t]}function X(t){return"children"in t?a.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(t,e){var n,i=t?t.length:0;for(n=0;i>n;n++)this[n]=t[n];this.length=i,this.selector=e||""}function V(n,i,r){for(e in i)r&&(k(i[e])||L(i[e]))?(k(i[e])&&!k(n[e])&&(n[e]={}),L(i[e])&&!L(n[e])&&(n[e]=[]),V(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function Y(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return D(e)?e.call(t,n,i):e}function W(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function G(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function K(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function Q(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)Q(t.childNodes[n],e)}var t,e,n,i,N,P,r=[],o=r.concat,s=r.filter,a=r.slice,u=window.document,f={},c={},l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},h=/^\s*<(\w+|!)[^>]*>/,p=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,d=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,m=/^(?:body|html)$/i,g=/([A-Z])/g,v=["val","css","html","text","data","width","height","offset"],y=["after","prepend","before","append"],w=u.createElement("table"),x=u.createElement("tr"),b={tr:u.createElement("tbody"),tbody:w,thead:w,tfoot:w,td:x,th:x,"*":u.createElement("div")},E=/complete|loaded|interactive/,T=/^[\w-]*$/,j={},C=j.toString,S={},O=u.createElement("div"),M={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return S.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~S.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},N=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},S.fragment=function(e,i,r){var o,s,f;return p.test(e)&&(o=n(u.createElement(RegExp.$1))),o||(e.replace&&(e=e.replace(d,"<$1></$2>")),i===t&&(i=h.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,o=n.each(a.call(f.childNodes),function(){f.removeChild(this)})),k(r)&&(s=n(o),n.each(r,function(t,e){v.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},S.Z=function(t,e){return new B(t,e)},S.isZ=function(t){return t instanceof S.Z},S.init=function(e,i){var r;if(!e)return S.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&h.test(e))r=S.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(u,e)}else{if(D(e))return n(u).ready(e);if(S.isZ(e))return e;if(L(e))r=z(e);else if(R(e))r=[e],e=null;else if(h.test(e))r=S.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(u,e)}}return S.Z(r,e)},n=function(t,e){return S.init(t,e)},n.extend=function(t){var e,n=a.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){V(t,n,e)}),t},S.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:a.call(s&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=u.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=A,n.isFunction=D,n.isWindow=Z,n.isArray=L,n.isPlainObject=k,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=N,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.noop=function(){},n.map=function(t,e){var n,r,o,i=[];if(q(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return F(i)},n.each=function(t,e){var n,i;if(q(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={constructor:S.Z,length:0,forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,splice:r.splice,indexOf:r.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=S.isZ(e)?e.toArray():e;return o.apply(S.isZ(this)?this.toArray():this,n)},map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(a.apply(this,arguments))},ready:function(t){return E.test(u.readyState)&&u.body?t(n):u.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?a.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return D(t)?this.not(this.not(t)):n(s.call(this,function(e){return S.matches(e,t)}))},add:function(t,e){return n(P(this.concat(n(t,e))))},is:function(t){return this.length>0&&S.matches(this[0],t)},not:function(e){var i=[];if(D(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):q(e)&&D(e.item)?a.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return R(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(S.qsa(this[0],t)):this.map(function(){return S.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:S.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return Y(e,t)},parent:function(t){return Y(P(this.pluck("parentNode")),t)},children:function(t){return Y(this.map(function(){return X(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||a.call(this.childNodes)})},siblings:function(t){return Y(this.map(function(t,e){return s.call(X(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=U(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=D(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=D(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(R(n))for(e in n)W(this,e,n[e]);else W(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){W(this,t)},this)})},prop:function(t,e){return t=M[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(g,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?K(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;if(!n.contains(u.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[N(t)]||r.getPropertyValue(t);if(L(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[N(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==A(t))i||0===i?a=_(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(_(t))});else for(e in t)t[e]||0===t[e]?a+=_(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(_(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(G(t))},I(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=G(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&G(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return G(this,"");i=G(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(I(t)," ")}),G(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,G(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=m.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||u.body;t&&!m.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?Z(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),y.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=A(e),"object"==t||"array"==t||null==e?e:S.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,a){o=i?a:a.parentNode,a=0==e?a.nextSibling:1==e?a.firstChild:2==e?a:null;var f=n.contains(u.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,a),f&&Q(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),S.Z.prototype=B.prototype=n.fn,S.uniq=P,S.deserializeValue=K,n.zepto=S,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||r.test(t.ns))&&(!n||l(t.fn)===l(n))&&(!i||t.sel==i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=T(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function T(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=w,r&&r.apply(i,arguments)},e[n]=x}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function j(t){var e,i={originalEvent:t};for(e in t)b.test(e)||t[e]===n||(i[e]=t[e]);return T(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var w=function(){return!0},x=function(){return!1},b=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(u===n||a===!1)&&(u=a,a=n),u===!1&&(u=x),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(j(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=x),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):T(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=j(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),T(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),w(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),w(e,n,i)}function w(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function x(){}function b(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function T(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function j(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function S(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?S(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:x,success:x,error:x,complete:x,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,u,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),(u=o.url.indexOf("#"))>-1&&(o.url=o.url.slice(0,u)),T(o);var f=o.dataType,h=/\?.+=\?/.test(o.url);if(h&&(f="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=f&&"jsonp"!=f)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==f)return h||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var N,p=o.accepts[f],m={},w=function(t,e){m[t.toLowerCase()]=[t,e]},j=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,C=o.xhr(),S=C.setRequestHeader;if(s&&s.promise(C),o.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",p||"*/*"),(p=o.mimeType||p)&&(p.indexOf(",")>-1&&(p=p.split(",",2)[0]),C.overrideMimeType&&C.overrideMimeType(p)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&w("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)w(r,o.headers[r]);if(C.setRequestHeader=w,C.onreadystatechange=function(){if(4==C.readyState){C.onreadystatechange=x,clearTimeout(N);var e,n=!1;if(C.status>=200&&C.status<300||304==C.status||0==C.status&&"file:"==j){f=f||b(o.mimeType||C.getResponseHeader("content-type")),e=C.responseText;try{"script"==f?(1,eval)(e):"xml"==f?e=C.responseXML:"json"==f&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",C,o,s):v(e,C,o,s)}else y(C.statusText||null,C.status?"error":"abort",C,o,s)}},g(C,o)===!1)return C.abort(),y(null,"abort",C,o,s),C;if(o.xhrFields)for(r in o.xhrFields)C[r]=o.xhrFields[r];var P="async"in o?o.async:!0;C.open(o.type,o.url,P,o.username,o.password);for(r in m)S.apply(C,m[r]);return o.timeout>0&&(N=setTimeout(function(){C.onreadystatechange=x,C.abort(),y(null,"timeout",C,o,s)},o.timeout)),C.send(o.data?o.data:null),C},t.get=function(){return t.ajax(j.apply(null,arguments))},t.post=function(){var e=j.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=j.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=j(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var C=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(C(e)+"="+C(n))},S(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(){try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(n){return null}}}}(),function(t){function u(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function f(){o=null,e.last&&(e.el.trigger("longTap"),e={})}function c(){o&&clearTimeout(o),o=null}function l(){n&&clearTimeout(n),i&&clearTimeout(i),r&&clearTimeout(r),o&&clearTimeout(o),n=i=r=o=null,e={}}function h(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function p(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var n,i,r,o,a,e={},s=750;t(document).ready(function(){var d,m,y,w,g=0,v=0;"MSGesture"in window&&(a=new MSGesture,a.target=document.body),t(document).bind("MSGestureEnd",function(t){var n=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;n&&(e.el.trigger("swipe"),e.el.trigger("swipe"+n))}).on("touchstart MSPointerDown pointerdown",function(i){(!(w=p(i,"down"))||h(i))&&(y=w?i:i.touches[0],i.touches&&1===i.touches.length&&e.x2&&(e.x2=void 0,e.y2=void 0),d=Date.now(),m=d-(e.last||d),e.el=t("tagName"in y.target?y.target:y.target.parentNode),n&&clearTimeout(n),e.x1=y.pageX,e.y1=y.pageY,m>0&&250>=m&&(e.isDoubleTap=!0),e.last=d,o=setTimeout(f,s),a&&w&&a.addPointer(i.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(!(w=p(t,"move"))||h(t))&&(y=w?t:t.touches[0],c(),e.x2=y.pageX,e.y2=y.pageY,g+=Math.abs(e.x1-e.x2),v+=Math.abs(e.y1-e.y2))}).on("touchend MSPointerUp pointerup",function(o){(!(w=p(o,"up"))||h(o))&&(c(),e.x2&&Math.abs(e.x1-e.x2)>30||e.y2&&Math.abs(e.y1-e.y2)>30?r=setTimeout(function(){e.el.trigger("swipe"),e.el.trigger("swipe"+u(e.x1,e.x2,e.y1,e.y2)),e={}},0):"last"in e&&(30>g&&30>v?i=setTimeout(function(){var i=t.Event("tap");i.cancelTouch=l,e.el.trigger(i),e.isDoubleTap?(e.el&&e.el.trigger("doubleTap"),e={}):n=setTimeout(function(){n=null,e.el&&e.el.trigger("singleTap"),e={}},250)},0):e={}),g=v=0)}).on("touchcancel MSPointerCancel pointercancel",l),t(window).on("scroll",l)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(Zepto),function(t,e){function v(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function y(t){return i?i+t:t.toLowerCase()}var i,a,u,f,c,l,h,p,d,m,n="",r={Webkit:"webkit",Moz:"",O:"o"},o=document.createElement("div"),s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,g={};t.each(r,function(t,r){return o.style[t+"TransitionProperty"]!==e?(n="-"+t.toLowerCase()+"-",i=r,!1):void 0}),a=n+"transform",g[u=n+"transition-property"]=g[f=n+"transition-duration"]=g[l=n+"transition-delay"]=g[c=n+"transition-timing-function"]=g[h=n+"animation-name"]=g[p=n+"animation-duration"]=g[m=n+"animation-delay"]=g[d=n+"animation-timing-function"]="",t.fx={off:i===e&&o.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:n,transitionEnd:y("TransitionEnd"),animationEnd:y("AnimationEnd")},t.fn.animate=function(n,i,r,o,s){return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,s=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),s&&(s=parseFloat(s)/1e3),this.anim(n,i,r,o,s)},t.fn.anim=function(n,i,r,o,y){var w,b,j,x={},E="",T=this,C=t.fx.transitionEnd,S=!1;if(i===e&&(i=t.fx.speeds._default/1e3),y===e&&(y=0),t.fx.off&&(i=0),"string"==typeof n)x[h]=n,x[p]=i+"s",x[m]=y+"s",x[d]=r||"linear",C=t.fx.animationEnd;else{b=[];for(w in n)s.test(w)?E+=w+"("+n[w]+") ":(x[w]=n[w],b.push(v(w)));E&&(x[a]=E,b.push(a)),i>0&&"object"==typeof n&&(x[u]=b.join(", "),x[f]=i+"s",x[l]=y+"s",x[c]=r||"linear")}return j=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(C,j)}else t(this).unbind(C,j);S=!0,t(this).css(g),o&&o.call(this)},i>0&&(this.bind(C,j),setTimeout(function(){S||j.call(T)},1e3*(i+y)+25)),this.size()&&this.get(0).clientLeft,this.css(x),0>=i&&setTimeout(function(){T.each(function(){j.call(this)})},0),this},o=null}(Zepto),function(t,e){function a(n,i,r,o,s){"function"!=typeof i||s||(s=i,i=e);var a={opacity:r};return o&&(a.scale=o,n.css(t.fx.cssPrefix+"transform-origin","0 0")),n.animate(a,i,null,s)}function u(e,n,i,r){return a(e,n,0,i,function(){o.call(t(this)),r&&r.call(this)})}var n=window.document,r=(n.documentElement,t.fn.show),o=t.fn.hide,s=t.fn.toggle;t.fn.show=function(t,n){return r.call(this),t===e?t=0:this.css("opacity",0),a(this,t,1,"1,1",n)},t.fn.hide=function(t,n){return t===e?o.call(this):u(this,t,"0,0",n)},t.fn.toggle=function(n,i){return n===e||"boolean"==typeof n?s.call(this,n):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](n,i)})},t.fn.fadeTo=function(t,e,n){return a(this,t,e,null,n)},t.fn.fadeIn=function(t,e){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,r.call(this).fadeTo(t,n,e)},t.fn.fadeOut=function(t,e){return u(this,t,null,e)},t.fn.fadeToggle=function(e,n){return this.each(function(){var i=t(this);i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](e,n)})}}(Zepto),function(t){function r(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function f(t,e){t=t.replace(/=#\]/g,'="#"]');var n,i,r=s.exec(t);if(r&&r[2]in o&&(n=o[r[2]],i=r[3],t=r[1],i)){var a=Number(i);i=isNaN(a)?i.replace(/^["']|["']$/g,""):a}return e(t,n,i)}var e=t.zepto,n=e.qsa,i=e.matches,o=t.expr[":"]={visible:function(){return r(this)?this:void 0},hidden:function(){return r(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,n){return t===n?this:void 0},contains:function(e,n,i){return t(this).text().indexOf(i)>-1?this:void 0},has:function(t,n,i){return e.qsa(this,i).length?this:void 0}},s=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),a=/^\s*>/,u="Zepto"+ +new Date;e.qsa=function(i,r){return f(r,function(o,s,f){try{var c;!o&&s?o="*":a.test(o)&&(c=t(i).addClass(u),o="."+u+" "+o);var l=n(i,o)}catch(h){throw console.error("error performing selector: %o",r),h}finally{c&&c.removeClass(u)}return s?e.uniq(t.map(l,function(t,e){return s.call(t,e,l,f)})):l})},e.matches=function(t,e){return f(e,function(e,n,r){return(!e||i(t,e))&&(!n||n.call(t,null,r)===t)})}}(Zepto);

	/*** EXPORTS FROM exports-loader ***/
	module.exports = Zepto

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(5),
	    mes = __webpack_require__(9);

	//显示错误提示样式
	function showMes(mes, callback) {
	    $('.mes-content').html(mes);
	    $('.mes-hint').addClass('show-mes');

	    setTimeout(function() {
	        $('.mes-hint').removeClass('show-mes');
	        if (callback) {
	            callback();
	        }
	    }, 2000);
	}

	//创建表单
	function createForm(data) {
	    var form = new FormData();
	    for (var i in data) {
	        form.append(i, data[i]);
	    }
	    return form;
	}

	//检测电子邮箱格式是否正确
	function mailCheck(mailbox) {
	    var mailStr = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	    if (mailStr.test(mailbox)) {
	        return true;
	    } else {
	        return false;
	    }
	}

	//检查手机号格式是否正确
	function teleCheck(telephone) {
	    var teleStr = /^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/;
	    if (teleStr.test(telephone)) {
	        return true;
	    } else {
	        return false;
	    }
	}

	//网页头部搜索栏交互
	function headerSearch() {
	    var searchInput = $('#search-input'),
	        emptyBtn = $('#empty'),
	        flag = 0;
	    $('#search').tap(function() {
	        $('body').addClass('search');
	        searchInput.focus();
	    });

	    $('#cancel').tap(function(e) {
	        $('body').removeClass('search').removeClass('show-mask');
	        searchInput.val('').blur();
	        emptyBtn.removeClass('show-empty');
	        e.preventDefault();
	    });

	    searchInput.on('focus', function() {
	        $('body').addClass('show-mask');
	    });

	    searchInput.on('blur', function() {
	        $('body').removeClass('show-mask');
	    });

	    searchInput.on('keyup', function(e) {
	        var $this = $(e.target),
	            code = e.keyCode,
	            value = searchInput.val();
	        if (code === 13) {
	            window.location.href = 'search?key=' + value;
	            return;
	        }
	        if (value) {
	            emptyBtn.addClass('show-empty');
	        } else {
	            emptyBtn.removeClass('show-empty');
	        }
	    });

	    $('#empty').tap(function(e) {
	        searchInput.val('');
	        $(e.target).removeClass('show-empty');
	    });

	    $(window).on('scroll', function(e) {
	        var $this = $(window),
	            scrollH = $this.scrollTop();
	        if (scrollH > 45) {
	            $('body').addClass('fix-top');
	        } else {
	            $('body').removeClass('fix-top');
	        }
	    });

	    $('#logout').tap(function() {
	        window.location.href = 'user/logout';
	    });

	    $('#user_info').tap(function() {
	        var loginFlag = parseInt($('input[name="loginFlag"]').val());
	        window.location.href = 'user-center?id=' + loginFlag;
	    });

	    $('#login').tap(function() {
	        window.location.href = 'login';
	    });

	    $('#issue-button').tap(function() {
	        var login = parseInt($('input[name="loginFlag"]').val());
	        if (login) {
	            window.location.href = 'release';
	        } else {
	            showMes(mes.notLogin);
	        }
	    });
	}

	//加载更多数据
	function loadMore(opts, callback, flag) {
	    var form;
	    if (flag == 1) {
	        form = {
	            curPage: opts.page,
	            _token: opts._token,
	            order: opts.order
	        };
	    } else if (flag == 2) {
	        form = {
	            curPage: opts.page,
	            entrance: opts.entrance,
	            id: opts.id,
	            _token: opts._token
	        };
	    } else if (flag == 3) {
	        form = {
	            curPage: opts.page,
	            id: opts.id,
	            _token: opts._token
	        };
	    } else if (flag == 4) {
	        form = {
	            curPage: opts.page,
	            pro_id: opts.pro_id,
	            _token: opts._token
	        };
	    } else {
	        form = {
	            page: opts.page,
	            _token: opts._token
	        };
	    }
	    $.ajax({
	        url: opts.url,
	        type: 'get',
	        data: form,
	        success: function(data) {
	            if (data.code == 1) {
	                callback(data.data, opts.page, flag);
	            } else {
	                showMes(mes.loadFailed);
	                callback(null);
	            }
	        },
	        error: function() {
	            showMes(mes.networkFail);
	            callback(null);
	        }
	    });
	}

	//动态滚动到某一位置
	function animateScroll(src, dest, time) {
	    var perSec = 5,
	        gap = Math.round(time / 5),
	        distance = dest - src,
	        perMove = Math.round(distance / gap);
	    $(window).scrollTop(src + perMove);
	    setTimeout(function() {
	        perScroll(dest, perMove);
	    }, 5);
	}

	//每次动态移动函数
	function perScroll(dest, perMove) {
	    var pos = $(window).scrollTop();
	    if (pos !== dest) {
	        var move = (Math.abs(perMove) > Math.abs((dest - pos))) ? (dest - pos) : perMove;
	        $(window).scrollTop(pos + move);
	        setTimeout(function() {
	            perScroll(dest, perMove);
	        }, 5);
	    }
	}

	exports.showMes = showMes;
	exports.createForm = createForm;
	exports.mailCheck = mailCheck;
	exports.headerSearch = headerSearch;
	exports.teleCheck = teleCheck;
	exports.loadMore = loadMore;
	exports.animateScroll = animateScroll;


/***/ },

/***/ 9:
/***/ function(module, exports) {

	module.exports = {
	    inputNotComplete: '邮箱名和密码必须填写',
	    loginErr: '用户名或密码错误',
	    accountNotActivate: '账户未激活,请激活后使用',
	    networkFail: '服务器异常',
	    nicknameNotNull: '昵称不能为空',
	    nicknameFormatWrong: '昵称格式不正确<br>只能输入4-12个字符',
	    emailNotNull: '电子邮箱不能为空',
	    emailFormatWrong: '邮箱格式不正确',
	    passwordNotNull: '密码不能为空',
	    passwordFormatWrong: '密码格式不正确<br>密码必须以字母开始且位数在6-16位之间',
	    confirmNotNull: '确认密码不能为空',
	    confirmPasswordErr: '两次密码输入不一致',
	    agreeNotChoose: '请勾选同意发布规则',
	    usernameReapeat: '用户名已存在',
	    emailReapeat: '邮箱已被占用',
	    sexNotNull: '请选择性别',
	    academyNotNull: '请选择所在学院',
	    enterYearNotNull: '请输入入学年份',
	    doomNotNull: '请选择宿舍区',
	    imgFormatErr: '图片格式不正确<br>只支持jpg、png、gif格式',
	    imgRepeat: '图片已经上传,请重新选择',
	    goodsNameNull: '物品名称不能为空',
	    goodsNameLong: '物品名称不能超过25个字',
	    goodsCateNull: '物品分类不能为空',
	    goodsTeleNull: '联系方式不能为空',
	    goodsTeleErr: '手机号格式不正确',
	    goodsDesireNull: '我的愿望输入不能为空',
	    goodsIntroNull: '物品详情不能为空',
	    goodsIntroLong: '物品详情不能超过160个字',
	    goodsImgNull: '有图有真相，亲，赶快传图吧！',
	    issueErr: '输入信息不符合要求',
	    editInfoErr: '修改失败，请重新修改',
	    loadFailed: '数据加载失败',
	    sendMailFailed: '邮件发送失败',
	    notLogin: '请登录后再发布物品',
	    sendCommentFail: '发布评论失败，请重新发布',
	    dealInPC: '请在电脑上进行物品编辑',
	    notLoginComment: '请登录后再发布评论',
	    giveOk: '赠送物品成功',
	    giveFail: '赠送物品失败，请重试',
	    passwordResetFail: '重置密码失败，请重试',
	    passwordResetSuccess: '重置密码成功'
	};


/***/ },

/***/ 18:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });