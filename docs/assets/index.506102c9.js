(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Et(a,e){const n=Object.create(null),i=a.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ok="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tk=Et(ok);function vm(a){return!!a||a===""}function Vr(a){if(re(a)){const e={};for(let n=0;n<a.length;n++){const i=a[n],r=Ke(i)?mk(i):Vr(i);if(r)for(const o in r)e[o]=r[o]}return e}else{if(Ke(a))return a;if(ze(a))return a}}const sk=/;(?![^(]*\))/g,dk=/:(.+)/;function mk(a){const e={};return a.split(sk).forEach(n=>{if(n){const i=n.split(dk);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function It(a){let e="";if(Ke(a))e=a;else if(re(a))for(let n=0;n<a.length;n++){const i=It(a[n]);i&&(e+=i+" ")}else if(ze(a))for(const n in a)a[n]&&(e+=n+" ");return e.trim()}const U=a=>Ke(a)?a:a==null?"":re(a)||ze(a)&&(a.toString===Cm||!me(a.toString))?JSON.stringify(a,wm,2):String(a),wm=(a,e)=>e&&e.__v_isRef?wm(a,e.value):Qn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:xm(e)?{[`Set(${e.size})`]:[...e.values()]}:ze(e)&&!re(e)&&!Em(e)?String(e):e,Te={},Jn=[],Sa=()=>{},uk=()=>!1,lk=/^on[^a-z]/,Yr=a=>lk.test(a),Tt=a=>a.startsWith("onUpdate:"),Ge=Object.assign,St=(a,e)=>{const n=a.indexOf(e);n>-1&&a.splice(n,1)},_k=Object.prototype.hasOwnProperty,ye=(a,e)=>_k.call(a,e),re=Array.isArray,Qn=a=>Gr(a)==="[object Map]",xm=a=>Gr(a)==="[object Set]",me=a=>typeof a=="function",Ke=a=>typeof a=="string",At=a=>typeof a=="symbol",ze=a=>a!==null&&typeof a=="object",Nt=a=>ze(a)&&me(a.then)&&me(a.catch),Cm=Object.prototype.toString,Gr=a=>Cm.call(a),kk=a=>Gr(a).slice(8,-1),Em=a=>Gr(a)==="[object Object]",Rt=a=>Ke(a)&&a!=="NaN"&&a[0]!=="-"&&""+parseInt(a,10)===a,yr=Et(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jr=a=>{const e=Object.create(null);return n=>e[n]||(e[n]=a(n))},ck=/-(\w)/g,ii=Jr(a=>a.replace(ck,(e,n)=>n?n.toUpperCase():"")),pk=/\B([A-Z])/g,Bn=Jr(a=>a.replace(pk,"-$1").toLowerCase()),Im=Jr(a=>a.charAt(0).toUpperCase()+a.slice(1)),xo=Jr(a=>a?`on${Im(a)}`:""),vr=(a,e)=>!Object.is(a,e),fr=(a,e)=>{for(let n=0;n<a.length;n++)a[n](e)},wr=(a,e,n)=>{Object.defineProperty(a,e,{configurable:!0,enumerable:!1,value:n})},Di=a=>{const e=parseFloat(a);return isNaN(e)?a:e};let Bs;const hk=()=>Bs||(Bs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Da;class gk{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Da&&(this.parent=Da,this.index=(Da.scopes||(Da.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Da;try{return Da=this,e()}finally{Da=n}}}on(){Da=this}off(){Da=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function yk(a,e=Da){e&&e.active&&e.effects.push(a)}const zt=a=>{const e=new Set(a);return e.w=0,e.n=0,e},Tm=a=>(a.w&un)>0,Sm=a=>(a.n&un)>0,fk=({deps:a})=>{if(a.length)for(let e=0;e<a.length;e++)a[e].w|=un},jk=a=>{const{deps:e}=a;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Tm(r)&&!Sm(r)?r.delete(a):e[n++]=r,r.w&=~un,r.n&=~un}e.length=n}},Ko=new WeakMap;let Ii=0,un=1;const Vo=30;let wa;const An=Symbol(""),Yo=Symbol("");class Dt{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,yk(this,i)}run(){if(!this.active)return this.fn();let e=wa,n=rn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wa,wa=this,rn=!0,un=1<<++Ii,Ii<=Vo?fk(this):qs(this),this.fn()}finally{Ii<=Vo&&jk(this),un=1<<--Ii,wa=this.parent,rn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wa===this?this.deferStop=!0:this.active&&(qs(this),this.onStop&&this.onStop(),this.active=!1)}}function qs(a){const{deps:e}=a;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(a);e.length=0}}let rn=!0;const Am=[];function mi(){Am.push(rn),rn=!1}function ui(){const a=Am.pop();rn=a===void 0?!0:a}function ka(a,e,n){if(rn&&wa){let i=Ko.get(a);i||Ko.set(a,i=new Map);let r=i.get(n);r||i.set(n,r=zt()),Nm(r)}}function Nm(a,e){let n=!1;Ii<=Vo?Sm(a)||(a.n|=un,n=!Tm(a)):n=!a.has(wa),n&&(a.add(wa),wa.deps.push(a))}function Ka(a,e,n,i,r,o){const t=Ko.get(a);if(!t)return;let s=[];if(e==="clear")s=[...t.values()];else if(n==="length"&&re(a))t.forEach((d,m)=>{(m==="length"||m>=i)&&s.push(d)});else switch(n!==void 0&&s.push(t.get(n)),e){case"add":re(a)?Rt(n)&&s.push(t.get("length")):(s.push(t.get(An)),Qn(a)&&s.push(t.get(Yo)));break;case"delete":re(a)||(s.push(t.get(An)),Qn(a)&&s.push(t.get(Yo)));break;case"set":Qn(a)&&s.push(t.get(An));break}if(s.length===1)s[0]&&Go(s[0]);else{const d=[];for(const m of s)m&&d.push(...m);Go(zt(d))}}function Go(a,e){const n=re(a)?a:[...a];for(const i of n)i.computed&&$s(i);for(const i of n)i.computed||$s(i)}function $s(a,e){(a!==wa||a.allowRecurse)&&(a.scheduler?a.scheduler():a.run())}const bk=Et("__proto__,__v_isRef,__isVue"),Rm=new Set(Object.getOwnPropertyNames(Symbol).filter(a=>a!=="arguments"&&a!=="caller").map(a=>Symbol[a]).filter(At)),vk=Pt(),wk=Pt(!1,!0),xk=Pt(!0),Hs=Ck();function Ck(){const a={};return["includes","indexOf","lastIndexOf"].forEach(e=>{a[e]=function(...n){const i=Ce(this);for(let o=0,t=this.length;o<t;o++)ka(i,"get",o+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(Ce)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{a[e]=function(...n){mi();const i=Ce(this)[e].apply(this,n);return ui(),i}}),a}function Pt(a=!1,e=!1){return function(i,r,o){if(r==="__v_isReactive")return!a;if(r==="__v_isReadonly")return a;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&o===(a?e?qk:Mm:e?Om:Pm).get(i))return i;const t=re(i);if(!a&&t&&ye(Hs,r))return Reflect.get(Hs,r,o);const s=Reflect.get(i,r,o);return(At(r)?Rm.has(r):bk(r))||(a||ka(i,"get",r),e)?s:ia(s)?t&&Rt(r)?s:s.value:ze(s)?a?Fm(s):Na(s):s}}const Ek=zm(),Ik=zm(!0);function zm(a=!1){return function(n,i,r,o){let t=n[i];if(Pi(t)&&ia(t)&&!ia(r))return!1;if(!a&&(!Jo(r)&&!Pi(r)&&(t=Ce(t),r=Ce(r)),!re(n)&&ia(t)&&!ia(r)))return t.value=r,!0;const s=re(n)&&Rt(i)?Number(i)<n.length:ye(n,i),d=Reflect.set(n,i,r,o);return n===Ce(o)&&(s?vr(r,t)&&Ka(n,"set",i,r):Ka(n,"add",i,r)),d}}function Tk(a,e){const n=ye(a,e);a[e];const i=Reflect.deleteProperty(a,e);return i&&n&&Ka(a,"delete",e,void 0),i}function Sk(a,e){const n=Reflect.has(a,e);return(!At(e)||!Rm.has(e))&&ka(a,"has",e),n}function Ak(a){return ka(a,"iterate",re(a)?"length":An),Reflect.ownKeys(a)}const Dm={get:vk,set:Ek,deleteProperty:Tk,has:Sk,ownKeys:Ak},Nk={get:xk,set(a,e){return!0},deleteProperty(a,e){return!0}},Rk=Ge({},Dm,{get:wk,set:Ik}),Ot=a=>a,Qr=a=>Reflect.getPrototypeOf(a);function dr(a,e,n=!1,i=!1){a=a.__v_raw;const r=Ce(a),o=Ce(e);n||(e!==o&&ka(r,"get",e),ka(r,"get",o));const{has:t}=Qr(r),s=i?Ot:n?Bt:Lt;if(t.call(r,e))return s(a.get(e));if(t.call(r,o))return s(a.get(o));a!==r&&a.get(e)}function mr(a,e=!1){const n=this.__v_raw,i=Ce(n),r=Ce(a);return e||(a!==r&&ka(i,"has",a),ka(i,"has",r)),a===r?n.has(a):n.has(a)||n.has(r)}function ur(a,e=!1){return a=a.__v_raw,!e&&ka(Ce(a),"iterate",An),Reflect.get(a,"size",a)}function Ws(a){a=Ce(a);const e=Ce(this);return Qr(e).has.call(e,a)||(e.add(a),Ka(e,"add",a,a)),this}function Us(a,e){e=Ce(e);const n=Ce(this),{has:i,get:r}=Qr(n);let o=i.call(n,a);o||(a=Ce(a),o=i.call(n,a));const t=r.call(n,a);return n.set(a,e),o?vr(e,t)&&Ka(n,"set",a,e):Ka(n,"add",a,e),this}function Ks(a){const e=Ce(this),{has:n,get:i}=Qr(e);let r=n.call(e,a);r||(a=Ce(a),r=n.call(e,a)),i&&i.call(e,a);const o=e.delete(a);return r&&Ka(e,"delete",a,void 0),o}function Vs(){const a=Ce(this),e=a.size!==0,n=a.clear();return e&&Ka(a,"clear",void 0,void 0),n}function lr(a,e){return function(i,r){const o=this,t=o.__v_raw,s=Ce(t),d=e?Ot:a?Bt:Lt;return!a&&ka(s,"iterate",An),t.forEach((m,k)=>i.call(r,d(m),d(k),o))}}function _r(a,e,n){return function(...i){const r=this.__v_raw,o=Ce(r),t=Qn(o),s=a==="entries"||a===Symbol.iterator&&t,d=a==="keys"&&t,m=r[a](...i),k=n?Ot:e?Bt:Lt;return!e&&ka(o,"iterate",d?Yo:An),{next(){const{value:u,done:c}=m.next();return c?{value:u,done:c}:{value:s?[k(u[0]),k(u[1])]:k(u),done:c}},[Symbol.iterator](){return this}}}}function Za(a){return function(...e){return a==="delete"?!1:this}}function zk(){const a={get(o){return dr(this,o)},get size(){return ur(this)},has:mr,add:Ws,set:Us,delete:Ks,clear:Vs,forEach:lr(!1,!1)},e={get(o){return dr(this,o,!1,!0)},get size(){return ur(this)},has:mr,add:Ws,set:Us,delete:Ks,clear:Vs,forEach:lr(!1,!0)},n={get(o){return dr(this,o,!0)},get size(){return ur(this,!0)},has(o){return mr.call(this,o,!0)},add:Za("add"),set:Za("set"),delete:Za("delete"),clear:Za("clear"),forEach:lr(!0,!1)},i={get(o){return dr(this,o,!0,!0)},get size(){return ur(this,!0)},has(o){return mr.call(this,o,!0)},add:Za("add"),set:Za("set"),delete:Za("delete"),clear:Za("clear"),forEach:lr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{a[o]=_r(o,!1,!1),n[o]=_r(o,!0,!1),e[o]=_r(o,!1,!0),i[o]=_r(o,!0,!0)}),[a,n,e,i]}const[Dk,Pk,Ok,Mk]=zk();function Mt(a,e){const n=e?a?Mk:Ok:a?Pk:Dk;return(i,r,o)=>r==="__v_isReactive"?!a:r==="__v_isReadonly"?a:r==="__v_raw"?i:Reflect.get(ye(n,r)&&r in i?n:i,r,o)}const Fk={get:Mt(!1,!1)},Lk={get:Mt(!1,!0)},Bk={get:Mt(!0,!1)},Pm=new WeakMap,Om=new WeakMap,Mm=new WeakMap,qk=new WeakMap;function $k(a){switch(a){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hk(a){return a.__v_skip||!Object.isExtensible(a)?0:$k(kk(a))}function Na(a){return Pi(a)?a:Ft(a,!1,Dm,Fk,Pm)}function Wk(a){return Ft(a,!1,Rk,Lk,Om)}function Fm(a){return Ft(a,!0,Nk,Bk,Mm)}function Ft(a,e,n,i,r){if(!ze(a)||a.__v_raw&&!(e&&a.__v_isReactive))return a;const o=r.get(a);if(o)return o;const t=Hk(a);if(t===0)return a;const s=new Proxy(a,t===2?i:n);return r.set(a,s),s}function Xn(a){return Pi(a)?Xn(a.__v_raw):!!(a&&a.__v_isReactive)}function Pi(a){return!!(a&&a.__v_isReadonly)}function Jo(a){return!!(a&&a.__v_isShallow)}function Lm(a){return Xn(a)||Pi(a)}function Ce(a){const e=a&&a.__v_raw;return e?Ce(e):a}function Bm(a){return wr(a,"__v_skip",!0),a}const Lt=a=>ze(a)?Na(a):a,Bt=a=>ze(a)?Fm(a):a;function Uk(a){rn&&wa&&(a=Ce(a),Nm(a.dep||(a.dep=zt())))}function Kk(a,e){a=Ce(a),a.dep&&Go(a.dep)}function ia(a){return!!(a&&a.__v_isRef===!0)}function M(a){return ia(a)?a.value:a}const Vk={get:(a,e,n)=>M(Reflect.get(a,e,n)),set:(a,e,n,i)=>{const r=a[e];return ia(r)&&!ia(n)?(r.value=n,!0):Reflect.set(a,e,n,i)}};function qm(a){return Xn(a)?a:new Proxy(a,Vk)}var $m;class Yk{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[$m]=!1,this._dirty=!0,this.effect=new Dt(e,()=>{this._dirty||(this._dirty=!0,Kk(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ce(this);return Uk(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}$m="__v_isReadonly";function Gk(a,e,n=!1){let i,r;const o=me(a);return o?(i=a,r=Sa):(i=a.get,r=a.set),new Yk(i,r,o||!r,n)}function on(a,e,n,i){let r;try{r=i?a(...i):a()}catch(o){Gi(o,e,n)}return r}function ga(a,e,n,i){if(me(a)){const o=on(a,e,n,i);return o&&Nt(o)&&o.catch(t=>{Gi(t,e,n)}),o}const r=[];for(let o=0;o<a.length;o++)r.push(ga(a[o],e,n,i));return r}function Gi(a,e,n,i=!0){const r=e?e.vnode:null;if(e){let o=e.parent;const t=e.proxy,s=n;for(;o;){const m=o.ec;if(m){for(let k=0;k<m.length;k++)if(m[k](a,t,s)===!1)return}o=o.parent}const d=e.appContext.config.errorHandler;if(d){on(d,null,10,[a,t,s]);return}}Jk(a,n,r,i)}function Jk(a,e,n,i=!0){console.error(a)}let xr=!1,Qo=!1;const Qe=[];let Pa=0;const Zn=[];let $a=null,Cn=0;const Hm=Promise.resolve();let qt=null;function Qk(a){const e=qt||Hm;return a?e.then(this?a.bind(this):a):e}function Xk(a){let e=Pa+1,n=Qe.length;for(;e<n;){const i=e+n>>>1;Oi(Qe[i])<a?e=i+1:n=i}return e}function $t(a){(!Qe.length||!Qe.includes(a,xr&&a.allowRecurse?Pa+1:Pa))&&(a.id==null?Qe.push(a):Qe.splice(Xk(a.id),0,a),Wm())}function Wm(){!xr&&!Qo&&(Qo=!0,qt=Hm.then(Vm))}function Zk(a){const e=Qe.indexOf(a);e>Pa&&Qe.splice(e,1)}function Um(a){re(a)?Zn.push(...a):(!$a||!$a.includes(a,a.allowRecurse?Cn+1:Cn))&&Zn.push(a),Wm()}function Ys(a,e=Pa){for(;e<Qe.length;e++){const n=Qe[e];n&&n.pre&&(Qe.splice(e,1),e--,n())}}function Km(a){if(Zn.length){const e=[...new Set(Zn)];if(Zn.length=0,$a){$a.push(...e);return}for($a=e,$a.sort((n,i)=>Oi(n)-Oi(i)),Cn=0;Cn<$a.length;Cn++)$a[Cn]();$a=null,Cn=0}}const Oi=a=>a.id==null?1/0:a.id,ec=(a,e)=>{const n=Oi(a)-Oi(e);if(n===0){if(a.pre&&!e.pre)return-1;if(e.pre&&!a.pre)return 1}return n};function Vm(a){Qo=!1,xr=!0,Qe.sort(ec);const e=Sa;try{for(Pa=0;Pa<Qe.length;Pa++){const n=Qe[Pa];n&&n.active!==!1&&on(n,null,14)}}finally{Pa=0,Qe.length=0,Km(),xr=!1,qt=null,(Qe.length||Zn.length)&&Vm()}}function ac(a,e,...n){if(a.isUnmounted)return;const i=a.vnode.props||Te;let r=n;const o=e.startsWith("update:"),t=o&&e.slice(7);if(t&&t in i){const k=`${t==="modelValue"?"model":t}Modifiers`,{number:u,trim:c}=i[k]||Te;c&&(r=n.map(b=>b.trim())),u&&(r=n.map(Di))}let s,d=i[s=xo(e)]||i[s=xo(ii(e))];!d&&o&&(d=i[s=xo(Bn(e))]),d&&ga(d,a,6,r);const m=i[s+"Once"];if(m){if(!a.emitted)a.emitted={};else if(a.emitted[s])return;a.emitted[s]=!0,ga(m,a,6,r)}}function Ym(a,e,n=!1){const i=e.emitsCache,r=i.get(a);if(r!==void 0)return r;const o=a.emits;let t={},s=!1;if(!me(a)){const d=m=>{const k=Ym(m,e,!0);k&&(s=!0,Ge(t,k))};!n&&e.mixins.length&&e.mixins.forEach(d),a.extends&&d(a.extends),a.mixins&&a.mixins.forEach(d)}return!o&&!s?(ze(a)&&i.set(a,null),null):(re(o)?o.forEach(d=>t[d]=null):Ge(t,o),ze(a)&&i.set(a,t),t)}function Xr(a,e){return!a||!Yr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ye(a,e[0].toLowerCase()+e.slice(1))||ye(a,Bn(e))||ye(a,e))}let Ca=null,Zr=null;function Cr(a){const e=Ca;return Ca=a,Zr=a&&a.type.__scopeId||null,e}function eo(a){Zr=a}function ao(){Zr=null}function Er(a,e=Ca,n){if(!e||a._n)return a;const i=(...r)=>{i._d&&od(-1);const o=Cr(e),t=a(...r);return Cr(o),i._d&&od(1),t};return i._n=!0,i._c=!0,i._d=!0,i}function Co(a){const{type:e,vnode:n,proxy:i,withProxy:r,props:o,propsOptions:[t],slots:s,attrs:d,emit:m,render:k,renderCache:u,data:c,setupState:b,ctx:w,inheritAttrs:B}=a;let L,G;const q=Cr(a);try{if(n.shapeFlag&4){const te=r||i;L=va(k.call(te,te,u,o,b,c,w)),G=d}else{const te=e;L=va(te.length>1?te(o,{attrs:d,slots:s,emit:m}):te(o,null)),G=e.props?d:ic(d)}}catch(te){Ti.length=0,Gi(te,a,1),L=De(ua)}let Y=L;if(G&&B!==!1){const te=Object.keys(G),{shapeFlag:I}=Y;te.length&&I&7&&(t&&te.some(Tt)&&(G=rc(G,t)),Y=ln(Y,G))}return n.dirs&&(Y=ln(Y),Y.dirs=Y.dirs?Y.dirs.concat(n.dirs):n.dirs),n.transition&&(Y.transition=n.transition),L=Y,Cr(q),L}function nc(a){let e;for(let n=0;n<a.length;n++){const i=a[n];if(Sr(i)){if(i.type!==ua||i.children==="v-if"){if(e)return;e=i}}else return}return e}const ic=a=>{let e;for(const n in a)(n==="class"||n==="style"||Yr(n))&&((e||(e={}))[n]=a[n]);return e},rc=(a,e)=>{const n={};for(const i in a)(!Tt(i)||!(i.slice(9)in e))&&(n[i]=a[i]);return n};function oc(a,e,n){const{props:i,children:r,component:o}=a,{props:t,children:s,patchFlag:d}=e,m=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&d>=0){if(d&1024)return!0;if(d&16)return i?Gs(i,t,m):!!t;if(d&8){const k=e.dynamicProps;for(let u=0;u<k.length;u++){const c=k[u];if(t[c]!==i[c]&&!Xr(m,c))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:i===t?!1:i?t?Gs(i,t,m):!0:!!t;return!1}function Gs(a,e,n){const i=Object.keys(e);if(i.length!==Object.keys(a).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(e[o]!==a[o]&&!Xr(n,o))return!0}return!1}function Ht({vnode:a,parent:e},n){for(;e&&e.subTree===a;)(a=e.vnode).el=n,e=e.parent}const tc=a=>a.__isSuspense,sc={name:"Suspense",__isSuspense:!0,process(a,e,n,i,r,o,t,s,d,m){a==null?mc(e,n,i,r,o,t,s,d,m):uc(a,e,n,i,r,t,s,d,m)},hydrate:lc,create:Wt,normalize:_c},dc=sc;function Mi(a,e){const n=a.props&&a.props[e];me(n)&&n()}function mc(a,e,n,i,r,o,t,s,d){const{p:m,o:{createElement:k}}=d,u=k("div"),c=a.suspense=Wt(a,r,i,e,u,n,o,t,s,d);m(null,c.pendingBranch=a.ssContent,u,null,i,c,o,t),c.deps>0?(Mi(a,"onPending"),Mi(a,"onFallback"),m(null,a.ssFallback,e,n,i,null,o,t),ei(c,a.ssFallback)):c.resolve()}function uc(a,e,n,i,r,o,t,s,{p:d,um:m,o:{createElement:k}}){const u=e.suspense=a.suspense;u.vnode=e,e.el=a.el;const c=e.ssContent,b=e.ssFallback,{activeBranch:w,pendingBranch:B,isInFallback:L,isHydrating:G}=u;if(B)u.pendingBranch=c,Oa(c,B)?(d(B,c,u.hiddenContainer,null,r,u,o,t,s),u.deps<=0?u.resolve():L&&(d(w,b,n,i,r,null,o,t,s),ei(u,b))):(u.pendingId++,G?(u.isHydrating=!1,u.activeBranch=B):m(B,r,u),u.deps=0,u.effects.length=0,u.hiddenContainer=k("div"),L?(d(null,c,u.hiddenContainer,null,r,u,o,t,s),u.deps<=0?u.resolve():(d(w,b,n,i,r,null,o,t,s),ei(u,b))):w&&Oa(c,w)?(d(w,c,n,i,r,u,o,t,s),u.resolve(!0)):(d(null,c,u.hiddenContainer,null,r,u,o,t,s),u.deps<=0&&u.resolve()));else if(w&&Oa(c,w))d(w,c,n,i,r,u,o,t,s),ei(u,c);else if(Mi(e,"onPending"),u.pendingBranch=c,u.pendingId++,d(null,c,u.hiddenContainer,null,r,u,o,t,s),u.deps<=0)u.resolve();else{const{timeout:q,pendingId:Y}=u;q>0?setTimeout(()=>{u.pendingId===Y&&u.fallback(b)},q):q===0&&u.fallback(b)}}function Wt(a,e,n,i,r,o,t,s,d,m,k=!1){const{p:u,m:c,um:b,n:w,o:{parentNode:B,remove:L}}=m,G=Di(a.props&&a.props.timeout),q={vnode:a,parent:e,parentComponent:n,isSVG:t,container:i,hiddenContainer:r,anchor:o,deps:0,pendingId:0,timeout:typeof G=="number"?G:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:k,isUnmounted:!1,effects:[],resolve(Y=!1){const{vnode:te,activeBranch:I,pendingBranch:Z,pendingId:X,effects:H,parentComponent:ae,container:se}=q;if(q.isHydrating)q.isHydrating=!1;else if(!Y){const pe=I&&Z.transition&&Z.transition.mode==="out-in";pe&&(I.transition.afterLeave=()=>{X===q.pendingId&&c(Z,se,Oe,0)});let{anchor:Oe}=q;I&&(Oe=w(I),b(I,ae,q,!0)),pe||c(Z,se,Oe,0)}ei(q,Z),q.pendingBranch=null,q.isInFallback=!1;let ue=q.parent,W=!1;for(;ue;){if(ue.pendingBranch){ue.effects.push(...H),W=!0;break}ue=ue.parent}W||Um(H),q.effects=[],Mi(te,"onResolve")},fallback(Y){if(!q.pendingBranch)return;const{vnode:te,activeBranch:I,parentComponent:Z,container:X,isSVG:H}=q;Mi(te,"onFallback");const ae=w(I),se=()=>{!q.isInFallback||(u(null,Y,X,ae,Z,null,H,s,d),ei(q,Y))},ue=Y.transition&&Y.transition.mode==="out-in";ue&&(I.transition.afterLeave=se),q.isInFallback=!0,b(I,Z,null,!0),ue||se()},move(Y,te,I){q.activeBranch&&c(q.activeBranch,Y,te,I),q.container=Y},next(){return q.activeBranch&&w(q.activeBranch)},registerDep(Y,te){const I=!!q.pendingBranch;I&&q.deps++;const Z=Y.vnode.el;Y.asyncDep.catch(X=>{Gi(X,Y,0)}).then(X=>{if(Y.isUnmounted||q.isUnmounted||q.pendingId!==Y.suspenseId)return;Y.asyncResolved=!0;const{vnode:H}=Y;ot(Y,X,!1),Z&&(H.el=Z);const ae=!Z&&Y.subTree.el;te(Y,H,B(Z||Y.subTree.el),Z?null:w(Y.subTree),q,t,d),ae&&L(ae),Ht(Y,H.el),I&&--q.deps===0&&q.resolve()})},unmount(Y,te){q.isUnmounted=!0,q.activeBranch&&b(q.activeBranch,n,Y,te),q.pendingBranch&&b(q.pendingBranch,n,Y,te)}};return q}function lc(a,e,n,i,r,o,t,s,d){const m=e.suspense=Wt(e,i,n,a.parentNode,document.createElement("div"),null,r,o,t,s,!0),k=d(a,m.pendingBranch=e.ssContent,n,m,o,t);return m.deps===0&&m.resolve(),k}function _c(a){const{shapeFlag:e,children:n}=a,i=e&32;a.ssContent=Js(i?n.default:n),a.ssFallback=i?Js(n.fallback):De(ua)}function Js(a){let e;if(me(a)){const n=ri&&a._c;n&&(a._d=!1,oe()),a=a(),n&&(a._d=!0,e=ha,ku())}return re(a)&&(a=nc(a)),a=va(a),e&&!a.dynamicChildren&&(a.dynamicChildren=e.filter(n=>n!==a)),a}function kc(a,e){e&&e.pendingBranch?re(a)?e.effects.push(...a):e.effects.push(a):Um(a)}function ei(a,e){a.activeBranch=e;const{vnode:n,parentComponent:i}=a,r=n.el=e.el;i&&i.subTree===n&&(i.vnode.el=r,Ht(i,r))}function cc(a,e){if(Ye){let n=Ye.provides;const i=Ye.parent&&Ye.parent.provides;i===n&&(n=Ye.provides=Object.create(i)),n[a]=e}}function Eo(a,e,n=!1){const i=Ye||Ca;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&a in r)return r[a];if(arguments.length>1)return n&&me(e)?e.call(i.proxy):e}}const Qs={};function Io(a,e,n){return Gm(a,e,n)}function Gm(a,e,{immediate:n,deep:i,flush:r,onTrack:o,onTrigger:t}=Te){const s=Ye;let d,m=!1,k=!1;if(ia(a)?(d=()=>a.value,m=Jo(a)):Xn(a)?(d=()=>a,i=!0):re(a)?(k=!0,m=a.some(G=>Xn(G)||Jo(G)),d=()=>a.map(G=>{if(ia(G))return G.value;if(Xn(G))return In(G);if(me(G))return on(G,s,2)})):me(a)?e?d=()=>on(a,s,2):d=()=>{if(!(s&&s.isUnmounted))return u&&u(),ga(a,s,3,[c])}:d=Sa,e&&i){const G=d;d=()=>In(G())}let u,c=G=>{u=L.onStop=()=>{on(G,s,4)}};if(Fi)return c=Sa,e?n&&ga(e,s,3,[d(),k?[]:void 0,c]):d(),Sa;let b=k?[]:Qs;const w=()=>{if(!!L.active)if(e){const G=L.run();(i||m||(k?G.some((q,Y)=>vr(q,b[Y])):vr(G,b)))&&(u&&u(),ga(e,s,3,[G,b===Qs?void 0:b,c]),b=G)}else L.run()};w.allowRecurse=!!e;let B;r==="sync"?B=w:r==="post"?B=()=>sa(w,s&&s.suspense):(w.pre=!0,s&&(w.id=s.uid),B=()=>$t(w));const L=new Dt(d,B);return e?n?w():b=L.run():r==="post"?sa(L.run.bind(L),s&&s.suspense):L.run(),()=>{L.stop(),s&&s.scope&&St(s.scope.effects,L)}}function pc(a,e,n){const i=this.proxy,r=Ke(a)?a.includes(".")?Jm(i,a):()=>i[a]:a.bind(i,i);let o;me(e)?o=e:(o=e.handler,n=e);const t=Ye;_n(this);const s=Gm(r,o.bind(i),n);return t?_n(t):tn(),s}function Jm(a,e){const n=e.split(".");return()=>{let i=a;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function In(a,e){if(!ze(a)||a.__v_skip||(e=e||new Set,e.has(a)))return a;if(e.add(a),ia(a))In(a.value,e);else if(re(a))for(let n=0;n<a.length;n++)In(a[n],e);else if(xm(a)||Qn(a))a.forEach(n=>{In(n,e)});else if(Em(a))for(const n in a)In(a[n],e);return a}function hc(){const a={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return au(()=>{a.isMounted=!0}),nu(()=>{a.isUnmounting=!0}),a}const pa=[Function,Array],gc={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pa,onEnter:pa,onAfterEnter:pa,onEnterCancelled:pa,onBeforeLeave:pa,onLeave:pa,onAfterLeave:pa,onLeaveCancelled:pa,onBeforeAppear:pa,onAppear:pa,onAfterAppear:pa,onAppearCancelled:pa},setup(a,{slots:e}){const n=hu(),i=hc();let r;return()=>{const o=e.default&&Zm(e.default(),!0);if(!o||!o.length)return;let t=o[0];if(o.length>1){for(const B of o)if(B.type!==ua){t=B;break}}const s=Ce(a),{mode:d}=s;if(i.isLeaving)return To(t);const m=Xs(t);if(!m)return To(t);const k=Xo(m,s,i,n);Zo(m,k);const u=n.subTree,c=u&&Xs(u);let b=!1;const{getTransitionKey:w}=m.type;if(w){const B=w();r===void 0?r=B:B!==r&&(r=B,b=!0)}if(c&&c.type!==ua&&(!Oa(m,c)||b)){const B=Xo(c,s,i,n);if(Zo(c,B),d==="out-in")return i.isLeaving=!0,B.afterLeave=()=>{i.isLeaving=!1,n.update()},To(t);d==="in-out"&&m.type!==ua&&(B.delayLeave=(L,G,q)=>{const Y=Xm(i,c);Y[String(c.key)]=c,L._leaveCb=()=>{G(),L._leaveCb=void 0,delete k.delayedLeave},k.delayedLeave=q})}return t}}},Qm=gc;function Xm(a,e){const{leavingVNodes:n}=a;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Xo(a,e,n,i){const{appear:r,mode:o,persisted:t=!1,onBeforeEnter:s,onEnter:d,onAfterEnter:m,onEnterCancelled:k,onBeforeLeave:u,onLeave:c,onAfterLeave:b,onLeaveCancelled:w,onBeforeAppear:B,onAppear:L,onAfterAppear:G,onAppearCancelled:q}=e,Y=String(a.key),te=Xm(n,a),I=(H,ae)=>{H&&ga(H,i,9,ae)},Z=(H,ae)=>{const se=ae[1];I(H,ae),re(H)?H.every(ue=>ue.length<=1)&&se():H.length<=1&&se()},X={mode:o,persisted:t,beforeEnter(H){let ae=s;if(!n.isMounted)if(r)ae=B||s;else return;H._leaveCb&&H._leaveCb(!0);const se=te[Y];se&&Oa(a,se)&&se.el._leaveCb&&se.el._leaveCb(),I(ae,[H])},enter(H){let ae=d,se=m,ue=k;if(!n.isMounted)if(r)ae=L||d,se=G||m,ue=q||k;else return;let W=!1;const pe=H._enterCb=Oe=>{W||(W=!0,Oe?I(ue,[H]):I(se,[H]),X.delayedLeave&&X.delayedLeave(),H._enterCb=void 0)};ae?Z(ae,[H,pe]):pe()},leave(H,ae){const se=String(a.key);if(H._enterCb&&H._enterCb(!0),n.isUnmounting)return ae();I(u,[H]);let ue=!1;const W=H._leaveCb=pe=>{ue||(ue=!0,ae(),pe?I(w,[H]):I(b,[H]),H._leaveCb=void 0,te[se]===a&&delete te[se])};te[se]=a,c?Z(c,[H,W]):W()},clone(H){return Xo(H,e,n,i)}};return X}function To(a){if(no(a))return a=ln(a),a.children=null,a}function Xs(a){return no(a)?a.children?a.children[0]:void 0:a}function Zo(a,e){a.shapeFlag&6&&a.component?Zo(a.component.subTree,e):a.shapeFlag&128?(a.ssContent.transition=e.clone(a.ssContent),a.ssFallback.transition=e.clone(a.ssFallback)):a.transition=e}function Zm(a,e=!1,n){let i=[],r=0;for(let o=0;o<a.length;o++){let t=a[o];const s=n==null?t.key:String(n)+String(t.key!=null?t.key:o);t.type===qe?(t.patchFlag&128&&r++,i=i.concat(Zm(t.children,e,s))):(e||t.type!==ua)&&i.push(s!=null?ln(t,{key:s}):t)}if(r>1)for(let o=0;o<i.length;o++)i[o].patchFlag=-2;return i}const jr=a=>!!a.type.__asyncLoader,no=a=>a.type.__isKeepAlive;function yc(a,e){eu(a,"a",e)}function fc(a,e){eu(a,"da",e)}function eu(a,e,n=Ye){const i=a.__wdc||(a.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return a()});if(io(e,i,n),n){let r=n.parent;for(;r&&r.parent;)no(r.parent.vnode)&&jc(i,e,n,r),r=r.parent}}function jc(a,e,n,i){const r=io(e,a,i,!0);iu(()=>{St(i[e],r)},n)}function io(a,e,n=Ye,i=!1){if(n){const r=n[a]||(n[a]=[]),o=e.__weh||(e.__weh=(...t)=>{if(n.isUnmounted)return;mi(),_n(n);const s=ga(e,n,a,t);return tn(),ui(),s});return i?r.unshift(o):r.push(o),o}}const Ya=a=>(e,n=Ye)=>(!Fi||a==="sp")&&io(a,e,n),bc=Ya("bm"),au=Ya("m"),vc=Ya("bu"),wc=Ya("u"),nu=Ya("bum"),iu=Ya("um"),xc=Ya("sp"),Cc=Ya("rtg"),Ec=Ya("rtc");function Ic(a,e=Ye){io("ec",a,e)}function Tc(a,e){const n=Ca;if(n===null)return a;const i=oo(n)||n.proxy,r=a.dirs||(a.dirs=[]);for(let o=0;o<e.length;o++){let[t,s,d,m=Te]=e[o];me(t)&&(t={mounted:t,updated:t}),t.deep&&In(s),r.push({dir:t,instance:i,value:s,oldValue:void 0,arg:d,modifiers:m})}return a}function yn(a,e,n,i){const r=a.dirs,o=e&&e.dirs;for(let t=0;t<r.length;t++){const s=r[t];o&&(s.oldValue=o[t].value);let d=s.dir[i];d&&(mi(),ga(d,n,8,[a.el,s,a,e]),ui())}}const Sc=Symbol();function Ha(a,e,n,i){let r;const o=n&&n[i];if(re(a)||Ke(a)){r=new Array(a.length);for(let t=0,s=a.length;t<s;t++)r[t]=e(a[t],t,void 0,o&&o[t])}else if(typeof a=="number"){r=new Array(a);for(let t=0;t<a;t++)r[t]=e(t+1,t,void 0,o&&o[t])}else if(ze(a))if(a[Symbol.iterator])r=Array.from(a,(t,s)=>e(t,s,void 0,o&&o[s]));else{const t=Object.keys(a);r=new Array(t.length);for(let s=0,d=t.length;s<d;s++){const m=t[s];r[s]=e(a[m],m,s,o&&o[s])}}else r=[];return n&&(n[i]=r),r}const et=a=>a?gu(a)?oo(a)||a.proxy:et(a.parent):null,Ir=Ge(Object.create(null),{$:a=>a,$el:a=>a.vnode.el,$data:a=>a.data,$props:a=>a.props,$attrs:a=>a.attrs,$slots:a=>a.slots,$refs:a=>a.refs,$parent:a=>et(a.parent),$root:a=>et(a.root),$emit:a=>a.emit,$options:a=>ou(a),$forceUpdate:a=>a.f||(a.f=()=>$t(a.update)),$nextTick:a=>a.n||(a.n=Qk.bind(a.proxy)),$watch:a=>pc.bind(a)}),Ac={get({_:a},e){const{ctx:n,setupState:i,data:r,props:o,accessCache:t,type:s,appContext:d}=a;let m;if(e[0]!=="$"){const b=t[e];if(b!==void 0)switch(b){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(i!==Te&&ye(i,e))return t[e]=1,i[e];if(r!==Te&&ye(r,e))return t[e]=2,r[e];if((m=a.propsOptions[0])&&ye(m,e))return t[e]=3,o[e];if(n!==Te&&ye(n,e))return t[e]=4,n[e];at&&(t[e]=0)}}const k=Ir[e];let u,c;if(k)return e==="$attrs"&&ka(a,"get",e),k(a);if((u=s.__cssModules)&&(u=u[e]))return u;if(n!==Te&&ye(n,e))return t[e]=4,n[e];if(c=d.config.globalProperties,ye(c,e))return c[e]},set({_:a},e,n){const{data:i,setupState:r,ctx:o}=a;return r!==Te&&ye(r,e)?(r[e]=n,!0):i!==Te&&ye(i,e)?(i[e]=n,!0):ye(a.props,e)||e[0]==="$"&&e.slice(1)in a?!1:(o[e]=n,!0)},has({_:{data:a,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:o}},t){let s;return!!n[t]||a!==Te&&ye(a,t)||e!==Te&&ye(e,t)||(s=o[0])&&ye(s,t)||ye(i,t)||ye(Ir,t)||ye(r.config.globalProperties,t)},defineProperty(a,e,n){return n.get!=null?a._.accessCache[e]=0:ye(n,"value")&&this.set(a,e,n.value,null),Reflect.defineProperty(a,e,n)}};let at=!0;function Nc(a){const e=ou(a),n=a.proxy,i=a.ctx;at=!1,e.beforeCreate&&Zs(e.beforeCreate,a,"bc");const{data:r,computed:o,methods:t,watch:s,provide:d,inject:m,created:k,beforeMount:u,mounted:c,beforeUpdate:b,updated:w,activated:B,deactivated:L,beforeDestroy:G,beforeUnmount:q,destroyed:Y,unmounted:te,render:I,renderTracked:Z,renderTriggered:X,errorCaptured:H,serverPrefetch:ae,expose:se,inheritAttrs:ue,components:W,directives:pe,filters:Oe}=e;if(m&&Rc(m,i,null,a.appContext.config.unwrapInjectedRef),t)for(const we in t){const Ee=t[we];me(Ee)&&(i[we]=Ee.bind(n))}if(r){const we=r.call(n,n);ze(we)&&(a.data=Na(we))}if(at=!0,o)for(const we in o){const Ee=o[we],ja=me(Ee)?Ee.bind(n,n):me(Ee.get)?Ee.get.bind(n,n):Sa,pi=!me(Ee)&&me(Ee.set)?Ee.set.bind(n):Sa,Ze=rp({get:ja,set:pi});Object.defineProperty(i,we,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:La=>Ze.value=La})}if(s)for(const we in s)ru(s[we],i,n,we);if(d){const we=me(d)?d.call(n):d;Reflect.ownKeys(we).forEach(Ee=>{cc(Ee,we[Ee])})}k&&Zs(k,a,"c");function Fe(we,Ee){re(Ee)?Ee.forEach(ja=>we(ja.bind(n))):Ee&&we(Ee.bind(n))}if(Fe(bc,u),Fe(au,c),Fe(vc,b),Fe(wc,w),Fe(yc,B),Fe(fc,L),Fe(Ic,H),Fe(Ec,Z),Fe(Cc,X),Fe(nu,q),Fe(iu,te),Fe(xc,ae),re(se))if(se.length){const we=a.exposed||(a.exposed={});se.forEach(Ee=>{Object.defineProperty(we,Ee,{get:()=>n[Ee],set:ja=>n[Ee]=ja})})}else a.exposed||(a.exposed={});I&&a.render===Sa&&(a.render=I),ue!=null&&(a.inheritAttrs=ue),W&&(a.components=W),pe&&(a.directives=pe)}function Rc(a,e,n=Sa,i=!1){re(a)&&(a=nt(a));for(const r in a){const o=a[r];let t;ze(o)?"default"in o?t=Eo(o.from||r,o.default,!0):t=Eo(o.from||r):t=Eo(o),ia(t)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>t.value,set:s=>t.value=s}):e[r]=t}}function Zs(a,e,n){ga(re(a)?a.map(i=>i.bind(e.proxy)):a.bind(e.proxy),e,n)}function ru(a,e,n,i){const r=i.includes(".")?Jm(n,i):()=>n[i];if(Ke(a)){const o=e[a];me(o)&&Io(r,o)}else if(me(a))Io(r,a.bind(n));else if(ze(a))if(re(a))a.forEach(o=>ru(o,e,n,i));else{const o=me(a.handler)?a.handler.bind(n):e[a.handler];me(o)&&Io(r,o,a)}}function ou(a){const e=a.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:t}}=a.appContext,s=o.get(e);let d;return s?d=s:!r.length&&!n&&!i?d=e:(d={},r.length&&r.forEach(m=>Tr(d,m,t,!0)),Tr(d,e,t)),ze(e)&&o.set(e,d),d}function Tr(a,e,n,i=!1){const{mixins:r,extends:o}=e;o&&Tr(a,o,n,!0),r&&r.forEach(t=>Tr(a,t,n,!0));for(const t in e)if(!(i&&t==="expose")){const s=zc[t]||n&&n[t];a[t]=s?s(a[t],e[t]):e[t]}return a}const zc={data:ed,props:vn,emits:vn,methods:vn,computed:vn,beforeCreate:aa,created:aa,beforeMount:aa,mounted:aa,beforeUpdate:aa,updated:aa,beforeDestroy:aa,beforeUnmount:aa,destroyed:aa,unmounted:aa,activated:aa,deactivated:aa,errorCaptured:aa,serverPrefetch:aa,components:vn,directives:vn,watch:Pc,provide:ed,inject:Dc};function ed(a,e){return e?a?function(){return Ge(me(a)?a.call(this,this):a,me(e)?e.call(this,this):e)}:e:a}function Dc(a,e){return vn(nt(a),nt(e))}function nt(a){if(re(a)){const e={};for(let n=0;n<a.length;n++)e[a[n]]=a[n];return e}return a}function aa(a,e){return a?[...new Set([].concat(a,e))]:e}function vn(a,e){return a?Ge(Ge(Object.create(null),a),e):e}function Pc(a,e){if(!a)return e;if(!e)return a;const n=Ge(Object.create(null),a);for(const i in e)n[i]=aa(a[i],e[i]);return n}function Oc(a,e,n,i=!1){const r={},o={};wr(o,ro,1),a.propsDefaults=Object.create(null),tu(a,e,r,o);for(const t in a.propsOptions[0])t in r||(r[t]=void 0);n?a.props=i?r:Wk(r):a.type.props?a.props=r:a.props=o,a.attrs=o}function Mc(a,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:t}}=a,s=Ce(r),[d]=a.propsOptions;let m=!1;if((i||t>0)&&!(t&16)){if(t&8){const k=a.vnode.dynamicProps;for(let u=0;u<k.length;u++){let c=k[u];if(Xr(a.emitsOptions,c))continue;const b=e[c];if(d)if(ye(o,c))b!==o[c]&&(o[c]=b,m=!0);else{const w=ii(c);r[w]=it(d,s,w,b,a,!1)}else b!==o[c]&&(o[c]=b,m=!0)}}}else{tu(a,e,r,o)&&(m=!0);let k;for(const u in s)(!e||!ye(e,u)&&((k=Bn(u))===u||!ye(e,k)))&&(d?n&&(n[u]!==void 0||n[k]!==void 0)&&(r[u]=it(d,s,u,void 0,a,!0)):delete r[u]);if(o!==s)for(const u in o)(!e||!ye(e,u)&&!0)&&(delete o[u],m=!0)}m&&Ka(a,"set","$attrs")}function tu(a,e,n,i){const[r,o]=a.propsOptions;let t=!1,s;if(e)for(let d in e){if(yr(d))continue;const m=e[d];let k;r&&ye(r,k=ii(d))?!o||!o.includes(k)?n[k]=m:(s||(s={}))[k]=m:Xr(a.emitsOptions,d)||(!(d in i)||m!==i[d])&&(i[d]=m,t=!0)}if(o){const d=Ce(n),m=s||Te;for(let k=0;k<o.length;k++){const u=o[k];n[u]=it(r,d,u,m[u],a,!ye(m,u))}}return t}function it(a,e,n,i,r,o){const t=a[n];if(t!=null){const s=ye(t,"default");if(s&&i===void 0){const d=t.default;if(t.type!==Function&&me(d)){const{propsDefaults:m}=r;n in m?i=m[n]:(_n(r),i=m[n]=d.call(null,e),tn())}else i=d}t[0]&&(o&&!s?i=!1:t[1]&&(i===""||i===Bn(n))&&(i=!0))}return i}function su(a,e,n=!1){const i=e.propsCache,r=i.get(a);if(r)return r;const o=a.props,t={},s=[];let d=!1;if(!me(a)){const k=u=>{d=!0;const[c,b]=su(u,e,!0);Ge(t,c),b&&s.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(k),a.extends&&k(a.extends),a.mixins&&a.mixins.forEach(k)}if(!o&&!d)return ze(a)&&i.set(a,Jn),Jn;if(re(o))for(let k=0;k<o.length;k++){const u=ii(o[k]);ad(u)&&(t[u]=Te)}else if(o)for(const k in o){const u=ii(k);if(ad(u)){const c=o[k],b=t[u]=re(c)||me(c)?{type:c}:c;if(b){const w=rd(Boolean,b.type),B=rd(String,b.type);b[0]=w>-1,b[1]=B<0||w<B,(w>-1||ye(b,"default"))&&s.push(u)}}}const m=[t,s];return ze(a)&&i.set(a,m),m}function ad(a){return a[0]!=="$"}function nd(a){const e=a&&a.toString().match(/^\s*function (\w+)/);return e?e[1]:a===null?"null":""}function id(a,e){return nd(a)===nd(e)}function rd(a,e){return re(e)?e.findIndex(n=>id(n,a)):me(e)&&id(e,a)?0:-1}const du=a=>a[0]==="_"||a==="$stable",Ut=a=>re(a)?a.map(va):[va(a)],Fc=(a,e,n)=>{if(e._n)return e;const i=Er((...r)=>Ut(e(...r)),n);return i._c=!1,i},mu=(a,e,n)=>{const i=a._ctx;for(const r in a){if(du(r))continue;const o=a[r];if(me(o))e[r]=Fc(r,o,i);else if(o!=null){const t=Ut(o);e[r]=()=>t}}},uu=(a,e)=>{const n=Ut(e);a.slots.default=()=>n},Lc=(a,e)=>{if(a.vnode.shapeFlag&32){const n=e._;n?(a.slots=Ce(e),wr(e,"_",n)):mu(e,a.slots={})}else a.slots={},e&&uu(a,e);wr(a.slots,ro,1)},Bc=(a,e,n)=>{const{vnode:i,slots:r}=a;let o=!0,t=Te;if(i.shapeFlag&32){const s=e._;s?n&&s===1?o=!1:(Ge(r,e),!n&&s===1&&delete r._):(o=!e.$stable,mu(e,r)),t=e}else e&&(uu(a,e),t={default:1});if(o)for(const s in r)!du(s)&&!(s in t)&&delete r[s]};function lu(){return{app:null,config:{isNativeTag:uk,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qc=0;function $c(a,e){return function(i,r=null){me(i)||(i=Object.assign({},i)),r!=null&&!ze(r)&&(r=null);const o=lu(),t=new Set;let s=!1;const d=o.app={_uid:qc++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:tp,get config(){return o.config},set config(m){},use(m,...k){return t.has(m)||(m&&me(m.install)?(t.add(m),m.install(d,...k)):me(m)&&(t.add(m),m(d,...k))),d},mixin(m){return o.mixins.includes(m)||o.mixins.push(m),d},component(m,k){return k?(o.components[m]=k,d):o.components[m]},directive(m,k){return k?(o.directives[m]=k,d):o.directives[m]},mount(m,k,u){if(!s){const c=De(i,r);return c.appContext=o,k&&e?e(c,m):a(c,m,u),s=!0,d._container=m,m.__vue_app__=d,oo(c.component)||c.component.proxy}},unmount(){s&&(a(null,d._container),delete d._container.__vue_app__)},provide(m,k){return o.provides[m]=k,d}};return d}}function rt(a,e,n,i,r=!1){if(re(a)){a.forEach((c,b)=>rt(c,e&&(re(e)?e[b]:e),n,i,r));return}if(jr(i)&&!r)return;const o=i.shapeFlag&4?oo(i.component)||i.component.proxy:i.el,t=r?null:o,{i:s,r:d}=a,m=e&&e.r,k=s.refs===Te?s.refs={}:s.refs,u=s.setupState;if(m!=null&&m!==d&&(Ke(m)?(k[m]=null,ye(u,m)&&(u[m]=null)):ia(m)&&(m.value=null)),me(d))on(d,s,12,[t,k]);else{const c=Ke(d),b=ia(d);if(c||b){const w=()=>{if(a.f){const B=c?k[d]:d.value;r?re(B)&&St(B,o):re(B)?B.includes(o)||B.push(o):c?(k[d]=[o],ye(u,d)&&(u[d]=k[d])):(d.value=[o],a.k&&(k[a.k]=d.value))}else c?(k[d]=t,ye(u,d)&&(u[d]=t)):b&&(d.value=t,a.k&&(k[a.k]=t))};t?(w.id=-1,sa(w,n)):w()}}}const sa=kc;function Hc(a){return Wc(a)}function Wc(a,e){const n=hk();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:t,createText:s,createComment:d,setText:m,setElementText:k,parentNode:u,nextSibling:c,setScopeId:b=Sa,cloneNode:w,insertStaticContent:B}=a,L=(p,f,v,E=null,C=null,z=null,$=!1,R=null,F=!!f.dynamicChildren)=>{if(p===f)return;p&&!Oa(p,f)&&(E=Wn(p),Ra(p,C,z,!0),p=null),f.patchFlag===-2&&(F=!1,f.dynamicChildren=null);const{type:S,ref:J,shapeFlag:K}=f;switch(S){case Kt:G(p,f,v,E);break;case ua:q(p,f,v,E);break;case So:p==null&&Y(f,v,E,$);break;case qe:pe(p,f,v,E,C,z,$,R,F);break;default:K&1?Z(p,f,v,E,C,z,$,R,F):K&6?Oe(p,f,v,E,C,z,$,R,F):(K&64||K&128)&&S.process(p,f,v,E,C,z,$,R,F,Qa)}J!=null&&C&&rt(J,p&&p.ref,z,f||p,!f)},G=(p,f,v,E)=>{if(p==null)i(f.el=s(f.children),v,E);else{const C=f.el=p.el;f.children!==p.children&&m(C,f.children)}},q=(p,f,v,E)=>{p==null?i(f.el=d(f.children||""),v,E):f.el=p.el},Y=(p,f,v,E)=>{[p.el,p.anchor]=B(p.children,f,v,E,p.el,p.anchor)},te=({el:p,anchor:f},v,E)=>{let C;for(;p&&p!==f;)C=c(p),i(p,v,E),p=C;i(f,v,E)},I=({el:p,anchor:f})=>{let v;for(;p&&p!==f;)v=c(p),r(p),p=v;r(f)},Z=(p,f,v,E,C,z,$,R,F)=>{$=$||f.type==="svg",p==null?X(f,v,E,C,z,$,R,F):se(p,f,C,z,$,R,F)},X=(p,f,v,E,C,z,$,R)=>{let F,S;const{type:J,props:K,shapeFlag:Q,transition:ie,patchFlag:he,dirs:je}=p;if(p.el&&w!==void 0&&he===-1)F=p.el=w(p.el);else{if(F=p.el=t(p.type,z,K&&K.is,K),Q&8?k(F,p.children):Q&16&&ae(p.children,F,null,E,C,z&&J!=="foreignObject",$,R),je&&yn(p,null,E,"created"),K){for(const Ie in K)Ie!=="value"&&!yr(Ie)&&o(F,Ie,null,K[Ie],z,p.children,E,C,ba);"value"in K&&o(F,"value",null,K.value),(S=K.onVnodeBeforeMount)&&za(S,E,p)}H(F,p,p.scopeId,$,E)}je&&yn(p,null,E,"beforeMount");const be=(!C||C&&!C.pendingBranch)&&ie&&!ie.persisted;be&&ie.beforeEnter(F),i(F,f,v),((S=K&&K.onVnodeMounted)||be||je)&&sa(()=>{S&&za(S,E,p),be&&ie.enter(F),je&&yn(p,null,E,"mounted")},C)},H=(p,f,v,E,C)=>{if(v&&b(p,v),E)for(let z=0;z<E.length;z++)b(p,E[z]);if(C){let z=C.subTree;if(f===z){const $=C.vnode;H(p,$,$.scopeId,$.slotScopeIds,C.parent)}}},ae=(p,f,v,E,C,z,$,R,F=0)=>{for(let S=F;S<p.length;S++){const J=p[S]=R?nn(p[S]):va(p[S]);L(null,J,f,v,E,C,z,$,R)}},se=(p,f,v,E,C,z,$)=>{const R=f.el=p.el;let{patchFlag:F,dynamicChildren:S,dirs:J}=f;F|=p.patchFlag&16;const K=p.props||Te,Q=f.props||Te;let ie;v&&fn(v,!1),(ie=Q.onVnodeBeforeUpdate)&&za(ie,v,f,p),J&&yn(f,p,v,"beforeUpdate"),v&&fn(v,!0);const he=C&&f.type!=="foreignObject";if(S?ue(p.dynamicChildren,S,R,v,E,he,z):$||ja(p,f,R,null,v,E,he,z,!1),F>0){if(F&16)W(R,f,K,Q,v,E,C);else if(F&2&&K.class!==Q.class&&o(R,"class",null,Q.class,C),F&4&&o(R,"style",K.style,Q.style,C),F&8){const je=f.dynamicProps;for(let be=0;be<je.length;be++){const Ie=je[be],oa=K[Ie],Ba=Q[Ie];(Ba!==oa||Ie==="value")&&o(R,Ie,oa,Ba,C,p.children,v,E,ba)}}F&1&&p.children!==f.children&&k(R,f.children)}else!$&&S==null&&W(R,f,K,Q,v,E,C);((ie=Q.onVnodeUpdated)||J)&&sa(()=>{ie&&za(ie,v,f,p),J&&yn(f,p,v,"updated")},E)},ue=(p,f,v,E,C,z,$)=>{for(let R=0;R<f.length;R++){const F=p[R],S=f[R],J=F.el&&(F.type===qe||!Oa(F,S)||F.shapeFlag&70)?u(F.el):v;L(F,S,J,null,E,C,z,$,!0)}},W=(p,f,v,E,C,z,$)=>{if(v!==E){for(const R in E){if(yr(R))continue;const F=E[R],S=v[R];F!==S&&R!=="value"&&o(p,R,S,F,$,f.children,C,z,ba)}if(v!==Te)for(const R in v)!yr(R)&&!(R in E)&&o(p,R,v[R],null,$,f.children,C,z,ba);"value"in E&&o(p,"value",v.value,E.value)}},pe=(p,f,v,E,C,z,$,R,F)=>{const S=f.el=p?p.el:s(""),J=f.anchor=p?p.anchor:s("");let{patchFlag:K,dynamicChildren:Q,slotScopeIds:ie}=f;ie&&(R=R?R.concat(ie):ie),p==null?(i(S,v,E),i(J,v,E),ae(f.children,v,J,C,z,$,R,F)):K>0&&K&64&&Q&&p.dynamicChildren?(ue(p.dynamicChildren,Q,v,C,z,$,R),(f.key!=null||C&&f===C.subTree)&&_u(p,f,!0)):ja(p,f,v,J,C,z,$,R,F)},Oe=(p,f,v,E,C,z,$,R,F)=>{f.slotScopeIds=R,p==null?f.shapeFlag&512?C.ctx.activate(f,v,E,$,F):fa(f,v,E,C,z,$,F):Fe(p,f,F)},fa=(p,f,v,E,C,z,$)=>{const R=p.component=Xc(p,E,C);if(no(p)&&(R.ctx.renderer=Qa),Zc(R),R.asyncDep){if(C&&C.registerDep(R,we),!p.el){const F=R.subTree=De(ua);q(null,F,f,v)}return}we(R,p,f,v,C,z,$)},Fe=(p,f,v)=>{const E=f.component=p.component;if(oc(p,f,v))if(E.asyncDep&&!E.asyncResolved){Ee(E,f,v);return}else E.next=f,Zk(E.update),E.update();else f.el=p.el,E.vnode=f},we=(p,f,v,E,C,z,$)=>{const R=()=>{if(p.isMounted){let{next:J,bu:K,u:Q,parent:ie,vnode:he}=p,je=J,be;fn(p,!1),J?(J.el=he.el,Ee(p,J,$)):J=he,K&&fr(K),(be=J.props&&J.props.onVnodeBeforeUpdate)&&za(be,ie,J,he),fn(p,!0);const Ie=Co(p),oa=p.subTree;p.subTree=Ie,L(oa,Ie,u(oa.el),Wn(oa),p,C,z),J.el=Ie.el,je===null&&Ht(p,Ie.el),Q&&sa(Q,C),(be=J.props&&J.props.onVnodeUpdated)&&sa(()=>za(be,ie,J,he),C)}else{let J;const{el:K,props:Q}=f,{bm:ie,m:he,parent:je}=p,be=jr(f);if(fn(p,!1),ie&&fr(ie),!be&&(J=Q&&Q.onVnodeBeforeMount)&&za(J,je,f),fn(p,!0),K&&gi){const Ie=()=>{p.subTree=Co(p),gi(K,p.subTree,p,C,null)};be?f.type.__asyncLoader().then(()=>!p.isUnmounted&&Ie()):Ie()}else{const Ie=p.subTree=Co(p);L(null,Ie,v,E,p,C,z),f.el=Ie.el}if(he&&sa(he,C),!be&&(J=Q&&Q.onVnodeMounted)){const Ie=f;sa(()=>za(J,je,Ie),C)}(f.shapeFlag&256||je&&jr(je.vnode)&&je.vnode.shapeFlag&256)&&p.a&&sa(p.a,C),p.isMounted=!0,f=v=E=null}},F=p.effect=new Dt(R,()=>$t(S),p.scope),S=p.update=()=>F.run();S.id=p.uid,fn(p,!0),S()},Ee=(p,f,v)=>{f.component=p;const E=p.vnode.props;p.vnode=f,p.next=null,Mc(p,f.props,E,v),Bc(p,f.children,v),mi(),Ys(),ui()},ja=(p,f,v,E,C,z,$,R,F=!1)=>{const S=p&&p.children,J=p?p.shapeFlag:0,K=f.children,{patchFlag:Q,shapeFlag:ie}=f;if(Q>0){if(Q&128){Ze(S,K,v,E,C,z,$,R,F);return}else if(Q&256){pi(S,K,v,E,C,z,$,R,F);return}}ie&8?(J&16&&ba(S,C,z),K!==S&&k(v,K)):J&16?ie&16?Ze(S,K,v,E,C,z,$,R,F):ba(S,C,z,!0):(J&8&&k(v,""),ie&16&&ae(K,v,E,C,z,$,R,F))},pi=(p,f,v,E,C,z,$,R,F)=>{p=p||Jn,f=f||Jn;const S=p.length,J=f.length,K=Math.min(S,J);let Q;for(Q=0;Q<K;Q++){const ie=f[Q]=F?nn(f[Q]):va(f[Q]);L(p[Q],ie,v,null,C,z,$,R,F)}S>J?ba(p,C,z,!0,!1,K):ae(f,v,E,C,z,$,R,F,K)},Ze=(p,f,v,E,C,z,$,R,F)=>{let S=0;const J=f.length;let K=p.length-1,Q=J-1;for(;S<=K&&S<=Q;){const ie=p[S],he=f[S]=F?nn(f[S]):va(f[S]);if(Oa(ie,he))L(ie,he,v,null,C,z,$,R,F);else break;S++}for(;S<=K&&S<=Q;){const ie=p[K],he=f[Q]=F?nn(f[Q]):va(f[Q]);if(Oa(ie,he))L(ie,he,v,null,C,z,$,R,F);else break;K--,Q--}if(S>K){if(S<=Q){const ie=Q+1,he=ie<J?f[ie].el:E;for(;S<=Q;)L(null,f[S]=F?nn(f[S]):va(f[S]),v,he,C,z,$,R,F),S++}}else if(S>Q)for(;S<=K;)Ra(p[S],C,z,!0),S++;else{const ie=S,he=S,je=new Map;for(S=he;S<=Q;S++){const ea=f[S]=F?nn(f[S]):va(f[S]);ea.key!=null&&je.set(ea.key,S)}let be,Ie=0;const oa=Q-he+1;let Ba=!1,yi=0;const qa=new Array(oa);for(S=0;S<oa;S++)qa[S]=0;for(S=ie;S<=K;S++){const ea=p[S];if(Ie>=oa){Ra(ea,C,z,!0);continue}let ta;if(ea.key!=null)ta=je.get(ea.key);else for(be=he;be<=Q;be++)if(qa[be-he]===0&&Oa(ea,f[be])){ta=be;break}ta===void 0?Ra(ea,C,z,!0):(qa[ta-he]=S+1,ta>=yi?yi=ta:Ba=!0,L(ea,f[ta],v,null,C,z,$,R,F),Ie++)}const tr=Ba?Uc(qa):Jn;for(be=tr.length-1,S=oa-1;S>=0;S--){const ea=he+S,ta=f[ea],fi=ea+1<J?f[ea+1].el:E;qa[S]===0?L(null,ta,v,fi,C,z,$,R,F):Ba&&(be<0||S!==tr[be]?La(ta,v,fi,2):be--)}}},La=(p,f,v,E,C=null)=>{const{el:z,type:$,transition:R,children:F,shapeFlag:S}=p;if(S&6){La(p.component.subTree,f,v,E);return}if(S&128){p.suspense.move(f,v,E);return}if(S&64){$.move(p,f,v,Qa);return}if($===qe){i(z,f,v);for(let K=0;K<F.length;K++)La(F[K],f,v,E);i(p.anchor,f,v);return}if($===So){te(p,f,v);return}if(E!==2&&S&1&&R)if(E===0)R.beforeEnter(z),i(z,f,v),sa(()=>R.enter(z),C);else{const{leave:K,delayLeave:Q,afterLeave:ie}=R,he=()=>i(z,f,v),je=()=>{K(z,()=>{he(),ie&&ie()})};Q?Q(z,he,je):je()}else i(z,f,v)},Ra=(p,f,v,E=!1,C=!1)=>{const{type:z,props:$,ref:R,children:F,dynamicChildren:S,shapeFlag:J,patchFlag:K,dirs:Q}=p;if(R!=null&&rt(R,null,v,p,!0),J&256){f.ctx.deactivate(p);return}const ie=J&1&&Q,he=!jr(p);let je;if(he&&(je=$&&$.onVnodeBeforeUnmount)&&za(je,f,p),J&6)fo(p.component,v,E);else{if(J&128){p.suspense.unmount(v,E);return}ie&&yn(p,null,f,"beforeUnmount"),J&64?p.type.remove(p,f,v,C,Qa,E):S&&(z!==qe||K>0&&K&64)?ba(S,f,v,!1,!0):(z===qe&&K&384||!C&&J&16)&&ba(F,f,v),E&&rr(p)}(he&&(je=$&&$.onVnodeUnmounted)||ie)&&sa(()=>{je&&za(je,f,p),ie&&yn(p,null,f,"unmounted")},v)},rr=p=>{const{type:f,el:v,anchor:E,transition:C}=p;if(f===qe){yo(v,E);return}if(f===So){I(p);return}const z=()=>{r(v),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:$,delayLeave:R}=C,F=()=>$(v,z);R?R(p.el,z,F):F()}else z()},yo=(p,f)=>{let v;for(;p!==f;)v=c(p),r(p),p=v;r(f)},fo=(p,f,v)=>{const{bum:E,scope:C,update:z,subTree:$,um:R}=p;E&&fr(E),C.stop(),z&&(z.active=!1,Ra($,p,f,v)),R&&sa(R,f),sa(()=>{p.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},ba=(p,f,v,E=!1,C=!1,z=0)=>{for(let $=z;$<p.length;$++)Ra(p[$],f,v,E,C)},Wn=p=>p.shapeFlag&6?Wn(p.component.subTree):p.shapeFlag&128?p.suspense.next():c(p.anchor||p.el),or=(p,f,v)=>{p==null?f._vnode&&Ra(f._vnode,null,null,!0):L(f._vnode||null,p,f,null,null,null,v),Ys(),Km(),f._vnode=p},Qa={p:L,um:Ra,m:La,r:rr,mt:fa,mc:ae,pc:ja,pbc:ue,n:Wn,o:a};let hi,gi;return e&&([hi,gi]=e(Qa)),{render:or,hydrate:hi,createApp:$c(or,hi)}}function fn({effect:a,update:e},n){a.allowRecurse=e.allowRecurse=n}function _u(a,e,n=!1){const i=a.children,r=e.children;if(re(i)&&re(r))for(let o=0;o<i.length;o++){const t=i[o];let s=r[o];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[o]=nn(r[o]),s.el=t.el),n||_u(t,s))}}function Uc(a){const e=a.slice(),n=[0];let i,r,o,t,s;const d=a.length;for(i=0;i<d;i++){const m=a[i];if(m!==0){if(r=n[n.length-1],a[r]<m){e[i]=r,n.push(i);continue}for(o=0,t=n.length-1;o<t;)s=o+t>>1,a[n[s]]<m?o=s+1:t=s;m<a[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,t=n[o-1];o-- >0;)n[o]=t,t=e[t];return n}const Kc=a=>a.__isTeleport,qe=Symbol(void 0),Kt=Symbol(void 0),ua=Symbol(void 0),So=Symbol(void 0),Ti=[];let ha=null;function oe(a=!1){Ti.push(ha=a?null:[])}function ku(){Ti.pop(),ha=Ti[Ti.length-1]||null}let ri=1;function od(a){ri+=a}function cu(a){return a.dynamicChildren=ri>0?ha||Jn:null,ku(),ri>0&&ha&&ha.push(a),a}function de(a,e,n,i,r,o){return cu(D(a,e,n,i,r,o,!0))}function Vt(a,e,n,i,r){return cu(De(a,e,n,i,r,!0))}function Sr(a){return a?a.__v_isVNode===!0:!1}function Oa(a,e){return a.type===e.type&&a.key===e.key}const ro="__vInternal",pu=({key:a})=>a!=null?a:null,br=({ref:a,ref_key:e,ref_for:n})=>a!=null?Ke(a)||ia(a)||me(a)?{i:Ca,r:a,k:e,f:!!n}:a:null;function D(a,e=null,n=null,i=0,r=null,o=a===qe?0:1,t=!1,s=!1){const d={__v_isVNode:!0,__v_skip:!0,type:a,props:e,key:e&&pu(e),ref:e&&br(e),scopeId:Zr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return s?(Yt(d,n),o&128&&a.normalize(d)):n&&(d.shapeFlag|=Ke(n)?8:16),ri>0&&!t&&ha&&(d.patchFlag>0||o&6)&&d.patchFlag!==32&&ha.push(d),d}const De=Vc;function Vc(a,e=null,n=null,i=0,r=null,o=!1){if((!a||a===Sc)&&(a=ua),Sr(a)){const s=ln(a,e,!0);return n&&Yt(s,n),ri>0&&!o&&ha&&(s.shapeFlag&6?ha[ha.indexOf(a)]=s:ha.push(s)),s.patchFlag|=-2,s}if(ip(a)&&(a=a.__vccOpts),e){e=Yc(e);let{class:s,style:d}=e;s&&!Ke(s)&&(e.class=It(s)),ze(d)&&(Lm(d)&&!re(d)&&(d=Ge({},d)),e.style=Vr(d))}const t=Ke(a)?1:tc(a)?128:Kc(a)?64:ze(a)?4:me(a)?2:0;return D(a,e,n,i,r,t,o,!0)}function Yc(a){return a?Lm(a)||ro in a?Ge({},a):a:null}function ln(a,e,n=!1){const{props:i,ref:r,patchFlag:o,children:t}=a,s=e?Gc(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:a.type,props:s,key:s&&pu(s),ref:e&&e.ref?n&&r?re(r)?r.concat(br(e)):[r,br(e)]:br(e):r,scopeId:a.scopeId,slotScopeIds:a.slotScopeIds,children:t,target:a.target,targetAnchor:a.targetAnchor,staticCount:a.staticCount,shapeFlag:a.shapeFlag,patchFlag:e&&a.type!==qe?o===-1?16:o|16:o,dynamicProps:a.dynamicProps,dynamicChildren:a.dynamicChildren,appContext:a.appContext,dirs:a.dirs,transition:a.transition,component:a.component,suspense:a.suspense,ssContent:a.ssContent&&ln(a.ssContent),ssFallback:a.ssFallback&&ln(a.ssFallback),el:a.el,anchor:a.anchor}}function Xe(a=" ",e=0){return De(Kt,null,a,e)}function na(a="",e=!1){return e?(oe(),Vt(ua,null,a)):De(ua,null,a)}function va(a){return a==null||typeof a=="boolean"?De(ua):re(a)?De(qe,null,a.slice()):typeof a=="object"?nn(a):De(Kt,null,String(a))}function nn(a){return a.el===null||a.memo?a:ln(a)}function Yt(a,e){let n=0;const{shapeFlag:i}=a;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Yt(a,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ro in e)?e._ctx=Ca:r===3&&Ca&&(Ca.slots._===1?e._=1:(e._=2,a.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:Ca},n=32):(e=String(e),i&64?(n=16,e=[Xe(e)]):n=8);a.children=e,a.shapeFlag|=n}function Gc(...a){const e={};for(let n=0;n<a.length;n++){const i=a[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=It([e.class,i.class]));else if(r==="style")e.style=Vr([e.style,i.style]);else if(Yr(r)){const o=e[r],t=i[r];t&&o!==t&&!(re(o)&&o.includes(t))&&(e[r]=o?[].concat(o,t):t)}else r!==""&&(e[r]=i[r])}return e}function za(a,e,n,i=null){ga(a,e,7,[n,i])}const Jc=lu();let Qc=0;function Xc(a,e,n){const i=a.type,r=(e?e.appContext:a.appContext)||Jc,o={uid:Qc++,vnode:a,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new gk(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:su(i,r),emitsOptions:Ym(i,r),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:i.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=ac.bind(null,o),a.ce&&a.ce(o),o}let Ye=null;const hu=()=>Ye||Ca,_n=a=>{Ye=a,a.scope.on()},tn=()=>{Ye&&Ye.scope.off(),Ye=null};function gu(a){return a.vnode.shapeFlag&4}let Fi=!1;function Zc(a,e=!1){Fi=e;const{props:n,children:i}=a.vnode,r=gu(a);Oc(a,n,r,e),Lc(a,i);const o=r?ep(a,e):void 0;return Fi=!1,o}function ep(a,e){const n=a.type;a.accessCache=Object.create(null),a.proxy=Bm(new Proxy(a.ctx,Ac));const{setup:i}=n;if(i){const r=a.setupContext=i.length>1?np(a):null;_n(a),mi();const o=on(i,a,0,[a.props,r]);if(ui(),tn(),Nt(o)){if(o.then(tn,tn),e)return o.then(t=>{ot(a,t,e)}).catch(t=>{Gi(t,a,0)});a.asyncDep=o}else ot(a,o,e)}else yu(a,e)}function ot(a,e,n){me(e)?a.type.__ssrInlineRender?a.ssrRender=e:a.render=e:ze(e)&&(a.setupState=qm(e)),yu(a,n)}let td;function yu(a,e,n){const i=a.type;if(!a.render){if(!e&&td&&!i.render){const r=i.template;if(r){const{isCustomElement:o,compilerOptions:t}=a.appContext.config,{delimiters:s,compilerOptions:d}=i,m=Ge(Ge({isCustomElement:o,delimiters:s},t),d);i.render=td(r,m)}}a.render=i.render||Sa}_n(a),mi(),Nc(a),ui(),tn()}function ap(a){return new Proxy(a.attrs,{get(e,n){return ka(a,"get","$attrs"),e[n]}})}function np(a){const e=i=>{a.exposed=i||{}};let n;return{get attrs(){return n||(n=ap(a))},slots:a.slots,emit:a.emit,expose:e}}function oo(a){if(a.exposed)return a.exposeProxy||(a.exposeProxy=new Proxy(qm(Bm(a.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ir)return Ir[n](a)}}))}function ip(a){return me(a)&&"__vccOpts"in a}const rp=(a,e)=>Gk(a,e,Fi);function sd(a){const e=hu();let n=a();return tn(),Nt(n)&&(n=n.catch(i=>{throw _n(e),i})),[n,()=>_n(e)]}function op(a,e,n){const i=arguments.length;return i===2?ze(e)&&!re(e)?Sr(e)?De(a,null,[e]):De(a,e):De(a,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Sr(n)&&(n=[n]),De(a,e,n))}const tp="3.2.38",sp="http://www.w3.org/2000/svg",En=typeof document<"u"?document:null,dd=En&&En.createElement("template"),dp={insert:(a,e,n)=>{e.insertBefore(a,n||null)},remove:a=>{const e=a.parentNode;e&&e.removeChild(a)},createElement:(a,e,n,i)=>{const r=e?En.createElementNS(sp,a):En.createElement(a,n?{is:n}:void 0);return a==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:a=>En.createTextNode(a),createComment:a=>En.createComment(a),setText:(a,e)=>{a.nodeValue=e},setElementText:(a,e)=>{a.textContent=e},parentNode:a=>a.parentNode,nextSibling:a=>a.nextSibling,querySelector:a=>En.querySelector(a),setScopeId(a,e){a.setAttribute(e,"")},cloneNode(a){const e=a.cloneNode(!0);return"_value"in a&&(e._value=a._value),e},insertStaticContent(a,e,n,i,r,o){const t=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{dd.innerHTML=i?`<svg>${a}</svg>`:a;const s=dd.content;if(i){const d=s.firstChild;for(;d.firstChild;)s.appendChild(d.firstChild);s.removeChild(d)}e.insertBefore(s,n)}return[t?t.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function mp(a,e,n){const i=a._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?a.removeAttribute("class"):n?a.setAttribute("class",e):a.className=e}function up(a,e,n){const i=a.style,r=Ke(n);if(n&&!r){for(const o in n)tt(i,o,n[o]);if(e&&!Ke(e))for(const o in e)n[o]==null&&tt(i,o,"")}else{const o=i.display;r?e!==n&&(i.cssText=n):e&&a.removeAttribute("style"),"_vod"in a&&(i.display=o)}}const md=/\s*!important$/;function tt(a,e,n){if(re(n))n.forEach(i=>tt(a,e,i));else if(n==null&&(n=""),e.startsWith("--"))a.setProperty(e,n);else{const i=lp(a,e);md.test(n)?a.setProperty(Bn(i),n.replace(md,""),"important"):a[i]=n}}const ud=["Webkit","Moz","ms"],Ao={};function lp(a,e){const n=Ao[e];if(n)return n;let i=ii(e);if(i!=="filter"&&i in a)return Ao[e]=i;i=Im(i);for(let r=0;r<ud.length;r++){const o=ud[r]+i;if(o in a)return Ao[e]=o}return e}const ld="http://www.w3.org/1999/xlink";function _p(a,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?a.removeAttributeNS(ld,e.slice(6,e.length)):a.setAttributeNS(ld,e,n);else{const o=tk(e);n==null||o&&!vm(n)?a.removeAttribute(e):a.setAttribute(e,o?"":n)}}function kp(a,e,n,i,r,o,t){if(e==="innerHTML"||e==="textContent"){i&&t(i,r,o),a[e]=n==null?"":n;return}if(e==="value"&&a.tagName!=="PROGRESS"&&!a.tagName.includes("-")){a._value=n;const d=n==null?"":n;(a.value!==d||a.tagName==="OPTION")&&(a.value=d),n==null&&a.removeAttribute(e);return}let s=!1;if(n===""||n==null){const d=typeof a[e];d==="boolean"?n=vm(n):n==null&&d==="string"?(n="",s=!0):d==="number"&&(n=0,s=!0)}try{a[e]=n}catch{}s&&a.removeAttribute(e)}const[fu,cp]=(()=>{let a=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(a=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[a,e]})();let st=0;const pp=Promise.resolve(),hp=()=>{st=0},gp=()=>st||(pp.then(hp),st=fu());function Vn(a,e,n,i){a.addEventListener(e,n,i)}function yp(a,e,n,i){a.removeEventListener(e,n,i)}function fp(a,e,n,i,r=null){const o=a._vei||(a._vei={}),t=o[e];if(i&&t)t.value=i;else{const[s,d]=jp(e);if(i){const m=o[e]=bp(i,r);Vn(a,s,m,d)}else t&&(yp(a,s,t,d),o[e]=void 0)}}const _d=/(?:Once|Passive|Capture)$/;function jp(a){let e;if(_d.test(a)){e={};let i;for(;i=a.match(_d);)a=a.slice(0,a.length-i[0].length),e[i[0].toLowerCase()]=!0}return[a[2]===":"?a.slice(3):Bn(a.slice(2)),e]}function bp(a,e){const n=i=>{const r=i.timeStamp||fu();(cp||r>=n.attached-1)&&ga(vp(i,n.value),e,5,[i])};return n.value=a,n.attached=gp(),n}function vp(a,e){if(re(e)){const n=a.stopImmediatePropagation;return a.stopImmediatePropagation=()=>{n.call(a),a._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const kd=/^on[a-z]/,wp=(a,e,n,i,r=!1,o,t,s,d)=>{e==="class"?mp(a,i,r):e==="style"?up(a,n,i):Yr(e)?Tt(e)||fp(a,e,n,i,t):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xp(a,e,i,r))?kp(a,e,i,o,t,s,d):(e==="true-value"?a._trueValue=i:e==="false-value"&&(a._falseValue=i),_p(a,e,i,r))};function xp(a,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in a&&kd.test(e)&&me(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&a.tagName==="INPUT"||e==="type"&&a.tagName==="TEXTAREA"||kd.test(e)&&Ke(n)?!1:e in a}const en="transition",vi="animation",Gt=(a,{slots:e})=>op(Qm,Cp(a),e);Gt.displayName="Transition";const ju={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Gt.props=Ge({},Qm.props,ju);const jn=(a,e=[])=>{re(a)?a.forEach(n=>n(...e)):a&&a(...e)},cd=a=>a?re(a)?a.some(e=>e.length>1):a.length>1:!1;function Cp(a){const e={};for(const W in a)W in ju||(e[W]=a[W]);if(a.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:t=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:d=o,appearActiveClass:m=t,appearToClass:k=s,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:c=`${n}-leave-active`,leaveToClass:b=`${n}-leave-to`}=a,w=Ep(r),B=w&&w[0],L=w&&w[1],{onBeforeEnter:G,onEnter:q,onEnterCancelled:Y,onLeave:te,onLeaveCancelled:I,onBeforeAppear:Z=G,onAppear:X=q,onAppearCancelled:H=Y}=e,ae=(W,pe,Oe)=>{bn(W,pe?k:s),bn(W,pe?m:t),Oe&&Oe()},se=(W,pe)=>{W._isLeaving=!1,bn(W,u),bn(W,b),bn(W,c),pe&&pe()},ue=W=>(pe,Oe)=>{const fa=W?X:q,Fe=()=>ae(pe,W,Oe);jn(fa,[pe,Fe]),pd(()=>{bn(pe,W?d:o),an(pe,W?k:s),cd(fa)||hd(pe,i,B,Fe)})};return Ge(e,{onBeforeEnter(W){jn(G,[W]),an(W,o),an(W,t)},onBeforeAppear(W){jn(Z,[W]),an(W,d),an(W,m)},onEnter:ue(!1),onAppear:ue(!0),onLeave(W,pe){W._isLeaving=!0;const Oe=()=>se(W,pe);an(W,u),Sp(),an(W,c),pd(()=>{!W._isLeaving||(bn(W,u),an(W,b),cd(te)||hd(W,i,L,Oe))}),jn(te,[W,Oe])},onEnterCancelled(W){ae(W,!1),jn(Y,[W])},onAppearCancelled(W){ae(W,!0),jn(H,[W])},onLeaveCancelled(W){se(W),jn(I,[W])}})}function Ep(a){if(a==null)return null;if(ze(a))return[No(a.enter),No(a.leave)];{const e=No(a);return[e,e]}}function No(a){return Di(a)}function an(a,e){e.split(/\s+/).forEach(n=>n&&a.classList.add(n)),(a._vtc||(a._vtc=new Set)).add(e)}function bn(a,e){e.split(/\s+/).forEach(i=>i&&a.classList.remove(i));const{_vtc:n}=a;n&&(n.delete(e),n.size||(a._vtc=void 0))}function pd(a){requestAnimationFrame(()=>{requestAnimationFrame(a)})}let Ip=0;function hd(a,e,n,i){const r=a._endId=++Ip,o=()=>{r===a._endId&&i()};if(n)return setTimeout(o,n);const{type:t,timeout:s,propCount:d}=Tp(a,e);if(!t)return i();const m=t+"end";let k=0;const u=()=>{a.removeEventListener(m,c),o()},c=b=>{b.target===a&&++k>=d&&u()};setTimeout(()=>{k<d&&u()},s+1),a.addEventListener(m,c)}function Tp(a,e){const n=window.getComputedStyle(a),i=w=>(n[w]||"").split(", "),r=i(en+"Delay"),o=i(en+"Duration"),t=gd(r,o),s=i(vi+"Delay"),d=i(vi+"Duration"),m=gd(s,d);let k=null,u=0,c=0;e===en?t>0&&(k=en,u=t,c=o.length):e===vi?m>0&&(k=vi,u=m,c=d.length):(u=Math.max(t,m),k=u>0?t>m?en:vi:null,c=k?k===en?o.length:d.length:0);const b=k===en&&/\b(transform|all)(,|$)/.test(n[en+"Property"]);return{type:k,timeout:u,propCount:c,hasTransform:b}}function gd(a,e){for(;a.length<e.length;)a=a.concat(a);return Math.max(...e.map((n,i)=>yd(n)+yd(a[i])))}function yd(a){return Number(a.slice(0,-1).replace(",","."))*1e3}function Sp(){return document.body.offsetHeight}const fd=a=>{const e=a.props["onUpdate:modelValue"]||!1;return re(e)?n=>fr(e,n):e};function Ap(a){a.target.composing=!0}function jd(a){const e=a.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Np={created(a,{modifiers:{lazy:e,trim:n,number:i}},r){a._assign=fd(r);const o=i||r.props&&r.props.type==="number";Vn(a,e?"change":"input",t=>{if(t.target.composing)return;let s=a.value;n&&(s=s.trim()),o&&(s=Di(s)),a._assign(s)}),n&&Vn(a,"change",()=>{a.value=a.value.trim()}),e||(Vn(a,"compositionstart",Ap),Vn(a,"compositionend",jd),Vn(a,"change",jd))},mounted(a,{value:e}){a.value=e==null?"":e},beforeUpdate(a,{value:e,modifiers:{lazy:n,trim:i,number:r}},o){if(a._assign=fd(o),a.composing||document.activeElement===a&&a.type!=="range"&&(n||i&&a.value.trim()===e||(r||a.type==="number")&&Di(a.value)===e))return;const t=e==null?"":e;a.value!==t&&(a.value=t)}},Rp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},bd=(a,e)=>n=>{if(!("key"in n))return;const i=Bn(n.key);if(e.some(r=>r===i||Rp[r]===i))return a(n)},zp=Ge({patchProp:wp},dp);let vd;function Dp(){return vd||(vd=Hc(zp))}const Pp=(...a)=>{const e=Dp().createApp(...a),{mount:n}=e;return e.mount=i=>{const r=Op(i);if(!r)return;const o=e._component;!me(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const t=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),t},e};function Op(a){return Ke(a)?document.querySelector(a):a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(a,e){if(!a)throw li(e)},li=function(a){return new Error("Firebase Database ("+bu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=function(a){const e=[];let n=0;for(let i=0;i<a.length;i++){let r=a.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<a.length&&(a.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(a.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Mp=function(a){const e=[];let n=0,i=0;for(;n<a.length;){const r=a[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=a[n++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=a[n++],t=a[n++],s=a[n++],d=((r&7)<<18|(o&63)<<12|(t&63)<<6|s&63)-65536;e[i++]=String.fromCharCode(55296+(d>>10)),e[i++]=String.fromCharCode(56320+(d&1023))}else{const o=a[n++],t=a[n++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|t&63)}}return e.join("")},Jt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,e){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<a.length;r+=3){const o=a[r],t=r+1<a.length,s=t?a[r+1]:0,d=r+2<a.length,m=d?a[r+2]:0,k=o>>2,u=(o&3)<<4|s>>4;let c=(s&15)<<2|m>>6,b=m&63;d||(b=64,t||(c=64)),i.push(n[k],n[u],n[c],n[b])}return i.join("")},encodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(a):this.encodeByteArray(vu(a),e)},decodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(a):Mp(this.decodeStringToByteArray(a,e))},decodeStringToByteArray(a,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<a.length;){const o=n[a.charAt(r++)],s=r<a.length?n[a.charAt(r)]:0;++r;const m=r<a.length?n[a.charAt(r)]:64;++r;const u=r<a.length?n[a.charAt(r)]:64;if(++r,o==null||s==null||m==null||u==null)throw Error();const c=o<<2|s>>4;if(i.push(c),m!==64){const b=s<<4&240|m>>2;if(i.push(b),u!==64){const w=m<<6&192|u;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}},wu=function(a){const e=vu(a);return Jt.encodeByteArray(e,!0)},xu=function(a){return wu(a).replace(/\./g,"")},wd=function(a){try{return Jt.decodeString(a,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(a){return Cu(void 0,a)}function Cu(a,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:a===void 0&&(a={});break;case Array:a=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Lp(n)||(a[n]=Cu(a[n],e[n]));return a}function Lp(a){return a!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bp())}function qp(){const a=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof a=="object"&&a.id!==void 0}function $p(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Iu(){return bu.NODE_ADMIN===!0}function Tu(){return typeof indexedDB=="object"}function Su(){return new Promise((a,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),a(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function Hp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="FirebaseError";class qn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Wp,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,to.prototype.create)}}class to{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],t=o?Up(o,i):"Error",s=`${this.serviceName}: ${t} (${r}).`;return new qn(r,s,i)}}function Up(a,e){return a.replace(Kp,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Kp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(a){return JSON.parse(a)}function $e(a){return JSON.stringify(a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=function(a){let e={},n={},i={},r="";try{const o=a.split(".");e=Li(wd(o[0])||""),n=Li(wd(o[1])||""),r=o[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},Vp=function(a){const e=Au(a),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Yp=function(a){const e=Au(a).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(a,e){return Object.prototype.hasOwnProperty.call(a,e)}function oi(a,e){if(Object.prototype.hasOwnProperty.call(a,e))return a[e]}function xd(a){for(const e in a)if(Object.prototype.hasOwnProperty.call(a,e))return!1;return!0}function Ar(a,e,n){const i={};for(const r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i[r]=e.call(n,a[r],r,a));return i}function Nr(a,e){if(a===e)return!0;const n=Object.keys(a),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const o=a[r],t=e[r];if(Cd(o)&&Cd(t)){if(!Nr(o,t))return!1}else if(o!==t)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Cd(a){return a!==null&&typeof a=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(a){const e=[];for(const[n,i]of Object.entries(a))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const c=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(c<<1|c>>>31)&4294967295}let r=this.chain_[0],o=this.chain_[1],t=this.chain_[2],s=this.chain_[3],d=this.chain_[4],m,k;for(let u=0;u<80;u++){u<40?u<20?(m=s^o&(t^s),k=1518500249):(m=o^t^s,k=1859775393):u<60?(m=o&t|s&(o|t),k=2400959708):(m=o^t^s,k=3395469782);const c=(r<<5|r>>>27)+m+d+k+i[u]&4294967295;d=s,s=t,t=(o<<30|o>>>2)&4294967295,o=r,r=c}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+t&4294967295,this.chain_[3]=this.chain_[3]+s&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const o=this.buf_;let t=this.inbuf_;for(;r<n;){if(t===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(o[t]=e.charCodeAt(r),++t,++r,t===this.blockSize){this.compress_(o),t=0;break}}else for(;r<n;)if(o[t]=e[r],++t,++r,t===this.blockSize){this.compress_(o),t=0;break}}this.inbuf_=t,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let o=24;o>=0;o-=8)e[i]=this.chain_[r]>>o&255,++i;return e}}function Nu(a,e){return`${a} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=function(a){const e=[];let n=0;for(let i=0;i<a.length;i++){let r=a.charCodeAt(i);if(r>=55296&&r<=56319){const o=r-55296;i++,P(i<a.length,"Surrogate pair missing trail surrogate.");const t=a.charCodeAt(i)-56320;r=65536+(o<<10)+t}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},so=function(a){let e=0;for(let n=0;n<a.length;n++){const i=a.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Xp=1e3,Zp=2,eh=4*60*60*1e3,ah=.5;function Ed(a,e=Xp,n=Zp){const i=e*Math.pow(n,a),r=Math.round(ah*i*(Math.random()-.5)*2);return Math.min(eh,i+r)}/**
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
 */function _i(a){return a&&a._delegate?a._delegate:a}class Va{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wn="[DEFAULT]";/**
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
 */class nh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Qt;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rh(e))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wn){return this.instances.has(e)}getOptions(e=wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,t]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(o);i===s&&t.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);const t=this.instances.get(r);return t&&e(t,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ih(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=wn){return this.component?this.component.multipleInstances?e:wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ih(a){return a===wn?void 0:a}function rh(a){return a.instantiationMode==="EAGER"}/**
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
 */class oh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(Ae||(Ae={}));const th={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},sh=Ae.INFO,dh={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},mh=(a,e,...n)=>{if(e<a.logLevel)return;const i=new Date().toISOString(),r=dh[e];if(r)console[r](`[${i}]  ${a.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xt{constructor(e){this.name=e,this._logLevel=sh,this._logHandler=mh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?th[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const uh=(a,e)=>e.some(n=>a instanceof n);let Id,Td;function lh(){return Id||(Id=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _h(){return Td||(Td=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ru=new WeakMap,dt=new WeakMap,zu=new WeakMap,Ro=new WeakMap,Zt=new WeakMap;function kh(a){const e=new Promise((n,i)=>{const r=()=>{a.removeEventListener("success",o),a.removeEventListener("error",t)},o=()=>{n(sn(a.result)),r()},t=()=>{i(a.error),r()};a.addEventListener("success",o),a.addEventListener("error",t)});return e.then(n=>{n instanceof IDBCursor&&Ru.set(n,a)}).catch(()=>{}),Zt.set(e,a),e}function ch(a){if(dt.has(a))return;const e=new Promise((n,i)=>{const r=()=>{a.removeEventListener("complete",o),a.removeEventListener("error",t),a.removeEventListener("abort",t)},o=()=>{n(),r()},t=()=>{i(a.error||new DOMException("AbortError","AbortError")),r()};a.addEventListener("complete",o),a.addEventListener("error",t),a.addEventListener("abort",t)});dt.set(a,e)}let mt={get(a,e,n){if(a instanceof IDBTransaction){if(e==="done")return dt.get(a);if(e==="objectStoreNames")return a.objectStoreNames||zu.get(a);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(a[e])},set(a,e,n){return a[e]=n,!0},has(a,e){return a instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in a}};function ph(a){mt=a(mt)}function hh(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=a.call(zo(this),e,...n);return zu.set(i,e.sort?e.sort():[e]),sn(i)}:_h().includes(a)?function(...e){return a.apply(zo(this),e),sn(Ru.get(this))}:function(...e){return sn(a.apply(zo(this),e))}}function gh(a){return typeof a=="function"?hh(a):(a instanceof IDBTransaction&&ch(a),uh(a,lh())?new Proxy(a,mt):a)}function sn(a){if(a instanceof IDBRequest)return kh(a);if(Ro.has(a))return Ro.get(a);const e=gh(a);return e!==a&&(Ro.set(a,e),Zt.set(e,a)),e}const zo=a=>Zt.get(a);function Du(a,e,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const t=indexedDB.open(a,e),s=sn(t);return i&&t.addEventListener("upgradeneeded",d=>{i(sn(t.result),d.oldVersion,d.newVersion,sn(t.transaction))}),n&&t.addEventListener("blocked",()=>n()),s.then(d=>{o&&d.addEventListener("close",()=>o()),r&&d.addEventListener("versionchange",()=>r())}).catch(()=>{}),s}const yh=["get","getKey","getAll","getAllKeys","count"],fh=["put","add","delete","clear"],Do=new Map;function Sd(a,e){if(!(a instanceof IDBDatabase&&!(e in a)&&typeof e=="string"))return;if(Do.get(e))return Do.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=fh.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||yh.includes(n)))return;const o=async function(t,...s){const d=this.transaction(t,r?"readwrite":"readonly");let m=d.store;return i&&(m=m.index(s.shift())),(await Promise.all([m[n](...s),r&&d.done]))[0]};return Do.set(e,o),o}ph(a=>({...a,get:(e,n,i)=>Sd(e,n)||a.get(e,n,i),has:(e,n)=>!!Sd(e,n)||a.has(e,n)}));/**
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
 */class jh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bh(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function bh(a){const e=a.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ut="@firebase/app",Ad="0.7.32";/**
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
 */const Rn=new Xt("@firebase/app"),vh="@firebase/app-compat",wh="@firebase/analytics-compat",xh="@firebase/analytics",Ch="@firebase/app-check-compat",Eh="@firebase/app-check",Ih="@firebase/auth",Th="@firebase/auth-compat",Sh="@firebase/database",Ah="@firebase/database-compat",Nh="@firebase/functions",Rh="@firebase/functions-compat",zh="@firebase/installations",Dh="@firebase/installations-compat",Ph="@firebase/messaging",Oh="@firebase/messaging-compat",Mh="@firebase/performance",Fh="@firebase/performance-compat",Lh="@firebase/remote-config",Bh="@firebase/remote-config-compat",qh="@firebase/storage",$h="@firebase/storage-compat",Hh="@firebase/firestore",Wh="@firebase/firestore-compat",Uh="firebase",Kh="9.9.4";/**
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
 */const Pu="[DEFAULT]",Vh={[ut]:"fire-core",[vh]:"fire-core-compat",[xh]:"fire-analytics",[wh]:"fire-analytics-compat",[Eh]:"fire-app-check",[Ch]:"fire-app-check-compat",[Ih]:"fire-auth",[Th]:"fire-auth-compat",[Sh]:"fire-rtdb",[Ah]:"fire-rtdb-compat",[Nh]:"fire-fn",[Rh]:"fire-fn-compat",[zh]:"fire-iid",[Dh]:"fire-iid-compat",[Ph]:"fire-fcm",[Oh]:"fire-fcm-compat",[Mh]:"fire-perf",[Fh]:"fire-perf-compat",[Lh]:"fire-rc",[Bh]:"fire-rc-compat",[qh]:"fire-gcs",[$h]:"fire-gcs-compat",[Hh]:"fire-fst",[Wh]:"fire-fst-compat","fire-js":"fire-js",[Uh]:"fire-js-all"};/**
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
 */const Rr=new Map,lt=new Map;function Yh(a,e){try{a.container.addComponent(e)}catch(n){Rn.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,n)}}function kn(a){const e=a.name;if(lt.has(e))return Rn.debug(`There were multiple attempts to register component ${e}.`),!1;lt.set(e,a);for(const n of Rr.values())Yh(n,a);return!0}function Ji(a,e){const n=a.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),a.container.getProvider(e)}/**
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
 */const Gh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zn=new to("app","Firebase",Gh);/**
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
 */class Jh{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Va("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
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
 */const Qh=Kh;function Xh(a,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Pu,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw zn.create("bad-app-name",{appName:String(i)});const r=Rr.get(i);if(r){if(Nr(a,r.options)&&Nr(n,r.config))return r;throw zn.create("duplicate-app",{appName:i})}const o=new oh(i);for(const s of lt.values())o.addComponent(s);const t=new Jh(a,n,o);return Rr.set(i,t),t}function Ou(a=Pu){const e=Rr.get(a);if(!e)throw zn.create("no-app",{appName:a});return e}function Ma(a,e,n){var i;let r=(i=Vh[a])!==null&&i!==void 0?i:a;n&&(r+=`-${n}`);const o=r.match(/\s|\//),t=e.match(/\s|\//);if(o||t){const s=[`Unable to register library "${r}" with version "${e}":`];o&&s.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&t&&s.push("and"),t&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rn.warn(s.join(" "));return}kn(new Va(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Zh="firebase-heartbeat-database",eg=1,Bi="firebase-heartbeat-store";let Po=null;function Mu(){return Po||(Po=Du(Zh,eg,{upgrade:(a,e)=>{switch(e){case 0:a.createObjectStore(Bi)}}}).catch(a=>{throw zn.create("idb-open",{originalErrorMessage:a.message})})),Po}async function ag(a){var e;try{return(await Mu()).transaction(Bi).objectStore(Bi).get(Fu(a))}catch(n){if(n instanceof qn)Rn.warn(n.message);else{const i=zn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Rn.warn(i.message)}}}async function Nd(a,e){var n;try{const r=(await Mu()).transaction(Bi,"readwrite");return await r.objectStore(Bi).put(e,Fu(a)),r.done}catch(i){if(i instanceof qn)Rn.warn(i.message);else{const r=zn.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});Rn.warn(r.message)}}}function Fu(a){return`${a.name}!${a.options.appId}`}/**
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
 */const ng=1024,ig=30*24*60*60*1e3;class rg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tg(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Rd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=ig}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Rd(),{heartbeatsToSend:n,unsentEntries:i}=og(this._heartbeatsCache.heartbeats),r=xu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Rd(){return new Date().toISOString().substring(0,10)}function og(a,e=ng){const n=[];let i=a.slice();for(const r of a){const o=n.find(t=>t.agent===r.agent);if(o){if(o.dates.push(r.date),zd(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),zd(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class tg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tu()?Su().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ag(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function zd(a){return xu(JSON.stringify({version:2,heartbeats:a})).length}/**
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
 */function sg(a){kn(new Va("platform-logger",e=>new jh(e),"PRIVATE")),kn(new Va("heartbeat",e=>new rg(e),"PRIVATE")),Ma(ut,Ad,a),Ma(ut,Ad,"esm2017"),Ma("fire-js","")}sg("");var dg="firebase",mg="9.9.4";/**
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
 */Ma(dg,mg,"app");const Dd="@firebase/database",Pd="0.13.6";/**
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
 */let Lu="";function ug(a){Lu=a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Li(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ga(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=function(a){try{if(typeof window<"u"&&typeof window[a]<"u"){const e=window[a];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new lg(e)}}catch{}return new _g},Tn=Bu("localStorage"),_t=Bu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new Xt("@firebase/database"),kg=function(){let a=1;return function(){return a++}}(),qu=function(a){const e=Qp(a),n=new Jp;n.update(e);const i=n.digest();return Jt.encodeByteArray(i)},Qi=function(...a){let e="";for(let n=0;n<a.length;n++){const i=a[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Qi.apply(null,i):typeof i=="object"?e+=$e(i):e+=i,e+=" "}return e};let Nn=null,Od=!0;const cg=function(a,e){P(!e||a===!0||a===!1,"Can't turn on custom loggers persistently."),a===!0?(ai.logLevel=Ae.VERBOSE,Nn=ai.log.bind(ai),e&&_t.set("logging_enabled",!0)):typeof a=="function"?Nn=a:(Nn=null,_t.remove("logging_enabled"))},Je=function(...a){if(Od===!0&&(Od=!1,Nn===null&&_t.get("logging_enabled")===!0&&cg(!0)),Nn){const e=Qi.apply(null,a);Nn(e)}},Xi=function(a){return function(...e){Je(a,...e)}},kt=function(...a){const e="FIREBASE INTERNAL ERROR: "+Qi(...a);ai.error(e)},Dn=function(...a){const e=`FIREBASE FATAL ERROR: ${Qi(...a)}`;throw ai.error(e),new Error(e)},la=function(...a){const e="FIREBASE WARNING: "+Qi(...a);ai.warn(e)},pg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&la("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},$u=function(a){return typeof a=="number"&&(a!==a||a===Number.POSITIVE_INFINITY||a===Number.NEGATIVE_INFINITY)},hg=function(a){if(document.readyState==="complete")a();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,a())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ti="[MIN_NAME]",Pn="[MAX_NAME]",ki=function(a,e){if(a===e)return 0;if(a===ti||e===Pn)return-1;if(e===ti||a===Pn)return 1;{const n=Md(a),i=Md(e);return n!==null?i!==null?n-i===0?a.length-e.length:n-i:-1:i!==null?1:a<e?-1:1}},gg=function(a,e){return a===e?0:a<e?-1:1},wi=function(a,e){if(e&&a in e)return e[a];throw new Error("Missing required key ("+a+") in object: "+$e(e))},es=function(a){if(typeof a!="object"||a===null)return $e(a);const e=[];for(const i in a)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=$e(e[i]),n+=":",n+=es(a[e[i]]);return n+="}",n},Hu=function(a,e){const n=a.length;if(n<=e)return[a];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(a.substring(r,n)):i.push(a.substring(r,r+e));return i};function ma(a,e){for(const n in a)a.hasOwnProperty(n)&&e(n,a[n])}const Wu=function(a){P(!$u(a),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,o,t,s,d;a===0?(o=0,t=0,r=1/a===-1/0?1:0):(r=a<0,a=Math.abs(a),a>=Math.pow(2,1-i)?(s=Math.min(Math.floor(Math.log(a)/Math.LN2),i),o=s+i,t=Math.round(a*Math.pow(2,n-s)-Math.pow(2,n))):(o=0,t=Math.round(a/Math.pow(2,1-i-n))));const m=[];for(d=n;d;d-=1)m.push(t%2?1:0),t=Math.floor(t/2);for(d=e;d;d-=1)m.push(o%2?1:0),o=Math.floor(o/2);m.push(r?1:0),m.reverse();const k=m.join("");let u="";for(d=0;d<64;d+=8){let c=parseInt(k.substr(d,8),2).toString(16);c.length===1&&(c="0"+c),u=u+c}return u.toLowerCase()},yg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function jg(a,e){let n="Unknown Error";a==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":a==="permission_denied"?n="Client doesn't have permission to access the desired data.":a==="unavailable"&&(n="The service is unavailable");const i=new Error(a+" at "+e._path.toString()+": "+n);return i.code=a.toUpperCase(),i}const bg=new RegExp("^-?(0*)\\d{1,10}$"),vg=-2147483648,wg=2147483647,Md=function(a){if(bg.test(a)){const e=Number(a);if(e>=vg&&e<=wg)return e}return null},Zi=function(a){try{a()}catch(e){setTimeout(()=>{const n=e.stack||"";throw la("Exception was thrown by user callback.",n),e},Math.floor(0))}},xg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Si=function(a,e){const n=setTimeout(a,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Cg{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){la(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',la(e)}}class ct{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ct.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="5",Uu="v",Ku="s",Vu="r",Yu="f",Gu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ju="ls",Qu="p",pt="ac",Xu="websocket",Zu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n,i,r,o=!1,t="",s=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=o,this.persistenceKey=t,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Tn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Tn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Tg(a){return a.host!==a.internalHost||a.isCustomHost()||a.includeNamespaceInQueryParams}function el(a,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let i;if(e===Xu)i=(a.secure?"wss://":"ws://")+a.internalHost+"/.ws?";else if(e===Zu)i=(a.secure?"https://":"http://")+a.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Tg(a)&&(n.ns=a.namespace);const r=[];return ma(n,(o,t)=>{r.push(o+"="+t)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.counters_={}}incrementCounter(e,n=1){Ga(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Fp(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo={},Mo={};function ns(a){const e=a.toString();return Oo[e]||(Oo[e]=new Sg),Oo[e]}function Ag(a,e){const n=a.toString();return Mo[n]||(Mo[n]=e()),Mo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Zi(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="start",Rg="close",zg="pLPCommand",Dg="pRTLPCB",al="id",nl="pw",il="ser",Pg="cb",Og="seg",Mg="ts",Fg="d",Lg="dframe",rl=1870,ol=30,Bg=rl-ol,qg=25e3,$g=3e4;class Yn{constructor(e,n,i,r,o,t,s){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=o,this.transportSessionId=t,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xi(e),this.stats_=ns(n),this.urlFn=d=>(this.appCheckToken&&(d[pt]=this.appCheckToken),el(n,Zu,d))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ng(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($g)),hg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new is((...o)=>{const[t,s,d,m,k]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===Fd)this.id=s,this.password=d;else if(t===Rg)s?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(s,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+t)},(...o)=>{const[t,s]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(t,s)},()=>{this.onClosed_()},this.urlFn);const i={};i[Fd]="t",i[il]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Pg]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Uu]=as,this.transportSessionId&&(i[Ku]=this.transportSessionId),this.lastSessionId&&(i[Ju]=this.lastSessionId),this.applicationId&&(i[Qu]=this.applicationId),this.appCheckToken&&(i[pt]=this.appCheckToken),typeof location<"u"&&location.hostname&&Gu.test(location.hostname)&&(i[Vu]=Yu);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Yn.forceAllow_=!0}static forceDisallow(){Yn.forceDisallow_=!0}static isAvailable(){return Yn.forceAllow_?!0:!Yn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yg()&&!fg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=wu(n),r=Hu(i,Bg);for(let o=0;o<r.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[o]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Lg]="t",i[al]=e,i[nl]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=$e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class is{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=kg(),window[zg+this.uniqueCallbackIdentifier]=e,window[Dg+this.uniqueCallbackIdentifier]=n,this.myIFrame=is.createIFrame_();let o="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const s=document.domain;o='<script>document.domain="'+s+'";<\/script>'}const t="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(t),this.myIFrame.doc.close()}catch(s){Je("frame writing exception"),s.stack&&Je(s.stack),Je(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Je("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[al]=this.myID,e[nl]=this.myPW,e[il]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ol+i.length<=rl;){const t=this.pendingSegs.shift();i=i+"&"+Og+r+"="+t.seg+"&"+Mg+r+"="+t.ts+"&"+Fg+r+"="+t.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(qg)),o=()=>{clearTimeout(r),i()};this.addTag(e,o)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=16384,Wg=45e3;let zr=null;typeof MozWebSocket<"u"?zr=MozWebSocket:typeof WebSocket<"u"&&(zr=WebSocket);class xa{constructor(e,n,i,r,o,t,s){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xi(this.connId),this.stats_=ns(n),this.connURL=xa.connectionURL_(n,t,s,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,o){const t={};return t[Uu]=as,typeof location<"u"&&location.hostname&&Gu.test(location.hostname)&&(t[Vu]=Yu),n&&(t[Ku]=n),i&&(t[Ju]=i),r&&(t[pt]=r),o&&(t[Qu]=o),el(e,Xu,t)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Tn.set("previous_websocket_failure",!0);try{let i;Iu(),this.mySock=new zr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){xa.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&zr!==null&&!xa.forceDisallow_}static previouslyFailed(){return Tn.isInMemoryStorage||Tn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Tn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Li(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Hu(n,Hg);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Wg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xa.responsesRequiredToBeHealthy=2;xa.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Yn,xa]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=xa&&xa.isAvailable();let i=n&&!xa.previouslyFailed();if(e.webSocketOnly&&(n||la("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[xa];else{const r=this.transports_=[];for(const o of qi.ALL_TRANSPORTS)o&&o.isAvailable()&&r.push(o);qi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=6e4,Kg=5e3,Vg=10*1024,Yg=100*1024,Fo="t",Ld="d",Gg="s",Bd="r",Jg="e",qd="o",$d="a",Hd="n",Wd="p",Qg="h";class Xg{constructor(e,n,i,r,o,t,s,d,m,k){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=o,this.onMessage_=t,this.onReady_=s,this.onDisconnect_=d,this.onKill_=m,this.lastSessionId=k,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xi("c:"+this.id+":"),this.transportManager_=new qi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Si(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Yg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Vg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Fo in e){const n=e[Fo];n===$d?this.upgradeIfSecondaryHealthy_():n===Bd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===qd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=wi("t",e),i=wi("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$d,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Hd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=wi("t",e),i=wi("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=wi(Fo,e);if(Ld in e){const i=e[Ld];if(n===Qg)this.onHandshake_(i);else if(n===Hd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Gg?this.onConnectionShutdown_(i):n===Bd?this.onReset_(i):n===Jg?kt("Server Error: "+i):n===qd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kt("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),as!==i&&la("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Si(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ug))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Si(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Kg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Tn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let o=0;o<r.length;o++)if(r[o].callback===n&&(!i||i===r[o].context)){r.splice(o,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends sl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Eu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Dr}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=32,Kd=768;class Se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function fe(){return new Se("")}function ge(a){return a.pieceNum_>=a.pieces_.length?null:a.pieces_[a.pieceNum_]}function cn(a){return a.pieces_.length-a.pieceNum_}function Ne(a){let e=a.pieceNum_;return e<a.pieces_.length&&e++,new Se(a.pieces_,e)}function dl(a){return a.pieceNum_<a.pieces_.length?a.pieces_[a.pieces_.length-1]:null}function Zg(a){let e="";for(let n=a.pieceNum_;n<a.pieces_.length;n++)a.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(a.pieces_[n])));return e||"/"}function ml(a,e=0){return a.pieces_.slice(a.pieceNum_+e)}function ul(a){if(a.pieceNum_>=a.pieces_.length)return null;const e=[];for(let n=a.pieceNum_;n<a.pieces_.length-1;n++)e.push(a.pieces_[n]);return new Se(e,0)}function He(a,e){const n=[];for(let i=a.pieceNum_;i<a.pieces_.length;i++)n.push(a.pieces_[i]);if(e instanceof Se)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new Se(n,0)}function ce(a){return a.pieceNum_>=a.pieces_.length}function ra(a,e){const n=ge(a),i=ge(e);if(n===null)return e;if(n===i)return ra(Ne(a),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+a+")")}function ll(a,e){if(cn(a)!==cn(e))return!1;for(let n=a.pieceNum_,i=e.pieceNum_;n<=a.pieces_.length;n++,i++)if(a.pieces_[n]!==e.pieces_[i])return!1;return!0}function Ea(a,e){let n=a.pieceNum_,i=e.pieceNum_;if(cn(a)>cn(e))return!1;for(;n<a.pieces_.length;){if(a.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class ey{constructor(e,n){this.errorPrefix_=n,this.parts_=ml(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=so(this.parts_[i]);_l(this)}}function ay(a,e){a.parts_.length>0&&(a.byteLength_+=1),a.parts_.push(e),a.byteLength_+=so(e),_l(a)}function ny(a){const e=a.parts_.pop();a.byteLength_-=so(e),a.parts_.length>0&&(a.byteLength_-=1)}function _l(a){if(a.byteLength_>Kd)throw new Error(a.errorPrefix_+"has a key path longer than "+Kd+" bytes ("+a.byteLength_+").");if(a.parts_.length>Ud)throw new Error(a.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ud+") or object contains a cycle "+xn(a))}function xn(a){return a.parts_.length===0?"":"in property '"+a.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends sl{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new rs}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=1e3,iy=60*5*1e3,Vd=30*1e3,ry=1.3,oy=3e4,ty="server_kill",Yd=3;class Ua extends tl{constructor(e,n,i,r,o,t,s,d){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=o,this.authTokenProvider_=t,this.appCheckTokenProvider_=s,this.authOverride_=d,this.id=Ua.nextPersistentConnectionId_++,this.log_=Xi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xi,this.maxReconnectDelay_=iy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,d&&!Iu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Dr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,o={r,a:e,b:n};this.log_($e(o)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new Qt,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:t=>{const s=t.d;t.s==="ok"?n.resolve(s):n.reject(s)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(e,n,i,r){this.initConnection_();const o=e._queryIdentifier,t=e._path.toString();this.log_("Listen called for "+t+" "+o),this.listens.has(t)||this.listens.set(t,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(t).has(o),"listen() called twice for same path/queryId.");const s={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(t).set(o,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const o={p:i},t="q";e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(t,o,s=>{const d=s.d,m=s.s;Ua.warnOnListenWarnings_(d,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",s),m!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(m,d))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ga(e,"w")){const i=oi(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();la(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Yp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Vp(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const o=r.s,t=r.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,t))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const o={p:e},t="n";r&&(o.q=i,o.t=r),this.sendRequest(t,o)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const o={p:n,d:i};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,t=>{r&&setTimeout(()=>{r(t.s,t.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,o){this.initConnection_();const t={p:n,d:i};o!==void 0&&(t.h=o),this.outstandingPuts_.push({action:e,request:t,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(o.s,o.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const o=i.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$e(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):kt("Unrecognized action received from server: "+$e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>oy&&(this.reconnectDelay_=xi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ry)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Ua.nextConnectionId_++,o=this.lastSessionId;let t=!1,s=null;const d=function(){s?s.close():(t=!0,i())},m=function(u){P(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(u)};this.realtime_={close:d,sendRequest:m};const k=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,c]=await Promise.all([this.authTokenProvider_.getToken(k),this.appCheckTokenProvider_.getToken(k)]);t?Je("getToken() completed but was canceled"):(Je("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=c&&c.token,s=new Xg(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,b=>{la(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(ty)},o))}catch(u){this.log_("Failed to get token: "+u),t||(this.repoInfo_.nodeAdmin&&la(u),d())}}}interrupt(e){Je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xd(this.interruptReasons_)&&(this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(o=>es(o)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new Se(e).toString();let r;if(this.listens.has(i)){const o=this.listens.get(i);r=o.get(n),o.delete(n),o.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Yd&&(this.reconnectDelay_=Vd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Yd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Lu.replace(/\./g,"-")]=1,Eu()?e["framework.cordova"]=1:$p()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Dr.getInstance().currentlyOnline();return xd(this.interruptReasons_)&&e}}Ua.nextPersistentConnectionId_=0;Ua.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ke(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ke(ti,e),r=new ke(ti,n);return this.compare(i,r)!==0}minPost(){return ke.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kr;class kl extends mo{static get __EMPTY_NODE(){return kr}static set __EMPTY_NODE(e){kr=e}compare(e,n){return ki(e.name,n.name)}isDefinedOn(e){throw li("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ke.MIN}maxPost(){return new ke(Pn,kr)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new ke(e,kr)}toString(){return".key"}}const ni=new kl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,i,r,o=null){this.isReverse_=r,this.resultGenerator_=o,this.nodeStack_=[];let t=1;for(;!e.isEmpty();)if(e=e,t=n?i(e.key,n):1,r&&(t*=-1),t<0)this.isReverse_?e=e.left:e=e.right;else if(t===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ue{constructor(e,n,i,r,o){this.key=e,this.value=n,this.color=i!=null?i:Ue.RED,this.left=r!=null?r:da.EMPTY_NODE,this.right=o!=null?o:da.EMPTY_NODE}copy(e,n,i,r,o){return new Ue(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,o!=null?o:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const o=i(e,r.key);return o<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):o===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return da.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return da.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ue.RED=!0;Ue.BLACK=!1;class sy{copy(e,n,i,r,o){return this}insert(e,n,i){return new Ue(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class da{constructor(e,n=da.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new da(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(e){return new da(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new cr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new cr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new cr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new cr(this.root_,null,this.comparator_,!0,e)}}da.EMPTY_NODE=new sy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(a,e){return ki(a.name,e.name)}function os(a,e){return ki(a,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ht;function my(a){ht=a}const cl=function(a){return typeof a=="number"?"number:"+Wu(a):"string:"+a},pl=function(a){if(a.isLeafNode()){const e=a.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ga(e,".sv"),"Priority must be a string or number.")}else P(a===ht||a.isEmpty(),"priority of unexpected type.");P(a===ht||a.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gd;class We{constructor(e,n=We.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),pl(this.priorityNode_)}static set __childrenNodeConstructor(e){Gd=e}static get __childrenNodeConstructor(){return Gd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new We(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:ge(e)===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:We.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ge(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(P(i!==".priority"||cn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,We.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+cl(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Wu(this.value_):e+=this.value_,this.lazyHash_=qu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===We.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof We.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=We.VALUE_TYPE_ORDER.indexOf(n),o=We.VALUE_TYPE_ORDER.indexOf(i);return P(r>=0,"Unknown leaf type: "+n),P(o>=0,"Unknown leaf type: "+i),r===o?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}We.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl,gl;function uy(a){hl=a}function ly(a){gl=a}class _y extends mo{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),o=i.compareTo(r);return o===0?ki(e.name,n.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ke.MIN}maxPost(){return new ke(Pn,new We("[PRIORITY-POST]",gl))}makePost(e,n){const i=hl(e);return new ke(n,new We("[PRIORITY-POST]",i))}toString(){return".priority"}}const Me=new _y;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=Math.log(2);class cy{constructor(e){const n=o=>parseInt(Math.log(o)/ky,10),i=o=>parseInt(Array(o+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pr=function(a,e,n,i){a.sort(e);const r=function(d,m){const k=m-d;let u,c;if(k===0)return null;if(k===1)return u=a[d],c=n?n(u):u,new Ue(c,u.node,Ue.BLACK,null,null);{const b=parseInt(k/2,10)+d,w=r(d,b),B=r(b+1,m);return u=a[b],c=n?n(u):u,new Ue(c,u.node,Ue.BLACK,w,B)}},o=function(d){let m=null,k=null,u=a.length;const c=function(w,B){const L=u-w,G=u;u-=w;const q=r(L+1,G),Y=a[L],te=n?n(Y):Y;b(new Ue(te,Y.node,B,null,q))},b=function(w){m?(m.left=w,m=w):(k=w,m=w)};for(let w=0;w<d.count;++w){const B=d.nextBitIsOne(),L=Math.pow(2,d.count-(w+1));B?c(L,Ue.BLACK):(c(L,Ue.BLACK),c(L,Ue.RED))}return k},t=new cy(a.length),s=o(t);return new da(i||e,s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo;const Kn={};class Wa{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(Kn&&Me,"ChildrenNode.ts has not been loaded"),Lo=Lo||new Wa({".priority":Kn},{".priority":Me}),Lo}get(e){const n=oi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof da?n:null}hasIndex(e){return Ga(this.indexSet_,e.toString())}addIndex(e,n){P(e!==ni,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const o=n.getIterator(ke.Wrap);let t=o.getNext();for(;t;)r=r||e.isDefinedOn(t.node),i.push(t),t=o.getNext();let s;r?s=Pr(i,e.getCompare()):s=Kn;const d=e.toString(),m=Object.assign({},this.indexSet_);m[d]=e;const k=Object.assign({},this.indexes_);return k[d]=s,new Wa(k,m)}addToIndexes(e,n){const i=Ar(this.indexes_,(r,o)=>{const t=oi(this.indexSet_,o);if(P(t,"Missing index implementation for "+o),r===Kn)if(t.isDefinedOn(e.node)){const s=[],d=n.getIterator(ke.Wrap);let m=d.getNext();for(;m;)m.name!==e.name&&s.push(m),m=d.getNext();return s.push(e),Pr(s,t.getCompare())}else return Kn;else{const s=n.get(e.name);let d=r;return s&&(d=d.remove(new ke(e.name,s))),d.insert(e,e.node)}});return new Wa(i,this.indexSet_)}removeFromIndexes(e,n){const i=Ar(this.indexes_,r=>{if(r===Kn)return r;{const o=n.get(e.name);return o?r.remove(new ke(e.name,o)):r}});return new Wa(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci;class ne{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&pl(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ci||(Ci=new ne(new da(os),null,Wa.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ci}updatePriority(e){return this.children_.isEmpty()?this:new ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ci:n}}getChild(e){const n=ge(e);return n===null?this:this.getImmediateChild(n).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ke(e,n);let r,o;n.isEmpty()?(r=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),o=this.indexMap_.addToIndexes(i,this.children_));const t=r.isEmpty()?Ci:this.priorityNode_;return new ne(r,t,o)}}updateChild(e,n){const i=ge(e);if(i===null)return n;{P(ge(e)!==".priority"||cn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(Ne(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,o=!0;if(this.forEachChild(Me,(t,s)=>{n[t]=s.val(e),i++,o&&ne.INTEGER_REGEXP_.test(t)?r=Math.max(r,Number(t)):o=!1}),!e&&o&&r<2*i){const t=[];for(const s in n)t[s]=n[s];return t}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+cl(this.getPriority().val())+":"),this.forEachChild(Me,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":qu(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const o=r.getPredecessorKey(new ke(e,n));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ke(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ke(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,ke.Wrap);let o=r.peek();for(;o!=null&&n.compare(o,e)<0;)r.getNext(),o=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,ke.Wrap);let o=r.peek();for(;o!=null&&n.compare(o,e)>0;)r.getNext(),o=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===er?-1:0}withIndex(e){if(e===ni||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ne(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ni||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Me),r=n.getIterator(Me);let o=i.getNext(),t=r.getNext();for(;o&&t;){if(o.name!==t.name||!o.node.equals(t.node))return!1;o=i.getNext(),t=r.getNext()}return o===null&&t===null}else return!1;else return!1}}resolveIndex_(e){return e===ni?null:this.indexMap_.get(e.toString())}}ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class py extends ne{constructor(){super(new da(os),ne.EMPTY_NODE,Wa.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ne.EMPTY_NODE}isEmpty(){return!1}}const er=new py;Object.defineProperties(ke,{MIN:{value:new ke(ti,ne.EMPTY_NODE)},MAX:{value:new ke(Pn,er)}});kl.__EMPTY_NODE=ne.EMPTY_NODE;We.__childrenNodeConstructor=ne;my(er);ly(er);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=!0;function Ve(a,e=null){if(a===null)return ne.EMPTY_NODE;if(typeof a=="object"&&".priority"in a&&(e=a[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof a=="object"&&".value"in a&&a[".value"]!==null&&(a=a[".value"]),typeof a!="object"||".sv"in a){const n=a;return new We(n,Ve(e))}if(!(a instanceof Array)&&hy){const n=[];let i=!1;if(ma(a,(t,s)=>{if(t.substring(0,1)!=="."){const d=Ve(s);d.isEmpty()||(i=i||!d.getPriority().isEmpty(),n.push(new ke(t,d)))}}),n.length===0)return ne.EMPTY_NODE;const o=Pr(n,dy,t=>t.name,os);if(i){const t=Pr(n,Me.getCompare());return new ne(o,Ve(e),new Wa({".priority":t},{".priority":Me}))}else return new ne(o,Ve(e),Wa.Default)}else{let n=ne.EMPTY_NODE;return ma(a,(i,r)=>{if(Ga(a,i)&&i.substring(0,1)!=="."){const o=Ve(r);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(i,o))}}),n.updatePriority(Ve(e))}}uy(Ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy extends mo{constructor(e){super(),this.indexPath_=e,P(!ce(e)&&ge(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),o=i.compareTo(r);return o===0?ki(e.name,n.name):o}makePost(e,n){const i=Ve(e),r=ne.EMPTY_NODE.updateChild(this.indexPath_,i);return new ke(n,r)}maxPost(){const e=ne.EMPTY_NODE.updateChild(this.indexPath_,er);return new ke(Pn,e)}toString(){return ml(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy extends mo{compare(e,n){const i=e.node.compareTo(n.node);return i===0?ki(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ke.MIN}maxPost(){return ke.MAX}makePost(e,n){const i=Ve(e);return new ke(n,i)}toString(){return".value"}}const fy=new yy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(a){return{type:"value",snapshotNode:a}}function si(a,e){return{type:"child_added",snapshotNode:e,childName:a}}function $i(a,e){return{type:"child_removed",snapshotNode:e,childName:a}}function Hi(a,e,n){return{type:"child_changed",snapshotNode:e,childName:a,oldSnap:n}}function jy(a,e){return{type:"child_moved",snapshotNode:e,childName:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.index_=e}updateChild(e,n,i,r,o,t){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=e.getImmediateChild(n);return s.getChild(r).equals(i.getChild(r))&&s.isEmpty()===i.isEmpty()||(t!=null&&(i.isEmpty()?e.hasChild(n)?t.trackChildChange($i(n,s)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?t.trackChildChange(si(n,i)):t.trackChildChange(Hi(n,i,s))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Me,(r,o)=>{n.hasChild(r)||i.trackChildChange($i(r,o))}),n.isLeafNode()||n.forEachChild(Me,(r,o)=>{if(e.hasChild(r)){const t=e.getImmediateChild(r);t.equals(o)||i.trackChildChange(Hi(r,o,t))}else i.trackChildChange(si(r,o))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ne.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.indexedFilter_=new ts(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Wi.getStartPost_(e),this.endPost_=Wi.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,r,o,t){return this.matches(new ke(n,i))||(i=ne.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,o,t)}updateFullNode(e,n,i){n.isLeafNode()&&(n=ne.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(ne.EMPTY_NODE);const o=this;return n.forEachChild(Me,(t,s)=>{o.matches(new ke(t,s))||(r=r.updateImmediateChild(t,ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.rangedFilter_=new Wi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,r,o,t){return this.rangedFilter_.matches(new ke(n,i))||(i=ne.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,o,t):this.fullLimitUpdateChild_(e,n,i,o,t)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=ne.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let t=0;for(;o.hasNext()&&t<this.limit_;){const s=o.getNext();let d;if(this.reverse_?d=this.index_.compare(this.rangedFilter_.getStartPost(),s)<=0:d=this.index_.compare(s,this.rangedFilter_.getEndPost())<=0,d)r=r.updateImmediateChild(s.name,s.node),t++;else break}}else{r=n.withIndex(this.index_),r=r.updatePriority(ne.EMPTY_NODE);let o,t,s,d;if(this.reverse_){d=r.getReverseIterator(this.index_),o=this.rangedFilter_.getEndPost(),t=this.rangedFilter_.getStartPost();const u=this.index_.getCompare();s=(c,b)=>u(b,c)}else d=r.getIterator(this.index_),o=this.rangedFilter_.getStartPost(),t=this.rangedFilter_.getEndPost(),s=this.index_.getCompare();let m=0,k=!1;for(;d.hasNext();){const u=d.getNext();!k&&s(o,u)<=0&&(k=!0),k&&m<this.limit_&&s(u,t)<=0?m++:r=r.updateImmediateChild(u.name,ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,o){let t;if(this.reverse_){const u=this.index_.getCompare();t=(c,b)=>u(b,c)}else t=this.index_.getCompare();const s=e;P(s.numChildren()===this.limit_,"");const d=new ke(n,i),m=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),k=this.rangedFilter_.matches(d);if(s.hasChild(n)){const u=s.getImmediateChild(n);let c=r.getChildAfterChild(this.index_,m,this.reverse_);for(;c!=null&&(c.name===n||s.hasChild(c.name));)c=r.getChildAfterChild(this.index_,c,this.reverse_);const b=c==null?1:t(c,d);if(k&&!i.isEmpty()&&b>=0)return o!=null&&o.trackChildChange(Hi(n,i,u)),s.updateImmediateChild(n,i);{o!=null&&o.trackChildChange($i(n,u));const B=s.updateImmediateChild(n,ne.EMPTY_NODE);return c!=null&&this.rangedFilter_.matches(c)?(o!=null&&o.trackChildChange(si(c.name,c.node)),B.updateImmediateChild(c.name,c.node)):B}}else return i.isEmpty()?e:k&&t(m,d)>=0?(o!=null&&(o.trackChildChange($i(m.name,m.node)),o.trackChildChange(si(n,i))),s.updateImmediateChild(n,i).updateImmediateChild(m.name,ne.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ti}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new ss;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vy(a){return a.loadsAllData()?new ts(a.getIndex()):a.hasLimit()?new by(a):new Wi(a)}function Jd(a){const e={};if(a.isDefault())return e;let n;return a.index_===Me?n="$priority":a.index_===fy?n="$value":a.index_===ni?n="$key":(P(a.index_ instanceof gy,"Unrecognized index type!"),n=a.index_.toString()),e.orderBy=$e(n),a.startSet_&&(e.startAt=$e(a.indexStartValue_),a.startNameSet_&&(e.startAt+=","+$e(a.indexStartName_))),a.endSet_&&(e.endAt=$e(a.indexEndValue_),a.endNameSet_&&(e.endAt+=","+$e(a.indexEndName_))),a.limitSet_&&(a.isViewFromLeft()?e.limitToFirst=a.limit_:e.limitToLast=a.limit_),e}function Qd(a){const e={};if(a.startSet_&&(e.sp=a.indexStartValue_,a.startNameSet_&&(e.sn=a.indexStartName_)),a.endSet_&&(e.ep=a.indexEndValue_,a.endNameSet_&&(e.en=a.indexEndName_)),a.limitSet_){e.l=a.limit_;let n=a.viewFrom_;n===""&&(a.isViewFromLeft()?n="l":n="r"),e.vf=n}return a.index_!==Me&&(e.i=a.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends tl{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Xi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const t=Or.getListenId_(e,i),s={};this.listens_[t]=s;const d=Jd(e._queryParams);this.restRequest_(o+".json",d,(m,k)=>{let u=k;if(m===404&&(u=null,m=null),m===null&&this.onDataUpdate_(o,u,!1,i),oi(this.listens_,t)===s){let c;m?m===401?c="permission_denied":c="rest_error:"+m:c="ok",r(c,null)}})}unlisten(e,n){const i=Or.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Jd(e._queryParams),i=e._path.toString(),r=new Qt;return this.restRequest_(i+".json",n,(o,t)=>{let s=t;o===404&&(s=null,o=null),o===null?(this.onDataUpdate_(i,s,!1,null),r.resolve(s)):r.reject(new Error(s))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,o])=>{r&&r.accessToken&&(n.auth=r.accessToken),o&&o.token&&(n.ac=o.token);const t=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Gp(n);this.log_("Sending REST request for "+t);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(i&&s.readyState===4){this.log_("REST Response for "+t+" received. status:",s.status,"response:",s.responseText);let d=null;if(s.status>=200&&s.status<300){try{d=Li(s.responseText)}catch{la("Failed to parse JSON response for "+t+": "+s.responseText)}i(null,d)}else s.status!==401&&s.status!==404&&la("Got unsuccessful REST response for "+t+" Status: "+s.status),i(s.status);i=null}},s.open("GET",t,!0),s.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(){this.rootNode_=ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(){return{value:null,children:new Map}}function fl(a,e,n){if(ce(e))a.value=n,a.children.clear();else if(a.value!==null)a.value=a.value.updateChild(e,n);else{const i=ge(e);a.children.has(i)||a.children.set(i,Mr());const r=a.children.get(i);e=Ne(e),fl(r,e,n)}}function gt(a,e,n){a.value!==null?n(e,a.value):xy(a,(i,r)=>{const o=new Se(e.toString()+"/"+i);gt(r,o,n)})}function xy(a,e){a.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ma(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=10*1e3,Ey=30*1e3,Iy=5*60*1e3;class Ty{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Cy(e);const i=Xd+(Ey-Xd)*Math.random();Si(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ma(e,(r,o)=>{o>0&&Ga(this.statsToReport_,r)&&(n[r]=o,i=!0)}),i&&this.server_.reportStats(n),Si(this.reportStats_.bind(this),Math.floor(Math.random()*2*Iy))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ia;(function(a){a[a.OVERWRITE=0]="OVERWRITE",a[a.MERGE=1]="MERGE",a[a.ACK_USER_WRITE=2]="ACK_USER_WRITE",a[a.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ia||(Ia={}));function jl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ds(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ms(a){return{fromUser:!1,fromServer:!0,queryId:a,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Ia.ACK_USER_WRITE,this.source=jl()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Se(e));return new Fr(fe(),n,this.revert)}}else return P(ge(this.path)===e,"operationForChild called for unrelated child."),new Fr(Ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.source=e,this.path=n,this.type=Ia.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new Ui(this.source,fe()):new Ui(this.source,Ne(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Ia.OVERWRITE}operationForChild(e){return ce(this.path)?new On(this.source,fe(),this.snap.getImmediateChild(e)):new On(this.source,Ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Ia.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new Se(e));return n.isEmpty()?null:n.value?new On(this.source,fe(),n.value):new Ki(this.source,fe(),n)}else return P(ge(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ki(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=ge(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ay(a,e,n,i){const r=[],o=[];return e.forEach(t=>{t.type==="child_changed"&&a.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(jy(t.childName,t.snapshotNode))}),Ei(a,r,"child_removed",e,i,n),Ei(a,r,"child_added",e,i,n),Ei(a,r,"child_moved",o,i,n),Ei(a,r,"child_changed",e,i,n),Ei(a,r,"value",e,i,n),r}function Ei(a,e,n,i,r,o){const t=i.filter(s=>s.type===n);t.sort((s,d)=>Ry(a,s,d)),t.forEach(s=>{const d=Ny(a,s,o);r.forEach(m=>{m.respondsTo(s.type)&&e.push(m.createEvent(d,a.query_))})})}function Ny(a,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,a.index_)),e}function Ry(a,e,n){if(e.childName==null||n.childName==null)throw li("Should only compare child_ events.");const i=new ke(e.childName,e.snapshotNode),r=new ke(n.childName,n.snapshotNode);return a.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(a,e){return{eventCache:a,serverCache:e}}function Ai(a,e,n,i){return uo(new pn(e,n,i),a.serverCache)}function bl(a,e,n,i){return uo(a.eventCache,new pn(e,n,i))}function Lr(a){return a.eventCache.isFullyInitialized()?a.eventCache.getNode():null}function Mn(a){return a.serverCache.isFullyInitialized()?a.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo;const zy=()=>(Bo||(Bo=new da(gg)),Bo);class Re{constructor(e,n=zy()){this.value=e,this.children=n}static fromObject(e){let n=new Re(null);return ma(e,(i,r)=>{n=n.set(new Se(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:fe(),value:this.value};if(ce(e))return null;{const i=ge(e),r=this.children.get(i);if(r!==null){const o=r.findRootMostMatchingPathAndValue(Ne(e),n);return o!=null?{path:He(new Se(i),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=ge(e),i=this.children.get(n);return i!==null?i.subtree(Ne(e)):new Re(null)}}set(e,n){if(ce(e))return new Re(n,this.children);{const i=ge(e),o=(this.children.get(i)||new Re(null)).set(Ne(e),n),t=this.children.insert(i,o);return new Re(this.value,t)}}remove(e){if(ce(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const n=ge(e),i=this.children.get(n);if(i){const r=i.remove(Ne(e));let o;return r.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,r),this.value===null&&o.isEmpty()?new Re(null):new Re(this.value,o)}else return this}}get(e){if(ce(e))return this.value;{const n=ge(e),i=this.children.get(n);return i?i.get(Ne(e)):null}}setTree(e,n){if(ce(e))return n;{const i=ge(e),o=(this.children.get(i)||new Re(null)).setTree(Ne(e),n);let t;return o.isEmpty()?t=this.children.remove(i):t=this.children.insert(i,o),new Re(this.value,t)}}fold(e){return this.fold_(fe(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,o)=>{i[r]=o.fold_(He(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,fe(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(ce(e))return null;{const o=ge(e),t=this.children.get(o);return t?t.findOnPath_(Ne(e),He(n,o),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,fe(),n)}foreachOnPath_(e,n,i){if(ce(e))return this;{this.value&&i(n,this.value);const r=ge(e),o=this.children.get(r);return o?o.foreachOnPath_(Ne(e),He(n,r),i):new Re(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(He(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this.writeTree_=e}static empty(){return new Aa(new Re(null))}}function Ni(a,e,n){if(ce(e))return new Aa(new Re(n));{const i=a.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let o=i.value;const t=ra(r,e);return o=o.updateChild(t,n),new Aa(a.writeTree_.set(r,o))}else{const r=new Re(n),o=a.writeTree_.setTree(e,r);return new Aa(o)}}}function Zd(a,e,n){let i=a;return ma(n,(r,o)=>{i=Ni(i,He(e,r),o)}),i}function em(a,e){if(ce(e))return Aa.empty();{const n=a.writeTree_.setTree(e,new Re(null));return new Aa(n)}}function yt(a,e){return $n(a,e)!=null}function $n(a,e){const n=a.writeTree_.findRootMostValueAndPath(e);return n!=null?a.writeTree_.get(n.path).getChild(ra(n.path,e)):null}function am(a){const e=[],n=a.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(i,r)=>{e.push(new ke(i,r))}):a.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new ke(i,r.value))}),e}function dn(a,e){if(ce(e))return a;{const n=$n(a,e);return n!=null?new Aa(new Re(n)):new Aa(a.writeTree_.subtree(e))}}function ft(a){return a.writeTree_.isEmpty()}function di(a,e){return vl(fe(),a.writeTree_,e)}function vl(a,e,n){if(e.value!=null)return n.updateChild(a,e.value);{let i=null;return e.children.inorderTraversal((r,o)=>{r===".priority"?(P(o.value!==null,"Priority writes must always be leaf nodes"),i=o.value):n=vl(He(a,r),o,n)}),!n.getChild(a).isEmpty()&&i!==null&&(n=n.updateChild(He(a,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(a,e){return El(e,a)}function Dy(a,e,n,i,r){P(i>a.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),a.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(a.visibleWrites=Ni(a.visibleWrites,e,n)),a.lastWriteId=i}function Py(a,e){for(let n=0;n<a.allWrites.length;n++){const i=a.allWrites[n];if(i.writeId===e)return i}return null}function Oy(a,e){const n=a.allWrites.findIndex(s=>s.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const i=a.allWrites[n];a.allWrites.splice(n,1);let r=i.visible,o=!1,t=a.allWrites.length-1;for(;r&&t>=0;){const s=a.allWrites[t];s.visible&&(t>=n&&My(s,i.path)?r=!1:Ea(i.path,s.path)&&(o=!0)),t--}if(r){if(o)return Fy(a),!0;if(i.snap)a.visibleWrites=em(a.visibleWrites,i.path);else{const s=i.children;ma(s,d=>{a.visibleWrites=em(a.visibleWrites,He(i.path,d))})}return!0}else return!1}function My(a,e){if(a.snap)return Ea(a.path,e);for(const n in a.children)if(a.children.hasOwnProperty(n)&&Ea(He(a.path,n),e))return!0;return!1}function Fy(a){a.visibleWrites=wl(a.allWrites,Ly,fe()),a.allWrites.length>0?a.lastWriteId=a.allWrites[a.allWrites.length-1].writeId:a.lastWriteId=-1}function Ly(a){return a.visible}function wl(a,e,n){let i=Aa.empty();for(let r=0;r<a.length;++r){const o=a[r];if(e(o)){const t=o.path;let s;if(o.snap)Ea(n,t)?(s=ra(n,t),i=Ni(i,s,o.snap)):Ea(t,n)&&(s=ra(t,n),i=Ni(i,fe(),o.snap.getChild(s)));else if(o.children){if(Ea(n,t))s=ra(n,t),i=Zd(i,s,o.children);else if(Ea(t,n))if(s=ra(t,n),ce(s))i=Zd(i,fe(),o.children);else{const d=oi(o.children,ge(s));if(d){const m=d.getChild(Ne(s));i=Ni(i,fe(),m)}}}else throw li("WriteRecord should have .snap or .children")}}return i}function xl(a,e,n,i,r){if(!i&&!r){const o=$n(a.visibleWrites,e);if(o!=null)return o;{const t=dn(a.visibleWrites,e);if(ft(t))return n;if(n==null&&!yt(t,fe()))return null;{const s=n||ne.EMPTY_NODE;return di(t,s)}}}else{const o=dn(a.visibleWrites,e);if(!r&&ft(o))return n;if(!r&&n==null&&!yt(o,fe()))return null;{const t=function(m){return(m.visible||r)&&(!i||!~i.indexOf(m.writeId))&&(Ea(m.path,e)||Ea(e,m.path))},s=wl(a.allWrites,t,e),d=n||ne.EMPTY_NODE;return di(s,d)}}}function By(a,e,n){let i=ne.EMPTY_NODE;const r=$n(a.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Me,(o,t)=>{i=i.updateImmediateChild(o,t)}),i;if(n){const o=dn(a.visibleWrites,e);return n.forEachChild(Me,(t,s)=>{const d=di(dn(o,new Se(t)),s);i=i.updateImmediateChild(t,d)}),am(o).forEach(t=>{i=i.updateImmediateChild(t.name,t.node)}),i}else{const o=dn(a.visibleWrites,e);return am(o).forEach(t=>{i=i.updateImmediateChild(t.name,t.node)}),i}}function qy(a,e,n,i,r){P(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=He(e,n);if(yt(a.visibleWrites,o))return null;{const t=dn(a.visibleWrites,o);return ft(t)?r.getChild(n):di(t,r.getChild(n))}}function $y(a,e,n,i){const r=He(e,n),o=$n(a.visibleWrites,r);if(o!=null)return o;if(i.isCompleteForChild(n)){const t=dn(a.visibleWrites,r);return di(t,i.getNode().getImmediateChild(n))}else return null}function Hy(a,e){return $n(a.visibleWrites,e)}function Wy(a,e,n,i,r,o,t){let s;const d=dn(a.visibleWrites,e),m=$n(d,fe());if(m!=null)s=m;else if(n!=null)s=di(d,n);else return[];if(s=s.withIndex(t),!s.isEmpty()&&!s.isLeafNode()){const k=[],u=t.getCompare(),c=o?s.getReverseIteratorFrom(i,t):s.getIteratorFrom(i,t);let b=c.getNext();for(;b&&k.length<r;)u(b,i)!==0&&k.push(b),b=c.getNext();return k}else return[]}function Uy(){return{visibleWrites:Aa.empty(),allWrites:[],lastWriteId:-1}}function Br(a,e,n,i){return xl(a.writeTree,a.treePath,e,n,i)}function us(a,e){return By(a.writeTree,a.treePath,e)}function nm(a,e,n,i){return qy(a.writeTree,a.treePath,e,n,i)}function qr(a,e){return Hy(a.writeTree,He(a.treePath,e))}function Ky(a,e,n,i,r,o){return Wy(a.writeTree,a.treePath,e,n,i,r,o)}function ls(a,e,n){return $y(a.writeTree,a.treePath,e,n)}function Cl(a,e){return El(He(a.treePath,e),a.writeTree)}function El(a,e){return{treePath:a,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const o=r.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(i,Hi(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(i,$i(i,r.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(i,si(i,e.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(i,Hi(i,e.snapshotNode,r.oldSnap));else throw li("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Il=new Yy;class _s{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new pn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ls(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Mn(this.viewCache_),o=Ky(this.writes_,r,n,1,i,e);return o.length===0?null:o[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(a){return{filter:a}}function Jy(a,e){P(e.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed")}function Qy(a,e,n,i,r){const o=new Vy;let t,s;if(n.type===Ia.OVERWRITE){const m=n;m.source.fromUser?t=jt(a,e,m.path,m.snap,i,r,o):(P(m.source.fromServer,"Unknown source."),s=m.source.tagged||e.serverCache.isFiltered()&&!ce(m.path),t=$r(a,e,m.path,m.snap,i,r,s,o))}else if(n.type===Ia.MERGE){const m=n;m.source.fromUser?t=Zy(a,e,m.path,m.children,i,r,o):(P(m.source.fromServer,"Unknown source."),s=m.source.tagged||e.serverCache.isFiltered(),t=bt(a,e,m.path,m.children,i,r,s,o))}else if(n.type===Ia.ACK_USER_WRITE){const m=n;m.revert?t=nf(a,e,m.path,i,r,o):t=ef(a,e,m.path,m.affectedTree,i,r,o)}else if(n.type===Ia.LISTEN_COMPLETE)t=af(a,e,n.path,i,o);else throw li("Unknown operation type: "+n.type);const d=o.getChanges();return Xy(e,t,d),{viewCache:t,changes:d}}function Xy(a,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=Lr(a);(n.length>0||!a.eventCache.isFullyInitialized()||r&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&n.push(yl(Lr(e)))}}function Tl(a,e,n,i,r,o){const t=e.eventCache;if(qr(i,n)!=null)return e;{let s,d;if(ce(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Mn(e),k=m instanceof ne?m:ne.EMPTY_NODE,u=us(i,k);s=a.filter.updateFullNode(e.eventCache.getNode(),u,o)}else{const m=Br(i,Mn(e));s=a.filter.updateFullNode(e.eventCache.getNode(),m,o)}else{const m=ge(n);if(m===".priority"){P(cn(n)===1,"Can't have a priority with additional path components");const k=t.getNode();d=e.serverCache.getNode();const u=nm(i,n,k,d);u!=null?s=a.filter.updatePriority(k,u):s=t.getNode()}else{const k=Ne(n);let u;if(t.isCompleteForChild(m)){d=e.serverCache.getNode();const c=nm(i,n,t.getNode(),d);c!=null?u=t.getNode().getImmediateChild(m).updateChild(k,c):u=t.getNode().getImmediateChild(m)}else u=ls(i,m,e.serverCache);u!=null?s=a.filter.updateChild(t.getNode(),m,u,k,r,o):s=t.getNode()}}return Ai(e,s,t.isFullyInitialized()||ce(n),a.filter.filtersNodes())}}function $r(a,e,n,i,r,o,t,s){const d=e.serverCache;let m;const k=t?a.filter:a.filter.getIndexedFilter();if(ce(n))m=k.updateFullNode(d.getNode(),i,null);else if(k.filtersNodes()&&!d.isFiltered()){const b=d.getNode().updateChild(n,i);m=k.updateFullNode(d.getNode(),b,null)}else{const b=ge(n);if(!d.isCompleteForPath(n)&&cn(n)>1)return e;const w=Ne(n),L=d.getNode().getImmediateChild(b).updateChild(w,i);b===".priority"?m=k.updatePriority(d.getNode(),L):m=k.updateChild(d.getNode(),b,L,w,Il,null)}const u=bl(e,m,d.isFullyInitialized()||ce(n),k.filtersNodes()),c=new _s(r,u,o);return Tl(a,u,n,r,c,s)}function jt(a,e,n,i,r,o,t){const s=e.eventCache;let d,m;const k=new _s(r,e,o);if(ce(n))m=a.filter.updateFullNode(e.eventCache.getNode(),i,t),d=Ai(e,m,!0,a.filter.filtersNodes());else{const u=ge(n);if(u===".priority")m=a.filter.updatePriority(e.eventCache.getNode(),i),d=Ai(e,m,s.isFullyInitialized(),s.isFiltered());else{const c=Ne(n),b=s.getNode().getImmediateChild(u);let w;if(ce(c))w=i;else{const B=k.getCompleteChild(u);B!=null?dl(c)===".priority"&&B.getChild(ul(c)).isEmpty()?w=B:w=B.updateChild(c,i):w=ne.EMPTY_NODE}if(b.equals(w))d=e;else{const B=a.filter.updateChild(s.getNode(),u,w,c,k,t);d=Ai(e,B,s.isFullyInitialized(),a.filter.filtersNodes())}}}return d}function im(a,e){return a.eventCache.isCompleteForChild(e)}function Zy(a,e,n,i,r,o,t){let s=e;return i.foreach((d,m)=>{const k=He(n,d);im(e,ge(k))&&(s=jt(a,s,k,m,r,o,t))}),i.foreach((d,m)=>{const k=He(n,d);im(e,ge(k))||(s=jt(a,s,k,m,r,o,t))}),s}function rm(a,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function bt(a,e,n,i,r,o,t,s){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let d=e,m;ce(n)?m=i:m=new Re(null).setTree(n,i);const k=e.serverCache.getNode();return m.children.inorderTraversal((u,c)=>{if(k.hasChild(u)){const b=e.serverCache.getNode().getImmediateChild(u),w=rm(a,b,c);d=$r(a,d,new Se(u),w,r,o,t,s)}}),m.children.inorderTraversal((u,c)=>{const b=!e.serverCache.isCompleteForChild(u)&&c.value===null;if(!k.hasChild(u)&&!b){const w=e.serverCache.getNode().getImmediateChild(u),B=rm(a,w,c);d=$r(a,d,new Se(u),B,r,o,t,s)}}),d}function ef(a,e,n,i,r,o,t){if(qr(r,n)!=null)return e;const s=e.serverCache.isFiltered(),d=e.serverCache;if(i.value!=null){if(ce(n)&&d.isFullyInitialized()||d.isCompleteForPath(n))return $r(a,e,n,d.getNode().getChild(n),r,o,s,t);if(ce(n)){let m=new Re(null);return d.getNode().forEachChild(ni,(k,u)=>{m=m.set(new Se(k),u)}),bt(a,e,n,m,r,o,s,t)}else return e}else{let m=new Re(null);return i.foreach((k,u)=>{const c=He(n,k);d.isCompleteForPath(c)&&(m=m.set(k,d.getNode().getChild(c)))}),bt(a,e,n,m,r,o,s,t)}}function af(a,e,n,i,r){const o=e.serverCache,t=bl(e,o.getNode(),o.isFullyInitialized()||ce(n),o.isFiltered());return Tl(a,t,n,i,Il,r)}function nf(a,e,n,i,r,o){let t;if(qr(i,n)!=null)return e;{const s=new _s(i,e,r),d=e.eventCache.getNode();let m;if(ce(n)||ge(n)===".priority"){let k;if(e.serverCache.isFullyInitialized())k=Br(i,Mn(e));else{const u=e.serverCache.getNode();P(u instanceof ne,"serverChildren would be complete if leaf node"),k=us(i,u)}k=k,m=a.filter.updateFullNode(d,k,o)}else{const k=ge(n);let u=ls(i,k,e.serverCache);u==null&&e.serverCache.isCompleteForChild(k)&&(u=d.getImmediateChild(k)),u!=null?m=a.filter.updateChild(d,k,u,Ne(n),s,o):e.eventCache.getNode().hasChild(k)?m=a.filter.updateChild(d,k,ne.EMPTY_NODE,Ne(n),s,o):m=d,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(t=Br(i,Mn(e)),t.isLeafNode()&&(m=a.filter.updateFullNode(m,t,o)))}return t=e.serverCache.isFullyInitialized()||qr(i,fe())!=null,Ai(e,m,t,a.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new ts(i.getIndex()),o=vy(i);this.processor_=Gy(o);const t=n.serverCache,s=n.eventCache,d=r.updateFullNode(ne.EMPTY_NODE,t.getNode(),null),m=o.updateFullNode(ne.EMPTY_NODE,s.getNode(),null),k=new pn(d,t.isFullyInitialized(),r.filtersNodes()),u=new pn(m,s.isFullyInitialized(),o.filtersNodes());this.viewCache_=uo(u,k),this.eventGenerator_=new Sy(this.query_)}get query(){return this.query_}}function of(a){return a.viewCache_.serverCache.getNode()}function tf(a){return Lr(a.viewCache_)}function sf(a,e){const n=Mn(a.viewCache_);return n&&(a.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(ge(e)).isEmpty())?n.getChild(e):null}function om(a){return a.eventRegistrations_.length===0}function df(a,e){a.eventRegistrations_.push(e)}function tm(a,e,n){const i=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const r=a.query._path;a.eventRegistrations_.forEach(o=>{const t=o.createCancelEvent(n,r);t&&i.push(t)})}if(e){let r=[];for(let o=0;o<a.eventRegistrations_.length;++o){const t=a.eventRegistrations_[o];if(!t.matches(e))r.push(t);else if(e.hasAnyCallback()){r=r.concat(a.eventRegistrations_.slice(o+1));break}}a.eventRegistrations_=r}else a.eventRegistrations_=[];return i}function sm(a,e,n,i){e.type===Ia.MERGE&&e.source.queryId!==null&&(P(Mn(a.viewCache_),"We should always have a full cache before handling merges"),P(Lr(a.viewCache_),"Missing event cache, even though we have a server cache"));const r=a.viewCache_,o=Qy(a.processor_,r,e,n,i);return Jy(a.processor_,o.viewCache),P(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),a.viewCache_=o.viewCache,Sl(a,o.changes,o.viewCache.eventCache.getNode(),null)}function mf(a,e){const n=a.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(o,t)=>{i.push(si(o,t))}),n.isFullyInitialized()&&i.push(yl(n.getNode())),Sl(a,i,n.getNode(),e)}function Sl(a,e,n,i){const r=i?[i]:a.eventRegistrations_;return Ay(a.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr;class Al{constructor(){this.views=new Map}}function uf(a){P(!Hr,"__referenceConstructor has already been defined"),Hr=a}function lf(){return P(Hr,"Reference.ts has not been loaded"),Hr}function _f(a){return a.views.size===0}function ks(a,e,n,i){const r=e.source.queryId;if(r!==null){const o=a.views.get(r);return P(o!=null,"SyncTree gave us an op for an invalid query."),sm(o,e,n,i)}else{let o=[];for(const t of a.views.values())o=o.concat(sm(t,e,n,i));return o}}function Nl(a,e,n,i,r){const o=e._queryIdentifier,t=a.views.get(o);if(!t){let s=Br(n,r?i:null),d=!1;s?d=!0:i instanceof ne?(s=us(n,i),d=!1):(s=ne.EMPTY_NODE,d=!1);const m=uo(new pn(s,d,!1),new pn(i,r,!1));return new rf(e,m)}return t}function kf(a,e,n,i,r,o){const t=Nl(a,e,i,r,o);return a.views.has(e._queryIdentifier)||a.views.set(e._queryIdentifier,t),df(t,n),mf(t,n)}function cf(a,e,n,i){const r=e._queryIdentifier,o=[];let t=[];const s=hn(a);if(r==="default")for(const[d,m]of a.views.entries())t=t.concat(tm(m,n,i)),om(m)&&(a.views.delete(d),m.query._queryParams.loadsAllData()||o.push(m.query));else{const d=a.views.get(r);d&&(t=t.concat(tm(d,n,i)),om(d)&&(a.views.delete(r),d.query._queryParams.loadsAllData()||o.push(d.query)))}return s&&!hn(a)&&o.push(new(lf())(e._repo,e._path)),{removed:o,events:t}}function Rl(a){const e=[];for(const n of a.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function mn(a,e){let n=null;for(const i of a.views.values())n=n||sf(i,e);return n}function zl(a,e){if(e._queryParams.loadsAllData())return _o(a);{const i=e._queryIdentifier;return a.views.get(i)}}function Dl(a,e){return zl(a,e)!=null}function hn(a){return _o(a)!=null}function _o(a){for(const e of a.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wr;function pf(a){P(!Wr,"__referenceConstructor has already been defined"),Wr=a}function hf(){return P(Wr,"Reference.ts has not been loaded"),Wr}let gf=1;class dm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=Uy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yf(a,e,n,i,r){return Dy(a.pendingWriteTree_,e,n,i,r),r?nr(a,new On(jl(),e,n)):[]}function Gn(a,e,n=!1){const i=Py(a.pendingWriteTree_,e);if(Oy(a.pendingWriteTree_,e)){let o=new Re(null);return i.snap!=null?o=o.set(fe(),!0):ma(i.children,t=>{o=o.set(new Se(t),!0)}),nr(a,new Fr(i.path,o,n))}else return[]}function ar(a,e,n){return nr(a,new On(ds(),e,n))}function ff(a,e,n){const i=Re.fromObject(n);return nr(a,new Ki(ds(),e,i))}function jf(a,e){return nr(a,new Ui(ds(),e))}function bf(a,e,n){const i=cs(a,n);if(i){const r=ps(i),o=r.path,t=r.queryId,s=ra(o,e),d=new Ui(ms(t),s);return hs(a,o,d)}else return[]}function Pl(a,e,n,i,r=!1){const o=e._path,t=a.syncPointTree_.get(o);let s=[];if(t&&(e._queryIdentifier==="default"||Dl(t,e))){const d=cf(t,e,n,i);_f(t)&&(a.syncPointTree_=a.syncPointTree_.remove(o));const m=d.removed;if(s=d.events,!r){const k=m.findIndex(c=>c._queryParams.loadsAllData())!==-1,u=a.syncPointTree_.findOnPath(o,(c,b)=>hn(b));if(k&&!u){const c=a.syncPointTree_.subtree(o);if(!c.isEmpty()){const b=Cf(c);for(let w=0;w<b.length;++w){const B=b[w],L=B.query,G=Bl(a,B);a.listenProvider_.startListening(Ri(L),Vi(a,L),G.hashFn,G.onComplete)}}}!u&&m.length>0&&!i&&(k?a.listenProvider_.stopListening(Ri(e),null):m.forEach(c=>{const b=a.queryToTagMap.get(ko(c));a.listenProvider_.stopListening(Ri(c),b)}))}Ef(a,m)}return s}function Ol(a,e,n,i){const r=cs(a,i);if(r!=null){const o=ps(r),t=o.path,s=o.queryId,d=ra(t,e),m=new On(ms(s),d,n);return hs(a,t,m)}else return[]}function vf(a,e,n,i){const r=cs(a,i);if(r){const o=ps(r),t=o.path,s=o.queryId,d=ra(t,e),m=Re.fromObject(n),k=new Ki(ms(s),d,m);return hs(a,t,k)}else return[]}function wf(a,e,n,i=!1){const r=e._path;let o=null,t=!1;a.syncPointTree_.foreachOnPath(r,(c,b)=>{const w=ra(c,r);o=o||mn(b,w),t=t||hn(b)});let s=a.syncPointTree_.get(r);s?(t=t||hn(s),o=o||mn(s,fe())):(s=new Al,a.syncPointTree_=a.syncPointTree_.set(r,s));let d;o!=null?d=!0:(d=!1,o=ne.EMPTY_NODE,a.syncPointTree_.subtree(r).foreachChild((b,w)=>{const B=mn(w,fe());B&&(o=o.updateImmediateChild(b,B))}));const m=Dl(s,e);if(!m&&!e._queryParams.loadsAllData()){const c=ko(e);P(!a.queryToTagMap.has(c),"View does not exist, but we have a tag");const b=If();a.queryToTagMap.set(c,b),a.tagToQueryMap.set(b,c)}const k=lo(a.pendingWriteTree_,r);let u=kf(s,e,n,k,o,d);if(!m&&!t&&!i){const c=zl(s,e);u=u.concat(Tf(a,e,c))}return u}function Ml(a,e,n){const r=a.pendingWriteTree_,o=a.syncPointTree_.findOnPath(e,(t,s)=>{const d=ra(t,e),m=mn(s,d);if(m)return m});return xl(r,e,o,n,!0)}function xf(a,e){const n=e._path;let i=null;a.syncPointTree_.foreachOnPath(n,(m,k)=>{const u=ra(m,n);i=i||mn(k,u)});let r=a.syncPointTree_.get(n);r?i=i||mn(r,fe()):(r=new Al,a.syncPointTree_=a.syncPointTree_.set(n,r));const o=i!=null,t=o?new pn(i,!0,!1):null,s=lo(a.pendingWriteTree_,e._path),d=Nl(r,e,s,o?t.getNode():ne.EMPTY_NODE,o);return tf(d)}function nr(a,e){return Fl(e,a.syncPointTree_,null,lo(a.pendingWriteTree_,fe()))}function Fl(a,e,n,i){if(ce(a.path))return Ll(a,e,n,i);{const r=e.get(fe());n==null&&r!=null&&(n=mn(r,fe()));let o=[];const t=ge(a.path),s=a.operationForChild(t),d=e.children.get(t);if(d&&s){const m=n?n.getImmediateChild(t):null,k=Cl(i,t);o=o.concat(Fl(s,d,m,k))}return r&&(o=o.concat(ks(r,a,i,n))),o}}function Ll(a,e,n,i){const r=e.get(fe());n==null&&r!=null&&(n=mn(r,fe()));let o=[];return e.children.inorderTraversal((t,s)=>{const d=n?n.getImmediateChild(t):null,m=Cl(i,t),k=a.operationForChild(t);k&&(o=o.concat(Ll(k,s,d,m)))}),r&&(o=o.concat(ks(r,a,i,n))),o}function Bl(a,e){const n=e.query,i=Vi(a,n);return{hashFn:()=>(of(e)||ne.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?bf(a,n._path,i):jf(a,n._path);{const o=jg(r,n);return Pl(a,n,null,o)}}}}function Vi(a,e){const n=ko(e);return a.queryToTagMap.get(n)}function ko(a){return a._path.toString()+"$"+a._queryIdentifier}function cs(a,e){return a.tagToQueryMap.get(e)}function ps(a){const e=a.indexOf("$");return P(e!==-1&&e<a.length-1,"Bad queryKey."),{queryId:a.substr(e+1),path:new Se(a.substr(0,e))}}function hs(a,e,n){const i=a.syncPointTree_.get(e);P(i,"Missing sync point for query tag that we're tracking");const r=lo(a.pendingWriteTree_,e);return ks(i,n,r,null)}function Cf(a){return a.fold((e,n,i)=>{if(n&&hn(n))return[_o(n)];{let r=[];return n&&(r=Rl(n)),ma(i,(o,t)=>{r=r.concat(t)}),r}})}function Ri(a){return a._queryParams.loadsAllData()&&!a._queryParams.isDefault()?new(hf())(a._repo,a._path):a}function Ef(a,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=ko(i),o=a.queryToTagMap.get(r);a.queryToTagMap.delete(r),a.tagToQueryMap.delete(o)}}}function If(){return gf++}function Tf(a,e,n){const i=e._path,r=Vi(a,e),o=Bl(a,n),t=a.listenProvider_.startListening(Ri(e),r,o.hashFn,o.onComplete),s=a.syncPointTree_.subtree(i);if(r)P(!hn(s.value),"If we're adding a query, it shouldn't be shadowed");else{const d=s.fold((m,k,u)=>{if(!ce(m)&&k&&hn(k))return[_o(k).query];{let c=[];return k&&(c=c.concat(Rl(k).map(b=>b.query))),ma(u,(b,w)=>{c=c.concat(w)}),c}});for(let m=0;m<d.length;++m){const k=d[m];a.listenProvider_.stopListening(Ri(k),Vi(a,k))}}return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new gs(n)}node(){return this.node_}}class ys{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=He(this.path_,e);return new ys(this.syncTree_,n)}node(){return Ml(this.syncTree_,this.path_)}}const Sf=function(a){return a=a||{},a.timestamp=a.timestamp||new Date().getTime(),a},mm=function(a,e,n){if(!a||typeof a!="object")return a;if(P(".sv"in a,"Unexpected leaf node or priority contents"),typeof a[".sv"]=="string")return Af(a[".sv"],e,n);if(typeof a[".sv"]=="object")return Nf(a[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(a,null,2))},Af=function(a,e,n){switch(a){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+a)}},Nf=function(a,e,n){a.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(a,null,2));const i=a.increment;typeof i!="number"&&P(!1,"Unexpected increment value: "+i);const r=e.node();if(P(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const t=r.getValue();return typeof t!="number"?i:t+i},Rf=function(a,e,n,i){return fs(e,new ys(n,a),i)},zf=function(a,e,n){return fs(a,new gs(e),n)};function fs(a,e,n){const i=a.getPriority().val(),r=mm(i,e.getImmediateChild(".priority"),n);let o;if(a.isLeafNode()){const t=a,s=mm(t.getValue(),e,n);return s!==t.getValue()||r!==t.getPriority().val()?new We(s,Ve(r)):a}else{const t=a;return o=t,r!==t.getPriority().val()&&(o=o.updatePriority(new We(r))),t.forEachChild(Me,(s,d)=>{const m=fs(d,e.getImmediateChild(s),n);m!==d&&(o=o.updateImmediateChild(s,m))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function bs(a,e){let n=e instanceof Se?e:new Se(e),i=a,r=ge(n);for(;r!==null;){const o=oi(i.node.children,r)||{children:{},childCount:0};i=new js(r,i,o),n=Ne(n),r=ge(n)}return i}function ci(a){return a.node.value}function ql(a,e){a.node.value=e,vt(a)}function $l(a){return a.node.childCount>0}function Df(a){return ci(a)===void 0&&!$l(a)}function co(a,e){ma(a.node.children,(n,i)=>{e(new js(n,a,i))})}function Hl(a,e,n,i){n&&!i&&e(a),co(a,r=>{Hl(r,e,!0,i)}),n&&i&&e(a)}function Pf(a,e,n){let i=n?a:a.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ir(a){return new Se(a.parent===null?a.name:ir(a.parent)+"/"+a.name)}function vt(a){a.parent!==null&&Of(a.parent,a.name,a)}function Of(a,e,n){const i=Df(n),r=Ga(a.node.children,e);i&&r?(delete a.node.children[e],a.node.childCount--,vt(a)):!i&&!r&&(a.node.children[e]=n.node,a.node.childCount++,vt(a))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=/[\[\].#$\/\u0000-\u001F\u007F]/,Ff=/[\[\].#$\u0000-\u001F\u007F]/,qo=10*1024*1024,Wl=function(a){return typeof a=="string"&&a.length!==0&&!Mf.test(a)},Ul=function(a){return typeof a=="string"&&a.length!==0&&!Ff.test(a)},Lf=function(a){return a&&(a=a.replace(/^\/*\.info(\/|$)/,"/")),Ul(a)},Kl=function(a,e,n){const i=n instanceof Se?new ey(n,a):n;if(e===void 0)throw new Error(a+"contains undefined "+xn(i));if(typeof e=="function")throw new Error(a+"contains a function "+xn(i)+" with contents = "+e.toString());if($u(e))throw new Error(a+"contains "+e.toString()+" "+xn(i));if(typeof e=="string"&&e.length>qo/3&&so(e)>qo)throw new Error(a+"contains a string greater than "+qo+" utf8 bytes "+xn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,o=!1;if(ma(e,(t,s)=>{if(t===".value")r=!0;else if(t!==".priority"&&t!==".sv"&&(o=!0,!Wl(t)))throw new Error(a+" contains an invalid key ("+t+") "+xn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ay(i,t),Kl(a,s,i),ny(i)}),r&&o)throw new Error(a+' contains ".value" child '+xn(i)+" in addition to actual children.")}},Vl=function(a,e,n,i){if(!(i&&n===void 0)&&!Ul(n))throw new Error(Nu(a,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Bf=function(a,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Vl(a,e,n,i)},qf=function(a,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Lf(n))throw new Error(Nu(a,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hf(a,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],o=r.getPath();n!==null&&!ll(o,n.path)&&(a.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(r)}n&&a.eventLists_.push(n)}function gn(a,e,n){Hf(a,n),Wf(a,i=>Ea(i,e)||Ea(e,i))}function Wf(a,e){a.recursionDepth_++;let n=!0;for(let i=0;i<a.eventLists_.length;i++){const r=a.eventLists_[i];if(r){const o=r.path;e(o)?(Uf(a.eventLists_[i]),a.eventLists_[i]=null):n=!1}}n&&(a.eventLists_=[]),a.recursionDepth_--}function Uf(a){for(let e=0;e<a.events.length;e++){const n=a.events[e];if(n!==null){a.events[e]=null;const i=n.getEventRunner();Nn&&Je("event: "+n.toString()),Zi(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="repo_interrupt",Vf=25;class Yf{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $f,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mr(),this.transactionQueueTree_=new js,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Gf(a,e,n){if(a.stats_=ns(a.repoInfo_),a.forceRestClient_||xg())a.server_=new Or(a.repoInfo_,(i,r,o,t)=>{um(a,i,r,o,t)},a.authTokenProvider_,a.appCheckProvider_),setTimeout(()=>lm(a,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$e(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}a.persistentConnection_=new Ua(a.repoInfo_,e,(i,r,o,t)=>{um(a,i,r,o,t)},i=>{lm(a,i)},i=>{Qf(a,i)},a.authTokenProvider_,a.appCheckProvider_,n),a.server_=a.persistentConnection_}a.authTokenProvider_.addTokenChangeListener(i=>{a.server_.refreshAuthToken(i)}),a.appCheckProvider_.addTokenChangeListener(i=>{a.server_.refreshAppCheckToken(i.token)}),a.statsReporter_=Ag(a.repoInfo_,()=>new Ty(a.stats_,a.server_)),a.infoData_=new wy,a.infoSyncTree_=new dm({startListening:(i,r,o,t)=>{let s=[];const d=a.infoData_.getNode(i._path);return d.isEmpty()||(s=ar(a.infoSyncTree_,i._path,d),setTimeout(()=>{t("ok")},0)),s},stopListening:()=>{}}),vs(a,"connected",!1),a.serverSyncTree_=new dm({startListening:(i,r,o,t)=>(a.server_.listen(i,o,r,(s,d)=>{const m=t(s,d);gn(a.eventQueue_,i._path,m)}),[]),stopListening:(i,r)=>{a.server_.unlisten(i,r)}})}function Jf(a){const n=a.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yl(a){return Sf({timestamp:Jf(a)})}function um(a,e,n,i,r){a.dataUpdateCount++;const o=new Se(e);n=a.interceptServerDataCallback_?a.interceptServerDataCallback_(e,n):n;let t=[];if(r)if(i){const d=Ar(n,m=>Ve(m));t=vf(a.serverSyncTree_,o,d,r)}else{const d=Ve(n);t=Ol(a.serverSyncTree_,o,d,r)}else if(i){const d=Ar(n,m=>Ve(m));t=ff(a.serverSyncTree_,o,d)}else{const d=Ve(n);t=ar(a.serverSyncTree_,o,d)}let s=o;t.length>0&&(s=Cs(a,o)),gn(a.eventQueue_,s,t)}function lm(a,e){vs(a,"connected",e),e===!1&&ej(a)}function Qf(a,e){ma(e,(n,i)=>{vs(a,n,i)})}function vs(a,e,n){const i=new Se("/.info/"+e),r=Ve(n);a.infoData_.updateSnapshot(i,r);const o=ar(a.infoSyncTree_,i,r);gn(a.eventQueue_,i,o)}function Xf(a){return a.nextWriteId_++}function Zf(a,e,n){const i=xf(a.serverSyncTree_,e);return i!=null?Promise.resolve(i):a.server_.get(e).then(r=>{const o=Ve(r).withIndex(e._queryParams.getIndex());wf(a.serverSyncTree_,e,n,!0);let t;if(e._queryParams.loadsAllData())t=ar(a.serverSyncTree_,e._path,o);else{const s=Vi(a.serverSyncTree_,e);t=Ol(a.serverSyncTree_,e._path,o,s)}return gn(a.eventQueue_,e._path,t),Pl(a.serverSyncTree_,e,n,null,!0),o},r=>(ws(a,"get for query "+$e(e)+" failed: "+r),Promise.reject(new Error(r))))}function ej(a){ws(a,"onDisconnectEvents");const e=Yl(a),n=Mr();gt(a.onDisconnect_,fe(),(r,o)=>{const t=Rf(r,o,a.serverSyncTree_,e);fl(n,r,t)});let i=[];gt(n,fe(),(r,o)=>{i=i.concat(ar(a.serverSyncTree_,r,o));const t=rj(a,r);Cs(a,t)}),a.onDisconnect_=Mr(),gn(a.eventQueue_,fe(),i)}function aj(a){a.persistentConnection_&&a.persistentConnection_.interrupt(Kf)}function ws(a,...e){let n="";a.persistentConnection_&&(n=a.persistentConnection_.id+":"),Je(n,...e)}function Gl(a,e,n){return Ml(a.serverSyncTree_,e,n)||ne.EMPTY_NODE}function xs(a,e=a.transactionQueueTree_){if(e||po(a,e),ci(e)){const n=Ql(a,e);P(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&nj(a,ir(e),n)}else $l(e)&&co(e,n=>{xs(a,n)})}function nj(a,e,n){const i=n.map(m=>m.currentWriteId),r=Gl(a,e,i);let o=r;const t=r.hash();for(let m=0;m<n.length;m++){const k=n[m];P(k.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),k.status=1,k.retryCount++;const u=ra(e,k.path);o=o.updateChild(u,k.currentOutputSnapshotRaw)}const s=o.val(!0),d=e;a.server_.put(d.toString(),s,m=>{ws(a,"transaction put response",{path:d.toString(),status:m});let k=[];if(m==="ok"){const u=[];for(let c=0;c<n.length;c++)n[c].status=2,k=k.concat(Gn(a.serverSyncTree_,n[c].currentWriteId)),n[c].onComplete&&u.push(()=>n[c].onComplete(null,!0,n[c].currentOutputSnapshotResolved)),n[c].unwatcher();po(a,bs(a.transactionQueueTree_,e)),xs(a,a.transactionQueueTree_),gn(a.eventQueue_,e,k);for(let c=0;c<u.length;c++)Zi(u[c])}else{if(m==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{la("transaction at "+d.toString()+" failed: "+m);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=m}Cs(a,e)}},t)}function Cs(a,e){const n=Jl(a,e),i=ir(n),r=Ql(a,n);return ij(a,r,i),i}function ij(a,e,n){if(e.length===0)return;const i=[];let r=[];const t=e.filter(s=>s.status===0).map(s=>s.currentWriteId);for(let s=0;s<e.length;s++){const d=e[s],m=ra(n,d.path);let k=!1,u;if(P(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),d.status===4)k=!0,u=d.abortReason,r=r.concat(Gn(a.serverSyncTree_,d.currentWriteId,!0));else if(d.status===0)if(d.retryCount>=Vf)k=!0,u="maxretry",r=r.concat(Gn(a.serverSyncTree_,d.currentWriteId,!0));else{const c=Gl(a,d.path,t);d.currentInputSnapshot=c;const b=e[s].update(c.val());if(b!==void 0){Kl("transaction failed: Data returned ",b,d.path);let w=Ve(b);typeof b=="object"&&b!=null&&Ga(b,".priority")||(w=w.updatePriority(c.getPriority()));const L=d.currentWriteId,G=Yl(a),q=zf(w,c,G);d.currentOutputSnapshotRaw=w,d.currentOutputSnapshotResolved=q,d.currentWriteId=Xf(a),t.splice(t.indexOf(L),1),r=r.concat(yf(a.serverSyncTree_,d.path,q,d.currentWriteId,d.applyLocally)),r=r.concat(Gn(a.serverSyncTree_,L,!0))}else k=!0,u="nodata",r=r.concat(Gn(a.serverSyncTree_,d.currentWriteId,!0))}gn(a.eventQueue_,n,r),r=[],k&&(e[s].status=2,function(c){setTimeout(c,Math.floor(0))}(e[s].unwatcher),e[s].onComplete&&(u==="nodata"?i.push(()=>e[s].onComplete(null,!1,e[s].currentInputSnapshot)):i.push(()=>e[s].onComplete(new Error(u),!1,null))))}po(a,a.transactionQueueTree_);for(let s=0;s<i.length;s++)Zi(i[s]);xs(a,a.transactionQueueTree_)}function Jl(a,e){let n,i=a.transactionQueueTree_;for(n=ge(e);n!==null&&ci(i)===void 0;)i=bs(i,n),e=Ne(e),n=ge(e);return i}function Ql(a,e){const n=[];return Xl(a,e,n),n.sort((i,r)=>i.order-r.order),n}function Xl(a,e,n){const i=ci(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);co(e,r=>{Xl(a,r,n)})}function po(a,e){const n=ci(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,ql(e,n.length>0?n:void 0)}co(e,i=>{po(a,i)})}function rj(a,e){const n=ir(Jl(a,e)),i=bs(a.transactionQueueTree_,e);return Pf(i,r=>{$o(a,r)}),$o(a,i),Hl(i,r=>{$o(a,r)}),n}function $o(a,e){const n=ci(e);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)n[t].status===3||(n[t].status===1?(P(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(P(n[t].status===0,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Gn(a.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));o===-1?ql(e,void 0):n.length=o+1,gn(a.eventQueue_,ir(e),r);for(let t=0;t<i.length;t++)Zi(i[t])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oj(a){let e="";const n=a.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function tj(a){const e={};a.charAt(0)==="?"&&(a=a.substring(1));for(const n of a.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):la(`Invalid query segment '${n}' in query '${a}'`)}return e}const _m=function(a,e){const n=sj(a),i=n.namespace;n.domain==="firebase.com"&&Dn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Dn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||pg();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ig(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new Se(n.pathString)}},sj=function(a){let e="",n="",i="",r="",o="",t=!0,s="https",d=443;if(typeof a=="string"){let m=a.indexOf("//");m>=0&&(s=a.substring(0,m-1),a=a.substring(m+2));let k=a.indexOf("/");k===-1&&(k=a.length);let u=a.indexOf("?");u===-1&&(u=a.length),e=a.substring(0,Math.min(k,u)),k<u&&(r=oj(a.substring(k,u)));const c=tj(a.substring(Math.min(a.length,u)));m=e.indexOf(":"),m>=0?(t=s==="https"||s==="wss",d=parseInt(e.substring(m+1),10)):m=e.length;const b=e.slice(0,m);if(b.toLowerCase()==="localhost")n="localhost";else if(b.split(".").length<=2)n=b;else{const w=e.indexOf(".");i=e.substring(0,w).toLowerCase(),n=e.substring(w+1),o=i}"ns"in c&&(o=c.ns)}return{host:e,port:d,domain:n,subdomain:i,secure:t,scheme:s,pathString:r,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dj{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$e(this.snapshot.exportVal())}}class mj{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uj{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Es{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return ce(this._path)?null:dl(this._path)}get ref(){return new Ja(this._repo,this._path)}get _queryIdentifier(){const e=Qd(this._queryParams),n=es(e);return n==="{}"?"default":n}get _queryObject(){return Qd(this._queryParams)}isEqual(e){if(e=_i(e),!(e instanceof Es))return!1;const n=this._repo===e._repo,i=ll(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Zg(this._path)}}class Ja extends Es{constructor(e,n){super(e,n,new ss,!1)}get parent(){const e=ul(this._path);return e===null?null:new Ja(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Yi{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Se(e),i=wt(this.ref,e);return new Yi(this._node.getChild(n),i,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Yi(r,wt(this.ref,i),Me)))}hasChild(e){const n=new Se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function lj(a,e){return a=_i(a),a._checkNotDeleted("ref"),e!==void 0?wt(a._root,e):a._root}function wt(a,e){return a=_i(a),ge(a._path)===null?Bf("child","path",e,!1):Vl("child","path",e,!1),new Ja(a._repo,He(a._path,e))}function _j(a){a=_i(a);const e=new uj(()=>{}),n=new Is(e);return Zf(a._repo,a,n).then(i=>new Yi(i,new Ja(a._repo,a._path),a._queryParams.getIndex()))}class Is{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new dj("value",this,new Yi(e.snapshotNode,new Ja(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new mj(this,e,n):null}matches(e){return e instanceof Is?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}uf(Ja);pf(Ja);/**
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
 */const kj="FIREBASE_DATABASE_EMULATOR_HOST",xt={};let cj=!1;function pj(a,e,n,i,r){let o=i||a.options.databaseURL;o===void 0&&(a.options.projectId||Dn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Je("Using default host for project ",a.options.projectId),o=`${a.options.projectId}-default-rtdb.firebaseio.com`);let t=_m(o,r),s=t.repoInfo,d,m;typeof process<"u"&&process.env&&(m=process.env[kj]),m?(d=!0,o=`http://${m}?ns=${s.namespace}`,t=_m(o,r),s=t.repoInfo):d=!t.repoInfo.secure;const k=r&&d?new ct(ct.OWNER):new Eg(a.name,a.options,e);qf("Invalid Firebase Database URL",t),ce(t.path)||Dn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=gj(s,a,k,new Cg(a.name,n));return new yj(u,a)}function hj(a,e){const n=xt[e];(!n||n[a.key]!==a)&&Dn(`Database ${e}(${a.repoInfo_}) has already been deleted.`),aj(a),delete n[a.key]}function gj(a,e,n,i){let r=xt[e.name];r||(r={},xt[e.name]=r);let o=r[a.toURLString()];return o&&Dn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new Yf(a,cj,n,i),r[a.toURLString()]=o,o}class yj{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Gf(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ja(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hj(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Dn("Cannot call "+e+" on a deleted database.")}}function fj(a=Ou(),e){return Ji(a,"database").getImmediate({identifier:e})}/**
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
 */function jj(a){ug(Qh),kn(new Va("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return pj(i,r,o,n)},"PUBLIC").setMultipleInstances(!0)),Ma(Dd,Pd,a),Ma(Dd,Pd,"esm2017")}Ua.prototype.simpleListen=function(a,e){this.sendRequest("q",{p:a},e)};Ua.prototype.echo=function(a,e){this.sendRequest("echo",{d:a},e)};jj();const Zl="@firebase/installations",Ts="0.5.12";/**
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
 */const e_=1e4,a_=`w:${Ts}`,n_="FIS_v2",bj="https://firebaseinstallations.googleapis.com/v1",vj=60*60*1e3,wj="installations",xj="Installations";/**
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
 */const Cj={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Fn=new to(wj,xj,Cj);function i_(a){return a instanceof qn&&a.code.includes("request-failed")}/**
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
 */function r_({projectId:a}){return`${bj}/projects/${a}/installations`}function o_(a){return{token:a.token,requestStatus:2,expiresIn:Ij(a.expiresIn),creationTime:Date.now()}}async function t_(a,e){const i=(await e.json()).error;return Fn.create("request-failed",{requestName:a,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function s_({apiKey:a}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":a})}function Ej(a,{refreshToken:e}){const n=s_(a);return n.append("Authorization",Tj(e)),n}async function d_(a){const e=await a();return e.status>=500&&e.status<600?a():e}function Ij(a){return Number(a.replace("s","000"))}function Tj(a){return`${n_} ${a}`}/**
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
 */async function Sj({appConfig:a,heartbeatServiceProvider:e},{fid:n}){const i=r_(a),r=s_(a),o=e.getImmediate({optional:!0});if(o){const m=await o.getHeartbeatsHeader();m&&r.append("x-firebase-client",m)}const t={fid:n,authVersion:n_,appId:a.appId,sdkVersion:a_},s={method:"POST",headers:r,body:JSON.stringify(t)},d=await d_(()=>fetch(i,s));if(d.ok){const m=await d.json();return{fid:m.fid||n,registrationStatus:2,refreshToken:m.refreshToken,authToken:o_(m.authToken)}}else throw await t_("Create Installation",d)}/**
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
 */function m_(a){return new Promise(e=>{setTimeout(e,a)})}/**
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
 */function Aj(a){return btoa(String.fromCharCode(...a)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Nj=/^[cdef][\w-]{21}$/,Ct="";function Rj(){try{const a=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(a),a[0]=112+a[0]%16;const n=zj(a);return Nj.test(n)?n:Ct}catch{return Ct}}function zj(a){return Aj(a).substr(0,22)}/**
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
 */function ho(a){return`${a.appName}!${a.appId}`}/**
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
 */const u_=new Map;function l_(a,e){const n=ho(a);__(n,e),Dj(n,e)}function __(a,e){const n=u_.get(a);if(!!n)for(const i of n)i(e)}function Dj(a,e){const n=Pj();n&&n.postMessage({key:a,fid:e}),Oj()}let Sn=null;function Pj(){return!Sn&&"BroadcastChannel"in self&&(Sn=new BroadcastChannel("[Firebase] FID Change"),Sn.onmessage=a=>{__(a.data.key,a.data.fid)}),Sn}function Oj(){u_.size===0&&Sn&&(Sn.close(),Sn=null)}/**
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
 */const Mj="firebase-installations-database",Fj=1,Ln="firebase-installations-store";let Ho=null;function Ss(){return Ho||(Ho=Du(Mj,Fj,{upgrade:(a,e)=>{switch(e){case 0:a.createObjectStore(Ln)}}})),Ho}async function Ur(a,e){const n=ho(a),r=(await Ss()).transaction(Ln,"readwrite"),o=r.objectStore(Ln),t=await o.get(n);return await o.put(e,n),await r.done,(!t||t.fid!==e.fid)&&l_(a,e.fid),e}async function k_(a){const e=ho(a),i=(await Ss()).transaction(Ln,"readwrite");await i.objectStore(Ln).delete(e),await i.done}async function go(a,e){const n=ho(a),r=(await Ss()).transaction(Ln,"readwrite"),o=r.objectStore(Ln),t=await o.get(n),s=e(t);return s===void 0?await o.delete(n):await o.put(s,n),await r.done,s&&(!t||t.fid!==s.fid)&&l_(a,s.fid),s}/**
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
 */async function As(a){let e;const n=await go(a.appConfig,i=>{const r=Lj(i),o=Bj(a,r);return e=o.registrationPromise,o.installationEntry});return n.fid===Ct?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Lj(a){const e=a||{fid:Rj(),registrationStatus:0};return c_(e)}function Bj(a,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Fn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=qj(a,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:$j(a)}:{installationEntry:e}}async function qj(a,e){try{const n=await Sj(a,e);return Ur(a.appConfig,n)}catch(n){throw i_(n)&&n.customData.serverCode===409?await k_(a.appConfig):await Ur(a.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function $j(a){let e=await km(a.appConfig);for(;e.registrationStatus===1;)await m_(100),e=await km(a.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await As(a);return i||n}return e}function km(a){return go(a,e=>{if(!e)throw Fn.create("installation-not-found");return c_(e)})}function c_(a){return Hj(a)?{fid:a.fid,registrationStatus:0}:a}function Hj(a){return a.registrationStatus===1&&a.registrationTime+e_<Date.now()}/**
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
 */async function Wj({appConfig:a,heartbeatServiceProvider:e},n){const i=Uj(a,n),r=Ej(a,n),o=e.getImmediate({optional:!0});if(o){const m=await o.getHeartbeatsHeader();m&&r.append("x-firebase-client",m)}const t={installation:{sdkVersion:a_,appId:a.appId}},s={method:"POST",headers:r,body:JSON.stringify(t)},d=await d_(()=>fetch(i,s));if(d.ok){const m=await d.json();return o_(m)}else throw await t_("Generate Auth Token",d)}function Uj(a,{fid:e}){return`${r_(a)}/${e}/authTokens:generate`}/**
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
 */async function Ns(a,e=!1){let n;const i=await go(a.appConfig,o=>{if(!p_(o))throw Fn.create("not-registered");const t=o.authToken;if(!e&&Yj(t))return o;if(t.requestStatus===1)return n=Kj(a,e),o;{if(!navigator.onLine)throw Fn.create("app-offline");const s=Jj(o);return n=Vj(a,s),s}});return n?await n:i.authToken}async function Kj(a,e){let n=await cm(a.appConfig);for(;n.authToken.requestStatus===1;)await m_(100),n=await cm(a.appConfig);const i=n.authToken;return i.requestStatus===0?Ns(a,e):i}function cm(a){return go(a,e=>{if(!p_(e))throw Fn.create("not-registered");const n=e.authToken;return Qj(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Vj(a,e){try{const n=await Wj(a,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Ur(a.appConfig,i),n}catch(n){if(i_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await k_(a.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ur(a.appConfig,i)}throw n}}function p_(a){return a!==void 0&&a.registrationStatus===2}function Yj(a){return a.requestStatus===2&&!Gj(a)}function Gj(a){const e=Date.now();return e<a.creationTime||a.creationTime+a.expiresIn<e+vj}function Jj(a){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},a),{authToken:e})}function Qj(a){return a.requestStatus===1&&a.requestTime+e_<Date.now()}/**
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
 */async function Xj(a){const e=a,{installationEntry:n,registrationPromise:i}=await As(e);return i?i.catch(console.error):Ns(e).catch(console.error),n.fid}/**
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
 */async function Zj(a,e=!1){const n=a;return await eb(n),(await Ns(n,e)).token}async function eb(a){const{registrationPromise:e}=await As(a);e&&await e}/**
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
 */function ab(a){if(!a||!a.options)throw Wo("App Configuration");if(!a.name)throw Wo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!a.options[n])throw Wo(n);return{appName:a.name,projectId:a.options.projectId,apiKey:a.options.apiKey,appId:a.options.appId}}function Wo(a){return Fn.create("missing-app-config-values",{valueName:a})}/**
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
 */const h_="installations",nb="installations-internal",ib=a=>{const e=a.getProvider("app").getImmediate(),n=ab(e),i=Ji(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},rb=a=>{const e=a.getProvider("app").getImmediate(),n=Ji(e,h_).getImmediate();return{getId:()=>Xj(n),getToken:r=>Zj(n,r)}};function ob(){kn(new Va(h_,ib,"PUBLIC")),kn(new Va(nb,rb,"PRIVATE"))}ob();Ma(Zl,Ts);Ma(Zl,Ts,"esm2017");/**
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
 */const Kr="analytics",tb="firebase_id",sb="origin",db=60*1e3,mb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",g_="https://www.googletagmanager.com/gtag/js";/**
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
 */const _a=new Xt("@firebase/analytics");/**
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
 */function y_(a){return Promise.all(a.map(e=>e.catch(n=>n)))}function ub(a,e){const n=document.createElement("script");n.src=`${g_}?l=${a}&id=${e}`,n.async=!0,document.head.appendChild(n)}function lb(a){let e=[];return Array.isArray(window[a])?e=window[a]:window[a]=e,e}async function _b(a,e,n,i,r,o){const t=i[r];try{if(t)await e[t];else{const d=(await y_(n)).find(m=>m.measurementId===r);d&&await e[d.appId]}}catch(s){_a.error(s)}a("config",r,o)}async function kb(a,e,n,i,r){try{let o=[];if(r&&r.send_to){let t=r.send_to;Array.isArray(t)||(t=[t]);const s=await y_(n);for(const d of t){const m=s.find(u=>u.measurementId===d),k=m&&e[m.appId];if(k)o.push(k);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),a("event",i,r||{})}catch(o){_a.error(o)}}function cb(a,e,n,i){async function r(o,t,s){try{o==="event"?await kb(a,e,n,t,s):o==="config"?await _b(a,e,n,i,t,s):o==="consent"?a("consent","update",s):a("set",t)}catch(d){_a.error(d)}}return r}function pb(a,e,n,i,r){let o=function(...t){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(o=window[r]),window[r]=cb(o,a,e,n),{gtagCore:o,wrappedGtag:window[r]}}function hb(){const a=window.document.getElementsByTagName("script");for(const e of Object.values(a))if(e.src&&e.src.includes(g_))return e;return null}/**
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
 */const gb={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},ya=new to("analytics","Analytics",gb);/**
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
 */const yb=30,fb=1e3;class jb{constructor(e={},n=fb){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const f_=new jb;function bb(a){return new Headers({Accept:"application/json","x-goog-api-key":a})}async function vb(a){var e;const{appId:n,apiKey:i}=a,r={method:"GET",headers:bb(i)},o=mb.replace("{app-id}",n),t=await fetch(o,r);if(t.status!==200&&t.status!==304){let s="";try{const d=await t.json();!((e=d.error)===null||e===void 0)&&e.message&&(s=d.error.message)}catch{}throw ya.create("config-fetch-failed",{httpStatus:t.status,responseMessage:s})}return t.json()}async function wb(a,e=f_,n){const{appId:i,apiKey:r,measurementId:o}=a.options;if(!i)throw ya.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:i};throw ya.create("no-api-key")}const t=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new Eb;return setTimeout(async()=>{s.abort()},n!==void 0?n:db),j_({appId:i,apiKey:r,measurementId:o},t,s,e)}async function j_(a,{throttleEndTimeMillis:e,backoffCount:n},i,r=f_){var o,t;const{appId:s,measurementId:d}=a;try{await xb(i,e)}catch(m){if(d)return _a.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${(o=m)===null||o===void 0?void 0:o.message}]`),{appId:s,measurementId:d};throw m}try{const m=await vb(a);return r.deleteThrottleMetadata(s),m}catch(m){const k=m;if(!Cb(k)){if(r.deleteThrottleMetadata(s),d)return _a.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${k==null?void 0:k.message}]`),{appId:s,measurementId:d};throw m}const u=Number((t=k==null?void 0:k.customData)===null||t===void 0?void 0:t.httpStatus)===503?Ed(n,r.intervalMillis,yb):Ed(n,r.intervalMillis),c={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(s,c),_a.debug(`Calling attemptFetch again in ${u} millis`),j_(a,c,i,r)}}function xb(a,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),o=setTimeout(n,r);a.addEventListener(()=>{clearTimeout(o),i(ya.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Cb(a){if(!(a instanceof qn)||!a.customData)return!1;const e=Number(a.customData.httpStatus);return e===429||e===500||e===503||e===504}class Eb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Ib(a,e,n,i,r){if(r&&r.global){a("event",n,i);return}else{const o=await e,t=Object.assign(Object.assign({},i),{send_to:o});a("event",n,t)}}/**
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
 */async function Tb(){var a;if(Tu())try{await Su()}catch(e){return _a.warn(ya.create("indexeddb-unavailable",{errorInfo:(a=e)===null||a===void 0?void 0:a.toString()}).message),!1}else return _a.warn(ya.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Sb(a,e,n,i,r,o,t){var s;const d=wb(a);d.then(b=>{n[b.measurementId]=b.appId,a.options.measurementId&&b.measurementId!==a.options.measurementId&&_a.warn(`The measurement ID in the local Firebase config (${a.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>_a.error(b)),e.push(d);const m=Tb().then(b=>{if(b)return i.getId()}),[k,u]=await Promise.all([d,m]);hb()||ub(o,k.measurementId),r("js",new Date);const c=(s=t==null?void 0:t.config)!==null&&s!==void 0?s:{};return c[sb]="firebase",c.update=!0,u!=null&&(c[tb]=u),r("config",k.measurementId,c),k.measurementId}/**
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
 */class Ab{constructor(e){this.app=e}_delete(){return delete zi[this.app.options.appId],Promise.resolve()}}let zi={},pm=[];const hm={};let Uo="dataLayer",Nb="gtag",gm,b_,ym=!1;function Rb(){const a=[];if(qp()&&a.push("This is a browser extension environment."),Hp()||a.push("Cookies are not available."),a.length>0){const e=a.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=ya.create("invalid-analytics-context",{errorInfo:e});_a.warn(n.message)}}function zb(a,e,n){Rb();const i=a.options.appId;if(!i)throw ya.create("no-app-id");if(!a.options.apiKey)if(a.options.measurementId)_a.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${a.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ya.create("no-api-key");if(zi[i]!=null)throw ya.create("already-exists",{id:i});if(!ym){lb(Uo);const{wrappedGtag:o,gtagCore:t}=pb(zi,pm,hm,Uo,Nb);b_=o,gm=t,ym=!0}return zi[i]=Sb(a,pm,hm,e,gm,Uo,n),new Ab(a)}function Db(a=Ou()){a=_i(a);const e=Ji(a,Kr);return e.isInitialized()?e.getImmediate():Pb(a)}function Pb(a,e={}){const n=Ji(a,Kr);if(n.isInitialized()){const r=n.getImmediate();if(Nr(e,n.getOptions()))return r;throw ya.create("already-initialized")}return n.initialize({options:e})}function Ob(a,e,n,i){a=_i(a),Ib(b_,zi[a.app.options.appId],e,n,i).catch(r=>_a.error(r))}const fm="@firebase/analytics",jm="0.8.0";function Mb(){kn(new Va(Kr,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return zb(i,r,n)},"PUBLIC")),kn(new Va("analytics-internal",a,"PRIVATE")),Ma(fm,jm),Ma(fm,jm,"esm2017");function a(e){try{const n=e.getProvider(Kr).getImmediate();return{logEvent:(i,r,o)=>Ob(n,i,r,o)}}catch(n){throw ya.create("interop-component-reg-failed",{reason:n})}}}Mb();var pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hr(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var v_={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0