(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43cb11d1"],{"3e86":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._t("default")],2)},i=[],o=s("b7f5"),n={name:"perfect-scrollbar",props:{options:{default:function(){}}},mounted:function(){this.$ps=new o["a"](this.$el,this.options)},beforeDestroy:function(){this.$ps&&(this.$ps.destroy(),this.$ps=null)}},l=n,r=(s("034e"),s("2877")),c=Object(r["a"])(l,a,i,!1,null,null,null);e["a"]=c.exports},9410:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"messages-wrapper",class:{"messages-sidebox-open":t.sideboxOpen}},[s("perfect-scrollbar",{staticClass:"messages-sidebox messages-scroll bg-body border-right",attrs:{options:{suppressScrollX:!0,wheelPropagation:!0}}},[s("div",{staticClass:"py-3 px-4"},[s("div",{staticClass:"media align-items-center"},[s("div",{staticClass:"media-body"},[s("b-btn",{attrs:{variant:"primary",block:!0}},[t._v("Compose")])],1),t._v(" "),s("a",{staticClass:"messages-sidebox-toggler d-lg-none d-block text-muted text-large font-weight-light pl-4",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.sideboxOpen=!t.sideboxOpen}}},[t._v("×")])])]),t._v(" "),s("hr",{staticClass:"border-light mx-4 mt-0 mb-4"}),t._v(" "),t._l(t.mailBoxes,(function(e,a){return s("a",{key:e.title,staticClass:"d-flex justify-content-between align-items-center py-2 px-4",class:{"font-weight-bold text-body":t.currentMailBox===a,"text-muted":t.currentMailBox!==a},attrs:{href:"javascript:void(0)"}},[s("div",[s("i",{class:e.icon}),t._v("   "+t._s(e.title))]),t._v(" "),e.count?s("div",{staticClass:"badge badge-primary"},[t._v(t._s(e.count))]):t._e()])})),t._v(" "),s("hr",{staticClass:"border-light m-4"}),t._v(" "),s("h6",{staticClass:"text-tiny font-weight-bold px-4"},[t._v("LABELS")]),t._v(" "),t._l(t.labels,(function(e){return s("a",{key:e.title,staticClass:"d-block text-muted py-1 px-4",attrs:{href:"javascript:void(0)"}},[s("span",{staticClass:"badge badge-dot",class:"badge-"+e.color}),t._v("   "+t._s(e.title)+"\n    ")])}))],2),t._v(" "),s("div",{staticClass:"d-flex flex-column w-100"},[s("div",{staticClass:"flex-grow-1 position-relative"},[s("perfect-scrollbar",{staticClass:"messages-content messages-scroll",attrs:{options:{suppressScrollX:!0,wheelPropagation:!0}}},[s("h4",{staticClass:"font-weight-bold container-p-x py-3 py-lg-4 m-0"},[s("a",{staticClass:"messages-sidebox-toggler d-lg-none text-muted align-middle px-3 mr-2",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.sideboxOpen=!t.sideboxOpen}}},[s("i",{staticClass:"ion ion-md-more"})]),t._v("\n          New message\n        ")]),t._v(" "),s("hr",{staticClass:"border-light m-0"}),t._v(" "),s("div",{staticClass:"container-p-x py-4"},[s("b-form-group",{attrs:{label:"To:"}},[s("b-input",{model:{value:t.messageData.to,callback:function(e){t.$set(t.messageData,"to",e)},expression:"messageData.to"}})],1),t._v(" "),s("b-form-group",{attrs:{label:"Subject:"}},[s("b-input",{model:{value:t.messageData.subject,callback:function(e){t.$set(t.messageData,"subject",e)},expression:"messageData.subject"}})],1),t._v(" "),s("b-form-group",{staticClass:"mt-4"},[t.isIE10Mode?t._e():s("quill-editor",{attrs:{options:t.editorOptions},model:{value:t.messageData.content,callback:function(e){t.$set(t.messageData,"content",e)},expression:"messageData.content"}}),t._v(" "),t.isIE10Mode?s("b-textarea",{staticStyle:{height:"400px"},model:{value:t.messageData.content,callback:function(e){t.$set(t.messageData,"content",e)},expression:"messageData.content"}}):t._e()],1),t._v(" "),s("div",{staticClass:"text-right mt-4"},[s("b-btn",{attrs:{variant:"primary ml-2"}},[s("i",{staticClass:"ion ion-ios-paper-plane"}),t._v("  Send")]),t._v(" "),s("b-btn",{attrs:{variant:"default ml-2"}},[s("i",{staticClass:"ion ion-md-save"}),t._v("  Save")]),t._v(" "),s("b-btn",{attrs:{variant:"default ml-2"}},[t._v("Cancel")])],1)],1)])],1)])],1)},i=[],o=(s("d3b7"),s("3ca3"),s("ddb0"),s("3e86")),n={name:"pages-messages-v1-compose",metaInfo:{title:"Compose message v1 - Pages"},components:{PerfectScrollbar:o["a"],quillEditor:function(){return Promise.all([s.e("chunk-43a8a956"),s.e("chunk-6e83591c")]).then(s.t.bind(null,"953d",7)).then((function(t){return t.quillEditor})).catch((function(){}))}},data:function(){return{sideboxOpen:!1,currentMailBox:null,mailBoxes:{inbox:{title:"Inbox",icon:"ion ion-ios-filing",count:15},sent:{title:"Sent",icon:"ion ion ion-ios-mail"},drafts:{title:"Drafts",icon:"ion ion ion-md-create"},spam:{title:"Spam",icon:"ion ion ion-md-folder-open"},trash:{title:"Trash",icon:"ion ion ion-md-trash"}},labels:{clients:{title:"Clients",color:"success"},important:{title:"Important",color:"danger"},social:{title:"Social",color:"info"},other:{title:"Other",color:"warning"}},messageData:{to:"",subject:"",content:""},editorOptions:{modules:{toolbar:[[{header:[1,2,3,4,5,6,!1]},{font:[]},{size:[]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{script:"sub"},{script:"super"}],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],[{direction:"rtl"},{align:[]}],["link","image","video"],["clean"]]}}}},mounted:function(){this.layoutHelpers.setCollapsed(!0,!1)}},l=n,r=(s("6821"),s("c037"),s("8040"),s("e15b"),s("2877")),c=Object(r["a"])(l,a,i,!1,null,null,null);e["default"]=c.exports},b183:function(t,e,s){},e15b:function(t,e,s){"use strict";s("b183")}}]);
//# sourceMappingURL=chunk-43cb11d1.4b2adb9f.js.map