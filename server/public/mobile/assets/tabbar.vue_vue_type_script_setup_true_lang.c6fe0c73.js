import{a1 as t,a2 as e,r as a,a as o,o as i,b as l,w as s,e as n,j as r,n as u,g as c,F as d,h,k as f,f as p,l as m,t as b,p as g,a3 as _,d as y,z as C,u as v,c as B,x as k,a4 as w,y as S}from"./index-aa2c3a24.js";import{_ as x}from"./u-icon.7e76f1a5.js";import{_ as P}from"./u-badge.1f5b2860.js";import{_ as T}from"./_plugin-vue_export-helper.1b428a4d.js";const U=T({emits:["update:modelValue","input","change"],props:{value:{type:[String,Number],default:0},modelValue:{type:[String,Number],default:0},show:{type:Boolean,default:!0},bgColor:{type:String,default:"#ffffff"},height:{type:[String,Number],default:100},iconSize:{type:[String,Number],default:40},midButtonSize:{type:[String,Number],default:90},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},midButton:{type:Boolean,default:!1},list:{type:Array,default:()=>[]},beforeSwitch:{type:Function,default:null},borderTop:{type:Boolean,default:!0},hideTabBar:{type:Boolean,default:!0}},data:()=>({midButtonLeft:"50%",pageUrl:""}),created(){this.hideTabBar&&t();let a=e();this.pageUrl=a[a.length-1].route},computed:{valueCom(){return this.modelValue},elIconPath(){return t=>{let e=this.list[t].pagePath;return e?e==this.pageUrl||e=="/"+this.pageUrl?this.list[t].selectedIconPath:this.list[t].iconPath:t==this.valueCom?this.list[t].selectedIconPath:this.list[t].iconPath}},elColor(){return t=>{let e=this.list[t].pagePath;return e?e==this.pageUrl||e=="/"+this.pageUrl?this.activeColor:this.inactiveColor:t==this.valueCom?this.activeColor:this.inactiveColor}}},mounted(){this.midButton&&this.getMidButtonLeft()},methods:{async clickHandler(t){if(this.beforeSwitch&&"function"==typeof this.beforeSwitch){let e=this.beforeSwitch.bind(this.$u.$parent.call(this))(t);e&&"function"==typeof e.then?await e.then((e=>{this.switchTab(t)})).catch((t=>{})):!0===e&&this.switchTab(t)}else this.switchTab(t)},switchTab(t){let e=this.list[t].pagePath;if(e){if(e==this.pageUrl||e=="/"+this.pageUrl)return;this.$emit("change",t)}else this.$emit("change",t),this.$emit("input",t),this.$emit("update:modelValue",t)},getOffsetRight:(t,e)=>e?-20:t>9?-40:-30,getMidButtonLeft(){let t=this.$u.sys().windowWidth;this.midButtonLeft=t/2+"px"}}},[["render",function(t,e,y,C,v,B){const k=a(o("u-icon"),x),w=a(o("u-badge"),P),S=g,T=_;return y.show?(i(),l(S,{key:0,class:"u-tabbar",onTouchmove:e[0]||(e[0]=f((()=>{}),["stop","prevent"]))},{default:s((()=>[n(S,{class:r(["u-tabbar__content safe-area-inset-bottom",{"u-border-top":y.borderTop}]),style:u({height:t.$u.addUnit(y.height),backgroundColor:y.bgColor})},{default:s((()=>[(i(!0),c(d,null,h(y.list,((t,e)=>(i(),l(S,{class:r(["u-tabbar__content__item",{"u-tabbar__content__circle":y.midButton&&t.midButton}]),key:e,onClick:f((t=>B.clickHandler(e)),["stop"]),style:u({backgroundColor:y.bgColor})},{default:s((()=>[n(S,{class:r([y.midButton&&t.midButton?"u-tabbar__content__circle__button":"u-tabbar__content__item__button"])},{default:s((()=>[n(k,{size:y.midButton&&t.midButton?y.midButtonSize:y.iconSize,name:B.elIconPath(e),"img-mode":"scaleToFill",color:B.elColor(e),"custom-prefix":t.customIcon?"custom-icon":"uicon"},null,8,["size","name","color","custom-prefix"]),t.count?(i(),l(w,{key:0,count:t.count,"is-dot":t.isDot,offset:[-2,B.getOffsetRight(t.count,t.isDot)]},null,8,["count","is-dot","offset"])):p("v-if",!0)])),_:2},1032,["class"]),n(S,{class:"u-tabbar__content__item__text",style:u({color:B.elColor(e)})},{default:s((()=>[n(T,{class:"u-line-1"},{default:s((()=>[m(b(t.text),1)])),_:2},1024)])),_:2},1032,["style"])])),_:2},1032,["class","onClick","style"])))),128)),y.midButton?(i(),l(S,{key:0,class:r(["u-tabbar__content__circle__border",{"u-border":y.borderTop}]),style:u({backgroundColor:y.bgColor,left:v.midButtonLeft})},null,8,["class","style"])):p("v-if",!0)])),_:1},8,["style","class"]),p(" 这里加上一个48rpx的高度,是为了增高有凸起按钮时的防塌陷高度(也即按钮凸出来部分的高度) "),n(S,{class:"u-fixed-placeholder safe-area-inset-bottom",style:u({height:`calc(${t.$u.addUnit(y.height)} + ${y.midButton?48:0}rpx)`})},null,8,["style"])])),_:1})):p("v-if",!0)}],["__scopeId","data-v-461616ff"]]),$=y({__name:"tabbar",setup(t){const s=C(),n=v(),r=B((()=>{var t;return null==(t=n.getTabbarConfig)?void 0:t.filter((t=>1==t.is_show)).map((t=>({iconPath:t.unselected,selectedIconPath:t.selected,text:t.name,link:t.link,pagePath:t.link.path})))})),u=B((()=>{const t=e(),a=t[t.length-1];return r.value.findIndex((t=>t.pagePath==="/"+a.route))>=0})),c=B((()=>({activeColor:n.getStyleConfig.selected_color,inactiveColor:n.getStyleConfig.default_color}))),d=["/pages/index/index","/pages/news/news","/pages/user/user"],h=t=>{const e=r.value[t],a=d.includes(e.link.path)?"switchTab":"reLaunch";S(e.link,a)};return(t,e)=>{const n=a(o("u-tabbar"),U);return k(u)?(i(),l(n,w({key:0,modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=t=>s.value=t)},k(c),{list:k(r),onChange:h,"hide-tab-bar":!0}),null,16,["modelValue","list"])):p("v-if",!0)}}});export{$ as _};
