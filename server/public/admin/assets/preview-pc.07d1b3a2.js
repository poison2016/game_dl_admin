import{w as B,a as E}from"./element-plus.a19c38cb.js";import{e as S}from"./index.c44b6e1b.js";import{J as $,v as F,h as R}from"./@element-plus.35ec7429.js";import{d as N,s as P,b as z,o as r,c as l,a as i,T as _,W as D,a8 as q,R as y,u as e,a0 as h,K as A,O as I,S as T,X as s,P as v}from"./@vue.b52708da.js";import{d as W}from"./index.2c3a2ec1.js";import"./lodash-es.2b4cc642.js";import"./dayjs.aca3739b.js";import"./axios.035c7747.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./attr.eab562ed.js";import"./index.32e04bd5.js";import"./picker.880508e3.js";import"./index.vue_vue_type_script_setup_true_lang.cca0a1ef.js";import"./usePaging.771acc0e.js";import"./article.7e21e60f.js";import"./index.2f3f11e3.js";import"./picker.127da343.js";import"./index.5495a911.js";import"./index.bee40724.js";import"./index.vue_vue_type_script_setup_true_lang.df1e0208.js";import"./@vueuse.e1a32ef4.js";import"./vue3-video-play.36140ed9.js";import"./vuedraggable.f4ceec05.js";import"./vue.98ad123a.js";import"./sortablejs.bb43bbf4.js";import"./lodash.d4d52acc.js";import"./vue-router.48496b4b.js";import"./pinia.3f41eb90.js";import"./css-color-function.8ccff1e7.js";import"./color.b3414844.js";import"./clone.17cc33b7.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.ccf86c2c.js";import"./vue-clipboard3.5605d23a.js";import"./clipboard.32978cdd.js";import"./echarts.004f4e72.js";import"./zrender.b56a9aa5.js";import"./tslib.60310f1a.js";import"./highlight.js.db90315f.js";import"./@highlightjs.0797cc3b.js";import"./content.vue_vue_type_script_setup_true_lang.fa786cbd.js";import"./decoration-img.745de954.js";import"./attr.vue_vue_type_script_setup_true_lang.76056407.js";import"./content.69428409.js";import"./attr.vue_vue_type_script_setup_true_lang.690df673.js";import"./content.vue_vue_type_script_setup_true_lang.34bb4ee8.js";import"./attr.vue_vue_type_script_setup_true_lang.a79ac66f.js";import"./add-nav.vue_vue_type_script_setup_true_lang.9df093ab.js";import"./content.633a65f9.js";import"./attr.vue_vue_type_script_setup_true_lang.d4ef21da.js";import"./content.vue_vue_type_script_setup_true_lang.a6ebfa34.js";import"./attr.vue_vue_type_script_setup_true_lang.1a9ff2eb.js";import"./content.053e56fc.js";import"./decoration.2a9926e8.js";import"./attr.vue_vue_type_script_setup_true_lang.51d53dfb.js";import"./index.vue_vue_type_script_setup_true_lang.4eda4fd2.js";import"./content.0f2fc5e9.js";import"./attr.a215860f.js";import"./content.vue_vue_type_script_setup_true_lang.a05c63d6.js";import"./attr.vue_vue_type_script_setup_true_lang.87b11275.js";import"./content.6323d2b9.js";import"./attr.vue_vue_type_script_setup_true_lang.2e266457.js";import"./content.vue_vue_type_script_setup_true_lang.22dcbc92.js";import"./attr.vue_vue_type_script_setup_true_lang.83c0f571.js";import"./content.4dda0651.js";const j={class:"pages-preview"},J={class:"relative flex justify-center h-full mt-5 mx-10"},K=["src"],L={class:"max-w-[1200px] w-full absolute"},O=["onClick"],X=N({__name:"preview-pc",props:{pageData:{type:Array,default:()=>[]},modelValue:{type:Number,default:0}},emits:["update:modelValue"],setup(a,{emit:C}){const u=P(),k=C,c=z(()=>o=>(o==null?void 0:o.enabled)==0),b=o=>{var m;(m=u.value[o])==null||m.open()},x=o=>{o.enabled!==void 0&&(o.enabled=o.enabled?0:1)},V=(o,m)=>{o.disabled||k("update:modelValue",m)};return(o,m)=>{const f=B,d=E;return r(),l("div",j,[i("div",J,[o.$route.query.url?(r(),l("iframe",{key:0,ref:"previewIframeRef",class:"flex-1 h-full",width:"100%",height:"100%",scrolling:"no",src:o.$route.query.url},null,8,K)):_("",!0),i("div",L,[(r(!0),l(D,null,q(a.pageData,(t,n)=>(r(),l("div",{key:t.id,class:y(["absolute left-0 top-0",{"cursor-pointer":!(t!=null&&t.disabled)}]),onClick:p=>V(t,n)},[i("div",{class:y(["absolute w-full h-full z-[100] border-dashed",{select:n==a.modelValue,"border-[#dcdfe6] border-2":!(t!=null&&t.disabled),hide:e(c)(t.content)}]),style:h(t.styles)},null,6),A(o.$slots,"default",{},()=>{var p;return[(r(),I(T((p=e(S)[t==null?void 0:t.name])==null?void 0:p.content),{content:t.content,styles:t.styles,key:t.id,ref_for:!0,ref_key:"commonComponentRef",ref:u},null,8,["content","styles"]))]},!0),n==a.modelValue?(r(),l("div",{key:0,class:"widget-btns py-[5px]",style:h({top:t.styles.top,left:t.styles.width})},[i("div",null,[s(d,{effect:"dark",content:"\u7F16\u8F91\u7EC4\u4EF6\u5185\u5BB9",placement:"right"},{default:v(()=>[s(f,{class:"py-[5px]",type:"primary",icon:e($),onClick:p=>b(n)},null,8,["icon","onClick"])]),_:2},1024)]),i("div",null,[s(d,{effect:"dark",content:e(c)(t.content)?"\u663E\u793A":"\u9690\u85CF",placement:"right"},{default:v(()=>[s(f,{class:"py-[5px]",type:"primary",icon:e(c)(t.content)?e(F):e(R),onClick:p=>x(t.content)},null,8,["icon","onClick"])]),_:2},1032,["content"])])],4)):_("",!0)],10,O))),128))])])])}}});const ao=W(X,[["__scopeId","data-v-e2e1d272"]]);export{ao as default};
