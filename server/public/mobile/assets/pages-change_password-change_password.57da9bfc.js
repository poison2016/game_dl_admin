import{d as e,z as a,G as s,I as o,K as t,o as l,g as r,e as u,w as d,l as p,t as m,b as i,f,F as n,ar as _,ai as c,r as w,a as b,p as x}from"./index-aa2c3a24.js";import{_ as y}from"./page-meta.7fcf423d.js";import{_ as g}from"./u-input.5cb09676.js";import{_ as h}from"./u-form-item.45d3ad33.js";import{_ as j}from"./u-form.c0c613c9.js";import{_ as v}from"./u-button.bfdde97b.js";import{_ as V}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.7e76f1a5.js";import"./emitter.1571a5d9.js";const $=V(e({__name:"change_password",setup(e){const V=a(""),$=s({password:"",password_confirm:""}),B=async()=>$.old_password||"set"==V.value?$.password?$.password_confirm?$.password!=$.password_confirm?uni.$u.toast("两次输入的密码不一致"):(await _($),uni.$u.toast("操作成功"),void setTimeout((()=>{c()}),1500)):uni.$u.toast("请输入确认密码"):uni.$u.toast("请输入密码"):uni.$u.toast("请输入原来的密码");return o((e=>{V.value=e.type||"","set"==V.value&&t({title:"设置登录密码"})})),(e,a)=>{const s=w(b("page-meta"),y),o=x,t=w(b("u-input"),g),_=w(b("u-form-item"),h),c=w(b("u-form"),j),U=w(b("u-button"),v);return l(),r(n,null,[u(s,{"page-style":e.$theme.pageStyle},null,8,["page-style"]),u(o,{class:"register bg-white min-h-full flex flex-col items-center px-[40rpx] pt-[100rpx] box-border"},{default:d((()=>[u(o,{class:"w-full"},{default:d((()=>[u(o,{class:"text-2xl font-medium mb-[60rpx]"},{default:d((()=>[p(m("set"==V.value?"设置登录密码":"修改登录密码"),1)])),_:1}),u(c,{borderBottom:"","label-width":150},{default:d((()=>["set"!=V.value?(l(),i(_,{key:0,label:"原密码",borderBottom:""},{default:d((()=>[u(t,{class:"flex-1",type:"password",modelValue:$.old_password,"onUpdate:modelValue":a[0]||(a[0]=e=>$.old_password=e),border:!1,placeholder:"请输入原来的密码"},null,8,["modelValue"])])),_:1})):f("v-if",!0),u(_,{label:"新密码",borderBottom:""},{default:d((()=>[u(t,{class:"flex-1",type:"password",modelValue:$.password,"onUpdate:modelValue":a[1]||(a[1]=e=>$.password=e),placeholder:"6-20位数字+字母或符号组合",border:!1},null,8,["modelValue"])])),_:1}),u(_,{label:"确认密码",borderBottom:""},{default:d((()=>[u(t,{class:"flex-1",type:"password",modelValue:$.password_confirm,"onUpdate:modelValue":a[2]||(a[2]=e=>$.password_confirm=e),placeholder:"再次输入新密码",border:!1},null,8,["modelValue"])])),_:1})])),_:1}),u(o,{class:"mt-[100rpx]"},{default:d((()=>[u(U,{type:"primary",shape:"circle",onClick:B},{default:d((()=>[p(" 确定 ")])),_:1})])),_:1})])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-6a5e07fb"]]);export{$ as default};
