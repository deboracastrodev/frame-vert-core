var qe=Object.defineProperty;var k=Object.getOwnPropertySymbols;var Pe=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var V=(d,e,m)=>e in d?qe(d,e,{enumerable:!0,configurable:!0,writable:!0,value:m}):d[e]=m,h=(d,e)=>{for(var m in e||(e={}))Pe.call(e,m)&&V(d,m,e[m]);if(k)for(var m of k(e))we.call(e,m)&&V(d,m,e[m]);return d};(function(d,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(d=typeof globalThis!="undefined"?globalThis:d||self,e(d["design-system"]={},d.Vue))})(this,function(d,e){"use strict";var m="",g=(t,n)=>{const a=t.__vccOpts||t;for(const[o,l]of n)a[o]=l;return a};const B=e.defineComponent({name:"VButton",props:{size:{type:String,default:"md"},outline:{type:Boolean,default:!1},status:{type:String,default:"primary",required:!0},icon:{type:String,required:!1},disabled:{type:Boolean,default:!1}},computed:{setSizeClass(){return`v-btn--${this.size}`},setStatus(){return this.outline?`v-btn__outline--${this.status}`:`v-btn--${this.status}`},setIcon(){return`/static/icons/${this.icon}.svg`}}}),S=["disabled"],C={key:0,class:"v-btn--img"},E=["src"];function N(t,n,a,o,l,r){return e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass([t.setSizeClass,t.setStatus]),disabled:t.disabled},[t.icon?(e.openBlock(),e.createElementBlock("div",C,[e.createElementVNode("img",{src:t.setIcon},null,8,E)])):e.createCommentVNode("v-if",!0),e.renderSlot(t.$slots,"default")],10,S)}var T=g(B,[["render",N]]);function z(t,n){if(t.includes(".")){let a="";return t.split(".").forEach((l,r)=>{a=r===0?n[l]:a[l]}),a}return n[t]}function q(t,n){const a=z(t,n);return Array.isArray(a)?a.join(","):a}var Ie="";const P=e.defineComponent({name:"VTable",props:{data:{type:Array,required:!0},headers:{type:Array,required:!0}},emits:["click-row","update-sort-field"],setup(t,{emit:n}){const a=e.useSlots(),o=i=>{n("click-row",i)},l=e.ref(!1),r=e.ref({});return{slots:a,clickRow:o,generateColumnContent:q,updateSortField:(i,c)=>{console.log("newSortBy",i),console.log("oldSortType",c);let p=null;c==="none"?p="asc":c==="asc"?p="desc":p=l.value?"asc":null,p===null?r.value=null:r.value={sortBy:i,sortDesc:p==="desc"},n("update-sort-field",{sortType:p,sortBy:i})}}}}),w={class:"v-table"},I={class:"v-table__body-wrapper"},D={class:"responsive-table"},M=["onClick"],A=["onClick"],F={class:"v-table__cell"};function L(t,n,a,o,l,r){return e.openBlock(),e.createElementBlock("div",w,[e.createElementVNode("div",I,[e.createElementVNode("table",D,[e.createElementVNode("thead",null,[e.createElementVNode("tr",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.headers,s=>(e.openBlock(),e.createElementBlock("th",{class:e.normalizeClass(["v-table__cell",[{sortable:s.sortable,none:s.sortable&&s.sortType==="none",desc:s.sortable&&s.sortType==="desc",asc:s.sortable&&s.sortType==="asc"}]]),onClick:e.withModifiers(i=>s.sortable&&s.sortType?t.updateSortField(s.prop,s.sortType):null,["stop"])},e.toDisplayString(s.label),11,M))),256))])]),e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.data,(s,i)=>(e.openBlock(),e.createElementBlock("tr",{key:i,class:"v-table__row",onClick:c=>t.clickRow(s)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.headers,c=>(e.openBlock(),e.createElementBlock("td",F,[t.slots[`item-${c.prop}`]?e.renderSlot(t.$slots,`item-${c.prop}`,e.normalizeProps(e.mergeProps({key:0},s))):(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.createTextVNode(e.toDisplayString(t.generateColumnContent(c.prop,s)),1)],2112))]))),256))],8,A))),128))])])])])}var O=g(P,[["render",L]]),De="";const v={class:"v-select"},j={key:0,class:"v-select--label"},H=["for"],R={class:"v-selec--content"},U=["name","id","required","disabled"],G={key:0,value:""},J=["value","selected"],$=e.defineComponent({props:{id:{type:String,required:!1},name:{type:String,required:!1},placeholder:{type:String,required:!1},label:{type:String,required:!1},options:{type:Array,required:!0,default:()=>[]},required:{type:Boolean,required:!1},disable:{type:Boolean,required:!1},size:{type:String,required:!1,default:"lg"},modelValue:{type:[String,Number],required:!1}},emits:["onChange","update:modelValue"],setup(t,{emit:n}){const a=e.ref(null);e.watch(["modelValue"],l=>{l!==a.value&&(a.value=l)});function o(l){a.value=l.target.value,n("onChange",a.value),n("update:modelValue",a.value)}return(l,r)=>(e.openBlock(),e.createElementBlock("div",v,[t.label?(e.openBlock(),e.createElementBlock("div",j,[e.createElementVNode("label",{for:t.id},e.toDisplayString(t.label),9,H)])):e.createCommentVNode("v-if",!0),e.createElementVNode("div",R,[e.createElementVNode("select",{class:e.normalizeClass(`v-select--input v-select--size-${t.size}`),name:t.name,id:t.id,required:t.required,disabled:t.disable,onChange:r[0]||(r[0]=s=>o(s))},[t.placeholder?(e.openBlock(),e.createElementBlock("option",G,e.toDisplayString(t.placeholder),1)):e.createCommentVNode("v-if",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.options,s=>(e.openBlock(),e.createElementBlock("option",{value:s.value,selected:s.value==a.value,"aria-checked":"false"},e.toDisplayString(s.label),9,J))),256))],42,U)])]))}}),K={page:1,pageSize:5,numItems:0,numButtons:5};var Q=t=>{const n=h(h({},K),t),a=e.ref(n.page),o=e.ref(n.pageSize),l=e.ref(n.numItems),r=e.ref(n.numButtons),s=e.computed({get:()=>a.value,set:b=>{b>0&&b<=i.value&&(a.value=b)}}),i=e.computed(()=>Math.ceil(l.value/o.value));e.watch([o,l],()=>{s.value>i.value&&(s.value=i.value)});const c=e.computed(()=>{const b=(s.value-1)*o.value,ze=Math.min(b+o.value,l.value);return[b,ze]}),p=e.computed(()=>s.value>1),_=e.computed(()=>s.value<i.value),u=()=>(p.value&&s.value--,s.value),y=()=>(_.value&&s.value++,s.value),Ee=()=>(s.value=1,1),Ne=()=>(s.value=i.value,i.value),Te=e.computed(()=>i.value<=r.value?W(s.value,i.value):X(s.value,i.value,r.value));return{page:s,pageSize:o,numItems:l,numButtons:r,numPages:i,slice:c,hasPrev:p,hasNext:_,goPrev:u,goNext:y,goStart:Ee,goEnd:Ne,buttons:Te}};function W(t,n){return f(1,t).concat({page:t,active:!0,ellipsis:!1}).concat(f(t+1,n+1))}function X(t,n,a){let o=0,l=0;const r=Math.floor(a/2);t<=r?(o=t-1,l=a-o-1):t>=n-r?(l=n-t,o=a-l-1):a%2===0?(o=r-1,l=r):(o=r,l=r);const s=t-1,i=n-t;let c=[];if(s<=o)c=f(1,s+1);else if(o>0){const p=o===2?2:Math.ceil(o/2),_=o-p;let u=Math.ceil(s/2);s%2===0&&u++,c=f(1,p).concat({page:u,active:!1,ellipsis:!0}).concat(f(t-_,t))}if(c.push({page:t,active:!0,ellipsis:!1}),i<=l)c=c.concat(f(t+1,n+1));else if(l>0){const p=l===2?1:Math.floor(l/2)+1,_=l-p,u=t+Math.ceil(i/2);c=c.concat(f(t+1,t+p)).concat({page:u,active:!1,ellipsis:!0}).concat(f(n-_+1,n+1))}return c}function f(t,n){const a=[];for(let o=t;o<n;o++)a.push({page:o,active:!1,ellipsis:!1});return a}var Me="",Ae="";const Y=e.defineComponent({name:"VPagination",components:{VSelect:$},props:{count:{type:Number,default:0},currentPage:{type:Number,default:1},sizeDefault:{type:Number,default:5},sizeOptions:{type:Array,default:()=>[{value:"5",label:"5 items"},{value:"10",label:"10 items"},{value:"30",label:"30 items"},{value:"50",label:"50 items"},{value:"100",label:"100 items"}]},qtdeButtonsPaginate:{type:Number,default:8}},emits:["onChangePagination"],setup(t,{emit:n}){const{page:a,pageSize:o,hasPrev:l,hasNext:r,goPrev:s,goNext:i,buttons:c,numPages:p,numItems:_}=Q({pageSize:t.sizeDefault,numButtons:t.qtdeButtonsPaginate});return e.watch(()=>t.count,u=>{_.value=u}),e.watch([a,o],([u,y])=>{n("onChangePagination",{page:u,page_size:y})}),{hasPrev:l,hasNext:r,pageSize:o,goPrev:s,goNext:i,buttons:c,page:a,numPages:p}}}),Z={class:"box--pagination"},x={class:"box--pagination-count"},ee={class:"box--pagination-pages"},te={class:"box--pagination-pages-size"},ne={class:"box--pagination-pages-itens"},se={class:"pagination"},ae=[e.createElementVNode("a",{class:"pagination_li--item"},null,-1)],oe=["onClick"],le=[e.createElementVNode("a",{class:"pagination_li--item"},null,-1)];function ie(t,n,a,o,l,r){const s=e.resolveComponent("v-select");return e.openBlock(),e.createElementBlock("div",Z,[e.createElementVNode("div",x,e.toDisplayString(t.count)+" items ",1),e.createElementVNode("div",ee,[e.createElementVNode("div",te,[e.createVNode(s,{id:"select_page_size",name:"select_page_size",options:t.sizeOptions,size:"sm",modelValue:t.pageSize,"onUpdate:modelValue":n[0]||(n[0]=i=>t.pageSize=i)},null,8,["options","modelValue"])]),e.createElementVNode("div",ne,[e.createElementVNode("ol",se,[e.createElementVNode("li",{class:e.normalizeClass(["pagination_li",!t.hasPrev&&"disabled"]),onClick:n[1]||(n[1]=(...i)=>t.goPrev&&t.goPrev(...i))},ae,2),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.buttons,(i,c)=>(e.openBlock(),e.createElementBlock("li",{class:"pagination_li",key:c,onClick:p=>t.page=i.page},[e.createElementVNode("a",{class:e.normalizeClass(["pagination_li--item",{active:i.active}])},e.toDisplayString(i.ellipsis?"...":i.page),3)],8,oe))),128)),e.createElementVNode("li",{class:e.normalizeClass(["pagination_li",!t.hasNext&&"disabled"]),onClick:n[2]||(n[2]=(...i)=>t.goNext&&t.goNext(...i))},le,2)])])])])}var re=g(Y,[["render",ie]]),Oe="";const ce=e.defineComponent({name:"VTab",props:{eixo:{type:String,default:"x"}}}),de={class:"box"};function pe(t,n,a,o,l,r){return e.openBlock(),e.createElementBlock("div",de,[e.createElementVNode("div",{class:e.normalizeClass(`tab--${t.eixo}`)},[e.renderSlot(t.$slots,"header")],2),e.renderSlot(t.$slots,"default")])}var me=g(ce,[["render",pe]]);const ue=e.defineComponent({name:"VTabContent",props:{eixo:{type:String,default:"x"},contentId:{type:String,required:!0}}}),fe=["id","data-tab-content-type"];function _e(t,n,a,o,l,r){return e.openBlock(),e.createElementBlock("div",{id:t.contentId,class:"tab--content","data-tab-content-type":t.eixo},[e.renderSlot(t.$slots,"default")],8,fe)}var ge=g(ue,[["render",_e]]);const be=e.defineComponent({name:"VTabContent",props:{actived:{type:Boolean,default:!1},eixo:{type:String,default:"x"},tabTo:{type:String,required:!0}},methods:{activeTab(t){const n=t.path[1].children;for(let a of n)a.classList.remove("active");t.target.classList.add("active"),this.showContentTab(t==null?void 0:t.target.dataset.tabTo,t==null?void 0:t.target.dataset.tabType)},showContentTab(t,n){const a=document.getElementsByClassName("tab--content");for(let o of a)n==o.dataset.tabContentType&&(o.style.display="none"),t==o.getAttribute("id")&&(o.style.display="block")}}}),ye=["data-tab-type","data-tab-to"];function he(t,n,a,o,l,r){return e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass({active:t.actived}),onClick:n[0]||(n[0]=s=>t.activeTab(s)),"data-tab-type":t.eixo,"data-tab-to":t.tabTo},[e.renderSlot(t.$slots,"default")],10,ye)}var $e=g(be,[["render",he]]),ve="";const ke=e.defineComponent({name:"VTag",props:{status:{type:String,default:"helper",required:!0},icon:{type:String,required:!1},square:{type:Boolean,default:!1}},computed:{setIcon(){return`/static/icons/${this.icon}.svg`}}}),Ve={key:0,class:"v-tag--img"},Be=["src"];function Se(t,n,a,o,l,r){return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([`v-tag--${t.status}`,{"v-tag--square":t.square}])},[t.icon?(e.openBlock(),e.createElementBlock("div",Ve,[e.createElementVNode("img",{src:t.setIcon},null,8,Be)])):e.createCommentVNode("v-if",!0),e.renderSlot(t.$slots,"default")],2)}var Ce=g(ke,[["render",Se]]);d.VButton=T,d.VPagination=re,d.VSelect=$,d.VTab=me,d.VTabContent=ge,d.VTabHeader=$e,d.VTable=O,d.VTag=Ce,Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
