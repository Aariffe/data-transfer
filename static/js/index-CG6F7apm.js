import{d as z,h as n,a as l,o as i,e as a,A as M,w as o,aM as V,aY as v,M as j,aW as A,q as O,S as F,b as r,a4 as f,s as u,t as p,al as L,F as P,r as R,aN as q,aO as E,b2 as U,_ as W}from"./index-BLKh9tQK.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{u as Y}from"./loading-CMzUFs6t.js";const G={class:"container"},H=["onClick"],J=["onClick"],K={class:"form-content"},Q={key:0},X={key:1},Z=z({__name:"index",setup($){const{loading:I}=Y(!1),c=n(!1),y=n([{title:"订单ID",dataIndex:"orderId"},{title:"活动ID",dataIndex:"activityId"},{title:"活动名称",dataIndex:"activityName"},{title:"用户ID",dataIndex:"userId"},{title:"支付金额",dataIndex:"pay"},{title:"订单状态",dataIndex:"orderStatus",slotName:"orderStatus"},{title:"创建时间",dataIndex:"createTime"},{title:"更新时间",dataIndex:"updateTime"},{title:"操作",dataIndex:"operation",slotName:"operation"}]),d=n({orderId:"",activityId:"",activityName:"",userId:"",pay:"",orderStatus:"",createTime:"",updateTime:""}),b=[{label:"订单ID",field:"orderId"},{label:"活动ID",field:"activityId"},{label:"活动名称",field:"activityName"},{label:"订单单价",field:"orderPrice"},{label:"购买数目",field:"orderNum"},{label:"支付金额",field:"pay"},{label:"订单状态",field:"orderStatus"},{label:"创建时间",field:"createTime"},{label:"更新时间",field:"updateTime"}],g=n([{orderId:"1",activityId:"1",activityName:"活动1",userId:"1",pay:"100",orderStatus:"resolved",createTime:"2021-09-01 12:00:00",updateTime:"2021-09-01 12:00:00"},{orderId:"2",activityId:"2",activityName:"活动2",userId:"2",pay:"200",orderStatus:"resolved",createTime:"2021-09-02 12:00:00",updateTime:"2021-09-02 12:00:00"},{orderId:"3",activityId:"3",activityName:"活动3",userId:"3",pay:"300",orderStatus:"rejected",createTime:"2021-09-03 12:00:00",updateTime:"2021-09-03 12:00:00"}]),k=t=>{c.value=!0,d.value=t,console.log(t)},x=t=>{console.log(t)},C=()=>{console.log("go activity")},m=t=>{console.log("refund"),t.orderId!==""&&(console.log("formData:",t),v.confirm({title:"退款",content:"是否确认退款？",titleAlign:"start",onOk:()=>{j.success("退款成功")},onCanel:()=>{}}))};return(t,s)=>{const S=M("Breadcrumb"),T=F,N=A,D=V,_=E,w=U,h=q,B=v;return i(),l("div",G,[a(S,{items:["订单管理"]}),a(D,{class:"general-card"},{default:o(()=>[a(N,{"row-key":"id",loading:O(I),pagination:t.pagination,columns:y.value,data:g.value,bordered:!1,size:t.size,onPageChange:x},{orderStatus:o(({record:e})=>[r("div",{class:L([e.orderStatus==="rejected"?"not-pass":"pass"])},[s[2]||(s[2]=r("span",{class:"circle"},null,-1)),u(" "+p(e.orderStatus==="resolved"?"已支付":"已退款"),1)],2)]),operation:o(({record:e})=>[a(T,null,{default:o(()=>[r("span",{class:"detail",onClick:()=>{k(e)}}," 详情 ",8,H),e.orderStatus==="resolved"?(i(),l("span",{key:0,class:"detail",onClick:()=>{m(e)}}," 退款 ",8,J)):f("",!0)]),_:2},1024)]),_:1},8,["loading","pagination","columns","data","size"])]),_:1}),a(B,{visible:c.value,"onUpdate:visible":s[0]||(s[0]=e=>c.value=e),title:"订单详情","title-align":"start","cancel-text":"关闭","ok-text":"退款","ok-button-props":{disabled:d.value.orderStatus==="rejected"},onOk:s[1]||(s[1]=()=>{m(d.value)})},{default:o(()=>[r("div",K,[(i(),l(P,null,R(b,e=>a(h,{key:e.label,class:"info-item"},{default:o(()=>[a(_,{span:8},{default:o(()=>[u(p(e.label),1)]),_:2},1024),a(_,{span:16},{default:o(()=>[e.field==="avatar"?(i(),l("span",Q,[a(w,{color:"blue"},{default:o(()=>s[3]||(s[3]=[u("获取中")])),_:1})])):(i(),l("span",X,p(d.value[e.field]||"-"),1)),e.field==="activityId"?(i(),l("span",{key:2,class:"check-activity-detail",onClick:C},"查看活动详情")):f("",!0)]),_:2},1024)]),_:2},1024)),64))])]),_:1},8,["visible","ok-button-props"])])}}}),pe=W(Z,[["__scopeId","data-v-e9ac7c2a"]]);export{pe as default};
