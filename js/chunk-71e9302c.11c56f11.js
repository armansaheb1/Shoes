(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71e9302c"],{"0945":function(e,a,t){},"3e86":function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e._t("default")],2)},i=[],n=t("b7f5"),l={name:"perfect-scrollbar",props:{options:{default:function(){}}},mounted:function(){this.$ps=new n["a"](this.$el,this.options)},beforeDestroy:function(){this.$ps&&(this.$ps.destroy(),this.$ps=null)}},o=l,c=(t("034e"),t("2877")),r=Object(c["a"])(o,s,i,!1,null,null,null);a["a"]=r.exports},"4eee":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"clients-wrapper",class:{"clients-sidebox-open":e.sideboxOpened}},[t("perfect-scrollbar",{staticClass:"clients-content clients-scroll container-p-x container-p-y",attrs:{options:{suppressScrollX:!0,wheelPropagation:!0}}},[t("h4",{staticClass:"d-flex flex-wrap justify-content-between align-items-center font-weight-bold pt-2 mb-4"},[t("div",{staticClass:"mb-2"},[e._v("Clients")]),e._v(" "),t("div",{staticClass:"mb-2",staticStyle:{"max-width":"200px"}},[t("b-input",{attrs:{placeholder:"Search"}})],1)]),e._v(" "),t("div",{staticClass:"table-responsive ui-bordered"},[t("table",{staticClass:"clients-table table table-hover m-0"},[t("tbody",e._l(e.clientsData,(function(a){return t("tr",{key:a.name,class:{"bg-light":e.selected===a&&e.sideboxOpened},on:{click:function(t){return e.selectClient(a)}}},[t("td",{staticClass:"align-middle py-3"},[t("div",{staticClass:"media align-items-center"},[t("img",{staticClass:"d-block ui-w-40 rounded-circle",attrs:{src:e.publicUrl+"img/avatars/"+a.avatar,alt:""}}),e._v(" "),t("div",{staticClass:"media-body flex-basis-auto pl-3"},[t("div",[e._v(e._s(a.name))]),e._v(" "),t("div",{staticClass:"text-muted small"},[e._v("@"+e._s(a.username))])])])]),e._v(" "),t("td",{staticClass:"align-middle py-3"},[e._v("\n              "+e._s(a.company)+"\n            ")]),e._v(" "),t("td",{staticClass:"align-middle py-3"},[t("div",[e._v(e._s(a.email))]),e._v(" "),a.phone?t("div",[e._v(e._s(a.phone))]):e._e()]),e._v(" "),t("td",{staticClass:"align-middle py-3"},[a.status?t("span",[1===a.status?t("b-badge",{attrs:{variant:"success"}},[e._v("Active")]):e._e(),e._v(" "),2===a.status?t("b-badge",{attrs:{variant:"info"}},[e._v("In progress")]):e._e(),e._v(" "),3===a.status?t("b-badge",{attrs:{variant:"warning"}},[e._v("Pending")]):e._e()],1):e._e()])])})),0)])])]),e._v(" "),t("div",{staticClass:"clients-sidebox bg-body border-left"},[t("a",{staticClass:"clients-sidebox-close text-muted text-xlarge font-weight-light",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),e.closeSidebox.apply(null,arguments)}}},[e._v("×")]),e._v(" "),e.selected?t("perfect-scrollbar",{staticClass:"clients-scroll container-p-y",attrs:{options:{suppressScrollX:!0,wheelPropagation:!0}}},[t("div",{staticClass:"text-center p-4"},[t("img",{staticClass:"ui-w-100 rounded-circle mb-4",attrs:{src:e.publicUrl+"img/avatars/"+e.selected.avatar,alt:""}}),e._v(" "),t("h5",{staticClass:"mb-1"},[t("a",{staticClass:"text-body",attrs:{href:"javascript:void(0)"}},[e._v(e._s(e.selected.name))])]),e._v(" "),t("div",{staticClass:"text-muted small mb-2"},[e._v("@"+e._s(e.selected.username))]),e._v(" "),e.selected.company||e.selected.phone?t("div",{staticClass:"small mb-4"},[e.selected.company?t("div",[e._v(e._s(e.selected.company))]):e._e(),e._v(" "),e.selected.phone?t("div",[e._v(e._s(e.selected.phone))]):e._e()]):e._e(),e._v(" "),t("div",[t("a",{staticClass:"text-secondary",attrs:{href:"javascript:void(0)"}},[t("span",{staticClass:"ion ion-md-mail"})]),e._v("   \n          "),t("a",{staticClass:"text-secondary",attrs:{href:"javascript:void(0)"}},[t("span",{staticClass:"ion ion-ios-chatbubbles"})]),e._v("   \n          "),t("span",{staticClass:"text-lighter"},[e._v("|")]),e._v("   \n          "),t("a",{staticClass:"text-twitter",attrs:{href:"javascript:void(0)"}},[t("span",{staticClass:"ion ion-logo-twitter"})]),e._v("   \n          "),t("a",{staticClass:"text-facebook",attrs:{href:"javascript:void(0)"}},[t("span",{staticClass:"ion ion-logo-facebook"})]),e._v("   \n          "),t("a",{staticClass:"text-instagram",attrs:{href:"javascript:void(0)"}},[t("span",{staticClass:"ion ion-logo-instagram"})])])]),e._v(" "),t("hr",{staticClass:"border-light m-0"}),e._v(" "),t("div",{staticClass:"p-4"},[t("h6",{staticClass:"mb-3"},[e._v("Messages")]),e._v(" "),e.selected.messages?t("div",e._l(e.selected.messages,(function(a,s){return t("div",{key:a.date+a.content,staticClass:"ui-bordered py-2 px-3",class:{"mb-3":s!==e.selected.messages.length-1}},[e._v("\n            "+e._s(a.content)+"\n            "),t("div",{staticClass:"text-muted small mt-1"},[e._v(e._s(a.date)+" ago   |   "),t("a",{staticClass:"text-muted",attrs:{href:"javascript:void(0)"}},[e._v("Reply")])])])})),0):t("div",{staticClass:"text-lighter my-4"},[e._v("No messages")])])]):e._e()],1)],1)},i=[],n=t("3e86"),l={name:"pages-clients",metaInfo:{title:"Clients - Pages"},components:{PerfectScrollbar:n["a"]},data:function(){return{selected:null,sideboxOpened:!1,clientsData:[{avatar:"5-small.png",name:"Nelle Maxwell",username:"nmaxwell",email:"nmaxwell@mail.com",phone:"+0 (123) 456 7891",company:"Company Inc."},{avatar:"9-small.png",name:"Amanda Warner",username:"awarner",email:"awarner@mail.com",phone:"+0 (123) 456 7891",company:"Company Inc.",status:1,messages:[{content:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.",date:"1 day"},{content:"Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.",date:"2 days"},{content:"Eam facilis laboramus reprehendunt ei, ex esse fastidii per.",date:"3 days"},{content:"Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.",date:"3 days"}]},{avatar:"4-small.png",name:"Kenneth Frazier",username:"kfrazier",email:"kfrazier@mail.com",phone:"+0 (123) 456 7891",company:"Company Inc.",status:3,messages:[{content:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.",date:"1 day"},{content:"Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.",date:"2 days"},{content:"Eam facilis laboramus reprehendunt ei, ex esse fastidii per.",date:"3 days"},{content:"Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.",date:"3 days"}]},{avatar:"6-small.png",name:"Mae Gibson",username:"mgibson",email:"mgibson@mail.com",phone:"+0 (123) 456 7891",company:"Company Inc."},{avatar:"12-small.png",name:"Arthur Duncan",username:"aduncan",email:"aduncan@mail.com",phone:"+0 (123) 456 7891",company:"Company Inc.",status:2},{avatar:"11-small.png",name:"Belle Ross",username:"bross",email:"bross@mail.com",phone:"+0 (123) 456 7891",company:"Company Inc.",messages:[{content:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.",date:"1 day"},{content:"Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.",date:"2 days"},{content:"Eam facilis laboramus reprehendunt ei, ex esse fastidii per.",date:"3 days"},{content:"Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.",date:"3 days"}]},{avatar:"3-small.png",name:"Allie Rodriguez",username:"arodriguez",email:"bross@mail.com",phone:"+0 (123) 456 7891",company:"Company Inc.",status:1,messages:[{content:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.",date:"1 day"},{content:"Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.",date:"2 days"},{content:"Eam facilis laboramus reprehendunt ei, ex esse fastidii per.",date:"3 days"},{content:"Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.",date:"3 days"}]},{avatar:"7-small.png",name:"Alice Hampton",username:"ahampton",email:"ahampton@mail.com",phone:"+0 (123) 456 7891",company:"Company Inc.",status:3,messages:[{content:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.",date:"1 day"},{content:"Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.",date:"2 days"},{content:"Eam facilis laboramus reprehendunt ei, ex esse fastidii per.",date:"3 days"},{content:"Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.",date:"3 days"}]},{avatar:"8-small.png",name:"Hallie Lewis",username:"hlewis",email:"hlewis@mail.com",phone:"+0 (123) 456 7891",company:"Company Inc.",status:2},{avatar:"2-small.png",name:"Leon Wilson",username:"lwilson",email:"lwilson@mail.com",phone:"+0 (123) 456 7891",company:"Company Inc.",messages:[{content:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.",date:"1 day"},{content:"Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.",date:"2 days"},{content:"Eam facilis laboramus reprehendunt ei, ex esse fastidii per.",date:"3 days"},{content:"Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.",date:"3 days"}]}]}},methods:{selectClient:function(e){this.selected=e,this.sideboxOpened=!0},closeSidebox:function(){this.sideboxOpened=!1}}},o=l,c=(t("a6bb"),t("2877")),r=Object(c["a"])(o,s,i,!1,null,null,null);a["default"]=r.exports},a6bb:function(e,a,t){"use strict";t("0945")}}]);
//# sourceMappingURL=chunk-71e9302c.11c56f11.js.map