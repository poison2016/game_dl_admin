import{b0 as t,o as e,b as a,w as n,E as s,i as o}from"./index-aa2c3a24.js";import{_ as l}from"./_plugin-vue_export-helper.1b428a4d.js";const r=l({options:{virtualHost:!0},externalClasses:["class"],props:{to:{type:[String,Object]},navType:{type:String,default:"navigate"},delta:{type:Number,default:1}},computed:{url(){if(this.to){const e=t[this.navType],a=this.$uniRouter.resolve(this.to,e);return null==a?void 0:a.fullPath}}},methods:{navigate(){const e=t[this.navType];if(null==e)return console.error(` "navType" unknown type \n\n value：${this.navType}`);let a=this.to||{};"navigateBack"==this.navType&&(a={delta:this.delta}),this.$uniRouter.navigate(a,e)}}},[["render",function(t,l,r,i,u,p){const v=o;return e(),a(v,{"hover-class":"none",url:p.url,"open-type":r.navType,delta:r.delta},{default:n((()=>[s(t.$slots,"default")])),_:3},8,["url","open-type","delta"])}]]);export{r as _};
