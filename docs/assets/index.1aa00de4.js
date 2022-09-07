(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function pr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Tu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Su=pr(Tu);function Kl(t){return!!t||t===""}function gr(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ye(s)?Ru(s):gr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(ye(t))return t;if(se(t))return t}}const Nu=/;(?![^(]*\))/g,xu=/:(.+)/;function Ru(t){const e={};return t.split(Nu).forEach(n=>{if(n){const s=n.split(xu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function mr(t){let e="";if(ye(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const s=mr(t[n]);s&&(e+=s+" ")}else if(se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gi=t=>ye(t)?t:t==null?"":D(t)||se(t)&&(t.toString===Xl||!L(t.toString))?JSON.stringify(t,Gl,2):String(t),Gl=(t,e)=>e&&e.__v_isRef?Gl(t,e.value):cn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Yl(e)?{[`Set(${e.size})`]:[...e.values()]}:se(e)&&!D(e)&&!Jl(e)?String(e):e,K={},an=[],Ge=()=>{},Au=()=>!1,Pu=/^on[^a-z]/,Ks=t=>Pu.test(t),yr=t=>t.startsWith("onUpdate:"),Ie=Object.assign,vr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ou=Object.prototype.hasOwnProperty,U=(t,e)=>Ou.call(t,e),D=Array.isArray,cn=t=>Gs(t)==="[object Map]",Yl=t=>Gs(t)==="[object Set]",L=t=>typeof t=="function",ye=t=>typeof t=="string",Cr=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",Ql=t=>se(t)&&L(t.then)&&L(t.catch),Xl=Object.prototype.toString,Gs=t=>Xl.call(t),Du=t=>Gs(t).slice(8,-1),Jl=t=>Gs(t)==="[object Object]",Er=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Cs=pr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ys=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Mu=/-(\w)/g,pn=Ys(t=>t.replace(Mu,(e,n)=>n?n.toUpperCase():"")),ku=/\B([A-Z])/g,Xt=Ys(t=>t.replace(ku,"-$1").toLowerCase()),Zl=Ys(t=>t.charAt(0).toUpperCase()+t.slice(1)),mi=Ys(t=>t?`on${Zl(t)}`:""),Is=(t,e)=>!Object.is(t,e),Es=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ts=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ss=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Eo;const Lu=()=>Eo||(Eo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ze;class Fu{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ze&&(this.parent=Ze,this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ze;try{return Ze=this,e()}finally{Ze=n}}}on(){Ze=this}off(){Ze=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Bu(t,e=Ze){e&&e.active&&e.effects.push(t)}const br=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ea=t=>(t.w&It)>0,ta=t=>(t.n&It)>0,Wu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=It},Hu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];ea(i)&&!ta(i)?i.delete(t):e[n++]=i,i.w&=~It,i.n&=~It}e.length=n}},Li=new WeakMap;let kn=0,It=1;const Fi=30;let $e;const $t=Symbol(""),Bi=Symbol("");class wr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Bu(this,s)}run(){if(!this.active)return this.fn();let e=$e,n=vt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$e,$e=this,vt=!0,It=1<<++kn,kn<=Fi?Wu(this):bo(this),this.fn()}finally{kn<=Fi&&Hu(this),It=1<<--kn,$e=this.parent,vt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$e===this?this.deferStop=!0:this.active&&(bo(this),this.onStop&&this.onStop(),this.active=!1)}}function bo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let vt=!0;const na=[];function En(){na.push(vt),vt=!1}function bn(){const t=na.pop();vt=t===void 0?!0:t}function Fe(t,e,n){if(vt&&$e){let s=Li.get(t);s||Li.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=br()),sa(i)}}function sa(t,e){let n=!1;kn<=Fi?ta(t)||(t.n|=It,n=!ea(t)):n=!t.has($e),n&&(t.add($e),$e.deps.push(t))}function at(t,e,n,s,i,r){const o=Li.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&D(t))o.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":D(t)?Er(n)&&l.push(o.get("length")):(l.push(o.get($t)),cn(t)&&l.push(o.get(Bi)));break;case"delete":D(t)||(l.push(o.get($t)),cn(t)&&l.push(o.get(Bi)));break;case"set":cn(t)&&l.push(o.get($t));break}if(l.length===1)l[0]&&Wi(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Wi(br(a))}}function Wi(t,e){const n=D(t)?t:[...t];for(const s of n)s.computed&&wo(s);for(const s of n)s.computed||wo(s)}function wo(t,e){(t!==$e||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Uu=pr("__proto__,__v_isRef,__isVue"),ia=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cr)),$u=Ir(),Vu=Ir(!1,!0),ju=Ir(!0),Io=qu();function qu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=j(this);for(let r=0,o=this.length;r<o;r++)Fe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(j)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){En();const s=j(this)[e].apply(this,n);return bn(),s}}),t}function Ir(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?lh:ca:e?aa:la).get(s))return s;const o=D(s);if(!t&&o&&U(Io,i))return Reflect.get(Io,i,r);const l=Reflect.get(s,i,r);return(Cr(i)?ia.has(i):Uu(i))||(t||Fe(s,"get",i),e)?l:Ae(l)?o&&Er(i)?l:l.value:se(l)?t?ua(l):ss(l):l}}const zu=ra(),Ku=ra(!0);function ra(t=!1){return function(n,s,i,r){let o=n[s];if($n(o)&&Ae(o)&&!Ae(i))return!1;if(!t&&(!Hi(i)&&!$n(i)&&(o=j(o),i=j(i)),!D(n)&&Ae(o)&&!Ae(i)))return o.value=i,!0;const l=D(n)&&Er(s)?Number(s)<n.length:U(n,s),a=Reflect.set(n,s,i,r);return n===j(r)&&(l?Is(i,o)&&at(n,"set",s,i):at(n,"add",s,i)),a}}function Gu(t,e){const n=U(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&at(t,"delete",e,void 0),s}function Yu(t,e){const n=Reflect.has(t,e);return(!Cr(e)||!ia.has(e))&&Fe(t,"has",e),n}function Qu(t){return Fe(t,"iterate",D(t)?"length":$t),Reflect.ownKeys(t)}const oa={get:$u,set:zu,deleteProperty:Gu,has:Yu,ownKeys:Qu},Xu={get:ju,set(t,e){return!0},deleteProperty(t,e){return!0}},Ju=Ie({},oa,{get:Vu,set:Ku}),Tr=t=>t,Qs=t=>Reflect.getPrototypeOf(t);function ds(t,e,n=!1,s=!1){t=t.__v_raw;const i=j(t),r=j(e);n||(e!==r&&Fe(i,"get",e),Fe(i,"get",r));const{has:o}=Qs(i),l=s?Tr:n?Rr:xr;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function _s(t,e=!1){const n=this.__v_raw,s=j(n),i=j(t);return e||(t!==i&&Fe(s,"has",t),Fe(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ps(t,e=!1){return t=t.__v_raw,!e&&Fe(j(t),"iterate",$t),Reflect.get(t,"size",t)}function To(t){t=j(t);const e=j(this);return Qs(e).has.call(e,t)||(e.add(t),at(e,"add",t,t)),this}function So(t,e){e=j(e);const n=j(this),{has:s,get:i}=Qs(n);let r=s.call(n,t);r||(t=j(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Is(e,o)&&at(n,"set",t,e):at(n,"add",t,e),this}function No(t){const e=j(this),{has:n,get:s}=Qs(e);let i=n.call(e,t);i||(t=j(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&at(e,"delete",t,void 0),r}function xo(){const t=j(this),e=t.size!==0,n=t.clear();return e&&at(t,"clear",void 0,void 0),n}function gs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=j(o),a=e?Tr:t?Rr:xr;return!t&&Fe(l,"iterate",$t),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function ms(t,e,n){return function(...s){const i=this.__v_raw,r=j(i),o=cn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?Tr:e?Rr:xr;return!e&&Fe(r,"iterate",a?Bi:$t),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function _t(t){return function(...e){return t==="delete"?!1:this}}function Zu(){const t={get(r){return ds(this,r)},get size(){return ps(this)},has:_s,add:To,set:So,delete:No,clear:xo,forEach:gs(!1,!1)},e={get(r){return ds(this,r,!1,!0)},get size(){return ps(this)},has:_s,add:To,set:So,delete:No,clear:xo,forEach:gs(!1,!0)},n={get(r){return ds(this,r,!0)},get size(){return ps(this,!0)},has(r){return _s.call(this,r,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:gs(!0,!1)},s={get(r){return ds(this,r,!0,!0)},get size(){return ps(this,!0)},has(r){return _s.call(this,r,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:gs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ms(r,!1,!1),n[r]=ms(r,!0,!1),e[r]=ms(r,!1,!0),s[r]=ms(r,!0,!0)}),[t,n,e,s]}const[eh,th,nh,sh]=Zu();function Sr(t,e){const n=e?t?sh:nh:t?th:eh;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(U(n,i)&&i in s?n:s,i,r)}const ih={get:Sr(!1,!1)},rh={get:Sr(!1,!0)},oh={get:Sr(!0,!1)},la=new WeakMap,aa=new WeakMap,ca=new WeakMap,lh=new WeakMap;function ah(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ch(t){return t.__v_skip||!Object.isExtensible(t)?0:ah(Du(t))}function ss(t){return $n(t)?t:Nr(t,!1,oa,ih,la)}function uh(t){return Nr(t,!1,Ju,rh,aa)}function ua(t){return Nr(t,!0,Xu,oh,ca)}function Nr(t,e,n,s,i){if(!se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=ch(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function un(t){return $n(t)?un(t.__v_raw):!!(t&&t.__v_isReactive)}function $n(t){return!!(t&&t.__v_isReadonly)}function Hi(t){return!!(t&&t.__v_isShallow)}function ha(t){return un(t)||$n(t)}function j(t){const e=t&&t.__v_raw;return e?j(e):t}function fa(t){return Ts(t,"__v_skip",!0),t}const xr=t=>se(t)?ss(t):t,Rr=t=>se(t)?ua(t):t;function hh(t){vt&&$e&&(t=j(t),sa(t.dep||(t.dep=br())))}function fh(t,e){t=j(t),t.dep&&Wi(t.dep)}function Ae(t){return!!(t&&t.__v_isRef===!0)}function Se(t){return Ae(t)?t.value:t}const dh={get:(t,e,n)=>Se(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ae(i)&&!Ae(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function da(t){return un(t)?t:new Proxy(t,dh)}var _a;class _h{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[_a]=!1,this._dirty=!0,this.effect=new wr(e,()=>{this._dirty||(this._dirty=!0,fh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=j(this);return hh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}_a="__v_isReadonly";function ph(t,e,n=!1){let s,i;const r=L(t);return r?(s=t,i=Ge):(s=t.get,i=t.set),new _h(s,i,r||!i,n)}function Ct(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Xs(r,e,n)}return i}function He(t,e,n,s){if(L(t)){const r=Ct(t,e,n,s);return r&&Ql(r)&&r.catch(o=>{Xs(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(He(t[r],e,n,s));return i}function Xs(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Ct(a,null,10,[t,o,l]);return}}gh(t,n,i,s)}function gh(t,e,n,s=!0){console.error(t)}let Ns=!1,Ui=!1;const xe=[];let tt=0;const hn=[];let rt=null,Ft=0;const pa=Promise.resolve();let Ar=null;function mh(t){const e=Ar||pa;return t?e.then(this?t.bind(this):t):e}function yh(t){let e=tt+1,n=xe.length;for(;e<n;){const s=e+n>>>1;Vn(xe[s])<t?e=s+1:n=s}return e}function Pr(t){(!xe.length||!xe.includes(t,Ns&&t.allowRecurse?tt+1:tt))&&(t.id==null?xe.push(t):xe.splice(yh(t.id),0,t),ga())}function ga(){!Ns&&!Ui&&(Ui=!0,Ar=pa.then(ya))}function vh(t){const e=xe.indexOf(t);e>tt&&xe.splice(e,1)}function Ch(t){D(t)?hn.push(...t):(!rt||!rt.includes(t,t.allowRecurse?Ft+1:Ft))&&hn.push(t),ga()}function Ro(t,e=tt){for(;e<xe.length;e++){const n=xe[e];n&&n.pre&&(xe.splice(e,1),e--,n())}}function ma(t){if(hn.length){const e=[...new Set(hn)];if(hn.length=0,rt){rt.push(...e);return}for(rt=e,rt.sort((n,s)=>Vn(n)-Vn(s)),Ft=0;Ft<rt.length;Ft++)rt[Ft]();rt=null,Ft=0}}const Vn=t=>t.id==null?1/0:t.id,Eh=(t,e)=>{const n=Vn(t)-Vn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ya(t){Ui=!1,Ns=!0,xe.sort(Eh);const e=Ge;try{for(tt=0;tt<xe.length;tt++){const n=xe[tt];n&&n.active!==!1&&Ct(n,null,14)}}finally{tt=0,xe.length=0,ma(),Ns=!1,Ar=null,(xe.length||hn.length)&&ya()}}function bh(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||K;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||K;d&&(i=n.map(g=>g.trim())),h&&(i=n.map(Ss))}let l,a=s[l=mi(e)]||s[l=mi(pn(e))];!a&&r&&(a=s[l=mi(Xt(e))]),a&&He(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,He(c,t,6,i)}}function va(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!L(t)){const a=c=>{const u=va(c,e,!0);u&&(l=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(se(t)&&s.set(t,null),null):(D(r)?r.forEach(a=>o[a]=null):Ie(o,r),se(t)&&s.set(t,o),o)}function Js(t,e){return!t||!Ks(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(t,e[0].toLowerCase()+e.slice(1))||U(t,Xt(e))||U(t,e))}let je=null,Zs=null;function xs(t){const e=je;return je=t,Zs=t&&t.type.__scopeId||null,e}function Or(t){Zs=t}function Dr(){Zs=null}function Ca(t,e=je,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Wo(-1);const r=xs(e),o=t(...i);return xs(r),s._d&&Wo(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function yi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:g,ctx:C,inheritAttrs:S}=t;let x,k;const fe=xs(t);try{if(n.shapeFlag&4){const Z=i||s;x=et(u.call(Z,Z,h,r,g,d,C)),k=a}else{const Z=e;x=et(Z.length>1?Z(r,{attrs:a,slots:l,emit:c}):Z(r,null)),k=e.props?a:wh(a)}}catch(Z){Fn.length=0,Xs(Z,t,1),x=de(Ye)}let Y=x;if(k&&S!==!1){const Z=Object.keys(k),{shapeFlag:Te}=Y;Z.length&&Te&7&&(o&&Z.some(yr)&&(k=Ih(k,o)),Y=Tt(Y,k))}return n.dirs&&(Y=Tt(Y),Y.dirs=Y.dirs?Y.dirs.concat(n.dirs):n.dirs),n.transition&&(Y.transition=n.transition),x=Y,xs(fe),x}const wh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ks(n))&&((e||(e={}))[n]=t[n]);return e},Ih=(t,e)=>{const n={};for(const s in t)(!yr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Th(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Ao(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Js(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Ao(s,o,c):!0:!!o;return!1}function Ao(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Js(n,r))return!0}return!1}function Sh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Nh=t=>t.__isSuspense;function xh(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):Ch(t)}function Rh(t,e){if(we){let n=we.provides;const s=we.parent&&we.parent.provides;s===n&&(n=we.provides=Object.create(s)),n[t]=e}}function vi(t,e,n=!1){const s=we||je;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&L(e)?e.call(s.proxy):e}}const Po={};function Ci(t,e,n){return Ea(t,e,n)}function Ea(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=K){const l=we;let a,c=!1,u=!1;if(Ae(t)?(a=()=>t.value,c=Hi(t)):un(t)?(a=()=>t,s=!0):D(t)?(u=!0,c=t.some(k=>un(k)||Hi(k)),a=()=>t.map(k=>{if(Ae(k))return k.value;if(un(k))return Ht(k);if(L(k))return Ct(k,l,2)})):L(t)?e?a=()=>Ct(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),He(t,l,3,[d])}:a=Ge,e&&s){const k=a;a=()=>Ht(k())}let h,d=k=>{h=x.onStop=()=>{Ct(k,l,4)}};if(qn)return d=Ge,e?n&&He(e,l,3,[a(),u?[]:void 0,d]):a(),Ge;let g=u?[]:Po;const C=()=>{if(!!x.active)if(e){const k=x.run();(s||c||(u?k.some((fe,Y)=>Is(fe,g[Y])):Is(k,g)))&&(h&&h(),He(e,l,3,[k,g===Po?void 0:g,d]),g=k)}else x.run()};C.allowRecurse=!!e;let S;i==="sync"?S=C:i==="post"?S=()=>Oe(C,l&&l.suspense):(C.pre=!0,l&&(C.id=l.uid),S=()=>Pr(C));const x=new wr(a,S);return e?n?C():g=x.run():i==="post"?Oe(x.run.bind(x),l&&l.suspense):x.run(),()=>{x.stop(),l&&l.scope&&vr(l.scope.effects,x)}}function Ah(t,e,n){const s=this.proxy,i=ye(t)?t.includes(".")?ba(s,t):()=>s[t]:t.bind(s,s);let r;L(e)?r=e:(r=e.handler,n=e);const o=we;gn(this);const l=Ea(i,r.bind(s),n);return o?gn(o):Vt(),l}function ba(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ht(t,e){if(!se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ae(t))Ht(t.value,e);else if(D(t))for(let n=0;n<t.length;n++)Ht(t[n],e);else if(Yl(t)||cn(t))t.forEach(n=>{Ht(n,e)});else if(Jl(t))for(const n in t)Ht(t[n],e);return t}function Ph(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Na(()=>{t.isMounted=!0}),xa(()=>{t.isUnmounting=!0}),t}const We=[Function,Array],Oh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:We,onEnter:We,onAfterEnter:We,onEnterCancelled:We,onBeforeLeave:We,onLeave:We,onAfterLeave:We,onLeaveCancelled:We,onBeforeAppear:We,onAppear:We,onAfterAppear:We,onAppearCancelled:We},setup(t,{slots:e}){const n=mf(),s=Ph();let i;return()=>{const r=e.default&&Ta(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const S of r)if(S.type!==Ye){o=S;break}}const l=j(t),{mode:a}=l;if(s.isLeaving)return Ei(o);const c=Oo(o);if(!c)return Ei(o);const u=$i(c,l,s,n);Vi(c,u);const h=n.subTree,d=h&&Oo(h);let g=!1;const{getTransitionKey:C}=c.type;if(C){const S=C();i===void 0?i=S:S!==i&&(i=S,g=!0)}if(d&&d.type!==Ye&&(!Bt(c,d)||g)){const S=$i(d,l,s,n);if(Vi(d,S),a==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update()},Ei(o);a==="in-out"&&c.type!==Ye&&(S.delayLeave=(x,k,fe)=>{const Y=Ia(s,d);Y[String(d.key)]=d,x._leaveCb=()=>{k(),x._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=fe})}return o}}},wa=Oh;function Ia(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function $i(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:C,onBeforeAppear:S,onAppear:x,onAfterAppear:k,onAppearCancelled:fe}=e,Y=String(t.key),Z=Ia(n,t),Te=(W,Q)=>{W&&He(W,s,9,Q)},ft=(W,Q)=>{const re=Q[1];Te(W,Q),D(W)?W.every(ve=>ve.length<=1)&&re():W.length<=1&&re()},nt={mode:r,persisted:o,beforeEnter(W){let Q=l;if(!n.isMounted)if(i)Q=S||l;else return;W._leaveCb&&W._leaveCb(!0);const re=Z[Y];re&&Bt(t,re)&&re.el._leaveCb&&re.el._leaveCb(),Te(Q,[W])},enter(W){let Q=a,re=c,ve=u;if(!n.isMounted)if(i)Q=x||a,re=k||c,ve=fe||u;else return;let R=!1;const oe=W._enterCb=Be=>{R||(R=!0,Be?Te(ve,[W]):Te(re,[W]),nt.delayedLeave&&nt.delayedLeave(),W._enterCb=void 0)};Q?ft(Q,[W,oe]):oe()},leave(W,Q){const re=String(t.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return Q();Te(h,[W]);let ve=!1;const R=W._leaveCb=oe=>{ve||(ve=!0,Q(),oe?Te(C,[W]):Te(g,[W]),W._leaveCb=void 0,Z[re]===t&&delete Z[re])};Z[re]=t,d?ft(d,[W,R]):R()},clone(W){return $i(W,e,n,s)}};return nt}function Ei(t){if(ei(t))return t=Tt(t),t.children=null,t}function Oo(t){return ei(t)?t.children?t.children[0]:void 0:t}function Vi(t,e){t.shapeFlag&6&&t.component?Vi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ta(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ee?(o.patchFlag&128&&i++,s=s.concat(Ta(o.children,e,l))):(e||o.type!==Ye)&&s.push(l!=null?Tt(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const bs=t=>!!t.type.__asyncLoader,ei=t=>t.type.__isKeepAlive;function Dh(t,e){Sa(t,"a",e)}function Mh(t,e){Sa(t,"da",e)}function Sa(t,e,n=we){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ti(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ei(i.parent.vnode)&&kh(s,e,n,i),i=i.parent}}function kh(t,e,n,s){const i=ti(e,t,s,!0);Ra(()=>{vr(s[e],i)},n)}function ti(t,e,n=we,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;En(),gn(n);const l=He(e,n,t,o);return Vt(),bn(),l});return s?i.unshift(r):i.push(r),r}}const ct=t=>(e,n=we)=>(!qn||t==="sp")&&ti(t,e,n),Lh=ct("bm"),Na=ct("m"),Fh=ct("bu"),Bh=ct("u"),xa=ct("bum"),Ra=ct("um"),Wh=ct("sp"),Hh=ct("rtg"),Uh=ct("rtc");function $h(t,e=we){ti("ec",t,e)}function Vh(t,e){const n=je;if(n===null)return t;const s=si(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=K]=e[r];L(o)&&(o={mounted:o,updated:o}),o.deep&&Ht(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c})}return t}function At(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(En(),He(a,n,8,[t.el,l,t,e]),bn())}}const jh=Symbol();function Rn(t,e,n,s){let i;const r=n&&n[s];if(D(t)||ye(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(se(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const ji=t=>t?$a(t)?si(t)||t.proxy:ji(t.parent):null,Rs=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ji(t.parent),$root:t=>ji(t.root),$emit:t=>t.emit,$options:t=>Pa(t),$forceUpdate:t=>t.f||(t.f=()=>Pr(t.update)),$nextTick:t=>t.n||(t.n=mh.bind(t.proxy)),$watch:t=>Ah.bind(t)}),qh={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==K&&U(s,e))return o[e]=1,s[e];if(i!==K&&U(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&U(c,e))return o[e]=3,r[e];if(n!==K&&U(n,e))return o[e]=4,n[e];qi&&(o[e]=0)}}const u=Rs[e];let h,d;if(u)return e==="$attrs"&&Fe(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==K&&U(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,U(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==K&&U(i,e)?(i[e]=n,!0):s!==K&&U(s,e)?(s[e]=n,!0):U(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==K&&U(t,o)||e!==K&&U(e,o)||(l=r[0])&&U(l,o)||U(s,o)||U(Rs,o)||U(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:U(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let qi=!0;function zh(t){const e=Pa(t),n=t.proxy,s=t.ctx;qi=!1,e.beforeCreate&&Do(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:C,activated:S,deactivated:x,beforeDestroy:k,beforeUnmount:fe,destroyed:Y,unmounted:Z,render:Te,renderTracked:ft,renderTriggered:nt,errorCaptured:W,serverPrefetch:Q,expose:re,inheritAttrs:ve,components:R,directives:oe,filters:Be}=e;if(c&&Kh(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ae in o){const ee=o[ae];L(ee)&&(s[ae]=ee.bind(n))}if(i){const ae=i.call(n,n);se(ae)&&(t.data=ss(ae))}if(qi=!0,r)for(const ae in r){const ee=r[ae],st=L(ee)?ee.bind(n,n):L(ee.get)?ee.get.bind(n,n):Ge,di=!L(ee)&&L(ee.set)?ee.set.bind(n):Ge,Nn=wf({get:st,set:di});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>Nn.value,set:en=>Nn.value=en})}if(l)for(const ae in l)Aa(l[ae],s,n,ae);if(a){const ae=L(a)?a.call(n):a;Reflect.ownKeys(ae).forEach(ee=>{Rh(ee,ae[ee])})}u&&Do(u,t,"c");function Ce(ae,ee){D(ee)?ee.forEach(st=>ae(st.bind(n))):ee&&ae(ee.bind(n))}if(Ce(Lh,h),Ce(Na,d),Ce(Fh,g),Ce(Bh,C),Ce(Dh,S),Ce(Mh,x),Ce($h,W),Ce(Uh,ft),Ce(Hh,nt),Ce(xa,fe),Ce(Ra,Z),Ce(Wh,Q),D(re))if(re.length){const ae=t.exposed||(t.exposed={});re.forEach(ee=>{Object.defineProperty(ae,ee,{get:()=>n[ee],set:st=>n[ee]=st})})}else t.exposed||(t.exposed={});Te&&t.render===Ge&&(t.render=Te),ve!=null&&(t.inheritAttrs=ve),R&&(t.components=R),oe&&(t.directives=oe)}function Kh(t,e,n=Ge,s=!1){D(t)&&(t=zi(t));for(const i in t){const r=t[i];let o;se(r)?"default"in r?o=vi(r.from||i,r.default,!0):o=vi(r.from||i):o=vi(r),Ae(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Do(t,e,n){He(D(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Aa(t,e,n,s){const i=s.includes(".")?ba(n,s):()=>n[s];if(ye(t)){const r=e[t];L(r)&&Ci(i,r)}else if(L(t))Ci(i,t.bind(n));else if(se(t))if(D(t))t.forEach(r=>Aa(r,e,n,s));else{const r=L(t.handler)?t.handler.bind(n):e[t.handler];L(r)&&Ci(i,r,t)}}function Pa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>As(a,c,o,!0)),As(a,e,o)),se(e)&&r.set(e,a),a}function As(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&As(t,r,n,!0),i&&i.forEach(o=>As(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Gh[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Gh={data:Mo,props:Mt,emits:Mt,methods:Mt,computed:Mt,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Mt,directives:Mt,watch:Qh,provide:Mo,inject:Yh};function Mo(t,e){return e?t?function(){return Ie(L(t)?t.call(this,this):t,L(e)?e.call(this,this):e)}:e:t}function Yh(t,e){return Mt(zi(t),zi(e))}function zi(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Re(t,e){return t?[...new Set([].concat(t,e))]:e}function Mt(t,e){return t?Ie(Ie(Object.create(null),t),e):e}function Qh(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const s in e)n[s]=Re(t[s],e[s]);return n}function Xh(t,e,n,s=!1){const i={},r={};Ts(r,ni,1),t.propsDefaults=Object.create(null),Oa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:uh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Jh(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=j(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Js(t.emitsOptions,d))continue;const g=e[d];if(a)if(U(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const C=pn(d);i[C]=Ki(a,l,C,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{Oa(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!U(e,h)&&((u=Xt(h))===h||!U(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Ki(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!U(e,h)&&!0)&&(delete r[h],c=!0)}c&&at(t,"set","$attrs")}function Oa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Cs(a))continue;const c=e[a];let u;i&&U(i,u=pn(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Js(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=j(n),c=l||K;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Ki(i,a,h,c[h],t,!U(c,h))}}return o}function Ki(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=U(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&L(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(gn(i),s=c[n]=a.call(null,e),Vt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Xt(n))&&(s=!0))}return s}function Da(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!L(t)){const u=h=>{a=!0;const[d,g]=Da(h,e,!0);Ie(o,d),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return se(t)&&s.set(t,an),an;if(D(r))for(let u=0;u<r.length;u++){const h=pn(r[u]);ko(h)&&(o[h]=K)}else if(r)for(const u in r){const h=pn(u);if(ko(h)){const d=r[u],g=o[h]=D(d)||L(d)?{type:d}:d;if(g){const C=Bo(Boolean,g.type),S=Bo(String,g.type);g[0]=C>-1,g[1]=S<0||C<S,(C>-1||U(g,"default"))&&l.push(h)}}}const c=[o,l];return se(t)&&s.set(t,c),c}function ko(t){return t[0]!=="$"}function Lo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Fo(t,e){return Lo(t)===Lo(e)}function Bo(t,e){return D(e)?e.findIndex(n=>Fo(n,t)):L(e)&&Fo(e,t)?0:-1}const Ma=t=>t[0]==="_"||t==="$stable",Mr=t=>D(t)?t.map(et):[et(t)],Zh=(t,e,n)=>{if(e._n)return e;const s=Ca((...i)=>Mr(e(...i)),n);return s._c=!1,s},ka=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ma(i))continue;const r=t[i];if(L(r))e[i]=Zh(i,r,s);else if(r!=null){const o=Mr(r);e[i]=()=>o}}},La=(t,e)=>{const n=Mr(e);t.slots.default=()=>n},ef=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=j(e),Ts(e,"_",n)):ka(e,t.slots={})}else t.slots={},e&&La(t,e);Ts(t.slots,ni,1)},tf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=K;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Ie(i,e),!n&&l===1&&delete i._):(r=!e.$stable,ka(e,i)),o=e}else e&&(La(t,e),o={default:1});if(r)for(const l in i)!Ma(l)&&!(l in o)&&delete i[l]};function Fa(){return{app:null,config:{isNativeTag:Au,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nf=0;function sf(t,e){return function(s,i=null){L(s)||(s=Object.assign({},s)),i!=null&&!se(i)&&(i=null);const r=Fa(),o=new Set;let l=!1;const a=r.app={_uid:nf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Tf,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(a,...u)):L(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=de(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,si(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function Gi(t,e,n,s,i=!1){if(D(t)){t.forEach((d,g)=>Gi(d,e&&(D(e)?e[g]:e),n,s,i));return}if(bs(s)&&!i)return;const r=s.shapeFlag&4?si(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===K?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(ye(c)?(u[c]=null,U(h,c)&&(h[c]=null)):Ae(c)&&(c.value=null)),L(a))Ct(a,l,12,[o,u]);else{const d=ye(a),g=Ae(a);if(d||g){const C=()=>{if(t.f){const S=d?u[a]:a.value;i?D(S)&&vr(S,r):D(S)?S.includes(r)||S.push(r):d?(u[a]=[r],U(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,U(h,a)&&(h[a]=o)):g&&(a.value=o,t.k&&(u[t.k]=o))};o?(C.id=-1,Oe(C,n)):C()}}}const Oe=xh;function rf(t){return of(t)}function of(t,e){const n=Lu();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Ge,cloneNode:C,insertStaticContent:S}=t,x=(f,_,p,y=null,m=null,w=null,T=!1,E=null,I=!!_.dynamicChildren)=>{if(f===_)return;f&&!Bt(f,_)&&(y=fs(f),dt(f,m,w,!0),f=null),_.patchFlag===-2&&(I=!1,_.dynamicChildren=null);const{type:v,ref:A,shapeFlag:N}=_;switch(v){case kr:k(f,_,p,y);break;case Ye:fe(f,_,p,y);break;case bi:f==null&&Y(_,p,y,T);break;case Ee:oe(f,_,p,y,m,w,T,E,I);break;default:N&1?ft(f,_,p,y,m,w,T,E,I):N&6?Be(f,_,p,y,m,w,T,E,I):(N&64||N&128)&&v.process(f,_,p,y,m,w,T,E,I,tn)}A!=null&&m&&Gi(A,f&&f.ref,w,_||f,!_)},k=(f,_,p,y)=>{if(f==null)s(_.el=l(_.children),p,y);else{const m=_.el=f.el;_.children!==f.children&&c(m,_.children)}},fe=(f,_,p,y)=>{f==null?s(_.el=a(_.children||""),p,y):_.el=f.el},Y=(f,_,p,y)=>{[f.el,f.anchor]=S(f.children,_,p,y,f.el,f.anchor)},Z=({el:f,anchor:_},p,y)=>{let m;for(;f&&f!==_;)m=d(f),s(f,p,y),f=m;s(_,p,y)},Te=({el:f,anchor:_})=>{let p;for(;f&&f!==_;)p=d(f),i(f),f=p;i(_)},ft=(f,_,p,y,m,w,T,E,I)=>{T=T||_.type==="svg",f==null?nt(_,p,y,m,w,T,E,I):re(f,_,m,w,T,E,I)},nt=(f,_,p,y,m,w,T,E)=>{let I,v;const{type:A,props:N,shapeFlag:P,transition:M,patchFlag:$,dirs:q}=f;if(f.el&&C!==void 0&&$===-1)I=f.el=C(f.el);else{if(I=f.el=o(f.type,w,N&&N.is,N),P&8?u(I,f.children):P&16&&Q(f.children,I,null,y,m,w&&A!=="foreignObject",T,E),q&&At(f,null,y,"created"),N){for(const te in N)te!=="value"&&!Cs(te)&&r(I,te,null,N[te],w,f.children,y,m,it);"value"in N&&r(I,"value",null,N.value),(v=N.onVnodeBeforeMount)&&Je(v,y,f)}W(I,f,f.scopeId,T,y)}q&&At(f,null,y,"beforeMount");const z=(!m||m&&!m.pendingBranch)&&M&&!M.persisted;z&&M.beforeEnter(I),s(I,_,p),((v=N&&N.onVnodeMounted)||z||q)&&Oe(()=>{v&&Je(v,y,f),z&&M.enter(I),q&&At(f,null,y,"mounted")},m)},W=(f,_,p,y,m)=>{if(p&&g(f,p),y)for(let w=0;w<y.length;w++)g(f,y[w]);if(m){let w=m.subTree;if(_===w){const T=m.vnode;W(f,T,T.scopeId,T.slotScopeIds,m.parent)}}},Q=(f,_,p,y,m,w,T,E,I=0)=>{for(let v=I;v<f.length;v++){const A=f[v]=E?mt(f[v]):et(f[v]);x(null,A,_,p,y,m,w,T,E)}},re=(f,_,p,y,m,w,T)=>{const E=_.el=f.el;let{patchFlag:I,dynamicChildren:v,dirs:A}=_;I|=f.patchFlag&16;const N=f.props||K,P=_.props||K;let M;p&&Pt(p,!1),(M=P.onVnodeBeforeUpdate)&&Je(M,p,_,f),A&&At(_,f,p,"beforeUpdate"),p&&Pt(p,!0);const $=m&&_.type!=="foreignObject";if(v?ve(f.dynamicChildren,v,E,p,y,$,w):T||st(f,_,E,null,p,y,$,w,!1),I>0){if(I&16)R(E,_,N,P,p,y,m);else if(I&2&&N.class!==P.class&&r(E,"class",null,P.class,m),I&4&&r(E,"style",N.style,P.style,m),I&8){const q=_.dynamicProps;for(let z=0;z<q.length;z++){const te=q[z],Ue=N[te],nn=P[te];(nn!==Ue||te==="value")&&r(E,te,Ue,nn,m,f.children,p,y,it)}}I&1&&f.children!==_.children&&u(E,_.children)}else!T&&v==null&&R(E,_,N,P,p,y,m);((M=P.onVnodeUpdated)||A)&&Oe(()=>{M&&Je(M,p,_,f),A&&At(_,f,p,"updated")},y)},ve=(f,_,p,y,m,w,T)=>{for(let E=0;E<_.length;E++){const I=f[E],v=_[E],A=I.el&&(I.type===Ee||!Bt(I,v)||I.shapeFlag&70)?h(I.el):p;x(I,v,A,null,y,m,w,T,!0)}},R=(f,_,p,y,m,w,T)=>{if(p!==y){for(const E in y){if(Cs(E))continue;const I=y[E],v=p[E];I!==v&&E!=="value"&&r(f,E,v,I,T,_.children,m,w,it)}if(p!==K)for(const E in p)!Cs(E)&&!(E in y)&&r(f,E,p[E],null,T,_.children,m,w,it);"value"in y&&r(f,"value",p.value,y.value)}},oe=(f,_,p,y,m,w,T,E,I)=>{const v=_.el=f?f.el:l(""),A=_.anchor=f?f.anchor:l("");let{patchFlag:N,dynamicChildren:P,slotScopeIds:M}=_;M&&(E=E?E.concat(M):M),f==null?(s(v,p,y),s(A,p,y),Q(_.children,p,A,m,w,T,E,I)):N>0&&N&64&&P&&f.dynamicChildren?(ve(f.dynamicChildren,P,p,m,w,T,E),(_.key!=null||m&&_===m.subTree)&&Ba(f,_,!0)):st(f,_,p,A,m,w,T,E,I)},Be=(f,_,p,y,m,w,T,E,I)=>{_.slotScopeIds=E,f==null?_.shapeFlag&512?m.ctx.activate(_,p,y,T,I):Zt(_,p,y,m,w,T,I):Ce(f,_,I)},Zt=(f,_,p,y,m,w,T)=>{const E=f.component=gf(f,y,m);if(ei(f)&&(E.ctx.renderer=tn),yf(E),E.asyncDep){if(m&&m.registerDep(E,ae),!f.el){const I=E.subTree=de(Ye);fe(null,I,_,p)}return}ae(E,f,_,p,m,w,T)},Ce=(f,_,p)=>{const y=_.component=f.component;if(Th(f,_,p))if(y.asyncDep&&!y.asyncResolved){ee(y,_,p);return}else y.next=_,vh(y.update),y.update();else _.el=f.el,y.vnode=_},ae=(f,_,p,y,m,w,T)=>{const E=()=>{if(f.isMounted){let{next:A,bu:N,u:P,parent:M,vnode:$}=f,q=A,z;Pt(f,!1),A?(A.el=$.el,ee(f,A,T)):A=$,N&&Es(N),(z=A.props&&A.props.onVnodeBeforeUpdate)&&Je(z,M,A,$),Pt(f,!0);const te=yi(f),Ue=f.subTree;f.subTree=te,x(Ue,te,h(Ue.el),fs(Ue),f,m,w),A.el=te.el,q===null&&Sh(f,te.el),P&&Oe(P,m),(z=A.props&&A.props.onVnodeUpdated)&&Oe(()=>Je(z,M,A,$),m)}else{let A;const{el:N,props:P}=_,{bm:M,m:$,parent:q}=f,z=bs(_);if(Pt(f,!1),M&&Es(M),!z&&(A=P&&P.onVnodeBeforeMount)&&Je(A,q,_),Pt(f,!0),N&&pi){const te=()=>{f.subTree=yi(f),pi(N,f.subTree,f,m,null)};z?_.type.__asyncLoader().then(()=>!f.isUnmounted&&te()):te()}else{const te=f.subTree=yi(f);x(null,te,p,y,f,m,w),_.el=te.el}if($&&Oe($,m),!z&&(A=P&&P.onVnodeMounted)){const te=_;Oe(()=>Je(A,q,te),m)}(_.shapeFlag&256||q&&bs(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&Oe(f.a,m),f.isMounted=!0,_=p=y=null}},I=f.effect=new wr(E,()=>Pr(v),f.scope),v=f.update=()=>I.run();v.id=f.uid,Pt(f,!0),v()},ee=(f,_,p)=>{_.component=f;const y=f.vnode.props;f.vnode=_,f.next=null,Jh(f,_.props,y,p),tf(f,_.children,p),En(),Ro(),bn()},st=(f,_,p,y,m,w,T,E,I=!1)=>{const v=f&&f.children,A=f?f.shapeFlag:0,N=_.children,{patchFlag:P,shapeFlag:M}=_;if(P>0){if(P&128){Nn(v,N,p,y,m,w,T,E,I);return}else if(P&256){di(v,N,p,y,m,w,T,E,I);return}}M&8?(A&16&&it(v,m,w),N!==v&&u(p,N)):A&16?M&16?Nn(v,N,p,y,m,w,T,E,I):it(v,m,w,!0):(A&8&&u(p,""),M&16&&Q(N,p,y,m,w,T,E,I))},di=(f,_,p,y,m,w,T,E,I)=>{f=f||an,_=_||an;const v=f.length,A=_.length,N=Math.min(v,A);let P;for(P=0;P<N;P++){const M=_[P]=I?mt(_[P]):et(_[P]);x(f[P],M,p,null,m,w,T,E,I)}v>A?it(f,m,w,!0,!1,N):Q(_,p,y,m,w,T,E,I,N)},Nn=(f,_,p,y,m,w,T,E,I)=>{let v=0;const A=_.length;let N=f.length-1,P=A-1;for(;v<=N&&v<=P;){const M=f[v],$=_[v]=I?mt(_[v]):et(_[v]);if(Bt(M,$))x(M,$,p,null,m,w,T,E,I);else break;v++}for(;v<=N&&v<=P;){const M=f[N],$=_[P]=I?mt(_[P]):et(_[P]);if(Bt(M,$))x(M,$,p,null,m,w,T,E,I);else break;N--,P--}if(v>N){if(v<=P){const M=P+1,$=M<A?_[M].el:y;for(;v<=P;)x(null,_[v]=I?mt(_[v]):et(_[v]),p,$,m,w,T,E,I),v++}}else if(v>P)for(;v<=N;)dt(f[v],m,w,!0),v++;else{const M=v,$=v,q=new Map;for(v=$;v<=P;v++){const ke=_[v]=I?mt(_[v]):et(_[v]);ke.key!=null&&q.set(ke.key,v)}let z,te=0;const Ue=P-$+1;let nn=!1,yo=0;const xn=new Array(Ue);for(v=0;v<Ue;v++)xn[v]=0;for(v=M;v<=N;v++){const ke=f[v];if(te>=Ue){dt(ke,m,w,!0);continue}let Xe;if(ke.key!=null)Xe=q.get(ke.key);else for(z=$;z<=P;z++)if(xn[z-$]===0&&Bt(ke,_[z])){Xe=z;break}Xe===void 0?dt(ke,m,w,!0):(xn[Xe-$]=v+1,Xe>=yo?yo=Xe:nn=!0,x(ke,_[Xe],p,null,m,w,T,E,I),te++)}const vo=nn?lf(xn):an;for(z=vo.length-1,v=Ue-1;v>=0;v--){const ke=$+v,Xe=_[ke],Co=ke+1<A?_[ke+1].el:y;xn[v]===0?x(null,Xe,p,Co,m,w,T,E,I):nn&&(z<0||v!==vo[z]?en(Xe,p,Co,2):z--)}}},en=(f,_,p,y,m=null)=>{const{el:w,type:T,transition:E,children:I,shapeFlag:v}=f;if(v&6){en(f.component.subTree,_,p,y);return}if(v&128){f.suspense.move(_,p,y);return}if(v&64){T.move(f,_,p,tn);return}if(T===Ee){s(w,_,p);for(let N=0;N<I.length;N++)en(I[N],_,p,y);s(f.anchor,_,p);return}if(T===bi){Z(f,_,p);return}if(y!==2&&v&1&&E)if(y===0)E.beforeEnter(w),s(w,_,p),Oe(()=>E.enter(w),m);else{const{leave:N,delayLeave:P,afterLeave:M}=E,$=()=>s(w,_,p),q=()=>{N(w,()=>{$(),M&&M()})};P?P(w,$,q):q()}else s(w,_,p)},dt=(f,_,p,y=!1,m=!1)=>{const{type:w,props:T,ref:E,children:I,dynamicChildren:v,shapeFlag:A,patchFlag:N,dirs:P}=f;if(E!=null&&Gi(E,null,p,f,!0),A&256){_.ctx.deactivate(f);return}const M=A&1&&P,$=!bs(f);let q;if($&&(q=T&&T.onVnodeBeforeUnmount)&&Je(q,_,f),A&6)Iu(f.component,p,y);else{if(A&128){f.suspense.unmount(p,y);return}M&&At(f,null,_,"beforeUnmount"),A&64?f.type.remove(f,_,p,m,tn,y):v&&(w!==Ee||N>0&&N&64)?it(v,_,p,!1,!0):(w===Ee&&N&384||!m&&A&16)&&it(I,_,p),y&&go(f)}($&&(q=T&&T.onVnodeUnmounted)||M)&&Oe(()=>{q&&Je(q,_,f),M&&At(f,null,_,"unmounted")},p)},go=f=>{const{type:_,el:p,anchor:y,transition:m}=f;if(_===Ee){wu(p,y);return}if(_===bi){Te(f);return}const w=()=>{i(p),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:T,delayLeave:E}=m,I=()=>T(p,w);E?E(f.el,w,I):I()}else w()},wu=(f,_)=>{let p;for(;f!==_;)p=d(f),i(f),f=p;i(_)},Iu=(f,_,p)=>{const{bum:y,scope:m,update:w,subTree:T,um:E}=f;y&&Es(y),m.stop(),w&&(w.active=!1,dt(T,f,_,p)),E&&Oe(E,_),Oe(()=>{f.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},it=(f,_,p,y=!1,m=!1,w=0)=>{for(let T=w;T<f.length;T++)dt(f[T],_,p,y,m)},fs=f=>f.shapeFlag&6?fs(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),mo=(f,_,p)=>{f==null?_._vnode&&dt(_._vnode,null,null,!0):x(_._vnode||null,f,_,null,null,null,p),Ro(),ma(),_._vnode=f},tn={p:x,um:dt,m:en,r:go,mt:Zt,mc:Q,pc:st,pbc:ve,n:fs,o:t};let _i,pi;return e&&([_i,pi]=e(tn)),{render:mo,hydrate:_i,createApp:sf(mo,_i)}}function Pt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ba(t,e,n=!1){const s=t.children,i=e.children;if(D(s)&&D(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=mt(i[r]),l.el=o.el),n||Ba(o,l))}}function lf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const af=t=>t.__isTeleport,Ee=Symbol(void 0),kr=Symbol(void 0),Ye=Symbol(void 0),bi=Symbol(void 0),Fn=[];let qe=null;function ie(t=!1){Fn.push(qe=t?null:[])}function cf(){Fn.pop(),qe=Fn[Fn.length-1]||null}let jn=1;function Wo(t){jn+=t}function Wa(t){return t.dynamicChildren=jn>0?qe||an:null,cf(),jn>0&&qe&&qe.push(t),t}function ce(t,e,n,s,i,r){return Wa(ue(t,e,n,s,i,r,!0))}function Ha(t,e,n,s,i){return Wa(de(t,e,n,s,i,!0))}function Yi(t){return t?t.__v_isVNode===!0:!1}function Bt(t,e){return t.type===e.type&&t.key===e.key}const ni="__vInternal",Ua=({key:t})=>t!=null?t:null,ws=({ref:t,ref_key:e,ref_for:n})=>t!=null?ye(t)||Ae(t)||L(t)?{i:je,r:t,k:e,f:!!n}:t:null;function ue(t,e=null,n=null,s=0,i=null,r=t===Ee?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ua(e),ref:e&&ws(e),scopeId:Zs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(Lr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=ye(n)?8:16),jn>0&&!o&&qe&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&qe.push(a),a}const de=uf;function uf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===jh)&&(t=Ye),Yi(t)){const l=Tt(t,e,!0);return n&&Lr(l,n),jn>0&&!r&&qe&&(l.shapeFlag&6?qe[qe.indexOf(t)]=l:qe.push(l)),l.patchFlag|=-2,l}if(bf(t)&&(t=t.__vccOpts),e){e=hf(e);let{class:l,style:a}=e;l&&!ye(l)&&(e.class=mr(l)),se(a)&&(ha(a)&&!D(a)&&(a=Ie({},a)),e.style=gr(a))}const o=ye(t)?1:Nh(t)?128:af(t)?64:se(t)?4:L(t)?2:0;return ue(t,e,n,s,i,o,r,!0)}function hf(t){return t?ha(t)||ni in t?Ie({},t):t:null}function Tt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?df(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ua(l),ref:e&&e.ref?n&&i?D(i)?i.concat(ws(e)):[i,ws(e)]:ws(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ee?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tt(t.ssContent),ssFallback:t.ssFallback&&Tt(t.ssFallback),el:t.el,anchor:t.anchor}}function ff(t=" ",e=0){return de(kr,null,t,e)}function yt(t="",e=!1){return e?(ie(),Ha(Ye,null,t)):de(Ye,null,t)}function et(t){return t==null||typeof t=="boolean"?de(Ye):D(t)?de(Ee,null,t.slice()):typeof t=="object"?mt(t):de(kr,null,String(t))}function mt(t){return t.el===null||t.memo?t:Tt(t)}function Lr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Lr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ni in e)?e._ctx=je:i===3&&je&&(je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else L(e)?(e={default:e,_ctx:je},n=32):(e=String(e),s&64?(n=16,e=[ff(e)]):n=8);t.children=e,t.shapeFlag|=n}function df(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=mr([e.class,s.class]));else if(i==="style")e.style=gr([e.style,s.style]);else if(Ks(i)){const r=e[i],o=s[i];o&&r!==o&&!(D(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Je(t,e,n,s=null){He(t,e,7,[n,s])}const _f=Fa();let pf=0;function gf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||_f,r={uid:pf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Da(s,i),emitsOptions:va(s,i),emit:null,emitted:null,propsDefaults:K,inheritAttrs:s.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=bh.bind(null,r),t.ce&&t.ce(r),r}let we=null;const mf=()=>we||je,gn=t=>{we=t,t.scope.on()},Vt=()=>{we&&we.scope.off(),we=null};function $a(t){return t.vnode.shapeFlag&4}let qn=!1;function yf(t,e=!1){qn=e;const{props:n,children:s}=t.vnode,i=$a(t);Xh(t,n,i,e),ef(t,s);const r=i?vf(t,e):void 0;return qn=!1,r}function vf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=fa(new Proxy(t.ctx,qh));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Ef(t):null;gn(t),En();const r=Ct(s,t,0,[t.props,i]);if(bn(),Vt(),Ql(r)){if(r.then(Vt,Vt),e)return r.then(o=>{Ho(t,o,e)}).catch(o=>{Xs(o,t,0)});t.asyncDep=r}else Ho(t,r,e)}else Va(t,e)}function Ho(t,e,n){L(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)&&(t.setupState=da(e)),Va(t,n)}let Uo;function Va(t,e,n){const s=t.type;if(!t.render){if(!e&&Uo&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Ie(Ie({isCustomElement:r,delimiters:l},o),a);s.render=Uo(i,c)}}t.render=s.render||Ge}gn(t),En(),zh(t),bn(),Vt()}function Cf(t){return new Proxy(t.attrs,{get(e,n){return Fe(t,"get","$attrs"),e[n]}})}function Ef(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Cf(t))},slots:t.slots,emit:t.emit,expose:e}}function si(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(da(fa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rs)return Rs[n](t)}}))}function bf(t){return L(t)&&"__vccOpts"in t}const wf=(t,e)=>ph(t,e,qn);function If(t,e,n){const s=arguments.length;return s===2?se(e)&&!D(e)?Yi(e)?de(t,null,[e]):de(t,e):de(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Yi(n)&&(n=[n]),de(t,e,n))}const Tf="3.2.38",Sf="http://www.w3.org/2000/svg",Wt=typeof document<"u"?document:null,$o=Wt&&Wt.createElement("template"),Nf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Wt.createElementNS(Sf,t):Wt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Wt.createTextNode(t),createComment:t=>Wt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{$o.innerHTML=s?`<svg>${t}</svg>`:t;const l=$o.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function xf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Rf(t,e,n){const s=t.style,i=ye(n);if(n&&!i){for(const r in n)Qi(s,r,n[r]);if(e&&!ye(e))for(const r in e)n[r]==null&&Qi(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Vo=/\s*!important$/;function Qi(t,e,n){if(D(n))n.forEach(s=>Qi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Af(t,e);Vo.test(n)?t.setProperty(Xt(s),n.replace(Vo,""),"important"):t[s]=n}}const jo=["Webkit","Moz","ms"],wi={};function Af(t,e){const n=wi[e];if(n)return n;let s=pn(e);if(s!=="filter"&&s in t)return wi[e]=s;s=Zl(s);for(let i=0;i<jo.length;i++){const r=jo[i]+s;if(r in t)return wi[e]=r}return e}const qo="http://www.w3.org/1999/xlink";function Pf(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(qo,e.slice(6,e.length)):t.setAttributeNS(qo,e,n);else{const r=Su(e);n==null||r&&!Kl(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Of(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Kl(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[ja,Df]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Xi=0;const Mf=Promise.resolve(),kf=()=>{Xi=0},Lf=()=>Xi||(Mf.then(kf),Xi=ja());function rn(t,e,n,s){t.addEventListener(e,n,s)}function Ff(t,e,n,s){t.removeEventListener(e,n,s)}function Bf(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Wf(e);if(s){const c=r[e]=Hf(s,i);rn(t,l,c,a)}else o&&(Ff(t,l,o,a),r[e]=void 0)}}const zo=/(?:Once|Passive|Capture)$/;function Wf(t){let e;if(zo.test(t)){e={};let s;for(;s=t.match(zo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xt(t.slice(2)),e]}function Hf(t,e){const n=s=>{const i=s.timeStamp||ja();(Df||i>=n.attached-1)&&He(Uf(s,n.value),e,5,[s])};return n.value=t,n.attached=Lf(),n}function Uf(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ko=/^on[a-z]/,$f=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?xf(t,s,i):e==="style"?Rf(t,n,s):Ks(e)?yr(e)||Bf(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vf(t,e,s,i))?Of(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Pf(t,e,s,i))};function Vf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ko.test(e)&&L(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ko.test(e)&&ye(n)?!1:e in t}const pt="transition",An="animation",Fr=(t,{slots:e})=>If(wa,jf(t),e);Fr.displayName="Transition";const qa={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Fr.props=Ie({},wa.props,qa);const Ot=(t,e=[])=>{D(t)?t.forEach(n=>n(...e)):t&&t(...e)},Go=t=>t?D(t)?t.some(e=>e.length>1):t.length>1:!1;function jf(t){const e={};for(const R in t)R in qa||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:c=o,appearToClass:u=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,C=qf(i),S=C&&C[0],x=C&&C[1],{onBeforeEnter:k,onEnter:fe,onEnterCancelled:Y,onLeave:Z,onLeaveCancelled:Te,onBeforeAppear:ft=k,onAppear:nt=fe,onAppearCancelled:W=Y}=e,Q=(R,oe,Be)=>{Dt(R,oe?u:l),Dt(R,oe?c:o),Be&&Be()},re=(R,oe)=>{R._isLeaving=!1,Dt(R,h),Dt(R,g),Dt(R,d),oe&&oe()},ve=R=>(oe,Be)=>{const Zt=R?nt:fe,Ce=()=>Q(oe,R,Be);Ot(Zt,[oe,Ce]),Yo(()=>{Dt(oe,R?a:r),gt(oe,R?u:l),Go(Zt)||Qo(oe,s,S,Ce)})};return Ie(e,{onBeforeEnter(R){Ot(k,[R]),gt(R,r),gt(R,o)},onBeforeAppear(R){Ot(ft,[R]),gt(R,a),gt(R,c)},onEnter:ve(!1),onAppear:ve(!0),onLeave(R,oe){R._isLeaving=!0;const Be=()=>re(R,oe);gt(R,h),Gf(),gt(R,d),Yo(()=>{!R._isLeaving||(Dt(R,h),gt(R,g),Go(Z)||Qo(R,s,x,Be))}),Ot(Z,[R,Be])},onEnterCancelled(R){Q(R,!1),Ot(Y,[R])},onAppearCancelled(R){Q(R,!0),Ot(W,[R])},onLeaveCancelled(R){re(R),Ot(Te,[R])}})}function qf(t){if(t==null)return null;if(se(t))return[Ii(t.enter),Ii(t.leave)];{const e=Ii(t);return[e,e]}}function Ii(t){return Ss(t)}function gt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Dt(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Yo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let zf=0;function Qo(t,e,n,s){const i=t._endId=++zf,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:l,propCount:a}=Kf(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=g=>{g.target===t&&++u>=a&&h()};setTimeout(()=>{u<a&&h()},l+1),t.addEventListener(c,d)}function Kf(t,e){const n=window.getComputedStyle(t),s=C=>(n[C]||"").split(", "),i=s(pt+"Delay"),r=s(pt+"Duration"),o=Xo(i,r),l=s(An+"Delay"),a=s(An+"Duration"),c=Xo(l,a);let u=null,h=0,d=0;e===pt?o>0&&(u=pt,h=o,d=r.length):e===An?c>0&&(u=An,h=c,d=a.length):(h=Math.max(o,c),u=h>0?o>c?pt:An:null,d=u?u===pt?r.length:a.length:0);const g=u===pt&&/\b(transform|all)(,|$)/.test(n[pt+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:g}}function Xo(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Jo(n)+Jo(t[s])))}function Jo(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Gf(){return document.body.offsetHeight}const Zo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return D(e)?n=>Es(e,n):e};function Yf(t){t.target.composing=!0}function el(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Qf={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Zo(i);const r=s||i.props&&i.props.type==="number";rn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Ss(l)),t._assign(l)}),n&&rn(t,"change",()=>{t.value=t.value.trim()}),e||(rn(t,"compositionstart",Yf),rn(t,"compositionend",el),rn(t,"change",el))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Zo(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ss(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Xf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},tl=(t,e)=>n=>{if(!("key"in n))return;const s=Xt(n.key);if(e.some(i=>i===s||Xf[i]===s))return t(n)},Jf=Ie({patchProp:$f},Nf);let nl;function Zf(){return nl||(nl=rf(Jf))}const ed=(...t)=>{const e=Zf().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=td(s);if(!i)return;const r=e._component;!L(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function td(t){return ye(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw wn(e)},wn=function(t){return new Error("Firebase Database ("+za.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Br={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ka(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw Error();const d=r<<2|l>>4;if(s.push(d),c!==64){const g=l<<4&240|c>>2;if(s.push(g),h!==64){const C=c<<6&192|h;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ga=function(t){const e=Ka(t);return Br.encodeByteArray(e,!0)},Ya=function(t){return Ga(t).replace(/\./g,"")},sl=function(t){try{return Br.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(t){return Qa(void 0,t)}function Qa(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!id(n)||(t[n]=Qa(t[n],e[n]));return t}function id(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rd())}function od(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ja(){return za.NODE_ADMIN===!0}function ld(){return typeof indexedDB=="object"}function ad(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="FirebaseError";class is extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=cd,Object.setPrototypeOf(this,is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Za.prototype.create)}}class Za{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ud(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new is(i,l,s)}}function ud(t,e){return t.replace(hd,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const hd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t){return JSON.parse(t)}function _e(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=zn(sl(r[0])||""),n=zn(sl(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},fd=function(t){const e=ec(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dd=function(t){const e=ec(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function mn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function il(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ps(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ji(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(rl(r)&&rl(o)){if(!Ji(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function rl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function tc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ii=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){return t&&t._delegate?t._delegate:t}class Kn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Wr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vd(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yd(t){return t===kt?void 0:t}function vd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new md(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const Ed={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},bd=X.INFO,wd={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Id=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=wd[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nc{constructor(e){this.name=e,this._logLevel=bd,this._logHandler=Id,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ed[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Td=(t,e)=>e.some(n=>t instanceof n);let ol,ll;function Sd(){return ol||(ol=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nd(){return ll||(ll=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sc=new WeakMap,Zi=new WeakMap,ic=new WeakMap,Ti=new WeakMap,Hr=new WeakMap;function xd(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Et(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sc.set(n,t)}).catch(()=>{}),Hr.set(e,t),e}function Rd(t){if(Zi.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Zi.set(t,e)}let er={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ic.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ad(t){er=t(er)}function Pd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Si(this),e,...n);return ic.set(s,e.sort?e.sort():[e]),Et(s)}:Nd().includes(t)?function(...e){return t.apply(Si(this),e),Et(sc.get(this))}:function(...e){return Et(t.apply(Si(this),e))}}function Od(t){return typeof t=="function"?Pd(t):(t instanceof IDBTransaction&&Rd(t),Td(t,Sd())?new Proxy(t,er):t)}function Et(t){if(t instanceof IDBRequest)return xd(t);if(Ti.has(t))return Ti.get(t);const e=Od(t);return e!==t&&(Ti.set(t,e),Hr.set(e,t)),e}const Si=t=>Hr.get(t);function Dd(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Et(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Et(o.result),a.oldVersion,a.newVersion,Et(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Md=["get","getKey","getAll","getAllKeys","count"],kd=["put","add","delete","clear"],Ni=new Map;function al(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ni.get(e))return Ni.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=kd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Md.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Ni.set(e,r),r}Ad(t=>({...t,get:(e,n,s)=>al(e,n)||t.get(e,n,s),has:(e,n)=>!!al(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Fd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tr="@firebase/app",cl="0.7.32";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new nc("@firebase/app"),Bd="@firebase/app-compat",Wd="@firebase/analytics-compat",Hd="@firebase/analytics",Ud="@firebase/app-check-compat",$d="@firebase/app-check",Vd="@firebase/auth",jd="@firebase/auth-compat",qd="@firebase/database",zd="@firebase/database-compat",Kd="@firebase/functions",Gd="@firebase/functions-compat",Yd="@firebase/installations",Qd="@firebase/installations-compat",Xd="@firebase/messaging",Jd="@firebase/messaging-compat",Zd="@firebase/performance",e_="@firebase/performance-compat",t_="@firebase/remote-config",n_="@firebase/remote-config-compat",s_="@firebase/storage",i_="@firebase/storage-compat",r_="@firebase/firestore",o_="@firebase/firestore-compat",l_="firebase",a_="9.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="[DEFAULT]",c_={[tr]:"fire-core",[Bd]:"fire-core-compat",[Hd]:"fire-analytics",[Wd]:"fire-analytics-compat",[$d]:"fire-app-check",[Ud]:"fire-app-check-compat",[Vd]:"fire-auth",[jd]:"fire-auth-compat",[qd]:"fire-rtdb",[zd]:"fire-rtdb-compat",[Kd]:"fire-fn",[Gd]:"fire-fn-compat",[Yd]:"fire-iid",[Qd]:"fire-iid-compat",[Xd]:"fire-fcm",[Jd]:"fire-fcm-compat",[Zd]:"fire-perf",[e_]:"fire-perf-compat",[t_]:"fire-rc",[n_]:"fire-rc-compat",[s_]:"fire-gcs",[i_]:"fire-gcs-compat",[r_]:"fire-fst",[o_]:"fire-fst-compat","fire-js":"fire-js",[l_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=new Map,nr=new Map;function u_(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ds(t){const e=t.name;if(nr.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;nr.set(e,t);for(const n of Os.values())u_(n,t);return!0}function h_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zt=new Za("app","Firebase",f_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=a_;function p_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:rc,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw zt.create("bad-app-name",{appName:String(s)});const i=Os.get(s);if(i){if(Ji(t,i.options)&&Ji(n,i.config))return i;throw zt.create("duplicate-app",{appName:s})}const r=new Cd(s);for(const l of nr.values())r.addComponent(l);const o=new d_(t,n,r);return Os.set(s,o),o}function g_(t=rc){const e=Os.get(t);if(!e)throw zt.create("no-app",{appName:t});return e}function fn(t,e,n){var s;let i=(s=c_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(l.join(" "));return}Ds(new Kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="firebase-heartbeat-database",y_=1,Gn="firebase-heartbeat-store";let xi=null;function oc(){return xi||(xi=Dd(m_,y_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gn)}}}).catch(t=>{throw zt.create("idb-open",{originalErrorMessage:t.message})})),xi}async function v_(t){var e;try{return(await oc()).transaction(Gn).objectStore(Gn).get(lc(t))}catch(n){if(n instanceof is)qt.warn(n.message);else{const s=zt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});qt.warn(s.message)}}}async function ul(t,e){var n;try{const i=(await oc()).transaction(Gn,"readwrite");return await i.objectStore(Gn).put(e,lc(t)),i.done}catch(s){if(s instanceof is)qt.warn(s.message);else{const i=zt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});qt.warn(i.message)}}}function lc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=1024,E_=30*24*60*60*1e3;class b_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new I_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=E_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hl(),{heartbeatsToSend:n,unsentEntries:s}=w_(this._heartbeatsCache.heartbeats),i=Ya(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function hl(){return new Date().toISOString().substring(0,10)}function w_(t,e=C_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),fl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class I_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ld()?ad().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await v_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ul(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ul(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fl(t){return Ya(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t){Ds(new Kn("platform-logger",e=>new Ld(e),"PRIVATE")),Ds(new Kn("heartbeat",e=>new b_(e),"PRIVATE")),fn(tr,cl,t),fn(tr,cl,"esm2017"),fn("fire-js","")}T_("");var S_="firebase",N_="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(S_,N_,"app");const dl="@firebase/database",_l="0.13.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac="";function x_(t){ac=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:zn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ut(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new R_(e)}}catch{}return new A_},Ut=cc("localStorage"),sr=cc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new nc("@firebase/database"),P_=function(){let t=1;return function(){return t++}}(),uc=function(t){const e=gd(t),n=new pd;n.update(e);const s=n.digest();return Br.encodeByteArray(s)},rs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=rs.apply(null,s):typeof s=="object"?e+=_e(s):e+=s,e+=" "}return e};let jt=null,pl=!0;const O_=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(dn.logLevel=X.VERBOSE,jt=dn.log.bind(dn),e&&sr.set("logging_enabled",!0)):typeof t=="function"?jt=t:(jt=null,sr.remove("logging_enabled"))},Ne=function(...t){if(pl===!0&&(pl=!1,jt===null&&sr.get("logging_enabled")===!0&&O_(!0)),jt){const e=rs.apply(null,t);jt(e)}},os=function(t){return function(...e){Ne(t,...e)}},ir=function(...t){const e="FIREBASE INTERNAL ERROR: "+rs(...t);dn.error(e)},Kt=function(...t){const e=`FIREBASE FATAL ERROR: ${rs(...t)}`;throw dn.error(e),new Error(e)},Le=function(...t){const e="FIREBASE WARNING: "+rs(...t);dn.warn(e)},D_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Le("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},M_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},yn="[MIN_NAME]",Gt="[MAX_NAME]",In=function(t,e){if(t===e)return 0;if(t===yn||e===Gt)return-1;if(e===yn||t===Gt)return 1;{const n=gl(t),s=gl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},k_=function(t,e){return t===e?0:t<e?-1:1},Pn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+_e(e))},Ur=function(t){if(typeof t!="object"||t===null)return _e(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=_e(e[s]),n+=":",n+=Ur(t[e[s]]);return n+="}",n},fc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const dc=function(t){b(!hc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},L_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},F_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function B_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const W_=new RegExp("^-?(0*)\\d{1,10}$"),H_=-2147483648,U_=2147483647,gl=function(t){if(W_.test(t)){const e=Number(t);if(e>=H_&&e<=U_)return e}return null},ls=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Le("Exception was thrown by user callback.",n),e},Math.floor(0))}},$_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Bn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Le(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Le(e)}}class rr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="5",_c="v",pc="s",gc="r",mc="f",yc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vc="ls",Cc="p",or="ac",Ec="websocket",bc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ut.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ut.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function z_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function wc(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Ec)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===bc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);z_(t)&&(n.ns=t.namespace);const i=[];return Me(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.counters_={}}incrementCounter(e,n=1){ut(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return sd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri={},Ai={};function Vr(t){const e=t.toString();return Ri[e]||(Ri[e]=new K_),Ri[e]}function G_(t,e){const n=t.toString();return Ai[n]||(Ai[n]=e()),Ai[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ls(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="start",Q_="close",X_="pLPCommand",J_="pRTLPCB",Ic="id",Tc="pw",Sc="ser",Z_="cb",ep="seg",tp="ts",np="d",sp="dframe",Nc=1870,xc=30,ip=Nc-xc,rp=25e3,op=3e4;class on{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=os(e),this.stats_=Vr(n),this.urlFn=a=>(this.appCheckToken&&(a[or]=this.appCheckToken),wc(n,bc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Y_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(op)),M_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jr((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ml)this.id=l,this.password=a;else if(o===Q_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ml]="t",s[Sc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Z_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[_c]=$r,this.transportSessionId&&(s[pc]=this.transportSessionId),this.lastSessionId&&(s[vc]=this.lastSessionId),this.applicationId&&(s[Cc]=this.applicationId),this.appCheckToken&&(s[or]=this.appCheckToken),typeof location<"u"&&location.hostname&&yc.test(location.hostname)&&(s[gc]=mc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){on.forceAllow_=!0}static forceDisallow(){on.forceDisallow_=!0}static isAvailable(){return on.forceAllow_?!0:!on.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!L_()&&!F_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ga(n),i=fc(s,ip);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[sp]="t",s[Ic]=e,s[Tc]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=_e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class jr{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=P_(),window[X_+this.uniqueCallbackIdentifier]=e,window[J_+this.uniqueCallbackIdentifier]=n,this.myIFrame=jr.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ne("frame writing exception"),l.stack&&Ne(l.stack),Ne(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ic]=this.myID,e[Tc]=this.myPW,e[Sc]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xc+s.length<=Nc;){const o=this.pendingSegs.shift();s=s+"&"+ep+i+"="+o.seg+"&"+tp+i+"="+o.ts+"&"+np+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(rp)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=16384,ap=45e3;let Ms=null;typeof MozWebSocket<"u"?Ms=MozWebSocket:typeof WebSocket<"u"&&(Ms=WebSocket);class Ve{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=os(this.connId),this.stats_=Vr(n),this.connURL=Ve.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[_c]=$r,typeof location<"u"&&location.hostname&&yc.test(location.hostname)&&(o[gc]=mc),n&&(o[pc]=n),s&&(o[vc]=s),i&&(o[or]=i),r&&(o[Cc]=r),wc(e,Ec,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ut.set("previous_websocket_failure",!0);try{let s;Ja(),this.mySock=new Ms(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ve.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ms!==null&&!Ve.forceDisallow_}static previouslyFailed(){return Ut.isInMemoryStorage||Ut.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ut.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=zn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=fc(n,lp);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ap))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ve.responsesRequiredToBeHealthy=2;Ve.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[on,Ve]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ve&&Ve.isAvailable();let s=n&&!Ve.previouslyFailed();if(e.webSocketOnly&&(n||Le("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ve];else{const i=this.transports_=[];for(const r of Yn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Yn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=6e4,up=5e3,hp=10*1024,fp=100*1024,Pi="t",yl="d",dp="s",vl="r",_p="e",Cl="o",El="a",bl="n",wl="p",pp="h";class gp{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=os("c:"+this.id+":"),this.transportManager_=new Yn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Bn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>fp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>hp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pi in e){const n=e[Pi];n===El?this.upgradeIfSecondaryHealthy_():n===vl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Cl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Pn("t",e),s=Pn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:El,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:bl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Pn("t",e),s=Pn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Pn(Pi,e);if(yl in e){const s=e[yl];if(n===pp)this.onHandshake_(s);else if(n===bl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===dp?this.onConnectionShutdown_(s):n===vl?this.onReset_(s):n===_p?ir("Server Error: "+s):n===Cl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ir("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),$r!==s&&Le("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Bn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(cp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Bn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(up))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ut.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends Ac{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ks}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=32,Tl=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new G("")}function H(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function St(t){return t.pieces_.length-t.pieceNum_}function J(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function Pc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mp(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Oc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Dc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function pe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof G)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new G(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function Pe(t,e){const n=H(t),s=H(e);if(n===null)return e;if(n===s)return Pe(J(t),J(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Mc(t,e){if(St(t)!==St(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ze(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(St(t)>St(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class yp{constructor(e,n){this.errorPrefix_=n,this.parts_=Oc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ii(this.parts_[s]);kc(this)}}function vp(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ii(e),kc(t)}function Cp(t){const e=t.parts_.pop();t.byteLength_-=ii(e),t.parts_.length>0&&(t.byteLength_-=1)}function kc(t){if(t.byteLength_>Tl)throw new Error(t.errorPrefix_+"has a key path longer than "+Tl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Il)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Il+") or object contains a cycle "+Lt(t))}function Lt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Ac{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new qr}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=1e3,Ep=60*5*1e3,Sl=30*1e3,bp=1.3,wp=3e4,Ip="server_kill",Nl=3;class lt extends Rc{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=lt.nextPersistentConnectionId_++,this.log_=os("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=On,this.maxReconnectDelay_=Ep,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ja())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ks.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(_e(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Wr,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;lt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ut(e,"w")){const s=mn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Le(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=fd(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_e(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ir("Unrecognized action received from server: "+_e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=On,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=On,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wp&&(this.reconnectDelay_=On),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bp)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+lt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new gp(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Le(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ip)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Le(h),a())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],il(this.interruptReasons_)&&(this.reconnectDelay_=On,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ur(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new G(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Nl&&(this.reconnectDelay_=Sl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Nl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ac.replace(/\./g,"-")]=1,Xa()?e["framework.cordova"]=1:od()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ks.getInstance().currentlyOnline();return il(this.interruptReasons_)&&e}}lt.nextPersistentConnectionId_=0;lt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new F(yn,e),i=new F(yn,n);return this.compare(s,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys;class Lc extends oi{static get __EMPTY_NODE(){return ys}static set __EMPTY_NODE(e){ys=e}compare(e,n){return In(e.name,n.name)}isDefinedOn(e){throw wn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Gt,ys)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,ys)}toString(){return".key"}}const _n=new Lc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:me.RED,this.left=i!=null?i:De.EMPTY_NODE,this.right=r!=null?r:De.EMPTY_NODE}copy(e,n,s,i,r){return new me(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return De.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class Tp{copy(e,n,s,i,r){return this}insert(e,n,s){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class De{constructor(e,n=De.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new De(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new vs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new vs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new vs(this.root_,null,this.comparator_,!0,e)}}De.EMPTY_NODE=new Tp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t,e){return In(t.name,e.name)}function zr(t,e){return In(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr;function Np(t){lr=t}const Fc=function(t){return typeof t=="number"?"number:"+dc(t):"string:"+t},Bc=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ut(e,".sv"),"Priority must be a string or number.")}else b(t===lr||t.isEmpty(),"priority of unexpected type.");b(t===lr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xl;class ge{constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bc(this.priorityNode_)}static set __childrenNodeConstructor(e){xl=e}static get __childrenNodeConstructor(){return xl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:H(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=H(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||St(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(J(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Fc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=dc(this.value_):e+=this.value_,this.lazyHash_=uc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),r=ge.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wc,Hc;function xp(t){Wc=t}function Rp(t){Hc=t}class Ap extends oi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?In(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Gt,new ge("[PRIORITY-POST]",Hc))}makePost(e,n){const s=Wc(e);return new F(n,new ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const he=new Ap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=Math.log(2);class Op{constructor(e){const n=r=>parseInt(Math.log(r)/Pp,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ls=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new me(d,h.node,me.BLACK,null,null);{const g=parseInt(u/2,10)+a,C=i(a,g),S=i(g+1,c);return h=t[g],d=n?n(h):h,new me(d,h.node,me.BLACK,C,S)}},r=function(a){let c=null,u=null,h=t.length;const d=function(C,S){const x=h-C,k=h;h-=C;const fe=i(x+1,k),Y=t[x],Z=n?n(Y):Y;g(new me(Z,Y.node,S,null,fe))},g=function(C){c?(c.left=C,c=C):(u=C,c=C)};for(let C=0;C<a.count;++C){const S=a.nextBitIsOne(),x=Math.pow(2,a.count-(C+1));S?d(x,me.BLACK):(d(x,me.BLACK),d(x,me.RED))}return u},o=new Op(t.length),l=r(o);return new De(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi;const sn={};class ot{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(sn&&he,"ChildrenNode.ts has not been loaded"),Oi=Oi||new ot({".priority":sn},{".priority":he}),Oi}get(e){const n=mn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof De?n:null}hasIndex(e){return ut(this.indexSet_,e.toString())}addIndex(e,n){b(e!==_n,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(F.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ls(s,e.getCompare()):l=sn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new ot(u,c)}addToIndexes(e,n){const s=Ps(this.indexes_,(i,r)=>{const o=mn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===sn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ls(l,o.getCompare())}else return sn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new ot(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ps(this.indexes_,i=>{if(i===sn)return i;{const r=n.get(e.name);return r?i.remove(new F(e.name,r)):i}});return new ot(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dn;class O{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Bc(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Dn||(Dn=new O(new De(zr),null,ot.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Dn}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Dn:n}}getChild(e){const n=H(e);return n===null?this:this.getImmediateChild(n).getChild(J(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new F(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Dn:this.priorityNode_;return new O(i,o,r)}}updateChild(e,n){const s=H(e);if(s===null)return n;{b(H(e)!==".priority"||St(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(J(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(he,(o,l)=>{n[o]=l.val(e),s++,r&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Fc(this.getPriority().val())+":"),this.forEachChild(he,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":uc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new F(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===as?-1:0}withIndex(e){if(e===_n||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===_n||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(he),i=n.getIterator(he);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===_n?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Dp extends O{constructor(){super(new De(zr),O.EMPTY_NODE,ot.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const as=new Dp;Object.defineProperties(F,{MIN:{value:new F(yn,O.EMPTY_NODE)},MAX:{value:new F(Gt,as)}});Lc.__EMPTY_NODE=O.EMPTY_NODE;ge.__childrenNodeConstructor=O;Np(as);Rp(as);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=!0;function be(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,be(e))}if(!(t instanceof Array)&&Mp){const n=[];let s=!1;if(Me(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=be(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return O.EMPTY_NODE;const r=Ls(n,Sp,o=>o.name,zr);if(s){const o=Ls(n,he.getCompare());return new O(r,be(e),new ot({".priority":o},{".priority":he}))}else return new O(r,be(e),ot.Default)}else{let n=O.EMPTY_NODE;return Me(t,(s,i)=>{if(ut(t,s)&&s.substring(0,1)!=="."){const r=be(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(be(e))}}xp(be);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp extends oi{constructor(e){super(),this.indexPath_=e,b(!B(e)&&H(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?In(e.name,n.name):r}makePost(e,n){const s=be(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,s);return new F(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,as);return new F(Gt,e)}toString(){return Oc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp extends oi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?In(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const s=be(e);return new F(n,s)}toString(){return".value"}}const Fp=new Lp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t){return{type:"value",snapshotNode:t}}function vn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Qn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Xn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Bp(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Qn(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(vn(n,s)):o.trackChildChange(Xn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(he,(i,r)=>{n.hasChild(i)||s.trackChildChange(Qn(i,r))}),n.isLeafNode()||n.forEachChild(he,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Xn(i,r,o))}else s.trackChildChange(vn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.indexedFilter_=new Kr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Jn.getStartPost_(e),this.endPost_=Jn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new F(n,s))||(s=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const r=this;return n.forEachChild(he,(o,l)=>{r.matches(new F(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.rangedFilter_=new Jn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new F(n,s))||(s=O.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(d,g)=>h(g,d)}else a=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,u=!1;for(;a.hasNext();){const h=a.getNext();!u&&l(r,h)<=0&&(u=!0),u&&c<this.limit_&&l(h,o)<=0?c++:i=i.updateImmediateChild(h.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new F(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(Xn(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Qn(n,h));const S=l.updateImmediateChild(n,O.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(vn(d.name,d.node)),S.updateImmediateChild(d.name,d.node)):S}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Qn(c.name,c.node)),r.trackChildChange(vn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new Gr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Hp(t){return t.loadsAllData()?new Kr(t.getIndex()):t.hasLimit()?new Wp(t):new Jn(t)}function Rl(t){const e={};if(t.isDefault())return e;let n;return t.index_===he?n="$priority":t.index_===Fp?n="$value":t.index_===_n?n="$key":(b(t.index_ instanceof kp,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=_e(n),t.startSet_&&(e.startAt=_e(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+_e(t.indexStartName_))),t.endSet_&&(e.endAt=_e(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+_e(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Al(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==he&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends Rc{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=os("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Fs.getListenId_(e,s),l={};this.listens_[o]=l;const a=Rl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),mn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Fs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Rl(e._queryParams),s=e._path.toString(),i=new Wr;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_d(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=zn(l.responseText)}catch{Le("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Le("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(){return{value:null,children:new Map}}function $c(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=H(e);t.children.has(s)||t.children.set(s,Bs());const i=t.children.get(s);e=J(e),$c(i,e,n)}}function ar(t,e,n){t.value!==null?n(e,t.value):$p(t,(s,i)=>{const r=new G(e.toString()+"/"+s);ar(i,r,n)})}function $p(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=10*1e3,jp=30*1e3,qp=5*60*1e3;class zp{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Vp(e);const s=Pl+(jp-Pl)*Math.random();Bn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Me(e,(i,r)=>{r>0&&ut(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Bn(this.reportStats_.bind(this),Math.floor(Math.random()*2*qp))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ke||(Ke={}));function Vc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ke.ACK_USER_WRITE,this.source=Vc()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new Ws(V(),n,this.revert)}}else return b(H(this.path)===e,"operationForChild called for unrelated child."),new Ws(J(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){this.source=e,this.path=n,this.type=Ke.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new Zn(this.source,V()):new Zn(this.source,J(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ke.OVERWRITE}operationForChild(e){return B(this.path)?new Yt(this.source,V(),this.snap.getImmediateChild(e)):new Yt(this.source,J(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ke.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new Yt(this.source,V(),n.value):new es(this.source,V(),n)}else return b(H(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new es(this.source,J(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=H(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Gp(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Bp(o.childName,o.snapshotNode))}),Mn(t,i,"child_removed",e,s,n),Mn(t,i,"child_added",e,s,n),Mn(t,i,"child_moved",r,s,n),Mn(t,i,"child_changed",e,s,n),Mn(t,i,"value",e,s,n),i}function Mn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Qp(t,l,a)),o.forEach(l=>{const a=Yp(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Yp(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Qp(t,e,n){if(e.childName==null||n.childName==null)throw wn("Should only compare child_ events.");const s=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t,e){return{eventCache:t,serverCache:e}}function Wn(t,e,n,s){return li(new Nt(e,n,s),t.serverCache)}function jc(t,e,n,s){return li(t.eventCache,new Nt(e,n,s))}function Hs(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Qt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di;const Xp=()=>(Di||(Di=new De(k_)),Di);class ne{constructor(e,n=Xp()){this.value=e,this.children=n}static fromObject(e){let n=new ne(null);return Me(e,(s,i)=>{n=n.set(new G(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(B(e))return null;{const s=H(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(J(e),n);return r!=null?{path:pe(new G(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=H(e),s=this.children.get(n);return s!==null?s.subtree(J(e)):new ne(null)}}set(e,n){if(B(e))return new ne(n,this.children);{const s=H(e),r=(this.children.get(s)||new ne(null)).set(J(e),n),o=this.children.insert(s,r);return new ne(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new ne(null):new ne(null,this.children);{const n=H(e),s=this.children.get(n);if(s){const i=s.remove(J(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ne(null):new ne(this.value,r)}else return this}}get(e){if(B(e))return this.value;{const n=H(e),s=this.children.get(n);return s?s.get(J(e)):null}}setTree(e,n){if(B(e))return n;{const s=H(e),r=(this.children.get(s)||new ne(null)).setTree(J(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ne(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(pe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(B(e))return null;{const r=H(e),o=this.children.get(r);return o?o.findOnPath_(J(e),pe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,s){if(B(e))return this;{this.value&&s(n,this.value);const i=H(e),r=this.children.get(i);return r?r.foreachOnPath_(J(e),pe(n,i),s):new ne(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.writeTree_=e}static empty(){return new Qe(new ne(null))}}function Hn(t,e,n){if(B(e))return new Qe(new ne(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Pe(i,e);return r=r.updateChild(o,n),new Qe(t.writeTree_.set(i,r))}else{const i=new ne(n),r=t.writeTree_.setTree(e,i);return new Qe(r)}}}function Ol(t,e,n){let s=t;return Me(n,(i,r)=>{s=Hn(s,pe(e,i),r)}),s}function Dl(t,e){if(B(e))return Qe.empty();{const n=t.writeTree_.setTree(e,new ne(null));return new Qe(n)}}function cr(t,e){return Jt(t,e)!=null}function Jt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Pe(n.path,e)):null}function Ml(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(he,(s,i)=>{e.push(new F(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new F(s,i.value))}),e}function bt(t,e){if(B(e))return t;{const n=Jt(t,e);return n!=null?new Qe(new ne(n)):new Qe(t.writeTree_.subtree(e))}}function ur(t){return t.writeTree_.isEmpty()}function Cn(t,e){return qc(V(),t.writeTree_,e)}function qc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=qc(pe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(pe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t,e){return Yc(e,t)}function Jp(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Hn(t.visibleWrites,e,n)),t.lastWriteId=s}function Zp(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function eg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&tg(l,s.path)?i=!1:ze(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return ng(t),!0;if(s.snap)t.visibleWrites=Dl(t.visibleWrites,s.path);else{const l=s.children;Me(l,a=>{t.visibleWrites=Dl(t.visibleWrites,pe(s.path,a))})}return!0}else return!1}function tg(t,e){if(t.snap)return ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ze(pe(t.path,n),e))return!0;return!1}function ng(t){t.visibleWrites=zc(t.allWrites,sg,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sg(t){return t.visible}function zc(t,e,n){let s=Qe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)ze(n,o)?(l=Pe(n,o),s=Hn(s,l,r.snap)):ze(o,n)&&(l=Pe(o,n),s=Hn(s,V(),r.snap.getChild(l)));else if(r.children){if(ze(n,o))l=Pe(n,o),s=Ol(s,l,r.children);else if(ze(o,n))if(l=Pe(o,n),B(l))s=Ol(s,V(),r.children);else{const a=mn(r.children,H(l));if(a){const c=a.getChild(J(l));s=Hn(s,V(),c)}}}else throw wn("WriteRecord should have .snap or .children")}}return s}function Kc(t,e,n,s,i){if(!s&&!i){const r=Jt(t.visibleWrites,e);if(r!=null)return r;{const o=bt(t.visibleWrites,e);if(ur(o))return n;if(n==null&&!cr(o,V()))return null;{const l=n||O.EMPTY_NODE;return Cn(o,l)}}}else{const r=bt(t.visibleWrites,e);if(!i&&ur(r))return n;if(!i&&n==null&&!cr(r,V()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ze(c.path,e)||ze(e,c.path))},l=zc(t.allWrites,o,e),a=n||O.EMPTY_NODE;return Cn(l,a)}}}function ig(t,e,n){let s=O.EMPTY_NODE;const i=Jt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(he,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=bt(t.visibleWrites,e);return n.forEachChild(he,(o,l)=>{const a=Cn(bt(r,new G(o)),l);s=s.updateImmediateChild(o,a)}),Ml(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=bt(t.visibleWrites,e);return Ml(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function rg(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=pe(e,n);if(cr(t.visibleWrites,r))return null;{const o=bt(t.visibleWrites,r);return ur(o)?i.getChild(n):Cn(o,i.getChild(n))}}function og(t,e,n,s){const i=pe(e,n),r=Jt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=bt(t.visibleWrites,i);return Cn(o,s.getNode().getImmediateChild(n))}else return null}function lg(t,e){return Jt(t.visibleWrites,e)}function ag(t,e,n,s,i,r,o){let l;const a=bt(t.visibleWrites,e),c=Jt(a,V());if(c!=null)l=c;else if(n!=null)l=Cn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function cg(){return{visibleWrites:Qe.empty(),allWrites:[],lastWriteId:-1}}function Us(t,e,n,s){return Kc(t.writeTree,t.treePath,e,n,s)}function Xr(t,e){return ig(t.writeTree,t.treePath,e)}function kl(t,e,n,s){return rg(t.writeTree,t.treePath,e,n,s)}function $s(t,e){return lg(t.writeTree,pe(t.treePath,e))}function ug(t,e,n,s,i,r){return ag(t.writeTree,t.treePath,e,n,s,i,r)}function Jr(t,e,n){return og(t.writeTree,t.treePath,e,n)}function Gc(t,e){return Yc(pe(t.treePath,e),t.writeTree)}function Yc(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Xn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Qn(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,vn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Xn(s,e.snapshotNode,i.oldSnap));else throw wn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Qc=new fg;class Zr{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Nt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Jr(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qt(this.viewCache_),r=ug(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t){return{filter:t}}function _g(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function pg(t,e,n,s,i){const r=new hg;let o,l;if(n.type===Ke.OVERWRITE){const c=n;c.source.fromUser?o=hr(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!B(c.path),o=Vs(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Ke.MERGE){const c=n;c.source.fromUser?o=mg(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=fr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Ke.ACK_USER_WRITE){const c=n;c.revert?o=Cg(t,e,c.path,s,i,r):o=yg(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ke.LISTEN_COMPLETE)o=vg(t,e,n.path,s,r);else throw wn("Unknown operation type: "+n.type);const a=r.getChanges();return gg(e,o,a),{viewCache:o,changes:a}}function gg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Hs(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Uc(Hs(e)))}}function Xc(t,e,n,s,i,r){const o=e.eventCache;if($s(s,n)!=null)return e;{let l,a;if(B(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Qt(e),u=c instanceof O?c:O.EMPTY_NODE,h=Xr(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Us(s,Qt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=H(n);if(c===".priority"){b(St(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=kl(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=J(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=kl(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Jr(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Wn(e,l,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function Vs(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(B(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=H(n);if(!a.isCompleteForPath(n)&&St(n)>1)return e;const C=J(n),x=a.getNode().getImmediateChild(g).updateChild(C,s);g===".priority"?c=u.updatePriority(a.getNode(),x):c=u.updateChild(a.getNode(),g,x,C,Qc,null)}const h=jc(e,c,a.isFullyInitialized()||B(n),u.filtersNodes()),d=new Zr(i,h,r);return Xc(t,h,n,i,d,l)}function hr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Zr(i,e,r);if(B(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Wn(e,c,!0,t.filter.filtersNodes());else{const h=H(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Wn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=J(n),g=l.getNode().getImmediateChild(h);let C;if(B(d))C=s;else{const S=u.getCompleteChild(h);S!=null?Pc(d)===".priority"&&S.getChild(Dc(d)).isEmpty()?C=S:C=S.updateChild(d,s):C=O.EMPTY_NODE}if(g.equals(C))a=e;else{const S=t.filter.updateChild(l.getNode(),h,C,d,u,o);a=Wn(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ll(t,e){return t.eventCache.isCompleteForChild(e)}function mg(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=pe(n,a);Ll(e,H(u))&&(l=hr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=pe(n,a);Ll(e,H(u))||(l=hr(t,l,u,c,i,r,o))}),l}function Fl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function fr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;B(n)?c=s:c=new ne(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),C=Fl(t,g,d);a=Vs(t,a,new G(h),C,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const C=e.serverCache.getNode().getImmediateChild(h),S=Fl(t,C,d);a=Vs(t,a,new G(h),S,i,r,o,l)}}),a}function yg(t,e,n,s,i,r,o){if($s(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Vs(t,e,n,a.getNode().getChild(n),i,r,l,o);if(B(n)){let c=new ne(null);return a.getNode().forEachChild(_n,(u,h)=>{c=c.set(new G(u),h)}),fr(t,e,n,c,i,r,l,o)}else return e}else{let c=new ne(null);return s.foreach((u,h)=>{const d=pe(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),fr(t,e,n,c,i,r,l,o)}}function vg(t,e,n,s,i){const r=e.serverCache,o=jc(e,r.getNode(),r.isFullyInitialized()||B(n),r.isFiltered());return Xc(t,o,n,s,Qc,i)}function Cg(t,e,n,s,i,r){let o;if($s(s,n)!=null)return e;{const l=new Zr(s,e,i),a=e.eventCache.getNode();let c;if(B(n)||H(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Us(s,Qt(e));else{const h=e.serverCache.getNode();b(h instanceof O,"serverChildren would be complete if leaf node"),u=Xr(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=H(n);let h=Jr(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,J(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,O.EMPTY_NODE,J(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Us(s,Qt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||$s(s,V())!=null,Wn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Kr(s.getIndex()),r=Hp(s);this.processor_=dg(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(O.EMPTY_NODE,l.getNode(),null),u=new Nt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Nt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=li(h,u),this.eventGenerator_=new Kp(this.query_)}get query(){return this.query_}}function bg(t){return t.viewCache_.serverCache.getNode()}function wg(t){return Hs(t.viewCache_)}function Ig(t,e){const n=Qt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(H(e)).isEmpty())?n.getChild(e):null}function Bl(t){return t.eventRegistrations_.length===0}function Tg(t,e){t.eventRegistrations_.push(e)}function Wl(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Hl(t,e,n,s){e.type===Ke.MERGE&&e.source.queryId!==null&&(b(Qt(t.viewCache_),"We should always have a full cache before handling merges"),b(Hs(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=pg(t.processor_,i,e,n,s);return _g(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Jc(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Sg(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(he,(r,o)=>{s.push(vn(r,o))}),n.isFullyInitialized()&&s.push(Uc(n.getNode())),Jc(t,s,n.getNode(),e)}function Jc(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Gp(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js;class Zc{constructor(){this.views=new Map}}function Ng(t){b(!js,"__referenceConstructor has already been defined"),js=t}function xg(){return b(js,"Reference.ts has not been loaded"),js}function Rg(t){return t.views.size===0}function eo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Hl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Hl(o,e,n,s));return r}}function eu(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Us(n,i?s:null),a=!1;l?a=!0:s instanceof O?(l=Xr(n,s),a=!1):(l=O.EMPTY_NODE,a=!1);const c=li(new Nt(l,a,!1),new Nt(s,i,!1));return new Eg(e,c)}return o}function Ag(t,e,n,s,i,r){const o=eu(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Tg(o,n),Sg(o,n)}function Pg(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=xt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Wl(c,n,s)),Bl(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Wl(a,n,s)),Bl(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!xt(t)&&r.push(new(xg())(e._repo,e._path)),{removed:r,events:o}}function tu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function wt(t,e){let n=null;for(const s of t.views.values())n=n||Ig(s,e);return n}function nu(t,e){if(e._queryParams.loadsAllData())return ci(t);{const s=e._queryIdentifier;return t.views.get(s)}}function su(t,e){return nu(t,e)!=null}function xt(t){return ci(t)!=null}function ci(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs;function Og(t){b(!qs,"__referenceConstructor has already been defined"),qs=t}function Dg(){return b(qs,"Reference.ts has not been loaded"),qs}let Mg=1;class Ul{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ne(null),this.pendingWriteTree_=cg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function kg(t,e,n,s,i){return Jp(t.pendingWriteTree_,e,n,s,i),i?us(t,new Yt(Vc(),e,n)):[]}function ln(t,e,n=!1){const s=Zp(t.pendingWriteTree_,e);if(eg(t.pendingWriteTree_,e)){let r=new ne(null);return s.snap!=null?r=r.set(V(),!0):Me(s.children,o=>{r=r.set(new G(o),!0)}),us(t,new Ws(s.path,r,n))}else return[]}function cs(t,e,n){return us(t,new Yt(Yr(),e,n))}function Lg(t,e,n){const s=ne.fromObject(n);return us(t,new es(Yr(),e,s))}function Fg(t,e){return us(t,new Zn(Yr(),e))}function Bg(t,e,n){const s=to(t,n);if(s){const i=no(s),r=i.path,o=i.queryId,l=Pe(r,e),a=new Zn(Qr(o),l);return so(t,r,a)}else return[]}function iu(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||su(o,e))){const a=Pg(o,e,n,s);Rg(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>xt(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=$g(d);for(let C=0;C<g.length;++C){const S=g[C],x=S.query,k=cu(t,S);t.listenProvider_.startListening(Un(x),ts(t,x),k.hashFn,k.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Un(e),null):c.forEach(d=>{const g=t.queryToTagMap.get(ui(d));t.listenProvider_.stopListening(Un(d),g)}))}Vg(t,c)}return l}function ru(t,e,n,s){const i=to(t,s);if(i!=null){const r=no(i),o=r.path,l=r.queryId,a=Pe(o,e),c=new Yt(Qr(l),a,n);return so(t,o,c)}else return[]}function Wg(t,e,n,s){const i=to(t,s);if(i){const r=no(i),o=r.path,l=r.queryId,a=Pe(o,e),c=ne.fromObject(n),u=new es(Qr(l),a,c);return so(t,o,u)}else return[]}function Hg(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const C=Pe(d,i);r=r||wt(g,C),o=o||xt(g)});let l=t.syncPointTree_.get(i);l?(o=o||xt(l),r=r||wt(l,V())):(l=new Zc,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,C)=>{const S=wt(C,V());S&&(r=r.updateImmediateChild(g,S))}));const c=su(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=ui(e);b(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=jg();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=ai(t.pendingWriteTree_,i);let h=Ag(l,e,n,u,r,a);if(!c&&!o&&!s){const d=nu(l,e);h=h.concat(qg(t,e,d))}return h}function ou(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Pe(o,e),c=wt(l,a);if(c)return c});return Kc(i,e,r,n,!0)}function Ug(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Pe(c,n);s=s||wt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||wt(i,V()):(i=new Zc,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Nt(s,!0,!1):null,l=ai(t.pendingWriteTree_,e._path),a=eu(i,e,l,r?o.getNode():O.EMPTY_NODE,r);return wg(a)}function us(t,e){return lu(e,t.syncPointTree_,null,ai(t.pendingWriteTree_,V()))}function lu(t,e,n,s){if(B(t.path))return au(t,e,n,s);{const i=e.get(V());n==null&&i!=null&&(n=wt(i,V()));let r=[];const o=H(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Gc(s,o);r=r.concat(lu(l,a,c,u))}return i&&(r=r.concat(eo(i,t,s,n))),r}}function au(t,e,n,s){const i=e.get(V());n==null&&i!=null&&(n=wt(i,V()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Gc(s,o),u=t.operationForChild(o);u&&(r=r.concat(au(u,l,a,c)))}),i&&(r=r.concat(eo(i,t,s,n))),r}function cu(t,e){const n=e.query,s=ts(t,n);return{hashFn:()=>(bg(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Bg(t,n._path,s):Fg(t,n._path);{const r=B_(i,n);return iu(t,n,null,r)}}}}function ts(t,e){const n=ui(e);return t.queryToTagMap.get(n)}function ui(t){return t._path.toString()+"$"+t._queryIdentifier}function to(t,e){return t.tagToQueryMap.get(e)}function no(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function so(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=ai(t.pendingWriteTree_,e);return eo(s,n,i,null)}function $g(t){return t.fold((e,n,s)=>{if(n&&xt(n))return[ci(n)];{let i=[];return n&&(i=tu(n)),Me(s,(r,o)=>{i=i.concat(o)}),i}})}function Un(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Dg())(t._repo,t._path):t}function Vg(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ui(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function jg(){return Mg++}function qg(t,e,n){const s=e._path,i=ts(t,e),r=cu(t,n),o=t.listenProvider_.startListening(Un(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!xt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!B(c)&&u&&xt(u))return[ci(u).query];{let d=[];return u&&(d=d.concat(tu(u).map(g=>g.query))),Me(h,(g,C)=>{d=d.concat(C)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Un(u),ts(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new io(n)}node(){return this.node_}}class ro{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new ro(this.syncTree_,n)}node(){return ou(this.syncTree_,this.path_)}}const zg=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},$l=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Kg(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Gg(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Kg=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},Gg=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Yg=function(t,e,n,s){return oo(e,new ro(n,t),s)},Qg=function(t,e,n){return oo(t,new io(e),n)};function oo(t,e,n){const s=t.getPriority().val(),i=$l(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=$l(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ge(l,be(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ge(i))),o.forEachChild(he,(l,a)=>{const c=oo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ao(t,e){let n=e instanceof G?e:new G(e),s=t,i=H(n);for(;i!==null;){const r=mn(s.node.children,i)||{children:{},childCount:0};s=new lo(i,s,r),n=J(n),i=H(n)}return s}function Tn(t){return t.node.value}function uu(t,e){t.node.value=e,dr(t)}function hu(t){return t.node.childCount>0}function Xg(t){return Tn(t)===void 0&&!hu(t)}function hi(t,e){Me(t.node.children,(n,s)=>{e(new lo(n,t,s))})}function fu(t,e,n,s){n&&!s&&e(t),hi(t,i=>{fu(i,e,!0,s)}),n&&s&&e(t)}function Jg(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function hs(t){return new G(t.parent===null?t.name:hs(t.parent)+"/"+t.name)}function dr(t){t.parent!==null&&Zg(t.parent,t.name,t)}function Zg(t,e,n){const s=Xg(n),i=ut(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,dr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,dr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=/[\[\].#$\/\u0000-\u001F\u007F]/,tm=/[\[\].#$\u0000-\u001F\u007F]/,Mi=10*1024*1024,du=function(t){return typeof t=="string"&&t.length!==0&&!em.test(t)},_u=function(t){return typeof t=="string"&&t.length!==0&&!tm.test(t)},nm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),_u(t)},pu=function(t,e,n){const s=n instanceof G?new yp(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Lt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Lt(s)+" with contents = "+e.toString());if(hc(e))throw new Error(t+"contains "+e.toString()+" "+Lt(s));if(typeof e=="string"&&e.length>Mi/3&&ii(e)>Mi)throw new Error(t+"contains a string greater than "+Mi+" utf8 bytes "+Lt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Me(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!du(o)))throw new Error(t+" contains an invalid key ("+o+") "+Lt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vp(s,o),pu(t,l,s),Cp(s)}),i&&r)throw new Error(t+' contains ".value" child '+Lt(s)+" in addition to actual children.")}},gu=function(t,e,n,s){if(!(s&&n===void 0)&&!_u(n))throw new Error(tc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gu(t,e,n,s)},im=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!du(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!nm(n))throw new Error(tc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function om(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Mc(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Rt(t,e,n){om(t,n),lm(t,s=>ze(s,e)||ze(e,s))}function lm(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(am(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function am(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();jt&&Ne("event: "+n.toString()),ls(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="repo_interrupt",um=25;class hm{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bs(),this.transactionQueueTree_=new lo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fm(t,e,n){if(t.stats_=Vr(t.repoInfo_),t.forceRestClient_||$_())t.server_=new Fs(t.repoInfo_,(s,i,r,o)=>{Vl(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jl(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_e(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new lt(t.repoInfo_,e,(s,i,r,o)=>{Vl(t,s,i,r,o)},s=>{jl(t,s)},s=>{_m(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=G_(t.repoInfo_,()=>new zp(t.stats_,t.server_)),t.infoData_=new Up,t.infoSyncTree_=new Ul({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=cs(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),co(t,"connected",!1),t.serverSyncTree_=new Ul({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Rt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function dm(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function mu(t){return zg({timestamp:dm(t)})}function Vl(t,e,n,s,i){t.dataUpdateCount++;const r=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Ps(n,c=>be(c));o=Wg(t.serverSyncTree_,r,a,i)}else{const a=be(n);o=ru(t.serverSyncTree_,r,a,i)}else if(s){const a=Ps(n,c=>be(c));o=Lg(t.serverSyncTree_,r,a)}else{const a=be(n);o=cs(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=fo(t,r)),Rt(t.eventQueue_,l,o)}function jl(t,e){co(t,"connected",e),e===!1&&mm(t)}function _m(t,e){Me(e,(n,s)=>{co(t,n,s)})}function co(t,e,n){const s=new G("/.info/"+e),i=be(n);t.infoData_.updateSnapshot(s,i);const r=cs(t.infoSyncTree_,s,i);Rt(t.eventQueue_,s,r)}function pm(t){return t.nextWriteId_++}function gm(t,e,n){const s=Ug(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=be(i).withIndex(e._queryParams.getIndex());Hg(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=cs(t.serverSyncTree_,e._path,r);else{const l=ts(t.serverSyncTree_,e);o=ru(t.serverSyncTree_,e._path,r,l)}return Rt(t.eventQueue_,e._path,o),iu(t.serverSyncTree_,e,n,null,!0),r},i=>(uo(t,"get for query "+_e(e)+" failed: "+i),Promise.reject(new Error(i))))}function mm(t){uo(t,"onDisconnectEvents");const e=mu(t),n=Bs();ar(t.onDisconnect_,V(),(i,r)=>{const o=Yg(i,r,t.serverSyncTree_,e);$c(n,i,o)});let s=[];ar(n,V(),(i,r)=>{s=s.concat(cs(t.serverSyncTree_,i,r));const o=Em(t,i);fo(t,o)}),t.onDisconnect_=Bs(),Rt(t.eventQueue_,V(),s)}function ym(t){t.persistentConnection_&&t.persistentConnection_.interrupt(cm)}function uo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function yu(t,e,n){return ou(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function ho(t,e=t.transactionQueueTree_){if(e||fi(t,e),Tn(e)){const n=Cu(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&vm(t,hs(e),n)}else hu(e)&&hi(e,n=>{ho(t,n)})}function vm(t,e,n){const s=n.map(c=>c.currentWriteId),i=yu(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Pe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{uo(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(ln(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();fi(t,ao(t.transactionQueueTree_,e)),ho(t,t.transactionQueueTree_),Rt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)ls(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Le("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}fo(t,e)}},o)}function fo(t,e){const n=vu(t,e),s=hs(n),i=Cu(t,n);return Cm(t,i,s),s}function Cm(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Pe(n,a.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(ln(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=um)u=!0,h="maxretry",i=i.concat(ln(t.serverSyncTree_,a.currentWriteId,!0));else{const d=yu(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){pu("transaction failed: Data returned ",g,a.path);let C=be(g);typeof g=="object"&&g!=null&&ut(g,".priority")||(C=C.updatePriority(d.getPriority()));const x=a.currentWriteId,k=mu(t),fe=Qg(C,d,k);a.currentOutputSnapshotRaw=C,a.currentOutputSnapshotResolved=fe,a.currentWriteId=pm(t),o.splice(o.indexOf(x),1),i=i.concat(kg(t.serverSyncTree_,a.path,fe,a.currentWriteId,a.applyLocally)),i=i.concat(ln(t.serverSyncTree_,x,!0))}else u=!0,h="nodata",i=i.concat(ln(t.serverSyncTree_,a.currentWriteId,!0))}Rt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}fi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)ls(s[l]);ho(t,t.transactionQueueTree_)}function vu(t,e){let n,s=t.transactionQueueTree_;for(n=H(e);n!==null&&Tn(s)===void 0;)s=ao(s,n),e=J(e),n=H(e);return s}function Cu(t,e){const n=[];return Eu(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Eu(t,e,n){const s=Tn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);hi(e,i=>{Eu(t,i,n)})}function fi(t,e){const n=Tn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,uu(e,n.length>0?n:void 0)}hi(e,s=>{fi(t,s)})}function Em(t,e){const n=hs(vu(t,e)),s=ao(t.transactionQueueTree_,e);return Jg(s,i=>{ki(t,i)}),ki(t,s),fu(s,i=>{ki(t,i)}),n}function ki(t,e){const n=Tn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ln(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?uu(e,void 0):n.length=r+1,Rt(t.eventQueue_,hs(e),i);for(let o=0;o<s.length;o++)ls(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function wm(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Le(`Invalid query segment '${n}' in query '${t}'`)}return e}const ql=function(t,e){const n=Im(t),s=n.namespace;n.domain==="firebase.com"&&Kt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||D_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new q_(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new G(n.pathString)}},Im=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=bm(t.substring(u,h)));const d=wm(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const C=e.indexOf(".");s=e.substring(0,C).toLowerCase(),n=e.substring(C+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+_e(this.snapshot.exportVal())}}class Sm{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return B(this._path)?null:Pc(this._path)}get ref(){return new ht(this._repo,this._path)}get _queryIdentifier(){const e=Al(this._queryParams),n=Ur(e);return n==="{}"?"default":n}get _queryObject(){return Al(this._queryParams)}isEqual(e){if(e=ri(e),!(e instanceof _o))return!1;const n=this._repo===e._repo,s=Mc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mp(this._path)}}class ht extends _o{constructor(e,n){super(e,n,new Gr,!1)}get parent(){const e=Dc(this._path);return e===null?null:new ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ns{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),s=zs(this.ref,e);return new ns(this._node.getChild(n),s,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ns(i,zs(this.ref,s),he)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xm(t,e){return t=ri(t),t._checkNotDeleted("ref"),e!==void 0?zs(t._root,e):t._root}function zs(t,e){return t=ri(t),H(t._path)===null?sm("child","path",e,!1):gu("child","path",e,!1),new ht(t._repo,pe(t._path,e))}function Rm(t){t=ri(t);const e=new Nm(()=>{}),n=new po(e);return gm(t._repo,t,n).then(s=>new ns(s,new ht(t._repo,t._path),t._queryParams.getIndex()))}class po{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Tm("value",this,new ns(e.snapshotNode,new ht(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Sm(this,e,n):null}matches(e){return e instanceof po?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Ng(ht);Og(ht);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="FIREBASE_DATABASE_EMULATOR_HOST",_r={};let Pm=!1;function Om(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ql(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[Am]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=ql(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new rr(rr.OWNER):new j_(t.name,t.options,e);im("Invalid Firebase Database URL",o),B(o.path)||Kt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Mm(l,t,u,new V_(t.name,n));return new km(h,t)}function Dm(t,e){const n=_r[e];(!n||n[t.key]!==t)&&Kt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ym(t),delete n[t.key]}function Mm(t,e,n,s){let i=_r[e.name];i||(i={},_r[e.name]=i);let r=i[t.toURLString()];return r&&Kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new hm(t,Pm,n,s),i[t.toURLString()]=r,r}class km{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ht(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Dm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Kt("Cannot call "+e+" on a deleted database.")}}function Lm(t=g_(),e){return h_(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t){x_(__),Ds(new Kn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Om(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),fn(dl,_l,t),fn(dl,_l,"esm2017")}lt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};lt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Fm();let le=ss({nav_visible:!0,menu_visible:!1,dictionary_visible:!0,words:!1,words2:!1,search:""});const Sn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Bm=t=>(Or("data-v-f349b8c2"),t=t(),Dr(),t),Wm={key:0,class:"menu"},Hm=Bm(()=>ue("div",{class:"menu_options"},[ue("span",null,"Home"),ue("span",null,"Dictionary"),ue("span",null,"Word lists"),ue("span",null,"Kana tables"),ue("span",null,"Kanji table"),ue("span",null,"Settings")],-1)),Um=[Hm],$m={__name:"Nav",setup(t){return(e,n)=>(ie(),Ha(Fr,null,{default:Ca(()=>[Se(le).nav_visable===!0?(ie(),ce("div",Wm,Um)):yt("",!0)]),_:1}))}},Vm=Sn($m,[["__scopeId","data-v-f349b8c2"]]);const jm={__name:"Menu",setup(t){return(e,n)=>(ie(),ce(Ee,null,[ue("div",{class:"menu-item",onClick:n[0]||(n[0]=()=>{Se(le).words1=!0,Se(le).words2=!1,Se(le).menu_visible=!1})}," words 0-500 "),ue("div",{class:"menu-item",onClick:n[1]||(n[1]=()=>{Se(le).words2=!0,Se(le).words1=!1,Se(le).menu_visible=!1})}," words 501-1000 ")],64))}},qm=Sn(jm,[["__scopeId","data-v-5a0710b4"]]);const zm=["onKeydown"],Km={__name:"Dictionary",setup(t){let e=ss({val:""});function n(){le.search=e.val,console.log(le.search),le.words=!0}function s(){le.words=!1}return(i,r)=>Vh((ie(),ce("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=o=>Se(e).val=o),onKeydown:[tl(n,["enter"]),tl(s,["delete"])],onClick:s},null,40,zm)),[[Qf,Se(e).val]])}},Gm=Sn(Km,[["__scopeId","data-v-87743fcb"]]);const Ym={class:"word"},Qm={class:"kanji"},Xm={key:0},Jm={class:"kana"},Zm={key:0},ey={class:"meaning"},ty={__name:"Word",setup(t){let e=[];for(let n=0;n<Ln.length;n++){let s=0;console.log(Ln[n].sense[0].gloss[0].text),Ln[n].sense[0].gloss[0].text===le.search&&(e[s]=Ln[n],s++)}return console.log(e),(n,s)=>(ie(!0),ce(Ee,null,Rn(Se(e),i=>(ie(),ce("div",Ym,[ue("div",Qm,[(ie(!0),ce(Ee,null,Rn(i.kanji,(r,o)=>(ie(),ce("div",null,[o===0?(ie(),ce("span",Xm,gi(r.text),1)):yt("",!0)]))),256))]),ue("div",Jm,[(ie(!0),ce(Ee,null,Rn(i.kana,(r,o)=>(ie(),ce("div",null,[o===0?(ie(),ce("span",Zm,gi(r.text),1)):yt("",!0)]))),256))]),ue("div",ey,[(ie(!0),ce(Ee,null,Rn(i.sense,r=>(ie(),ce("div",null,[(ie(!0),ce(Ee,null,Rn(r.gloss,o=>(ie(),ce("div",null,[ue("span",null,gi(o.text),1)]))),256))]))),256))])]))),256))}},zl=Sn(ty,[["__scopeId","data-v-e7da98ca"]]);const bu=t=>(Or("data-v-53e27984"),t=t(),Dr(),t),ny={class:"tabs"},sy=bu(()=>ue("span",null,"lists",-1)),iy=bu(()=>ue("span",null,"settings",-1)),ry={__name:"Tabs",setup(t){function e(){le.menu_visible=!0,le.words1=!1,le.words2=!1}return(n,s)=>(ie(),ce("div",ny,[ue("span",{onClick:e},"home"),sy,iy]))}},oy=Sn(ry,[["__scopeId","data-v-53e27984"]]);const ly=t=>(Or("data-v-87cd65bb"),t=t(),Dr(),t),ay={key:0},cy=ly(()=>ue("span",null,"Japanese Jisho",-1)),uy={class:"grid"},hy={key:0},fy={key:1},dy={key:2},_y={key:3},py={__name:"App",setup(t){function e(){le.nav_visable===!1?le.nav_visable=!0:le.nav_visable=!1}return(n,s)=>(ie(),ce(Ee,null,[Se(le).nav_visible?(ie(),ce("div",ay,[de(Vm)])):yt("",!0),ue("div",{class:"header"},[ue("span",{class:"burger",onClick:e},"\u2630"),cy]),ue("div",uy,[Se(le).menu_visible?(ie(),ce("div",hy,[de(qm)])):yt("",!0),Se(le).dictionary_visible?(ie(),ce("div",fy,[de(Gm)])):yt("",!0),Se(le).words?(ie(),ce("div",dy,[de(zl)])):yt("",!0),Se(le).words2?(ie(),ce("div",_y,[de(zl)])):yt("",!0)]),de(oy)],64))}},gy=Sn(py,[["__scopeId","data-v-87cd65bb"]]),my={apiKey:"AIzaSyC_nmckRuqsvaOyYwu-RwP82q8f5vFpqLE",authDomain:"japanesejisho.firebaseapp.com",databaseURL:"https://japanesejisho-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"japanesejisho",storageBucket:"japanesejisho.appspot.com",messagingSenderId:"255107822451",appId:"1:255107822451:web:5f719e8be86c97d0478b06"};p_(my);let Ln;const yy=xm(Lm());Rm(zs(yy,"words")).then(t=>{t.exists()?(Ln=t.val(),console.log(t.val())):console.log("No data available")}).catch(t=>{console.error(t)});ed(gy).mount("#app");
