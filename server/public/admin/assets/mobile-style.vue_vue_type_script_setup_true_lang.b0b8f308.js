import{D as w,G as v,H as D,F as V}from"./element-plus.a19c38cb.js";import{_ as k}from"./index.vue_vue_type_script_setup_true_lang.4eda4fd2.js";import A from"./theme-picker.a2e5ca97.js";import{f as y}from"./@vueuse.e1a32ef4.js";import{d as I,r as T,o as a,O as h,P as u,a as o,X as l,u as s,U as _,T as i,c as d}from"./@vue.b52708da.js";const U="/admin/assets/blue1.8f90b853.png",z="/admin/assets/blue2.a2d76950.png",N="/admin/assets/blue3.1d6aa2cc.png",G="/admin/assets/green1.e56014f0.png",P="/admin/assets/green2.84b42c24.png",R="/admin/assets/green3.db12f812.png",H="/admin/assets/purple1.e9cd6f5b.png",M="/admin/assets/purple2.5761e0e4.png",O="/admin/assets/purple3.6777d67f.png",X="/admin/assets/yellow1.3fb20a99.png",$="/admin/assets/yellow2.1e7def5e.png",j="/admin/assets/yellow3.88aadf45.png",q="/admin/assets/red1.3249f3c2.png",J="/admin/assets/red2.c61b3ae1.png",K="/admin/assets/red3.bc5045c7.png",L="/admin/assets/pink1.a68f6912.png",Q="/admin/assets/pink2.ac738484.png",S="/admin/assets/pink3.7469dee3.png",W=o("div",{class:"text-xl font-medium mb-[20px]"},"\u7CFB\u7EDF\u4E3B\u9898\u8272",-1),Y=o("div",{class:"text-xl font-medium mt-[40px] mb-[20px]"},"\u6837\u5F0F\u8BBE\u7F6E",-1),Z=o("div",null,[o("span",{class:"form-tips"},"\u9875\u9762\u5BFC\u822A\u680F\u6587\u5B57\u7684\u989C\u8272")],-1),oo=o("div",null,[o("span",{class:"form-tips"}," \u9875\u9762\u9876\u90E8\u5BFC\u822A\u680F\u80CC\u666F\u989C\u8272\uFF0C\u4E0D\u8BBE\u7F6E\u5219\u8DDF\u968F\u4E3B\u9898\u8272 ")],-1),eo=o("div",null,[o("span",{class:"form-tips"},"\u81EA\u5B9A\u4E49\u4E3B\u9898\u6E10\u53D8\u8272\uFF0C\u7528\u4E8E\u6309\u94AE\u7C7B\u548C\u4E3B\u8981\u6587\u5B57")],-1),so={key:0,class:"flex"},lo=o("img",{class:"w-[200px]",src:U},null,-1),to=o("img",{class:"w-[200px] ml-[30px]",src:z},null,-1),uo=o("img",{class:"w-[200px] ml-[30px]",src:N},null,-1),no=[lo,to,uo],ao={key:1,class:"flex"},ro=o("img",{class:"w-[200px]",src:G},null,-1),io=o("img",{class:"w-[200px] ml-[30px]",src:P},null,-1),mo=o("img",{class:"w-[200px] ml-[30px]",src:R},null,-1),co=[ro,io,mo],_o={key:2,class:"flex"},po=o("img",{class:"w-[200px]",src:H},null,-1),Co=o("img",{class:"w-[200px] ml-[30px]",src:M},null,-1),ho=o("img",{class:"w-[200px] ml-[30px]",src:O},null,-1),Fo=[po,Co,ho],xo={key:3,class:"flex"},fo=o("img",{class:"w-[200px]",src:X},null,-1),go=o("img",{class:"w-[200px] ml-[30px]",src:$},null,-1),Eo=o("img",{class:"w-[200px] ml-[30px]",src:j},null,-1),bo=[fo,go,Eo],Bo={key:4,class:"flex"},wo=o("img",{class:"w-[200px]",src:q},null,-1),vo=o("img",{class:"w-[200px] ml-[30px]",src:J},null,-1),Do=o("img",{class:"w-[200px] ml-[30px]",src:K},null,-1),Vo=[wo,vo,Do],ko={key:5,class:"flex"},Ao=o("img",{class:"w-[200px]",src:L},null,-1),yo=o("img",{class:"w-[200px] ml-[30px]",src:Q},null,-1),Io=o("img",{class:"w-[200px] ml-[30px]",src:S},null,-1),To=[Ao,yo,Io],Ro=I({__name:"mobile-style",props:{modelValue:{}},emits:["update:modelValue"],setup(F,{emit:x}){const f=F,g=T([{id:1,name:"\u79D1\u6280\u84DD",color1:"#2F80ED",color2:"#56CCF2",btnColor:"white"},{id:2,name:"\u504F\u7EFF\u84DD",color1:"#2EC840",color2:"#3DE650",btnColor:"white"},{id:3,name:"\u5546\u52A1\u7D2B",color1:"#A74BFD",color2:"#CB60FF",btnColor:"white"},{id:4,name:"\u6D3B\u529B\u6A59",color1:"#F7971E",color2:"#FFD200",btnColor:"black"},{id:5,name:"\u7ECF\u5178\u7EA2",color1:"#FF2C3C",color2:"#EF1D2D",btnColor:"white"},{id:6,name:"\u7F8E\u5986\u8272",color1:"#FD498F",color2:"#FA444D",btnColor:"white"},{id:7,name:"\u81EA\u5B9A\u4E49",color1:"#F8F8F8",color2:"#F5F5F5",btnColor:"white"}]),E=x,b=r=>{r.id!=7&&(e.value.themeColor1=r.color1,e.value.themeColor2=r.color2,e.value.navigationBarColor=r.color1,e.value.buttonColor=r.btnColor,e.value.topTextColor=r.btnColor)},e=y(f,"modelValue",E);return(r,t)=>{const m=w,c=v,C=D,p=k,B=V;return a(),h(B,{"label-width":"140px"},{default:u(()=>[o("div",null,[W,l(m,{"label-width":"50"},{default:u(()=>[l(A,{modelValue:s(e).themeColorId,"onUpdate:modelValue":t[0]||(t[0]=n=>s(e).themeColorId=n),"theme-colors":s(g),onChange:b},null,8,["modelValue","theme-colors"])]),_:1})]),o("div",null,[Y,l(m,{label:"\u5BFC\u822A\u9876\u90E8\u6587\u5B57\u989C\u8272"},{default:u(()=>[o("div",null,[l(C,{modelValue:s(e).topTextColor,"onUpdate:modelValue":t[1]||(t[1]=n=>s(e).topTextColor=n)},{default:u(()=>[l(c,{label:"white",size:"large"},{default:u(()=>[_("\u767D\u8272")]),_:1}),l(c,{label:"black",size:"large"},{default:u(()=>[_("\u9ED1\u8272")]),_:1})]),_:1},8,["modelValue"]),Z])]),_:1}),l(m,{label:"\u5BFC\u822A\u9876\u90E8\u80CC\u666F\u989C\u8272"},{default:u(()=>[o("div",null,[l(p,{resetColor:s(e).themeColor1,modelValue:s(e).navigationBarColor,"onUpdate:modelValue":t[2]||(t[2]=n=>s(e).navigationBarColor=n)},null,8,["resetColor","modelValue"]),oo])]),_:1}),s(e).themeColorId==7?(a(),h(m,{key:0,label:"\u81EA\u5B9A\u4E49\u4E3B\u9898\u989C\u8272"},{default:u(()=>[o("div",null,[l(p,{modelValue:s(e).themeColor1,"onUpdate:modelValue":t[3]||(t[3]=n=>s(e).themeColor1=n),"default-color":"#F8F8F8"},null,8,["modelValue"]),l(p,{modelValue:s(e).themeColor2,"onUpdate:modelValue":t[4]||(t[4]=n=>s(e).themeColor2=n),"default-color":"#F8F8F8",class:"mt-2"},null,8,["modelValue"]),eo])]),_:1})):i("",!0),l(m,{label:"\u6309\u94AE\u6587\u5B57\u989C\u8272"},{default:u(()=>[o("div",null,[l(C,{modelValue:s(e).buttonColor,"onUpdate:modelValue":t[5]||(t[5]=n=>s(e).buttonColor=n)},{default:u(()=>[l(c,{label:"white",size:"large"},{default:u(()=>[_("\u767D\u8272")]),_:1}),l(c,{label:"black",size:"large"},{default:u(()=>[_("\u9ED1\u8272")]),_:1})]),_:1},8,["modelValue"])])]),_:1})]),o("div",null,[s(e).themeColorId==1?(a(),d("div",so,no)):i("",!0),s(e).themeColorId==2?(a(),d("div",ao,co)):i("",!0),s(e).themeColorId==3?(a(),d("div",_o,Fo)):i("",!0),s(e).themeColorId==4?(a(),d("div",xo,bo)):i("",!0),s(e).themeColorId==5?(a(),d("div",Bo,Vo)):i("",!0),s(e).themeColorId==6?(a(),d("div",ko,To)):i("",!0)])]),_:1})}}});export{Ro as _};
