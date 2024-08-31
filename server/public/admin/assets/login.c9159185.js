import{B as P,C as j,D as z,F as T,w as X}from"./element-plus.a19c38cb.js";import{u as C,a as M,c as k,A as b,_ as O,b as W,P as Y,d as G}from"./index.2c3a2ec1.js";import{u as H,a as J}from"./vue-router.48496b4b.js";import{d as E,b as D,o as _,c as f,a as r,W as Q,a8 as Z,u as h,V as L,r as R,s as B,a1 as ee,f as oe,X as o,P as c,a9 as V,U as te}from"./@vue.b52708da.js";import"./@element-plus.35ec7429.js";import"./lodash-es.2b4cc642.js";import"./dayjs.aca3739b.js";import"./axios.035c7747.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@vueuse.e1a32ef4.js";import"./lodash.d4d52acc.js";import"./pinia.3f41eb90.js";import"./css-color-function.8ccff1e7.js";import"./color.b3414844.js";import"./clone.17cc33b7.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.ccf86c2c.js";import"./vue-clipboard3.5605d23a.js";import"./clipboard.32978cdd.js";import"./echarts.004f4e72.js";import"./zrender.b56a9aa5.js";import"./tslib.60310f1a.js";import"./highlight.js.db90315f.js";import"./@highlightjs.0797cc3b.js";const se={class:"layout-footer"},ne={class:"text-center p-2 text-xs text-tx-secondary max-w-[900px] mx-auto"},re=["href"],ae=E({__name:"footer",setup(g){const t=C(),l=D(()=>t.config.copyright_config||[]);return(m,a)=>(_(),f("footer",se,[r("div",ne,[(_(!0),f(Q,null,Z(h(l),u=>(_(),f("a",{class:"mx-1 hover:underline",href:u.value,target:"_blank",key:u.key},L(u.key),9,re))),128))])]))}});function ce(g){const t=R(!1);return{isLock:t,lockFn:async(...m)=>{if(!t.value){t.value=!0;try{const a=await g(...m);return t.value=!1,a}catch(a){throw t.value=!1,a}}}}}const le={class:"login flex flex-col"},ue={class:"flex-1 flex items-center justify-center"},ie={class:"login-card flex rounded-md"},pe={class:"flex-1 h-full hidden md:inline-block"},me={class:"login-form bg-body flex flex-col justify-center px-10 py-10 md:w-[400px] w-[375px] flex-none mx-auto"},de={class:"text-center text-3xl font-medium mb-8"},_e={class:"mb-5"},fe=E({__name:"login",setup(g){const t=B(),l=B(),m=C(),a=M(),u=H(),U=J(),i=R(!1),v=D(()=>m.config),s=ee({account:"",password:""}),S={account:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:["blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:["blur"]}]},N=()=>{var e;if(!s.password)return(e=t.value)==null?void 0:e.focus();x()},x=async()=>{var d;await((d=l.value)==null?void 0:d.validate()),k.set(b,{remember:i.value,account:i.value?s.account:""}),await a.login(s);const{query:{redirect:e}}=u,n=typeof e=="string"?e:Y.INDEX;U.push(n)},{isLock:$,lockFn:A}=ce(x);return oe(()=>{const e=k.get(b);e!=null&&e.remember&&(i.value=e.remember,s.account=e.account)}),(e,n)=>{const d=O,y=W,w=j,F=z,I=T,K=P,q=X;return _(),f("div",le,[r("div",ue,[r("div",ie,[r("div",pe,[o(d,{src:v.value.login_image,width:400,height:"100%"},null,8,["src"])]),r("div",me,[r("div",de,L(v.value.web_name),1),o(I,{ref_key:"formRef",ref:l,model:s,size:"large",rules:S},{default:c(()=>[o(F,{prop:"account"},{default:c(()=>[o(w,{modelValue:s.account,"onUpdate:modelValue":n[0]||(n[0]=p=>s.account=p),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7",onKeyup:V(N,["enter"])},{prepend:c(()=>[o(y,{name:"el-icon-User"})]),_:1},8,["modelValue"])]),_:1}),o(F,{prop:"password"},{default:c(()=>[o(w,{ref_key:"passwordRef",ref:t,modelValue:s.password,"onUpdate:modelValue":n[1]||(n[1]=p=>s.password=p),"show-password":"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",onKeyup:V(x,["enter"])},{prepend:c(()=>[o(y,{name:"el-icon-Lock"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"]),r("div",_e,[o(K,{modelValue:i.value,"onUpdate:modelValue":n[2]||(n[2]=p=>i.value=p),label:"\u8BB0\u4F4F\u8D26\u53F7"},null,8,["modelValue"])]),o(q,{type:"primary",size:"large",loading:h($),onClick:h(A)},{default:c(()=>[te(" \u767B\u5F55 ")]),_:1},8,["loading","onClick"])])])]),o(ae)])}}});const Ye=G(fe,[["__scopeId","data-v-5a9bc6ac"]]);export{Ye as default};
