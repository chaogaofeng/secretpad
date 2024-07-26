"use strict";(self.webpackChunksecretpad=self.webpackChunksecretpad||[]).push([[6094],{4079:function(B,v,e){e.d(v,{D:function(){return M},I:function(){return T}});var C=e(73193),l=e.n(C),E=e(9580),m=e(58757),p=e(35667),D=E.default.Text,M=function(t){var c=t.children,s=t.width,b=s===void 0?180:s,O=t.style;return c==null?(0,p.jsx)(E.default.Text,{children:"--"}):(0,p.jsx)(E.default.Text,{ellipsis:{tooltip:c},style:l()({width:b},O),children:c})},T=function(t){var c=t.suffixCount,s=t.children,b=s,O="";if(s&&(s==null?void 0:s.length)>c){var R,n;b=s==null||(R=s.slice(0,(s==null?void 0:s.length)-c))===null||R===void 0?void 0:R.trim(),O=s==null||(n=s.slice(-c))===null||n===void 0?void 0:n.trim()}return(0,p.jsx)(D,{style:{width:"100%"},ellipsis:{suffix:O,tooltip:s},children:b})}},63348:function(B,v,e){e.d(v,{$v:function(){return G},Aj:function(){return z},BQ:function(){return U},Fg:function(){return F},af:function(){return N},ez:function(){return x},i2:function(){return g},pR:function(){return J},sB:function(){return P}});var C=e(90819),l=e.n(C),E=e(89933),m=e.n(E),p=e(4977),D=e.n(p),M=e(78796),T=e.n(M),L=e(41553),t=e.n(L),c=e(49488),s=e.n(c),b=e(84047),O=e.n(b),R=e(10154),n=e.n(R),A=e(14025),w=e(90634),S=e(97627),x=function(_){s()(I,_);var j=O()(I);function I(){var r;T()(this,I);for(var K=arguments.length,y=new Array(K),W=0;W<K;W++)y[W]=arguments[W];return r=j.call.apply(j,[this].concat(y)),n()(t()(r),"messageInfoLoading",!1),n()(t()(r),"messageDetail",{}),n()(t()(r),"loading",!1),n()(t()(r),"applyCount",0),n()(t()(r),"processCount",0),n()(t()(r),"processLoading",{rejectLoading:!1,agreeLoading:!1,type:void 0}),n()(t()(r),"messageList",[]),n()(t()(r),"getMessageList",function(){var h=m()(l()().mark(function d(f){var a,i;return l()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return r.loading=!0,u.next=3,(0,A.list)(f);case 3:return a=u.sent,i=a.data,r.loading=!1,r.messageList=(i==null?void 0:i.messages)||[],u.abrupt("return",i);case 8:case"end":return u.stop()}},d)}));return function(d){return h.apply(this,arguments)}}()),n()(t()(r),"process",function(){var h=m()(l()().mark(function d(f){var a;return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return r.processLoading={type:f.action,rejectLoading:f.action===P.REJECT,agreeLoading:f.action===P.AGREE},o.next=3,(0,A.reply)(f);case 3:return a=o.sent,r.processLoading={rejectLoading:!1,agreeLoading:!1,type:void 0},o.abrupt("return",a);case 6:case"end":return o.stop()}},d)}));return function(d){return h.apply(this,arguments)}}()),n()(t()(r),"getMessageCount",function(){var h=m()(l()().mark(function d(f){var a;return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,A.pending)({nodeID:f});case 2:return a=o.sent,o.abrupt("return",a);case 4:case"end":return o.stop()}},d)}));return function(d){return h.apply(this,arguments)}}()),n()(t()(r),"getMessageDetail",function(){var h=m()(l()().mark(function d(f){var a,i;return l()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return r.messageInfoLoading=!0,u.next=3,(0,A.detail)(f);case 3:a=u.sent,a.status&&a.status.code===0&&a.data?r.messageDetail=a.data:(r.messageDetail={},S.ZP.error(a==null||(i=a.status)===null||i===void 0?void 0:i.msg)),r.messageInfoLoading=!1;case 6:case"end":return u.stop()}},d)}));return function(d){return h.apply(this,arguments)}}()),r}return D()(I)}(w.Hn),F=function(_){return _.PROCESS="process",_.APPLY="apply",_}({}),U=function(_){return _.ALL="",_.PENDING="PENDING",_.PROCESS="PROCESS",_}({}),N=n()(n()(n()({},U.ALL,void 0),U.PENDING,!1),U.PROCESS,!0),P=function(_){return _.PROCESS="REVIEWING",_.AGREE="APPROVED",_.REJECT="REJECTED",_}({}),J=n()(n()(n()({},P.PROCESS,{text:"\u5F85\u540C\u610F",labelStyle:{backgroundColor:"#65A4FD"},textStyle:{backgroundColor:"#F0F5FF",border:"1px solid #65A4FD",color:"#0068FA"}}),P.AGREE,{text:"\u5DF2\u540C\u610F",labelStyle:{backgroundColor:"#36C872"},textStyle:{backgroundColor:"#ECFFF4",border:"1px solid #68D092",color:"#23B65F"}}),P.REJECT,{text:"\u5DF2\u62D2\u7EDD",labelStyle:{backgroundColor:"#f50"},textStyle:{backgroundColor:"#FFF1F0",border:"1px solid #FB9D9D",color:"#FC7574"}}),g=function(_){return _.TEE_DOWNLOAD="TEE_DOWNLOAD",_.NODE_ROUTE="NODE_ROUTE",_.PROJECT_ARCHIVE="PROJECT_ARCHIVE",_.PROJECT_NODE_ADD="PROJECT_CREATE",_.ALL="ALL",_}({}),G=[{value:g.TEE_DOWNLOAD,label:"\u7ED3\u679C\u4E0B\u8F7D"},{value:g.NODE_ROUTE,label:"\u8282\u70B9\u5408\u4F5C"},{value:g.ALL,label:"\u5168\u90E8\u7C7B\u578B"}],z=[{value:g.PROJECT_ARCHIVE,label:"\u9879\u76EE\u5F52\u6863"},{value:g.PROJECT_NODE_ADD,label:"\u9879\u76EE\u9080\u7EA6"},{value:g.ALL,label:"\u5168\u90E8\u7C7B\u578B"}]},36144:function(B,v,e){e.r(v);var C=e(58757),l=e(5777),E=e(16310),m=e(93146),p=e(90634),D=e(35667),M=function(){var L=(0,p.tT)(E.z);return(0,C.useEffect)(function(){L.setSubTitle("Edge")},[]),(0,D.jsx)(l.O,{children:(0,D.jsx)(m.W,{})})};v.default=M}}]);
