(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function mr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const wu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Iu=mr(wu);function Kl(t){return!!t||t===""}function gr(t){if(O(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ce(s)?Nu(s):gr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ce(t))return t;if(oe(t))return t}}const Tu=/;(?![^(]*\))/g,Su=/:(.+)/;function Nu(t){const e={};return t.split(Tu).forEach(n=>{if(n){const s=n.split(Su);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function yr(t){let e="";if(Ce(t))e=t;else if(O(t))for(let n=0;n<t.length;n++){const s=yr(t[n]);s&&(e+=s+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Vt=t=>Ce(t)?t:t==null?"":O(t)||oe(t)&&(t.toString===Ql||!L(t.toString))?JSON.stringify(t,ql,2):String(t),ql=(t,e)=>e&&e.__v_isRef?ql(t,e.value):pn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Gl(e)?{[`Set(${e.size})`]:[...e.values()]}:oe(e)&&!O(e)&&!Xl(e)?String(e):e,Q={},dn=[],Qe=()=>{},xu=()=>!1,ku=/^on[^a-z]/,Gs=t=>ku.test(t),vr=t=>t.startsWith("onUpdate:"),Te=Object.assign,Cr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ru=Object.prototype.hasOwnProperty,H=(t,e)=>Ru.call(t,e),O=Array.isArray,pn=t=>Ys(t)==="[object Map]",Gl=t=>Ys(t)==="[object Set]",L=t=>typeof t=="function",Ce=t=>typeof t=="string",Er=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",Yl=t=>oe(t)&&L(t.then)&&L(t.catch),Ql=Object.prototype.toString,Ys=t=>Ql.call(t),Au=t=>Ys(t).slice(8,-1),Xl=t=>Ys(t)==="[object Object]",br=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Es=mr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Pu=/-(\w)/g,Cn=Qs(t=>t.replace(Pu,(e,n)=>n?n.toUpperCase():"")),Ou=/\B([A-Z])/g,en=Qs(t=>t.replace(Ou,"-$1").toLowerCase()),Jl=Qs(t=>t.charAt(0).toUpperCase()+t.slice(1)),gi=Qs(t=>t?`on${Jl(t)}`:""),Ss=(t,e)=>!Object.is(t,e),bs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ns=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Eo;const Du=()=>Eo||(Eo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let tt;class Mu{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&tt&&(this.parent=tt,this.index=(tt.scopes||(tt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=tt;try{return tt=this,e()}finally{tt=n}}}on(){tt=this}off(){tt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Lu(t,e=tt){e&&e.active&&e.effects.push(t)}const wr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Zl=t=>(t.w&St)>0,ea=t=>(t.n&St)>0,Fu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=St},ju=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Zl(i)&&!ea(i)?i.delete(t):e[n++]=i,i.w&=~St,i.n&=~St}e.length=n}},Li=new WeakMap;let jn=0,St=1;const Fi=30;let Ve;const zt=Symbol(""),ji=Symbol("");class Ir{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Lu(this,s)}run(){if(!this.active)return this.fn();let e=Ve,n=Et;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ve,Ve=this,Et=!0,St=1<<++jn,jn<=Fi?Fu(this):bo(this),this.fn()}finally{jn<=Fi&&ju(this),St=1<<--jn,Ve=this.parent,Et=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ve===this?this.deferStop=!0:this.active&&(bo(this),this.onStop&&this.onStop(),this.active=!1)}}function bo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Et=!0;const ta=[];function Sn(){ta.push(Et),Et=!1}function Nn(){const t=ta.pop();Et=t===void 0?!0:t}function je(t,e,n){if(Et&&Ve){let s=Li.get(t);s||Li.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=wr()),na(i)}}function na(t,e){let n=!1;jn<=Fi?ea(t)||(t.n|=St,n=!Zl(t)):n=!t.has(Ve),n&&(t.add(Ve),Ve.deps.push(t))}function ut(t,e,n,s,i,r){const o=Li.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&O(t))o.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":O(t)?br(n)&&l.push(o.get("length")):(l.push(o.get(zt)),pn(t)&&l.push(o.get(ji)));break;case"delete":O(t)||(l.push(o.get(zt)),pn(t)&&l.push(o.get(ji)));break;case"set":pn(t)&&l.push(o.get(zt));break}if(l.length===1)l[0]&&Bi(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Bi(wr(a))}}function Bi(t,e){const n=O(t)?t:[...t];for(const s of n)s.computed&&wo(s);for(const s of n)s.computed||wo(s)}function wo(t,e){(t!==Ve||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Bu=mr("__proto__,__v_isRef,__isVue"),sa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Er)),Wu=Tr(),Hu=Tr(!1,!0),Uu=Tr(!0),Io=$u();function $u(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=K(this);for(let r=0,o=this.length;r<o;r++)je(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(K)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Sn();const s=K(this)[e].apply(this,n);return Nn(),s}}),t}function Tr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?rh:aa:e?la:oa).get(s))return s;const o=O(s);if(!t&&o&&H(Io,i))return Reflect.get(Io,i,r);const l=Reflect.get(s,i,r);return(Er(i)?sa.has(i):Bu(i))||(t||je(s,"get",i),e)?l:Re(l)?o&&br(i)?l:l.value:oe(l)?t?ca(l):ht(l):l}}const Vu=ia(),zu=ia(!0);function ia(t=!1){return function(n,s,i,r){let o=n[s];if(Vn(o)&&Re(o)&&!Re(i))return!1;if(!t&&(!Wi(i)&&!Vn(i)&&(o=K(o),i=K(i)),!O(n)&&Re(o)&&!Re(i)))return o.value=i,!0;const l=O(n)&&br(s)?Number(s)<n.length:H(n,s),a=Reflect.set(n,s,i,r);return n===K(r)&&(l?Ss(i,o)&&ut(n,"set",s,i):ut(n,"add",s,i)),a}}function Ku(t,e){const n=H(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ut(t,"delete",e,void 0),s}function qu(t,e){const n=Reflect.has(t,e);return(!Er(e)||!sa.has(e))&&je(t,"has",e),n}function Gu(t){return je(t,"iterate",O(t)?"length":zt),Reflect.ownKeys(t)}const ra={get:Wu,set:Vu,deleteProperty:Ku,has:qu,ownKeys:Gu},Yu={get:Uu,set(t,e){return!0},deleteProperty(t,e){return!0}},Qu=Te({},ra,{get:Hu,set:zu}),Sr=t=>t,Xs=t=>Reflect.getPrototypeOf(t);function ps(t,e,n=!1,s=!1){t=t.__v_raw;const i=K(t),r=K(e);n||(e!==r&&je(i,"get",e),je(i,"get",r));const{has:o}=Xs(i),l=s?Sr:n?Rr:kr;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function _s(t,e=!1){const n=this.__v_raw,s=K(n),i=K(t);return e||(t!==i&&je(s,"has",t),je(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ms(t,e=!1){return t=t.__v_raw,!e&&je(K(t),"iterate",zt),Reflect.get(t,"size",t)}function To(t){t=K(t);const e=K(this);return Xs(e).has.call(e,t)||(e.add(t),ut(e,"add",t,t)),this}function So(t,e){e=K(e);const n=K(this),{has:s,get:i}=Xs(n);let r=s.call(n,t);r||(t=K(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Ss(e,o)&&ut(n,"set",t,e):ut(n,"add",t,e),this}function No(t){const e=K(this),{has:n,get:s}=Xs(e);let i=n.call(e,t);i||(t=K(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ut(e,"delete",t,void 0),r}function xo(){const t=K(this),e=t.size!==0,n=t.clear();return e&&ut(t,"clear",void 0,void 0),n}function gs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=K(o),a=e?Sr:t?Rr:kr;return!t&&je(l,"iterate",zt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function ys(t,e,n){return function(...s){const i=this.__v_raw,r=K(i),o=pn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?Sr:e?Rr:kr;return!e&&je(r,"iterate",a?ji:zt),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function gt(t){return function(...e){return t==="delete"?!1:this}}function Xu(){const t={get(r){return ps(this,r)},get size(){return ms(this)},has:_s,add:To,set:So,delete:No,clear:xo,forEach:gs(!1,!1)},e={get(r){return ps(this,r,!1,!0)},get size(){return ms(this)},has:_s,add:To,set:So,delete:No,clear:xo,forEach:gs(!1,!0)},n={get(r){return ps(this,r,!0)},get size(){return ms(this,!0)},has(r){return _s.call(this,r,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:gs(!0,!1)},s={get(r){return ps(this,r,!0,!0)},get size(){return ms(this,!0)},has(r){return _s.call(this,r,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:gs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ys(r,!1,!1),n[r]=ys(r,!0,!1),e[r]=ys(r,!1,!0),s[r]=ys(r,!0,!0)}),[t,n,e,s]}const[Ju,Zu,eh,th]=Xu();function Nr(t,e){const n=e?t?th:eh:t?Zu:Ju;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(H(n,i)&&i in s?n:s,i,r)}const nh={get:Nr(!1,!1)},sh={get:Nr(!1,!0)},ih={get:Nr(!0,!1)},oa=new WeakMap,la=new WeakMap,aa=new WeakMap,rh=new WeakMap;function oh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lh(t){return t.__v_skip||!Object.isExtensible(t)?0:oh(Au(t))}function ht(t){return Vn(t)?t:xr(t,!1,ra,nh,oa)}function ah(t){return xr(t,!1,Qu,sh,la)}function ca(t){return xr(t,!0,Yu,ih,aa)}function xr(t,e,n,s,i){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=lh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function _n(t){return Vn(t)?_n(t.__v_raw):!!(t&&t.__v_isReactive)}function Vn(t){return!!(t&&t.__v_isReadonly)}function Wi(t){return!!(t&&t.__v_isShallow)}function ua(t){return _n(t)||Vn(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function ha(t){return Ns(t,"__v_skip",!0),t}const kr=t=>oe(t)?ht(t):t,Rr=t=>oe(t)?ca(t):t;function ch(t){Et&&Ve&&(t=K(t),na(t.dep||(t.dep=wr())))}function uh(t,e){t=K(t),t.dep&&Bi(t.dep)}function Re(t){return!!(t&&t.__v_isRef===!0)}function he(t){return Re(t)?t.value:t}const hh={get:(t,e,n)=>he(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Re(i)&&!Re(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function fa(t){return _n(t)?t:new Proxy(t,hh)}var da;class fh{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[da]=!1,this._dirty=!0,this.effect=new Ir(e,()=>{this._dirty||(this._dirty=!0,uh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=K(this);return ch(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}da="__v_isReadonly";function dh(t,e,n=!1){let s,i;const r=L(t);return r?(s=t,i=Qe):(s=t.get,i=t.set),new fh(s,i,r||!i,n)}function bt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Js(r,e,n)}return i}function He(t,e,n,s){if(L(t)){const r=bt(t,e,n,s);return r&&Yl(r)&&r.catch(o=>{Js(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(He(t[r],e,n,s));return i}function Js(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){bt(a,null,10,[t,o,l]);return}}ph(t,n,i,s)}function ph(t,e,n,s=!0){console.error(t)}let ks=!1,Hi=!1;const xe=[];let st=0;const mn=[];let lt=null,Bt=0;const pa=Promise.resolve();let Ar=null;function _h(t){const e=Ar||pa;return t?e.then(this?t.bind(this):t):e}function mh(t){let e=st+1,n=xe.length;for(;e<n;){const s=e+n>>>1;zn(xe[s])<t?e=s+1:n=s}return e}function Pr(t){(!xe.length||!xe.includes(t,ks&&t.allowRecurse?st+1:st))&&(t.id==null?xe.push(t):xe.splice(mh(t.id),0,t),_a())}function _a(){!ks&&!Hi&&(Hi=!0,Ar=pa.then(ga))}function gh(t){const e=xe.indexOf(t);e>st&&xe.splice(e,1)}function yh(t){O(t)?mn.push(...t):(!lt||!lt.includes(t,t.allowRecurse?Bt+1:Bt))&&mn.push(t),_a()}function ko(t,e=st){for(;e<xe.length;e++){const n=xe[e];n&&n.pre&&(xe.splice(e,1),e--,n())}}function ma(t){if(mn.length){const e=[...new Set(mn)];if(mn.length=0,lt){lt.push(...e);return}for(lt=e,lt.sort((n,s)=>zn(n)-zn(s)),Bt=0;Bt<lt.length;Bt++)lt[Bt]();lt=null,Bt=0}}const zn=t=>t.id==null?1/0:t.id,vh=(t,e)=>{const n=zn(t)-zn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ga(t){Hi=!1,ks=!0,xe.sort(vh);const e=Qe;try{for(st=0;st<xe.length;st++){const n=xe[st];n&&n.active!==!1&&bt(n,null,14)}}finally{st=0,xe.length=0,ma(),ks=!1,Ar=null,(xe.length||mn.length)&&ga()}}function Ch(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Q;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Q;d&&(i=n.map(m=>m.trim())),h&&(i=n.map(xs))}let l,a=s[l=gi(e)]||s[l=gi(Cn(e))];!a&&r&&(a=s[l=gi(en(e))]),a&&He(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,He(c,t,6,i)}}function ya(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!L(t)){const a=c=>{const u=ya(c,e,!0);u&&(l=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(oe(t)&&s.set(t,null),null):(O(r)?r.forEach(a=>o[a]=null):Te(o,r),oe(t)&&s.set(t,o),o)}function Zs(t,e){return!t||!Gs(e)?!1:(e=e.slice(2).replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,en(e))||H(t,e))}let Ke=null,ei=null;function Rs(t){const e=Ke;return Ke=t,ei=t&&t.type.__scopeId||null,e}function Eh(t){ei=t}function bh(){ei=null}function va(t,e=Ke,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Bo(-1);const r=Rs(e),o=t(...i);return Rs(r),s._d&&Bo(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function yi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:m,ctx:C,inheritAttrs:S}=t;let x,M;const de=Rs(t);try{if(n.shapeFlag&4){const ne=i||s;x=nt(u.call(ne,ne,h,r,m,d,C)),M=a}else{const ne=e;x=nt(ne.length>1?ne(r,{attrs:a,slots:l,emit:c}):ne(r,null)),M=e.props?a:wh(a)}}catch(ne){Bn.length=0,Js(ne,t,1),x=_e(Xe)}let J=x;if(M&&S!==!1){const ne=Object.keys(M),{shapeFlag:Se}=J;ne.length&&Se&7&&(o&&ne.some(vr)&&(M=Ih(M,o)),J=Nt(J,M))}return n.dirs&&(J=Nt(J),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&(J.transition=n.transition),x=J,Rs(de),x}const wh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gs(n))&&((e||(e={}))[n]=t[n]);return e},Ih=(t,e)=>{const n={};for(const s in t)(!vr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Th(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Ro(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Zs(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Ro(s,o,c):!0:!!o;return!1}function Ro(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Zs(n,r))return!0}return!1}function Sh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Nh=t=>t.__isSuspense;function xh(t,e){e&&e.pendingBranch?O(t)?e.effects.push(...t):e.effects.push(t):yh(t)}function kh(t,e){if(Ie){let n=Ie.provides;const s=Ie.parent&&Ie.parent.provides;s===n&&(n=Ie.provides=Object.create(s)),n[t]=e}}function vi(t,e,n=!1){const s=Ie||Ke;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&L(e)?e.call(s.proxy):e}}const Ao={};function Ci(t,e,n){return Ca(t,e,n)}function Ca(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Q){const l=Ie;let a,c=!1,u=!1;if(Re(t)?(a=()=>t.value,c=Wi(t)):_n(t)?(a=()=>t,s=!0):O(t)?(u=!0,c=t.some(M=>_n(M)||Wi(M)),a=()=>t.map(M=>{if(Re(M))return M.value;if(_n(M))return Ut(M);if(L(M))return bt(M,l,2)})):L(t)?e?a=()=>bt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),He(t,l,3,[d])}:a=Qe,e&&s){const M=a;a=()=>Ut(M())}let h,d=M=>{h=x.onStop=()=>{bt(M,l,4)}};if(qn)return d=Qe,e?n&&He(e,l,3,[a(),u?[]:void 0,d]):a(),Qe;let m=u?[]:Ao;const C=()=>{if(!!x.active)if(e){const M=x.run();(s||c||(u?M.some((de,J)=>Ss(de,m[J])):Ss(M,m)))&&(h&&h(),He(e,l,3,[M,m===Ao?void 0:m,d]),m=M)}else x.run()};C.allowRecurse=!!e;let S;i==="sync"?S=C:i==="post"?S=()=>Pe(C,l&&l.suspense):(C.pre=!0,l&&(C.id=l.uid),S=()=>Pr(C));const x=new Ir(a,S);return e?n?C():m=x.run():i==="post"?Pe(x.run.bind(x),l&&l.suspense):x.run(),()=>{x.stop(),l&&l.scope&&Cr(l.scope.effects,x)}}function Rh(t,e,n){const s=this.proxy,i=Ce(t)?t.includes(".")?Ea(s,t):()=>s[t]:t.bind(s,s);let r;L(e)?r=e:(r=e.handler,n=e);const o=Ie;En(this);const l=Ca(i,r.bind(s),n);return o?En(o):Kt(),l}function Ea(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ut(t,e){if(!oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))Ut(t.value,e);else if(O(t))for(let n=0;n<t.length;n++)Ut(t[n],e);else if(Gl(t)||pn(t))t.forEach(n=>{Ut(n,e)});else if(Xl(t))for(const n in t)Ut(t[n],e);return t}function Ah(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Sa(()=>{t.isMounted=!0}),Na(()=>{t.isUnmounting=!0}),t}const We=[Function,Array],Ph={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:We,onEnter:We,onAfterEnter:We,onEnterCancelled:We,onBeforeLeave:We,onLeave:We,onAfterLeave:We,onLeaveCancelled:We,onBeforeAppear:We,onAppear:We,onAfterAppear:We,onAppearCancelled:We},setup(t,{slots:e}){const n=gf(),s=Ah();let i;return()=>{const r=e.default&&Ia(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const S of r)if(S.type!==Xe){o=S;break}}const l=K(t),{mode:a}=l;if(s.isLeaving)return Ei(o);const c=Po(o);if(!c)return Ei(o);const u=Ui(c,l,s,n);$i(c,u);const h=n.subTree,d=h&&Po(h);let m=!1;const{getTransitionKey:C}=c.type;if(C){const S=C();i===void 0?i=S:S!==i&&(i=S,m=!0)}if(d&&d.type!==Xe&&(!Wt(c,d)||m)){const S=Ui(d,l,s,n);if($i(d,S),a==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update()},Ei(o);a==="in-out"&&c.type!==Xe&&(S.delayLeave=(x,M,de)=>{const J=wa(s,d);J[String(d.key)]=d,x._leaveCb=()=>{M(),x._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=de})}return o}}},ba=Ph;function wa(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ui(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:m,onLeaveCancelled:C,onBeforeAppear:S,onAppear:x,onAfterAppear:M,onAppearCancelled:de}=e,J=String(t.key),ne=wa(n,t),Se=(B,Z)=>{B&&He(B,s,9,Z)},_t=(B,Z)=>{const le=Z[1];Se(B,Z),O(B)?B.every(Ee=>Ee.length<=1)&&le():B.length<=1&&le()},it={mode:r,persisted:o,beforeEnter(B){let Z=l;if(!n.isMounted)if(i)Z=S||l;else return;B._leaveCb&&B._leaveCb(!0);const le=ne[J];le&&Wt(t,le)&&le.el._leaveCb&&le.el._leaveCb(),Se(Z,[B])},enter(B){let Z=a,le=c,Ee=u;if(!n.isMounted)if(i)Z=x||a,le=M||c,Ee=de||u;else return;let k=!1;const ae=B._enterCb=Be=>{k||(k=!0,Be?Se(Ee,[B]):Se(le,[B]),it.delayedLeave&&it.delayedLeave(),B._enterCb=void 0)};Z?_t(Z,[B,ae]):ae()},leave(B,Z){const le=String(t.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return Z();Se(h,[B]);let Ee=!1;const k=B._leaveCb=ae=>{Ee||(Ee=!0,Z(),ae?Se(C,[B]):Se(m,[B]),B._leaveCb=void 0,ne[le]===t&&delete ne[le])};ne[le]=t,d?_t(d,[B,k]):k()},clone(B){return Ui(B,e,n,s)}};return it}function Ei(t){if(ti(t))return t=Nt(t),t.children=null,t}function Po(t){return ti(t)?t.children?t.children[0]:void 0:t}function $i(t,e){t.shapeFlag&6&&t.component?$i(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ia(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===pe?(o.patchFlag&128&&i++,s=s.concat(Ia(o.children,e,l))):(e||o.type!==Xe)&&s.push(l!=null?Nt(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const ws=t=>!!t.type.__asyncLoader,ti=t=>t.type.__isKeepAlive;function Oh(t,e){Ta(t,"a",e)}function Dh(t,e){Ta(t,"da",e)}function Ta(t,e,n=Ie){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ni(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ti(i.parent.vnode)&&Mh(s,e,n,i),i=i.parent}}function Mh(t,e,n,s){const i=ni(e,t,s,!0);xa(()=>{Cr(s[e],i)},n)}function ni(t,e,n=Ie,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Sn(),En(n);const l=He(e,n,t,o);return Kt(),Nn(),l});return s?i.unshift(r):i.push(r),r}}const ft=t=>(e,n=Ie)=>(!qn||t==="sp")&&ni(t,e,n),Lh=ft("bm"),Sa=ft("m"),Fh=ft("bu"),jh=ft("u"),Na=ft("bum"),xa=ft("um"),Bh=ft("sp"),Wh=ft("rtg"),Hh=ft("rtc");function Uh(t,e=Ie){ni("ec",t,e)}function $h(t,e){const n=Ke;if(n===null)return t;const s=ii(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=Q]=e[r];L(o)&&(o={mounted:o,updated:o}),o.deep&&Ut(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c})}return t}function Pt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Sn(),He(a,n,8,[t.el,l,t,e]),Nn())}}const Vh=Symbol();function cn(t,e,n,s){let i;const r=n&&n[s];if(O(t)||Ce(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(oe(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Vi=t=>t?Ha(t)?ii(t)||t.proxy:Vi(t.parent):null,As=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vi(t.parent),$root:t=>Vi(t.root),$emit:t=>t.emit,$options:t=>Ra(t),$forceUpdate:t=>t.f||(t.f=()=>Pr(t.update)),$nextTick:t=>t.n||(t.n=_h.bind(t.proxy)),$watch:t=>Rh.bind(t)}),zh={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==Q&&H(s,e))return o[e]=1,s[e];if(i!==Q&&H(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&H(c,e))return o[e]=3,r[e];if(n!==Q&&H(n,e))return o[e]=4,n[e];zi&&(o[e]=0)}}const u=As[e];let h,d;if(u)return e==="$attrs"&&je(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==Q&&H(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,H(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==Q&&H(i,e)?(i[e]=n,!0):s!==Q&&H(s,e)?(s[e]=n,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==Q&&H(t,o)||e!==Q&&H(e,o)||(l=r[0])&&H(l,o)||H(s,o)||H(As,o)||H(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:H(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let zi=!0;function Kh(t){const e=Ra(t),n=t.proxy,s=t.ctx;zi=!1,e.beforeCreate&&Oo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:C,activated:S,deactivated:x,beforeDestroy:M,beforeUnmount:de,destroyed:J,unmounted:ne,render:Se,renderTracked:_t,renderTriggered:it,errorCaptured:B,serverPrefetch:Z,expose:le,inheritAttrs:Ee,components:k,directives:ae,filters:Be}=e;if(c&&qh(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ce in o){const se=o[ce];L(se)&&(s[ce]=se.bind(n))}if(i){const ce=i.call(n,n);oe(ce)&&(t.data=ht(ce))}if(zi=!0,r)for(const ce in r){const se=r[ce],rt=L(se)?se.bind(n,n):L(se.get)?se.get.bind(n,n):Qe,pi=!L(se)&&L(se.set)?se.set.bind(n):Qe,An=wf({get:rt,set:pi});Object.defineProperty(s,ce,{enumerable:!0,configurable:!0,get:()=>An.value,set:rn=>An.value=rn})}if(l)for(const ce in l)ka(l[ce],s,n,ce);if(a){const ce=L(a)?a.call(n):a;Reflect.ownKeys(ce).forEach(se=>{kh(se,ce[se])})}u&&Oo(u,t,"c");function be(ce,se){O(se)?se.forEach(rt=>ce(rt.bind(n))):se&&ce(se.bind(n))}if(be(Lh,h),be(Sa,d),be(Fh,m),be(jh,C),be(Oh,S),be(Dh,x),be(Uh,B),be(Hh,_t),be(Wh,it),be(Na,de),be(xa,ne),be(Bh,Z),O(le))if(le.length){const ce=t.exposed||(t.exposed={});le.forEach(se=>{Object.defineProperty(ce,se,{get:()=>n[se],set:rt=>n[se]=rt})})}else t.exposed||(t.exposed={});Se&&t.render===Qe&&(t.render=Se),Ee!=null&&(t.inheritAttrs=Ee),k&&(t.components=k),ae&&(t.directives=ae)}function qh(t,e,n=Qe,s=!1){O(t)&&(t=Ki(t));for(const i in t){const r=t[i];let o;oe(r)?"default"in r?o=vi(r.from||i,r.default,!0):o=vi(r.from||i):o=vi(r),Re(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Oo(t,e,n){He(O(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ka(t,e,n,s){const i=s.includes(".")?Ea(n,s):()=>n[s];if(Ce(t)){const r=e[t];L(r)&&Ci(i,r)}else if(L(t))Ci(i,t.bind(n));else if(oe(t))if(O(t))t.forEach(r=>ka(r,e,n,s));else{const r=L(t.handler)?t.handler.bind(n):e[t.handler];L(r)&&Ci(i,r,t)}}function Ra(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Ps(a,c,o,!0)),Ps(a,e,o)),oe(e)&&r.set(e,a),a}function Ps(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ps(t,r,n,!0),i&&i.forEach(o=>Ps(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Gh[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Gh={data:Do,props:Lt,emits:Lt,methods:Lt,computed:Lt,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:Lt,directives:Lt,watch:Qh,provide:Do,inject:Yh};function Do(t,e){return e?t?function(){return Te(L(t)?t.call(this,this):t,L(e)?e.call(this,this):e)}:e:t}function Yh(t,e){return Lt(Ki(t),Ki(e))}function Ki(t){if(O(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ke(t,e){return t?[...new Set([].concat(t,e))]:e}function Lt(t,e){return t?Te(Te(Object.create(null),t),e):e}function Qh(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=ke(t[s],e[s]);return n}function Xh(t,e,n,s=!1){const i={},r={};Ns(r,si,1),t.propsDefaults=Object.create(null),Aa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:ah(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Jh(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=K(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Zs(t.emitsOptions,d))continue;const m=e[d];if(a)if(H(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const C=Cn(d);i[C]=qi(a,l,C,m,t,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{Aa(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!H(e,h)&&((u=en(h))===h||!H(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=qi(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!H(e,h)&&!0)&&(delete r[h],c=!0)}c&&ut(t,"set","$attrs")}function Aa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Es(a))continue;const c=e[a];let u;i&&H(i,u=Cn(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Zs(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=K(n),c=l||Q;for(let u=0;u<r.length;u++){const h=r[u];n[h]=qi(i,a,h,c[h],t,!H(c,h))}}return o}function qi(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=H(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&L(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(En(i),s=c[n]=a.call(null,e),Kt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===en(n))&&(s=!0))}return s}function Pa(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!L(t)){const u=h=>{a=!0;const[d,m]=Pa(h,e,!0);Te(o,d),m&&l.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return oe(t)&&s.set(t,dn),dn;if(O(r))for(let u=0;u<r.length;u++){const h=Cn(r[u]);Mo(h)&&(o[h]=Q)}else if(r)for(const u in r){const h=Cn(u);if(Mo(h)){const d=r[u],m=o[h]=O(d)||L(d)?{type:d}:d;if(m){const C=jo(Boolean,m.type),S=jo(String,m.type);m[0]=C>-1,m[1]=S<0||C<S,(C>-1||H(m,"default"))&&l.push(h)}}}const c=[o,l];return oe(t)&&s.set(t,c),c}function Mo(t){return t[0]!=="$"}function Lo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Fo(t,e){return Lo(t)===Lo(e)}function jo(t,e){return O(e)?e.findIndex(n=>Fo(n,t)):L(e)&&Fo(e,t)?0:-1}const Oa=t=>t[0]==="_"||t==="$stable",Or=t=>O(t)?t.map(nt):[nt(t)],Zh=(t,e,n)=>{if(e._n)return e;const s=va((...i)=>Or(e(...i)),n);return s._c=!1,s},Da=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Oa(i))continue;const r=t[i];if(L(r))e[i]=Zh(i,r,s);else if(r!=null){const o=Or(r);e[i]=()=>o}}},Ma=(t,e)=>{const n=Or(e);t.slots.default=()=>n},ef=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),Ns(e,"_",n)):Da(e,t.slots={})}else t.slots={},e&&Ma(t,e);Ns(t.slots,si,1)},tf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Q;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Te(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Da(e,i)),o=e}else e&&(Ma(t,e),o={default:1});if(r)for(const l in i)!Oa(l)&&!(l in o)&&delete i[l]};function La(){return{app:null,config:{isNativeTag:xu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nf=0;function sf(t,e){return function(s,i=null){L(s)||(s=Object.assign({},s)),i!=null&&!oe(i)&&(i=null);const r=La(),o=new Set;let l=!1;const a=r.app={_uid:nf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Tf,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(a,...u)):L(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=_e(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,ii(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function Gi(t,e,n,s,i=!1){if(O(t)){t.forEach((d,m)=>Gi(d,e&&(O(e)?e[m]:e),n,s,i));return}if(ws(s)&&!i)return;const r=s.shapeFlag&4?ii(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===Q?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(Ce(c)?(u[c]=null,H(h,c)&&(h[c]=null)):Re(c)&&(c.value=null)),L(a))bt(a,l,12,[o,u]);else{const d=Ce(a),m=Re(a);if(d||m){const C=()=>{if(t.f){const S=d?u[a]:a.value;i?O(S)&&Cr(S,r):O(S)?S.includes(r)||S.push(r):d?(u[a]=[r],H(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,H(h,a)&&(h[a]=o)):m&&(a.value=o,t.k&&(u[t.k]=o))};o?(C.id=-1,Pe(C,n)):C()}}}const Pe=xh;function rf(t){return of(t)}function of(t,e){const n=Du();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=Qe,cloneNode:C,insertStaticContent:S}=t,x=(f,p,_,y=null,g=null,w=null,T=!1,E=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!Wt(f,p)&&(y=ds(f),mt(f,g,w,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:v,ref:R,shapeFlag:N}=p;switch(v){case Dr:M(f,p,_,y);break;case Xe:de(f,p,_,y);break;case bi:f==null&&J(p,_,y,T);break;case pe:ae(f,p,_,y,g,w,T,E,I);break;default:N&1?_t(f,p,_,y,g,w,T,E,I):N&6?Be(f,p,_,y,g,w,T,E,I):(N&64||N&128)&&v.process(f,p,_,y,g,w,T,E,I,on)}R!=null&&g&&Gi(R,f&&f.ref,w,p||f,!p)},M=(f,p,_,y)=>{if(f==null)s(p.el=l(p.children),_,y);else{const g=p.el=f.el;p.children!==f.children&&c(g,p.children)}},de=(f,p,_,y)=>{f==null?s(p.el=a(p.children||""),_,y):p.el=f.el},J=(f,p,_,y)=>{[f.el,f.anchor]=S(f.children,p,_,y,f.el,f.anchor)},ne=({el:f,anchor:p},_,y)=>{let g;for(;f&&f!==p;)g=d(f),s(f,_,y),f=g;s(p,_,y)},Se=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},_t=(f,p,_,y,g,w,T,E,I)=>{T=T||p.type==="svg",f==null?it(p,_,y,g,w,T,E,I):le(f,p,g,w,T,E,I)},it=(f,p,_,y,g,w,T,E)=>{let I,v;const{type:R,props:N,shapeFlag:A,transition:D,patchFlag:U,dirs:G}=f;if(f.el&&C!==void 0&&U===-1)I=f.el=C(f.el);else{if(I=f.el=o(f.type,w,N&&N.is,N),A&8?u(I,f.children):A&16&&Z(f.children,I,null,y,g,w&&R!=="foreignObject",T,E),G&&Pt(f,null,y,"created"),N){for(const ie in N)ie!=="value"&&!Es(ie)&&r(I,ie,null,N[ie],w,f.children,y,g,ot);"value"in N&&r(I,"value",null,N.value),(v=N.onVnodeBeforeMount)&&et(v,y,f)}B(I,f,f.scopeId,T,y)}G&&Pt(f,null,y,"beforeMount");const Y=(!g||g&&!g.pendingBranch)&&D&&!D.persisted;Y&&D.beforeEnter(I),s(I,p,_),((v=N&&N.onVnodeMounted)||Y||G)&&Pe(()=>{v&&et(v,y,f),Y&&D.enter(I),G&&Pt(f,null,y,"mounted")},g)},B=(f,p,_,y,g)=>{if(_&&m(f,_),y)for(let w=0;w<y.length;w++)m(f,y[w]);if(g){let w=g.subTree;if(p===w){const T=g.vnode;B(f,T,T.scopeId,T.slotScopeIds,g.parent)}}},Z=(f,p,_,y,g,w,T,E,I=0)=>{for(let v=I;v<f.length;v++){const R=f[v]=E?Ct(f[v]):nt(f[v]);x(null,R,p,_,y,g,w,T,E)}},le=(f,p,_,y,g,w,T)=>{const E=p.el=f.el;let{patchFlag:I,dynamicChildren:v,dirs:R}=p;I|=f.patchFlag&16;const N=f.props||Q,A=p.props||Q;let D;_&&Ot(_,!1),(D=A.onVnodeBeforeUpdate)&&et(D,_,p,f),R&&Pt(p,f,_,"beforeUpdate"),_&&Ot(_,!0);const U=g&&p.type!=="foreignObject";if(v?Ee(f.dynamicChildren,v,E,_,y,U,w):T||rt(f,p,E,null,_,y,U,w,!1),I>0){if(I&16)k(E,p,N,A,_,y,g);else if(I&2&&N.class!==A.class&&r(E,"class",null,A.class,g),I&4&&r(E,"style",N.style,A.style,g),I&8){const G=p.dynamicProps;for(let Y=0;Y<G.length;Y++){const ie=G[Y],Ue=N[ie],ln=A[ie];(ln!==Ue||ie==="value")&&r(E,ie,Ue,ln,g,f.children,_,y,ot)}}I&1&&f.children!==p.children&&u(E,p.children)}else!T&&v==null&&k(E,p,N,A,_,y,g);((D=A.onVnodeUpdated)||R)&&Pe(()=>{D&&et(D,_,p,f),R&&Pt(p,f,_,"updated")},y)},Ee=(f,p,_,y,g,w,T)=>{for(let E=0;E<p.length;E++){const I=f[E],v=p[E],R=I.el&&(I.type===pe||!Wt(I,v)||I.shapeFlag&70)?h(I.el):_;x(I,v,R,null,y,g,w,T,!0)}},k=(f,p,_,y,g,w,T)=>{if(_!==y){for(const E in y){if(Es(E))continue;const I=y[E],v=_[E];I!==v&&E!=="value"&&r(f,E,v,I,T,p.children,g,w,ot)}if(_!==Q)for(const E in _)!Es(E)&&!(E in y)&&r(f,E,_[E],null,T,p.children,g,w,ot);"value"in y&&r(f,"value",_.value,y.value)}},ae=(f,p,_,y,g,w,T,E,I)=>{const v=p.el=f?f.el:l(""),R=p.anchor=f?f.anchor:l("");let{patchFlag:N,dynamicChildren:A,slotScopeIds:D}=p;D&&(E=E?E.concat(D):D),f==null?(s(v,_,y),s(R,_,y),Z(p.children,_,R,g,w,T,E,I)):N>0&&N&64&&A&&f.dynamicChildren?(Ee(f.dynamicChildren,A,_,g,w,T,E),(p.key!=null||g&&p===g.subTree)&&Fa(f,p,!0)):rt(f,p,_,R,g,w,T,E,I)},Be=(f,p,_,y,g,w,T,E,I)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?g.ctx.activate(p,_,y,T,I):sn(p,_,y,g,w,T,I):be(f,p,I)},sn=(f,p,_,y,g,w,T)=>{const E=f.component=mf(f,y,g);if(ti(f)&&(E.ctx.renderer=on),yf(E),E.asyncDep){if(g&&g.registerDep(E,ce),!f.el){const I=E.subTree=_e(Xe);de(null,I,p,_)}return}ce(E,f,p,_,g,w,T)},be=(f,p,_)=>{const y=p.component=f.component;if(Th(f,p,_))if(y.asyncDep&&!y.asyncResolved){se(y,p,_);return}else y.next=p,gh(y.update),y.update();else p.el=f.el,y.vnode=p},ce=(f,p,_,y,g,w,T)=>{const E=()=>{if(f.isMounted){let{next:R,bu:N,u:A,parent:D,vnode:U}=f,G=R,Y;Ot(f,!1),R?(R.el=U.el,se(f,R,T)):R=U,N&&bs(N),(Y=R.props&&R.props.onVnodeBeforeUpdate)&&et(Y,D,R,U),Ot(f,!0);const ie=yi(f),Ue=f.subTree;f.subTree=ie,x(Ue,ie,h(Ue.el),ds(Ue),f,g,w),R.el=ie.el,G===null&&Sh(f,ie.el),A&&Pe(A,g),(Y=R.props&&R.props.onVnodeUpdated)&&Pe(()=>et(Y,D,R,U),g)}else{let R;const{el:N,props:A}=p,{bm:D,m:U,parent:G}=f,Y=ws(p);if(Ot(f,!1),D&&bs(D),!Y&&(R=A&&A.onVnodeBeforeMount)&&et(R,G,p),Ot(f,!0),N&&mi){const ie=()=>{f.subTree=yi(f),mi(N,f.subTree,f,g,null)};Y?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ie()):ie()}else{const ie=f.subTree=yi(f);x(null,ie,_,y,f,g,w),p.el=ie.el}if(U&&Pe(U,g),!Y&&(R=A&&A.onVnodeMounted)){const ie=p;Pe(()=>et(R,G,ie),g)}(p.shapeFlag&256||G&&ws(G.vnode)&&G.vnode.shapeFlag&256)&&f.a&&Pe(f.a,g),f.isMounted=!0,p=_=y=null}},I=f.effect=new Ir(E,()=>Pr(v),f.scope),v=f.update=()=>I.run();v.id=f.uid,Ot(f,!0),v()},se=(f,p,_)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Jh(f,p.props,y,_),tf(f,p.children,_),Sn(),ko(),Nn()},rt=(f,p,_,y,g,w,T,E,I=!1)=>{const v=f&&f.children,R=f?f.shapeFlag:0,N=p.children,{patchFlag:A,shapeFlag:D}=p;if(A>0){if(A&128){An(v,N,_,y,g,w,T,E,I);return}else if(A&256){pi(v,N,_,y,g,w,T,E,I);return}}D&8?(R&16&&ot(v,g,w),N!==v&&u(_,N)):R&16?D&16?An(v,N,_,y,g,w,T,E,I):ot(v,g,w,!0):(R&8&&u(_,""),D&16&&Z(N,_,y,g,w,T,E,I))},pi=(f,p,_,y,g,w,T,E,I)=>{f=f||dn,p=p||dn;const v=f.length,R=p.length,N=Math.min(v,R);let A;for(A=0;A<N;A++){const D=p[A]=I?Ct(p[A]):nt(p[A]);x(f[A],D,_,null,g,w,T,E,I)}v>R?ot(f,g,w,!0,!1,N):Z(p,_,y,g,w,T,E,I,N)},An=(f,p,_,y,g,w,T,E,I)=>{let v=0;const R=p.length;let N=f.length-1,A=R-1;for(;v<=N&&v<=A;){const D=f[v],U=p[v]=I?Ct(p[v]):nt(p[v]);if(Wt(D,U))x(D,U,_,null,g,w,T,E,I);else break;v++}for(;v<=N&&v<=A;){const D=f[N],U=p[A]=I?Ct(p[A]):nt(p[A]);if(Wt(D,U))x(D,U,_,null,g,w,T,E,I);else break;N--,A--}if(v>N){if(v<=A){const D=A+1,U=D<R?p[D].el:y;for(;v<=A;)x(null,p[v]=I?Ct(p[v]):nt(p[v]),_,U,g,w,T,E,I),v++}}else if(v>A)for(;v<=N;)mt(f[v],g,w,!0),v++;else{const D=v,U=v,G=new Map;for(v=U;v<=A;v++){const Me=p[v]=I?Ct(p[v]):nt(p[v]);Me.key!=null&&G.set(Me.key,v)}let Y,ie=0;const Ue=A-U+1;let ln=!1,yo=0;const Pn=new Array(Ue);for(v=0;v<Ue;v++)Pn[v]=0;for(v=D;v<=N;v++){const Me=f[v];if(ie>=Ue){mt(Me,g,w,!0);continue}let Ze;if(Me.key!=null)Ze=G.get(Me.key);else for(Y=U;Y<=A;Y++)if(Pn[Y-U]===0&&Wt(Me,p[Y])){Ze=Y;break}Ze===void 0?mt(Me,g,w,!0):(Pn[Ze-U]=v+1,Ze>=yo?yo=Ze:ln=!0,x(Me,p[Ze],_,null,g,w,T,E,I),ie++)}const vo=ln?lf(Pn):dn;for(Y=vo.length-1,v=Ue-1;v>=0;v--){const Me=U+v,Ze=p[Me],Co=Me+1<R?p[Me+1].el:y;Pn[v]===0?x(null,Ze,_,Co,g,w,T,E,I):ln&&(Y<0||v!==vo[Y]?rn(Ze,_,Co,2):Y--)}}},rn=(f,p,_,y,g=null)=>{const{el:w,type:T,transition:E,children:I,shapeFlag:v}=f;if(v&6){rn(f.component.subTree,p,_,y);return}if(v&128){f.suspense.move(p,_,y);return}if(v&64){T.move(f,p,_,on);return}if(T===pe){s(w,p,_);for(let N=0;N<I.length;N++)rn(I[N],p,_,y);s(f.anchor,p,_);return}if(T===bi){ne(f,p,_);return}if(y!==2&&v&1&&E)if(y===0)E.beforeEnter(w),s(w,p,_),Pe(()=>E.enter(w),g);else{const{leave:N,delayLeave:A,afterLeave:D}=E,U=()=>s(w,p,_),G=()=>{N(w,()=>{U(),D&&D()})};A?A(w,U,G):G()}else s(w,p,_)},mt=(f,p,_,y=!1,g=!1)=>{const{type:w,props:T,ref:E,children:I,dynamicChildren:v,shapeFlag:R,patchFlag:N,dirs:A}=f;if(E!=null&&Gi(E,null,_,f,!0),R&256){p.ctx.deactivate(f);return}const D=R&1&&A,U=!ws(f);let G;if(U&&(G=T&&T.onVnodeBeforeUnmount)&&et(G,p,f),R&6)bu(f.component,_,y);else{if(R&128){f.suspense.unmount(_,y);return}D&&Pt(f,null,p,"beforeUnmount"),R&64?f.type.remove(f,p,_,g,on,y):v&&(w!==pe||N>0&&N&64)?ot(v,p,_,!1,!0):(w===pe&&N&384||!g&&R&16)&&ot(I,p,_),y&&mo(f)}(U&&(G=T&&T.onVnodeUnmounted)||D)&&Pe(()=>{G&&et(G,p,f),D&&Pt(f,null,p,"unmounted")},_)},mo=f=>{const{type:p,el:_,anchor:y,transition:g}=f;if(p===pe){Eu(_,y);return}if(p===bi){Se(f);return}const w=()=>{i(_),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:T,delayLeave:E}=g,I=()=>T(_,w);E?E(f.el,w,I):I()}else w()},Eu=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},bu=(f,p,_)=>{const{bum:y,scope:g,update:w,subTree:T,um:E}=f;y&&bs(y),g.stop(),w&&(w.active=!1,mt(T,f,p,_)),E&&Pe(E,p),Pe(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ot=(f,p,_,y=!1,g=!1,w=0)=>{for(let T=w;T<f.length;T++)mt(f[T],p,_,y,g)},ds=f=>f.shapeFlag&6?ds(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),go=(f,p,_)=>{f==null?p._vnode&&mt(p._vnode,null,null,!0):x(p._vnode||null,f,p,null,null,null,_),ko(),ma(),p._vnode=f},on={p:x,um:mt,m:rn,r:mo,mt:sn,mc:Z,pc:rt,pbc:Ee,n:ds,o:t};let _i,mi;return e&&([_i,mi]=e(on)),{render:go,hydrate:_i,createApp:sf(go,_i)}}function Ot({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Fa(t,e,n=!1){const s=t.children,i=e.children;if(O(s)&&O(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Ct(i[r]),l.el=o.el),n||Fa(o,l))}}function lf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const af=t=>t.__isTeleport,pe=Symbol(void 0),Dr=Symbol(void 0),Xe=Symbol(void 0),bi=Symbol(void 0),Bn=[];let qe=null;function V(t=!1){Bn.push(qe=t?null:[])}function cf(){Bn.pop(),qe=Bn[Bn.length-1]||null}let Kn=1;function Bo(t){Kn+=t}function ja(t){return t.dynamicChildren=Kn>0?qe||dn:null,cf(),Kn>0&&qe&&qe.push(t),t}function q(t,e,n,s,i,r){return ja(z(t,e,n,s,i,r,!0))}function Ba(t,e,n,s,i){return ja(_e(t,e,n,s,i,!0))}function Yi(t){return t?t.__v_isVNode===!0:!1}function Wt(t,e){return t.type===e.type&&t.key===e.key}const si="__vInternal",Wa=({key:t})=>t!=null?t:null,Is=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ce(t)||Re(t)||L(t)?{i:Ke,r:t,k:e,f:!!n}:t:null;function z(t,e=null,n=null,s=0,i=null,r=t===pe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wa(e),ref:e&&Is(e),scopeId:ei,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(Mr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=Ce(n)?8:16),Kn>0&&!o&&qe&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&qe.push(a),a}const _e=uf;function uf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Vh)&&(t=Xe),Yi(t)){const l=Nt(t,e,!0);return n&&Mr(l,n),Kn>0&&!r&&qe&&(l.shapeFlag&6?qe[qe.indexOf(t)]=l:qe.push(l)),l.patchFlag|=-2,l}if(bf(t)&&(t=t.__vccOpts),e){e=hf(e);let{class:l,style:a}=e;l&&!Ce(l)&&(e.class=yr(l)),oe(a)&&(ua(a)&&!O(a)&&(a=Te({},a)),e.style=gr(a))}const o=Ce(t)?1:Nh(t)?128:af(t)?64:oe(t)?4:L(t)?2:0;return z(t,e,n,s,i,o,r,!0)}function hf(t){return t?ua(t)||si in t?Te({},t):t:null}function Nt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?df(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Wa(l),ref:e&&e.ref?n&&i?O(i)?i.concat(Is(e)):[i,Is(e)]:Is(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==pe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Nt(t.ssContent),ssFallback:t.ssFallback&&Nt(t.ssFallback),el:t.el,anchor:t.anchor}}function ff(t=" ",e=0){return _e(Dr,null,t,e)}function $e(t="",e=!1){return e?(V(),Ba(Xe,null,t)):_e(Xe,null,t)}function nt(t){return t==null||typeof t=="boolean"?_e(Xe):O(t)?_e(pe,null,t.slice()):typeof t=="object"?Ct(t):_e(Dr,null,String(t))}function Ct(t){return t.el===null||t.memo?t:Nt(t)}function Mr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(O(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Mr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(si in e)?e._ctx=Ke:i===3&&Ke&&(Ke.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else L(e)?(e={default:e,_ctx:Ke},n=32):(e=String(e),s&64?(n=16,e=[ff(e)]):n=8);t.children=e,t.shapeFlag|=n}function df(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=yr([e.class,s.class]));else if(i==="style")e.style=gr([e.style,s.style]);else if(Gs(i)){const r=e[i],o=s[i];o&&r!==o&&!(O(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function et(t,e,n,s=null){He(t,e,7,[n,s])}const pf=La();let _f=0;function mf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||pf,r={uid:_f++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pa(s,i),emitsOptions:ya(s,i),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:s.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ch.bind(null,r),t.ce&&t.ce(r),r}let Ie=null;const gf=()=>Ie||Ke,En=t=>{Ie=t,t.scope.on()},Kt=()=>{Ie&&Ie.scope.off(),Ie=null};function Ha(t){return t.vnode.shapeFlag&4}let qn=!1;function yf(t,e=!1){qn=e;const{props:n,children:s}=t.vnode,i=Ha(t);Xh(t,n,i,e),ef(t,s);const r=i?vf(t,e):void 0;return qn=!1,r}function vf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ha(new Proxy(t.ctx,zh));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Ef(t):null;En(t),Sn();const r=bt(s,t,0,[t.props,i]);if(Nn(),Kt(),Yl(r)){if(r.then(Kt,Kt),e)return r.then(o=>{Wo(t,o,e)}).catch(o=>{Js(o,t,0)});t.asyncDep=r}else Wo(t,r,e)}else Ua(t,e)}function Wo(t,e,n){L(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=fa(e)),Ua(t,n)}let Ho;function Ua(t,e,n){const s=t.type;if(!t.render){if(!e&&Ho&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Te(Te({isCustomElement:r,delimiters:l},o),a);s.render=Ho(i,c)}}t.render=s.render||Qe}En(t),Sn(),Kh(t),Nn(),Kt()}function Cf(t){return new Proxy(t.attrs,{get(e,n){return je(t,"get","$attrs"),e[n]}})}function Ef(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Cf(t))},slots:t.slots,emit:t.emit,expose:e}}function ii(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(fa(ha(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in As)return As[n](t)}}))}function bf(t){return L(t)&&"__vccOpts"in t}const wf=(t,e)=>dh(t,e,qn);function If(t,e,n){const s=arguments.length;return s===2?oe(e)&&!O(e)?Yi(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Yi(n)&&(n=[n]),_e(t,e,n))}const Tf="3.2.38",Sf="http://www.w3.org/2000/svg",Ht=typeof document<"u"?document:null,Uo=Ht&&Ht.createElement("template"),Nf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Ht.createElementNS(Sf,t):Ht.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ht.createTextNode(t),createComment:t=>Ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Uo.innerHTML=s?`<svg>${t}</svg>`:t;const l=Uo.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function xf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function kf(t,e,n){const s=t.style,i=Ce(n);if(n&&!i){for(const r in n)Qi(s,r,n[r]);if(e&&!Ce(e))for(const r in e)n[r]==null&&Qi(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const $o=/\s*!important$/;function Qi(t,e,n){if(O(n))n.forEach(s=>Qi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Rf(t,e);$o.test(n)?t.setProperty(en(s),n.replace($o,""),"important"):t[s]=n}}const Vo=["Webkit","Moz","ms"],wi={};function Rf(t,e){const n=wi[e];if(n)return n;let s=Cn(e);if(s!=="filter"&&s in t)return wi[e]=s;s=Jl(s);for(let i=0;i<Vo.length;i++){const r=Vo[i]+s;if(r in t)return wi[e]=r}return e}const zo="http://www.w3.org/1999/xlink";function Af(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zo,e.slice(6,e.length)):t.setAttributeNS(zo,e,n);else{const r=Iu(e);n==null||r&&!Kl(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Pf(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Kl(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[$a,Of]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Xi=0;const Df=Promise.resolve(),Mf=()=>{Xi=0},Lf=()=>Xi||(Df.then(Mf),Xi=$a());function un(t,e,n,s){t.addEventListener(e,n,s)}function Ff(t,e,n,s){t.removeEventListener(e,n,s)}function jf(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Bf(e);if(s){const c=r[e]=Wf(s,i);un(t,l,c,a)}else o&&(Ff(t,l,o,a),r[e]=void 0)}}const Ko=/(?:Once|Passive|Capture)$/;function Bf(t){let e;if(Ko.test(t)){e={};let s;for(;s=t.match(Ko);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):en(t.slice(2)),e]}function Wf(t,e){const n=s=>{const i=s.timeStamp||$a();(Of||i>=n.attached-1)&&He(Hf(s,n.value),e,5,[s])};return n.value=t,n.attached=Lf(),n}function Hf(t,e){if(O(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const qo=/^on[a-z]/,Uf=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?xf(t,s,i):e==="style"?kf(t,n,s):Gs(e)?vr(e)||jf(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$f(t,e,s,i))?Pf(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Af(t,e,s,i))};function $f(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&qo.test(e)&&L(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||qo.test(e)&&Ce(n)?!1:e in t}const yt="transition",On="animation",Lr=(t,{slots:e})=>If(ba,Vf(t),e);Lr.displayName="Transition";const Va={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Lr.props=Te({},ba.props,Va);const Dt=(t,e=[])=>{O(t)?t.forEach(n=>n(...e)):t&&t(...e)},Go=t=>t?O(t)?t.some(e=>e.length>1):t.length>1:!1;function Vf(t){const e={};for(const k in t)k in Va||(e[k]=t[k]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:c=o,appearToClass:u=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,C=zf(i),S=C&&C[0],x=C&&C[1],{onBeforeEnter:M,onEnter:de,onEnterCancelled:J,onLeave:ne,onLeaveCancelled:Se,onBeforeAppear:_t=M,onAppear:it=de,onAppearCancelled:B=J}=e,Z=(k,ae,Be)=>{Mt(k,ae?u:l),Mt(k,ae?c:o),Be&&Be()},le=(k,ae)=>{k._isLeaving=!1,Mt(k,h),Mt(k,m),Mt(k,d),ae&&ae()},Ee=k=>(ae,Be)=>{const sn=k?it:de,be=()=>Z(ae,k,Be);Dt(sn,[ae,be]),Yo(()=>{Mt(ae,k?a:r),vt(ae,k?u:l),Go(sn)||Qo(ae,s,S,be)})};return Te(e,{onBeforeEnter(k){Dt(M,[k]),vt(k,r),vt(k,o)},onBeforeAppear(k){Dt(_t,[k]),vt(k,a),vt(k,c)},onEnter:Ee(!1),onAppear:Ee(!0),onLeave(k,ae){k._isLeaving=!0;const Be=()=>le(k,ae);vt(k,h),Gf(),vt(k,d),Yo(()=>{!k._isLeaving||(Mt(k,h),vt(k,m),Go(ne)||Qo(k,s,x,Be))}),Dt(ne,[k,Be])},onEnterCancelled(k){Z(k,!1),Dt(J,[k])},onAppearCancelled(k){Z(k,!0),Dt(B,[k])},onLeaveCancelled(k){le(k),Dt(Se,[k])}})}function zf(t){if(t==null)return null;if(oe(t))return[Ii(t.enter),Ii(t.leave)];{const e=Ii(t);return[e,e]}}function Ii(t){return xs(t)}function vt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Mt(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Yo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Kf=0;function Qo(t,e,n,s){const i=t._endId=++Kf,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:l,propCount:a}=qf(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=m=>{m.target===t&&++u>=a&&h()};setTimeout(()=>{u<a&&h()},l+1),t.addEventListener(c,d)}function qf(t,e){const n=window.getComputedStyle(t),s=C=>(n[C]||"").split(", "),i=s(yt+"Delay"),r=s(yt+"Duration"),o=Xo(i,r),l=s(On+"Delay"),a=s(On+"Duration"),c=Xo(l,a);let u=null,h=0,d=0;e===yt?o>0&&(u=yt,h=o,d=r.length):e===On?c>0&&(u=On,h=c,d=a.length):(h=Math.max(o,c),u=h>0?o>c?yt:On:null,d=u?u===yt?r.length:a.length:0);const m=u===yt&&/\b(transform|all)(,|$)/.test(n[yt+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:m}}function Xo(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Jo(n)+Jo(t[s])))}function Jo(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Gf(){return document.body.offsetHeight}const Zo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return O(e)?n=>bs(e,n):e};function Yf(t){t.target.composing=!0}function el(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Qf={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Zo(i);const r=s||i.props&&i.props.type==="number";un(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=xs(l)),t._assign(l)}),n&&un(t,"change",()=>{t.value=t.value.trim()}),e||(un(t,"compositionstart",Yf),un(t,"compositionend",el),un(t,"change",el))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Zo(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&xs(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Xf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},tl=(t,e)=>n=>{if(!("key"in n))return;const s=en(n.key);if(e.some(i=>i===s||Xf[i]===s))return t(n)},Jf=Te({patchProp:Uf},Nf);let nl;function Zf(){return nl||(nl=rf(Jf))}const ed=(...t)=>{const e=Zf().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=td(s);if(!i)return;const r=e._component;!L(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function td(t){return Ce(t)?document.querySelector(t):t}/**
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
 */const b=function(t,e){if(!t)throw xn(e)},xn=function(t){return new Error("Firebase Database ("+za.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ka=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Fr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,m=c&63;a||(m=64,o||(d=64)),s.push(n[u],n[h],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ka(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw Error();const d=r<<2|l>>4;if(s.push(d),c!==64){const m=l<<4&240|c>>2;if(s.push(m),h!==64){const C=c<<6&192|h;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},qa=function(t){const e=Ka(t);return Fr.encodeByteArray(e,!0)},Ga=function(t){return qa(t).replace(/\./g,"")},sl=function(t){try{return Fr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sd(t){return Ya(void 0,t)}function Ya(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!id(n)||(t[n]=Ya(t[n],e[n]));return t}function id(t){return t!=="__proto__"}/**
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
 */class jr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function rd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rd())}function od(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xa(){return za.NODE_ADMIN===!0}function ld(){return typeof indexedDB=="object"}function ad(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const cd="FirebaseError";class rs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=cd,Object.setPrototypeOf(this,rs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ja.prototype.create)}}class Ja{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ud(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new rs(i,l,s)}}function ud(t,e){return t.replace(hd,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const hd=/\{\$([^}]+)}/g;/**
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
 */function Gn(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
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
 */const Za=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Gn(sl(r[0])||""),n=Gn(sl(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},fd=function(t){const e=Za(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dd=function(t){const e=Za(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function dt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function bn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function il(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Os(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ji(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(rl(r)&&rl(o)){if(!Ji(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function rl(t){return t!==null&&typeof t=="object"}/**
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
 */function pd(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class _d{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ec(t,e){return`${t} failed: ${e} argument `}/**
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
 */const md=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ri=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function oi(t){return t&&t._delegate?t._delegate:t}class Yn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ft="[DEFAULT]";/**
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
 */class gd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new jr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vd(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yd(t){return t===Ft?void 0:t}function vd(t){return t.instantiationMode==="EAGER"}/**
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
 */class Cd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Ed={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},bd=ee.INFO,wd={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Id=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=wd[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tc{constructor(e){this.name=e,this._logLevel=bd,this._logHandler=Id,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ed[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Td=(t,e)=>e.some(n=>t instanceof n);let ol,ll;function Sd(){return ol||(ol=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nd(){return ll||(ll=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nc=new WeakMap,Zi=new WeakMap,sc=new WeakMap,Ti=new WeakMap,Br=new WeakMap;function xd(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(wt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nc.set(n,t)}).catch(()=>{}),Br.set(e,t),e}function kd(t){if(Zi.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Zi.set(t,e)}let er={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rd(t){er=t(er)}function Ad(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Si(this),e,...n);return sc.set(s,e.sort?e.sort():[e]),wt(s)}:Nd().includes(t)?function(...e){return t.apply(Si(this),e),wt(nc.get(this))}:function(...e){return wt(t.apply(Si(this),e))}}function Pd(t){return typeof t=="function"?Ad(t):(t instanceof IDBTransaction&&kd(t),Td(t,Sd())?new Proxy(t,er):t)}function wt(t){if(t instanceof IDBRequest)return xd(t);if(Ti.has(t))return Ti.get(t);const e=Pd(t);return e!==t&&(Ti.set(t,e),Br.set(e,t)),e}const Si=t=>Br.get(t);function Od(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=wt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(wt(o.result),a.oldVersion,a.newVersion,wt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Dd=["get","getKey","getAll","getAllKeys","count"],Md=["put","add","delete","clear"],Ni=new Map;function al(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ni.get(e))return Ni.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Md.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Dd.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Ni.set(e,r),r}Rd(t=>({...t,get:(e,n,s)=>al(e,n)||t.get(e,n,s),has:(e,n)=>!!al(e,n)||t.has(e,n)}));/**
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
 */const Gt=new tc("@firebase/app"),jd="@firebase/app-compat",Bd="@firebase/analytics-compat",Wd="@firebase/analytics",Hd="@firebase/app-check-compat",Ud="@firebase/app-check",$d="@firebase/auth",Vd="@firebase/auth-compat",zd="@firebase/database",Kd="@firebase/database-compat",qd="@firebase/functions",Gd="@firebase/functions-compat",Yd="@firebase/installations",Qd="@firebase/installations-compat",Xd="@firebase/messaging",Jd="@firebase/messaging-compat",Zd="@firebase/performance",ep="@firebase/performance-compat",tp="@firebase/remote-config",np="@firebase/remote-config-compat",sp="@firebase/storage",ip="@firebase/storage-compat",rp="@firebase/firestore",op="@firebase/firestore-compat",lp="firebase",ap="9.9.4";/**
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
 */const ic="[DEFAULT]",cp={[tr]:"fire-core",[jd]:"fire-core-compat",[Wd]:"fire-analytics",[Bd]:"fire-analytics-compat",[Ud]:"fire-app-check",[Hd]:"fire-app-check-compat",[$d]:"fire-auth",[Vd]:"fire-auth-compat",[zd]:"fire-rtdb",[Kd]:"fire-rtdb-compat",[qd]:"fire-fn",[Gd]:"fire-fn-compat",[Yd]:"fire-iid",[Qd]:"fire-iid-compat",[Xd]:"fire-fcm",[Jd]:"fire-fcm-compat",[Zd]:"fire-perf",[ep]:"fire-perf-compat",[tp]:"fire-rc",[np]:"fire-rc-compat",[sp]:"fire-gcs",[ip]:"fire-gcs-compat",[rp]:"fire-fst",[op]:"fire-fst-compat","fire-js":"fire-js",[lp]:"fire-js-all"};/**
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
 */const Ds=new Map,nr=new Map;function up(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ms(t){const e=t.name;if(nr.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;nr.set(e,t);for(const n of Ds.values())up(n,t);return!0}function hp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const fp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yt=new Ja("app","Firebase",fp);/**
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
 */class dp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
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
 */const pp=ap;function _p(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ic,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});const i=Ds.get(s);if(i){if(Ji(t,i.options)&&Ji(n,i.config))return i;throw Yt.create("duplicate-app",{appName:s})}const r=new Cd(s);for(const l of nr.values())r.addComponent(l);const o=new dp(t,n,r);return Ds.set(s,o),o}function mp(t=ic){const e=Ds.get(t);if(!e)throw Yt.create("no-app",{appName:t});return e}function gn(t,e,n){var s;let i=(s=cp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(l.join(" "));return}Ms(new Yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const gp="firebase-heartbeat-database",yp=1,Qn="firebase-heartbeat-store";let xi=null;function rc(){return xi||(xi=Od(gp,yp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qn)}}}).catch(t=>{throw Yt.create("idb-open",{originalErrorMessage:t.message})})),xi}async function vp(t){var e;try{return(await rc()).transaction(Qn).objectStore(Qn).get(oc(t))}catch(n){if(n instanceof rs)Gt.warn(n.message);else{const s=Yt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Gt.warn(s.message)}}}async function ul(t,e){var n;try{const i=(await rc()).transaction(Qn,"readwrite");return await i.objectStore(Qn).put(e,oc(t)),i.done}catch(s){if(s instanceof rs)Gt.warn(s.message);else{const i=Yt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Gt.warn(i.message)}}}function oc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Cp=1024,Ep=30*24*60*60*1e3;class bp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ip(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Ep}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hl(),{heartbeatsToSend:n,unsentEntries:s}=wp(this._heartbeatsCache.heartbeats),i=Ga(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function hl(){return new Date().toISOString().substring(0,10)}function wp(t,e=Cp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),fl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ip{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ld()?ad().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ul(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ul(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fl(t){return Ga(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Tp(t){Ms(new Yn("platform-logger",e=>new Ld(e),"PRIVATE")),Ms(new Yn("heartbeat",e=>new bp(e),"PRIVATE")),gn(tr,cl,t),gn(tr,cl,"esm2017"),gn("fire-js","")}Tp("");var Sp="firebase",Np="9.9.4";/**
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
 */gn(Sp,Np,"app");const dl="@firebase/database",pl="0.13.6";/**
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
 */let lc="";function xp(t){lc=t}/**
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
 */class kp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Gn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Rp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ac=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kp(e)}}catch{}return new Rp},$t=ac("localStorage"),sr=ac("sessionStorage");/**
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
 */const yn=new tc("@firebase/database"),Ap=function(){let t=1;return function(){return t++}}(),cc=function(t){const e=md(t),n=new _d;n.update(e);const s=n.digest();return Fr.encodeByteArray(s)},os=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=os.apply(null,s):typeof s=="object"?e+=me(s):e+=s,e+=" "}return e};let qt=null,_l=!0;const Pp=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(yn.logLevel=ee.VERBOSE,qt=yn.log.bind(yn),e&&sr.set("logging_enabled",!0)):typeof t=="function"?qt=t:(qt=null,sr.remove("logging_enabled"))},Ne=function(...t){if(_l===!0&&(_l=!1,qt===null&&sr.get("logging_enabled")===!0&&Pp(!0)),qt){const e=os.apply(null,t);qt(e)}},ls=function(t){return function(...e){Ne(t,...e)}},ir=function(...t){const e="FIREBASE INTERNAL ERROR: "+os(...t);yn.error(e)},Qt=function(...t){const e=`FIREBASE FATAL ERROR: ${os(...t)}`;throw yn.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+os(...t);yn.warn(e)},Op=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Dp=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wn="[MIN_NAME]",Xt="[MAX_NAME]",kn=function(t,e){if(t===e)return 0;if(t===wn||e===Xt)return-1;if(e===wn||t===Xt)return 1;{const n=ml(t),s=ml(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Mp=function(t,e){return t===e?0:t<e?-1:1},Dn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},Wr=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=me(e[s]),n+=":",n+=Wr(t[e[s]]);return n+="}",n},hc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function De(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const fc=function(t){b(!uc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Lp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Fp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function jp(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Bp=new RegExp("^-?(0*)\\d{1,10}$"),Wp=-2147483648,Hp=2147483647,ml=function(t){if(Bp.test(t)){const e=Number(t);if(e>=Wp&&e<=Hp)return e}return null},as=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Up=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class $p{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Vp{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class rr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rr.OWNER="owner";/**
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
 */const Hr="5",dc="v",pc="s",_c="r",mc="f",gc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,yc="ls",vc="p",or="ac",Cc="websocket",Ec="long_polling";/**
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
 */class zp{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$t.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$t.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Kp(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function bc(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Cc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ec)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Kp(t)&&(n.ns=t.namespace);const i=[];return De(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class qp{constructor(){this.counters_={}}incrementCounter(e,n=1){dt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return sd(this.counters_)}}/**
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
 */const ki={},Ri={};function Ur(t){const e=t.toString();return ki[e]||(ki[e]=new qp),ki[e]}function Gp(t,e){const n=t.toString();return Ri[n]||(Ri[n]=e()),Ri[n]}/**
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
 */class Yp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&as(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const gl="start",Qp="close",Xp="pLPCommand",Jp="pRTLPCB",wc="id",Ic="pw",Tc="ser",Zp="cb",e_="seg",t_="ts",n_="d",s_="dframe",Sc=1870,Nc=30,i_=Sc-Nc,r_=25e3,o_=3e4;class hn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ls(e),this.stats_=Ur(n),this.urlFn=a=>(this.appCheckToken&&(a[or]=this.appCheckToken),bc(n,Ec,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Yp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(o_)),Dp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $r((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gl)this.id=l,this.password=a;else if(o===Qp)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[gl]="t",s[Tc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Zp]=this.scriptTagHolder.uniqueCallbackIdentifier),s[dc]=Hr,this.transportSessionId&&(s[pc]=this.transportSessionId),this.lastSessionId&&(s[yc]=this.lastSessionId),this.applicationId&&(s[vc]=this.applicationId),this.appCheckToken&&(s[or]=this.appCheckToken),typeof location<"u"&&location.hostname&&gc.test(location.hostname)&&(s[_c]=mc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hn.forceAllow_=!0}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){return hn.forceAllow_?!0:!hn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Lp()&&!Fp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=qa(n),i=hc(s,i_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[s_]="t",s[wc]=e,s[Ic]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $r{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ap(),window[Xp+this.uniqueCallbackIdentifier]=e,window[Jp+this.uniqueCallbackIdentifier]=n,this.myIFrame=$r.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ne("frame writing exception"),l.stack&&Ne(l.stack),Ne(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[wc]=this.myID,e[Ic]=this.myPW,e[Tc]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Nc+s.length<=Sc;){const o=this.pendingSegs.shift();s=s+"&"+e_+i+"="+o.seg+"&"+t_+i+"="+o.ts+"&"+n_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(r_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const l_=16384,a_=45e3;let Ls=null;typeof MozWebSocket<"u"?Ls=MozWebSocket:typeof WebSocket<"u"&&(Ls=WebSocket);class ze{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ls(this.connId),this.stats_=Ur(n),this.connURL=ze.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[dc]=Hr,typeof location<"u"&&location.hostname&&gc.test(location.hostname)&&(o[_c]=mc),n&&(o[pc]=n),s&&(o[yc]=s),i&&(o[or]=i),r&&(o[vc]=r),bc(e,Cc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$t.set("previous_websocket_failure",!0);try{let s;Xa(),this.mySock=new Ls(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ze.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ls!==null&&!ze.forceDisallow_}static previouslyFailed(){return $t.isInMemoryStorage||$t.get("previous_websocket_failure")===!0}markConnectionHealthy(){$t.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Gn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=hc(n,l_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(a_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ze.responsesRequiredToBeHealthy=2;ze.healthyTimeout=3e4;/**
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
 */class Xn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[hn,ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ze&&ze.isAvailable();let s=n&&!ze.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ze];else{const i=this.transports_=[];for(const r of Xn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Xn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xn.globalTransportInitialized_=!1;/**
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
 */const c_=6e4,u_=5e3,h_=10*1024,f_=100*1024,Ai="t",yl="d",d_="s",vl="r",p_="e",Cl="o",El="a",bl="n",wl="p",__="h";class m_{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ls("c:"+this.id+":"),this.transportManager_=new Xn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>f_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>h_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ai in e){const n=e[Ai];n===El?this.upgradeIfSecondaryHealthy_():n===vl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Cl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Dn("t",e),s=Dn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:El,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:bl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Dn("t",e),s=Dn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Dn(Ai,e);if(yl in e){const s=e[yl];if(n===__)this.onHandshake_(s);else if(n===bl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===d_?this.onConnectionShutdown_(s):n===vl?this.onReset_(s):n===p_?ir("Server Error: "+s):n===Cl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ir("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Hr!==s&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Wn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(c_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(u_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($t.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class xc{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class kc{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Fs extends kc{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Fs}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Il=32,Tl=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new X("")}function W(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function xt(t){return t.pieces_.length-t.pieceNum_}function te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function Rc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function g_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ac(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Pc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function ge(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof X)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new X(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function Ae(t,e){const n=W(t),s=W(e);if(n===null)return e;if(n===s)return Ae(te(t),te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Oc(t,e){if(xt(t)!==xt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ge(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(xt(t)>xt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class y_{constructor(e,n){this.errorPrefix_=n,this.parts_=Ac(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ri(this.parts_[s]);Dc(this)}}function v_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ri(e),Dc(t)}function C_(t){const e=t.parts_.pop();t.byteLength_-=ri(e),t.parts_.length>0&&(t.byteLength_-=1)}function Dc(t){if(t.byteLength_>Tl)throw new Error(t.errorPrefix_+"has a key path longer than "+Tl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Il)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Il+") or object contains a cycle "+jt(t))}function jt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Vr extends kc{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Vr}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Mn=1e3,E_=60*5*1e3,Sl=30*1e3,b_=1.3,w_=3e4,I_="server_kill",Nl=3;class ct extends xc{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=ct.nextPersistentConnectionId_++,this.log_=ls("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Mn,this.maxReconnectDelay_=E_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Xa())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(me(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new jr,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;ct.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dt(e,"w")){const s=bn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=fd(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ir("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>w_&&(this.reconnectDelay_=Mn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*b_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ct.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new m_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{Fe(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(I_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Fe(h),a())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],il(this.interruptReasons_)&&(this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Wr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new X(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Nl&&(this.reconnectDelay_=Sl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Nl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+lc.replace(/\./g,"-")]=1,Qa()?e["framework.cordova"]=1:od()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fs.getInstance().currentlyOnline();return il(this.interruptReasons_)&&e}}ct.nextPersistentConnectionId_=0;ct.nextConnectionId_=0;/**
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
 */class li{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new F(wn,e),i=new F(wn,n);return this.compare(s,i)!==0}minPost(){return F.MIN}}/**
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
 */let vs;class Mc extends li{static get __EMPTY_NODE(){return vs}static set __EMPTY_NODE(e){vs=e}compare(e,n){return kn(e.name,n.name)}isDefinedOn(e){throw xn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Xt,vs)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,vs)}toString(){return".key"}}const vn=new Mc;/**
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
 */class Cs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:ve.RED,this.left=i!=null?i:Oe.EMPTY_NODE,this.right=r!=null?r:Oe.EMPTY_NODE}copy(e,n,s,i,r){return new ve(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class T_{copy(e,n,s,i,r){return this}insert(e,n,s){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Cs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Cs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Cs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Cs(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new T_;/**
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
 */function S_(t,e){return kn(t.name,e.name)}function zr(t,e){return kn(t,e)}/**
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
 */let lr;function N_(t){lr=t}const Lc=function(t){return typeof t=="number"?"number:"+fc(t):"string:"+t},Fc=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dt(e,".sv"),"Priority must be a string or number.")}else b(t===lr||t.isEmpty(),"priority of unexpected type.");b(t===lr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let xl;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Fc(this.priorityNode_)}static set __childrenNodeConstructor(e){xl=e}static get __childrenNodeConstructor(){return xl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:W(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=W(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||xt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Lc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=fc(this.value_):e+=this.value_,this.lazyHash_=cc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),r=ye.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let jc,Bc;function x_(t){jc=t}function k_(t){Bc=t}class R_ extends li{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?kn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Xt,new ye("[PRIORITY-POST]",Bc))}makePost(e,n){const s=jc(e);return new F(n,new ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const ue=new R_;/**
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
 */const A_=Math.log(2);class P_{constructor(e){const n=r=>parseInt(Math.log(r)/A_,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const js=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new ve(d,h.node,ve.BLACK,null,null);{const m=parseInt(u/2,10)+a,C=i(a,m),S=i(m+1,c);return h=t[m],d=n?n(h):h,new ve(d,h.node,ve.BLACK,C,S)}},r=function(a){let c=null,u=null,h=t.length;const d=function(C,S){const x=h-C,M=h;h-=C;const de=i(x+1,M),J=t[x],ne=n?n(J):J;m(new ve(ne,J.node,S,null,de))},m=function(C){c?(c.left=C,c=C):(u=C,c=C)};for(let C=0;C<a.count;++C){const S=a.nextBitIsOne(),x=Math.pow(2,a.count-(C+1));S?d(x,ve.BLACK):(d(x,ve.BLACK),d(x,ve.RED))}return u},o=new P_(t.length),l=r(o);return new Oe(s||e,l)};/**
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
 */let Pi;const an={};class at{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(an&&ue,"ChildrenNode.ts has not been loaded"),Pi=Pi||new at({".priority":an},{".priority":ue}),Pi}get(e){const n=bn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return dt(this.indexSet_,e.toString())}addIndex(e,n){b(e!==vn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(F.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=js(s,e.getCompare()):l=an;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new at(u,c)}addToIndexes(e,n){const s=Os(this.indexes_,(i,r)=>{const o=bn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===an)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),js(l,o.getCompare())}else return an;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new at(s,this.indexSet_)}removeFromIndexes(e,n){const s=Os(this.indexes_,i=>{if(i===an)return i;{const r=n.get(e.name);return r?i.remove(new F(e.name,r)):i}});return new at(s,this.indexSet_)}}/**
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
 */let Ln;class P{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Fc(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ln||(Ln=new P(new Oe(zr),null,at.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ln}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ln:n}}getChild(e){const n=W(e);return n===null?this:this.getImmediateChild(n).getChild(te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new F(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ln:this.priorityNode_;return new P(i,o,r)}}updateChild(e,n){const s=W(e);if(s===null)return n;{b(W(e)!==".priority"||xt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(te(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ue,(o,l)=>{n[o]=l.val(e),s++,r&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Lc(this.getPriority().val())+":"),this.forEachChild(ue,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":cc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new F(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===cs?-1:0}withIndex(e){if(e===vn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ue),i=n.getIterator(ue);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vn?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class O_ extends P{constructor(){super(new Oe(zr),P.EMPTY_NODE,at.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const cs=new O_;Object.defineProperties(F,{MIN:{value:new F(wn,P.EMPTY_NODE)},MAX:{value:new F(Xt,cs)}});Mc.__EMPTY_NODE=P.EMPTY_NODE;ye.__childrenNodeConstructor=P;N_(cs);k_(cs);/**
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
 */const D_=!0;function we(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,we(e))}if(!(t instanceof Array)&&D_){const n=[];let s=!1;if(De(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=we(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return P.EMPTY_NODE;const r=js(n,S_,o=>o.name,zr);if(s){const o=js(n,ue.getCompare());return new P(r,we(e),new at({".priority":o},{".priority":ue}))}else return new P(r,we(e),at.Default)}else{let n=P.EMPTY_NODE;return De(t,(s,i)=>{if(dt(t,s)&&s.substring(0,1)!=="."){const r=we(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(we(e))}}x_(we);/**
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
 */class M_ extends li{constructor(e){super(),this.indexPath_=e,b(!j(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?kn(e.name,n.name):r}makePost(e,n){const s=we(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,s);return new F(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,cs);return new F(Xt,e)}toString(){return Ac(this.indexPath_,0).join("/")}}/**
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
 */class L_ extends li{compare(e,n){const s=e.node.compareTo(n.node);return s===0?kn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const s=we(e);return new F(n,s)}toString(){return".value"}}const F_=new L_;/**
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
 */function Wc(t){return{type:"value",snapshotNode:t}}function In(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Jn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Zn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function j_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Kr{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Jn(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(In(n,s)):o.trackChildChange(Zn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ue,(i,r)=>{n.hasChild(i)||s.trackChildChange(Jn(i,r))}),n.isLeafNode()||n.forEachChild(ue,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Zn(i,r,o))}else s.trackChildChange(In(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class es{constructor(e){this.indexedFilter_=new Kr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=es.getStartPost_(e),this.endPost_=es.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new F(n,s))||(s=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const r=this;return n.forEachChild(ue,(o,l)=>{r.matches(new F(o,l))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class B_{constructor(e){this.rangedFilter_=new es(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new F(n,s))||(s=P.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(d,m)=>h(m,d)}else a=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,u=!1;for(;a.hasNext();){const h=a.getNext();!u&&l(r,h)<=0&&(u=!0),u&&c<this.limit_&&l(h,o)<=0?c++:i=i.updateImmediateChild(h.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,m)=>h(m,d)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new F(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const m=d==null?1:o(d,a);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Zn(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Jn(n,h));const S=l.updateImmediateChild(n,P.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(In(d.name,d.node)),S.updateImmediateChild(d.name,d.node)):S}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Jn(c.name,c.node)),r.trackChildChange(In(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,P.EMPTY_NODE)):e}}/**
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
 */class qr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new qr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function W_(t){return t.loadsAllData()?new Kr(t.getIndex()):t.hasLimit()?new B_(t):new es(t)}function kl(t){const e={};if(t.isDefault())return e;let n;return t.index_===ue?n="$priority":t.index_===F_?n="$value":t.index_===vn?n="$key":(b(t.index_ instanceof M_,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_&&(e.startAt=me(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+me(t.indexStartName_))),t.endSet_&&(e.endAt=me(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+me(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Rl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ue&&(e.i=t.index_.toString()),e}/**
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
 */class Bs extends xc{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ls("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Bs.getListenId_(e,s),l={};this.listens_[o]=l;const a=kl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),bn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Bs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=kl(e._queryParams),s=e._path.toString(),i=new jr;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+pd(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Gn(l.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class H_{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ws(){return{value:null,children:new Map}}function Hc(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=W(e);t.children.has(s)||t.children.set(s,Ws());const i=t.children.get(s);e=te(e),Hc(i,e,n)}}function ar(t,e,n){t.value!==null?n(e,t.value):U_(t,(s,i)=>{const r=new X(e.toString()+"/"+s);ar(i,r,n)})}function U_(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class $_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&De(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Al=10*1e3,V_=30*1e3,z_=5*60*1e3;class K_{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new $_(e);const s=Al+(V_-Al)*Math.random();Wn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;De(e,(i,r)=>{r>0&&dt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Wn(this.reportStats_.bind(this),Math.floor(Math.random()*2*z_))}}/**
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
 */var Ye;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ye||(Ye={}));function Uc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Hs{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ye.ACK_USER_WRITE,this.source=Uc()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new Hs($(),n,this.revert)}}else return b(W(this.path)===e,"operationForChild called for unrelated child."),new Hs(te(this.path),this.affectedTree,this.revert)}}/**
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
 */class ts{constructor(e,n){this.source=e,this.path=n,this.type=Ye.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new ts(this.source,$()):new ts(this.source,te(this.path))}}/**
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
 */class Jt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ye.OVERWRITE}operationForChild(e){return j(this.path)?new Jt(this.source,$(),this.snap.getImmediateChild(e)):new Jt(this.source,te(this.path),this.snap)}}/**
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
 */class ns{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ye.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new Jt(this.source,$(),n.value):new ns(this.source,$(),n)}else return b(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ns(this.source,te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class kt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=W(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class q_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function G_(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(j_(o.childName,o.snapshotNode))}),Fn(t,i,"child_removed",e,s,n),Fn(t,i,"child_added",e,s,n),Fn(t,i,"child_moved",r,s,n),Fn(t,i,"child_changed",e,s,n),Fn(t,i,"value",e,s,n),i}function Fn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Q_(t,l,a)),o.forEach(l=>{const a=Y_(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Y_(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Q_(t,e,n){if(e.childName==null||n.childName==null)throw xn("Should only compare child_ events.");const s=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function ai(t,e){return{eventCache:t,serverCache:e}}function Hn(t,e,n,s){return ai(new kt(e,n,s),t.serverCache)}function $c(t,e,n,s){return ai(t.eventCache,new kt(e,n,s))}function Us(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Oi;const X_=()=>(Oi||(Oi=new Oe(Mp)),Oi);class re{constructor(e,n=X_()){this.value=e,this.children=n}static fromObject(e){let n=new re(null);return De(e,(s,i)=>{n=n.set(new X(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(j(e))return null;{const s=W(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(te(e),n);return r!=null?{path:ge(new X(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=W(e),s=this.children.get(n);return s!==null?s.subtree(te(e)):new re(null)}}set(e,n){if(j(e))return new re(n,this.children);{const s=W(e),r=(this.children.get(s)||new re(null)).set(te(e),n),o=this.children.insert(s,r);return new re(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=W(e),s=this.children.get(n);if(s){const i=s.remove(te(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new re(null):new re(this.value,r)}else return this}}get(e){if(j(e))return this.value;{const n=W(e),s=this.children.get(n);return s?s.get(te(e)):null}}setTree(e,n){if(j(e))return n;{const s=W(e),r=(this.children.get(s)||new re(null)).setTree(te(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new re(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ge(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(j(e))return null;{const r=W(e),o=this.children.get(r);return o?o.findOnPath_(te(e),ge(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,s){if(j(e))return this;{this.value&&s(n,this.value);const i=W(e),r=this.children.get(i);return r?r.foreachOnPath_(te(e),ge(n,i),s):new re(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ge(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Je{constructor(e){this.writeTree_=e}static empty(){return new Je(new re(null))}}function Un(t,e,n){if(j(e))return new Je(new re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ae(i,e);return r=r.updateChild(o,n),new Je(t.writeTree_.set(i,r))}else{const i=new re(n),r=t.writeTree_.setTree(e,i);return new Je(r)}}}function Pl(t,e,n){let s=t;return De(n,(i,r)=>{s=Un(s,ge(e,i),r)}),s}function Ol(t,e){if(j(e))return Je.empty();{const n=t.writeTree_.setTree(e,new re(null));return new Je(n)}}function cr(t,e){return tn(t,e)!=null}function tn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ae(n.path,e)):null}function Dl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ue,(s,i)=>{e.push(new F(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new F(s,i.value))}),e}function It(t,e){if(j(e))return t;{const n=tn(t,e);return n!=null?new Je(new re(n)):new Je(t.writeTree_.subtree(e))}}function ur(t){return t.writeTree_.isEmpty()}function Tn(t,e){return Vc($(),t.writeTree_,e)}function Vc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Vc(ge(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ge(t,".priority"),s)),n}}/**
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
 */function ci(t,e){return Gc(e,t)}function J_(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Un(t.visibleWrites,e,n)),t.lastWriteId=s}function Z_(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function em(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&tm(l,s.path)?i=!1:Ge(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return nm(t),!0;if(s.snap)t.visibleWrites=Ol(t.visibleWrites,s.path);else{const l=s.children;De(l,a=>{t.visibleWrites=Ol(t.visibleWrites,ge(s.path,a))})}return!0}else return!1}function tm(t,e){if(t.snap)return Ge(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ge(ge(t.path,n),e))return!0;return!1}function nm(t){t.visibleWrites=zc(t.allWrites,sm,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sm(t){return t.visible}function zc(t,e,n){let s=Je.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ge(n,o)?(l=Ae(n,o),s=Un(s,l,r.snap)):Ge(o,n)&&(l=Ae(o,n),s=Un(s,$(),r.snap.getChild(l)));else if(r.children){if(Ge(n,o))l=Ae(n,o),s=Pl(s,l,r.children);else if(Ge(o,n))if(l=Ae(o,n),j(l))s=Pl(s,$(),r.children);else{const a=bn(r.children,W(l));if(a){const c=a.getChild(te(l));s=Un(s,$(),c)}}}else throw xn("WriteRecord should have .snap or .children")}}return s}function Kc(t,e,n,s,i){if(!s&&!i){const r=tn(t.visibleWrites,e);if(r!=null)return r;{const o=It(t.visibleWrites,e);if(ur(o))return n;if(n==null&&!cr(o,$()))return null;{const l=n||P.EMPTY_NODE;return Tn(o,l)}}}else{const r=It(t.visibleWrites,e);if(!i&&ur(r))return n;if(!i&&n==null&&!cr(r,$()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ge(c.path,e)||Ge(e,c.path))},l=zc(t.allWrites,o,e),a=n||P.EMPTY_NODE;return Tn(l,a)}}}function im(t,e,n){let s=P.EMPTY_NODE;const i=tn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ue,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=It(t.visibleWrites,e);return n.forEachChild(ue,(o,l)=>{const a=Tn(It(r,new X(o)),l);s=s.updateImmediateChild(o,a)}),Dl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=It(t.visibleWrites,e);return Dl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function rm(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ge(e,n);if(cr(t.visibleWrites,r))return null;{const o=It(t.visibleWrites,r);return ur(o)?i.getChild(n):Tn(o,i.getChild(n))}}function om(t,e,n,s){const i=ge(e,n),r=tn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=It(t.visibleWrites,i);return Tn(o,s.getNode().getImmediateChild(n))}else return null}function lm(t,e){return tn(t.visibleWrites,e)}function am(t,e,n,s,i,r,o){let l;const a=It(t.visibleWrites,e),c=tn(a,$());if(c!=null)l=c;else if(n!=null)l=Tn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let m=d.getNext();for(;m&&u.length<i;)h(m,s)!==0&&u.push(m),m=d.getNext();return u}else return[]}function cm(){return{visibleWrites:Je.empty(),allWrites:[],lastWriteId:-1}}function $s(t,e,n,s){return Kc(t.writeTree,t.treePath,e,n,s)}function Qr(t,e){return im(t.writeTree,t.treePath,e)}function Ml(t,e,n,s){return rm(t.writeTree,t.treePath,e,n,s)}function Vs(t,e){return lm(t.writeTree,ge(t.treePath,e))}function um(t,e,n,s,i,r){return am(t.writeTree,t.treePath,e,n,s,i,r)}function Xr(t,e,n){return om(t.writeTree,t.treePath,e,n)}function qc(t,e){return Gc(ge(t.treePath,e),t.writeTree)}function Gc(t,e){return{treePath:t,writeTree:e}}/**
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
 */class hm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Zn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Jn(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,In(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Zn(s,e.snapshotNode,i.oldSnap));else throw xn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class fm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Yc=new fm;class Jr{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new kt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xr(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zt(this.viewCache_),r=um(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function dm(t){return{filter:t}}function pm(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function _m(t,e,n,s,i){const r=new hm;let o,l;if(n.type===Ye.OVERWRITE){const c=n;c.source.fromUser?o=hr(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!j(c.path),o=zs(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Ye.MERGE){const c=n;c.source.fromUser?o=gm(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=fr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Ye.ACK_USER_WRITE){const c=n;c.revert?o=Cm(t,e,c.path,s,i,r):o=ym(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ye.LISTEN_COMPLETE)o=vm(t,e,n.path,s,r);else throw xn("Unknown operation type: "+n.type);const a=r.getChanges();return mm(e,o,a),{viewCache:o,changes:a}}function mm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Us(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Wc(Us(e)))}}function Qc(t,e,n,s,i,r){const o=e.eventCache;if(Vs(s,n)!=null)return e;{let l,a;if(j(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Zt(e),u=c instanceof P?c:P.EMPTY_NODE,h=Qr(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=$s(s,Zt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=W(n);if(c===".priority"){b(xt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Ml(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=te(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Ml(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Xr(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Hn(e,l,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function zs(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(j(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),m,null)}else{const m=W(n);if(!a.isCompleteForPath(n)&&xt(n)>1)return e;const C=te(n),x=a.getNode().getImmediateChild(m).updateChild(C,s);m===".priority"?c=u.updatePriority(a.getNode(),x):c=u.updateChild(a.getNode(),m,x,C,Yc,null)}const h=$c(e,c,a.isFullyInitialized()||j(n),u.filtersNodes()),d=new Jr(i,h,r);return Qc(t,h,n,i,d,l)}function hr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Jr(i,e,r);if(j(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Hn(e,c,!0,t.filter.filtersNodes());else{const h=W(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Hn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=te(n),m=l.getNode().getImmediateChild(h);let C;if(j(d))C=s;else{const S=u.getCompleteChild(h);S!=null?Rc(d)===".priority"&&S.getChild(Pc(d)).isEmpty()?C=S:C=S.updateChild(d,s):C=P.EMPTY_NODE}if(m.equals(C))a=e;else{const S=t.filter.updateChild(l.getNode(),h,C,d,u,o);a=Hn(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ll(t,e){return t.eventCache.isCompleteForChild(e)}function gm(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=ge(n,a);Ll(e,W(u))&&(l=hr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=ge(n,a);Ll(e,W(u))||(l=hr(t,l,u,c,i,r,o))}),l}function Fl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function fr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;j(n)?c=s:c=new re(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),C=Fl(t,m,d);a=zs(t,a,new X(h),C,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const m=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!m){const C=e.serverCache.getNode().getImmediateChild(h),S=Fl(t,C,d);a=zs(t,a,new X(h),S,i,r,o,l)}}),a}function ym(t,e,n,s,i,r,o){if(Vs(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(j(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return zs(t,e,n,a.getNode().getChild(n),i,r,l,o);if(j(n)){let c=new re(null);return a.getNode().forEachChild(vn,(u,h)=>{c=c.set(new X(u),h)}),fr(t,e,n,c,i,r,l,o)}else return e}else{let c=new re(null);return s.foreach((u,h)=>{const d=ge(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),fr(t,e,n,c,i,r,l,o)}}function vm(t,e,n,s,i){const r=e.serverCache,o=$c(e,r.getNode(),r.isFullyInitialized()||j(n),r.isFiltered());return Qc(t,o,n,s,Yc,i)}function Cm(t,e,n,s,i,r){let o;if(Vs(s,n)!=null)return e;{const l=new Jr(s,e,i),a=e.eventCache.getNode();let c;if(j(n)||W(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=$s(s,Zt(e));else{const h=e.serverCache.getNode();b(h instanceof P,"serverChildren would be complete if leaf node"),u=Qr(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=W(n);let h=Xr(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,te(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,P.EMPTY_NODE,te(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$s(s,Zt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Vs(s,$())!=null,Hn(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Em{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Kr(s.getIndex()),r=W_(s);this.processor_=dm(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(P.EMPTY_NODE,l.getNode(),null),u=new kt(a,o.isFullyInitialized(),i.filtersNodes()),h=new kt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ai(h,u),this.eventGenerator_=new q_(this.query_)}get query(){return this.query_}}function bm(t){return t.viewCache_.serverCache.getNode()}function wm(t){return Us(t.viewCache_)}function Im(t,e){const n=Zt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(W(e)).isEmpty())?n.getChild(e):null}function jl(t){return t.eventRegistrations_.length===0}function Tm(t,e){t.eventRegistrations_.push(e)}function Bl(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Wl(t,e,n,s){e.type===Ye.MERGE&&e.source.queryId!==null&&(b(Zt(t.viewCache_),"We should always have a full cache before handling merges"),b(Us(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=_m(t.processor_,i,e,n,s);return pm(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Xc(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Sm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ue,(r,o)=>{s.push(In(r,o))}),n.isFullyInitialized()&&s.push(Wc(n.getNode())),Xc(t,s,n.getNode(),e)}function Xc(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return G_(t.eventGenerator_,e,n,i)}/**
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
 */let Ks;class Jc{constructor(){this.views=new Map}}function Nm(t){b(!Ks,"__referenceConstructor has already been defined"),Ks=t}function xm(){return b(Ks,"Reference.ts has not been loaded"),Ks}function km(t){return t.views.size===0}function Zr(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Wl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Wl(o,e,n,s));return r}}function Zc(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=$s(n,i?s:null),a=!1;l?a=!0:s instanceof P?(l=Qr(n,s),a=!1):(l=P.EMPTY_NODE,a=!1);const c=ai(new kt(l,a,!1),new kt(s,i,!1));return new Em(e,c)}return o}function Rm(t,e,n,s,i,r){const o=Zc(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Tm(o,n),Sm(o,n)}function Am(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Rt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Bl(c,n,s)),jl(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Bl(a,n,s)),jl(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Rt(t)&&r.push(new(xm())(e._repo,e._path)),{removed:r,events:o}}function eu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Tt(t,e){let n=null;for(const s of t.views.values())n=n||Im(s,e);return n}function tu(t,e){if(e._queryParams.loadsAllData())return ui(t);{const s=e._queryIdentifier;return t.views.get(s)}}function nu(t,e){return tu(t,e)!=null}function Rt(t){return ui(t)!=null}function ui(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let qs;function Pm(t){b(!qs,"__referenceConstructor has already been defined"),qs=t}function Om(){return b(qs,"Reference.ts has not been loaded"),qs}let Dm=1;class Hl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=cm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Mm(t,e,n,s,i){return J_(t.pendingWriteTree_,e,n,s,i),i?hs(t,new Jt(Uc(),e,n)):[]}function fn(t,e,n=!1){const s=Z_(t.pendingWriteTree_,e);if(em(t.pendingWriteTree_,e)){let r=new re(null);return s.snap!=null?r=r.set($(),!0):De(s.children,o=>{r=r.set(new X(o),!0)}),hs(t,new Hs(s.path,r,n))}else return[]}function us(t,e,n){return hs(t,new Jt(Gr(),e,n))}function Lm(t,e,n){const s=re.fromObject(n);return hs(t,new ns(Gr(),e,s))}function Fm(t,e){return hs(t,new ts(Gr(),e))}function jm(t,e,n){const s=eo(t,n);if(s){const i=to(s),r=i.path,o=i.queryId,l=Ae(r,e),a=new ts(Yr(o),l);return no(t,r,a)}else return[]}function su(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||nu(o,e))){const a=Am(o,e,n,s);km(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,m)=>Rt(m));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const m=Um(d);for(let C=0;C<m.length;++C){const S=m[C],x=S.query,M=au(t,S);t.listenProvider_.startListening($n(x),ss(t,x),M.hashFn,M.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening($n(e),null):c.forEach(d=>{const m=t.queryToTagMap.get(hi(d));t.listenProvider_.stopListening($n(d),m)}))}$m(t,c)}return l}function iu(t,e,n,s){const i=eo(t,s);if(i!=null){const r=to(i),o=r.path,l=r.queryId,a=Ae(o,e),c=new Jt(Yr(l),a,n);return no(t,o,c)}else return[]}function Bm(t,e,n,s){const i=eo(t,s);if(i){const r=to(i),o=r.path,l=r.queryId,a=Ae(o,e),c=re.fromObject(n),u=new ns(Yr(l),a,c);return no(t,o,u)}else return[]}function Wm(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,m)=>{const C=Ae(d,i);r=r||Tt(m,C),o=o||Rt(m)});let l=t.syncPointTree_.get(i);l?(o=o||Rt(l),r=r||Tt(l,$())):(l=new Jc,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,C)=>{const S=Tt(C,$());S&&(r=r.updateImmediateChild(m,S))}));const c=nu(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=hi(e);b(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const m=Vm();t.queryToTagMap.set(d,m),t.tagToQueryMap.set(m,d)}const u=ci(t.pendingWriteTree_,i);let h=Rm(l,e,n,u,r,a);if(!c&&!o&&!s){const d=tu(l,e);h=h.concat(zm(t,e,d))}return h}function ru(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ae(o,e),c=Tt(l,a);if(c)return c});return Kc(i,e,r,n,!0)}function Hm(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Ae(c,n);s=s||Tt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Tt(i,$()):(i=new Jc,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new kt(s,!0,!1):null,l=ci(t.pendingWriteTree_,e._path),a=Zc(i,e,l,r?o.getNode():P.EMPTY_NODE,r);return wm(a)}function hs(t,e){return ou(e,t.syncPointTree_,null,ci(t.pendingWriteTree_,$()))}function ou(t,e,n,s){if(j(t.path))return lu(t,e,n,s);{const i=e.get($());n==null&&i!=null&&(n=Tt(i,$()));let r=[];const o=W(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=qc(s,o);r=r.concat(ou(l,a,c,u))}return i&&(r=r.concat(Zr(i,t,s,n))),r}}function lu(t,e,n,s){const i=e.get($());n==null&&i!=null&&(n=Tt(i,$()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=qc(s,o),u=t.operationForChild(o);u&&(r=r.concat(lu(u,l,a,c)))}),i&&(r=r.concat(Zr(i,t,s,n))),r}function au(t,e){const n=e.query,s=ss(t,n);return{hashFn:()=>(bm(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?jm(t,n._path,s):Fm(t,n._path);{const r=jp(i,n);return su(t,n,null,r)}}}}function ss(t,e){const n=hi(e);return t.queryToTagMap.get(n)}function hi(t){return t._path.toString()+"$"+t._queryIdentifier}function eo(t,e){return t.tagToQueryMap.get(e)}function to(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function no(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=ci(t.pendingWriteTree_,e);return Zr(s,n,i,null)}function Um(t){return t.fold((e,n,s)=>{if(n&&Rt(n))return[ui(n)];{let i=[];return n&&(i=eu(n)),De(s,(r,o)=>{i=i.concat(o)}),i}})}function $n(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Om())(t._repo,t._path):t}function $m(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=hi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Vm(){return Dm++}function zm(t,e,n){const s=e._path,i=ss(t,e),r=au(t,n),o=t.listenProvider_.startListening($n(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!Rt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!j(c)&&u&&Rt(u))return[ui(u).query];{let d=[];return u&&(d=d.concat(eu(u).map(m=>m.query))),De(h,(m,C)=>{d=d.concat(C)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening($n(u),ss(t,u))}}return o}/**
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
 */class so{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new so(n)}node(){return this.node_}}class io{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ge(this.path_,e);return new io(this.syncTree_,n)}node(){return ru(this.syncTree_,this.path_)}}const Km=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ul=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return qm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Gm(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},qm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},Gm=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Ym=function(t,e,n,s){return ro(e,new io(n,t),s)},Qm=function(t,e,n){return ro(t,new so(e),n)};function ro(t,e,n){const s=t.getPriority().val(),i=Ul(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Ul(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ye(l,we(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ye(i))),o.forEachChild(ue,(l,a)=>{const c=ro(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class oo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function lo(t,e){let n=e instanceof X?e:new X(e),s=t,i=W(n);for(;i!==null;){const r=bn(s.node.children,i)||{children:{},childCount:0};s=new oo(i,s,r),n=te(n),i=W(n)}return s}function Rn(t){return t.node.value}function cu(t,e){t.node.value=e,dr(t)}function uu(t){return t.node.childCount>0}function Xm(t){return Rn(t)===void 0&&!uu(t)}function fi(t,e){De(t.node.children,(n,s)=>{e(new oo(n,t,s))})}function hu(t,e,n,s){n&&!s&&e(t),fi(t,i=>{hu(i,e,!0,s)}),n&&s&&e(t)}function Jm(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function fs(t){return new X(t.parent===null?t.name:fs(t.parent)+"/"+t.name)}function dr(t){t.parent!==null&&Zm(t.parent,t.name,t)}function Zm(t,e,n){const s=Xm(n),i=dt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,dr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,dr(t))}/**
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
 */const eg=/[\[\].#$\/\u0000-\u001F\u007F]/,tg=/[\[\].#$\u0000-\u001F\u007F]/,Di=10*1024*1024,fu=function(t){return typeof t=="string"&&t.length!==0&&!eg.test(t)},du=function(t){return typeof t=="string"&&t.length!==0&&!tg.test(t)},ng=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),du(t)},pu=function(t,e,n){const s=n instanceof X?new y_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+jt(s));if(typeof e=="function")throw new Error(t+"contains a function "+jt(s)+" with contents = "+e.toString());if(uc(e))throw new Error(t+"contains "+e.toString()+" "+jt(s));if(typeof e=="string"&&e.length>Di/3&&ri(e)>Di)throw new Error(t+"contains a string greater than "+Di+" utf8 bytes "+jt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(De(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!fu(o)))throw new Error(t+" contains an invalid key ("+o+") "+jt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);v_(s,o),pu(t,l,s),C_(s)}),i&&r)throw new Error(t+' contains ".value" child '+jt(s)+" in addition to actual children.")}},_u=function(t,e,n,s){if(!(s&&n===void 0)&&!du(n))throw new Error(ec(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sg=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_u(t,e,n,s)},ig=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ng(n))throw new Error(ec(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class rg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function og(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Oc(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function At(t,e,n){og(t,n),lg(t,s=>Ge(s,e)||Ge(e,s))}function lg(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(ag(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ag(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();qt&&Ne("event: "+n.toString()),as(s)}}}/**
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
 */const cg="repo_interrupt",ug=25;class hg{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ws(),this.transactionQueueTree_=new oo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fg(t,e,n){if(t.stats_=Ur(t.repoInfo_),t.forceRestClient_||Up())t.server_=new Bs(t.repoInfo_,(s,i,r,o)=>{$l(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Vl(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ct(t.repoInfo_,e,(s,i,r,o)=>{$l(t,s,i,r,o)},s=>{Vl(t,s)},s=>{pg(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Gp(t.repoInfo_,()=>new K_(t.stats_,t.server_)),t.infoData_=new H_,t.infoSyncTree_=new Hl({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=us(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ao(t,"connected",!1),t.serverSyncTree_=new Hl({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);At(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function dg(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function mu(t){return Km({timestamp:dg(t)})}function $l(t,e,n,s,i){t.dataUpdateCount++;const r=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Os(n,c=>we(c));o=Bm(t.serverSyncTree_,r,a,i)}else{const a=we(n);o=iu(t.serverSyncTree_,r,a,i)}else if(s){const a=Os(n,c=>we(c));o=Lm(t.serverSyncTree_,r,a)}else{const a=we(n);o=us(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=ho(t,r)),At(t.eventQueue_,l,o)}function Vl(t,e){ao(t,"connected",e),e===!1&&gg(t)}function pg(t,e){De(e,(n,s)=>{ao(t,n,s)})}function ao(t,e,n){const s=new X("/.info/"+e),i=we(n);t.infoData_.updateSnapshot(s,i);const r=us(t.infoSyncTree_,s,i);At(t.eventQueue_,s,r)}function _g(t){return t.nextWriteId_++}function mg(t,e,n){const s=Hm(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=we(i).withIndex(e._queryParams.getIndex());Wm(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=us(t.serverSyncTree_,e._path,r);else{const l=ss(t.serverSyncTree_,e);o=iu(t.serverSyncTree_,e._path,r,l)}return At(t.eventQueue_,e._path,o),su(t.serverSyncTree_,e,n,null,!0),r},i=>(co(t,"get for query "+me(e)+" failed: "+i),Promise.reject(new Error(i))))}function gg(t){co(t,"onDisconnectEvents");const e=mu(t),n=Ws();ar(t.onDisconnect_,$(),(i,r)=>{const o=Ym(i,r,t.serverSyncTree_,e);Hc(n,i,o)});let s=[];ar(n,$(),(i,r)=>{s=s.concat(us(t.serverSyncTree_,i,r));const o=Eg(t,i);ho(t,o)}),t.onDisconnect_=Ws(),At(t.eventQueue_,$(),s)}function yg(t){t.persistentConnection_&&t.persistentConnection_.interrupt(cg)}function co(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function gu(t,e,n){return ru(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function uo(t,e=t.transactionQueueTree_){if(e||di(t,e),Rn(e)){const n=vu(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&vg(t,fs(e),n)}else uu(e)&&fi(e,n=>{uo(t,n)})}function vg(t,e,n){const s=n.map(c=>c.currentWriteId),i=gu(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ae(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{co(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(fn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();di(t,lo(t.transactionQueueTree_,e)),uo(t,t.transactionQueueTree_),At(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)as(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Fe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ho(t,e)}},o)}function ho(t,e){const n=yu(t,e),s=fs(n),i=vu(t,n);return Cg(t,i,s),s}function Cg(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ae(n,a.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(fn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=ug)u=!0,h="maxretry",i=i.concat(fn(t.serverSyncTree_,a.currentWriteId,!0));else{const d=gu(t,a.path,o);a.currentInputSnapshot=d;const m=e[l].update(d.val());if(m!==void 0){pu("transaction failed: Data returned ",m,a.path);let C=we(m);typeof m=="object"&&m!=null&&dt(m,".priority")||(C=C.updatePriority(d.getPriority()));const x=a.currentWriteId,M=mu(t),de=Qm(C,d,M);a.currentOutputSnapshotRaw=C,a.currentOutputSnapshotResolved=de,a.currentWriteId=_g(t),o.splice(o.indexOf(x),1),i=i.concat(Mm(t.serverSyncTree_,a.path,de,a.currentWriteId,a.applyLocally)),i=i.concat(fn(t.serverSyncTree_,x,!0))}else u=!0,h="nodata",i=i.concat(fn(t.serverSyncTree_,a.currentWriteId,!0))}At(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}di(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)as(s[l]);uo(t,t.transactionQueueTree_)}function yu(t,e){let n,s=t.transactionQueueTree_;for(n=W(e);n!==null&&Rn(s)===void 0;)s=lo(s,n),e=te(e),n=W(e);return s}function vu(t,e){const n=[];return Cu(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Cu(t,e,n){const s=Rn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);fi(e,i=>{Cu(t,i,n)})}function di(t,e){const n=Rn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,cu(e,n.length>0?n:void 0)}fi(e,s=>{di(t,s)})}function Eg(t,e){const n=fs(yu(t,e)),s=lo(t.transactionQueueTree_,e);return Jm(s,i=>{Mi(t,i)}),Mi(t,s),hu(s,i=>{Mi(t,i)}),n}function Mi(t,e){const n=Rn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(fn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?cu(e,void 0):n.length=r+1,At(t.eventQueue_,fs(e),i);for(let o=0;o<s.length;o++)as(s[o])}}/**
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
 */function bg(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function wg(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const zl=function(t,e){const n=Ig(t),s=n.namespace;n.domain==="firebase.com"&&Qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Op();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new X(n.pathString)}},Ig=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=bg(t.substring(u,h)));const d=wg(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const C=e.indexOf(".");s=e.substring(0,C).toLowerCase(),n=e.substring(C+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class Tg{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class Sg{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Ng{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class fo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return j(this._path)?null:Rc(this._path)}get ref(){return new pt(this._repo,this._path)}get _queryIdentifier(){const e=Rl(this._queryParams),n=Wr(e);return n==="{}"?"default":n}get _queryObject(){return Rl(this._queryParams)}isEqual(e){if(e=oi(e),!(e instanceof fo))return!1;const n=this._repo===e._repo,s=Oc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+g_(this._path)}}class pt extends fo{constructor(e,n){super(e,n,new qr,!1)}get parent(){const e=Pc(this._path);return e===null?null:new pt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class is{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new X(e),s=pr(this.ref,e);return new is(this._node.getChild(n),s,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new is(i,pr(this.ref,s),ue)))}hasChild(e){const n=new X(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xg(t,e){return t=oi(t),t._checkNotDeleted("ref"),e!==void 0?pr(t._root,e):t._root}function pr(t,e){return t=oi(t),W(t._path)===null?sg("child","path",e,!1):_u("child","path",e,!1),new pt(t._repo,ge(t._path,e))}function kg(t){t=oi(t);const e=new Ng(()=>{}),n=new po(e);return mg(t._repo,t,n).then(s=>new is(s,new pt(t._repo,t._path),t._queryParams.getIndex()))}class po{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Tg("value",this,new is(e.snapshotNode,new pt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Sg(this,e,n):null}matches(e){return e instanceof po?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Nm(pt);Pm(pt);/**
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
 */const Rg="FIREBASE_DATABASE_EMULATOR_HOST",_r={};let Ag=!1;function Pg(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zl(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[Rg]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=zl(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new rr(rr.OWNER):new Vp(t.name,t.options,e);ig("Invalid Firebase Database URL",o),j(o.path)||Qt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Dg(l,t,u,new $p(t.name,n));return new Mg(h,t)}function Og(t,e){const n=_r[e];(!n||n[t.key]!==t)&&Qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),yg(t),delete n[t.key]}function Dg(t,e,n,s){let i=_r[e.name];i||(i={},_r[e.name]=i);let r=i[t.toURLString()];return r&&Qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new hg(t,Ag,n,s),i[t.toURLString()]=r,r}class Mg{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new pt(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Og(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qt("Cannot call "+e+" on a deleted database.")}}function Lg(t=mp(),e){return hp(t,"database").getImmediate({identifier:e})}/**
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
 */function Fg(t){xp(pp),Ms(new Yn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Pg(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),gn(dl,pl,t),gn(dl,pl,"esm2017")}ct.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ct.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Fg();let Le=ht({title:"Japanese Jisho",words:!1,search:""}),fe=ht([{name:"Nav",visible:!1},{name:"Japanese Jisho",visible:!0},{name:"Dictionary",visible:!1},{name:"Word lists",visible:!1},{name:"Kana table",visible:!1},{name:"Kanji table",visible:!1},{name:"Settings",visible:!1}]),jg=ht([{kana:"\u3042",romaji:"a"},{kana:"\u3044",romaji:"i"},{kana:"\u3046",romaji:"u"},{kana:"\u3048",romaji:"e"},{kana:"\u304A",romaji:"o"},{kana:"\u304B",romaji:"ka"},{kana:"\u304D",romaji:"ki"},{kana:"\u304F",romaji:"ku"},{kana:"\u3051",romaji:"ke"},{kana:"\u3053",romaji:"ko"},{kana:"\u3055",romaji:"sa"},{kana:"\u3057",romaji:"shi"},{kana:"\u3059",romaji:"su"},{kana:"\u305B",romaji:"se"},{kana:"\u305D",romaji:"so"},{kana:"\u305F",romaji:"ta"},{kana:"\u3061",romaji:"chi"},{kana:"\u3064",romaji:"tsu"},{kana:"\u3066",romaji:"te"},{kana:"\u3068",romaji:"to"},{kana:"\u306A",romaji:"na"},{kana:"\u306B",romaji:"ni"},{kana:"\u306C",romaji:"nu"},{kana:"\u306D",romaji:"ne"},{kana:"\u306E",romaji:"no"},{kana:"\u306F",romaji:"ha"},{kana:"\u3072",romaji:"hi"},{kana:"\u3075",romaji:"fu"},{kana:"\u3078",romaji:"he"},{kana:"\u307B",romaji:"ho"},{kana:"\u307E",romaji:"ma"},{kana:"\u307F",romaji:"mi"},{kana:"\u3080",romaji:"mu"},{kana:"\u3081",romaji:"me"},{kana:"\u3082",romaji:"mo"},{kana:"\u3084",romaji:"ya"},{kana:"\u3086",romaji:"yu"},{kana:"\u3088",romaji:"yo"},{kana:"\u3089",romaji:"ra"},{kana:"\u308A",romaji:"ri"},{kana:"\u308B",romaji:"ru"},{kana:"\u308C",romaji:"re"},{kana:"\u308D",romaji:"ro"},{kana:"\u308F",romaji:"wa"},{kana:"\u3092",romaji:"wo"},{kana:"\u3093",romaji:"n"},{kana:"\u304C",romaji:"ga"},{kana:"\u304E",romaji:"gi"},{kana:"\u3050",romaji:"gu"},{kana:"\u3052",romaji:"ge"},{kana:"\u3054",romaji:"go"},{kana:"\u3056",romaji:"za"},{kana:"\u3058",romaji:"ji"},{kana:"\u305A",romaji:"zu"},{kana:"\u305C",romaji:"ze"},{kana:"\u305E",romaji:"zo"},{kana:"\u3060",romaji:"da"},{kana:"\u3062",romaji:"di"},{kana:"\u3065",romaji:"du"},{kana:"\u3067",romaji:"de"},{kana:"\u3069",romaji:"do"},{kana:"\u3070",romaji:"ba"},{kana:"\u3073",romaji:"bi"},{kana:"\u3076",romaji:"bu"},{kana:"\u3079",romaji:"be"},{kana:"\u307C",romaji:"bo"},{kana:"\u3071",romaji:"pa"},{kana:"\u3074",romaji:"pi"},{kana:"\u3077",romaji:"pu"},{kana:"\u307A",romaji:"pe"},{kana:"\u307D",romaji:"po"}]),Bg=ht([{kana:"\u30A2",romaji:"a"},{kana:"\u30A4",romaji:"i"},{kana:"\u30A6",romaji:"u"},{kana:"\u30A8",romaji:"e"},{kana:"\u30AA",romaji:"o"},{kana:"\u30AB",romaji:"ka"},{kana:"\u30AD",romaji:"ki"},{kana:"\u30AF",romaji:"ku"},{kana:"\u30B1",romaji:"ke"},{kana:"\u30B3",romaji:"ko"},{kana:"\u30B5",romaji:"sa"},{kana:"\u30B7",romaji:"shi"},{kana:"\u30B9",romaji:"su"},{kana:"\u30BB",romaji:"se"},{kana:"\u30BD",romaji:"so"},{kana:"\u30BF",romaji:"ta"},{kana:"\u30C1",romaji:"chi"},{kana:"\u30C4",romaji:"tsu"},{kana:"\u30C6",romaji:"te"},{kana:"\u30C8",romaji:"to"},{kana:"\u30CA",romaji:"na"},{kana:"\u30CB",romaji:"ni"},{kana:"\u30CC",romaji:"nu"},{kana:"\u30CD",romaji:"ne"},{kana:"\u30CE",romaji:"no"},{kana:"\u30CF",romaji:"ha"},{kana:"\u30D2",romaji:"hi"},{kana:"\u30D5",romaji:"fu"},{kana:"\u30D8",romaji:"he"},{kana:"\u30DB",romaji:"ho"},{kana:"\u30DE",romaji:"ma"},{kana:"\u30DF",romaji:"mi"},{kana:"\u30E0",romaji:"mu"},{kana:"\u30E1",romaji:"me"},{kana:"\u30E2",romaji:"mo"},{kana:"\u30E4",romaji:"ya"},{kana:"\u30E6",romaji:"yu"},{kana:"\u30E8",romaji:"yo"},{kana:"\u30E9",romaji:"ra"},{kana:"\u30EA",romaji:"ri"},{kana:"\u30EB",romaji:"ru"},{kana:"\u30EC",romaji:"re"},{kana:"\u30ED",romaji:"ro"},{kana:"\u30EF",romaji:"wa"},{kana:"\u30F2",romaji:"wo"},{kana:"\u30F3",romaji:"n"},{kana:"\u30AC",romaji:"ga"},{kana:"\u30AE",romaji:"gi"},{kana:"\u30B0",romaji:"gu"},{kana:"\u30B2",romaji:"ge"},{kana:"\u30B4",romaji:"go"},{kana:"\u30B6",romaji:"za"},{kana:"\u30B8",romaji:"ji"},{kana:"\u30BA",romaji:"zu"},{kana:"\u30BC",romaji:"ze"},{kana:"\u30BE",romaji:"zo"},{kana:"\u30C0",romaji:"da"},{kana:"\u30C2",romaji:"di"},{kana:"\u30C5",romaji:"du"},{kana:"\u30C7",romaji:"de"},{kana:"\u30C9",romaji:"do"},{kana:"\u30D0",romaji:"ba"},{kana:"\u30D3",romaji:"bi"},{kana:"\u30D6",romaji:"bu"},{kana:"\u30D9",romaji:"be"},{kana:"\u30DC",romaji:"bo"},{kana:"\u30D1",romaji:"pa"},{kana:"\u30D4",romaji:"pi"},{kana:"\u30D7",romaji:"pu"},{kana:"\u30DA",romaji:"pe"},{kana:"\u30DD",romaji:"po"}]);const nn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Wg={key:0,class:"menu"},Hg={class:"menu_options"},Ug={__name:"Nav",setup(t){function e(n){for(let s=1;s<fe.length-1;s++)fe[s].visible=!1;Le.words=!1,fe[n].visible=!0,Le.title=fe[n].name,fe[0].visible=!fe[0].visible}return(n,s)=>(V(),Ba(Lr,null,{default:va(()=>[he(fe)[0].visible===!0?(V(),q("div",Wg,[z("div",Hg,[z("span",{onClick:s[0]||(s[0]=i=>e(1))},"Home"),z("span",{onClick:s[1]||(s[1]=i=>e(2))},"Dictionary"),z("span",{onClick:s[2]||(s[2]=i=>e(3))},"Word lists"),z("span",{onClick:s[3]||(s[3]=i=>e(4))},"Kana table"),z("span",{onClick:s[4]||(s[4]=i=>e(5))},"Kanji table"),z("span",{onClick:s[5]||(s[5]=i=>e(6))},"Settings")])])):$e("",!0)]),_:1}))}},$g=nn(Ug,[["__scopeId","data-v-96d3b4fc"]]);const Vg={__name:"Home",setup(t){function e(n){for(let s=1;s<fe.length-1;s++)fe[s].visible=!1;fe[n].visible=!0,Le.title=fe[n].name}return(n,s)=>(V(),q(pe,null,[z("div",{class:"menu-item",onClick:s[0]||(s[0]=i=>e(2))},"Dictionary"),z("div",{class:"menu-item",onClick:s[1]||(s[1]=i=>e(3))},"Word lists"),z("div",{class:"menu-item",onClick:s[2]||(s[2]=i=>e(4))},"Kana table"),z("div",{class:"menu-item",onClick:s[3]||(s[3]=i=>e(5))},"Kanji table")],64))}},zg=nn(Vg,[["__scopeId","data-v-ad7bfc18"]]);const Kg=["onKeydown"],qg={__name:"Dictionary",setup(t){let e=ht({val:""});function n(){Le.search=e.val,console.log(Le.search),Le.words=!0}function s(){Le.words=!1}return(i,r)=>$h((V(),q("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=o=>he(e).val=o),onKeydown:[tl(n,["enter"]),tl(s,["delete"])],onClick:s},null,40,Kg)),[[Qf,he(e).val]])}},Gg=nn(qg,[["__scopeId","data-v-87743fcb"]]);const Yg={class:"grid"},Qg={class:"kana"},Xg={__name:"Kana",setup(t){let e=ht({switch:!0});return(n,s)=>(V(),q(pe,null,[z("div",{class:"kana-type",onClick:s[0]||(s[0]=i=>he(e).switch=!he(e).switch)},Vt(he(e).switch?"Hiragana":"Katakana"),1),z("div",Yg,[(V(!0),q(pe,null,cn(he(e).switch?he(jg):he(Bg),i=>(V(),q("div",Qg,[z("span",null,Vt(i.kana),1)]))),256))])],64))}},Jg=nn(Xg,[["__scopeId","data-v-ff8b8664"]]);const Zg={class:"word"},ey={class:"kanji"},ty={key:0},ny={class:"kana"},sy={key:0},iy={class:"meaning"},ry={__name:"Word",setup(t){let e=[];for(let n=0;n<Ts.words.length;n++){let s=0;Ts.words[n].sense[0].gloss[0].text===Le.search&&(e[s]=Ts.words[n],s++)}return console.log(e),(n,s)=>(V(!0),q(pe,null,cn(he(e),i=>(V(),q("div",Zg,[z("div",ey,[(V(!0),q(pe,null,cn(i.kanji,(r,o)=>(V(),q("div",null,[o===0?(V(),q("span",ty,Vt(r.text),1)):$e("",!0)]))),256))]),z("div",ny,[(V(!0),q(pe,null,cn(i.kana,(r,o)=>(V(),q("div",null,[o===0?(V(),q("span",sy,Vt(r.text),1)):$e("",!0)]))),256))]),z("div",iy,[(V(!0),q(pe,null,cn(i.sense,r=>(V(),q("div",null,[(V(!0),q(pe,null,cn(r.gloss,o=>(V(),q("div",null,[z("span",null,Vt(o.text),1)]))),256))]))),256))])]))),256))}},oy=nn(ry,[["__scopeId","data-v-98c5a44a"]]);const _o=t=>(Eh("data-v-0c1015f6"),t=t(),bh(),t),ly=_o(()=>z("span",null,"search",-1)),ay=_o(()=>z("span",null,"settings",-1)),cy=_o(()=>z("div",{class:"ghost-tab"},null,-1)),uy={__name:"Tabs",setup(t){function e(){Le.menu_visible=!0,Le.words1=!1,Le.words2=!1}return(n,s)=>(V(),q(pe,null,[z("div",{class:"tabs"},[z("span",{onClick:e},"home"),ly,ay]),cy],64))}},hy=nn(uy,[["__scopeId","data-v-0c1015f6"]]);const fy={key:0},dy={class:"header"},py={class:"grid"},_y={key:0},my={key:1},gy={key:2},yy={key:3},vy={key:4},Cy={key:5},Ey={key:6},by={__name:"App",setup(t){function e(){fe[0].visible=!fe[0].visible}return(n,s)=>(V(),q(pe,null,[he(fe)[0].visible?(V(),q("div",fy,[_e($g)])):$e("",!0),z("div",dy,[z("span",{class:"burger",onClick:e},Vt(he(fe)[0].visible?"\u2715":"\u20DD"),1),z("span",null,Vt(he(Le).title),1)]),z("div",py,[he(fe)[1].visible?(V(),q("div",_y,[_e(zg)])):$e("",!0),he(fe)[2].visible?(V(),q("div",my,[_e(Gg)])):$e("",!0),he(fe)[3].visible?(V(),q("div",gy)):$e("",!0),he(fe)[4].visible?(V(),q("div",yy,[_e(Jg)])):$e("",!0),he(fe)[5].visible?(V(),q("div",vy)):$e("",!0),he(fe)[6].visible?(V(),q("div",Cy)):$e("",!0),he(Le).words?(V(),q("div",Ey,[_e(oy)])):$e("",!0)]),_e(hy)],64))}},wy=nn(by,[["__scopeId","data-v-dd204bf8"]]),Iy={apiKey:"AIzaSyC_nmckRuqsvaOyYwu-RwP82q8f5vFpqLE",authDomain:"japanesejisho.firebaseapp.com",databaseURL:"https://japanesejisho-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"japanesejisho",storageBucket:"japanesejisho.appspot.com",messagingSenderId:"255107822451",appId:"1:255107822451:web:5f719e8be86c97d0478b06"};_p(Iy);let Ts;kg(xg(Lg())).then(t=>{t.exists()&&(Ts=t.val(),console.log(t.val()))}).catch(t=>{console.error(t)});ed(wy).mount("#app");
