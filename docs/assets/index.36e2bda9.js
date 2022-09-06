(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function rr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const iu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ru=rr(iu);function Rl(t){return!!t||t===""}function or(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=fe(s)?au(s):or(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(fe(t))return t;if(ee(t))return t}}const ou=/;(?![^(]*\))/g,lu=/:(.+)/;function au(t){const e={};return t.split(ou).forEach(n=>{if(n){const s=n.split(lu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function lr(t){let e="";if(fe(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const s=lr(t[n]);s&&(e+=s+" ")}else if(ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const oi=t=>fe(t)?t:t==null?"":D(t)||ee(t)&&(t.toString===Dl||!k(t.toString))?JSON.stringify(t,Al,2):String(t),Al=(t,e)=>e&&e.__v_isRef?Al(t,e.value):Zt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Pl(e)?{[`Set(${e.size})`]:[...e.values()]}:ee(e)&&!D(e)&&!Ml(e)?String(e):e,G={},Jt=[],qe=()=>{},cu=()=>!1,uu=/^on[^a-z]/,ks=t=>uu.test(t),ar=t=>t.startsWith("onUpdate:"),Ce=Object.assign,cr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hu=Object.prototype.hasOwnProperty,W=(t,e)=>hu.call(t,e),D=Array.isArray,Zt=t=>Ls(t)==="[object Map]",Pl=t=>Ls(t)==="[object Set]",k=t=>typeof t=="function",fe=t=>typeof t=="string",ur=t=>typeof t=="symbol",ee=t=>t!==null&&typeof t=="object",Ol=t=>ee(t)&&k(t.then)&&k(t.catch),Dl=Object.prototype.toString,Ls=t=>Dl.call(t),fu=t=>Ls(t).slice(8,-1),Ml=t=>Ls(t)==="[object Object]",hr=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,us=rr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},du=/-(\w)/g,on=Fs(t=>t.replace(du,(e,n)=>n?n.toUpperCase():"")),_u=/\B([A-Z])/g,fn=Fs(t=>t.replace(_u,"-$1").toLowerCase()),kl=Fs(t=>t.charAt(0).toUpperCase()+t.slice(1)),li=Fs(t=>t?`on${kl(t)}`:""),ds=(t,e)=>!Object.is(t,e),ai=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},_s=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},pu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let uo;const gu=()=>uo||(uo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Qe;class mu{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Qe&&(this.parent=Qe,this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Qe;try{return Qe=this,e()}finally{Qe=n}}}on(){Qe=this}off(){Qe=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function yu(t,e=Qe){e&&e.active&&e.effects.push(t)}const fr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ll=t=>(t.w&yt)>0,Fl=t=>(t.n&yt)>0,Cu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=yt},vu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Ll(i)&&!Fl(i)?i.delete(t):e[n++]=i,i.w&=~yt,i.n&=~yt}e.length=n}},Si=new WeakMap;let Tn=0,yt=1;const Ni=30;let He;const Mt=Symbol(""),xi=Symbol("");class dr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,yu(this,s)}run(){if(!this.active)return this.fn();let e=He,n=dt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=He,He=this,dt=!0,yt=1<<++Tn,Tn<=Ni?Cu(this):ho(this),this.fn()}finally{Tn<=Ni&&vu(this),yt=1<<--Tn,He=this.parent,dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){He===this?this.deferStop=!0:this.active&&(ho(this),this.onStop&&this.onStop(),this.active=!1)}}function ho(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let dt=!0;const Bl=[];function dn(){Bl.push(dt),dt=!1}function _n(){const t=Bl.pop();dt=t===void 0?!0:t}function De(t,e,n){if(dt&&He){let s=Si.get(t);s||Si.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=fr()),Wl(i)}}function Wl(t,e){let n=!1;Tn<=Ni?Fl(t)||(t.n|=yt,n=!Ll(t)):n=!t.has(He),n&&(t.add(He),He.deps.push(t))}function ot(t,e,n,s,i,r){const o=Si.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&D(t))o.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":D(t)?hr(n)&&l.push(o.get("length")):(l.push(o.get(Mt)),Zt(t)&&l.push(o.get(xi)));break;case"delete":D(t)||(l.push(o.get(Mt)),Zt(t)&&l.push(o.get(xi)));break;case"set":Zt(t)&&l.push(o.get(Mt));break}if(l.length===1)l[0]&&Ri(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Ri(fr(a))}}function Ri(t,e){const n=D(t)?t:[...t];for(const s of n)s.computed&&fo(s);for(const s of n)s.computed||fo(s)}function fo(t,e){(t!==He||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Eu=rr("__proto__,__v_isRef,__isVue"),Hl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ur)),bu=_r(),wu=_r(!1,!0),Iu=_r(!0),_o=Tu();function Tu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=j(this);for(let r=0,o=this.length;r<o;r++)De(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(j)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){dn();const s=j(this)[e].apply(this,n);return _n(),s}}),t}function _r(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Uu:ql:e?Vl:jl).get(s))return s;const o=D(s);if(!t&&o&&W(_o,i))return Reflect.get(_o,i,r);const l=Reflect.get(s,i,r);return(ur(i)?Hl.has(i):Eu(i))||(t||De(s,"get",i),e)?l:Ee(l)?o&&hr(i)?l:l.value:ee(l)?t?zl(l):Ws(l):l}}const Su=Ul(),Nu=Ul(!0);function Ul(t=!1){return function(n,s,i,r){let o=n[s];if(On(o)&&Ee(o)&&!Ee(i))return!1;if(!t&&(!Ai(i)&&!On(i)&&(o=j(o),i=j(i)),!D(n)&&Ee(o)&&!Ee(i)))return o.value=i,!0;const l=D(n)&&hr(s)?Number(s)<n.length:W(n,s),a=Reflect.set(n,s,i,r);return n===j(r)&&(l?ds(i,o)&&ot(n,"set",s,i):ot(n,"add",s,i)),a}}function xu(t,e){const n=W(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ot(t,"delete",e,void 0),s}function Ru(t,e){const n=Reflect.has(t,e);return(!ur(e)||!Hl.has(e))&&De(t,"has",e),n}function Au(t){return De(t,"iterate",D(t)?"length":Mt),Reflect.ownKeys(t)}const $l={get:bu,set:Su,deleteProperty:xu,has:Ru,ownKeys:Au},Pu={get:Iu,set(t,e){return!0},deleteProperty(t,e){return!0}},Ou=Ce({},$l,{get:wu,set:Nu}),pr=t=>t,Bs=t=>Reflect.getPrototypeOf(t);function ss(t,e,n=!1,s=!1){t=t.__v_raw;const i=j(t),r=j(e);n||(e!==r&&De(i,"get",e),De(i,"get",r));const{has:o}=Bs(i),l=s?pr:n?Cr:yr;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function is(t,e=!1){const n=this.__v_raw,s=j(n),i=j(t);return e||(t!==i&&De(s,"has",t),De(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function rs(t,e=!1){return t=t.__v_raw,!e&&De(j(t),"iterate",Mt),Reflect.get(t,"size",t)}function po(t){t=j(t);const e=j(this);return Bs(e).has.call(e,t)||(e.add(t),ot(e,"add",t,t)),this}function go(t,e){e=j(e);const n=j(this),{has:s,get:i}=Bs(n);let r=s.call(n,t);r||(t=j(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ds(e,o)&&ot(n,"set",t,e):ot(n,"add",t,e),this}function mo(t){const e=j(this),{has:n,get:s}=Bs(e);let i=n.call(e,t);i||(t=j(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ot(e,"delete",t,void 0),r}function yo(){const t=j(this),e=t.size!==0,n=t.clear();return e&&ot(t,"clear",void 0,void 0),n}function os(t,e){return function(s,i){const r=this,o=r.__v_raw,l=j(o),a=e?pr:t?Cr:yr;return!t&&De(l,"iterate",Mt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function ls(t,e,n){return function(...s){const i=this.__v_raw,r=j(i),o=Zt(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?pr:e?Cr:yr;return!e&&De(r,"iterate",a?xi:Mt),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ht(t){return function(...e){return t==="delete"?!1:this}}function Du(){const t={get(r){return ss(this,r)},get size(){return rs(this)},has:is,add:po,set:go,delete:mo,clear:yo,forEach:os(!1,!1)},e={get(r){return ss(this,r,!1,!0)},get size(){return rs(this)},has:is,add:po,set:go,delete:mo,clear:yo,forEach:os(!1,!0)},n={get(r){return ss(this,r,!0)},get size(){return rs(this,!0)},has(r){return is.call(this,r,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:os(!0,!1)},s={get(r){return ss(this,r,!0,!0)},get size(){return rs(this,!0)},has(r){return is.call(this,r,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:os(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ls(r,!1,!1),n[r]=ls(r,!0,!1),e[r]=ls(r,!1,!0),s[r]=ls(r,!0,!0)}),[t,n,e,s]}const[Mu,ku,Lu,Fu]=Du();function gr(t,e){const n=e?t?Fu:Lu:t?ku:Mu;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(W(n,i)&&i in s?n:s,i,r)}const Bu={get:gr(!1,!1)},Wu={get:gr(!1,!0)},Hu={get:gr(!0,!1)},jl=new WeakMap,Vl=new WeakMap,ql=new WeakMap,Uu=new WeakMap;function $u(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ju(t){return t.__v_skip||!Object.isExtensible(t)?0:$u(fu(t))}function Ws(t){return On(t)?t:mr(t,!1,$l,Bu,jl)}function Vu(t){return mr(t,!1,Ou,Wu,Vl)}function zl(t){return mr(t,!0,Pu,Hu,ql)}function mr(t,e,n,s,i){if(!ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=ju(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function en(t){return On(t)?en(t.__v_raw):!!(t&&t.__v_isReactive)}function On(t){return!!(t&&t.__v_isReadonly)}function Ai(t){return!!(t&&t.__v_isShallow)}function Kl(t){return en(t)||On(t)}function j(t){const e=t&&t.__v_raw;return e?j(e):t}function Gl(t){return _s(t,"__v_skip",!0),t}const yr=t=>ee(t)?Ws(t):t,Cr=t=>ee(t)?zl(t):t;function qu(t){dt&&He&&(t=j(t),Wl(t.dep||(t.dep=fr())))}function zu(t,e){t=j(t),t.dep&&Ri(t.dep)}function Ee(t){return!!(t&&t.__v_isRef===!0)}function We(t){return Ee(t)?t.value:t}const Ku={get:(t,e,n)=>We(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ee(i)&&!Ee(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Yl(t){return en(t)?t:new Proxy(t,Ku)}var Ql;class Gu{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ql]=!1,this._dirty=!0,this.effect=new dr(e,()=>{this._dirty||(this._dirty=!0,zu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=j(this);return qu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ql="__v_isReadonly";function Yu(t,e,n=!1){let s,i;const r=k(t);return r?(s=t,i=qe):(s=t.get,i=t.set),new Gu(s,i,r||!i,n)}function _t(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Hs(r,e,n)}return i}function Le(t,e,n,s){if(k(t)){const r=_t(t,e,n,s);return r&&Ol(r)&&r.catch(o=>{Hs(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Le(t[r],e,n,s));return i}function Hs(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){_t(a,null,10,[t,o,l]);return}}Qu(t,n,i,s)}function Qu(t,e,n,s=!0){console.error(t)}let ps=!1,Pi=!1;const ye=[];let Je=0;const tn=[];let st=null,At=0;const Xl=Promise.resolve();let vr=null;function Xu(t){const e=vr||Xl;return t?e.then(this?t.bind(this):t):e}function Ju(t){let e=Je+1,n=ye.length;for(;e<n;){const s=e+n>>>1;Dn(ye[s])<t?e=s+1:n=s}return e}function Er(t){(!ye.length||!ye.includes(t,ps&&t.allowRecurse?Je+1:Je))&&(t.id==null?ye.push(t):ye.splice(Ju(t.id),0,t),Jl())}function Jl(){!ps&&!Pi&&(Pi=!0,vr=Xl.then(ea))}function Zu(t){const e=ye.indexOf(t);e>Je&&ye.splice(e,1)}function eh(t){D(t)?tn.push(...t):(!st||!st.includes(t,t.allowRecurse?At+1:At))&&tn.push(t),Jl()}function Co(t,e=Je){for(;e<ye.length;e++){const n=ye[e];n&&n.pre&&(ye.splice(e,1),e--,n())}}function Zl(t){if(tn.length){const e=[...new Set(tn)];if(tn.length=0,st){st.push(...e);return}for(st=e,st.sort((n,s)=>Dn(n)-Dn(s)),At=0;At<st.length;At++)st[At]();st=null,At=0}}const Dn=t=>t.id==null?1/0:t.id,th=(t,e)=>{const n=Dn(t)-Dn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ea(t){Pi=!1,ps=!0,ye.sort(th);const e=qe;try{for(Je=0;Je<ye.length;Je++){const n=ye[Je];n&&n.active!==!1&&_t(n,null,14)}}finally{Je=0,ye.length=0,Zl(),ps=!1,vr=null,(ye.length||tn.length)&&ea()}}function nh(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||G;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||G;d&&(i=n.map(g=>g.trim())),h&&(i=n.map(pu))}let l,a=s[l=li(e)]||s[l=li(on(e))];!a&&r&&(a=s[l=li(fn(e))]),a&&Le(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Le(c,t,6,i)}}function ta(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!k(t)){const a=c=>{const u=ta(c,e,!0);u&&(l=!0,Ce(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ee(t)&&s.set(t,null),null):(D(r)?r.forEach(a=>o[a]=null):Ce(o,r),ee(t)&&s.set(t,o),o)}function Us(t,e){return!t||!ks(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,fn(e))||W(t,e))}let Ze=null,$s=null;function gs(t){const e=Ze;return Ze=t,$s=t&&t.type.__scopeId||null,e}function br(t){$s=t}function wr(){$s=null}function sh(t,e=Ze,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ro(-1);const r=gs(e),o=t(...i);return gs(r),s._d&&Ro(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function ci(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:g,ctx:w,inheritAttrs:N}=t;let x,M;const de=gs(t);try{if(n.shapeFlag&4){const te=i||s;x=Xe(u.call(te,te,h,r,g,d,w)),M=a}else{const te=e;x=Xe(te.length>1?te(r,{attrs:a,slots:l,emit:c}):te(r,null)),M=e.props?a:ih(a)}}catch(te){Sn.length=0,Hs(te,t,1),x=Pe(ze)}let Z=x;if(M&&N!==!1){const te=Object.keys(M),{shapeFlag:Ie}=Z;te.length&&Ie&7&&(o&&te.some(ar)&&(M=rh(M,o)),Z=Ct(Z,M))}return n.dirs&&(Z=Ct(Z),Z.dirs=Z.dirs?Z.dirs.concat(n.dirs):n.dirs),n.transition&&(Z.transition=n.transition),x=Z,gs(de),x}const ih=t=>{let e;for(const n in t)(n==="class"||n==="style"||ks(n))&&((e||(e={}))[n]=t[n]);return e},rh=(t,e)=>{const n={};for(const s in t)(!ar(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function oh(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?vo(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Us(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?vo(s,o,c):!0:!!o;return!1}function vo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Us(n,r))return!0}return!1}function lh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ah=t=>t.__isSuspense;function ch(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):eh(t)}function uh(t,e){if(ge){let n=ge.provides;const s=ge.parent&&ge.parent.provides;s===n&&(n=ge.provides=Object.create(s)),n[t]=e}}function ui(t,e,n=!1){const s=ge||Ze;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&k(e)?e.call(s.proxy):e}}const Eo={};function hi(t,e,n){return na(t,e,n)}function na(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=G){const l=ge;let a,c=!1,u=!1;if(Ee(t)?(a=()=>t.value,c=Ai(t)):en(t)?(a=()=>t,s=!0):D(t)?(u=!0,c=t.some(M=>en(M)||Ai(M)),a=()=>t.map(M=>{if(Ee(M))return M.value;if(en(M))return Yt(M);if(k(M))return _t(M,l,2)})):k(t)?e?a=()=>_t(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),Le(t,l,3,[d])}:a=qe,e&&s){const M=a;a=()=>Yt(M())}let h,d=M=>{h=x.onStop=()=>{_t(M,l,4)}};if(kn)return d=qe,e?n&&Le(e,l,3,[a(),u?[]:void 0,d]):a(),qe;let g=u?[]:Eo;const w=()=>{if(!!x.active)if(e){const M=x.run();(s||c||(u?M.some((de,Z)=>ds(de,g[Z])):ds(M,g)))&&(h&&h(),Le(e,l,3,[M,g===Eo?void 0:g,d]),g=M)}else x.run()};w.allowRecurse=!!e;let N;i==="sync"?N=w:i==="post"?N=()=>Ne(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),N=()=>Er(w));const x=new dr(a,N);return e?n?w():g=x.run():i==="post"?Ne(x.run.bind(x),l&&l.suspense):x.run(),()=>{x.stop(),l&&l.scope&&cr(l.scope.effects,x)}}function hh(t,e,n){const s=this.proxy,i=fe(t)?t.includes(".")?sa(s,t):()=>s[t]:t.bind(s,s);let r;k(e)?r=e:(r=e.handler,n=e);const o=ge;ln(this);const l=na(i,r.bind(s),n);return o?ln(o):kt(),l}function sa(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Yt(t,e){if(!ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ee(t))Yt(t.value,e);else if(D(t))for(let n=0;n<t.length;n++)Yt(t[n],e);else if(Pl(t)||Zt(t))t.forEach(n=>{Yt(n,e)});else if(Ml(t))for(const n in t)Yt(t[n],e);return t}function fh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return la(()=>{t.isMounted=!0}),aa(()=>{t.isUnmounting=!0}),t}const Me=[Function,Array],dh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},setup(t,{slots:e}){const n=Zh(),s=fh();let i;return()=>{const r=e.default&&ra(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const N of r)if(N.type!==ze){o=N;break}}const l=j(t),{mode:a}=l;if(s.isLeaving)return fi(o);const c=bo(o);if(!c)return fi(o);const u=Oi(c,l,s,n);Di(c,u);const h=n.subTree,d=h&&bo(h);let g=!1;const{getTransitionKey:w}=c.type;if(w){const N=w();i===void 0?i=N:N!==i&&(i=N,g=!0)}if(d&&d.type!==ze&&(!Pt(c,d)||g)){const N=Oi(d,l,s,n);if(Di(d,N),a==="out-in")return s.isLeaving=!0,N.afterLeave=()=>{s.isLeaving=!1,n.update()},fi(o);a==="in-out"&&c.type!==ze&&(N.delayLeave=(x,M,de)=>{const Z=ia(s,d);Z[String(d.key)]=d,x._leaveCb=()=>{M(),x._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=de})}return o}}},_h=dh;function ia(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Oi(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:w,onBeforeAppear:N,onAppear:x,onAfterAppear:M,onAppearCancelled:de}=e,Z=String(t.key),te=ia(n,t),Ie=(H,ne)=>{H&&Le(H,s,9,ne)},Vt=(H,ne)=>{const re=ne[1];Ie(H,ne),D(H)?H.every(Te=>Te.length<=1)&&re():H.length<=1&&re()},It={mode:r,persisted:o,beforeEnter(H){let ne=l;if(!n.isMounted)if(i)ne=N||l;else return;H._leaveCb&&H._leaveCb(!0);const re=te[Z];re&&Pt(t,re)&&re.el._leaveCb&&re.el._leaveCb(),Ie(ne,[H])},enter(H){let ne=a,re=c,Te=u;if(!n.isMounted)if(i)ne=x||a,re=M||c,Te=de||u;else return;let Fe=!1;const et=H._enterCb=ts=>{Fe||(Fe=!0,ts?Ie(Te,[H]):Ie(re,[H]),It.delayedLeave&&It.delayedLeave(),H._enterCb=void 0)};ne?Vt(ne,[H,et]):et()},leave(H,ne){const re=String(t.key);if(H._enterCb&&H._enterCb(!0),n.isUnmounting)return ne();Ie(h,[H]);let Te=!1;const Fe=H._leaveCb=et=>{Te||(Te=!0,ne(),et?Ie(w,[H]):Ie(g,[H]),H._leaveCb=void 0,te[re]===t&&delete te[re])};te[re]=t,d?Vt(d,[H,Fe]):Fe()},clone(H){return Oi(H,e,n,s)}};return It}function fi(t){if(js(t))return t=Ct(t),t.children=null,t}function bo(t){return js(t)?t.children?t.children[0]:void 0:t}function Di(t,e){t.shapeFlag&6&&t.component?Di(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ra(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===_e?(o.patchFlag&128&&i++,s=s.concat(ra(o.children,e,l))):(e||o.type!==ze)&&s.push(l!=null?Ct(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const hs=t=>!!t.type.__asyncLoader,js=t=>t.type.__isKeepAlive;function ph(t,e){oa(t,"a",e)}function gh(t,e){oa(t,"da",e)}function oa(t,e,n=ge){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Vs(e,s,n),n){let i=n.parent;for(;i&&i.parent;)js(i.parent.vnode)&&mh(s,e,n,i),i=i.parent}}function mh(t,e,n,s){const i=Vs(e,t,s,!0);ca(()=>{cr(s[e],i)},n)}function Vs(t,e,n=ge,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;dn(),ln(n);const l=Le(e,n,t,o);return kt(),_n(),l});return s?i.unshift(r):i.push(r),r}}const lt=t=>(e,n=ge)=>(!kn||t==="sp")&&Vs(t,e,n),yh=lt("bm"),la=lt("m"),Ch=lt("bu"),vh=lt("u"),aa=lt("bum"),ca=lt("um"),Eh=lt("sp"),bh=lt("rtg"),wh=lt("rtc");function Ih(t,e=ge){Vs("ec",t,e)}function Tt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(dn(),Le(a,n,8,[t.el,l,t,e]),_n())}}const Th=Symbol();function vn(t,e,n,s){let i;const r=n&&n[s];if(D(t)||fe(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Mi=t=>t?Ea(t)?Nr(t)||t.proxy:Mi(t.parent):null,ms=Ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Mi(t.parent),$root:t=>Mi(t.root),$emit:t=>t.emit,$options:t=>ha(t),$forceUpdate:t=>t.f||(t.f=()=>Er(t.update)),$nextTick:t=>t.n||(t.n=Xu.bind(t.proxy)),$watch:t=>hh.bind(t)}),Sh={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==G&&W(s,e))return o[e]=1,s[e];if(i!==G&&W(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&W(c,e))return o[e]=3,r[e];if(n!==G&&W(n,e))return o[e]=4,n[e];ki&&(o[e]=0)}}const u=ms[e];let h,d;if(u)return e==="$attrs"&&De(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==G&&W(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,W(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==G&&W(i,e)?(i[e]=n,!0):s!==G&&W(s,e)?(s[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==G&&W(t,o)||e!==G&&W(e,o)||(l=r[0])&&W(l,o)||W(s,o)||W(ms,o)||W(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ki=!0;function Nh(t){const e=ha(t),n=t.proxy,s=t.ctx;ki=!1,e.beforeCreate&&wo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:w,activated:N,deactivated:x,beforeDestroy:M,beforeUnmount:de,destroyed:Z,unmounted:te,render:Ie,renderTracked:Vt,renderTriggered:It,errorCaptured:H,serverPrefetch:ne,expose:re,inheritAttrs:Te,components:Fe,directives:et,filters:ts}=e;if(c&&xh(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const se in o){const Q=o[se];k(Q)&&(s[se]=Q.bind(n))}if(i){const se=i.call(n,n);ee(se)&&(t.data=Ws(se))}if(ki=!0,r)for(const se in r){const Q=r[se],tt=k(Q)?Q.bind(n,n):k(Q.get)?Q.get.bind(n,n):qe,si=!k(Q)&&k(Q.set)?Q.set.bind(n):qe,yn=of({get:tt,set:si});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>yn.value,set:qt=>yn.value=qt})}if(l)for(const se in l)ua(l[se],s,n,se);if(a){const se=k(a)?a.call(n):a;Reflect.ownKeys(se).forEach(Q=>{uh(Q,se[Q])})}u&&wo(u,t,"c");function Se(se,Q){D(Q)?Q.forEach(tt=>se(tt.bind(n))):Q&&se(Q.bind(n))}if(Se(yh,h),Se(la,d),Se(Ch,g),Se(vh,w),Se(ph,N),Se(gh,x),Se(Ih,H),Se(wh,Vt),Se(bh,It),Se(aa,de),Se(ca,te),Se(Eh,ne),D(re))if(re.length){const se=t.exposed||(t.exposed={});re.forEach(Q=>{Object.defineProperty(se,Q,{get:()=>n[Q],set:tt=>n[Q]=tt})})}else t.exposed||(t.exposed={});Ie&&t.render===qe&&(t.render=Ie),Te!=null&&(t.inheritAttrs=Te),Fe&&(t.components=Fe),et&&(t.directives=et)}function xh(t,e,n=qe,s=!1){D(t)&&(t=Li(t));for(const i in t){const r=t[i];let o;ee(r)?"default"in r?o=ui(r.from||i,r.default,!0):o=ui(r.from||i):o=ui(r),Ee(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function wo(t,e,n){Le(D(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ua(t,e,n,s){const i=s.includes(".")?sa(n,s):()=>n[s];if(fe(t)){const r=e[t];k(r)&&hi(i,r)}else if(k(t))hi(i,t.bind(n));else if(ee(t))if(D(t))t.forEach(r=>ua(r,e,n,s));else{const r=k(t.handler)?t.handler.bind(n):e[t.handler];k(r)&&hi(i,r,t)}}function ha(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>ys(a,c,o,!0)),ys(a,e,o)),ee(e)&&r.set(e,a),a}function ys(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ys(t,r,n,!0),i&&i.forEach(o=>ys(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Rh[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Rh={data:Io,props:Nt,emits:Nt,methods:Nt,computed:Nt,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:Nt,directives:Nt,watch:Ph,provide:Io,inject:Ah};function Io(t,e){return e?t?function(){return Ce(k(t)?t.call(this,this):t,k(e)?e.call(this,this):e)}:e:t}function Ah(t,e){return Nt(Li(t),Li(e))}function Li(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ve(t,e){return t?[...new Set([].concat(t,e))]:e}function Nt(t,e){return t?Ce(Ce(Object.create(null),t),e):e}function Ph(t,e){if(!t)return e;if(!e)return t;const n=Ce(Object.create(null),t);for(const s in e)n[s]=ve(t[s],e[s]);return n}function Oh(t,e,n,s=!1){const i={},r={};_s(r,qs,1),t.propsDefaults=Object.create(null),fa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Vu(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Dh(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=j(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Us(t.emitsOptions,d))continue;const g=e[d];if(a)if(W(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const w=on(d);i[w]=Fi(a,l,w,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{fa(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!W(e,h)&&((u=fn(h))===h||!W(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Fi(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!W(e,h)&&!0)&&(delete r[h],c=!0)}c&&ot(t,"set","$attrs")}function fa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(us(a))continue;const c=e[a];let u;i&&W(i,u=on(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Us(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=j(n),c=l||G;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Fi(i,a,h,c[h],t,!W(c,h))}}return o}function Fi(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=W(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&k(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(ln(i),s=c[n]=a.call(null,e),kt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===fn(n))&&(s=!0))}return s}function da(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!k(t)){const u=h=>{a=!0;const[d,g]=da(h,e,!0);Ce(o,d),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return ee(t)&&s.set(t,Jt),Jt;if(D(r))for(let u=0;u<r.length;u++){const h=on(r[u]);To(h)&&(o[h]=G)}else if(r)for(const u in r){const h=on(u);if(To(h)){const d=r[u],g=o[h]=D(d)||k(d)?{type:d}:d;if(g){const w=xo(Boolean,g.type),N=xo(String,g.type);g[0]=w>-1,g[1]=N<0||w<N,(w>-1||W(g,"default"))&&l.push(h)}}}const c=[o,l];return ee(t)&&s.set(t,c),c}function To(t){return t[0]!=="$"}function So(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function No(t,e){return So(t)===So(e)}function xo(t,e){return D(e)?e.findIndex(n=>No(n,t)):k(e)&&No(e,t)?0:-1}const _a=t=>t[0]==="_"||t==="$stable",Ir=t=>D(t)?t.map(Xe):[Xe(t)],Mh=(t,e,n)=>{if(e._n)return e;const s=sh((...i)=>Ir(e(...i)),n);return s._c=!1,s},pa=(t,e,n)=>{const s=t._ctx;for(const i in t){if(_a(i))continue;const r=t[i];if(k(r))e[i]=Mh(i,r,s);else if(r!=null){const o=Ir(r);e[i]=()=>o}}},ga=(t,e)=>{const n=Ir(e);t.slots.default=()=>n},kh=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=j(e),_s(e,"_",n)):pa(e,t.slots={})}else t.slots={},e&&ga(t,e);_s(t.slots,qs,1)},Lh=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=G;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Ce(i,e),!n&&l===1&&delete i._):(r=!e.$stable,pa(e,i)),o=e}else e&&(ga(t,e),o={default:1});if(r)for(const l in i)!_a(l)&&!(l in o)&&delete i[l]};function ma(){return{app:null,config:{isNativeTag:cu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fh=0;function Bh(t,e){return function(s,i=null){k(s)||(s=Object.assign({},s)),i!=null&&!ee(i)&&(i=null);const r=ma(),o=new Set;let l=!1;const a=r.app={_uid:Fh++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:lf,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&k(c.install)?(o.add(c),c.install(a,...u)):k(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=Pe(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,Nr(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function Bi(t,e,n,s,i=!1){if(D(t)){t.forEach((d,g)=>Bi(d,e&&(D(e)?e[g]:e),n,s,i));return}if(hs(s)&&!i)return;const r=s.shapeFlag&4?Nr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===G?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(fe(c)?(u[c]=null,W(h,c)&&(h[c]=null)):Ee(c)&&(c.value=null)),k(a))_t(a,l,12,[o,u]);else{const d=fe(a),g=Ee(a);if(d||g){const w=()=>{if(t.f){const N=d?u[a]:a.value;i?D(N)&&cr(N,r):D(N)?N.includes(r)||N.push(r):d?(u[a]=[r],W(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,W(h,a)&&(h[a]=o)):g&&(a.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,Ne(w,n)):w()}}}const Ne=ch;function Wh(t){return Hh(t)}function Hh(t,e){const n=gu();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=qe,cloneNode:w,insertStaticContent:N}=t,x=(f,_,p,y=null,m=null,b=null,T=!1,v=null,I=!!_.dynamicChildren)=>{if(f===_)return;f&&!Pt(f,_)&&(y=ns(f),ut(f,m,b,!0),f=null),_.patchFlag===-2&&(I=!1,_.dynamicChildren=null);const{type:C,ref:R,shapeFlag:S}=_;switch(C){case Tr:M(f,_,p,y);break;case ze:de(f,_,p,y);break;case di:f==null&&Z(_,p,y,T);break;case _e:et(f,_,p,y,m,b,T,v,I);break;default:S&1?Vt(f,_,p,y,m,b,T,v,I):S&6?ts(f,_,p,y,m,b,T,v,I):(S&64||S&128)&&C.process(f,_,p,y,m,b,T,v,I,zt)}R!=null&&m&&Bi(R,f&&f.ref,b,_||f,!_)},M=(f,_,p,y)=>{if(f==null)s(_.el=l(_.children),p,y);else{const m=_.el=f.el;_.children!==f.children&&c(m,_.children)}},de=(f,_,p,y)=>{f==null?s(_.el=a(_.children||""),p,y):_.el=f.el},Z=(f,_,p,y)=>{[f.el,f.anchor]=N(f.children,_,p,y,f.el,f.anchor)},te=({el:f,anchor:_},p,y)=>{let m;for(;f&&f!==_;)m=d(f),s(f,p,y),f=m;s(_,p,y)},Ie=({el:f,anchor:_})=>{let p;for(;f&&f!==_;)p=d(f),i(f),f=p;i(_)},Vt=(f,_,p,y,m,b,T,v,I)=>{T=T||_.type==="svg",f==null?It(_,p,y,m,b,T,v,I):re(f,_,m,b,T,v,I)},It=(f,_,p,y,m,b,T,v)=>{let I,C;const{type:R,props:S,shapeFlag:A,transition:O,patchFlag:U,dirs:V}=f;if(f.el&&w!==void 0&&U===-1)I=f.el=w(f.el);else{if(I=f.el=o(f.type,b,S&&S.is,S),A&8?u(I,f.children):A&16&&ne(f.children,I,null,y,m,b&&R!=="foreignObject",T,v),V&&Tt(f,null,y,"created"),S){for(const X in S)X!=="value"&&!us(X)&&r(I,X,null,S[X],b,f.children,y,m,nt);"value"in S&&r(I,"value",null,S.value),(C=S.onVnodeBeforeMount)&&Ye(C,y,f)}H(I,f,f.scopeId,T,y)}V&&Tt(f,null,y,"beforeMount");const q=(!m||m&&!m.pendingBranch)&&O&&!O.persisted;q&&O.beforeEnter(I),s(I,_,p),((C=S&&S.onVnodeMounted)||q||V)&&Ne(()=>{C&&Ye(C,y,f),q&&O.enter(I),V&&Tt(f,null,y,"mounted")},m)},H=(f,_,p,y,m)=>{if(p&&g(f,p),y)for(let b=0;b<y.length;b++)g(f,y[b]);if(m){let b=m.subTree;if(_===b){const T=m.vnode;H(f,T,T.scopeId,T.slotScopeIds,m.parent)}}},ne=(f,_,p,y,m,b,T,v,I=0)=>{for(let C=I;C<f.length;C++){const R=f[C]=v?ft(f[C]):Xe(f[C]);x(null,R,_,p,y,m,b,T,v)}},re=(f,_,p,y,m,b,T)=>{const v=_.el=f.el;let{patchFlag:I,dynamicChildren:C,dirs:R}=_;I|=f.patchFlag&16;const S=f.props||G,A=_.props||G;let O;p&&St(p,!1),(O=A.onVnodeBeforeUpdate)&&Ye(O,p,_,f),R&&Tt(_,f,p,"beforeUpdate"),p&&St(p,!0);const U=m&&_.type!=="foreignObject";if(C?Te(f.dynamicChildren,C,v,p,y,U,b):T||tt(f,_,v,null,p,y,U,b,!1),I>0){if(I&16)Fe(v,_,S,A,p,y,m);else if(I&2&&S.class!==A.class&&r(v,"class",null,A.class,m),I&4&&r(v,"style",S.style,A.style,m),I&8){const V=_.dynamicProps;for(let q=0;q<V.length;q++){const X=V[q],Be=S[X],Kt=A[X];(Kt!==Be||X==="value")&&r(v,X,Be,Kt,m,f.children,p,y,nt)}}I&1&&f.children!==_.children&&u(v,_.children)}else!T&&C==null&&Fe(v,_,S,A,p,y,m);((O=A.onVnodeUpdated)||R)&&Ne(()=>{O&&Ye(O,p,_,f),R&&Tt(_,f,p,"updated")},y)},Te=(f,_,p,y,m,b,T)=>{for(let v=0;v<_.length;v++){const I=f[v],C=_[v],R=I.el&&(I.type===_e||!Pt(I,C)||I.shapeFlag&70)?h(I.el):p;x(I,C,R,null,y,m,b,T,!0)}},Fe=(f,_,p,y,m,b,T)=>{if(p!==y){for(const v in y){if(us(v))continue;const I=y[v],C=p[v];I!==C&&v!=="value"&&r(f,v,C,I,T,_.children,m,b,nt)}if(p!==G)for(const v in p)!us(v)&&!(v in y)&&r(f,v,p[v],null,T,_.children,m,b,nt);"value"in y&&r(f,"value",p.value,y.value)}},et=(f,_,p,y,m,b,T,v,I)=>{const C=_.el=f?f.el:l(""),R=_.anchor=f?f.anchor:l("");let{patchFlag:S,dynamicChildren:A,slotScopeIds:O}=_;O&&(v=v?v.concat(O):O),f==null?(s(C,p,y),s(R,p,y),ne(_.children,p,R,m,b,T,v,I)):S>0&&S&64&&A&&f.dynamicChildren?(Te(f.dynamicChildren,A,p,m,b,T,v),(_.key!=null||m&&_===m.subTree)&&ya(f,_,!0)):tt(f,_,p,R,m,b,T,v,I)},ts=(f,_,p,y,m,b,T,v,I)=>{_.slotScopeIds=v,f==null?_.shapeFlag&512?m.ctx.activate(_,p,y,T,I):ni(_,p,y,m,b,T,I):Se(f,_,I)},ni=(f,_,p,y,m,b,T)=>{const v=f.component=Jh(f,y,m);if(js(f)&&(v.ctx.renderer=zt),ef(v),v.asyncDep){if(m&&m.registerDep(v,se),!f.el){const I=v.subTree=Pe(ze);de(null,I,_,p)}return}se(v,f,_,p,m,b,T)},Se=(f,_,p)=>{const y=_.component=f.component;if(oh(f,_,p))if(y.asyncDep&&!y.asyncResolved){Q(y,_,p);return}else y.next=_,Zu(y.update),y.update();else _.el=f.el,y.vnode=_},se=(f,_,p,y,m,b,T)=>{const v=()=>{if(f.isMounted){let{next:R,bu:S,u:A,parent:O,vnode:U}=f,V=R,q;St(f,!1),R?(R.el=U.el,Q(f,R,T)):R=U,S&&ai(S),(q=R.props&&R.props.onVnodeBeforeUpdate)&&Ye(q,O,R,U),St(f,!0);const X=ci(f),Be=f.subTree;f.subTree=X,x(Be,X,h(Be.el),ns(Be),f,m,b),R.el=X.el,V===null&&lh(f,X.el),A&&Ne(A,m),(q=R.props&&R.props.onVnodeUpdated)&&Ne(()=>Ye(q,O,R,U),m)}else{let R;const{el:S,props:A}=_,{bm:O,m:U,parent:V}=f,q=hs(_);if(St(f,!1),O&&ai(O),!q&&(R=A&&A.onVnodeBeforeMount)&&Ye(R,V,_),St(f,!0),S&&ri){const X=()=>{f.subTree=ci(f),ri(S,f.subTree,f,m,null)};q?_.type.__asyncLoader().then(()=>!f.isUnmounted&&X()):X()}else{const X=f.subTree=ci(f);x(null,X,p,y,f,m,b),_.el=X.el}if(U&&Ne(U,m),!q&&(R=A&&A.onVnodeMounted)){const X=_;Ne(()=>Ye(R,V,X),m)}(_.shapeFlag&256||V&&hs(V.vnode)&&V.vnode.shapeFlag&256)&&f.a&&Ne(f.a,m),f.isMounted=!0,_=p=y=null}},I=f.effect=new dr(v,()=>Er(C),f.scope),C=f.update=()=>I.run();C.id=f.uid,St(f,!0),C()},Q=(f,_,p)=>{_.component=f;const y=f.vnode.props;f.vnode=_,f.next=null,Dh(f,_.props,y,p),Lh(f,_.children,p),dn(),Co(),_n()},tt=(f,_,p,y,m,b,T,v,I=!1)=>{const C=f&&f.children,R=f?f.shapeFlag:0,S=_.children,{patchFlag:A,shapeFlag:O}=_;if(A>0){if(A&128){yn(C,S,p,y,m,b,T,v,I);return}else if(A&256){si(C,S,p,y,m,b,T,v,I);return}}O&8?(R&16&&nt(C,m,b),S!==C&&u(p,S)):R&16?O&16?yn(C,S,p,y,m,b,T,v,I):nt(C,m,b,!0):(R&8&&u(p,""),O&16&&ne(S,p,y,m,b,T,v,I))},si=(f,_,p,y,m,b,T,v,I)=>{f=f||Jt,_=_||Jt;const C=f.length,R=_.length,S=Math.min(C,R);let A;for(A=0;A<S;A++){const O=_[A]=I?ft(_[A]):Xe(_[A]);x(f[A],O,p,null,m,b,T,v,I)}C>R?nt(f,m,b,!0,!1,S):ne(_,p,y,m,b,T,v,I,S)},yn=(f,_,p,y,m,b,T,v,I)=>{let C=0;const R=_.length;let S=f.length-1,A=R-1;for(;C<=S&&C<=A;){const O=f[C],U=_[C]=I?ft(_[C]):Xe(_[C]);if(Pt(O,U))x(O,U,p,null,m,b,T,v,I);else break;C++}for(;C<=S&&C<=A;){const O=f[S],U=_[A]=I?ft(_[A]):Xe(_[A]);if(Pt(O,U))x(O,U,p,null,m,b,T,v,I);else break;S--,A--}if(C>S){if(C<=A){const O=A+1,U=O<R?_[O].el:y;for(;C<=A;)x(null,_[C]=I?ft(_[C]):Xe(_[C]),p,U,m,b,T,v,I),C++}}else if(C>A)for(;C<=S;)ut(f[C],m,b,!0),C++;else{const O=C,U=C,V=new Map;for(C=U;C<=A;C++){const Ae=_[C]=I?ft(_[C]):Xe(_[C]);Ae.key!=null&&V.set(Ae.key,C)}let q,X=0;const Be=A-U+1;let Kt=!1,lo=0;const Cn=new Array(Be);for(C=0;C<Be;C++)Cn[C]=0;for(C=O;C<=S;C++){const Ae=f[C];if(X>=Be){ut(Ae,m,b,!0);continue}let Ge;if(Ae.key!=null)Ge=V.get(Ae.key);else for(q=U;q<=A;q++)if(Cn[q-U]===0&&Pt(Ae,_[q])){Ge=q;break}Ge===void 0?ut(Ae,m,b,!0):(Cn[Ge-U]=C+1,Ge>=lo?lo=Ge:Kt=!0,x(Ae,_[Ge],p,null,m,b,T,v,I),X++)}const ao=Kt?Uh(Cn):Jt;for(q=ao.length-1,C=Be-1;C>=0;C--){const Ae=U+C,Ge=_[Ae],co=Ae+1<R?_[Ae+1].el:y;Cn[C]===0?x(null,Ge,p,co,m,b,T,v,I):Kt&&(q<0||C!==ao[q]?qt(Ge,p,co,2):q--)}}},qt=(f,_,p,y,m=null)=>{const{el:b,type:T,transition:v,children:I,shapeFlag:C}=f;if(C&6){qt(f.component.subTree,_,p,y);return}if(C&128){f.suspense.move(_,p,y);return}if(C&64){T.move(f,_,p,zt);return}if(T===_e){s(b,_,p);for(let S=0;S<I.length;S++)qt(I[S],_,p,y);s(f.anchor,_,p);return}if(T===di){te(f,_,p);return}if(y!==2&&C&1&&v)if(y===0)v.beforeEnter(b),s(b,_,p),Ne(()=>v.enter(b),m);else{const{leave:S,delayLeave:A,afterLeave:O}=v,U=()=>s(b,_,p),V=()=>{S(b,()=>{U(),O&&O()})};A?A(b,U,V):V()}else s(b,_,p)},ut=(f,_,p,y=!1,m=!1)=>{const{type:b,props:T,ref:v,children:I,dynamicChildren:C,shapeFlag:R,patchFlag:S,dirs:A}=f;if(v!=null&&Bi(v,null,p,f,!0),R&256){_.ctx.deactivate(f);return}const O=R&1&&A,U=!hs(f);let V;if(U&&(V=T&&T.onVnodeBeforeUnmount)&&Ye(V,_,f),R&6)su(f.component,p,y);else{if(R&128){f.suspense.unmount(p,y);return}O&&Tt(f,null,_,"beforeUnmount"),R&64?f.type.remove(f,_,p,m,zt,y):C&&(b!==_e||S>0&&S&64)?nt(C,_,p,!1,!0):(b===_e&&S&384||!m&&R&16)&&nt(I,_,p),y&&ro(f)}(U&&(V=T&&T.onVnodeUnmounted)||O)&&Ne(()=>{V&&Ye(V,_,f),O&&Tt(f,null,_,"unmounted")},p)},ro=f=>{const{type:_,el:p,anchor:y,transition:m}=f;if(_===_e){nu(p,y);return}if(_===di){Ie(f);return}const b=()=>{i(p),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:T,delayLeave:v}=m,I=()=>T(p,b);v?v(f.el,b,I):I()}else b()},nu=(f,_)=>{let p;for(;f!==_;)p=d(f),i(f),f=p;i(_)},su=(f,_,p)=>{const{bum:y,scope:m,update:b,subTree:T,um:v}=f;y&&ai(y),m.stop(),b&&(b.active=!1,ut(T,f,_,p)),v&&Ne(v,_),Ne(()=>{f.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},nt=(f,_,p,y=!1,m=!1,b=0)=>{for(let T=b;T<f.length;T++)ut(f[T],_,p,y,m)},ns=f=>f.shapeFlag&6?ns(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),oo=(f,_,p)=>{f==null?_._vnode&&ut(_._vnode,null,null,!0):x(_._vnode||null,f,_,null,null,null,p),Co(),Zl(),_._vnode=f},zt={p:x,um:ut,m:qt,r:ro,mt:ni,mc:ne,pc:tt,pbc:Te,n:ns,o:t};let ii,ri;return e&&([ii,ri]=e(zt)),{render:oo,hydrate:ii,createApp:Bh(oo,ii)}}function St({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ya(t,e,n=!1){const s=t.children,i=e.children;if(D(s)&&D(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=ft(i[r]),l.el=o.el),n||ya(o,l))}}function Uh(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const $h=t=>t.__isTeleport,_e=Symbol(void 0),Tr=Symbol(void 0),ze=Symbol(void 0),di=Symbol(void 0),Sn=[];let $e=null;function oe(t=!1){Sn.push($e=t?null:[])}function jh(){Sn.pop(),$e=Sn[Sn.length-1]||null}let Mn=1;function Ro(t){Mn+=t}function Ca(t){return t.dynamicChildren=Mn>0?$e||Jt:null,jh(),Mn>0&&$e&&$e.push(t),t}function ce(t,e,n,s,i,r){return Ca(be(t,e,n,s,i,r,!0))}function Vh(t,e,n,s,i){return Ca(Pe(t,e,n,s,i,!0))}function qh(t){return t?t.__v_isVNode===!0:!1}function Pt(t,e){return t.type===e.type&&t.key===e.key}const qs="__vInternal",va=({key:t})=>t!=null?t:null,fs=({ref:t,ref_key:e,ref_for:n})=>t!=null?fe(t)||Ee(t)||k(t)?{i:Ze,r:t,k:e,f:!!n}:t:null;function be(t,e=null,n=null,s=0,i=null,r=t===_e?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&va(e),ref:e&&fs(e),scopeId:$s,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(Sr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=fe(n)?8:16),Mn>0&&!o&&$e&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&$e.push(a),a}const Pe=zh;function zh(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Th)&&(t=ze),qh(t)){const l=Ct(t,e,!0);return n&&Sr(l,n),Mn>0&&!r&&$e&&(l.shapeFlag&6?$e[$e.indexOf(t)]=l:$e.push(l)),l.patchFlag|=-2,l}if(rf(t)&&(t=t.__vccOpts),e){e=Kh(e);let{class:l,style:a}=e;l&&!fe(l)&&(e.class=lr(l)),ee(a)&&(Kl(a)&&!D(a)&&(a=Ce({},a)),e.style=or(a))}const o=fe(t)?1:ah(t)?128:$h(t)?64:ee(t)?4:k(t)?2:0;return be(t,e,n,s,i,o,r,!0)}function Kh(t){return t?Kl(t)||qs in t?Ce({},t):t:null}function Ct(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Yh(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&va(l),ref:e&&e.ref?n&&i?D(i)?i.concat(fs(e)):[i,fs(e)]:fs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_e?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ct(t.ssContent),ssFallback:t.ssFallback&&Ct(t.ssFallback),el:t.el,anchor:t.anchor}}function Gh(t=" ",e=0){return Pe(Tr,null,t,e)}function Nn(t="",e=!1){return e?(oe(),Vh(ze,null,t)):Pe(ze,null,t)}function Xe(t){return t==null||typeof t=="boolean"?Pe(ze):D(t)?Pe(_e,null,t.slice()):typeof t=="object"?ft(t):Pe(Tr,null,String(t))}function ft(t){return t.el===null||t.memo?t:Ct(t)}function Sr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Sr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(qs in e)?e._ctx=Ze:i===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else k(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),s&64?(n=16,e=[Gh(e)]):n=8);t.children=e,t.shapeFlag|=n}function Yh(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=lr([e.class,s.class]));else if(i==="style")e.style=or([e.style,s.style]);else if(ks(i)){const r=e[i],o=s[i];o&&r!==o&&!(D(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ye(t,e,n,s=null){Le(t,e,7,[n,s])}const Qh=ma();let Xh=0;function Jh(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Qh,r={uid:Xh++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new mu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:da(s,i),emitsOptions:ta(s,i),emit:null,emitted:null,propsDefaults:G,inheritAttrs:s.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=nh.bind(null,r),t.ce&&t.ce(r),r}let ge=null;const Zh=()=>ge||Ze,ln=t=>{ge=t,t.scope.on()},kt=()=>{ge&&ge.scope.off(),ge=null};function Ea(t){return t.vnode.shapeFlag&4}let kn=!1;function ef(t,e=!1){kn=e;const{props:n,children:s}=t.vnode,i=Ea(t);Oh(t,n,i,e),kh(t,s);const r=i?tf(t,e):void 0;return kn=!1,r}function tf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Gl(new Proxy(t.ctx,Sh));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?sf(t):null;ln(t),dn();const r=_t(s,t,0,[t.props,i]);if(_n(),kt(),Ol(r)){if(r.then(kt,kt),e)return r.then(o=>{Ao(t,o,e)}).catch(o=>{Hs(o,t,0)});t.asyncDep=r}else Ao(t,r,e)}else ba(t,e)}function Ao(t,e,n){k(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ee(e)&&(t.setupState=Yl(e)),ba(t,n)}let Po;function ba(t,e,n){const s=t.type;if(!t.render){if(!e&&Po&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Ce(Ce({isCustomElement:r,delimiters:l},o),a);s.render=Po(i,c)}}t.render=s.render||qe}ln(t),dn(),Nh(t),_n(),kt()}function nf(t){return new Proxy(t.attrs,{get(e,n){return De(t,"get","$attrs"),e[n]}})}function sf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=nf(t))},slots:t.slots,emit:t.emit,expose:e}}function Nr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yl(Gl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ms)return ms[n](t)}}))}function rf(t){return k(t)&&"__vccOpts"in t}const of=(t,e)=>Yu(t,e,kn),lf="3.2.38",af="http://www.w3.org/2000/svg",Ot=typeof document<"u"?document:null,Oo=Ot&&Ot.createElement("template"),cf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Ot.createElementNS(af,t):Ot.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ot.createTextNode(t),createComment:t=>Ot.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ot.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Oo.innerHTML=s?`<svg>${t}</svg>`:t;const l=Oo.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function uf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function hf(t,e,n){const s=t.style,i=fe(n);if(n&&!i){for(const r in n)Wi(s,r,n[r]);if(e&&!fe(e))for(const r in e)n[r]==null&&Wi(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Do=/\s*!important$/;function Wi(t,e,n){if(D(n))n.forEach(s=>Wi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ff(t,e);Do.test(n)?t.setProperty(fn(s),n.replace(Do,""),"important"):t[s]=n}}const Mo=["Webkit","Moz","ms"],_i={};function ff(t,e){const n=_i[e];if(n)return n;let s=on(e);if(s!=="filter"&&s in t)return _i[e]=s;s=kl(s);for(let i=0;i<Mo.length;i++){const r=Mo[i]+s;if(r in t)return _i[e]=r}return e}const ko="http://www.w3.org/1999/xlink";function df(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ko,e.slice(6,e.length)):t.setAttributeNS(ko,e,n);else{const r=ru(e);n==null||r&&!Rl(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function _f(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Rl(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[wa,pf]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Hi=0;const gf=Promise.resolve(),mf=()=>{Hi=0},yf=()=>Hi||(gf.then(mf),Hi=wa());function Cf(t,e,n,s){t.addEventListener(e,n,s)}function vf(t,e,n,s){t.removeEventListener(e,n,s)}function Ef(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=bf(e);if(s){const c=r[e]=wf(s,i);Cf(t,l,c,a)}else o&&(vf(t,l,o,a),r[e]=void 0)}}const Lo=/(?:Once|Passive|Capture)$/;function bf(t){let e;if(Lo.test(t)){e={};let s;for(;s=t.match(Lo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fn(t.slice(2)),e]}function wf(t,e){const n=s=>{const i=s.timeStamp||wa();(pf||i>=n.attached-1)&&Le(If(s,n.value),e,5,[s])};return n.value=t,n.attached=yf(),n}function If(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Fo=/^on[a-z]/,Tf=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?uf(t,s,i):e==="style"?hf(t,n,s):ks(e)?ar(e)||Ef(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sf(t,e,s,i))?_f(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),df(t,e,s,i))};function Sf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Fo.test(e)&&k(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Fo.test(e)&&fe(n)?!1:e in t}const Nf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};_h.props;const xf=Ce({patchProp:Tf},cf);let Bo;function Rf(){return Bo||(Bo=Wh(xf))}const Af=(...t)=>{const e=Rf().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Pf(s);if(!i)return;const r=e._component;!k(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Pf(t){return fe(t)?document.querySelector(t):t}/**
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
 */const Ia={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const E=function(t,e){if(!t)throw pn(e)},pn=function(t){return new Error("Firebase Database ("+Ia.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ta=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Of=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},xr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ta(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Of(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw Error();const d=r<<2|l>>4;if(s.push(d),c!==64){const g=l<<4&240|c>>2;if(s.push(g),h!==64){const w=c<<6&192|h;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Sa=function(t){const e=Ta(t);return xr.encodeByteArray(e,!0)},Na=function(t){return Sa(t).replace(/\./g,"")},Wo=function(t){try{return xr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Df(t){return xa(void 0,t)}function xa(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Mf(n)||(t[n]=xa(t[n],e[n]));return t}function Mf(t){return t!=="__proto__"}/**
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
 */class Rr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function kf(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ra(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kf())}function Lf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Aa(){return Ia.NODE_ADMIN===!0}function Ff(){return typeof indexedDB=="object"}function Bf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Wf="FirebaseError";class Kn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Wf,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pa.prototype.create)}}class Pa{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Hf(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Kn(i,l,s)}}function Hf(t,e){return t.replace(Uf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Uf=/\{\$([^}]+)}/g;/**
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
 */function Ln(t){return JSON.parse(t)}function le(t){return JSON.stringify(t)}/**
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
 */const Oa=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Ln(Wo(r[0])||""),n=Ln(Wo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},$f=function(t){const e=Oa(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},jf=function(t){const e=Oa(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function at(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function an(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ho(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ui(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Uo(r)&&Uo(o)){if(!Ui(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Uo(t){return t!==null&&typeof t=="object"}/**
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
 */function Vf(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class qf{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Da(t,e){return`${t} failed: ${e} argument `}/**
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
 */const zf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zs=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ks(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xt="[DEFAULT]";/**
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
 */class Kf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Rr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yf(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gf(t){return t===xt?void 0:t}function Yf(t){return t.instantiationMode==="EAGER"}/**
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
 */class Qf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const Xf={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Jf=K.INFO,Zf={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},ed=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Zf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ma{constructor(e){this.name=e,this._logLevel=Jf,this._logHandler=ed,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const td=(t,e)=>e.some(n=>t instanceof n);let $o,jo;function nd(){return $o||($o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sd(){return jo||(jo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ka=new WeakMap,$i=new WeakMap,La=new WeakMap,pi=new WeakMap,Ar=new WeakMap;function id(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(pt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ka.set(n,t)}).catch(()=>{}),Ar.set(e,t),e}function rd(t){if($i.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});$i.set(t,e)}let ji={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $i.get(t);if(e==="objectStoreNames")return t.objectStoreNames||La.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function od(t){ji=t(ji)}function ld(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(gi(this),e,...n);return La.set(s,e.sort?e.sort():[e]),pt(s)}:sd().includes(t)?function(...e){return t.apply(gi(this),e),pt(ka.get(this))}:function(...e){return pt(t.apply(gi(this),e))}}function ad(t){return typeof t=="function"?ld(t):(t instanceof IDBTransaction&&rd(t),td(t,nd())?new Proxy(t,ji):t)}function pt(t){if(t instanceof IDBRequest)return id(t);if(pi.has(t))return pi.get(t);const e=ad(t);return e!==t&&(pi.set(t,e),Ar.set(e,t)),e}const gi=t=>Ar.get(t);function cd(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=pt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(pt(o.result),a.oldVersion,a.newVersion,pt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const ud=["get","getKey","getAll","getAllKeys","count"],hd=["put","add","delete","clear"],mi=new Map;function Vo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mi.get(e))return mi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=hd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ud.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return mi.set(e,r),r}od(t=>({...t,get:(e,n,s)=>Vo(e,n)||t.get(e,n,s),has:(e,n)=>!!Vo(e,n)||t.has(e,n)}));/**
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
 */class fd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function dd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vi="@firebase/app",qo="0.7.32";/**
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
 */const Ft=new Ma("@firebase/app"),_d="@firebase/app-compat",pd="@firebase/analytics-compat",gd="@firebase/analytics",md="@firebase/app-check-compat",yd="@firebase/app-check",Cd="@firebase/auth",vd="@firebase/auth-compat",Ed="@firebase/database",bd="@firebase/database-compat",wd="@firebase/functions",Id="@firebase/functions-compat",Td="@firebase/installations",Sd="@firebase/installations-compat",Nd="@firebase/messaging",xd="@firebase/messaging-compat",Rd="@firebase/performance",Ad="@firebase/performance-compat",Pd="@firebase/remote-config",Od="@firebase/remote-config-compat",Dd="@firebase/storage",Md="@firebase/storage-compat",kd="@firebase/firestore",Ld="@firebase/firestore-compat",Fd="firebase",Bd="9.9.4";/**
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
 */const Fa="[DEFAULT]",Wd={[Vi]:"fire-core",[_d]:"fire-core-compat",[gd]:"fire-analytics",[pd]:"fire-analytics-compat",[yd]:"fire-app-check",[md]:"fire-app-check-compat",[Cd]:"fire-auth",[vd]:"fire-auth-compat",[Ed]:"fire-rtdb",[bd]:"fire-rtdb-compat",[wd]:"fire-fn",[Id]:"fire-fn-compat",[Td]:"fire-iid",[Sd]:"fire-iid-compat",[Nd]:"fire-fcm",[xd]:"fire-fcm-compat",[Rd]:"fire-perf",[Ad]:"fire-perf-compat",[Pd]:"fire-rc",[Od]:"fire-rc-compat",[Dd]:"fire-gcs",[Md]:"fire-gcs-compat",[kd]:"fire-fst",[Ld]:"fire-fst-compat","fire-js":"fire-js",[Fd]:"fire-js-all"};/**
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
 */const vs=new Map,qi=new Map;function Hd(t,e){try{t.container.addComponent(e)}catch(n){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Es(t){const e=t.name;if(qi.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;qi.set(e,t);for(const n of vs.values())Hd(n,t);return!0}function Ud(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const $d={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bt=new Pa("app","Firebase",$d);/**
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
 */class jd{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
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
 */const Vd=Bd;function qd(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Fa,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Bt.create("bad-app-name",{appName:String(s)});const i=vs.get(s);if(i){if(Ui(t,i.options)&&Ui(n,i.config))return i;throw Bt.create("duplicate-app",{appName:s})}const r=new Qf(s);for(const l of qi.values())r.addComponent(l);const o=new jd(t,n,r);return vs.set(s,o),o}function zd(t=Fa){const e=vs.get(t);if(!e)throw Bt.create("no-app",{appName:t});return e}function nn(t,e,n){var s;let i=(s=Wd[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(l.join(" "));return}Es(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Kd="firebase-heartbeat-database",Gd=1,Bn="firebase-heartbeat-store";let yi=null;function Ba(){return yi||(yi=cd(Kd,Gd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bn)}}}).catch(t=>{throw Bt.create("idb-open",{originalErrorMessage:t.message})})),yi}async function Yd(t){var e;try{return(await Ba()).transaction(Bn).objectStore(Bn).get(Wa(t))}catch(n){if(n instanceof Kn)Ft.warn(n.message);else{const s=Bt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Ft.warn(s.message)}}}async function zo(t,e){var n;try{const i=(await Ba()).transaction(Bn,"readwrite");return await i.objectStore(Bn).put(e,Wa(t)),i.done}catch(s){if(s instanceof Kn)Ft.warn(s.message);else{const i=Bt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Ft.warn(i.message)}}}function Wa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Qd=1024,Xd=30*24*60*60*1e3;class Jd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new e_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ko();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Xd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ko(),{heartbeatsToSend:n,unsentEntries:s}=Zd(this._heartbeatsCache.heartbeats),i=Na(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ko(){return new Date().toISOString().substring(0,10)}function Zd(t,e=Qd){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Go(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Go(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class e_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ff()?Bf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Yd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Go(t){return Na(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function t_(t){Es(new Fn("platform-logger",e=>new fd(e),"PRIVATE")),Es(new Fn("heartbeat",e=>new Jd(e),"PRIVATE")),nn(Vi,qo,t),nn(Vi,qo,"esm2017"),nn("fire-js","")}t_("");var n_="firebase",s_="9.9.4";/**
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
 */nn(n_,s_,"app");const Yo="@firebase/database",Qo="0.13.6";/**
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
 */let Ha="";function i_(t){Ha=t}/**
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
 */class r_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),le(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ln(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class o_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return at(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ua=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new r_(e)}}catch{}return new o_},Dt=Ua("localStorage"),zi=Ua("sessionStorage");/**
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
 */const sn=new Ma("@firebase/database"),l_=function(){let t=1;return function(){return t++}}(),$a=function(t){const e=zf(t),n=new qf;n.update(e);const s=n.digest();return xr.encodeByteArray(s)},Gn=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Gn.apply(null,s):typeof s=="object"?e+=le(s):e+=s,e+=" "}return e};let Lt=null,Xo=!0;const a_=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(sn.logLevel=K.VERBOSE,Lt=sn.log.bind(sn),e&&zi.set("logging_enabled",!0)):typeof t=="function"?Lt=t:(Lt=null,zi.remove("logging_enabled"))},me=function(...t){if(Xo===!0&&(Xo=!1,Lt===null&&zi.get("logging_enabled")===!0&&a_(!0)),Lt){const e=Gn.apply(null,t);Lt(e)}},Yn=function(t){return function(...e){me(t,...e)}},Ki=function(...t){const e="FIREBASE INTERNAL ERROR: "+Gn(...t);sn.error(e)},Wt=function(...t){const e=`FIREBASE FATAL ERROR: ${Gn(...t)}`;throw sn.error(e),new Error(e)},Oe=function(...t){const e="FIREBASE WARNING: "+Gn(...t);sn.warn(e)},c_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ja=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},u_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},cn="[MIN_NAME]",Ht="[MAX_NAME]",gn=function(t,e){if(t===e)return 0;if(t===cn||e===Ht)return-1;if(e===cn||t===Ht)return 1;{const n=Jo(t),s=Jo(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},h_=function(t,e){return t===e?0:t<e?-1:1},En=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+le(e))},Pr=function(t){if(typeof t!="object"||t===null)return le(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=le(e[s]),n+=":",n+=Pr(t[e[s]]);return n+="}",n},Va=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const qa=function(t){E(!ja(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},f_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},d_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function __(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const p_=new RegExp("^-?(0*)\\d{1,10}$"),g_=-2147483648,m_=2147483647,Jo=function(t){if(p_.test(t)){const e=Number(t);if(e>=g_&&e<=m_)return e}return null},Qn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Oe("Exception was thrown by user callback.",n),e},Math.floor(0))}},y_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class C_{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Oe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class v_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Oe(e)}}class Gi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gi.OWNER="owner";/**
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
 */const Or="5",za="v",Ka="s",Ga="r",Ya="f",Qa=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xa="ls",Ja="p",Yi="ac",Za="websocket",ec="long_polling";/**
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
 */class E_{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Dt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Dt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function b_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function tc(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===Za)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ec)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);b_(t)&&(n.ns=t.namespace);const i=[];return Re(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class w_{constructor(){this.counters_={}}incrementCounter(e,n=1){at(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Df(this.counters_)}}/**
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
 */const Ci={},vi={};function Dr(t){const e=t.toString();return Ci[e]||(Ci[e]=new w_),Ci[e]}function I_(t,e){const n=t.toString();return vi[n]||(vi[n]=e()),vi[n]}/**
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
 */class T_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Qn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Zo="start",S_="close",N_="pLPCommand",x_="pRTLPCB",nc="id",sc="pw",ic="ser",R_="cb",A_="seg",P_="ts",O_="d",D_="dframe",rc=1870,oc=30,M_=rc-oc,k_=25e3,L_=3e4;class Qt{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Yn(e),this.stats_=Dr(n),this.urlFn=a=>(this.appCheckToken&&(a[Yi]=this.appCheckToken),tc(n,ec,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new T_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(L_)),u_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mr((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Zo)this.id=l,this.password=a;else if(o===S_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Zo]="t",s[ic]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[R_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[za]=Or,this.transportSessionId&&(s[Ka]=this.transportSessionId),this.lastSessionId&&(s[Xa]=this.lastSessionId),this.applicationId&&(s[Ja]=this.applicationId),this.appCheckToken&&(s[Yi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qa.test(location.hostname)&&(s[Ga]=Ya);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qt.forceAllow_=!0}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){return Qt.forceAllow_?!0:!Qt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!f_()&&!d_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Sa(n),i=Va(s,M_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[D_]="t",s[nc]=e,s[sc]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=le(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Mr{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=l_(),window[N_+this.uniqueCallbackIdentifier]=e,window[x_+this.uniqueCallbackIdentifier]=n,this.myIFrame=Mr.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){me("frame writing exception"),l.stack&&me(l.stack),me(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||me("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[nc]=this.myID,e[sc]=this.myPW,e[ic]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+oc+s.length<=rc;){const o=this.pendingSegs.shift();s=s+"&"+A_+i+"="+o.seg+"&"+P_+i+"="+o.ts+"&"+O_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(k_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const F_=16384,B_=45e3;let bs=null;typeof MozWebSocket<"u"?bs=MozWebSocket:typeof WebSocket<"u"&&(bs=WebSocket);class Ue{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Yn(this.connId),this.stats_=Dr(n),this.connURL=Ue.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[za]=Or,typeof location<"u"&&location.hostname&&Qa.test(location.hostname)&&(o[Ga]=Ya),n&&(o[Ka]=n),s&&(o[Xa]=s),i&&(o[Yi]=i),r&&(o[Ja]=r),tc(e,Za,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Dt.set("previous_websocket_failure",!0);try{let s;Aa(),this.mySock=new bs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&bs!==null&&!Ue.forceDisallow_}static previouslyFailed(){return Dt.isInMemoryStorage||Dt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Dt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ln(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Va(n,F_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(B_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ue.responsesRequiredToBeHealthy=2;Ue.healthyTimeout=3e4;/**
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
 */class Wn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Qt,Ue]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ue&&Ue.isAvailable();let s=n&&!Ue.previouslyFailed();if(e.webSocketOnly&&(n||Oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ue];else{const i=this.transports_=[];for(const r of Wn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Wn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wn.globalTransportInitialized_=!1;/**
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
 */const W_=6e4,H_=5e3,U_=10*1024,$_=100*1024,Ei="t",el="d",j_="s",tl="r",V_="e",nl="o",sl="a",il="n",rl="p",q_="h";class z_{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Yn("c:"+this.id+":"),this.transportManager_=new Wn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=xn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>U_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ei in e){const n=e[Ei];n===sl?this.upgradeIfSecondaryHealthy_():n===tl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===nl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=En("t",e),s=En("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:sl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:il,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=En("t",e),s=En("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=En(Ei,e);if(el in e){const s=e[el];if(n===q_)this.onHandshake_(s);else if(n===il){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===j_?this.onConnectionShutdown_(s):n===tl?this.onReset_(s):n===V_?Ki("Server Error: "+s):n===nl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ki("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Or!==s&&Oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),xn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(W_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(H_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Dt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class lc{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class ac{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ws extends ac{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ra()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ws}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ol=32,ll=768;class z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new z("")}function B(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function vt(t){return t.pieces_.length-t.pieceNum_}function Y(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new z(t.pieces_,e)}function cc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function K_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function uc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function hc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new z(e,0)}function ae(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new z(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function we(t,e){const n=B(t),s=B(e);if(n===null)return e;if(n===s)return we(Y(t),Y(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function fc(t,e){if(vt(t)!==vt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function je(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(vt(t)>vt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class G_{constructor(e,n){this.errorPrefix_=n,this.parts_=uc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=zs(this.parts_[s]);dc(this)}}function Y_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=zs(e),dc(t)}function Q_(t){const e=t.parts_.pop();t.byteLength_-=zs(e),t.parts_.length>0&&(t.byteLength_-=1)}function dc(t){if(t.byteLength_>ll)throw new Error(t.errorPrefix_+"has a key path longer than "+ll+" bytes ("+t.byteLength_+").");if(t.parts_.length>ol)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ol+") or object contains a cycle "+Rt(t))}function Rt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class kr extends ac{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new kr}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const bn=1e3,X_=60*5*1e3,al=30*1e3,J_=1.3,Z_=3e4,ep="server_kill",cl=3;class rt extends lc{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=rt.nextPersistentConnectionId_++,this.log_=Yn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bn,this.maxReconnectDelay_=X_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Aa())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");kr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ws.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(le(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Rr,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;rt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&at(e,"w")){const s=an(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jf(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=al)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=$f(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+le(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ki("Unrecognized action received from server: "+le(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=bn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Z_&&(this.reconnectDelay_=bn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*J_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+rt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?me("getToken() completed but was canceled"):(me("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new z_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Oe(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(ep)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Oe(h),a())}}}interrupt(e){me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ho(this.interruptReasons_)&&(this.reconnectDelay_=bn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Pr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){me("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=cl&&(this.reconnectDelay_=al,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){me("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=cl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ha.replace(/\./g,"-")]=1,Ra()?e["framework.cordova"]=1:Lf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ws.getInstance().currentlyOnline();return Ho(this.interruptReasons_)&&e}}rt.nextPersistentConnectionId_=0;rt.nextConnectionId_=0;/**
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
 */class L{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new L(e,n)}}/**
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
 */class Gs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new L(cn,e),i=new L(cn,n);return this.compare(s,i)!==0}minPost(){return L.MIN}}/**
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
 */let as;class _c extends Gs{static get __EMPTY_NODE(){return as}static set __EMPTY_NODE(e){as=e}compare(e,n){return gn(e.name,n.name)}isDefinedOn(e){throw pn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L(Ht,as)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,as)}toString(){return".key"}}const rn=new _c;/**
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
 */class cs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class he{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:he.RED,this.left=i!=null?i:xe.EMPTY_NODE,this.right=r!=null?r:xe.EMPTY_NODE}copy(e,n,s,i,r){return new he(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return xe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return xe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}he.RED=!0;he.BLACK=!1;class tp{copy(e,n,s,i,r){return this}insert(e,n,s){return new he(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class xe{constructor(e,n=xe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new xe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,he.BLACK,null,null))}remove(e){return new xe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,he.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new cs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new cs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new cs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new cs(this.root_,null,this.comparator_,!0,e)}}xe.EMPTY_NODE=new tp;/**
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
 */function np(t,e){return gn(t.name,e.name)}function Lr(t,e){return gn(t,e)}/**
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
 */let Qi;function sp(t){Qi=t}const pc=function(t){return typeof t=="number"?"number:"+qa(t):"string:"+t},gc=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&at(e,".sv"),"Priority must be a string or number.")}else E(t===Qi||t.isEmpty(),"priority of unexpected type.");E(t===Qi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ul;class ue{constructor(e,n=ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gc(this.priorityNode_)}static set __childrenNodeConstructor(e){ul=e}static get __childrenNodeConstructor(){return ul}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ue(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:B(e)===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=B(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||vt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(Y(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=qa(this.value_):e+=this.value_,this.lazyHash_=$a(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ue.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ue.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ue.VALUE_TYPE_ORDER.indexOf(n),r=ue.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let mc,yc;function ip(t){mc=t}function rp(t){yc=t}class op extends Gs{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?gn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L(Ht,new ue("[PRIORITY-POST]",yc))}makePost(e,n){const s=mc(e);return new L(n,new ue("[PRIORITY-POST]",s))}toString(){return".priority"}}const ie=new op;/**
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
 */const lp=Math.log(2);class ap{constructor(e){const n=r=>parseInt(Math.log(r)/lp,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Is=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new he(d,h.node,he.BLACK,null,null);{const g=parseInt(u/2,10)+a,w=i(a,g),N=i(g+1,c);return h=t[g],d=n?n(h):h,new he(d,h.node,he.BLACK,w,N)}},r=function(a){let c=null,u=null,h=t.length;const d=function(w,N){const x=h-w,M=h;h-=w;const de=i(x+1,M),Z=t[x],te=n?n(Z):Z;g(new he(te,Z.node,N,null,de))},g=function(w){c?(c.left=w,c=w):(u=w,c=w)};for(let w=0;w<a.count;++w){const N=a.nextBitIsOne(),x=Math.pow(2,a.count-(w+1));N?d(x,he.BLACK):(d(x,he.BLACK),d(x,he.RED))}return u},o=new ap(t.length),l=r(o);return new xe(s||e,l)};/**
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
 */let bi;const Gt={};class it{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(Gt&&ie,"ChildrenNode.ts has not been loaded"),bi=bi||new it({".priority":Gt},{".priority":ie}),bi}get(e){const n=an(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof xe?n:null}hasIndex(e){return at(this.indexSet_,e.toString())}addIndex(e,n){E(e!==rn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(L.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Is(s,e.getCompare()):l=Gt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new it(u,c)}addToIndexes(e,n){const s=Cs(this.indexes_,(i,r)=>{const o=an(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===Gt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(L.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Is(l,o.getCompare())}else return Gt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new L(e.name,l))),a.insert(e,e.node)}});return new it(s,this.indexSet_)}removeFromIndexes(e,n){const s=Cs(this.indexes_,i=>{if(i===Gt)return i;{const r=n.get(e.name);return r?i.remove(new L(e.name,r)):i}});return new it(s,this.indexSet_)}}/**
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
 */let wn;class P{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&gc(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return wn||(wn=new P(new xe(Lr),null,it.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wn}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?wn:n}}getChild(e){const n=B(e);return n===null?this:this.getImmediateChild(n).getChild(Y(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new L(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?wn:this.priorityNode_;return new P(i,o,r)}}updateChild(e,n){const s=B(e);if(s===null)return n;{E(B(e)!==".priority"||vt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Y(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ie,(o,l)=>{n[o]=l.val(e),s++,r&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pc(this.getPriority().val())+":"),this.forEachChild(ie,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":$a(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new L(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xn?-1:0}withIndex(e){if(e===rn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===rn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ie),i=n.getIterator(ie);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===rn?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cp extends P{constructor(){super(new xe(Lr),P.EMPTY_NODE,it.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const Xn=new cp;Object.defineProperties(L,{MIN:{value:new L(cn,P.EMPTY_NODE)},MAX:{value:new L(Ht,Xn)}});_c.__EMPTY_NODE=P.EMPTY_NODE;ue.__childrenNodeConstructor=P;sp(Xn);rp(Xn);/**
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
 */const up=!0;function pe(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ue(n,pe(e))}if(!(t instanceof Array)&&up){const n=[];let s=!1;if(Re(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=pe(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new L(o,a)))}}),n.length===0)return P.EMPTY_NODE;const r=Is(n,np,o=>o.name,Lr);if(s){const o=Is(n,ie.getCompare());return new P(r,pe(e),new it({".priority":o},{".priority":ie}))}else return new P(r,pe(e),it.Default)}else{let n=P.EMPTY_NODE;return Re(t,(s,i)=>{if(at(t,s)&&s.substring(0,1)!=="."){const r=pe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(pe(e))}}ip(pe);/**
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
 */class hp extends Gs{constructor(e){super(),this.indexPath_=e,E(!F(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?gn(e.name,n.name):r}makePost(e,n){const s=pe(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,s);return new L(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,Xn);return new L(Ht,e)}toString(){return uc(this.indexPath_,0).join("/")}}/**
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
 */class fp extends Gs{compare(e,n){const s=e.node.compareTo(n.node);return s===0?gn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const s=pe(e);return new L(n,s)}toString(){return".value"}}const dp=new fp;/**
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
 */function Cc(t){return{type:"value",snapshotNode:t}}function un(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Hn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Un(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _p(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Fr{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Hn(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(un(n,s)):o.trackChildChange(Un(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,r)=>{n.hasChild(i)||s.trackChildChange(Hn(i,r))}),n.isLeafNode()||n.forEachChild(ie,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Un(i,r,o))}else s.trackChildChange(un(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class $n{constructor(e){this.indexedFilter_=new Fr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$n.getStartPost_(e),this.endPost_=$n.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new L(n,s))||(s=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const r=this;return n.forEachChild(ie,(o,l)=>{r.matches(new L(o,l))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class pp{constructor(e){this.rangedFilter_=new $n(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new L(n,s))||(s=P.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(d,g)=>h(g,d)}else a=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,u=!1;for(;a.hasNext();){const h=a.getNext();!u&&l(r,h)<=0&&(u=!0),u&&c<this.limit_&&l(h,o)<=0?c++:i=i.updateImmediateChild(h.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new L(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(Un(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Hn(n,h));const N=l.updateImmediateChild(n,P.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(un(d.name,d.node)),N.updateImmediateChild(d.name,d.node)):N}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Hn(c.name,c.node)),r.trackChildChange(un(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,P.EMPTY_NODE)):e}}/**
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
 */class Br{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:cn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ht}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new Br;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function gp(t){return t.loadsAllData()?new Fr(t.getIndex()):t.hasLimit()?new pp(t):new $n(t)}function hl(t){const e={};if(t.isDefault())return e;let n;return t.index_===ie?n="$priority":t.index_===dp?n="$value":t.index_===rn?n="$key":(E(t.index_ instanceof hp,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=le(n),t.startSet_&&(e.startAt=le(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+le(t.indexStartName_))),t.endSet_&&(e.endAt=le(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+le(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function fl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
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
 */class Ts extends lc{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Yn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ts.getListenId_(e,s),l={};this.listens_[o]=l;const a=hl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),an(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Ts.getListenId_(e,n);delete this.listens_[s]}get(e){const n=hl(e._queryParams),s=e._path.toString(),i=new Rr;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vf(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ln(l.responseText)}catch{Oe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Oe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class mp{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ss(){return{value:null,children:new Map}}function vc(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=B(e);t.children.has(s)||t.children.set(s,Ss());const i=t.children.get(s);e=Y(e),vc(i,e,n)}}function Xi(t,e,n){t.value!==null?n(e,t.value):yp(t,(s,i)=>{const r=new z(e.toString()+"/"+s);Xi(i,r,n)})}function yp(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Cp{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Re(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const dl=10*1e3,vp=30*1e3,Ep=5*60*1e3;class bp{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Cp(e);const s=dl+(vp-dl)*Math.random();xn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Re(e,(i,r)=>{r>0&&at(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),xn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ep))}}/**
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
 */var Ve;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ve||(Ve={}));function Ec(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Wr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ns{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ve.ACK_USER_WRITE,this.source=Ec()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new z(e));return new Ns($(),n,this.revert)}}else return E(B(this.path)===e,"operationForChild called for unrelated child."),new Ns(Y(this.path),this.affectedTree,this.revert)}}/**
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
 */class jn{constructor(e,n){this.source=e,this.path=n,this.type=Ve.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new jn(this.source,$()):new jn(this.source,Y(this.path))}}/**
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
 */class Ut{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ve.OVERWRITE}operationForChild(e){return F(this.path)?new Ut(this.source,$(),this.snap.getImmediateChild(e)):new Ut(this.source,Y(this.path),this.snap)}}/**
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
 */class Vn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ve.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new z(e));return n.isEmpty()?null:n.value?new Ut(this.source,$(),n.value):new Vn(this.source,$(),n)}else return E(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vn(this.source,Y(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Et{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=B(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class wp{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ip(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(_p(o.childName,o.snapshotNode))}),In(t,i,"child_removed",e,s,n),In(t,i,"child_added",e,s,n),In(t,i,"child_moved",r,s,n),In(t,i,"child_changed",e,s,n),In(t,i,"value",e,s,n),i}function In(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Sp(t,l,a)),o.forEach(l=>{const a=Tp(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Tp(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Sp(t,e,n){if(e.childName==null||n.childName==null)throw pn("Should only compare child_ events.");const s=new L(e.childName,e.snapshotNode),i=new L(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Ys(t,e){return{eventCache:t,serverCache:e}}function Rn(t,e,n,s){return Ys(new Et(e,n,s),t.serverCache)}function bc(t,e,n,s){return Ys(t.eventCache,new Et(e,n,s))}function xs(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function $t(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let wi;const Np=()=>(wi||(wi=new xe(h_)),wi);class J{constructor(e,n=Np()){this.value=e,this.children=n}static fromObject(e){let n=new J(null);return Re(e,(s,i)=>{n=n.set(new z(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(F(e))return null;{const s=B(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Y(e),n);return r!=null?{path:ae(new z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=B(e),s=this.children.get(n);return s!==null?s.subtree(Y(e)):new J(null)}}set(e,n){if(F(e))return new J(n,this.children);{const s=B(e),r=(this.children.get(s)||new J(null)).set(Y(e),n),o=this.children.insert(s,r);return new J(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=B(e),s=this.children.get(n);if(s){const i=s.remove(Y(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new J(null):new J(this.value,r)}else return this}}get(e){if(F(e))return this.value;{const n=B(e),s=this.children.get(n);return s?s.get(Y(e)):null}}setTree(e,n){if(F(e))return n;{const s=B(e),r=(this.children.get(s)||new J(null)).setTree(Y(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new J(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ae(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(F(e))return null;{const r=B(e),o=this.children.get(r);return o?o.findOnPath_(Y(e),ae(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,s){if(F(e))return this;{this.value&&s(n,this.value);const i=B(e),r=this.children.get(i);return r?r.foreachOnPath_(Y(e),ae(n,i),s):new J(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ae(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Ke{constructor(e){this.writeTree_=e}static empty(){return new Ke(new J(null))}}function An(t,e,n){if(F(e))return new Ke(new J(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=we(i,e);return r=r.updateChild(o,n),new Ke(t.writeTree_.set(i,r))}else{const i=new J(n),r=t.writeTree_.setTree(e,i);return new Ke(r)}}}function _l(t,e,n){let s=t;return Re(n,(i,r)=>{s=An(s,ae(e,i),r)}),s}function pl(t,e){if(F(e))return Ke.empty();{const n=t.writeTree_.setTree(e,new J(null));return new Ke(n)}}function Ji(t,e){return jt(t,e)!=null}function jt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(we(n.path,e)):null}function gl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(s,i)=>{e.push(new L(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new L(s,i.value))}),e}function gt(t,e){if(F(e))return t;{const n=jt(t,e);return n!=null?new Ke(new J(n)):new Ke(t.writeTree_.subtree(e))}}function Zi(t){return t.writeTree_.isEmpty()}function hn(t,e){return wc($(),t.writeTree_,e)}function wc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=wc(ae(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ae(t,".priority"),s)),n}}/**
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
 */function Qs(t,e){return Nc(e,t)}function xp(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=An(t.visibleWrites,e,n)),t.lastWriteId=s}function Rp(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Ap(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Pp(l,s.path)?i=!1:je(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Op(t),!0;if(s.snap)t.visibleWrites=pl(t.visibleWrites,s.path);else{const l=s.children;Re(l,a=>{t.visibleWrites=pl(t.visibleWrites,ae(s.path,a))})}return!0}else return!1}function Pp(t,e){if(t.snap)return je(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&je(ae(t.path,n),e))return!0;return!1}function Op(t){t.visibleWrites=Ic(t.allWrites,Dp,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Dp(t){return t.visible}function Ic(t,e,n){let s=Ke.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)je(n,o)?(l=we(n,o),s=An(s,l,r.snap)):je(o,n)&&(l=we(o,n),s=An(s,$(),r.snap.getChild(l)));else if(r.children){if(je(n,o))l=we(n,o),s=_l(s,l,r.children);else if(je(o,n))if(l=we(o,n),F(l))s=_l(s,$(),r.children);else{const a=an(r.children,B(l));if(a){const c=a.getChild(Y(l));s=An(s,$(),c)}}}else throw pn("WriteRecord should have .snap or .children")}}return s}function Tc(t,e,n,s,i){if(!s&&!i){const r=jt(t.visibleWrites,e);if(r!=null)return r;{const o=gt(t.visibleWrites,e);if(Zi(o))return n;if(n==null&&!Ji(o,$()))return null;{const l=n||P.EMPTY_NODE;return hn(o,l)}}}else{const r=gt(t.visibleWrites,e);if(!i&&Zi(r))return n;if(!i&&n==null&&!Ji(r,$()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(je(c.path,e)||je(e,c.path))},l=Ic(t.allWrites,o,e),a=n||P.EMPTY_NODE;return hn(l,a)}}}function Mp(t,e,n){let s=P.EMPTY_NODE;const i=jt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=gt(t.visibleWrites,e);return n.forEachChild(ie,(o,l)=>{const a=hn(gt(r,new z(o)),l);s=s.updateImmediateChild(o,a)}),gl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=gt(t.visibleWrites,e);return gl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function kp(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ae(e,n);if(Ji(t.visibleWrites,r))return null;{const o=gt(t.visibleWrites,r);return Zi(o)?i.getChild(n):hn(o,i.getChild(n))}}function Lp(t,e,n,s){const i=ae(e,n),r=jt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=gt(t.visibleWrites,i);return hn(o,s.getNode().getImmediateChild(n))}else return null}function Fp(t,e){return jt(t.visibleWrites,e)}function Bp(t,e,n,s,i,r,o){let l;const a=gt(t.visibleWrites,e),c=jt(a,$());if(c!=null)l=c;else if(n!=null)l=hn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function Wp(){return{visibleWrites:Ke.empty(),allWrites:[],lastWriteId:-1}}function Rs(t,e,n,s){return Tc(t.writeTree,t.treePath,e,n,s)}function Ur(t,e){return Mp(t.writeTree,t.treePath,e)}function ml(t,e,n,s){return kp(t.writeTree,t.treePath,e,n,s)}function As(t,e){return Fp(t.writeTree,ae(t.treePath,e))}function Hp(t,e,n,s,i,r){return Bp(t.writeTree,t.treePath,e,n,s,i,r)}function $r(t,e,n){return Lp(t.writeTree,t.treePath,e,n)}function Sc(t,e){return Nc(ae(t.treePath,e),t.writeTree)}function Nc(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Up{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Un(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Hn(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,un(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Un(s,e.snapshotNode,i.oldSnap));else throw pn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class $p{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const xc=new $p;class jr{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Et(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $r(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$t(this.viewCache_),r=Hp(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function jp(t){return{filter:t}}function Vp(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qp(t,e,n,s,i){const r=new Up;let o,l;if(n.type===Ve.OVERWRITE){const c=n;c.source.fromUser?o=er(t,e,c.path,c.snap,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!F(c.path),o=Ps(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Ve.MERGE){const c=n;c.source.fromUser?o=Kp(t,e,c.path,c.children,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=tr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Ve.ACK_USER_WRITE){const c=n;c.revert?o=Qp(t,e,c.path,s,i,r):o=Gp(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ve.LISTEN_COMPLETE)o=Yp(t,e,n.path,s,r);else throw pn("Unknown operation type: "+n.type);const a=r.getChanges();return zp(e,o,a),{viewCache:o,changes:a}}function zp(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=xs(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Cc(xs(e)))}}function Rc(t,e,n,s,i,r){const o=e.eventCache;if(As(s,n)!=null)return e;{let l,a;if(F(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=$t(e),u=c instanceof P?c:P.EMPTY_NODE,h=Ur(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Rs(s,$t(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=B(n);if(c===".priority"){E(vt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=ml(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=Y(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=ml(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=$r(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Rn(e,l,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function Ps(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(F(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=B(n);if(!a.isCompleteForPath(n)&&vt(n)>1)return e;const w=Y(n),x=a.getNode().getImmediateChild(g).updateChild(w,s);g===".priority"?c=u.updatePriority(a.getNode(),x):c=u.updateChild(a.getNode(),g,x,w,xc,null)}const h=bc(e,c,a.isFullyInitialized()||F(n),u.filtersNodes()),d=new jr(i,h,r);return Rc(t,h,n,i,d,l)}function er(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new jr(i,e,r);if(F(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Rn(e,c,!0,t.filter.filtersNodes());else{const h=B(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Rn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=Y(n),g=l.getNode().getImmediateChild(h);let w;if(F(d))w=s;else{const N=u.getCompleteChild(h);N!=null?cc(d)===".priority"&&N.getChild(hc(d)).isEmpty()?w=N:w=N.updateChild(d,s):w=P.EMPTY_NODE}if(g.equals(w))a=e;else{const N=t.filter.updateChild(l.getNode(),h,w,d,u,o);a=Rn(e,N,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function yl(t,e){return t.eventCache.isCompleteForChild(e)}function Kp(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=ae(n,a);yl(e,B(u))&&(l=er(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=ae(n,a);yl(e,B(u))||(l=er(t,l,u,c,i,r,o))}),l}function Cl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function tr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;F(n)?c=s:c=new J(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),w=Cl(t,g,d);a=Ps(t,a,new z(h),w,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const w=e.serverCache.getNode().getImmediateChild(h),N=Cl(t,w,d);a=Ps(t,a,new z(h),N,i,r,o,l)}}),a}function Gp(t,e,n,s,i,r,o){if(As(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(F(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ps(t,e,n,a.getNode().getChild(n),i,r,l,o);if(F(n)){let c=new J(null);return a.getNode().forEachChild(rn,(u,h)=>{c=c.set(new z(u),h)}),tr(t,e,n,c,i,r,l,o)}else return e}else{let c=new J(null);return s.foreach((u,h)=>{const d=ae(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),tr(t,e,n,c,i,r,l,o)}}function Yp(t,e,n,s,i){const r=e.serverCache,o=bc(e,r.getNode(),r.isFullyInitialized()||F(n),r.isFiltered());return Rc(t,o,n,s,xc,i)}function Qp(t,e,n,s,i,r){let o;if(As(s,n)!=null)return e;{const l=new jr(s,e,i),a=e.eventCache.getNode();let c;if(F(n)||B(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Rs(s,$t(e));else{const h=e.serverCache.getNode();E(h instanceof P,"serverChildren would be complete if leaf node"),u=Ur(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=B(n);let h=$r(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,Y(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,P.EMPTY_NODE,Y(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Rs(s,$t(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||As(s,$())!=null,Rn(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Xp{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Fr(s.getIndex()),r=gp(s);this.processor_=jp(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(P.EMPTY_NODE,l.getNode(),null),u=new Et(a,o.isFullyInitialized(),i.filtersNodes()),h=new Et(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ys(h,u),this.eventGenerator_=new wp(this.query_)}get query(){return this.query_}}function Jp(t){return t.viewCache_.serverCache.getNode()}function Zp(t){return xs(t.viewCache_)}function eg(t,e){const n=$t(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(B(e)).isEmpty())?n.getChild(e):null}function vl(t){return t.eventRegistrations_.length===0}function tg(t,e){t.eventRegistrations_.push(e)}function El(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function bl(t,e,n,s){e.type===Ve.MERGE&&e.source.queryId!==null&&(E($t(t.viewCache_),"We should always have a full cache before handling merges"),E(xs(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=qp(t.processor_,i,e,n,s);return Vp(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Ac(t,r.changes,r.viewCache.eventCache.getNode(),null)}function ng(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(r,o)=>{s.push(un(r,o))}),n.isFullyInitialized()&&s.push(Cc(n.getNode())),Ac(t,s,n.getNode(),e)}function Ac(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Ip(t.eventGenerator_,e,n,i)}/**
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
 */let Os;class Pc{constructor(){this.views=new Map}}function sg(t){E(!Os,"__referenceConstructor has already been defined"),Os=t}function ig(){return E(Os,"Reference.ts has not been loaded"),Os}function rg(t){return t.views.size===0}function Vr(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),bl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(bl(o,e,n,s));return r}}function Oc(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Rs(n,i?s:null),a=!1;l?a=!0:s instanceof P?(l=Ur(n,s),a=!1):(l=P.EMPTY_NODE,a=!1);const c=Ys(new Et(l,a,!1),new Et(s,i,!1));return new Xp(e,c)}return o}function og(t,e,n,s,i,r){const o=Oc(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),tg(o,n),ng(o,n)}function lg(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=bt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(El(c,n,s)),vl(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(El(a,n,s)),vl(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!bt(t)&&r.push(new(ig())(e._repo,e._path)),{removed:r,events:o}}function Dc(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function mt(t,e){let n=null;for(const s of t.views.values())n=n||eg(s,e);return n}function Mc(t,e){if(e._queryParams.loadsAllData())return Xs(t);{const s=e._queryIdentifier;return t.views.get(s)}}function kc(t,e){return Mc(t,e)!=null}function bt(t){return Xs(t)!=null}function Xs(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ds;function ag(t){E(!Ds,"__referenceConstructor has already been defined"),Ds=t}function cg(){return E(Ds,"Reference.ts has not been loaded"),Ds}let ug=1;class wl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=Wp(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hg(t,e,n,s,i){return xp(t.pendingWriteTree_,e,n,s,i),i?Zn(t,new Ut(Ec(),e,n)):[]}function Xt(t,e,n=!1){const s=Rp(t.pendingWriteTree_,e);if(Ap(t.pendingWriteTree_,e)){let r=new J(null);return s.snap!=null?r=r.set($(),!0):Re(s.children,o=>{r=r.set(new z(o),!0)}),Zn(t,new Ns(s.path,r,n))}else return[]}function Jn(t,e,n){return Zn(t,new Ut(Wr(),e,n))}function fg(t,e,n){const s=J.fromObject(n);return Zn(t,new Vn(Wr(),e,s))}function dg(t,e){return Zn(t,new jn(Wr(),e))}function _g(t,e,n){const s=qr(t,n);if(s){const i=zr(s),r=i.path,o=i.queryId,l=we(r,e),a=new jn(Hr(o),l);return Kr(t,r,a)}else return[]}function Lc(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||kc(o,e))){const a=lg(o,e,n,s);rg(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>bt(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=yg(d);for(let w=0;w<g.length;++w){const N=g[w],x=N.query,M=Uc(t,N);t.listenProvider_.startListening(Pn(x),qn(t,x),M.hashFn,M.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Pn(e),null):c.forEach(d=>{const g=t.queryToTagMap.get(Js(d));t.listenProvider_.stopListening(Pn(d),g)}))}Cg(t,c)}return l}function Fc(t,e,n,s){const i=qr(t,s);if(i!=null){const r=zr(i),o=r.path,l=r.queryId,a=we(o,e),c=new Ut(Hr(l),a,n);return Kr(t,o,c)}else return[]}function pg(t,e,n,s){const i=qr(t,s);if(i){const r=zr(i),o=r.path,l=r.queryId,a=we(o,e),c=J.fromObject(n),u=new Vn(Hr(l),a,c);return Kr(t,o,u)}else return[]}function gg(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const w=we(d,i);r=r||mt(g,w),o=o||bt(g)});let l=t.syncPointTree_.get(i);l?(o=o||bt(l),r=r||mt(l,$())):(l=new Pc,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,w)=>{const N=mt(w,$());N&&(r=r.updateImmediateChild(g,N))}));const c=kc(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Js(e);E(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=vg();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=Qs(t.pendingWriteTree_,i);let h=og(l,e,n,u,r,a);if(!c&&!o&&!s){const d=Mc(l,e);h=h.concat(Eg(t,e,d))}return h}function Bc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=we(o,e),c=mt(l,a);if(c)return c});return Tc(i,e,r,n,!0)}function mg(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=we(c,n);s=s||mt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||mt(i,$()):(i=new Pc,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Et(s,!0,!1):null,l=Qs(t.pendingWriteTree_,e._path),a=Oc(i,e,l,r?o.getNode():P.EMPTY_NODE,r);return Zp(a)}function Zn(t,e){return Wc(e,t.syncPointTree_,null,Qs(t.pendingWriteTree_,$()))}function Wc(t,e,n,s){if(F(t.path))return Hc(t,e,n,s);{const i=e.get($());n==null&&i!=null&&(n=mt(i,$()));let r=[];const o=B(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Sc(s,o);r=r.concat(Wc(l,a,c,u))}return i&&(r=r.concat(Vr(i,t,s,n))),r}}function Hc(t,e,n,s){const i=e.get($());n==null&&i!=null&&(n=mt(i,$()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Sc(s,o),u=t.operationForChild(o);u&&(r=r.concat(Hc(u,l,a,c)))}),i&&(r=r.concat(Vr(i,t,s,n))),r}function Uc(t,e){const n=e.query,s=qn(t,n);return{hashFn:()=>(Jp(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?_g(t,n._path,s):dg(t,n._path);{const r=__(i,n);return Lc(t,n,null,r)}}}}function qn(t,e){const n=Js(e);return t.queryToTagMap.get(n)}function Js(t){return t._path.toString()+"$"+t._queryIdentifier}function qr(t,e){return t.tagToQueryMap.get(e)}function zr(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new z(t.substr(0,e))}}function Kr(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=Qs(t.pendingWriteTree_,e);return Vr(s,n,i,null)}function yg(t){return t.fold((e,n,s)=>{if(n&&bt(n))return[Xs(n)];{let i=[];return n&&(i=Dc(n)),Re(s,(r,o)=>{i=i.concat(o)}),i}})}function Pn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(cg())(t._repo,t._path):t}function Cg(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Js(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function vg(){return ug++}function Eg(t,e,n){const s=e._path,i=qn(t,e),r=Uc(t,n),o=t.listenProvider_.startListening(Pn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)E(!bt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!F(c)&&u&&bt(u))return[Xs(u).query];{let d=[];return u&&(d=d.concat(Dc(u).map(g=>g.query))),Re(h,(g,w)=>{d=d.concat(w)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Pn(u),qn(t,u))}}return o}/**
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
 */class Gr{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Gr(n)}node(){return this.node_}}class Yr{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new Yr(this.syncTree_,n)}node(){return Bc(this.syncTree_,this.path_)}}const bg=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Il=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return wg(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Ig(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},wg=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},Ig=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Tg=function(t,e,n,s){return Qr(e,new Yr(n,t),s)},Sg=function(t,e,n){return Qr(t,new Gr(e),n)};function Qr(t,e,n){const s=t.getPriority().val(),i=Il(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Il(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ue(l,pe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ue(i))),o.forEachChild(ie,(l,a)=>{const c=Qr(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class Xr{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Jr(t,e){let n=e instanceof z?e:new z(e),s=t,i=B(n);for(;i!==null;){const r=an(s.node.children,i)||{children:{},childCount:0};s=new Xr(i,s,r),n=Y(n),i=B(n)}return s}function mn(t){return t.node.value}function $c(t,e){t.node.value=e,nr(t)}function jc(t){return t.node.childCount>0}function Ng(t){return mn(t)===void 0&&!jc(t)}function Zs(t,e){Re(t.node.children,(n,s)=>{e(new Xr(n,t,s))})}function Vc(t,e,n,s){n&&!s&&e(t),Zs(t,i=>{Vc(i,e,!0,s)}),n&&s&&e(t)}function xg(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function es(t){return new z(t.parent===null?t.name:es(t.parent)+"/"+t.name)}function nr(t){t.parent!==null&&Rg(t.parent,t.name,t)}function Rg(t,e,n){const s=Ng(n),i=at(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,nr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,nr(t))}/**
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
 */const Ag=/[\[\].#$\/\u0000-\u001F\u007F]/,Pg=/[\[\].#$\u0000-\u001F\u007F]/,Ii=10*1024*1024,qc=function(t){return typeof t=="string"&&t.length!==0&&!Ag.test(t)},zc=function(t){return typeof t=="string"&&t.length!==0&&!Pg.test(t)},Og=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),zc(t)},Kc=function(t,e,n){const s=n instanceof z?new G_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Rt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Rt(s)+" with contents = "+e.toString());if(ja(e))throw new Error(t+"contains "+e.toString()+" "+Rt(s));if(typeof e=="string"&&e.length>Ii/3&&zs(e)>Ii)throw new Error(t+"contains a string greater than "+Ii+" utf8 bytes "+Rt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Re(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!qc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Rt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Y_(s,o),Kc(t,l,s),Q_(s)}),i&&r)throw new Error(t+' contains ".value" child '+Rt(s)+" in addition to actual children.")}},Gc=function(t,e,n,s){if(!(s&&n===void 0)&&!zc(n))throw new Error(Da(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Dg=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Gc(t,e,n,s)},Mg=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!qc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Og(n))throw new Error(Da(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class kg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Lg(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!fc(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function wt(t,e,n){Lg(t,n),Fg(t,s=>je(s,e)||je(e,s))}function Fg(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Bg(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Bg(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Lt&&me("event: "+n.toString()),Qn(s)}}}/**
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
 */const Wg="repo_interrupt",Hg=25;class Ug{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ss(),this.transactionQueueTree_=new Xr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function $g(t,e,n){if(t.stats_=Dr(t.repoInfo_),t.forceRestClient_||y_())t.server_=new Ts(t.repoInfo_,(s,i,r,o)=>{Tl(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Sl(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{le(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new rt(t.repoInfo_,e,(s,i,r,o)=>{Tl(t,s,i,r,o)},s=>{Sl(t,s)},s=>{Vg(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=I_(t.repoInfo_,()=>new bp(t.stats_,t.server_)),t.infoData_=new mp,t.infoSyncTree_=new wl({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Jn(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Zr(t,"connected",!1),t.serverSyncTree_=new wl({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);wt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function jg(t){const n=t.infoData_.getNode(new z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yc(t){return bg({timestamp:jg(t)})}function Tl(t,e,n,s,i){t.dataUpdateCount++;const r=new z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Cs(n,c=>pe(c));o=pg(t.serverSyncTree_,r,a,i)}else{const a=pe(n);o=Fc(t.serverSyncTree_,r,a,i)}else if(s){const a=Cs(n,c=>pe(c));o=fg(t.serverSyncTree_,r,a)}else{const a=pe(n);o=Jn(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=no(t,r)),wt(t.eventQueue_,l,o)}function Sl(t,e){Zr(t,"connected",e),e===!1&&Kg(t)}function Vg(t,e){Re(e,(n,s)=>{Zr(t,n,s)})}function Zr(t,e,n){const s=new z("/.info/"+e),i=pe(n);t.infoData_.updateSnapshot(s,i);const r=Jn(t.infoSyncTree_,s,i);wt(t.eventQueue_,s,r)}function qg(t){return t.nextWriteId_++}function zg(t,e,n){const s=mg(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=pe(i).withIndex(e._queryParams.getIndex());gg(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Jn(t.serverSyncTree_,e._path,r);else{const l=qn(t.serverSyncTree_,e);o=Fc(t.serverSyncTree_,e._path,r,l)}return wt(t.eventQueue_,e._path,o),Lc(t.serverSyncTree_,e,n,null,!0),r},i=>(eo(t,"get for query "+le(e)+" failed: "+i),Promise.reject(new Error(i))))}function Kg(t){eo(t,"onDisconnectEvents");const e=Yc(t),n=Ss();Xi(t.onDisconnect_,$(),(i,r)=>{const o=Tg(i,r,t.serverSyncTree_,e);vc(n,i,o)});let s=[];Xi(n,$(),(i,r)=>{s=s.concat(Jn(t.serverSyncTree_,i,r));const o=Xg(t,i);no(t,o)}),t.onDisconnect_=Ss(),wt(t.eventQueue_,$(),s)}function Gg(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Wg)}function eo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),me(n,...e)}function Qc(t,e,n){return Bc(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function to(t,e=t.transactionQueueTree_){if(e||ei(t,e),mn(e)){const n=Jc(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Yg(t,es(e),n)}else jc(e)&&Zs(e,n=>{to(t,n)})}function Yg(t,e,n){const s=n.map(c=>c.currentWriteId),i=Qc(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=we(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{eo(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Xt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ei(t,Jr(t.transactionQueueTree_,e)),to(t,t.transactionQueueTree_),wt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Qn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Oe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}no(t,e)}},o)}function no(t,e){const n=Xc(t,e),s=es(n),i=Jc(t,n);return Qg(t,i,s),s}function Qg(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=we(n,a.path);let u=!1,h;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Xt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Hg)u=!0,h="maxretry",i=i.concat(Xt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Qc(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){Kc("transaction failed: Data returned ",g,a.path);let w=pe(g);typeof g=="object"&&g!=null&&at(g,".priority")||(w=w.updatePriority(d.getPriority()));const x=a.currentWriteId,M=Yc(t),de=Sg(w,d,M);a.currentOutputSnapshotRaw=w,a.currentOutputSnapshotResolved=de,a.currentWriteId=qg(t),o.splice(o.indexOf(x),1),i=i.concat(hg(t.serverSyncTree_,a.path,de,a.currentWriteId,a.applyLocally)),i=i.concat(Xt(t.serverSyncTree_,x,!0))}else u=!0,h="nodata",i=i.concat(Xt(t.serverSyncTree_,a.currentWriteId,!0))}wt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}ei(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Qn(s[l]);to(t,t.transactionQueueTree_)}function Xc(t,e){let n,s=t.transactionQueueTree_;for(n=B(e);n!==null&&mn(s)===void 0;)s=Jr(s,n),e=Y(e),n=B(e);return s}function Jc(t,e){const n=[];return Zc(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Zc(t,e,n){const s=mn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Zs(e,i=>{Zc(t,i,n)})}function ei(t,e){const n=mn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,$c(e,n.length>0?n:void 0)}Zs(e,s=>{ei(t,s)})}function Xg(t,e){const n=es(Xc(t,e)),s=Jr(t.transactionQueueTree_,e);return xg(s,i=>{Ti(t,i)}),Ti(t,s),Vc(s,i=>{Ti(t,i)}),n}function Ti(t,e){const n=mn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Xt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?$c(e,void 0):n.length=r+1,wt(t.eventQueue_,es(e),i);for(let o=0;o<s.length;o++)Qn(s[o])}}/**
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
 */function Jg(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Zg(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Oe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Nl=function(t,e){const n=em(t),s=n.namespace;n.domain==="firebase.com"&&Wt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Wt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||c_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new E_(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new z(n.pathString)}},em=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Jg(t.substring(u,h)));const d=Zg(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),n=e.substring(w+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class tm{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+le(this.snapshot.exportVal())}}class nm{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class sm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class so{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return F(this._path)?null:cc(this._path)}get ref(){return new ct(this._repo,this._path)}get _queryIdentifier(){const e=fl(this._queryParams),n=Pr(e);return n==="{}"?"default":n}get _queryObject(){return fl(this._queryParams)}isEqual(e){if(e=Ks(e),!(e instanceof so))return!1;const n=this._repo===e._repo,s=fc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+K_(this._path)}}class ct extends so{constructor(e,n){super(e,n,new Br,!1)}get parent(){const e=hc(this._path);return e===null?null:new ct(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class zn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new z(e),s=Ms(this.ref,e);return new zn(this._node.getChild(n),s,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new zn(i,Ms(this.ref,s),ie)))}hasChild(e){const n=new z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function im(t,e){return t=Ks(t),t._checkNotDeleted("ref"),e!==void 0?Ms(t._root,e):t._root}function Ms(t,e){return t=Ks(t),B(t._path)===null?Dg("child","path",e,!1):Gc("child","path",e,!1),new ct(t._repo,ae(t._path,e))}function rm(t){t=Ks(t);const e=new sm(()=>{}),n=new io(e);return zg(t._repo,t,n).then(s=>new zn(s,new ct(t._repo,t._path),t._queryParams.getIndex()))}class io{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new tm("value",this,new zn(e.snapshotNode,new ct(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new nm(this,e,n):null}matches(e){return e instanceof io?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}sg(ct);ag(ct);/**
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
 */const om="FIREBASE_DATABASE_EMULATOR_HOST",sr={};let lm=!1;function am(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Wt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),me("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Nl(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[om]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Nl(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Gi(Gi.OWNER):new v_(t.name,t.options,e);Mg("Invalid Firebase Database URL",o),F(o.path)||Wt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=um(l,t,u,new C_(t.name,n));return new hm(h,t)}function cm(t,e){const n=sr[e];(!n||n[t.key]!==t)&&Wt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Gg(t),delete n[t.key]}function um(t,e,n,s){let i=sr[e.name];i||(i={},sr[e.name]=i);let r=i[t.toURLString()];return r&&Wt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ug(t,lm,n,s),i[t.toURLString()]=r,r}class hm{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||($g(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ct(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(cm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wt("Cannot call "+e+" on a deleted database.")}}function fm(t=zd(),e){return Ud(t,"database").getImmediate({identifier:e})}/**
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
 */function dm(t){i_(Vd),Es(new Fn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return am(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),nn(Yo,Qo,t),nn(Yo,Qo,"esm2017")}rt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};rt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};dm();let ke=Ws({menu_visible:!0,words1:!1,words2:!1});const ti=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},eu=t=>(br("data-v-4ff6dfdf"),t=t(),wr(),t),_m=eu(()=>be("div",{class:"menu-item"}," words 1001-1500 ",-1)),pm=eu(()=>be("div",{class:"menu-item"}," words 1501-2000 ",-1)),gm={__name:"Menu",setup(t){return(e,n)=>(oe(),ce(_e,null,[be("div",{class:"menu-item",onClick:n[0]||(n[0]=()=>{We(ke).words1=!0,We(ke).words2=!1,We(ke).menu_visible=!1})}," words 0-500 "),be("div",{class:"menu-item",onClick:n[1]||(n[1]=()=>{We(ke).words2=!0,We(ke).words1=!1,We(ke).menu_visible=!1})}," words 501-1000 "),_m,pm],64))}},mm=ti(gm,[["__scopeId","data-v-4ff6dfdf"]]);const ym={class:"word"},Cm={class:"kanji"},vm={key:0},Em={class:"kana"},bm={key:0},wm={class:"meaning"},Im={__name:"Word",setup(t){let e=[];for(let n=0;n<500;n++)e[n]=ir[n];return console.log(ir),(n,s)=>(oe(!0),ce(_e,null,vn(We(e),i=>(oe(),ce("div",ym,[be("div",Cm,[(oe(!0),ce(_e,null,vn(i.kanji,(r,o)=>(oe(),ce("div",null,[o===0?(oe(),ce("span",vm,oi(r.text),1)):Nn("",!0)]))),256))]),be("div",Em,[(oe(!0),ce(_e,null,vn(i.kana,(r,o)=>(oe(),ce("div",null,[o===0?(oe(),ce("span",bm,oi(r.text),1)):Nn("",!0)]))),256))]),be("div",wm,[(oe(!0),ce(_e,null,vn(i.sense,r=>(oe(),ce("div",null,[(oe(!0),ce(_e,null,vn(r.gloss,o=>(oe(),ce("div",null,[be("span",null,oi(o.text),1)]))),256))]))),256))])]))),256))}},xl=ti(Im,[["__scopeId","data-v-ba39f9f3"]]);const tu=t=>(br("data-v-53e27984"),t=t(),wr(),t),Tm={class:"tabs"},Sm=tu(()=>be("span",null,"lists",-1)),Nm=tu(()=>be("span",null,"settings",-1)),xm={__name:"Tabs",setup(t){function e(){ke.menu_visible=!0,ke.words1=!1,ke.words2=!1}return(n,s)=>(oe(),ce("div",Tm,[be("span",{onClick:e},"home"),Sm,Nm]))}},Rm=ti(xm,[["__scopeId","data-v-53e27984"]]);const Am=t=>(br("data-v-84b516ae"),t=t(),wr(),t),Pm=Am(()=>be("div",{class:"header"},"Japanese Jisho",-1)),Om={class:"grid"},Dm={key:0},Mm={key:1},km={key:2},Lm={__name:"App",setup(t){return(e,n)=>(oe(),ce(_e,null,[Pm,be("div",Om,[We(ke).menu_visible?(oe(),ce("div",Dm,[Pe(mm)])):Nn("",!0),We(ke).words1?(oe(),ce("div",Mm,[Pe(xl)])):Nn("",!0),We(ke).words2?(oe(),ce("div",km,[Pe(xl)])):Nn("",!0)]),Pe(Rm)],64))}},Fm=ti(Lm,[["__scopeId","data-v-84b516ae"]]),Bm={apiKey:"AIzaSyC_nmckRuqsvaOyYwu-RwP82q8f5vFpqLE",authDomain:"japanesejisho.firebaseapp.com",databaseURL:"https://japanesejisho-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"japanesejisho",storageBucket:"japanesejisho.appspot.com",messagingSenderId:"255107822451",appId:"1:255107822451:web:5f719e8be86c97d0478b06"};qd(Bm);let ir;const Wm=im(fm());rm(Ms(Wm,"words")).then(t=>{t.exists()?(ir=t.val(),console.log(t.val())):console.log("No data available")}).catch(t=>{console.error(t)});Af(Fm).mount("#app");
