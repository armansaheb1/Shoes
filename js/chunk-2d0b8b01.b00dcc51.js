(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8b01"],{"306d":function(e,s,t){"use strict";t.r(s);var l=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[e._m(0),e._v(" "),t("b-card",{staticClass:"mb-4",attrs:{"no-body":"",header:"Checkboxes and radios","header-tag":"h6"}},[t("b-card-body",{staticClass:"demo-vertical-spacing-sm"},[t("b-check-group",{attrs:{options:e.options},model:{value:e.multipleModel,callback:function(s){e.multipleModel=s},expression:"multipleModel"}}),e._v(" "),t("b-form-checkbox",{attrs:{indeterminate:e.indeterminate},on:{"update:indeterminate":function(s){e.indeterminate=s}},model:{value:e.indeterminateChecked,callback:function(s){e.indeterminateChecked=s},expression:"indeterminateChecked"}},[e._v("\n        Indeterminate\n      ")]),e._v(" "),t("b-radio-group",{attrs:{options:e.options},model:{value:e.singleModel,callback:function(s){e.singleModel=s},expression:"singleModel"}})],1),e._v(" "),t("hr",{staticClass:"m-0"}),e._v(" "),t("b-card-body",[t("div",{staticClass:"text-light small font-weight-semibold mb-3"},[e._v("Disabled")]),e._v(" "),t("div",{staticClass:"demo-vertical-spacing-sm"},[t("b-check-group",{attrs:{options:e.options,disabled:""},model:{value:e.multipleModel,callback:function(s){e.multipleModel=s},expression:"multipleModel"}}),e._v(" "),t("b-form-checkbox",{attrs:{indeterminate:e.dIndeterminate,disabled:""},on:{"update:indeterminate":function(s){e.dIndeterminate=s}},model:{value:e.dIndeterminateChecked,callback:function(s){e.dIndeterminateChecked=s},expression:"dIndeterminateChecked"}},[e._v("\n          Indeterminate\n        ")]),e._v(" "),t("fieldset",{attrs:{disabled:""}},[t("b-radio-group",{attrs:{options:e.options},model:{value:e.singleModel,callback:function(s){e.singleModel=s},expression:"singleModel"}})],1)],1)]),e._v(" "),t("hr",{staticClass:"m-0"}),e._v(" "),t("b-card-body",[t("div",{staticClass:"text-light small font-weight-semibold mb-3"},[e._v("Validation states")]),e._v(" "),t("div",{staticClass:"demo-vertical-spacing-sm"},[t("b-check",{attrs:{state:!0}},[e._v("Valid state")]),e._v(" "),t("b-check",{attrs:{state:!1}},[e._v("Invalid state")])],1)]),e._v(" "),t("hr",{staticClass:"m-0"}),e._v(" "),t("b-card-body",[t("div",{staticClass:"text-light small font-weight-semibold mb-3"},[e._v("Stacked")]),e._v(" "),t("div",{staticClass:"demo-vertical-spacing-sm"},[t("b-check-group",{staticClass:"custom-controls-stacked",attrs:{stacked:"",options:e.options},model:{value:e.multipleModel,callback:function(s){e.multipleModel=s},expression:"multipleModel"}}),e._v(" "),t("b-radio-group",{staticClass:"custom-controls-stacked",attrs:{stacked:"",options:e.options},model:{value:e.singleModel,callback:function(s){e.singleModel=s},expression:"singleModel"}})],1)])],1),e._v(" "),t("b-card",{staticClass:"mb-4",attrs:{"no-body":"",header:"Selects","header-tag":"h6"}},[t("b-card-body",[t("div",{staticClass:"demo-vertical-spacing-sm"},[t("b-select",{attrs:{options:e.options},model:{value:e.singleModel,callback:function(s){e.singleModel=s},expression:"singleModel"}}),e._v(" "),t("b-select",{attrs:{"select-size":3,options:e.options},model:{value:e.singleModel,callback:function(s){e.singleModel=s},expression:"singleModel"}})],1)]),e._v(" "),t("hr",{staticClass:"m-0"}),e._v(" "),t("b-card-body",[t("div",{staticClass:"text-light small font-weight-semibold mb-3"},[e._v("Sizes")]),e._v(" "),t("div",{staticClass:"demo-vertical-spacing-sm"},[t("b-select",{attrs:{options:e.options,size:"lg"},model:{value:e.singleModel,callback:function(s){e.singleModel=s},expression:"singleModel"}}),e._v(" "),t("b-select",{attrs:{"select-size":3,options:e.options,size:"lg"},model:{value:e.singleModel,callback:function(s){e.singleModel=s},expression:"singleModel"}}),e._v(" "),t("b-select",{attrs:{options:e.options,size:"sm"},model:{value:e.singleModel,callback:function(s){e.singleModel=s},expression:"singleModel"}}),e._v(" "),t("b-select",{attrs:{"select-size":3,options:e.options,size:"sm"},model:{value:e.singleModel,callback:function(s){e.singleModel=s},expression:"singleModel"}})],1)]),e._v(" "),t("hr",{staticClass:"m-0"}),e._v(" "),t("b-card-body",{staticClass:"theme-bg-dark"},[t("div",{staticClass:"theme-text-white small font-weight-semibold mb-3"},[e._v("Inverted")]),e._v(" "),t("b-select",{staticClass:"custom-select-inverted",attrs:{options:e.options},model:{value:e.singleModel,callback:function(s){e.singleModel=s},expression:"singleModel"}})],1),e._v(" "),t("hr",{staticClass:"m-0"}),e._v(" "),t("b-card-body",[t("div",{staticClass:"text-light small font-weight-semibold mb-3"},[e._v("Disabled")]),e._v(" "),t("b-select",{attrs:{options:e.options,disabled:""},model:{value:e.singleModel,callback:function(s){e.singleModel=s},expression:"singleModel"}})],1),e._v(" "),t("hr",{staticClass:"m-0"}),e._v(" "),t("b-card-body",{staticClass:"theme-bg-dark"},[t("b-select",{staticClass:"custom-select-inverted",attrs:{options:e.options,disabled:""},model:{value:e.singleModel,callback:function(s){e.singleModel=s},expression:"singleModel"}})],1),e._v(" "),t("hr",{staticClass:"m-0"}),e._v(" "),t("b-card-body",[t("div",{staticClass:"text-light small font-weight-semibold mb-3"},[e._v("Validation states")]),e._v(" "),t("div",{staticClass:"demo-vertical-spacing-sm"},[t("b-select",{attrs:{options:e.options,state:!0},model:{value:e.singleModel,callback:function(s){e.singleModel=s},expression:"singleModel"}}),e._v(" "),t("b-select",{attrs:{options:e.options,state:!1},model:{value:e.singleModel,callback:function(s){e.singleModel=s},expression:"singleModel"}})],1)])],1),e._v(" "),t("b-card",{staticClass:"mb-4",attrs:{"no-body":"",header:"File browser","header-tag":"h6"}},[t("b-card-body",[t("b-file",{model:{value:e.file,callback:function(s){e.file=s},expression:"file"}})],1),e._v(" "),t("hr",{staticClass:"m-0"}),e._v(" "),t("b-card-body",[t("div",{staticClass:"text-light small font-weight-semibold mb-3"},[e._v("Disabled")]),e._v(" "),t("b-file",{attrs:{disabled:""},model:{value:e.file,callback:function(s){e.file=s},expression:"file"}})],1),e._v(" "),t("hr",{staticClass:"m-0"}),e._v(" "),t("b-card-body",[t("div",{staticClass:"text-light small font-weight-semibold mb-3"},[e._v("Validation states")]),e._v(" "),t("div",{staticClass:"demo-vertical-spacing-sm"},[t("b-file",{attrs:{state:!0},model:{value:e.file,callback:function(s){e.file=s},expression:"file"}}),e._v(" "),t("b-file",{attrs:{state:!1},model:{value:e.file,callback:function(s){e.file=s},expression:"file"}})],1)])],1),e._v(" "),t("b-card",{staticClass:"mb-4",attrs:{"no-body":"",header:"Form tags","header-tag":"h6"}},[t("b-card-body",{staticClass:"demo-vertical-spacing-sm"},[t("b-form-tags",{attrs:{separator:" ,;",placeholder:"Enter new tags separated by space, comma or semicolon","remove-on-delete":"",disabled:e.formTagsDisabled},model:{value:e.formTagsValue,callback:function(s){e.formTagsValue=s},expression:"formTagsValue"}}),e._v(" "),t("b-form-tags",{attrs:{"tag-variant":"primary","tag-pills":"",separator:" ,;",placeholder:"Enter new tags separated by space, comma or semicolon","remove-on-delete":"",disabled:e.formTagsDisabled},model:{value:e.formTagsValue,callback:function(s){e.formTagsValue=s},expression:"formTagsValue"}}),e._v(" "),t("b-btn",{attrs:{variant:e.formTagsDisabled?"danger":"secondary"},on:{click:function(s){e.formTagsDisabled=!e.formTagsDisabled}}},[e._v(e._s(e.formTagsDisabled?"Enable":"Disable"))])],1),e._v(" "),t("hr",{staticClass:"m-0"}),e._v(" "),t("b-card-body",[t("div",{staticClass:"text-light small font-weight-semibold mb-3"},[e._v("Sizes")]),e._v(" "),t("div",{staticClass:"demo-vertical-spacing-sm"},[t("b-form-tags",{attrs:{size:"sm",separator:" ,;","remove-on-delete":"",disabled:e.formTagsDisabled},model:{value:e.formTagsValue,callback:function(s){e.formTagsValue=s},expression:"formTagsValue"}}),e._v(" "),t("b-form-tags",{attrs:{size:"lg",separator:" ,;","remove-on-delete":"",disabled:e.formTagsDisabled},model:{value:e.formTagsValue,callback:function(s){e.formTagsValue=s},expression:"formTagsValue"}})],1)])],1)],1)},a=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("h4",{staticClass:"font-weight-bold py-3 mb-4"},[t("span",{staticClass:"text-muted font-weight-light"},[e._v("Forms /")]),e._v(" Custom controls\n  ")])}],i={name:"forms-custom-controls",metaInfo:{title:"Custom controls - Forms"},data:function(){return{options:[{text:"Orange",value:"orange"},{text:"Apple",value:"apple"},{text:"Pineapple",value:"pineapple"},{text:"Grape",value:"grape",disabled:!0}],singleModel:"apple",multipleModel:["orange"],file:null,indeterminateChecked:!1,indeterminate:!0,dIndeterminateChecked:!1,dIndeterminate:!0,formTagsValue:["Apple","Orange"],formTagsDisabled:!1}}},o=i,n=t("2877"),d=Object(n["a"])(o,l,a,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0b8b01.b00dcc51.js.map