var G=Object.defineProperty,H=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var V=(c,o,t)=>o in c?G(c,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[o]=t,O=(c,o)=>{for(var t in o||(o={}))K.call(o,t)&&V(c,t,o[t]);if(R)for(var t of R(o))Q.call(o,t)&&V(c,t,o[t]);return c},A=(c,o)=>H(c,J(o));var L=(c,o,t)=>new Promise((m,e)=>{var l=r=>{try{s(t.next(r))}catch(d){e(d)}},u=r=>{try{s(t.throw(r))}catch(d){e(d)}},s=r=>r.done?m(r.value):Promise.resolve(r.value).then(l,u);s((t=t.apply(c,o)).next())});import{b3 as U,d as I,v as X,c as Y,a as y,o as b,e as a,S as E,w as i,F as Z,r as D,f as S,gO as ee,g_ as te,g$ as ae,t as p,_ as N,h as q,b1 as oe,q as C,aW as le,gD as ie,a4 as j,b as w,B as M,s as g,aM as W,A as ne,gT as se,gU as ce}from"./index-BLKh9tQK.js";/* empty css              *//* empty css              *//* empty css              */import{u as x}from"./loading-CMzUFs6t.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */function z(){return U.get("/api/profile/basic")}function re(){return U.get("/api/operation/log")}const ue={class:"item-container"},de={key:1},pe=I({__name:"profile-item",props:{type:{type:String,default:""},renderData:{type:Object,required:!0},loading:{type:Boolean,default:!1}},setup(c){const o=c,{t}=X.useI18n(),m=Y(()=>{var u,s,r,d,n,f,_,$,h,v,k,P,B,T;const{renderData:e}=o,l=[];return l.push({title:o.type==="pre"?t("basicProfile.title.preVideo"):t("basicProfile.title.video"),data:[{label:t("basicProfile.label.video.mode"),value:((u=e==null?void 0:e.video)==null?void 0:u.mode)||"-"},{label:t("basicProfile.label.video.acquisition.resolution"),value:((s=e==null?void 0:e.video)==null?void 0:s.acquisition.resolution)||"-"},{label:t("basicProfile.label.video.acquisition.frameRate"),value:`${((r=e==null?void 0:e.video)==null?void 0:r.acquisition.frameRate)||"-"} fps`},{label:t("basicProfile.label.video.encoding.resolution"),value:((d=e==null?void 0:e.video)==null?void 0:d.encoding.resolution)||"-"},{label:t("basicProfile.label.video.encoding.rate.min"),value:`${((n=e==null?void 0:e.video)==null?void 0:n.encoding.rate.min)||"-"} bps`},{label:t("basicProfile.label.video.encoding.rate.max"),value:`${((f=e==null?void 0:e.video)==null?void 0:f.encoding.rate.max)||"-"} bps`},{label:t("basicProfile.label.video.encoding.rate.default"),value:`${((_=e==null?void 0:e.video)==null?void 0:_.encoding.rate.default)||"-"} bps`},{label:t("basicProfile.label.video.encoding.frameRate"),value:`${(($=e==null?void 0:e.video)==null?void 0:$.encoding.frameRate)||"-"} fpx`},{label:t("basicProfile.label.video.encoding.profile"),value:((h=e==null?void 0:e.video)==null?void 0:h.encoding.profile)||"-"}]}),l.push({title:o.type==="pre"?t("basicProfile.title.preAudio"):t("basicProfile.title.audio"),data:[{label:t("basicProfile.label.audio.mode"),value:((v=e==null?void 0:e.audio)==null?void 0:v.mode)||"-"},{label:t("basicProfile.label.audio.acquisition.channels"),value:`${((k=e==null?void 0:e.audio)==null?void 0:k.acquisition.channels)||"-"} ${t("basicProfile.unit.audio.channels")}`},{label:t("basicProfile.label.audio.encoding.channels"),value:`${((P=e==null?void 0:e.audio)==null?void 0:P.encoding.channels)||"-"} ${t("basicProfile.unit.audio.channels")}`},{label:t("basicProfile.label.audio.encoding.rate"),value:`${((B=e==null?void 0:e.audio)==null?void 0:B.encoding.rate)||"-"} kbps`},{label:t("basicProfile.label.audio.encoding.profile"),value:((T=e==null?void 0:e.audio)==null?void 0:T.encoding.profile)||"-"}]}),l});return(e,l)=>{const u=ae,s=te,r=ee,d=E;return b(),y("div",ue,[a(d,{size:16,direction:"vertical",fill:""},{default:i(()=>[(b(!0),y(Z,null,D(m.value,(n,f)=>(b(),S(r,{key:f,"label-style":{textAlign:"right",width:"200px",paddingRight:"10px",color:"rgb(var(--gray-8))"},"value-style":{width:"400px"},title:n.title,data:n.data},{value:i(({value:_})=>[c.loading?(b(),S(s,{key:0,animation:!0},{default:i(()=>[a(u,{widths:["200px"],rows:1})]),_:1})):(b(),y("span",de,p(_),1))]),_:2},1032,["title","data"]))),128))]),_:1})])}}}),F=N(pe,[["__scopeId","data-v-642d9256"]]),fe={key:0},_e={key:1},be=I({__name:"operation-log",setup(c){const{loading:o,setLoading:t}=x(!0),m=q([]);return L(this,null,function*(){try{const{data:l}=yield re();m.value=l}catch(l){}finally{t(!1)}}),(l,u)=>{const s=ie,r=M,d=le,n=oe,f=W;return b(),S(f,{class:"general-card"},{title:i(()=>[g(p(l.$t("basicProfile.title.operationLog")),1)]),default:i(()=>[a(n,{loading:C(o),style:{width:"100%"}},{default:i(()=>[a(d,{data:m.value},{columns:i(()=>[a(s,{title:l.$t("basicProfile.column.contentNumber"),"data-index":"contentNumber"},null,8,["title"]),a(s,{title:l.$t("basicProfile.column.updateContent"),"data-index":"updateContent"},null,8,["title"]),a(s,{title:l.$t("basicProfile.column.status"),"data-index":"status"},{cell:i(({record:_})=>[_.status===0?(b(),y("p",fe,[u[0]||(u[0]=w("span",{class:"circle"},null,-1)),w("span",null,p(l.$t("basicProfile.cell.auditing")),1)])):j("",!0),_.status===1?(b(),y("p",_e,[u[1]||(u[1]=w("span",{class:"circle pass"},null,-1)),w("span",null,p(l.$t("basicProfile.cell.pass")),1)])):j("",!0)]),_:1},8,["title"]),a(s,{title:l.$t("basicProfile.column.updateTime"),"data-index":"updateTime"},null,8,["title"]),a(s,{title:l.$t("basicProfile.column.operation")},{cell:i(()=>[a(r,{type:"text"},{default:i(()=>[g(p(l.$t("basicProfile.cell.view")),1)]),_:1})]),_:1},8,["title"])]),_:1},8,["data"])]),_:1},8,["loading"])]),_:1})}}}),me=N(be,[["__scopeId","data-v-7cfcb149"]]),ge={class:"container"},ve={name:"Basic"},Pe=I(A(O({},ve),{setup(c){const{loading:o,setLoading:t}=x(!0),{loading:m,setLoading:e}=x(!0),l=q({}),u=q({}),s=q(1),r=()=>L(this,null,function*(){try{const{data:n}=yield z();l.value=n,s.value=2}catch(n){}finally{t(!1)}}),d=()=>L(this,null,function*(){try{const{data:n}=yield z();u.value=n}catch(n){}finally{e(!1)}});return r(),d(),(n,f)=>{const _=ne("Breadcrumb"),$=M,h=E,v=ce,k=se,P=W;return b(),y("div",ge,[a(_,{items:["menu.profile","menu.profile.basic"]}),a(h,{direction:"vertical",size:16,fill:""},{default:i(()=>[a(P,{class:"general-card",title:n.$t("basicProfile.title.form")},{extra:i(()=>[a(h,null,{default:i(()=>[a($,null,{default:i(()=>[g(p(n.$t("basicProfile.cancel")),1)]),_:1}),a($,{type:"primary"},{default:i(()=>[g(p(n.$t("basicProfile.goBack")),1)]),_:1})]),_:1})]),default:i(()=>[a(k,{current:s.value,"onUpdate:current":f[0]||(f[0]=B=>s.value=B),"line-less":"",class:"steps"},{default:i(()=>[a(v,null,{default:i(()=>[g(p(n.$t("basicProfile.steps.commit")),1)]),_:1}),a(v,null,{default:i(()=>[g(p(n.$t("basicProfile.steps.approval")),1)]),_:1}),a(v,null,{default:i(()=>[g(p(n.$t("basicProfile.steps.finish")),1)]),_:1})]),_:1},8,["current"])]),_:1},8,["title"]),a(P,{class:"general-card"},{default:i(()=>[a(F,{loading:C(o),"render-data":l.value},null,8,["loading","render-data"])]),_:1}),a(P,{class:"general-card"},{default:i(()=>[a(F,{loading:C(m),type:"pre","render-data":u.value},null,8,["loading","render-data"])]),_:1}),a(me)]),_:1})])}}})),Ve=N(Pe,[["__scopeId","data-v-08fd72cc"]]);export{Ve as default};
