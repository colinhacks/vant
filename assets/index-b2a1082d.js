import{t as I}from"./util-3aefb3b3.js";import{e as j,t as E,h as V,n as O,c as U,d as z,m as A,M,a as q}from"./use-translate-1ddc661f.js";import{I as D}from"./index-c20ef9f4.js";import{A as P,y as _,D as F,M as L,u as Q,e as o,B as Z,S as G,Q as H,q as J,o as l,c as m,w as u,C as t,a as p,F as g,b as k,f as v,g as K,t as R,d as W}from"./vue-libs-57cd1a95.js";import{n as h,c as X,w as Y}from"./with-install-4ceae99b.js";import{V as b,b as $}from"./index-9e9884d1.js";import{V as y}from"./index-415c7833.js";import"./index-7e986669.js";import"./use-id-2a078838.js";import"./use-expose-31cbee35.js";import"./use-route-b92a630a.js";import"./index-51c79983.js";import"./use-touch-093d9c5b.js";import"./on-popup-reopen-a43c7b56.js";import"./use-refs-a54e49b2.js";import"./index-fb55fa68.js";import"./constant-a81ffd37.js";import"./interceptor-96754bdd.js";function tt(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!H(a)}const[et,C]=U("back-top"),at={right:h,bottom:h,zIndex:h,target:[String,Object],offset:X(200),immediate:Boolean,teleport:{type:[String,Object],default:"body"}},ot=P({name:et,inheritAttrs:!1,props:at,emits:["click"],setup(a,{emit:s,slots:r,attrs:c}){const d=_(!1),S=_(),i=_(),e=F(()=>j(E(a.zIndex),{right:V(a.right),bottom:V(a.bottom)})),w=n=>{var f;s("click",n),(f=i.value)==null||f.scrollTo({top:0,behavior:a.immediate?"auto":"smooth"})},x=()=>{d.value=i.value?M(i.value)>=+a.offset:!1},N=()=>{const{target:n}=a;if(typeof n=="string"){const f=document.querySelector(n);if(f)return f}else return n},B=()=>{z&&J(()=>{i.value=a.target?N():A(S.value),x()})};return O("scroll",I(x,100),{target:i}),L(B),Q(()=>a.target,B),()=>{const n=o("div",Z({ref:a.teleport?void 0:S,class:C({active:d.value}),style:e.value,onClick:w},c),[r.default?r.default():o(D,{name:"back-top",class:C("icon")},null)]);return a.teleport?[o("div",{ref:S,class:C("placeholder")},null),o(G,{to:a.teleport},tt(n)?n:{default:()=>[n]})]:n}}}),lt=Y(ot),T=lt,ht=P({__name:"index",setup(a){const s=q({"zh-CN":{backTop:"返回顶部",customContent:"自定义内容",customPosition:"自定义位置",immediateScroll:"瞬间滚动",setScrollTarget:"设置滚动目标"},"en-US":{backTop:"Back Top",customContent:"Custom Content",customPosition:"Custom Position",immediateScroll:"Immediate Scroll",setScrollTarget:"Set Scroll Target"}}),r=_(0),c=[...Array(50).keys()],d=_();return(S,i)=>(l(),m(t($),{active:r.value,"onUpdate:active":i[0]||(i[0]=e=>r.value=e),ellipsis:!1},{default:u(()=>[o(t(b),{title:t(s)("basicUsage")},{default:u(()=>[(l(),p(g,null,k(c,e=>o(t(y),{key:e,title:e},null,8,["title"])),64)),r.value===0?(l(),m(t(T),{key:0})):v("",!0)]),_:1},8,["title"]),o(t(b),{title:t(s)("customPosition")},{default:u(()=>[(l(),p(g,null,k(c,e=>o(t(y),{key:e,title:e},null,8,["title"])),64)),r.value===1?(l(),m(t(T),{key:0,right:"15vw",bottom:"10vh"})):v("",!0)]),_:1},8,["title"]),o(t(b),{title:t(s)("customContent")},{default:u(()=>[(l(),p(g,null,k(c,e=>o(t(y),{key:e,title:e},null,8,["title"])),64)),r.value===2?(l(),m(t(T),{key:0,class:"custom-back-top"},{default:u(()=>[K(R(t(s)("backTop")),1)]),_:1})):v("",!0)]),_:1},8,["title"]),o(t(b),{title:t(s)("setScrollTarget")},{default:u(()=>[W("div",{class:"back-top-wrapper",ref_key:"targetEl",ref:d},[(l(),p(g,null,k(c,e=>o(t(y),{key:e,title:e},null,8,["title"])),64)),r.value===3?(l(),m(t(T),{key:0,target:d.value,bottom:"30vh"},null,8,["target"])):v("",!0)],512)]),_:1},8,["title"]),o(t(b),{title:t(s)("immediateScroll")},{default:u(()=>[(l(),p(g,null,k(c,e=>o(t(y),{key:e,title:e},null,8,["title"])),64)),r.value===4?(l(),m(t(T),{key:0,immediate:""})):v("",!0)]),_:1},8,["title"])]),_:1},8,["active"]))}});export{ht as default};
