(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f81a843c"],{1959:function(e,t,c){},7905:function(e,t,c){"use strict";c("68ef"),c("7c7f")},"7c7f":function(e,t,c){},"9ee3":function(e,t,c){},aa5a:function(e,t,c){"use strict";c("68ef"),c("cb51"),c("3743"),c("1a04")},abae:function(e,t,c){"use strict";c.r(t);var a=c("2e1b"),o=(c("22fa"),c("a136")),r=(c("4d86"),c("6c44")),i=(c("aa5a"),c("d645")),n=(c("7905"),c("c21d")),l=(c("68ef"),c("8270"),c("82db")),s=(c("786d"),c("23f9")),d=c("7a23"),u=c("1fba"),b=c("e5f6"),f=c("5aa0"),j=c("b75f"),O=c("fa7c"),p=c("9a1c");const[h,v]=Object(u["a"])("image"),m={src:String,alt:String,fit:String,position:String,round:Boolean,width:b["f"],height:b["f"],radius:b["f"],lazyLoad:Boolean,iconSize:b["f"],showError:b["g"],errorIcon:Object(b["e"])("photo-fail"),iconPrefix:String,showLoading:b["g"],loadingIcon:Object(b["e"])("photo")};var g=Object(d["defineComponent"])({name:h,props:m,emits:["load","error"],setup(e,{emit:t,slots:c}){const a=Object(d["ref"])(!1),o=Object(d["ref"])(!0),r=Object(d["ref"])(),{$Lazyload:i}=Object(d["getCurrentInstance"])().proxy,n=Object(d["computed"])(()=>{const t={width:Object(f["a"])(e.width),height:Object(f["a"])(e.height)};return Object(j["a"])(e.radius)&&(t.overflow="hidden",t.borderRadius=Object(f["a"])(e.radius)),t});Object(d["watch"])(()=>e.src,()=>{a.value=!1,o.value=!0});const l=e=>{o.value=!1,t("load",e)},s=e=>{a.value=!0,o.value=!1,t("error",e)},u=(t,c,a)=>a?a():Object(d["createVNode"])(p["a"],{name:t,size:e.iconSize,class:c,classPrefix:e.iconPrefix},null),b=()=>o.value&&e.showLoading?Object(d["createVNode"])("div",{class:v("loading")},[u(e.loadingIcon,v("loading-icon"),c.loading)]):a.value&&e.showError?Object(d["createVNode"])("div",{class:v("error")},[u(e.errorIcon,v("error-icon"),c.error)]):void 0,h=()=>{if(a.value||!e.src)return;const t={alt:e.alt,class:v("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?Object(d["withDirectives"])(Object(d["createVNode"])("img",Object(d["mergeProps"])({ref:r},t),null),[[Object(d["resolveDirective"])("lazy"),e.src]]):Object(d["createVNode"])("img",Object(d["mergeProps"])({src:e.src,onLoad:l,onError:s},t),null)},m=({el:e})=>{const t=()=>{e===r.value&&o.value&&l()};r.value?t():Object(d["nextTick"])(t)},g=({el:e})=>{e!==r.value||a.value||s()};return i&&O["c"]&&(i.$on("loaded",m),i.$on("error",g),Object(d["onBeforeUnmount"])(()=>{i.$off("loaded",m),i.$off("error",g)})),()=>{var t;return Object(d["createVNode"])("div",{class:v({round:e.round}),style:n.value},[h(),b(),null==(t=c.default)?void 0:t.call(c)])}}});const k=Object(s["a"])(g);c("cb51"),c("3743"),c("09fe");var w=c("450f"),y=c("efd9"),x=c("ee0b");const[N,V]=Object(u["a"])("notice-bar"),C={text:String,mode:String,color:String,delay:Object(b["c"])(1),speed:Object(b["c"])(60),leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null}};var P=Object(d["defineComponent"])({name:N,props:C,emits:["close","replay"],setup(e,{emit:t,slots:c}){let a,o=0,r=0;const i=Object(d["ref"])(),n=Object(d["ref"])(),l=Object(d["reactive"])({show:!0,offset:0,duration:0}),s=()=>c["left-icon"]?c["left-icon"]():e.leftIcon?Object(d["createVNode"])(p["a"],{class:V("left-icon"),name:e.leftIcon},null):void 0,u=()=>"closeable"===e.mode?"cross":"link"===e.mode?"arrow":void 0,b=c=>{"closeable"===e.mode&&(l.show=!1,t("close",c))},f=()=>{if(c["right-icon"])return c["right-icon"]();const e=u();return e?Object(d["createVNode"])(p["a"],{name:e,class:V("right-icon"),onClick:b},null):void 0},O=()=>{l.offset=o,l.duration=0,Object(w["raf"])(()=>{Object(w["doubleRaf"])(()=>{l.offset=-r,l.duration=(r+o)/+e.speed,t("replay")})})},h=()=>{const t=!1===e.scrollable&&!e.wrapable,a={transform:l.offset?`translateX(${l.offset}px)`:"",transitionDuration:l.duration+"s"};return Object(d["createVNode"])("div",{ref:i,role:"marquee",class:V("wrap")},[Object(d["createVNode"])("div",{ref:n,style:a,class:[V("content"),{"van-ellipsis":t}],onTransitionend:O},[c.default?c.default():e.text])])},v=()=>{const{delay:t,speed:c,scrollable:s}=e,d=Object(j["a"])(t)?1e3*+t:0;o=0,r=0,l.offset=0,l.duration=0,clearTimeout(a),a=setTimeout(()=>{if(!i.value||!n.value||!1===s)return;const e=Object(w["useRect"])(i).width,t=Object(w["useRect"])(n).width;(s||t>e)&&Object(w["doubleRaf"])(()=>{o=e,r=t,l.offset=-r,l.duration=r/+c})},d)};return Object(x["b"])(v),Object(w["onMountedOrActivated"])(v),Object(w["useEventListener"])("pageshow",v),Object(y["a"])({reset:v}),Object(d["watch"])(()=>[e.text,e.scrollable],v),()=>{const{color:t,wrapable:c,background:a}=e;return Object(d["withDirectives"])(Object(d["createVNode"])("div",{role:"alert",class:V({wrapable:c}),style:{color:t,background:a}},[s(),h(),f()]),[[d["vShow"],l.show]])}}});const B=Object(s["a"])(P);c("9ee3");var S=c("dc94");c("02ab");const L={class:"choice-container"},$=Object(d["createTextVNode"])("清单详情"),_={style:{display:"block"}},E={style:{display:"block"}},z={style:{margin:"16px"}},I=Object(d["createTextVNode"])(" 选择 ");function A(e,t,c,s,u,b){const f=S["a"],j=B,O=k,p=l["a"],h=n["a"],v=i["a"],m=r["a"],g=o["a"],w=a["a"];return Object(d["openBlock"])(),Object(d["createElementBlock"])("div",L,[Object(d["createVNode"])(f,{title:"选择礼盒","left-text":"返回","left-arrow":"",onClickLeft:b.onClickLeft},null,8,["onClickLeft"]),Object(d["createVNode"])(j,{"left-icon":"volume-o",text:"本次活动兑换起讫时间为"+u.activity.start_time+"至"+u.activity.expired_time},null,8,["text"]),Object(d["createVNode"])(h,{class:"my-swipe",autoplay:0,onChange:b.packChange},{default:Object(d["withCtx"])(()=>[(Object(d["openBlock"])(!0),Object(d["createElementBlock"])(d["Fragment"],null,Object(d["renderList"])(u.packs,e=>(Object(d["openBlock"])(),Object(d["createBlock"])(p,{key:e},{default:Object(d["withCtx"])(()=>[Object(d["createVNode"])(O,{src:e.image,height:"250",fit:"contain"},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["onChange"]),Object(d["createVNode"])(v,null,{default:Object(d["withCtx"])(()=>[$]),_:1}),Object(d["createVNode"])(g,{class:"choice-detail"},{default:Object(d["withCtx"])(()=>[Object(d["createVNode"])(m,{title:u.currentPack.name,value:"剩余："+u.currentPack.num+"件",size:"large"},{label:Object(d["withCtx"])(()=>[Object(d["createElementVNode"])("div",_,[(Object(d["openBlock"])(!0),Object(d["createElementBlock"])(d["Fragment"],null,Object(d["renderList"])(u.currentPack.items,e=>(Object(d["openBlock"])(),Object(d["createElementBlock"])("div",null,[Object(d["createElementVNode"])("span",E,Object(d["toDisplayString"])(e),1)]))),256))])]),_:1},8,["title","value"])]),_:1}),Object(d["createElementVNode"])("div",z,[Object(d["createVNode"])(w,{round:"",block:"",type:"primary","native-type":"submit",onClick:b.selectPack,disabled:u.currentPack.num<=0},{default:Object(d["withCtx"])(()=>[I]),_:1},8,["onClick","disabled"])])])}var D={name:"Activity",data(){return{packs:[],currentPack:{},activity_id:"",activity:"",test:"A\nb\nc\nd\n"}},computed:{},methods:{packChange(e){this.currentPack=this.packs[e],console.log(this.currentPack)},selectPack(){this.$router.push({name:"Confirm",params:{pack_id:this.currentPack.index}})},onClickLeft(){this.$router.go(-1)},getPack(){return this.$axios.get("api/packs")},getActivity(){return this.$axios.get("api/activities",{params:{index:this.activity_id}})}},filters:{leftNumber(e){return"剩余："+e+"件"},formatterDescription(e){return e.replace(";","\n")}},created(){this.activity_id=this.$route.query.id,console.log(this.activity_id),this.$axios.all([this.getPack(),this.getActivity()]).then(this.$axios.spread((e,t)=>{this.packs=e.data.data,this.packs.forEach(e=>{e.description=e.description.replaceAll(";","；"),e.items=e.description.split("；"),console.log(e.items)}),this.currentPack=this.packs[0],this.activity=t.data.data,console.log(this.packs)}))}},T=(c("ec8f"),c("d959")),R=c.n(T);const F=R()(D,[["render",A]]);t["default"]=F},d645:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));var a=c("23f9"),o=c("7a23"),r=c("1fba"),i=c("e5f6");const[n,l]=Object(r["a"])("divider"),s={dashed:Boolean,hairline:i["g"],contentPosition:Object(i["e"])("center")};var d=Object(o["defineComponent"])({name:n,props:s,setup(e,{slots:t}){return()=>{var c;return Object(o["createVNode"])("div",{role:"separator",class:l({dashed:e.dashed,hairline:e.hairline,["content-"+e.contentPosition]:!!t.default})},[null==(c=t.default)?void 0:c.call(t)])}}});const u=Object(a["a"])(d)},ec8f:function(e,t,c){"use strict";c("1959")}}]);
//# sourceMappingURL=chunk-f81a843c.6a2b5110.js.map