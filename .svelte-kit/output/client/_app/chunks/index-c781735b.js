function S(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function L(){return Object.create(null)}function p(t){t.forEach(T)}function W(t){return typeof t=="function"}function ot(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function st(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function G(t){return Object.keys(t).length===0}function q(t,...n){if(t==null)return S;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function at(t){let n;return q(t,e=>n=e)(),n}function ft(t,n,e){t.$$.on_destroy.push(q(n,e))}function _t(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],u=Math.max(n.dirty.length,r.length);for(let l=0;l<u;l+=1)s[l]=n.dirty[l]|r[l];return s}return n.dirty|r}return n.dirty}function ht(t,n,e,i,r,s){if(r){const u=B(n,e,i,s);t.p(u,r)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function pt(t,n,e){return t.set(e),n}let v=!1;function J(){v=!0}function K(){v=!1}function Q(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<n.length;o++){const f=n[o];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const o=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=o?r+1:Q(1,r,y=>n[e[y]].claim_order,o))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const s=[],u=[];let l=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(s.push(n[c-1]);l>=c;l--)u.push(n[l]);l--}for(;l>=0;l--)u.push(n[l]);s.reverse(),u.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<u.length;c++){for(;o<s.length&&u[c].claim_order>=s[o].claim_order;)o++;const f=o<s.length?s[o]:null;t.insertBefore(u[c],f)}}function U(t,n){if(v){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function yt(t,n,e){v&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function gt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function xt(){return A(" ")}function bt(){return A("")}function $t(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function vt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,r=!1){tt(t);const s=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const l=t[u];if(n(l)){const c=e(l);return c===void 0?t.splice(u,1):t[u]=c,r||(t.claim_info.last_index=u),l}}for(let u=t.claim_info.last_index-1;u>=0;u--){const l=t[u];if(n(l)){const c=e(l);return c===void 0?t.splice(u,1):t[u]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function D(t,n,e,i){return O(t,r=>r.nodeName===n,r=>{const s=[];for(let u=0;u<r.attributes.length;u++){const l=r.attributes[u];e[l.name]||s.push(l.name)}s.forEach(u=>r.removeAttribute(u))},()=>i(n))}function Et(t,n,e){return D(t,n,e,X)}function wt(t,n,e){return D(t,n,e,Y)}function nt(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function kt(t){return nt(t," ")}function Nt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function jt(t,n){t.value=n==null?"":n}function St(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function At(t,n,e){t.classList[e?"add":"remove"](n)}function et(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}let m;function h(t){m=t}function E(){if(!m)throw new Error("Function called outside component initialization");return m}function Ct(t){E().$$.on_mount.push(t)}function Mt(t){E().$$.after_update.push(t)}function Lt(){const t=E();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=et(n,e,{cancelable:i});return r.slice().forEach(u=>{u.call(t,s)}),!s.defaultPrevented}return!0}}function Pt(t,n){return E().$$.context.set(t,n),n}const d=[],P=[],b=[],k=[],z=Promise.resolve();let N=!1;function F(){N||(N=!0,z.then(H))}function Tt(){return F(),z}function j(t){b.push(t)}function qt(t){k.push(t)}const w=new Set;let x=0;function H(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),it(n.$$)}for(h(null),d.length=0,x=0;P.length;)P.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];w.has(e)||(w.add(e),e())}b.length=0}while(d.length);for(;k.length;)k.pop()();N=!1,w.clear(),h(t)}function it(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const $=new Set;let _;function Bt(){_={r:0,c:[],p:_}}function Ot(){_.r||p(_.c),_=_.p}function rt(t,n){t&&t.i&&($.delete(t),t.i(n))}function Dt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function zt(t,n){const e={},i={},r={$$scope:1};let s=t.length;for(;s--;){const u=t[s],l=n[s];if(l){for(const c in u)c in l||(i[c]=1);for(const c in l)r[c]||(e[c]=l[c],r[c]=1);t[s]=l}else for(const c in u)r[c]=1}for(const u in i)u in e||(e[u]=void 0);return e}function Ft(t){return typeof t=="object"&&t!==null?t:{}}function Ht(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function It(t){t&&t.c()}function Wt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:r,on_mount:s,on_destroy:u,after_update:l}=t.$$;r&&r.m(n,e),i||j(()=>{const c=s.map(T).filter(W);u?u.push(...c):p(c),t.$$.on_mount=[]}),l.forEach(j)}function ut(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(d.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Gt(t,n,e,i,r,s,u,l=[-1]){const c=m;h(t);const o=t.$$={fragment:null,ctx:null,props:s,update:S,not_equal:r,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:L(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};u&&u(o.root);let f=!1;if(o.ctx=e?e(t,n.props||{},(a,y,...C)=>{const M=C.length?C[0]:y;return o.ctx&&r(o.ctx[a],o.ctx[a]=M)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](M),f&&lt(t,a)),y}):[],o.update(),f=!0,p(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){J();const a=Z(n.target);o.fragment&&o.fragment.l(a),a.forEach(V)}else o.fragment&&o.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),K(),H()}h(c)}class Jt{$destroy(){ut(this,1),this.$destroy=S}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ft as A,ut as B,I as C,Tt as D,S as E,_t as F,ht as G,mt as H,dt as I,U as J,Y as K,wt as L,st as M,gt as N,ft as O,pt as P,At as Q,$t as R,Jt as S,Lt as T,qt as U,P as V,Ht as W,at as X,jt as Y,p as Z,Z as a,vt as b,Et as c,V as d,X as e,St as f,yt as g,nt as h,Gt as i,Nt as j,xt as k,bt as l,kt as m,Bt as n,Dt as o,Ot as p,rt as q,Pt as r,ot as s,A as t,Mt as u,Ct as v,It as w,Wt as x,ct as y,zt as z};