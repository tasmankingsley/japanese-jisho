(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Cr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Ou="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Du=Cr(Ou);function Zl(t){return!!t||t===""}function br(t){if(L(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=we(s)?Fu(s):br(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(we(t))return t;if(he(t))return t}}const Mu=/;(?![^(]*\))/g,Lu=/:(.+)/;function Fu(t){const e={};return t.split(Mu).forEach(n=>{if(n){const s=n.split(Lu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Er(t){let e="";if(we(t))e=t;else if(L(t))for(let n=0;n<t.length;n++){const s=Er(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const wt=t=>we(t)?t:t==null?"":L(t)||he(t)&&(t.toString===na||!B(t.toString))?JSON.stringify(t,ea,2):String(t),ea=(t,e)=>e&&e.__v_isRef?ea(t,e.value):mn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:ta(e)?{[`Set(${e.size})`]:[...e.values()]}:he(e)&&!L(e)&&!sa(e)?String(e):e,ne={},_n=[],Ze=()=>{},ju=()=>!1,Bu=/^on[^a-z]/,Zs=t=>Bu.test(t),wr=t=>t.startsWith("onUpdate:"),ke=Object.assign,Ir=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hu=Object.prototype.hasOwnProperty,K=(t,e)=>Hu.call(t,e),L=Array.isArray,mn=t=>ei(t)==="[object Map]",ta=t=>ei(t)==="[object Set]",B=t=>typeof t=="function",we=t=>typeof t=="string",Tr=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",Sr=t=>he(t)&&B(t.then)&&B(t.catch),na=Object.prototype.toString,ei=t=>na.call(t),Wu=t=>ei(t).slice(8,-1),sa=t=>ei(t)==="[object Object]",Nr=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ss=Cr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ti=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$u=/-(\w)/g,wn=ti(t=>t.replace($u,(e,n)=>n?n.toUpperCase():"")),Uu=/\B([A-Z])/g,nn=ti(t=>t.replace(Uu,"-$1").toLowerCase()),ia=ti(t=>t.charAt(0).toUpperCase()+t.slice(1)),bi=ti(t=>t?`on${ia(t)}`:""),Rs=(t,e)=>!Object.is(t,e),Ns=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},As=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},zn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ko;const Vu=()=>ko||(ko=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let st;class Ku{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&st&&(this.parent=st,this.index=(st.scopes||(st.scopes=[])).push(this)-1)}run(e){if(this.active){const n=st;try{return st=this,e()}finally{st=n}}}on(){st=this}off(){st=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function qu(t,e=st){e&&e.active&&e.effects.push(t)}const kr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ra=t=>(t.w&Rt)>0,oa=t=>(t.n&Rt)>0,zu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Rt},Yu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];ra(i)&&!oa(i)?i.delete(t):e[n++]=i,i.w&=~Rt,i.n&=~Rt}e.length=n}},Hi=new WeakMap;let Wn=0,Rt=1;const Wi=30;let ze;const Yt=Symbol(""),$i=Symbol("");class xr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,qu(this,s)}run(){if(!this.active)return this.fn();let e=ze,n=It;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ze,ze=this,It=!0,Rt=1<<++Wn,Wn<=Wi?zu(this):xo(this),this.fn()}finally{Wn<=Wi&&Yu(this),Rt=1<<--Wn,ze=this.parent,It=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ze===this?this.deferStop=!0:this.active&&(xo(this),this.onStop&&this.onStop(),this.active=!1)}}function xo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let It=!0;const la=[];function xn(){la.push(It),It=!1}function Rn(){const t=la.pop();It=t===void 0?!0:t}function We(t,e,n){if(It&&ze){let s=Hi.get(t);s||Hi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=kr()),aa(i)}}function aa(t,e){let n=!1;Wn<=Wi?oa(t)||(t.n|=Rt,n=!ra(t)):n=!t.has(ze),n&&(t.add(ze),ze.deps.push(t))}function pt(t,e,n,s,i,r){const o=Hi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&L(t))o.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":L(t)?Nr(n)&&l.push(o.get("length")):(l.push(o.get(Yt)),mn(t)&&l.push(o.get($i)));break;case"delete":L(t)||(l.push(o.get(Yt)),mn(t)&&l.push(o.get($i)));break;case"set":mn(t)&&l.push(o.get(Yt));break}if(l.length===1)l[0]&&Ui(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Ui(kr(a))}}function Ui(t,e){const n=L(t)?t:[...t];for(const s of n)s.computed&&Ro(s);for(const s of n)s.computed||Ro(s)}function Ro(t,e){(t!==ze||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Gu=Cr("__proto__,__v_isRef,__isVue"),ca=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tr)),Qu=Rr(),Xu=Rr(!1,!0),Ju=Rr(!0),Ao=Zu();function Zu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=J(this);for(let r=0,o=this.length;r<o;r++)We(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(J)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){xn();const s=J(this)[e].apply(this,n);return Rn(),s}}),t}function Rr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?_h:pa:e?da:fa).get(s))return s;const o=L(s);if(!t&&o&&K(Ao,i))return Reflect.get(Ao,i,r);const l=Reflect.get(s,i,r);return(Tr(i)?ca.has(i):Gu(i))||(t||We(s,"get",i),e)?l:Oe(l)?o&&Nr(i)?l:l.value:he(l)?t?_a(l):lt(l):l}}const eh=ua(),th=ua(!0);function ua(t=!1){return function(n,s,i,r){let o=n[s];if(Yn(o)&&Oe(o)&&!Oe(i))return!1;if(!t&&(!Vi(i)&&!Yn(i)&&(o=J(o),i=J(i)),!L(n)&&Oe(o)&&!Oe(i)))return o.value=i,!0;const l=L(n)&&Nr(s)?Number(s)<n.length:K(n,s),a=Reflect.set(n,s,i,r);return n===J(r)&&(l?Rs(i,o)&&pt(n,"set",s,i):pt(n,"add",s,i)),a}}function nh(t,e){const n=K(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&pt(t,"delete",e,void 0),s}function sh(t,e){const n=Reflect.has(t,e);return(!Tr(e)||!ca.has(e))&&We(t,"has",e),n}function ih(t){return We(t,"iterate",L(t)?"length":Yt),Reflect.ownKeys(t)}const ha={get:Qu,set:eh,deleteProperty:nh,has:sh,ownKeys:ih},rh={get:Ju,set(t,e){return!0},deleteProperty(t,e){return!0}},oh=ke({},ha,{get:Xu,set:th}),Ar=t=>t,ni=t=>Reflect.getPrototypeOf(t);function vs(t,e,n=!1,s=!1){t=t.__v_raw;const i=J(t),r=J(e);n||(e!==r&&We(i,"get",e),We(i,"get",r));const{has:o}=ni(i),l=s?Ar:n?Mr:Dr;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Cs(t,e=!1){const n=this.__v_raw,s=J(n),i=J(t);return e||(t!==i&&We(s,"has",t),We(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function bs(t,e=!1){return t=t.__v_raw,!e&&We(J(t),"iterate",Yt),Reflect.get(t,"size",t)}function Po(t){t=J(t);const e=J(this);return ni(e).has.call(e,t)||(e.add(t),pt(e,"add",t,t)),this}function Oo(t,e){e=J(e);const n=J(this),{has:s,get:i}=ni(n);let r=s.call(n,t);r||(t=J(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Rs(e,o)&&pt(n,"set",t,e):pt(n,"add",t,e),this}function Do(t){const e=J(this),{has:n,get:s}=ni(e);let i=n.call(e,t);i||(t=J(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&pt(e,"delete",t,void 0),r}function Mo(){const t=J(this),e=t.size!==0,n=t.clear();return e&&pt(t,"clear",void 0,void 0),n}function Es(t,e){return function(s,i){const r=this,o=r.__v_raw,l=J(o),a=e?Ar:t?Mr:Dr;return!t&&We(l,"iterate",Yt),o.forEach((c,h)=>s.call(i,a(c),a(h),r))}}function ws(t,e,n){return function(...s){const i=this.__v_raw,r=J(i),o=mn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),h=n?Ar:e?Mr:Dr;return!e&&We(r,"iterate",a?$i:Yt),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:l?[h(u[0]),h(u[1])]:h(u),done:f}},[Symbol.iterator](){return this}}}}function vt(t){return function(...e){return t==="delete"?!1:this}}function lh(){const t={get(r){return vs(this,r)},get size(){return bs(this)},has:Cs,add:Po,set:Oo,delete:Do,clear:Mo,forEach:Es(!1,!1)},e={get(r){return vs(this,r,!1,!0)},get size(){return bs(this)},has:Cs,add:Po,set:Oo,delete:Do,clear:Mo,forEach:Es(!1,!0)},n={get(r){return vs(this,r,!0)},get size(){return bs(this,!0)},has(r){return Cs.call(this,r,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:Es(!0,!1)},s={get(r){return vs(this,r,!0,!0)},get size(){return bs(this,!0)},has(r){return Cs.call(this,r,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:Es(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ws(r,!1,!1),n[r]=ws(r,!0,!1),e[r]=ws(r,!1,!0),s[r]=ws(r,!0,!0)}),[t,n,e,s]}const[ah,ch,uh,hh]=lh();function Pr(t,e){const n=e?t?hh:uh:t?ch:ah;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(K(n,i)&&i in s?n:s,i,r)}const fh={get:Pr(!1,!1)},dh={get:Pr(!1,!0)},ph={get:Pr(!0,!1)},fa=new WeakMap,da=new WeakMap,pa=new WeakMap,_h=new WeakMap;function mh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gh(t){return t.__v_skip||!Object.isExtensible(t)?0:mh(Wu(t))}function lt(t){return Yn(t)?t:Or(t,!1,ha,fh,fa)}function yh(t){return Or(t,!1,oh,dh,da)}function _a(t){return Or(t,!0,rh,ph,pa)}function Or(t,e,n,s,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=gh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function gn(t){return Yn(t)?gn(t.__v_raw):!!(t&&t.__v_isReactive)}function Yn(t){return!!(t&&t.__v_isReadonly)}function Vi(t){return!!(t&&t.__v_isShallow)}function ma(t){return gn(t)||Yn(t)}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function ga(t){return As(t,"__v_skip",!0),t}const Dr=t=>he(t)?lt(t):t,Mr=t=>he(t)?_a(t):t;function vh(t){It&&ze&&(t=J(t),aa(t.dep||(t.dep=kr())))}function Ch(t,e){t=J(t),t.dep&&Ui(t.dep)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function me(t){return Oe(t)?t.value:t}const bh={get:(t,e,n)=>me(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Oe(i)&&!Oe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ya(t){return gn(t)?t:new Proxy(t,bh)}var va;class Eh{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[va]=!1,this._dirty=!0,this.effect=new xr(e,()=>{this._dirty||(this._dirty=!0,Ch(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=J(this);return vh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}va="__v_isReadonly";function wh(t,e,n=!1){let s,i;const r=B(t);return r?(s=t,i=Ze):(s=t.get,i=t.set),new Eh(s,i,r||!i,n)}function Tt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){cs(r,e,n)}return i}function Ve(t,e,n,s){if(B(t)){const r=Tt(t,e,n,s);return r&&Sr(r)&&r.catch(o=>{cs(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ve(t[r],e,n,s));return i}function cs(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Tt(a,null,10,[t,o,l]);return}}Ih(t,n,i,s)}function Ih(t,e,n,s=!0){console.error(t)}let Ps=!1,Ki=!1;const Ae=[];let rt=0;const yn=[];let ut=null,Vt=0;const Ca=Promise.resolve();let Lr=null;function Th(t){const e=Lr||Ca;return t?e.then(this?t.bind(this):t):e}function Sh(t){let e=rt+1,n=Ae.length;for(;e<n;){const s=e+n>>>1;Gn(Ae[s])<t?e=s+1:n=s}return e}function Fr(t){(!Ae.length||!Ae.includes(t,Ps&&t.allowRecurse?rt+1:rt))&&(t.id==null?Ae.push(t):Ae.splice(Sh(t.id),0,t),ba())}function ba(){!Ps&&!Ki&&(Ki=!0,Lr=Ca.then(Ia))}function Nh(t){const e=Ae.indexOf(t);e>rt&&Ae.splice(e,1)}function Ea(t){L(t)?yn.push(...t):(!ut||!ut.includes(t,t.allowRecurse?Vt+1:Vt))&&yn.push(t),ba()}function Lo(t,e=rt){for(;e<Ae.length;e++){const n=Ae[e];n&&n.pre&&(Ae.splice(e,1),e--,n())}}function wa(t){if(yn.length){const e=[...new Set(yn)];if(yn.length=0,ut){ut.push(...e);return}for(ut=e,ut.sort((n,s)=>Gn(n)-Gn(s)),Vt=0;Vt<ut.length;Vt++)ut[Vt]();ut=null,Vt=0}}const Gn=t=>t.id==null?1/0:t.id,kh=(t,e)=>{const n=Gn(t)-Gn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ia(t){Ki=!1,Ps=!0,Ae.sort(kh);const e=Ze;try{for(rt=0;rt<Ae.length;rt++){const n=Ae[rt];n&&n.active!==!1&&Tt(n,null,14)}}finally{rt=0,Ae.length=0,wa(),Ps=!1,Lr=null,(Ae.length||yn.length)&&Ia()}}function xh(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ne;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:f}=s[h]||ne;f&&(i=n.map(_=>_.trim())),u&&(i=n.map(zn))}let l,a=s[l=bi(e)]||s[l=bi(wn(e))];!a&&r&&(a=s[l=bi(nn(e))]),a&&Ve(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ve(c,t,6,i)}}function Ta(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!B(t)){const a=c=>{const h=Ta(c,e,!0);h&&(l=!0,ke(o,h))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(he(t)&&s.set(t,null),null):(L(r)?r.forEach(a=>o[a]=null):ke(o,r),he(t)&&s.set(t,o),o)}function si(t,e){return!t||!Zs(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,nn(e))||K(t,e))}let Ge=null,ii=null;function Os(t){const e=Ge;return Ge=t,ii=t&&t.type.__scopeId||null,e}function Sa(t){ii=t}function Na(){ii=null}function Ds(t,e=Ge,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&zo(-1);const r=Os(e),o=t(...i);return Os(r),s._d&&zo(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Ei(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:h,renderCache:u,data:f,setupState:_,ctx:y,inheritAttrs:S}=t;let N,M;const x=Os(t);try{if(n.shapeFlag&4){const $=i||s;N=qe(h.call($,$,u,r,_,f,y)),M=a}else{const $=e;N=qe($.length>1?$(r,{attrs:a,slots:l,emit:c}):$(r,null)),M=e.props?a:Ah(a)}}catch($){$n.length=0,cs($,t,1),N=ye(Be)}let A=N;if(M&&S!==!1){const $=Object.keys(M),{shapeFlag:Q}=A;$.length&&Q&7&&(o&&$.some(wr)&&(M=Ph(M,o)),A=At(A,M))}return n.dirs&&(A=At(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),N=A,Os(x),N}function Rh(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Fs(s)){if(s.type!==Be||s.children==="v-if"){if(e)return;e=s}}else return}return e}const Ah=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zs(n))&&((e||(e={}))[n]=t[n]);return e},Ph=(t,e)=>{const n={};for(const s in t)(!wr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Oh(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Fo(s,o,c):!!o;if(a&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(o[f]!==s[f]&&!si(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Fo(s,o,c):!0:!!o;return!1}function Fo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!si(n,r))return!0}return!1}function jr({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Dh=t=>t.__isSuspense,Mh={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,l,a,c){t==null?Fh(e,n,s,i,r,o,l,a,c):jh(t,e,n,s,i,o,l,a,c)},hydrate:Bh,create:Br,normalize:Hh},Lh=Mh;function Qn(t,e){const n=t.props&&t.props[e];B(n)&&n()}function Fh(t,e,n,s,i,r,o,l,a){const{p:c,o:{createElement:h}}=a,u=h("div"),f=t.suspense=Br(t,i,s,e,u,n,r,o,l,a);c(null,f.pendingBranch=t.ssContent,u,null,s,f,r,o),f.deps>0?(Qn(t,"onPending"),Qn(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,r,o),vn(f,t.ssFallback)):f.resolve()}function jh(t,e,n,s,i,r,o,l,{p:a,um:c,o:{createElement:h}}){const u=e.suspense=t.suspense;u.vnode=e,e.el=t.el;const f=e.ssContent,_=e.ssFallback,{activeBranch:y,pendingBranch:S,isInFallback:N,isHydrating:M}=u;if(S)u.pendingBranch=f,ot(f,S)?(a(S,f,u.hiddenContainer,null,i,u,r,o,l),u.deps<=0?u.resolve():N&&(a(y,_,n,s,i,null,r,o,l),vn(u,_))):(u.pendingId++,M?(u.isHydrating=!1,u.activeBranch=S):c(S,i,u),u.deps=0,u.effects.length=0,u.hiddenContainer=h("div"),N?(a(null,f,u.hiddenContainer,null,i,u,r,o,l),u.deps<=0?u.resolve():(a(y,_,n,s,i,null,r,o,l),vn(u,_))):y&&ot(f,y)?(a(y,f,n,s,i,u,r,o,l),u.resolve(!0)):(a(null,f,u.hiddenContainer,null,i,u,r,o,l),u.deps<=0&&u.resolve()));else if(y&&ot(f,y))a(y,f,n,s,i,u,r,o,l),vn(u,f);else if(Qn(e,"onPending"),u.pendingBranch=f,u.pendingId++,a(null,f,u.hiddenContainer,null,i,u,r,o,l),u.deps<=0)u.resolve();else{const{timeout:x,pendingId:A}=u;x>0?setTimeout(()=>{u.pendingId===A&&u.fallback(_)},x):x===0&&u.fallback(_)}}function Br(t,e,n,s,i,r,o,l,a,c,h=!1){const{p:u,m:f,um:_,n:y,o:{parentNode:S,remove:N}}=c,M=zn(t.props&&t.props.timeout),x={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof M=="number"?M:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:h,isUnmounted:!1,effects:[],resolve(A=!1){const{vnode:$,activeBranch:Q,pendingBranch:fe,pendingId:Ie,effects:F,parentComponent:q,container:X}=x;if(x.isHydrating)x.isHydrating=!1;else if(!A){const re=Q&&fe.transition&&fe.transition.mode==="out-in";re&&(Q.transition.afterLeave=()=>{Ie===x.pendingId&&f(fe,X,xe,0)});let{anchor:xe}=x;Q&&(xe=y(Q),_(Q,q,x,!0)),re||f(fe,X,xe,0)}vn(x,fe),x.pendingBranch=null,x.isInFallback=!1;let ie=x.parent,R=!1;for(;ie;){if(ie.pendingBranch){ie.effects.push(...F),R=!0;break}ie=ie.parent}R||Ea(F),x.effects=[],Qn($,"onResolve")},fallback(A){if(!x.pendingBranch)return;const{vnode:$,activeBranch:Q,parentComponent:fe,container:Ie,isSVG:F}=x;Qn($,"onFallback");const q=y(Q),X=()=>{!x.isInFallback||(u(null,A,Ie,q,fe,null,F,l,a),vn(x,A))},ie=A.transition&&A.transition.mode==="out-in";ie&&(Q.transition.afterLeave=X),x.isInFallback=!0,_(Q,fe,null,!0),ie||X()},move(A,$,Q){x.activeBranch&&f(x.activeBranch,A,$,Q),x.container=A},next(){return x.activeBranch&&y(x.activeBranch)},registerDep(A,$){const Q=!!x.pendingBranch;Q&&x.deps++;const fe=A.vnode.el;A.asyncDep.catch(Ie=>{cs(Ie,A,0)}).then(Ie=>{if(A.isUnmounted||x.isUnmounted||x.pendingId!==A.suspenseId)return;A.asyncResolved=!0;const{vnode:F}=A;Zi(A,Ie,!1),fe&&(F.el=fe);const q=!fe&&A.subTree.el;$(A,F,S(fe||A.subTree.el),fe?null:y(A.subTree),x,o,a),q&&N(q),jr(A,F.el),Q&&--x.deps===0&&x.resolve()})},unmount(A,$){x.isUnmounted=!0,x.activeBranch&&_(x.activeBranch,n,A,$),x.pendingBranch&&_(x.pendingBranch,n,A,$)}};return x}function Bh(t,e,n,s,i,r,o,l,a){const c=e.suspense=Br(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,l,!0),h=a(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(),h}function Hh(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=jo(s?n.default:n),t.ssFallback=s?jo(n.fallback):ye(Be)}function jo(t){let e;if(B(t)){const n=In&&t._c;n&&(t._d=!1,Y()),t=t(),n&&(t._d=!0,e=Ue,qa())}return L(t)&&(t=Rh(t)),t=qe(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Wh(t,e){e&&e.pendingBranch?L(t)?e.effects.push(...t):e.effects.push(t):Ea(t)}function vn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,jr(s,i))}function $h(t,e){if(Ne){let n=Ne.provides;const s=Ne.parent&&Ne.parent.provides;s===n&&(n=Ne.provides=Object.create(s)),n[t]=e}}function wi(t,e,n=!1){const s=Ne||Ge;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&B(e)?e.call(s.proxy):e}}const Bo={};function Ii(t,e,n){return ka(t,e,n)}function ka(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ne){const l=Ne;let a,c=!1,h=!1;if(Oe(t)?(a=()=>t.value,c=Vi(t)):gn(t)?(a=()=>t,s=!0):L(t)?(h=!0,c=t.some(M=>gn(M)||Vi(M)),a=()=>t.map(M=>{if(Oe(M))return M.value;if(gn(M))return qt(M);if(B(M))return Tt(M,l,2)})):B(t)?e?a=()=>Tt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return u&&u(),Ve(t,l,3,[f])}:a=Ze,e&&s){const M=a;a=()=>qt(M())}let u,f=M=>{u=N.onStop=()=>{Tt(M,l,4)}};if(Xn)return f=Ze,e?n&&Ve(e,l,3,[a(),h?[]:void 0,f]):a(),Ze;let _=h?[]:Bo;const y=()=>{if(!!N.active)if(e){const M=N.run();(s||c||(h?M.some((x,A)=>Rs(x,_[A])):Rs(M,_)))&&(u&&u(),Ve(e,l,3,[M,_===Bo?void 0:_,f]),_=M)}else N.run()};y.allowRecurse=!!e;let S;i==="sync"?S=y:i==="post"?S=()=>Me(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),S=()=>Fr(y));const N=new xr(a,S);return e?n?y():_=N.run():i==="post"?Me(N.run.bind(N),l&&l.suspense):N.run(),()=>{N.stop(),l&&l.scope&&Ir(l.scope.effects,N)}}function Uh(t,e,n){const s=this.proxy,i=we(t)?t.includes(".")?xa(s,t):()=>s[t]:t.bind(s,s);let r;B(e)?r=e:(r=e.handler,n=e);const o=Ne;Pt(this);const l=ka(i,r.bind(s),n);return o?Pt(o):St(),l}function xa(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function qt(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))qt(t.value,e);else if(L(t))for(let n=0;n<t.length;n++)qt(t[n],e);else if(ta(t)||mn(t))t.forEach(n=>{qt(n,e)});else if(sa(t))for(const n in t)qt(t[n],e);return t}function Vh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Da(()=>{t.isMounted=!0}),Ma(()=>{t.isUnmounting=!0}),t}const $e=[Function,Array],Kh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$e,onEnter:$e,onAfterEnter:$e,onEnterCancelled:$e,onBeforeLeave:$e,onLeave:$e,onAfterLeave:$e,onLeaveCancelled:$e,onBeforeAppear:$e,onAppear:$e,onAfterAppear:$e,onAppearCancelled:$e},setup(t,{slots:e}){const n=Ga(),s=Vh();let i;return()=>{const r=e.default&&Pa(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const S of r)if(S.type!==Be){o=S;break}}const l=J(t),{mode:a}=l;if(s.isLeaving)return Ti(o);const c=Ho(o);if(!c)return Ti(o);const h=qi(c,l,s,n);zi(c,h);const u=n.subTree,f=u&&Ho(u);let _=!1;const{getTransitionKey:y}=c.type;if(y){const S=y();i===void 0?i=S:S!==i&&(i=S,_=!0)}if(f&&f.type!==Be&&(!ot(c,f)||_)){const S=qi(f,l,s,n);if(zi(f,S),a==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update()},Ti(o);a==="in-out"&&c.type!==Be&&(S.delayLeave=(N,M,x)=>{const A=Aa(s,f);A[String(f.key)]=f,N._leaveCb=()=>{M(),N._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=x})}return o}}},Ra=Kh;function Aa(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function qi(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:u,onLeave:f,onAfterLeave:_,onLeaveCancelled:y,onBeforeAppear:S,onAppear:N,onAfterAppear:M,onAppearCancelled:x}=e,A=String(t.key),$=Aa(n,t),Q=(F,q)=>{F&&Ve(F,s,9,q)},fe=(F,q)=>{const X=q[1];Q(F,q),L(F)?F.every(ie=>ie.length<=1)&&X():F.length<=1&&X()},Ie={mode:r,persisted:o,beforeEnter(F){let q=l;if(!n.isMounted)if(i)q=S||l;else return;F._leaveCb&&F._leaveCb(!0);const X=$[A];X&&ot(t,X)&&X.el._leaveCb&&X.el._leaveCb(),Q(q,[F])},enter(F){let q=a,X=c,ie=h;if(!n.isMounted)if(i)q=N||a,X=M||c,ie=x||h;else return;let R=!1;const re=F._enterCb=xe=>{R||(R=!0,xe?Q(ie,[F]):Q(X,[F]),Ie.delayedLeave&&Ie.delayedLeave(),F._enterCb=void 0)};q?fe(q,[F,re]):re()},leave(F,q){const X=String(t.key);if(F._enterCb&&F._enterCb(!0),n.isUnmounting)return q();Q(u,[F]);let ie=!1;const R=F._leaveCb=re=>{ie||(ie=!0,q(),re?Q(y,[F]):Q(_,[F]),F._leaveCb=void 0,$[X]===t&&delete $[X])};$[X]=t,f?fe(f,[F,R]):R()},clone(F){return qi(F,e,n,s)}};return Ie}function Ti(t){if(ri(t))return t=At(t),t.children=null,t}function Ho(t){return ri(t)?t.children?t.children[0]:void 0:t}function zi(t,e){t.shapeFlag&6&&t.component?zi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Pa(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ge?(o.patchFlag&128&&i++,s=s.concat(Pa(o.children,e,l))):(e||o.type!==Be)&&s.push(l!=null?At(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const ks=t=>!!t.type.__asyncLoader,ri=t=>t.type.__isKeepAlive;function qh(t,e){Oa(t,"a",e)}function zh(t,e){Oa(t,"da",e)}function Oa(t,e,n=Ne){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(oi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ri(i.parent.vnode)&&Yh(s,e,n,i),i=i.parent}}function Yh(t,e,n,s){const i=oi(e,t,s,!0);La(()=>{Ir(s[e],i)},n)}function oi(t,e,n=Ne,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;xn(),Pt(n);const l=Ve(e,n,t,o);return St(),Rn(),l});return s?i.unshift(r):i.push(r),r}}const _t=t=>(e,n=Ne)=>(!Xn||t==="sp")&&oi(t,e,n),Gh=_t("bm"),Da=_t("m"),Qh=_t("bu"),Xh=_t("u"),Ma=_t("bum"),La=_t("um"),Jh=_t("sp"),Zh=_t("rtg"),ef=_t("rtc");function tf(t,e=Ne){oi("ec",t,e)}function nf(t,e){const n=Ge;if(n===null)return t;const s=ai(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=ne]=e[r];B(o)&&(o={mounted:o,updated:o}),o.deep&&qt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c})}return t}function Ft(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(xn(),Ve(a,n,8,[t.el,l,t,e]),Rn())}}const sf=Symbol();function hn(t,e,n,s){let i;const r=n&&n[s];if(L(t)||we(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(he(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Yi=t=>t?Qa(t)?ai(t)||t.proxy:Yi(t.parent):null,Ms=ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yi(t.parent),$root:t=>Yi(t.root),$emit:t=>t.emit,$options:t=>ja(t),$forceUpdate:t=>t.f||(t.f=()=>Fr(t.update)),$nextTick:t=>t.n||(t.n=Th.bind(t.proxy)),$watch:t=>Uh.bind(t)}),rf={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==ne&&K(s,e))return o[e]=1,s[e];if(i!==ne&&K(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&K(c,e))return o[e]=3,r[e];if(n!==ne&&K(n,e))return o[e]=4,n[e];Gi&&(o[e]=0)}}const h=Ms[e];let u,f;if(h)return e==="$attrs"&&We(t,"get",e),h(t);if((u=l.__cssModules)&&(u=u[e]))return u;if(n!==ne&&K(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,K(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==ne&&K(i,e)?(i[e]=n,!0):s!==ne&&K(s,e)?(s[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ne&&K(t,o)||e!==ne&&K(e,o)||(l=r[0])&&K(l,o)||K(s,o)||K(Ms,o)||K(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Gi=!0;function of(t){const e=ja(t),n=t.proxy,s=t.ctx;Gi=!1,e.beforeCreate&&Wo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:_,updated:y,activated:S,deactivated:N,beforeDestroy:M,beforeUnmount:x,destroyed:A,unmounted:$,render:Q,renderTracked:fe,renderTriggered:Ie,errorCaptured:F,serverPrefetch:q,expose:X,inheritAttrs:ie,components:R,directives:re,filters:xe}=e;if(c&&lf(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const de in o){const ae=o[de];B(ae)&&(s[de]=ae.bind(n))}if(i){const de=i.call(n,n);he(de)&&(t.data=lt(de))}if(Gi=!0,r)for(const de in r){const ae=r[de],at=B(ae)?ae.bind(n,n):B(ae.get)?ae.get.bind(n,n):Ze,yi=!B(ae)&&B(ae.set)?ae.set.bind(n):Ze,Dn=Df({get:at,set:yi});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>Dn.value,set:ln=>Dn.value=ln})}if(l)for(const de in l)Fa(l[de],s,n,de);if(a){const de=B(a)?a.call(n):a;Reflect.ownKeys(de).forEach(ae=>{$h(ae,de[ae])})}h&&Wo(h,t,"c");function Te(de,ae){L(ae)?ae.forEach(at=>de(at.bind(n))):ae&&de(ae.bind(n))}if(Te(Gh,u),Te(Da,f),Te(Qh,_),Te(Xh,y),Te(qh,S),Te(zh,N),Te(tf,F),Te(ef,fe),Te(Zh,Ie),Te(Ma,x),Te(La,$),Te(Jh,q),L(X))if(X.length){const de=t.exposed||(t.exposed={});X.forEach(ae=>{Object.defineProperty(de,ae,{get:()=>n[ae],set:at=>n[ae]=at})})}else t.exposed||(t.exposed={});Q&&t.render===Ze&&(t.render=Q),ie!=null&&(t.inheritAttrs=ie),R&&(t.components=R),re&&(t.directives=re)}function lf(t,e,n=Ze,s=!1){L(t)&&(t=Qi(t));for(const i in t){const r=t[i];let o;he(r)?"default"in r?o=wi(r.from||i,r.default,!0):o=wi(r.from||i):o=wi(r),Oe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Wo(t,e,n){Ve(L(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fa(t,e,n,s){const i=s.includes(".")?xa(n,s):()=>n[s];if(we(t)){const r=e[t];B(r)&&Ii(i,r)}else if(B(t))Ii(i,t.bind(n));else if(he(t))if(L(t))t.forEach(r=>Fa(r,e,n,s));else{const r=B(t.handler)?t.handler.bind(n):e[t.handler];B(r)&&Ii(i,r,t)}}function ja(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Ls(a,c,o,!0)),Ls(a,e,o)),he(e)&&r.set(e,a),a}function Ls(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ls(t,r,n,!0),i&&i.forEach(o=>Ls(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=af[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const af={data:$o,props:Wt,emits:Wt,methods:Wt,computed:Wt,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Wt,directives:Wt,watch:uf,provide:$o,inject:cf};function $o(t,e){return e?t?function(){return ke(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function cf(t,e){return Wt(Qi(t),Qi(e))}function Qi(t){if(L(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function Wt(t,e){return t?ke(ke(Object.create(null),t),e):e}function uf(t,e){if(!t)return e;if(!e)return t;const n=ke(Object.create(null),t);for(const s in e)n[s]=Pe(t[s],e[s]);return n}function hf(t,e,n,s=!1){const i={},r={};As(r,li,1),t.propsDefaults=Object.create(null),Ba(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:yh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function ff(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=J(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(si(t.emitsOptions,f))continue;const _=e[f];if(a)if(K(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const y=wn(f);i[y]=Xi(a,l,y,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{Ba(t,e,i,r)&&(c=!0);let h;for(const u in l)(!e||!K(e,u)&&((h=nn(u))===u||!K(e,h)))&&(a?n&&(n[u]!==void 0||n[h]!==void 0)&&(i[u]=Xi(a,l,u,void 0,t,!0)):delete i[u]);if(r!==l)for(const u in r)(!e||!K(e,u)&&!0)&&(delete r[u],c=!0)}c&&pt(t,"set","$attrs")}function Ba(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Ss(a))continue;const c=e[a];let h;i&&K(i,h=wn(a))?!r||!r.includes(h)?n[h]=c:(l||(l={}))[h]=c:si(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=J(n),c=l||ne;for(let h=0;h<r.length;h++){const u=r[h];n[u]=Xi(i,a,u,c[u],t,!K(c,u))}}return o}function Xi(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=K(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&B(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(Pt(i),s=c[n]=a.call(null,e),St())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===nn(n))&&(s=!0))}return s}function Ha(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!B(t)){const h=u=>{a=!0;const[f,_]=Ha(u,e,!0);ke(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!a)return he(t)&&s.set(t,_n),_n;if(L(r))for(let h=0;h<r.length;h++){const u=wn(r[h]);Uo(u)&&(o[u]=ne)}else if(r)for(const h in r){const u=wn(h);if(Uo(u)){const f=r[h],_=o[u]=L(f)||B(f)?{type:f}:f;if(_){const y=qo(Boolean,_.type),S=qo(String,_.type);_[0]=y>-1,_[1]=S<0||y<S,(y>-1||K(_,"default"))&&l.push(u)}}}const c=[o,l];return he(t)&&s.set(t,c),c}function Uo(t){return t[0]!=="$"}function Vo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ko(t,e){return Vo(t)===Vo(e)}function qo(t,e){return L(e)?e.findIndex(n=>Ko(n,t)):B(e)&&Ko(e,t)?0:-1}const Wa=t=>t[0]==="_"||t==="$stable",Hr=t=>L(t)?t.map(qe):[qe(t)],df=(t,e,n)=>{if(e._n)return e;const s=Ds((...i)=>Hr(e(...i)),n);return s._c=!1,s},$a=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Wa(i))continue;const r=t[i];if(B(r))e[i]=df(i,r,s);else if(r!=null){const o=Hr(r);e[i]=()=>o}}},Ua=(t,e)=>{const n=Hr(e);t.slots.default=()=>n},pf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=J(e),As(e,"_",n)):$a(e,t.slots={})}else t.slots={},e&&Ua(t,e);As(t.slots,li,1)},_f=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ne;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(ke(i,e),!n&&l===1&&delete i._):(r=!e.$stable,$a(e,i)),o=e}else e&&(Ua(t,e),o={default:1});if(r)for(const l in i)!Wa(l)&&!(l in o)&&delete i[l]};function Va(){return{app:null,config:{isNativeTag:ju,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mf=0;function gf(t,e){return function(s,i=null){B(s)||(s=Object.assign({},s)),i!=null&&!he(i)&&(i=null);const r=Va(),o=new Set;let l=!1;const a=r.app={_uid:mf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Ff,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&B(c.install)?(o.add(c),c.install(a,...h)):B(c)&&(o.add(c),c(a,...h))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,h){return h?(r.components[c]=h,a):r.components[c]},directive(c,h){return h?(r.directives[c]=h,a):r.directives[c]},mount(c,h,u){if(!l){const f=ye(s,i);return f.appContext=r,h&&e?e(f,c):t(f,c,u),l=!0,a._container=c,c.__vue_app__=a,ai(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,h){return r.provides[c]=h,a}};return a}}function Ji(t,e,n,s,i=!1){if(L(t)){t.forEach((f,_)=>Ji(f,e&&(L(e)?e[_]:e),n,s,i));return}if(ks(s)&&!i)return;const r=s.shapeFlag&4?ai(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,h=l.refs===ne?l.refs={}:l.refs,u=l.setupState;if(c!=null&&c!==a&&(we(c)?(h[c]=null,K(u,c)&&(u[c]=null)):Oe(c)&&(c.value=null)),B(a))Tt(a,l,12,[o,h]);else{const f=we(a),_=Oe(a);if(f||_){const y=()=>{if(t.f){const S=f?h[a]:a.value;i?L(S)&&Ir(S,r):L(S)?S.includes(r)||S.push(r):f?(h[a]=[r],K(u,a)&&(u[a]=h[a])):(a.value=[r],t.k&&(h[t.k]=a.value))}else f?(h[a]=o,K(u,a)&&(u[a]=o)):_&&(a.value=o,t.k&&(h[t.k]=o))};o?(y.id=-1,Me(y,n)):y()}}}const Me=Wh;function yf(t){return vf(t)}function vf(t,e){const n=Vu();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:_=Ze,cloneNode:y,insertStaticContent:S}=t,N=(d,p,m,v=null,g=null,w=null,T=!1,b=null,I=!!p.dynamicChildren)=>{if(d===p)return;d&&!ot(d,p)&&(v=ys(d),yt(d,g,w,!0),d=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:C,ref:P,shapeFlag:k}=p;switch(C){case Wr:M(d,p,m,v);break;case Be:x(d,p,m,v);break;case Si:d==null&&A(p,m,v,T);break;case ge:re(d,p,m,v,g,w,T,b,I);break;default:k&1?fe(d,p,m,v,g,w,T,b,I):k&6?xe(d,p,m,v,g,w,T,b,I):(k&64||k&128)&&C.process(d,p,m,v,g,w,T,b,I,an)}P!=null&&g&&Ji(P,d&&d.ref,w,p||d,!p)},M=(d,p,m,v)=>{if(d==null)s(p.el=l(p.children),m,v);else{const g=p.el=d.el;p.children!==d.children&&c(g,p.children)}},x=(d,p,m,v)=>{d==null?s(p.el=a(p.children||""),m,v):p.el=d.el},A=(d,p,m,v)=>{[d.el,d.anchor]=S(d.children,p,m,v,d.el,d.anchor)},$=({el:d,anchor:p},m,v)=>{let g;for(;d&&d!==p;)g=f(d),s(d,m,v),d=g;s(p,m,v)},Q=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),i(d),d=m;i(p)},fe=(d,p,m,v,g,w,T,b,I)=>{T=T||p.type==="svg",d==null?Ie(p,m,v,g,w,T,b,I):X(d,p,g,w,T,b,I)},Ie=(d,p,m,v,g,w,T,b)=>{let I,C;const{type:P,props:k,shapeFlag:O,transition:j,patchFlag:z,dirs:ee}=d;if(d.el&&y!==void 0&&z===-1)I=d.el=y(d.el);else{if(I=d.el=o(d.type,w,k&&k.is,k),O&8?h(I,d.children):O&16&&q(d.children,I,null,v,g,w&&P!=="foreignObject",T,b),ee&&Ft(d,null,v,"created"),k){for(const ce in k)ce!=="value"&&!Ss(ce)&&r(I,ce,null,k[ce],w,d.children,v,g,ct);"value"in k&&r(I,"value",null,k.value),(C=k.onVnodeBeforeMount)&&nt(C,v,d)}F(I,d,d.scopeId,T,v)}ee&&Ft(d,null,v,"beforeMount");const te=(!g||g&&!g.pendingBranch)&&j&&!j.persisted;te&&j.beforeEnter(I),s(I,p,m),((C=k&&k.onVnodeMounted)||te||ee)&&Me(()=>{C&&nt(C,v,d),te&&j.enter(I),ee&&Ft(d,null,v,"mounted")},g)},F=(d,p,m,v,g)=>{if(m&&_(d,m),v)for(let w=0;w<v.length;w++)_(d,v[w]);if(g){let w=g.subTree;if(p===w){const T=g.vnode;F(d,T,T.scopeId,T.slotScopeIds,g.parent)}}},q=(d,p,m,v,g,w,T,b,I=0)=>{for(let C=I;C<d.length;C++){const P=d[C]=b?Et(d[C]):qe(d[C]);N(null,P,p,m,v,g,w,T,b)}},X=(d,p,m,v,g,w,T)=>{const b=p.el=d.el;let{patchFlag:I,dynamicChildren:C,dirs:P}=p;I|=d.patchFlag&16;const k=d.props||ne,O=p.props||ne;let j;m&&jt(m,!1),(j=O.onVnodeBeforeUpdate)&&nt(j,m,p,d),P&&Ft(p,d,m,"beforeUpdate"),m&&jt(m,!0);const z=g&&p.type!=="foreignObject";if(C?ie(d.dynamicChildren,C,b,m,v,z,w):T||at(d,p,b,null,m,v,z,w,!1),I>0){if(I&16)R(b,p,k,O,m,v,g);else if(I&2&&k.class!==O.class&&r(b,"class",null,O.class,g),I&4&&r(b,"style",k.style,O.style,g),I&8){const ee=p.dynamicProps;for(let te=0;te<ee.length;te++){const ce=ee[te],Ke=k[ce],cn=O[ce];(cn!==Ke||ce==="value")&&r(b,ce,Ke,cn,g,d.children,m,v,ct)}}I&1&&d.children!==p.children&&h(b,p.children)}else!T&&C==null&&R(b,p,k,O,m,v,g);((j=O.onVnodeUpdated)||P)&&Me(()=>{j&&nt(j,m,p,d),P&&Ft(p,d,m,"updated")},v)},ie=(d,p,m,v,g,w,T)=>{for(let b=0;b<p.length;b++){const I=d[b],C=p[b],P=I.el&&(I.type===ge||!ot(I,C)||I.shapeFlag&70)?u(I.el):m;N(I,C,P,null,v,g,w,T,!0)}},R=(d,p,m,v,g,w,T)=>{if(m!==v){for(const b in v){if(Ss(b))continue;const I=v[b],C=m[b];I!==C&&b!=="value"&&r(d,b,C,I,T,p.children,g,w,ct)}if(m!==ne)for(const b in m)!Ss(b)&&!(b in v)&&r(d,b,m[b],null,T,p.children,g,w,ct);"value"in v&&r(d,"value",m.value,v.value)}},re=(d,p,m,v,g,w,T,b,I)=>{const C=p.el=d?d.el:l(""),P=p.anchor=d?d.anchor:l("");let{patchFlag:k,dynamicChildren:O,slotScopeIds:j}=p;j&&(b=b?b.concat(j):j),d==null?(s(C,m,v),s(P,m,v),q(p.children,m,P,g,w,T,b,I)):k>0&&k&64&&O&&d.dynamicChildren?(ie(d.dynamicChildren,O,m,g,w,T,b),(p.key!=null||g&&p===g.subTree)&&Ka(d,p,!0)):at(d,p,m,P,g,w,T,b,I)},xe=(d,p,m,v,g,w,T,b,I)=>{p.slotScopeIds=b,d==null?p.shapeFlag&512?g.ctx.activate(p,m,v,T,I):on(p,m,v,g,w,T,I):Te(d,p,I)},on=(d,p,m,v,g,w,T)=>{const b=d.component=kf(d,v,g);if(ri(d)&&(b.ctx.renderer=an),xf(b),b.asyncDep){if(g&&g.registerDep(b,de),!d.el){const I=b.subTree=ye(Be);x(null,I,p,m)}return}de(b,d,p,m,g,w,T)},Te=(d,p,m)=>{const v=p.component=d.component;if(Oh(d,p,m))if(v.asyncDep&&!v.asyncResolved){ae(v,p,m);return}else v.next=p,Nh(v.update),v.update();else p.el=d.el,v.vnode=p},de=(d,p,m,v,g,w,T)=>{const b=()=>{if(d.isMounted){let{next:P,bu:k,u:O,parent:j,vnode:z}=d,ee=P,te;jt(d,!1),P?(P.el=z.el,ae(d,P,T)):P=z,k&&Ns(k),(te=P.props&&P.props.onVnodeBeforeUpdate)&&nt(te,j,P,z),jt(d,!0);const ce=Ei(d),Ke=d.subTree;d.subTree=ce,N(Ke,ce,u(Ke.el),ys(Ke),d,g,w),P.el=ce.el,ee===null&&jr(d,ce.el),O&&Me(O,g),(te=P.props&&P.props.onVnodeUpdated)&&Me(()=>nt(te,j,P,z),g)}else{let P;const{el:k,props:O}=p,{bm:j,m:z,parent:ee}=d,te=ks(p);if(jt(d,!1),j&&Ns(j),!te&&(P=O&&O.onVnodeBeforeMount)&&nt(P,ee,p),jt(d,!0),k&&Ci){const ce=()=>{d.subTree=Ei(d),Ci(k,d.subTree,d,g,null)};te?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ce()):ce()}else{const ce=d.subTree=Ei(d);N(null,ce,m,v,d,g,w),p.el=ce.el}if(z&&Me(z,g),!te&&(P=O&&O.onVnodeMounted)){const ce=p;Me(()=>nt(P,ee,ce),g)}(p.shapeFlag&256||ee&&ks(ee.vnode)&&ee.vnode.shapeFlag&256)&&d.a&&Me(d.a,g),d.isMounted=!0,p=m=v=null}},I=d.effect=new xr(b,()=>Fr(C),d.scope),C=d.update=()=>I.run();C.id=d.uid,jt(d,!0),C()},ae=(d,p,m)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,ff(d,p.props,v,m),_f(d,p.children,m),xn(),Lo(),Rn()},at=(d,p,m,v,g,w,T,b,I=!1)=>{const C=d&&d.children,P=d?d.shapeFlag:0,k=p.children,{patchFlag:O,shapeFlag:j}=p;if(O>0){if(O&128){Dn(C,k,m,v,g,w,T,b,I);return}else if(O&256){yi(C,k,m,v,g,w,T,b,I);return}}j&8?(P&16&&ct(C,g,w),k!==C&&h(m,k)):P&16?j&16?Dn(C,k,m,v,g,w,T,b,I):ct(C,g,w,!0):(P&8&&h(m,""),j&16&&q(k,m,v,g,w,T,b,I))},yi=(d,p,m,v,g,w,T,b,I)=>{d=d||_n,p=p||_n;const C=d.length,P=p.length,k=Math.min(C,P);let O;for(O=0;O<k;O++){const j=p[O]=I?Et(p[O]):qe(p[O]);N(d[O],j,m,null,g,w,T,b,I)}C>P?ct(d,g,w,!0,!1,k):q(p,m,v,g,w,T,b,I,k)},Dn=(d,p,m,v,g,w,T,b,I)=>{let C=0;const P=p.length;let k=d.length-1,O=P-1;for(;C<=k&&C<=O;){const j=d[C],z=p[C]=I?Et(p[C]):qe(p[C]);if(ot(j,z))N(j,z,m,null,g,w,T,b,I);else break;C++}for(;C<=k&&C<=O;){const j=d[k],z=p[O]=I?Et(p[O]):qe(p[O]);if(ot(j,z))N(j,z,m,null,g,w,T,b,I);else break;k--,O--}if(C>k){if(C<=O){const j=O+1,z=j<P?p[j].el:v;for(;C<=O;)N(null,p[C]=I?Et(p[C]):qe(p[C]),m,z,g,w,T,b,I),C++}}else if(C>O)for(;C<=k;)yt(d[C],g,w,!0),C++;else{const j=C,z=C,ee=new Map;for(C=z;C<=O;C++){const je=p[C]=I?Et(p[C]):qe(p[C]);je.key!=null&&ee.set(je.key,C)}let te,ce=0;const Ke=O-z+1;let cn=!1,To=0;const Mn=new Array(Ke);for(C=0;C<Ke;C++)Mn[C]=0;for(C=j;C<=k;C++){const je=d[C];if(ce>=Ke){yt(je,g,w,!0);continue}let tt;if(je.key!=null)tt=ee.get(je.key);else for(te=z;te<=O;te++)if(Mn[te-z]===0&&ot(je,p[te])){tt=te;break}tt===void 0?yt(je,g,w,!0):(Mn[tt-z]=C+1,tt>=To?To=tt:cn=!0,N(je,p[tt],m,null,g,w,T,b,I),ce++)}const So=cn?Cf(Mn):_n;for(te=So.length-1,C=Ke-1;C>=0;C--){const je=z+C,tt=p[je],No=je+1<P?p[je+1].el:v;Mn[C]===0?N(null,tt,m,No,g,w,T,b,I):cn&&(te<0||C!==So[te]?ln(tt,m,No,2):te--)}}},ln=(d,p,m,v,g=null)=>{const{el:w,type:T,transition:b,children:I,shapeFlag:C}=d;if(C&6){ln(d.component.subTree,p,m,v);return}if(C&128){d.suspense.move(p,m,v);return}if(C&64){T.move(d,p,m,an);return}if(T===ge){s(w,p,m);for(let k=0;k<I.length;k++)ln(I[k],p,m,v);s(d.anchor,p,m);return}if(T===Si){$(d,p,m);return}if(v!==2&&C&1&&b)if(v===0)b.beforeEnter(w),s(w,p,m),Me(()=>b.enter(w),g);else{const{leave:k,delayLeave:O,afterLeave:j}=b,z=()=>s(w,p,m),ee=()=>{k(w,()=>{z(),j&&j()})};O?O(w,z,ee):ee()}else s(w,p,m)},yt=(d,p,m,v=!1,g=!1)=>{const{type:w,props:T,ref:b,children:I,dynamicChildren:C,shapeFlag:P,patchFlag:k,dirs:O}=d;if(b!=null&&Ji(b,null,m,d,!0),P&256){p.ctx.deactivate(d);return}const j=P&1&&O,z=!ks(d);let ee;if(z&&(ee=T&&T.onVnodeBeforeUnmount)&&nt(ee,p,d),P&6)Pu(d.component,m,v);else{if(P&128){d.suspense.unmount(m,v);return}j&&Ft(d,null,p,"beforeUnmount"),P&64?d.type.remove(d,p,m,g,an,v):C&&(w!==ge||k>0&&k&64)?ct(C,p,m,!1,!0):(w===ge&&k&384||!g&&P&16)&&ct(I,p,m),v&&wo(d)}(z&&(ee=T&&T.onVnodeUnmounted)||j)&&Me(()=>{ee&&nt(ee,p,d),j&&Ft(d,null,p,"unmounted")},m)},wo=d=>{const{type:p,el:m,anchor:v,transition:g}=d;if(p===ge){Au(m,v);return}if(p===Si){Q(d);return}const w=()=>{i(m),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(d.shapeFlag&1&&g&&!g.persisted){const{leave:T,delayLeave:b}=g,I=()=>T(m,w);b?b(d.el,w,I):I()}else w()},Au=(d,p)=>{let m;for(;d!==p;)m=f(d),i(d),d=m;i(p)},Pu=(d,p,m)=>{const{bum:v,scope:g,update:w,subTree:T,um:b}=d;v&&Ns(v),g.stop(),w&&(w.active=!1,yt(T,d,p,m)),b&&Me(b,p),Me(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ct=(d,p,m,v=!1,g=!1,w=0)=>{for(let T=w;T<d.length;T++)yt(d[T],p,m,v,g)},ys=d=>d.shapeFlag&6?ys(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),Io=(d,p,m)=>{d==null?p._vnode&&yt(p._vnode,null,null,!0):N(p._vnode||null,d,p,null,null,null,m),Lo(),wa(),p._vnode=d},an={p:N,um:yt,m:ln,r:wo,mt:on,mc:q,pc:at,pbc:ie,n:ys,o:t};let vi,Ci;return e&&([vi,Ci]=e(an)),{render:Io,hydrate:vi,createApp:gf(Io,vi)}}function jt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ka(t,e,n=!1){const s=t.children,i=e.children;if(L(s)&&L(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Et(i[r]),l.el=o.el),n||Ka(o,l))}}function Cf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const bf=t=>t.__isTeleport,ge=Symbol(void 0),Wr=Symbol(void 0),Be=Symbol(void 0),Si=Symbol(void 0),$n=[];let Ue=null;function Y(t=!1){$n.push(Ue=t?null:[])}function qa(){$n.pop(),Ue=$n[$n.length-1]||null}let In=1;function zo(t){In+=t}function za(t){return t.dynamicChildren=In>0?Ue||_n:null,qa(),In>0&&Ue&&Ue.push(t),t}function Z(t,e,n,s,i,r){return za(V(t,e,n,s,i,r,!0))}function $r(t,e,n,s,i){return za(ye(t,e,n,s,i,!0))}function Fs(t){return t?t.__v_isVNode===!0:!1}function ot(t,e){return t.type===e.type&&t.key===e.key}const li="__vInternal",Ya=({key:t})=>t!=null?t:null,xs=({ref:t,ref_key:e,ref_for:n})=>t!=null?we(t)||Oe(t)||B(t)?{i:Ge,r:t,k:e,f:!!n}:t:null;function V(t,e=null,n=null,s=0,i=null,r=t===ge?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ya(e),ref:e&&xs(e),scopeId:ii,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(Ur(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=we(n)?8:16),In>0&&!o&&Ue&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ue.push(a),a}const ye=Ef;function Ef(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===sf)&&(t=Be),Fs(t)){const l=At(t,e,!0);return n&&Ur(l,n),In>0&&!r&&Ue&&(l.shapeFlag&6?Ue[Ue.indexOf(t)]=l:Ue.push(l)),l.patchFlag|=-2,l}if(Of(t)&&(t=t.__vccOpts),e){e=wf(e);let{class:l,style:a}=e;l&&!we(l)&&(e.class=Er(l)),he(a)&&(ma(a)&&!L(a)&&(a=ke({},a)),e.style=br(a))}const o=we(t)?1:Dh(t)?128:bf(t)?64:he(t)?4:B(t)?2:0;return V(t,e,n,s,i,o,r,!0)}function wf(t){return t?ma(t)||li in t?ke({},t):t:null}function At(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Tf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ya(l),ref:e&&e.ref?n&&i?L(i)?i.concat(xs(e)):[i,xs(e)]:xs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ge?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&At(t.ssContent),ssFallback:t.ssFallback&&At(t.ssFallback),el:t.el,anchor:t.anchor}}function If(t=" ",e=0){return ye(Wr,null,t,e)}function it(t="",e=!1){return e?(Y(),$r(Be,null,t)):ye(Be,null,t)}function qe(t){return t==null||typeof t=="boolean"?ye(Be):L(t)?ye(ge,null,t.slice()):typeof t=="object"?Et(t):ye(Wr,null,String(t))}function Et(t){return t.el===null||t.memo?t:At(t)}function Ur(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(L(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ur(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(li in e)?e._ctx=Ge:i===3&&Ge&&(Ge.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ge},n=32):(e=String(e),s&64?(n=16,e=[If(e)]):n=8);t.children=e,t.shapeFlag|=n}function Tf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Er([e.class,s.class]));else if(i==="style")e.style=br([e.style,s.style]);else if(Zs(i)){const r=e[i],o=s[i];o&&r!==o&&!(L(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function nt(t,e,n,s=null){Ve(t,e,7,[n,s])}const Sf=Va();let Nf=0;function kf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Sf,r={uid:Nf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ku(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ha(s,i),emitsOptions:Ta(s,i),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:s.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=xh.bind(null,r),t.ce&&t.ce(r),r}let Ne=null;const Ga=()=>Ne||Ge,Pt=t=>{Ne=t,t.scope.on()},St=()=>{Ne&&Ne.scope.off(),Ne=null};function Qa(t){return t.vnode.shapeFlag&4}let Xn=!1;function xf(t,e=!1){Xn=e;const{props:n,children:s}=t.vnode,i=Qa(t);hf(t,n,i,e),pf(t,s);const r=i?Rf(t,e):void 0;return Xn=!1,r}function Rf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ga(new Proxy(t.ctx,rf));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Pf(t):null;Pt(t),xn();const r=Tt(s,t,0,[t.props,i]);if(Rn(),St(),Sr(r)){if(r.then(St,St),e)return r.then(o=>{Zi(t,o,e)}).catch(o=>{cs(o,t,0)});t.asyncDep=r}else Zi(t,r,e)}else Xa(t,e)}function Zi(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=ya(e)),Xa(t,n)}let Yo;function Xa(t,e,n){const s=t.type;if(!t.render){if(!e&&Yo&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=ke(ke({isCustomElement:r,delimiters:l},o),a);s.render=Yo(i,c)}}t.render=s.render||Ze}Pt(t),xn(),of(t),Rn(),St()}function Af(t){return new Proxy(t.attrs,{get(e,n){return We(t,"get","$attrs"),e[n]}})}function Pf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Af(t))},slots:t.slots,emit:t.emit,expose:e}}function ai(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ya(ga(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ms)return Ms[n](t)}}))}function Of(t){return B(t)&&"__vccOpts"in t}const Df=(t,e)=>wh(t,e,Xn);function Mf(t){const e=Ga();let n=t();return St(),Sr(n)&&(n=n.catch(s=>{throw Pt(e),s})),[n,()=>Pt(e)]}function Lf(t,e,n){const s=arguments.length;return s===2?he(e)&&!L(e)?Fs(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Fs(n)&&(n=[n]),ye(t,e,n))}const Ff="3.2.38",jf="http://www.w3.org/2000/svg",Kt=typeof document<"u"?document:null,Go=Kt&&Kt.createElement("template"),Bf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Kt.createElementNS(jf,t):Kt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Kt.createTextNode(t),createComment:t=>Kt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Go.innerHTML=s?`<svg>${t}</svg>`:t;const l=Go.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Hf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Wf(t,e,n){const s=t.style,i=we(n);if(n&&!i){for(const r in n)er(s,r,n[r]);if(e&&!we(e))for(const r in e)n[r]==null&&er(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Qo=/\s*!important$/;function er(t,e,n){if(L(n))n.forEach(s=>er(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=$f(t,e);Qo.test(n)?t.setProperty(nn(s),n.replace(Qo,""),"important"):t[s]=n}}const Xo=["Webkit","Moz","ms"],Ni={};function $f(t,e){const n=Ni[e];if(n)return n;let s=wn(e);if(s!=="filter"&&s in t)return Ni[e]=s;s=ia(s);for(let i=0;i<Xo.length;i++){const r=Xo[i]+s;if(r in t)return Ni[e]=r}return e}const Jo="http://www.w3.org/1999/xlink";function Uf(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Jo,e.slice(6,e.length)):t.setAttributeNS(Jo,e,n);else{const r=Du(e);n==null||r&&!Zl(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Vf(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Zl(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[Ja,Kf]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let tr=0;const qf=Promise.resolve(),zf=()=>{tr=0},Yf=()=>tr||(qf.then(zf),tr=Ja());function fn(t,e,n,s){t.addEventListener(e,n,s)}function Gf(t,e,n,s){t.removeEventListener(e,n,s)}function Qf(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Xf(e);if(s){const c=r[e]=Jf(s,i);fn(t,l,c,a)}else o&&(Gf(t,l,o,a),r[e]=void 0)}}const Zo=/(?:Once|Passive|Capture)$/;function Xf(t){let e;if(Zo.test(t)){e={};let s;for(;s=t.match(Zo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nn(t.slice(2)),e]}function Jf(t,e){const n=s=>{const i=s.timeStamp||Ja();(Kf||i>=n.attached-1)&&Ve(Zf(s,n.value),e,5,[s])};return n.value=t,n.attached=Yf(),n}function Zf(t,e){if(L(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const el=/^on[a-z]/,ed=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?Hf(t,s,i):e==="style"?Wf(t,n,s):Zs(e)?wr(e)||Qf(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):td(t,e,s,i))?Vf(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Uf(t,e,s,i))};function td(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&el.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||el.test(e)&&we(n)?!1:e in t}const Ct="transition",Ln="animation",Vr=(t,{slots:e})=>Lf(Ra,nd(t),e);Vr.displayName="Transition";const Za={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Vr.props=ke({},Ra.props,Za);const Bt=(t,e=[])=>{L(t)?t.forEach(n=>n(...e)):t&&t(...e)},tl=t=>t?L(t)?t.some(e=>e.length>1):t.length>1:!1;function nd(t){const e={};for(const R in t)R in Za||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:c=o,appearToClass:h=l,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,y=sd(i),S=y&&y[0],N=y&&y[1],{onBeforeEnter:M,onEnter:x,onEnterCancelled:A,onLeave:$,onLeaveCancelled:Q,onBeforeAppear:fe=M,onAppear:Ie=x,onAppearCancelled:F=A}=e,q=(R,re,xe)=>{Ht(R,re?h:l),Ht(R,re?c:o),xe&&xe()},X=(R,re)=>{R._isLeaving=!1,Ht(R,u),Ht(R,_),Ht(R,f),re&&re()},ie=R=>(re,xe)=>{const on=R?Ie:x,Te=()=>q(re,R,xe);Bt(on,[re,Te]),nl(()=>{Ht(re,R?a:r),bt(re,R?h:l),tl(on)||sl(re,s,S,Te)})};return ke(e,{onBeforeEnter(R){Bt(M,[R]),bt(R,r),bt(R,o)},onBeforeAppear(R){Bt(fe,[R]),bt(R,a),bt(R,c)},onEnter:ie(!1),onAppear:ie(!0),onLeave(R,re){R._isLeaving=!0;const xe=()=>X(R,re);bt(R,u),od(),bt(R,f),nl(()=>{!R._isLeaving||(Ht(R,u),bt(R,_),tl($)||sl(R,s,N,xe))}),Bt($,[R,xe])},onEnterCancelled(R){q(R,!1),Bt(A,[R])},onAppearCancelled(R){q(R,!0),Bt(F,[R])},onLeaveCancelled(R){X(R),Bt(Q,[R])}})}function sd(t){if(t==null)return null;if(he(t))return[ki(t.enter),ki(t.leave)];{const e=ki(t);return[e,e]}}function ki(t){return zn(t)}function bt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Ht(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function nl(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let id=0;function sl(t,e,n,s){const i=t._endId=++id,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:l,propCount:a}=rd(t,e);if(!o)return s();const c=o+"end";let h=0;const u=()=>{t.removeEventListener(c,f),r()},f=_=>{_.target===t&&++h>=a&&u()};setTimeout(()=>{h<a&&u()},l+1),t.addEventListener(c,f)}function rd(t,e){const n=window.getComputedStyle(t),s=y=>(n[y]||"").split(", "),i=s(Ct+"Delay"),r=s(Ct+"Duration"),o=il(i,r),l=s(Ln+"Delay"),a=s(Ln+"Duration"),c=il(l,a);let h=null,u=0,f=0;e===Ct?o>0&&(h=Ct,u=o,f=r.length):e===Ln?c>0&&(h=Ln,u=c,f=a.length):(u=Math.max(o,c),h=u>0?o>c?Ct:Ln:null,f=h?h===Ct?r.length:a.length:0);const _=h===Ct&&/\b(transform|all)(,|$)/.test(n[Ct+"Property"]);return{type:h,timeout:u,propCount:f,hasTransform:_}}function il(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>rl(n)+rl(t[s])))}function rl(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function od(){return document.body.offsetHeight}const ol=t=>{const e=t.props["onUpdate:modelValue"]||!1;return L(e)?n=>Ns(e,n):e};function ld(t){t.target.composing=!0}function ll(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ad={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=ol(i);const r=s||i.props&&i.props.type==="number";fn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=zn(l)),t._assign(l)}),n&&fn(t,"change",()=>{t.value=t.value.trim()}),e||(fn(t,"compositionstart",ld),fn(t,"compositionend",ll),fn(t,"change",ll))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=ol(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&zn(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},cd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},al=(t,e)=>n=>{if(!("key"in n))return;const s=nn(n.key);if(e.some(i=>i===s||cd[i]===s))return t(n)},ud=ke({patchProp:ed},Bf);let cl;function hd(){return cl||(cl=yf(ud))}const fd=(...t)=>{const e=hd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=dd(s);if(!i)return;const r=e._component;!B(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function dd(t){return we(t)?document.querySelector(t):t}/**
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
 */const ec={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const E=function(t,e){if(!t)throw An(e)},An=function(t){return new Error("Firebase Database ("+ec.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const tc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Kr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,h=r>>2,u=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[h],n[u],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||u==null)throw Error();const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),u!==64){const y=c<<6&192|u;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},nc=function(t){const e=tc(t);return Kr.encodeByteArray(e,!0)},sc=function(t){return nc(t).replace(/\./g,"")},ul=function(t){try{return Kr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _d(t){return ic(void 0,t)}function ic(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!md(n)||(t[n]=ic(t[n],e[n]));return t}function md(t){return t!=="__proto__"}/**
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
 */class qr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function gd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gd())}function yd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oc(){return ec.NODE_ADMIN===!0}function vd(){return typeof indexedDB=="object"}function Cd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const bd="FirebaseError";class us extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=bd,Object.setPrototypeOf(this,us.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lc.prototype.create)}}class lc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ed(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new us(i,l,s)}}function Ed(t,e){return t.replace(wd,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const wd=/\{\$([^}]+)}/g;/**
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
 */function Jn(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
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
 */const ac=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Jn(ul(r[0])||""),n=Jn(ul(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Id=function(t){const e=ac(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Td=function(t){const e=ac(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function mt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Tn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function hl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function js(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function nr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(fl(r)&&fl(o)){if(!nr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function fl(t){return t!==null&&typeof t=="object"}/**
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
 */function Sd(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Nd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)s[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const f=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=l^r&(o^l),h=1518500249):(c=r^o^l,h=1859775393):u<60?(c=r&o|l&(r|o),h=2400959708):(c=r^o^l,h=3395469782);const f=(i<<5|i>>>27)+c+a+h+s[u]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function cc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const kd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ci=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ui(t){return t&&t._delegate?t._delegate:t}class Zn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $t="[DEFAULT]";/**
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
 */class xd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new qr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ad(e))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=$t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$t){return this.instances.has(e)}getOptions(e=$t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Rd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$t){return this.component?this.component.multipleInstances?e:$t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rd(t){return t===$t?void 0:t}function Ad(t){return t.instantiationMode==="EAGER"}/**
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
 */class Pd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const Od={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Dd=oe.INFO,Md={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},Ld=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Md[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uc{constructor(e){this.name=e,this._logLevel=Dd,this._logHandler=Ld,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Od[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const Fd=(t,e)=>e.some(n=>t instanceof n);let dl,pl;function jd(){return dl||(dl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bd(){return pl||(pl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hc=new WeakMap,sr=new WeakMap,fc=new WeakMap,xi=new WeakMap,zr=new WeakMap;function Hd(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hc.set(n,t)}).catch(()=>{}),zr.set(e,t),e}function Wd(t){if(sr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});sr.set(t,e)}let ir={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $d(t){ir=t(ir)}function Ud(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ri(this),e,...n);return fc.set(s,e.sort?e.sort():[e]),Nt(s)}:Bd().includes(t)?function(...e){return t.apply(Ri(this),e),Nt(hc.get(this))}:function(...e){return Nt(t.apply(Ri(this),e))}}function Vd(t){return typeof t=="function"?Ud(t):(t instanceof IDBTransaction&&Wd(t),Fd(t,jd())?new Proxy(t,ir):t)}function Nt(t){if(t instanceof IDBRequest)return Hd(t);if(xi.has(t))return xi.get(t);const e=Vd(t);return e!==t&&(xi.set(t,e),zr.set(e,t)),e}const Ri=t=>zr.get(t);function Kd(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Nt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Nt(o.result),a.oldVersion,a.newVersion,Nt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const qd=["get","getKey","getAll","getAllKeys","count"],zd=["put","add","delete","clear"],Ai=new Map;function _l(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ai.get(e))return Ai.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=zd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||qd.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Ai.set(e,r),r}$d(t=>({...t,get:(e,n,s)=>_l(e,n)||t.get(e,n,s),has:(e,n)=>!!_l(e,n)||t.has(e,n)}));/**
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
 */class Yd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Gd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rr="@firebase/app",ml="0.7.32";/**
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
 */const Qt=new uc("@firebase/app"),Qd="@firebase/app-compat",Xd="@firebase/analytics-compat",Jd="@firebase/analytics",Zd="@firebase/app-check-compat",ep="@firebase/app-check",tp="@firebase/auth",np="@firebase/auth-compat",sp="@firebase/database",ip="@firebase/database-compat",rp="@firebase/functions",op="@firebase/functions-compat",lp="@firebase/installations",ap="@firebase/installations-compat",cp="@firebase/messaging",up="@firebase/messaging-compat",hp="@firebase/performance",fp="@firebase/performance-compat",dp="@firebase/remote-config",pp="@firebase/remote-config-compat",_p="@firebase/storage",mp="@firebase/storage-compat",gp="@firebase/firestore",yp="@firebase/firestore-compat",vp="firebase",Cp="9.9.4";/**
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
 */const dc="[DEFAULT]",bp={[rr]:"fire-core",[Qd]:"fire-core-compat",[Jd]:"fire-analytics",[Xd]:"fire-analytics-compat",[ep]:"fire-app-check",[Zd]:"fire-app-check-compat",[tp]:"fire-auth",[np]:"fire-auth-compat",[sp]:"fire-rtdb",[ip]:"fire-rtdb-compat",[rp]:"fire-fn",[op]:"fire-fn-compat",[lp]:"fire-iid",[ap]:"fire-iid-compat",[cp]:"fire-fcm",[up]:"fire-fcm-compat",[hp]:"fire-perf",[fp]:"fire-perf-compat",[dp]:"fire-rc",[pp]:"fire-rc-compat",[_p]:"fire-gcs",[mp]:"fire-gcs-compat",[gp]:"fire-fst",[yp]:"fire-fst-compat","fire-js":"fire-js",[vp]:"fire-js-all"};/**
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
 */const Bs=new Map,or=new Map;function Ep(t,e){try{t.container.addComponent(e)}catch(n){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hs(t){const e=t.name;if(or.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;or.set(e,t);for(const n of Bs.values())Ep(n,t);return!0}function wp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ip={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Xt=new lc("app","Firebase",Ip);/**
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
 */class Tp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
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
 */const Sp=Cp;function Np(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:dc,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Xt.create("bad-app-name",{appName:String(s)});const i=Bs.get(s);if(i){if(nr(t,i.options)&&nr(n,i.config))return i;throw Xt.create("duplicate-app",{appName:s})}const r=new Pd(s);for(const l of or.values())r.addComponent(l);const o=new Tp(t,n,r);return Bs.set(s,o),o}function kp(t=dc){const e=Bs.get(t);if(!e)throw Xt.create("no-app",{appName:t});return e}function Cn(t,e,n){var s;let i=(s=bp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(l.join(" "));return}Hs(new Zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const xp="firebase-heartbeat-database",Rp=1,es="firebase-heartbeat-store";let Pi=null;function pc(){return Pi||(Pi=Kd(xp,Rp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(es)}}}).catch(t=>{throw Xt.create("idb-open",{originalErrorMessage:t.message})})),Pi}async function Ap(t){var e;try{return(await pc()).transaction(es).objectStore(es).get(_c(t))}catch(n){if(n instanceof us)Qt.warn(n.message);else{const s=Xt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Qt.warn(s.message)}}}async function gl(t,e){var n;try{const i=(await pc()).transaction(es,"readwrite");return await i.objectStore(es).put(e,_c(t)),i.done}catch(s){if(s instanceof us)Qt.warn(s.message);else{const i=Xt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Qt.warn(i.message)}}}function _c(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Pp=1024,Op=30*24*60*60*1e3;class Dp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Op}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yl(),{heartbeatsToSend:n,unsentEntries:s}=Mp(this._heartbeatsCache.heartbeats),i=sc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function yl(){return new Date().toISOString().substring(0,10)}function Mp(t,e=Pp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),vl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Lp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vd()?Cd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ap(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vl(t){return sc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Fp(t){Hs(new Zn("platform-logger",e=>new Yd(e),"PRIVATE")),Hs(new Zn("heartbeat",e=>new Dp(e),"PRIVATE")),Cn(rr,ml,t),Cn(rr,ml,"esm2017"),Cn("fire-js","")}Fp("");var jp="firebase",Bp="9.9.4";/**
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
 */Cn(jp,Bp,"app");const Cl="@firebase/database",bl="0.13.6";/**
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
 */let mc="";function Hp(t){mc=t}/**
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
 */class Wp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Jn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class $p{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const gc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Wp(e)}}catch{}return new $p},zt=gc("localStorage"),lr=gc("sessionStorage");/**
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
 */const bn=new uc("@firebase/database"),Up=function(){let t=1;return function(){return t++}}(),yc=function(t){const e=kd(t),n=new Nd;n.update(e);const s=n.digest();return Kr.encodeByteArray(s)},hs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=hs.apply(null,s):typeof s=="object"?e+=ve(s):e+=s,e+=" "}return e};let Gt=null,El=!0;const Vp=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(bn.logLevel=oe.VERBOSE,Gt=bn.log.bind(bn),e&&lr.set("logging_enabled",!0)):typeof t=="function"?Gt=t:(Gt=null,lr.remove("logging_enabled"))},Re=function(...t){if(El===!0&&(El=!1,Gt===null&&lr.get("logging_enabled")===!0&&Vp(!0)),Gt){const e=hs.apply(null,t);Gt(e)}},fs=function(t){return function(...e){Re(t,...e)}},ar=function(...t){const e="FIREBASE INTERNAL ERROR: "+hs(...t);bn.error(e)},Jt=function(...t){const e=`FIREBASE FATAL ERROR: ${hs(...t)}`;throw bn.error(e),new Error(e)},He=function(...t){const e="FIREBASE WARNING: "+hs(...t);bn.warn(e)},Kp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},vc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},qp=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Sn="[MIN_NAME]",Zt="[MAX_NAME]",Pn=function(t,e){if(t===e)return 0;if(t===Sn||e===Zt)return-1;if(e===Sn||t===Zt)return 1;{const n=wl(t),s=wl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},zp=function(t,e){return t===e?0:t<e?-1:1},Fn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},Yr=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ve(e[s]),n+=":",n+=Yr(t[e[s]]);return n+="}",n},Cc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const bc=function(t){E(!vc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(a=0;a<64;a+=8){let f=parseInt(h.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},Yp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Gp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Qp(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Xp=new RegExp("^-?(0*)\\d{1,10}$"),Jp=-2147483648,Zp=2147483647,wl=function(t){if(Xp.test(t)){const e=Number(t);if(e>=Jp&&e<=Zp)return e}return null},ds=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw He("Exception was thrown by user callback.",n),e},Math.floor(0))}},e_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Un=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class t_{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){He(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class n_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Re("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',He(e)}}class cr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}cr.OWNER="owner";/**
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
 */const Gr="5",Ec="v",wc="s",Ic="r",Tc="f",Sc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Nc="ls",kc="p",ur="ac",xc="websocket",Rc="long_polling";/**
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
 */class s_{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function i_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ac(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===xc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Rc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);i_(t)&&(n.ns=t.namespace);const i=[];return Fe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class r_{constructor(){this.counters_={}}incrementCounter(e,n=1){mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return _d(this.counters_)}}/**
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
 */const Oi={},Di={};function Qr(t){const e=t.toString();return Oi[e]||(Oi[e]=new r_),Oi[e]}function o_(t,e){const n=t.toString();return Di[n]||(Di[n]=e()),Di[n]}/**
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
 */class l_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ds(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Il="start",a_="close",c_="pLPCommand",u_="pRTLPCB",Pc="id",Oc="pw",Dc="ser",h_="cb",f_="seg",d_="ts",p_="d",__="dframe",Mc=1870,Lc=30,m_=Mc-Lc,g_=25e3,y_=3e4;class dn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fs(e),this.stats_=Qr(n),this.urlFn=a=>(this.appCheckToken&&(a[ur]=this.appCheckToken),Ac(n,Rc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new l_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(y_)),qp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xr((...r)=>{const[o,l,a,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Il)this.id=l,this.password=a;else if(o===a_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Il]="t",s[Dc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[h_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ec]=Gr,this.transportSessionId&&(s[wc]=this.transportSessionId),this.lastSessionId&&(s[Nc]=this.lastSessionId),this.applicationId&&(s[kc]=this.applicationId),this.appCheckToken&&(s[ur]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sc.test(location.hostname)&&(s[Ic]=Tc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){dn.forceAllow_=!0}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){return dn.forceAllow_?!0:!dn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Yp()&&!Gp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=nc(n),i=Cc(s,m_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[__]="t",s[Pc]=e,s[Oc]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xr{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Up(),window[c_+this.uniqueCallbackIdentifier]=e,window[u_+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xr.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Re("frame writing exception"),l.stack&&Re(l.stack),Re(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Re("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Pc]=this.myID,e[Oc]=this.myPW,e[Dc]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Lc+s.length<=Mc;){const o=this.pendingSegs.shift();s=s+"&"+f_+i+"="+o.seg+"&"+d_+i+"="+o.ts+"&"+p_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(g_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Re("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const v_=16384,C_=45e3;let Ws=null;typeof MozWebSocket<"u"?Ws=MozWebSocket:typeof WebSocket<"u"&&(Ws=WebSocket);class Ye{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fs(this.connId),this.stats_=Qr(n),this.connURL=Ye.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Ec]=Gr,typeof location<"u"&&location.hostname&&Sc.test(location.hostname)&&(o[Ic]=Tc),n&&(o[wc]=n),s&&(o[Nc]=s),i&&(o[ur]=i),r&&(o[kc]=r),Ac(e,xc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zt.set("previous_websocket_failure",!0);try{let s;oc(),this.mySock=new Ws(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ws!==null&&!Ye.forceDisallow_}static previouslyFailed(){return zt.isInMemoryStorage||zt.get("previous_websocket_failure")===!0}markConnectionHealthy(){zt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Jn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Cc(n,v_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(C_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ye.responsesRequiredToBeHealthy=2;Ye.healthyTimeout=3e4;/**
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
 */class ts{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[dn,Ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ye&&Ye.isAvailable();let s=n&&!Ye.previouslyFailed();if(e.webSocketOnly&&(n||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ye];else{const i=this.transports_=[];for(const r of ts.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ts.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ts.globalTransportInitialized_=!1;/**
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
 */const b_=6e4,E_=5e3,w_=10*1024,I_=100*1024,Mi="t",Tl="d",T_="s",Sl="r",S_="e",Nl="o",kl="a",xl="n",Rl="p",N_="h";class k_{constructor(e,n,s,i,r,o,l,a,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fs("c:"+this.id+":"),this.transportManager_=new ts(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Un(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>I_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>w_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Mi in e){const n=e[Mi];n===kl?this.upgradeIfSecondaryHealthy_():n===Sl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Nl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Fn("t",e),s=Fn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Rl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:kl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Fn("t",e),s=Fn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Fn(Mi,e);if(Tl in e){const s=e[Tl];if(n===N_)this.onHandshake_(s);else if(n===xl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===T_?this.onConnectionShutdown_(s):n===Sl?this.onReset_(s):n===S_?ar("Server Error: "+s):n===Nl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ar("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Gr!==s&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Un(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(b_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Un(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(E_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Rl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Fc{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class jc{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class $s extends jc{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $s}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Al=32,Pl=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new se("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ot(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function Bc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function x_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Hc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Wc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function Ce(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new se(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function De(t,e){const n=U(t),s=U(e);if(n===null)return e;if(n===s)return De(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $c(t,e){if(Ot(t)!==Ot(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Qe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ot(t)>Ot(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class R_{constructor(e,n){this.errorPrefix_=n,this.parts_=Hc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ci(this.parts_[s]);Uc(this)}}function A_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ci(e),Uc(t)}function P_(t){const e=t.parts_.pop();t.byteLength_-=ci(e),t.parts_.length>0&&(t.byteLength_-=1)}function Uc(t){if(t.byteLength_>Pl)throw new Error(t.errorPrefix_+"has a key path longer than "+Pl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Al)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Al+") or object contains a cycle "+Ut(t))}function Ut(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Jr extends jc{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Jr}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const jn=1e3,O_=60*5*1e3,Ol=30*1e3,D_=1.3,M_=3e4,L_="server_kill",Dl=3;class dt extends Fc{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=dt.nextPersistentConnectionId_++,this.log_=fs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=jn,this.maxReconnectDelay_=O_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!oc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Jr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$s.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ve(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new qr,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;dt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&mt(e,"w")){const s=Tn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Td(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ol)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Id(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ar("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=jn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=jn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>M_&&(this.reconnectDelay_=jn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*D_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+dt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(u){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Re("getToken() completed but was canceled"):(Re("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,l=new k_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{He(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(L_)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&He(u),a())}}}interrupt(e){Re("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Re("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hl(this.interruptReasons_)&&(this.reconnectDelay_=jn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Yr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Re("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Dl&&(this.reconnectDelay_=Ol,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Re("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Dl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+mc.replace(/\./g,"-")]=1,rc()?e["framework.cordova"]=1:yd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$s.getInstance().currentlyOnline();return hl(this.interruptReasons_)&&e}}dt.nextPersistentConnectionId_=0;dt.nextConnectionId_=0;/**
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
 */class H{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new H(e,n)}}/**
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
 */class hi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new H(Sn,e),i=new H(Sn,n);return this.compare(s,i)!==0}minPost(){return H.MIN}}/**
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
 */let Is;class Vc extends hi{static get __EMPTY_NODE(){return Is}static set __EMPTY_NODE(e){Is=e}compare(e,n){return Pn(e.name,n.name)}isDefinedOn(e){throw An("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(Zt,Is)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,Is)}toString(){return".key"}}const En=new Vc;/**
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
 */class Ts{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Ee.RED,this.left=i!=null?i:Le.EMPTY_NODE,this.right=r!=null?r:Le.EMPTY_NODE}copy(e,n,s,i,r){return new Ee(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class F_{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ts(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ts(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ts(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ts(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new F_;/**
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
 */function j_(t,e){return Pn(t.name,e.name)}function Zr(t,e){return Pn(t,e)}/**
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
 */let hr;function B_(t){hr=t}const Kc=function(t){return typeof t=="number"?"number:"+bc(t):"string:"+t},qc=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mt(e,".sv"),"Priority must be a string or number.")}else E(t===hr||t.isEmpty(),"priority of unexpected type.");E(t===hr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ml;class be{constructor(e,n=be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qc(this.priorityNode_)}static set __childrenNodeConstructor(e){Ml=e}static get __childrenNodeConstructor(){return Ml}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:U(e)===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=U(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||Ot(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,be.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Kc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=bc(this.value_):e+=this.value_,this.lazyHash_=yc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof be.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=be.VALUE_TYPE_ORDER.indexOf(n),r=be.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let zc,Yc;function H_(t){zc=t}function W_(t){Yc=t}class $_ extends hi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Pn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Zt,new be("[PRIORITY-POST]",Yc))}makePost(e,n){const s=zc(e);return new H(n,new be("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new $_;/**
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
 */const U_=Math.log(2);class V_{constructor(e){const n=r=>parseInt(Math.log(r)/U_,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Us=function(t,e,n,s){t.sort(e);const i=function(a,c){const h=c-a;let u,f;if(h===0)return null;if(h===1)return u=t[a],f=n?n(u):u,new Ee(f,u.node,Ee.BLACK,null,null);{const _=parseInt(h/2,10)+a,y=i(a,_),S=i(_+1,c);return u=t[_],f=n?n(u):u,new Ee(f,u.node,Ee.BLACK,y,S)}},r=function(a){let c=null,h=null,u=t.length;const f=function(y,S){const N=u-y,M=u;u-=y;const x=i(N+1,M),A=t[N],$=n?n(A):A;_(new Ee($,A.node,S,null,x))},_=function(y){c?(c.left=y,c=y):(h=y,c=y)};for(let y=0;y<a.count;++y){const S=a.nextBitIsOne(),N=Math.pow(2,a.count-(y+1));S?f(N,Ee.BLACK):(f(N,Ee.BLACK),f(N,Ee.RED))}return h},o=new V_(t.length),l=r(o);return new Le(s||e,l)};/**
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
 */let Li;const un={};class ht{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(un&&_e,"ChildrenNode.ts has not been loaded"),Li=Li||new ht({".priority":un},{".priority":_e}),Li}get(e){const n=Tn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return mt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==En,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(H.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Us(s,e.getCompare()):l=un;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new ht(h,c)}addToIndexes(e,n){const s=js(this.indexes_,(i,r)=>{const o=Tn(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===un)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(H.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Us(l,o.getCompare())}else return un;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new H(e.name,l))),a.insert(e,e.node)}});return new ht(s,this.indexSet_)}removeFromIndexes(e,n){const s=js(this.indexes_,i=>{if(i===un)return i;{const r=n.get(e.name);return r?i.remove(new H(e.name,r)):i}});return new ht(s,this.indexSet_)}}/**
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
 */let Bn;class D{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&qc(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bn||(Bn=new D(new Le(Zr),null,ht.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bn}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bn:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new H(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Bn:this.priorityNode_;return new D(i,o,r)}}updateChild(e,n){const s=U(e);if(s===null)return n;{E(U(e)!==".priority"||Ot(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(le(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,l)=>{n[o]=l.val(e),s++,r&&D.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Kc(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":yc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new H(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ps?-1:0}withIndex(e){if(e===En||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===En||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===En?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class K_ extends D{constructor(){super(new Le(Zr),D.EMPTY_NODE,ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const ps=new K_;Object.defineProperties(H,{MIN:{value:new H(Sn,D.EMPTY_NODE)},MAX:{value:new H(Zt,ps)}});Vc.__EMPTY_NODE=D.EMPTY_NODE;be.__childrenNodeConstructor=D;B_(ps);W_(ps);/**
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
 */const q_=!0;function Se(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new be(n,Se(e))}if(!(t instanceof Array)&&q_){const n=[];let s=!1;if(Fe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Se(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new H(o,a)))}}),n.length===0)return D.EMPTY_NODE;const r=Us(n,j_,o=>o.name,Zr);if(s){const o=Us(n,_e.getCompare());return new D(r,Se(e),new ht({".priority":o},{".priority":_e}))}else return new D(r,Se(e),ht.Default)}else{let n=D.EMPTY_NODE;return Fe(t,(s,i)=>{if(mt(t,s)&&s.substring(0,1)!=="."){const r=Se(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Se(e))}}H_(Se);/**
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
 */class z_ extends hi{constructor(e){super(),this.indexPath_=e,E(!W(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Pn(e.name,n.name):r}makePost(e,n){const s=Se(e),i=D.EMPTY_NODE.updateChild(this.indexPath_,s);return new H(n,i)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,ps);return new H(Zt,e)}toString(){return Hc(this.indexPath_,0).join("/")}}/**
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
 */class Y_ extends hi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Pn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const s=Se(e);return new H(n,s)}toString(){return".value"}}const G_=new Y_;/**
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
 */function Gc(t){return{type:"value",snapshotNode:t}}function Nn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ns(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ss(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Q_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class eo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ns(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Nn(n,s)):o.trackChildChange(ss(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(ns(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ss(i,r,o))}else s.trackChildChange(Nn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class is{constructor(e){this.indexedFilter_=new eo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=is.getStartPost_(e),this.endPost_=is.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new H(n,s))||(s=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,l)=>{r.matches(new H(o,l))||(i=i.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class X_{constructor(e){this.rangedFilter_=new is(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new H(n,s))||(s=D.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const u=this.index_.getCompare();l=(f,_)=>u(_,f)}else a=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,h=!1;for(;a.hasNext();){const u=a.getNext();!h&&l(r,u)<=0&&(h=!0),h&&c<this.limit_&&l(u,o)<=0?c++:i=i.updateImmediateChild(u.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,_)=>u(_,f)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new H(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const u=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(h&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ss(n,s,u)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ns(n,u));const S=l.updateImmediateChild(n,D.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Nn(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return s.isEmpty()?e:h&&o(c,a)>=0?(r!=null&&(r.trackChildChange(ns(c.name,c.node)),r.trackChildChange(Nn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,D.EMPTY_NODE)):e}}/**
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
 */class to{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Sn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new to;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function J_(t){return t.loadsAllData()?new eo(t.getIndex()):t.hasLimit()?new X_(t):new is(t)}function Ll(t){const e={};if(t.isDefault())return e;let n;return t.index_===_e?n="$priority":t.index_===G_?n="$value":t.index_===En?n="$key":(E(t.index_ instanceof z_,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_&&(e.startAt=ve(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ve(t.indexStartName_))),t.endSet_&&(e.endAt=ve(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ve(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Fl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
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
 */class Vs extends Fc{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=fs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Vs.getListenId_(e,s),l={};this.listens_[o]=l;const a=Ll(e._queryParams);this.restRequest_(r+".json",a,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),Tn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Vs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ll(e._queryParams),s=e._path.toString(),i=new qr;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Sd(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Jn(l.responseText)}catch{He("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&He("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class Z_{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ks(){return{value:null,children:new Map}}function Qc(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=U(e);t.children.has(s)||t.children.set(s,Ks());const i=t.children.get(s);e=le(e),Qc(i,e,n)}}function fr(t,e,n){t.value!==null?n(e,t.value):em(t,(s,i)=>{const r=new se(e.toString()+"/"+s);fr(i,r,n)})}function em(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class tm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const jl=10*1e3,nm=30*1e3,sm=5*60*1e3;class im{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new tm(e);const s=jl+(nm-jl)*Math.random();Un(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Fe(e,(i,r)=>{r>0&&mt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Un(this.reportStats_.bind(this),Math.floor(Math.random()*2*sm))}}/**
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
 */var Xe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xe||(Xe={}));function Xc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function no(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function so(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class qs{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xe.ACK_USER_WRITE,this.source=Xc()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new qs(G(),n,this.revert)}}else return E(U(this.path)===e,"operationForChild called for unrelated child."),new qs(le(this.path),this.affectedTree,this.revert)}}/**
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
 */class rs{constructor(e,n){this.source=e,this.path=n,this.type=Xe.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new rs(this.source,G()):new rs(this.source,le(this.path))}}/**
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
 */class en{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xe.OVERWRITE}operationForChild(e){return W(this.path)?new en(this.source,G(),this.snap.getImmediateChild(e)):new en(this.source,le(this.path),this.snap)}}/**
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
 */class os{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xe.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new en(this.source,G(),n.value):new os(this.source,G(),n)}else return E(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new os(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Dt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class rm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function om(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Q_(o.childName,o.snapshotNode))}),Hn(t,i,"child_removed",e,s,n),Hn(t,i,"child_added",e,s,n),Hn(t,i,"child_moved",r,s,n),Hn(t,i,"child_changed",e,s,n),Hn(t,i,"value",e,s,n),i}function Hn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>am(t,l,a)),o.forEach(l=>{const a=lm(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function lm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function am(t,e,n){if(e.childName==null||n.childName==null)throw An("Should only compare child_ events.");const s=new H(e.childName,e.snapshotNode),i=new H(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function fi(t,e){return{eventCache:t,serverCache:e}}function Vn(t,e,n,s){return fi(new Dt(e,n,s),t.serverCache)}function Jc(t,e,n,s){return fi(t.eventCache,new Dt(e,n,s))}function zs(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function tn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Fi;const cm=()=>(Fi||(Fi=new Le(zp)),Fi);class ue{constructor(e,n=cm()){this.value=e,this.children=n}static fromObject(e){let n=new ue(null);return Fe(e,(s,i)=>{n=n.set(new se(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(W(e))return null;{const s=U(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(le(e),n);return r!=null?{path:Ce(new se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=U(e),s=this.children.get(n);return s!==null?s.subtree(le(e)):new ue(null)}}set(e,n){if(W(e))return new ue(n,this.children);{const s=U(e),r=(this.children.get(s)||new ue(null)).set(le(e),n),o=this.children.insert(s,r);return new ue(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=U(e),s=this.children.get(n);if(s){const i=s.remove(le(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ue(null):new ue(this.value,r)}else return this}}get(e){if(W(e))return this.value;{const n=U(e),s=this.children.get(n);return s?s.get(le(e)):null}}setTree(e,n){if(W(e))return n;{const s=U(e),r=(this.children.get(s)||new ue(null)).setTree(le(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ue(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ce(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(W(e))return null;{const r=U(e),o=this.children.get(r);return o?o.findOnPath_(le(e),Ce(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,s){if(W(e))return this;{this.value&&s(n,this.value);const i=U(e),r=this.children.get(i);return r?r.foreachOnPath_(le(e),Ce(n,i),s):new ue(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ce(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new ue(null))}}function Kn(t,e,n){if(W(e))return new et(new ue(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=De(i,e);return r=r.updateChild(o,n),new et(t.writeTree_.set(i,r))}else{const i=new ue(n),r=t.writeTree_.setTree(e,i);return new et(r)}}}function Bl(t,e,n){let s=t;return Fe(n,(i,r)=>{s=Kn(s,Ce(e,i),r)}),s}function Hl(t,e){if(W(e))return et.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new et(n)}}function dr(t,e){return sn(t,e)!=null}function sn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(De(n.path,e)):null}function Wl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new H(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new H(s,i.value))}),e}function kt(t,e){if(W(e))return t;{const n=sn(t,e);return n!=null?new et(new ue(n)):new et(t.writeTree_.subtree(e))}}function pr(t){return t.writeTree_.isEmpty()}function kn(t,e){return Zc(G(),t.writeTree_,e)}function Zc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Zc(Ce(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ce(t,".priority"),s)),n}}/**
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
 */function di(t,e){return su(e,t)}function um(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Kn(t.visibleWrites,e,n)),t.lastWriteId=s}function hm(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function fm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&dm(l,s.path)?i=!1:Qe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return pm(t),!0;if(s.snap)t.visibleWrites=Hl(t.visibleWrites,s.path);else{const l=s.children;Fe(l,a=>{t.visibleWrites=Hl(t.visibleWrites,Ce(s.path,a))})}return!0}else return!1}function dm(t,e){if(t.snap)return Qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qe(Ce(t.path,n),e))return!0;return!1}function pm(t){t.visibleWrites=eu(t.allWrites,_m,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function _m(t){return t.visible}function eu(t,e,n){let s=et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Qe(n,o)?(l=De(n,o),s=Kn(s,l,r.snap)):Qe(o,n)&&(l=De(o,n),s=Kn(s,G(),r.snap.getChild(l)));else if(r.children){if(Qe(n,o))l=De(n,o),s=Bl(s,l,r.children);else if(Qe(o,n))if(l=De(o,n),W(l))s=Bl(s,G(),r.children);else{const a=Tn(r.children,U(l));if(a){const c=a.getChild(le(l));s=Kn(s,G(),c)}}}else throw An("WriteRecord should have .snap or .children")}}return s}function tu(t,e,n,s,i){if(!s&&!i){const r=sn(t.visibleWrites,e);if(r!=null)return r;{const o=kt(t.visibleWrites,e);if(pr(o))return n;if(n==null&&!dr(o,G()))return null;{const l=n||D.EMPTY_NODE;return kn(o,l)}}}else{const r=kt(t.visibleWrites,e);if(!i&&pr(r))return n;if(!i&&n==null&&!dr(r,G()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Qe(c.path,e)||Qe(e,c.path))},l=eu(t.allWrites,o,e),a=n||D.EMPTY_NODE;return kn(l,a)}}}function mm(t,e,n){let s=D.EMPTY_NODE;const i=sn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=kt(t.visibleWrites,e);return n.forEachChild(_e,(o,l)=>{const a=kn(kt(r,new se(o)),l);s=s.updateImmediateChild(o,a)}),Wl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=kt(t.visibleWrites,e);return Wl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function gm(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ce(e,n);if(dr(t.visibleWrites,r))return null;{const o=kt(t.visibleWrites,r);return pr(o)?i.getChild(n):kn(o,i.getChild(n))}}function ym(t,e,n,s){const i=Ce(e,n),r=sn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=kt(t.visibleWrites,i);return kn(o,s.getNode().getImmediateChild(n))}else return null}function vm(t,e){return sn(t.visibleWrites,e)}function Cm(t,e,n,s,i,r,o){let l;const a=kt(t.visibleWrites,e),c=sn(a,G());if(c!=null)l=c;else if(n!=null)l=kn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],u=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&h.length<i;)u(_,s)!==0&&h.push(_),_=f.getNext();return h}else return[]}function bm(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function Ys(t,e,n,s){return tu(t.writeTree,t.treePath,e,n,s)}function io(t,e){return mm(t.writeTree,t.treePath,e)}function $l(t,e,n,s){return gm(t.writeTree,t.treePath,e,n,s)}function Gs(t,e){return vm(t.writeTree,Ce(t.treePath,e))}function Em(t,e,n,s,i,r){return Cm(t.writeTree,t.treePath,e,n,s,i,r)}function ro(t,e,n){return ym(t.writeTree,t.treePath,e,n)}function nu(t,e){return su(Ce(t.treePath,e),t.writeTree)}function su(t,e){return{treePath:t,writeTree:e}}/**
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
 */class wm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ss(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ns(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Nn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ss(s,e.snapshotNode,i.oldSnap));else throw An("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Im{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const iu=new Im;class oo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Dt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ro(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tn(this.viewCache_),r=Em(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Tm(t){return{filter:t}}function Sm(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Nm(t,e,n,s,i){const r=new wm;let o,l;if(n.type===Xe.OVERWRITE){const c=n;c.source.fromUser?o=_r(t,e,c.path,c.snap,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!W(c.path),o=Qs(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Xe.MERGE){const c=n;c.source.fromUser?o=xm(t,e,c.path,c.children,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=mr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Xe.ACK_USER_WRITE){const c=n;c.revert?o=Pm(t,e,c.path,s,i,r):o=Rm(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Xe.LISTEN_COMPLETE)o=Am(t,e,n.path,s,r);else throw An("Unknown operation type: "+n.type);const a=r.getChanges();return km(e,o,a),{viewCache:o,changes:a}}function km(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=zs(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Gc(zs(e)))}}function ru(t,e,n,s,i,r){const o=e.eventCache;if(Gs(s,n)!=null)return e;{let l,a;if(W(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=tn(e),h=c instanceof D?c:D.EMPTY_NODE,u=io(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Ys(s,tn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=U(n);if(c===".priority"){E(Ot(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const u=$l(s,n,h,a);u!=null?l=t.filter.updatePriority(h,u):l=o.getNode()}else{const h=le(n);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=$l(s,n,o.getNode(),a);f!=null?u=o.getNode().getImmediateChild(c).updateChild(h,f):u=o.getNode().getImmediateChild(c)}else u=ro(s,c,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),c,u,h,i,r):l=o.getNode()}}return Vn(e,l,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Qs(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(W(n))c=h.updateFullNode(a.getNode(),s,null);else if(h.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=h.updateFullNode(a.getNode(),_,null)}else{const _=U(n);if(!a.isCompleteForPath(n)&&Ot(n)>1)return e;const y=le(n),N=a.getNode().getImmediateChild(_).updateChild(y,s);_===".priority"?c=h.updatePriority(a.getNode(),N):c=h.updateChild(a.getNode(),_,N,y,iu,null)}const u=Jc(e,c,a.isFullyInitialized()||W(n),h.filtersNodes()),f=new oo(i,u,r);return ru(t,u,n,i,f,l)}function _r(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const h=new oo(i,e,r);if(W(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Vn(e,c,!0,t.filter.filtersNodes());else{const u=U(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Vn(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=le(n),_=l.getNode().getImmediateChild(u);let y;if(W(f))y=s;else{const S=h.getCompleteChild(u);S!=null?Bc(f)===".priority"&&S.getChild(Wc(f)).isEmpty()?y=S:y=S.updateChild(f,s):y=D.EMPTY_NODE}if(_.equals(y))a=e;else{const S=t.filter.updateChild(l.getNode(),u,y,f,h,o);a=Vn(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ul(t,e){return t.eventCache.isCompleteForChild(e)}function xm(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const h=Ce(n,a);Ul(e,U(h))&&(l=_r(t,l,h,c,i,r,o))}),s.foreach((a,c)=>{const h=Ce(n,a);Ul(e,U(h))||(l=_r(t,l,h,c,i,r,o))}),l}function Vl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function mr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;W(n)?c=s:c=new ue(null).setTree(n,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(h.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),y=Vl(t,_,f);a=Qs(t,a,new se(u),y,i,r,o,l)}}),c.children.inorderTraversal((u,f)=>{const _=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!h.hasChild(u)&&!_){const y=e.serverCache.getNode().getImmediateChild(u),S=Vl(t,y,f);a=Qs(t,a,new se(u),S,i,r,o,l)}}),a}function Rm(t,e,n,s,i,r,o){if(Gs(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(W(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Qs(t,e,n,a.getNode().getChild(n),i,r,l,o);if(W(n)){let c=new ue(null);return a.getNode().forEachChild(En,(h,u)=>{c=c.set(new se(h),u)}),mr(t,e,n,c,i,r,l,o)}else return e}else{let c=new ue(null);return s.foreach((h,u)=>{const f=Ce(n,h);a.isCompleteForPath(f)&&(c=c.set(h,a.getNode().getChild(f)))}),mr(t,e,n,c,i,r,l,o)}}function Am(t,e,n,s,i){const r=e.serverCache,o=Jc(e,r.getNode(),r.isFullyInitialized()||W(n),r.isFiltered());return ru(t,o,n,s,iu,i)}function Pm(t,e,n,s,i,r){let o;if(Gs(s,n)!=null)return e;{const l=new oo(s,e,i),a=e.eventCache.getNode();let c;if(W(n)||U(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Ys(s,tn(e));else{const u=e.serverCache.getNode();E(u instanceof D,"serverChildren would be complete if leaf node"),h=io(s,u)}h=h,c=t.filter.updateFullNode(a,h,r)}else{const h=U(n);let u=ro(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=a.getImmediateChild(h)),u!=null?c=t.filter.updateChild(a,h,u,le(n),l,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(a,h,D.EMPTY_NODE,le(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ys(s,tn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Gs(s,G())!=null,Vn(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Om{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new eo(s.getIndex()),r=J_(s);this.processor_=Tm(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(D.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(D.EMPTY_NODE,l.getNode(),null),h=new Dt(a,o.isFullyInitialized(),i.filtersNodes()),u=new Dt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=fi(u,h),this.eventGenerator_=new rm(this.query_)}get query(){return this.query_}}function Dm(t){return t.viewCache_.serverCache.getNode()}function Mm(t){return zs(t.viewCache_)}function Lm(t,e){const n=tn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function Kl(t){return t.eventRegistrations_.length===0}function Fm(t,e){t.eventRegistrations_.push(e)}function ql(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function zl(t,e,n,s){e.type===Xe.MERGE&&e.source.queryId!==null&&(E(tn(t.viewCache_),"We should always have a full cache before handling merges"),E(zs(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Nm(t.processor_,i,e,n,s);return Sm(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,ou(t,r.changes,r.viewCache.eventCache.getNode(),null)}function jm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(Nn(r,o))}),n.isFullyInitialized()&&s.push(Gc(n.getNode())),ou(t,s,n.getNode(),e)}function ou(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return om(t.eventGenerator_,e,n,i)}/**
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
 */let Xs;class lu{constructor(){this.views=new Map}}function Bm(t){E(!Xs,"__referenceConstructor has already been defined"),Xs=t}function Hm(){return E(Xs,"Reference.ts has not been loaded"),Xs}function Wm(t){return t.views.size===0}function lo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),zl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(zl(o,e,n,s));return r}}function au(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Ys(n,i?s:null),a=!1;l?a=!0:s instanceof D?(l=io(n,s),a=!1):(l=D.EMPTY_NODE,a=!1);const c=fi(new Dt(l,a,!1),new Dt(s,i,!1));return new Om(e,c)}return o}function $m(t,e,n,s,i,r){const o=au(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Fm(o,n),jm(o,n)}function Um(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Mt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(ql(c,n,s)),Kl(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(ql(a,n,s)),Kl(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Mt(t)&&r.push(new(Hm())(e._repo,e._path)),{removed:r,events:o}}function cu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xt(t,e){let n=null;for(const s of t.views.values())n=n||Lm(s,e);return n}function uu(t,e){if(e._queryParams.loadsAllData())return pi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function hu(t,e){return uu(t,e)!=null}function Mt(t){return pi(t)!=null}function pi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Js;function Vm(t){E(!Js,"__referenceConstructor has already been defined"),Js=t}function Km(){return E(Js,"Reference.ts has not been loaded"),Js}let qm=1;class Yl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=bm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zm(t,e,n,s,i){return um(t.pendingWriteTree_,e,n,s,i),i?ms(t,new en(Xc(),e,n)):[]}function pn(t,e,n=!1){const s=hm(t.pendingWriteTree_,e);if(fm(t.pendingWriteTree_,e)){let r=new ue(null);return s.snap!=null?r=r.set(G(),!0):Fe(s.children,o=>{r=r.set(new se(o),!0)}),ms(t,new qs(s.path,r,n))}else return[]}function _s(t,e,n){return ms(t,new en(no(),e,n))}function Ym(t,e,n){const s=ue.fromObject(n);return ms(t,new os(no(),e,s))}function Gm(t,e){return ms(t,new rs(no(),e))}function Qm(t,e,n){const s=ao(t,n);if(s){const i=co(s),r=i.path,o=i.queryId,l=De(r,e),a=new rs(so(o),l);return uo(t,r,a)}else return[]}function fu(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||hu(o,e))){const a=Um(o,e,n,s);Wm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const h=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(f,_)=>Mt(_));if(h&&!u){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=eg(f);for(let y=0;y<_.length;++y){const S=_[y],N=S.query,M=gu(t,S);t.listenProvider_.startListening(qn(N),ls(t,N),M.hashFn,M.onComplete)}}}!u&&c.length>0&&!s&&(h?t.listenProvider_.stopListening(qn(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(_i(f));t.listenProvider_.stopListening(qn(f),_)}))}tg(t,c)}return l}function du(t,e,n,s){const i=ao(t,s);if(i!=null){const r=co(i),o=r.path,l=r.queryId,a=De(o,e),c=new en(so(l),a,n);return uo(t,o,c)}else return[]}function Xm(t,e,n,s){const i=ao(t,s);if(i){const r=co(i),o=r.path,l=r.queryId,a=De(o,e),c=ue.fromObject(n),h=new os(so(l),a,c);return uo(t,o,h)}else return[]}function Jm(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const y=De(f,i);r=r||xt(_,y),o=o||Mt(_)});let l=t.syncPointTree_.get(i);l?(o=o||Mt(l),r=r||xt(l,G())):(l=new lu,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=D.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const S=xt(y,G());S&&(r=r.updateImmediateChild(_,S))}));const c=hu(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=_i(e);E(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=ng();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const h=di(t.pendingWriteTree_,i);let u=$m(l,e,n,h,r,a);if(!c&&!o&&!s){const f=uu(l,e);u=u.concat(sg(t,e,f))}return u}function pu(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=De(o,e),c=xt(l,a);if(c)return c});return tu(i,e,r,n,!0)}function Zm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const u=De(c,n);s=s||xt(h,u)});let i=t.syncPointTree_.get(n);i?s=s||xt(i,G()):(i=new lu,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Dt(s,!0,!1):null,l=di(t.pendingWriteTree_,e._path),a=au(i,e,l,r?o.getNode():D.EMPTY_NODE,r);return Mm(a)}function ms(t,e){return _u(e,t.syncPointTree_,null,di(t.pendingWriteTree_,G()))}function _u(t,e,n,s){if(W(t.path))return mu(t,e,n,s);{const i=e.get(G());n==null&&i!=null&&(n=xt(i,G()));let r=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,h=nu(s,o);r=r.concat(_u(l,a,c,h))}return i&&(r=r.concat(lo(i,t,s,n))),r}}function mu(t,e,n,s){const i=e.get(G());n==null&&i!=null&&(n=xt(i,G()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=nu(s,o),h=t.operationForChild(o);h&&(r=r.concat(mu(h,l,a,c)))}),i&&(r=r.concat(lo(i,t,s,n))),r}function gu(t,e){const n=e.query,s=ls(t,n);return{hashFn:()=>(Dm(e)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Qm(t,n._path,s):Gm(t,n._path);{const r=Qp(i,n);return fu(t,n,null,r)}}}}function ls(t,e){const n=_i(e);return t.queryToTagMap.get(n)}function _i(t){return t._path.toString()+"$"+t._queryIdentifier}function ao(t,e){return t.tagToQueryMap.get(e)}function co(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function uo(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=di(t.pendingWriteTree_,e);return lo(s,n,i,null)}function eg(t){return t.fold((e,n,s)=>{if(n&&Mt(n))return[pi(n)];{let i=[];return n&&(i=cu(n)),Fe(s,(r,o)=>{i=i.concat(o)}),i}})}function qn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Km())(t._repo,t._path):t}function tg(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=_i(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function ng(){return qm++}function sg(t,e,n){const s=e._path,i=ls(t,e),r=gu(t,n),o=t.listenProvider_.startListening(qn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)E(!Mt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,h,u)=>{if(!W(c)&&h&&Mt(h))return[pi(h).query];{let f=[];return h&&(f=f.concat(cu(h).map(_=>_.query))),Fe(u,(_,y)=>{f=f.concat(y)}),f}});for(let c=0;c<a.length;++c){const h=a[c];t.listenProvider_.stopListening(qn(h),ls(t,h))}}return o}/**
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
 */class ho{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ho(n)}node(){return this.node_}}class fo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ce(this.path_,e);return new fo(this.syncTree_,n)}node(){return pu(this.syncTree_,this.path_)}}const ig=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Gl=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return rg(t[".sv"],e,n);if(typeof t[".sv"]=="object")return og(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},rg=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},og=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},lg=function(t,e,n,s){return po(e,new fo(n,t),s)},ag=function(t,e,n){return po(t,new ho(e),n)};function po(t,e,n){const s=t.getPriority().val(),i=Gl(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Gl(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new be(l,Se(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new be(i))),o.forEachChild(_e,(l,a)=>{const c=po(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class _o{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function mo(t,e){let n=e instanceof se?e:new se(e),s=t,i=U(n);for(;i!==null;){const r=Tn(s.node.children,i)||{children:{},childCount:0};s=new _o(i,s,r),n=le(n),i=U(n)}return s}function On(t){return t.node.value}function yu(t,e){t.node.value=e,gr(t)}function vu(t){return t.node.childCount>0}function cg(t){return On(t)===void 0&&!vu(t)}function mi(t,e){Fe(t.node.children,(n,s)=>{e(new _o(n,t,s))})}function Cu(t,e,n,s){n&&!s&&e(t),mi(t,i=>{Cu(i,e,!0,s)}),n&&s&&e(t)}function ug(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function gs(t){return new se(t.parent===null?t.name:gs(t.parent)+"/"+t.name)}function gr(t){t.parent!==null&&hg(t.parent,t.name,t)}function hg(t,e,n){const s=cg(n),i=mt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,gr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,gr(t))}/**
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
 */const fg=/[\[\].#$\/\u0000-\u001F\u007F]/,dg=/[\[\].#$\u0000-\u001F\u007F]/,ji=10*1024*1024,bu=function(t){return typeof t=="string"&&t.length!==0&&!fg.test(t)},Eu=function(t){return typeof t=="string"&&t.length!==0&&!dg.test(t)},pg=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Eu(t)},wu=function(t,e,n){const s=n instanceof se?new R_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ut(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ut(s)+" with contents = "+e.toString());if(vc(e))throw new Error(t+"contains "+e.toString()+" "+Ut(s));if(typeof e=="string"&&e.length>ji/3&&ci(e)>ji)throw new Error(t+"contains a string greater than "+ji+" utf8 bytes "+Ut(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Fe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!bu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ut(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);A_(s,o),wu(t,l,s),P_(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ut(s)+" in addition to actual children.")}},Iu=function(t,e,n,s){if(!(s&&n===void 0)&&!Eu(n))throw new Error(cc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},_g=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Iu(t,e,n,s)},mg=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!pg(n))throw new Error(cc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class gg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yg(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!$c(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Lt(t,e,n){yg(t,n),vg(t,s=>Qe(s,e)||Qe(e,s))}function vg(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Cg(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Cg(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Gt&&Re("event: "+n.toString()),ds(s)}}}/**
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
 */const bg="repo_interrupt",Eg=25;class wg{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new gg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ks(),this.transactionQueueTree_=new _o,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ig(t,e,n){if(t.stats_=Qr(t.repoInfo_),t.forceRestClient_||e_())t.server_=new Vs(t.repoInfo_,(s,i,r,o)=>{Ql(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Xl(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new dt(t.repoInfo_,e,(s,i,r,o)=>{Ql(t,s,i,r,o)},s=>{Xl(t,s)},s=>{Sg(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=o_(t.repoInfo_,()=>new im(t.stats_,t.server_)),t.infoData_=new Z_,t.infoSyncTree_=new Yl({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=_s(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),go(t,"connected",!1),t.serverSyncTree_=new Yl({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Lt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Tg(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Tu(t){return ig({timestamp:Tg(t)})}function Ql(t,e,n,s,i){t.dataUpdateCount++;const r=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=js(n,c=>Se(c));o=Xm(t.serverSyncTree_,r,a,i)}else{const a=Se(n);o=du(t.serverSyncTree_,r,a,i)}else if(s){const a=js(n,c=>Se(c));o=Ym(t.serverSyncTree_,r,a)}else{const a=Se(n);o=_s(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Co(t,r)),Lt(t.eventQueue_,l,o)}function Xl(t,e){go(t,"connected",e),e===!1&&xg(t)}function Sg(t,e){Fe(e,(n,s)=>{go(t,n,s)})}function go(t,e,n){const s=new se("/.info/"+e),i=Se(n);t.infoData_.updateSnapshot(s,i);const r=_s(t.infoSyncTree_,s,i);Lt(t.eventQueue_,s,r)}function Ng(t){return t.nextWriteId_++}function kg(t,e,n){const s=Zm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Se(i).withIndex(e._queryParams.getIndex());Jm(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=_s(t.serverSyncTree_,e._path,r);else{const l=ls(t.serverSyncTree_,e);o=du(t.serverSyncTree_,e._path,r,l)}return Lt(t.eventQueue_,e._path,o),fu(t.serverSyncTree_,e,n,null,!0),r},i=>(yo(t,"get for query "+ve(e)+" failed: "+i),Promise.reject(new Error(i))))}function xg(t){yo(t,"onDisconnectEvents");const e=Tu(t),n=Ks();fr(t.onDisconnect_,G(),(i,r)=>{const o=lg(i,r,t.serverSyncTree_,e);Qc(n,i,o)});let s=[];fr(n,G(),(i,r)=>{s=s.concat(_s(t.serverSyncTree_,i,r));const o=Og(t,i);Co(t,o)}),t.onDisconnect_=Ks(),Lt(t.eventQueue_,G(),s)}function Rg(t){t.persistentConnection_&&t.persistentConnection_.interrupt(bg)}function yo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Re(n,...e)}function Su(t,e,n){return pu(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function vo(t,e=t.transactionQueueTree_){if(e||gi(t,e),On(e)){const n=ku(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Ag(t,gs(e),n)}else vu(e)&&mi(e,n=>{vo(t,n)})}function Ag(t,e,n){const s=n.map(c=>c.currentWriteId),i=Su(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];E(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=De(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{yo(t,"transaction put response",{path:a.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(pn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&u.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();gi(t,mo(t.transactionQueueTree_,e)),vo(t,t.transactionQueueTree_),Lt(t.eventQueue_,e,h);for(let f=0;f<u.length;f++)ds(u[f])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{He("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Co(t,e)}},o)}function Co(t,e){const n=Nu(t,e),s=gs(n),i=ku(t,n);return Pg(t,i,s),s}function Pg(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=De(n,a.path);let h=!1,u;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,u=a.abortReason,i=i.concat(pn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Eg)h=!0,u="maxretry",i=i.concat(pn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Su(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){wu("transaction failed: Data returned ",_,a.path);let y=Se(_);typeof _=="object"&&_!=null&&mt(_,".priority")||(y=y.updatePriority(f.getPriority()));const N=a.currentWriteId,M=Tu(t),x=ag(y,f,M);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=x,a.currentWriteId=Ng(t),o.splice(o.indexOf(N),1),i=i.concat(zm(t.serverSyncTree_,a.path,x,a.currentWriteId,a.applyLocally)),i=i.concat(pn(t.serverSyncTree_,N,!0))}else h=!0,u="nodata",i=i.concat(pn(t.serverSyncTree_,a.currentWriteId,!0))}Lt(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(u),!1,null))))}gi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)ds(s[l]);vo(t,t.transactionQueueTree_)}function Nu(t,e){let n,s=t.transactionQueueTree_;for(n=U(e);n!==null&&On(s)===void 0;)s=mo(s,n),e=le(e),n=U(e);return s}function ku(t,e){const n=[];return xu(t,e,n),n.sort((s,i)=>s.order-i.order),n}function xu(t,e,n){const s=On(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);mi(e,i=>{xu(t,i,n)})}function gi(t,e){const n=On(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,yu(e,n.length>0?n:void 0)}mi(e,s=>{gi(t,s)})}function Og(t,e){const n=gs(Nu(t,e)),s=mo(t.transactionQueueTree_,e);return ug(s,i=>{Bi(t,i)}),Bi(t,s),Cu(s,i=>{Bi(t,i)}),n}function Bi(t,e){const n=On(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(pn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?yu(e,void 0):n.length=r+1,Lt(t.eventQueue_,gs(e),i);for(let o=0;o<s.length;o++)ds(s[o])}}/**
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
 */function Dg(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Mg(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):He(`Invalid query segment '${n}' in query '${t}'`)}return e}const Jl=function(t,e){const n=Lg(t),s=n.namespace;n.domain==="firebase.com"&&Jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Kp();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new s_(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new se(n.pathString)}},Lg=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(i=Dg(t.substring(h,u)));const f=Mg(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class Fg{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class jg{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Bg{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class bo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return W(this._path)?null:Bc(this._path)}get ref(){return new gt(this._repo,this._path)}get _queryIdentifier(){const e=Fl(this._queryParams),n=Yr(e);return n==="{}"?"default":n}get _queryObject(){return Fl(this._queryParams)}isEqual(e){if(e=ui(e),!(e instanceof bo))return!1;const n=this._repo===e._repo,s=$c(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+x_(this._path)}}class gt extends bo{constructor(e,n){super(e,n,new to,!1)}get parent(){const e=Wc(this._path);return e===null?null:new gt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class as{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),s=yr(this.ref,e);return new as(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new as(i,yr(this.ref,s),_e)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Hg(t,e){return t=ui(t),t._checkNotDeleted("ref"),e!==void 0?yr(t._root,e):t._root}function yr(t,e){return t=ui(t),U(t._path)===null?_g("child","path",e,!1):Iu("child","path",e,!1),new gt(t._repo,Ce(t._path,e))}function Wg(t){t=ui(t);const e=new Bg(()=>{}),n=new Eo(e);return kg(t._repo,t,n).then(s=>new as(s,new gt(t._repo,t._path),t._queryParams.getIndex()))}class Eo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Fg("value",this,new as(e.snapshotNode,new gt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new jg(this,e,n):null}matches(e){return e instanceof Eo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Bm(gt);Vm(gt);/**
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
 */const $g="FIREBASE_DATABASE_EMULATOR_HOST",vr={};let Ug=!1;function Vg(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Re("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Jl(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[$g]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Jl(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const h=i&&a?new cr(cr.OWNER):new n_(t.name,t.options,e);mg("Invalid Firebase Database URL",o),W(o.path)||Jt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=qg(l,t,h,new t_(t.name,n));return new zg(u,t)}function Kg(t,e){const n=vr[e];(!n||n[t.key]!==t)&&Jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Rg(t),delete n[t.key]}function qg(t,e,n,s){let i=vr[e.name];i||(i={},vr[e.name]=i);let r=i[t.toURLString()];return r&&Jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new wg(t,Ug,n,s),i[t.toURLString()]=r,r}class zg{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ig(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gt(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Kg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Jt("Cannot call "+e+" on a deleted database.")}}function Yg(t=kp(),e){return wp(t,"database").getImmediate({identifier:e})}/**
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
 */function Gg(t){Hp(Sp),Hs(new Zn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Vg(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Cn(Cl,bl,t),Cn(Cl,bl,"esm2017")}dt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Gg();let Je=lt({title:"Japanese Jisho",words:!1,search:""}),pe=lt([{name:"Nav",visible:!1},{name:"Japanese Jisho",visible:!0},{name:"Dictionary",visible:!1},{name:"Word lists",visible:!1},{name:"Kana table",visible:!1},{name:"Kanji table",visible:!1},{name:"Settings",visible:!1}]),ft=lt([{name:"l1",visible:!1,start:0,end:1e3},{name:"l2",visible:!1,start:1001,end:2e3},{name:"l3",visible:!1,start:2001,end:3e3},{name:"l4",visible:!1,start:3001,end:4e3},{name:"l5",visible:!1,start:4001,end:5e3}]),Qg=lt([{kana:"\u3042",romaji:"a"},{kana:"\u3044",romaji:"i"},{kana:"\u3046",romaji:"u"},{kana:"\u3048",romaji:"e"},{kana:"\u304A",romaji:"o"},{kana:"\u304B",romaji:"ka"},{kana:"\u304D",romaji:"ki"},{kana:"\u304F",romaji:"ku"},{kana:"\u3051",romaji:"ke"},{kana:"\u3053",romaji:"ko"},{kana:"\u3055",romaji:"sa"},{kana:"\u3057",romaji:"shi"},{kana:"\u3059",romaji:"su"},{kana:"\u305B",romaji:"se"},{kana:"\u305D",romaji:"so"},{kana:"\u305F",romaji:"ta"},{kana:"\u3061",romaji:"chi"},{kana:"\u3064",romaji:"tsu"},{kana:"\u3066",romaji:"te"},{kana:"\u3068",romaji:"to"},{kana:"\u306A",romaji:"na"},{kana:"\u306B",romaji:"ni"},{kana:"\u306C",romaji:"nu"},{kana:"\u306D",romaji:"ne"},{kana:"\u306E",romaji:"no"},{kana:"\u306F",romaji:"ha"},{kana:"\u3072",romaji:"hi"},{kana:"\u3075",romaji:"fu"},{kana:"\u3078",romaji:"he"},{kana:"\u307B",romaji:"ho"},{kana:"\u307E",romaji:"ma"},{kana:"\u307F",romaji:"mi"},{kana:"\u3080",romaji:"mu"},{kana:"\u3081",romaji:"me"},{kana:"\u3082",romaji:"mo"},{kana:"\u3084",romaji:"ya"},{kana:"\u3086",romaji:"yu"},{kana:"\u3088",romaji:"yo"},{kana:"\u3089",romaji:"ra"},{kana:"\u308A",romaji:"ri"},{kana:"\u308B",romaji:"ru"},{kana:"\u308C",romaji:"re"},{kana:"\u308D",romaji:"ro"},{kana:"\u308F",romaji:"wa"},{kana:"\u3092",romaji:"wo"},{kana:"\u3093",romaji:"n"},{kana:"\u304C",romaji:"ga"},{kana:"\u304E",romaji:"gi"},{kana:"\u3050",romaji:"gu"},{kana:"\u3052",romaji:"ge"},{kana:"\u3054",romaji:"go"},{kana:"\u3056",romaji:"za"},{kana:"\u3058",romaji:"ji"},{kana:"\u305A",romaji:"zu"},{kana:"\u305C",romaji:"ze"},{kana:"\u305E",romaji:"zo"},{kana:"\u3060",romaji:"da"},{kana:"\u3062",romaji:"di"},{kana:"\u3065",romaji:"du"},{kana:"\u3067",romaji:"de"},{kana:"\u3069",romaji:"do"},{kana:"\u3070",romaji:"ba"},{kana:"\u3073",romaji:"bi"},{kana:"\u3076",romaji:"bu"},{kana:"\u3079",romaji:"be"},{kana:"\u307C",romaji:"bo"},{kana:"\u3071",romaji:"pa"},{kana:"\u3074",romaji:"pi"},{kana:"\u3077",romaji:"pu"},{kana:"\u307A",romaji:"pe"},{kana:"\u307D",romaji:"po"}]),Xg=lt([{kana:"\u30A2",romaji:"a"},{kana:"\u30A4",romaji:"i"},{kana:"\u30A6",romaji:"u"},{kana:"\u30A8",romaji:"e"},{kana:"\u30AA",romaji:"o"},{kana:"\u30AB",romaji:"ka"},{kana:"\u30AD",romaji:"ki"},{kana:"\u30AF",romaji:"ku"},{kana:"\u30B1",romaji:"ke"},{kana:"\u30B3",romaji:"ko"},{kana:"\u30B5",romaji:"sa"},{kana:"\u30B7",romaji:"shi"},{kana:"\u30B9",romaji:"su"},{kana:"\u30BB",romaji:"se"},{kana:"\u30BD",romaji:"so"},{kana:"\u30BF",romaji:"ta"},{kana:"\u30C1",romaji:"chi"},{kana:"\u30C4",romaji:"tsu"},{kana:"\u30C6",romaji:"te"},{kana:"\u30C8",romaji:"to"},{kana:"\u30CA",romaji:"na"},{kana:"\u30CB",romaji:"ni"},{kana:"\u30CC",romaji:"nu"},{kana:"\u30CD",romaji:"ne"},{kana:"\u30CE",romaji:"no"},{kana:"\u30CF",romaji:"ha"},{kana:"\u30D2",romaji:"hi"},{kana:"\u30D5",romaji:"fu"},{kana:"\u30D8",romaji:"he"},{kana:"\u30DB",romaji:"ho"},{kana:"\u30DE",romaji:"ma"},{kana:"\u30DF",romaji:"mi"},{kana:"\u30E0",romaji:"mu"},{kana:"\u30E1",romaji:"me"},{kana:"\u30E2",romaji:"mo"},{kana:"\u30E4",romaji:"ya"},{kana:"\u30E6",romaji:"yu"},{kana:"\u30E8",romaji:"yo"},{kana:"\u30E9",romaji:"ra"},{kana:"\u30EA",romaji:"ri"},{kana:"\u30EB",romaji:"ru"},{kana:"\u30EC",romaji:"re"},{kana:"\u30ED",romaji:"ro"},{kana:"\u30EF",romaji:"wa"},{kana:"\u30F2",romaji:"wo"},{kana:"\u30F3",romaji:"n"},{kana:"\u30AC",romaji:"ga"},{kana:"\u30AE",romaji:"gi"},{kana:"\u30B0",romaji:"gu"},{kana:"\u30B2",romaji:"ge"},{kana:"\u30B4",romaji:"go"},{kana:"\u30B6",romaji:"za"},{kana:"\u30B8",romaji:"ji"},{kana:"\u30BA",romaji:"zu"},{kana:"\u30BC",romaji:"ze"},{kana:"\u30BE",romaji:"zo"},{kana:"\u30C0",romaji:"da"},{kana:"\u30C2",romaji:"di"},{kana:"\u30C5",romaji:"du"},{kana:"\u30C7",romaji:"de"},{kana:"\u30C9",romaji:"do"},{kana:"\u30D0",romaji:"ba"},{kana:"\u30D3",romaji:"bi"},{kana:"\u30D6",romaji:"bu"},{kana:"\u30D9",romaji:"be"},{kana:"\u30DC",romaji:"bo"},{kana:"\u30D1",romaji:"pa"},{kana:"\u30D4",romaji:"pi"},{kana:"\u30D7",romaji:"pu"},{kana:"\u30DA",romaji:"pe"},{kana:"\u30DD",romaji:"po"}]);const rn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Jg={key:0,class:"menu"},Zg={class:"menu_options"},ey={__name:"Nav",setup(t){function e(n){for(let s=1;s<pe.length-1;s++)pe[s].visible=!1;for(let s=0;s<ft.length;s++)ft[s].visible=!1;Je.words=!1,pe[n].visible=!0,Je.title=pe[n].name,pe[0].visible=!pe[0].visible}return(n,s)=>(Y(),$r(Vr,null,{default:Ds(()=>[me(pe)[0].visible?(Y(),Z("div",Jg,[V("div",Zg,[V("span",{onClick:s[0]||(s[0]=i=>e(1))},"Home"),V("span",{onClick:s[1]||(s[1]=i=>e(2))},"Dictionary"),V("span",{onClick:s[2]||(s[2]=i=>e(3))},"Word lists"),V("span",{onClick:s[3]||(s[3]=i=>e(4))},"Kana table"),V("span",{onClick:s[4]||(s[4]=i=>e(5))},"Kanji table"),V("span",{onClick:s[5]||(s[5]=i=>e(6))},"Settings")])])):it("",!0)]),_:1}))}},ty=rn(ey,[["__scopeId","data-v-abac6224"]]);const ny={__name:"Home",setup(t){function e(n){for(let s=1;s<pe.length-1;s++)pe[s].visible=!1;pe[n].visible=!0,Je.title=pe[n].name}return(n,s)=>(Y(),Z(ge,null,[V("div",{class:"menu-item",onClick:s[0]||(s[0]=i=>e(2))},"Dictionary"),V("div",{class:"menu-item",onClick:s[1]||(s[1]=i=>e(3))},"Word lists"),V("div",{class:"menu-item",onClick:s[2]||(s[2]=i=>e(4))},"Kana table"),V("div",{class:"menu-item",onClick:s[3]||(s[3]=i=>e(5))},"Kanji table")],64))}},sy=rn(ny,[["__scopeId","data-v-dfa6d42a"]]);const iy=["onKeydown"],ry={__name:"Dictionary",setup(t){let e=lt({val:""});function n(){Je.search=e.val,console.log(Je.search),Je.words=!0}function s(){e.val="",Je.words=!1}return(i,r)=>(Y(),Z("div",null,[nf(V("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=o=>me(e).val=o),onKeydown:[al(n,["enter"]),al(s,["delete"])],onClick:s,placeholder:"search"},null,40,iy),[[ad,me(e).val]])]))}},oy=rn(ry,[["__scopeId","data-v-24e3349e"]]);const ly={__name:"Lists",setup(t){function e(n){for(let s=0;s<ft.length-1;s++)ft[s].visible=!1;ft[n].visible=!0,pe[3].visible=!1,Je.words=!0}return(n,s)=>(Y(),Z(ge,null,[V("div",{class:"menu-item",onClick:s[0]||(s[0]=i=>e(0))},"0-1000 words"),V("div",{class:"menu-item",onClick:s[1]||(s[1]=i=>e(1))},"1001-2000 words"),V("div",{class:"menu-item",onClick:s[2]||(s[2]=i=>e(2))},"2001-3000 words"),V("div",{class:"menu-item",onClick:s[3]||(s[3]=i=>e(3))},"3001-4000 words"),V("div",{class:"menu-item",onClick:s[4]||(s[4]=i=>e(4))},"4001-5000 words")],64))}},ay=rn(ly,[["__scopeId","data-v-480dabcc"]]);const cy={style:{float:"right","margin-right":"5px",color:"#d90429"}},uy={class:"grid"},hy={class:"kana"},fy={__name:"Kana",setup(t){let e=lt({switch:!0});return(n,s)=>(Y(),Z(ge,null,[V("div",{class:"kana-type",onClick:s[0]||(s[0]=i=>me(e).switch=!me(e).switch)},[V("span",null,wt(me(e).switch?"Hiragana":"Katakana"),1),V("span",cy,wt(me(e).switch?"Katakana":"Hiragana"),1)]),V("div",uy,[(Y(!0),Z(ge,null,hn(me(e).switch?me(Qg):me(Xg),i=>(Y(),Z("div",hy,[V("span",null,wt(i.kana),1)]))),256))])],64))}},dy=rn(fy,[["__scopeId","data-v-30c1cd21"]]);const Ru=t=>(Sa("data-v-27df8684"),t=t(),Na(),t),py={class:"grid"},_y={class:"word"},my={class:"kanji"},gy=Ru(()=>V("span",{class:"label"},"Kanji",-1)),yy={key:0},vy={class:"kana"},Cy=Ru(()=>V("span",{class:"label"},"Kana",-1)),by={key:0},Ey={class:"meaning"},wy={class:"meaning-text"},Iy={__name:"Word",async setup(t){let e,n,s,i=[];if([e,n]=Mf(()=>Wg(Hy).then(r=>{r.exists()&&(s=r.val(),console.log(r.val()))}).catch(r=>{console.error(r)})),await e,n(),pe[2].visible){let r=0;i=[];for(let o=0;o<s.words.length;o++)s.words[o].sense[0].gloss[0].text===Je.search&&(i[r]=s.words[o],r++)}for(let r=0;r<ft.length;r++)if(ft[r].visible){let o=0;i=[];for(let l=ft[r].start;l<ft[r].end;l++)i[o]=s.words[l],o++}return console.log(i),(r,o)=>(Y(),Z("div",py,[(Y(!0),Z(ge,null,hn(me(i),l=>(Y(),Z("div",_y,[V("div",my,[gy,(Y(!0),Z(ge,null,hn(l.kanji,(a,c)=>(Y(),Z("div",null,[c===0?(Y(),Z("span",yy,wt(a.text),1)):it("",!0)]))),256))]),V("div",vy,[Cy,(Y(!0),Z(ge,null,hn(l.kana,(a,c)=>(Y(),Z("div",null,[c===0?(Y(),Z("span",by,wt(a.text),1)):it("",!0)]))),256))]),V("div",Ey,[(Y(!0),Z(ge,null,hn(l.sense,a=>(Y(),Z("div",null,[(Y(!0),Z(ge,null,hn(a.gloss,c=>(Y(),Z("div",null,[V("span",wy,wt(c.text),1)]))),256))]))),256))])]))),256))]))}},Ty=rn(Iy,[["__scopeId","data-v-27df8684"]]);const Sy=t=>(Sa("data-v-e00b9931"),t=t(),Na(),t),Ny={class:"header"},ky={class:"grid"},xy={key:0},Ry={key:1},Ay={key:2},Py={key:3},Oy={key:4},Dy={key:5},My={key:6},Ly=Sy(()=>V("span",{class:"loading"},"loading...",-1)),Fy={__name:"App",setup(t){function e(){pe[0].visible=!pe[0].visible}return(n,s)=>(Y(),Z(ge,null,[ye(ty),V("div",Ny,[V("span",{class:"burger",onClick:e},wt(me(pe)[0].visible?"\u292B":"="),1),V("span",null,wt(me(Je).title),1)]),V("div",ky,[me(pe)[1].visible?(Y(),Z("div",xy,[ye(sy)])):it("",!0),me(pe)[2].visible?(Y(),Z("div",Ry,[ye(oy)])):it("",!0),me(pe)[3].visible?(Y(),Z("div",Ay,[ye(ay)])):it("",!0),me(pe)[4].visible?(Y(),Z("div",Py,[ye(dy)])):it("",!0),me(pe)[5].visible?(Y(),Z("div",Oy)):it("",!0),me(pe)[6].visible?(Y(),Z("div",Dy)):it("",!0),me(Je).words?(Y(),Z("div",My,[(Y(),$r(Lh,null,{fallback:Ds(()=>[Ly]),default:Ds(()=>[ye(Ty)]),_:1}))])):it("",!0)])],64))}},jy=rn(Fy,[["__scopeId","data-v-e00b9931"]]),By={apiKey:"AIzaSyC_nmckRuqsvaOyYwu-RwP82q8f5vFpqLE",authDomain:"japanesejisho.firebaseapp.com",databaseURL:"https://japanesejisho-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"japanesejisho",storageBucket:"japanesejisho.appspot.com",messagingSenderId:"255107822451",appId:"1:255107822451:web:5f719e8be86c97d0478b06"};Np(By);const Hy=Hg(Yg());fd(jy).mount("#app");
