!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=document.querySelector(".feedback-form"),o=n.querySelector("label > input"),r=n.querySelector("label > textarea"),i="feedback-form-state",u={},a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var f="Expected a function",l=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,v=/^0o[0-7]+$/i,s=parseInt,m="object"==typeof e&&e&&e.Object===Object&&e,g="object"==typeof self&&self&&self.Object===Object&&self,p=m||g||Function("return this")(),b=Object.prototype.toString,y=Math.max,S=Math.min,j=function(){return p.Date.now()};function O(e,t,n){var o,r,i,u,a,l,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(f);function m(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function g(e){return c=e,a=setTimeout(b,t),d?m(e):u}function p(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=i}function b(){var e=j();if(p(e))return O(e);a=setTimeout(b,function(e){var n=t-(e-l);return v?S(n,i-(e-c)):n}(e))}function O(e){return a=void 0,s&&o?m(e):(o=r=void 0,u)}function T(){var e=j(),n=p(e);if(o=arguments,r=this,l=e,n){if(void 0===a)return g(l);if(v)return a=setTimeout(b,t),m(l)}return void 0===a&&(a=setTimeout(b,t)),u}return t=w(t)||0,h(n)&&(d=!!n.leading,i=(v="maxWait"in n)?y(w(n.maxWait)||0,t):i,s="trailing"in n?!!n.trailing:s),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=l=r=a=void 0},T.flush=function(){return void 0===a?u:O(j())},T}function h(e){var n=void 0===e?"undefined":t(a)(e);return!!e&&("object"==n||"function"==n)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(a)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==b.call(e)}(e))return NaN;if(h(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=h(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var o=d.test(e);return o||v.test(e)?s(e.slice(2),o?2:8):c.test(e)?NaN:+e}u=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(f);return h(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),O(e,t,{leading:o,maxWait:t,trailing:r})},n.addEventListener("input",u((function(){var e={email:o.value,message:r.value};localStorage.setItem(i,JSON.stringify(e))}),500));var T=JSON.parse(localStorage.getItem(i));null===localStorage.getItem(i)?(o.value="",r.value=""):(o.value=T.email,r.value=T.message),n.addEventListener("submit",(function(e){e.preventDefault(),console.log(localStorage.getItem(i)),o.value="",r.value="",localStorage.removeItem(i)}))}();
//# sourceMappingURL=03-feedback.bf57e337.js.map
