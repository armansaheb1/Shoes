(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc434"],{"4cd3":function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t._m(0),t._v(" "),l("hr",{staticClass:"container-m-nx border-light mt-0 mb-5"}),t._v(" "),l("h6",[t._v("Table options")]),t._v(" "),l("div",{staticClass:"mb-4"},[l("b-check",{staticClass:"d-inline-block mr-3",model:{value:t.isStickyHeader,callback:function(e){t.isStickyHeader=e},expression:"isStickyHeader"}},[t._v("Sticky header")]),t._v(" "),l("b-check",{staticClass:"d-inline-block mr-3",model:{value:t.isSortable,callback:function(e){t.isSortable=e},expression:"isSortable"}},[t._v("Sortable")]),t._v(" "),l("b-check",{staticClass:"d-inline-block mr-3",attrs:{disabled:!t.isSortable},model:{value:t.isSortIconLeft,callback:function(e){t.isSortIconLeft=e},expression:"isSortIconLeft"}},[t._v("Sort icons on the left")]),t._v(" "),l("b-check",{staticClass:"d-inline-block mr-3",model:{value:t.isStacked,callback:function(e){t.isStacked=e},expression:"isStacked"}},[t._v("Stacked")]),t._v(" "),l("b-check",{staticClass:"d-inline-block mr-3",model:{value:t.isStriped,callback:function(e){t.isStriped=e},expression:"isStriped"}},[t._v("Striped")]),t._v(" "),l("b-check",{staticClass:"d-inline-block mr-3",model:{value:t.isHoverable,callback:function(e){t.isHoverable=e},expression:"isHoverable"}},[t._v("Hoverable")]),t._v(" "),l("b-check",{staticClass:"d-inline-block mr-3",model:{value:t.isBordered,callback:function(e){t.isBordered=e},expression:"isBordered"}},[t._v("Bordered")]),t._v(" "),l("b-check",{staticClass:"d-inline-block mr-3",model:{value:t.isBorderless,callback:function(e){t.isBorderless=e},expression:"isBorderless"}},[t._v("Borderless")]),t._v(" "),l("b-check",{staticClass:"d-inline-block mr-3",model:{value:t.isOutlined,callback:function(e){t.isOutlined=e},expression:"isOutlined"}},[t._v("Outlined")]),t._v(" "),l("b-check",{staticClass:"d-inline-block mr-3",model:{value:t.isSmall,callback:function(e){t.isSmall=e},expression:"isSmall"}},[t._v("Small")]),t._v(" "),l("b-check",{staticClass:"d-inline-block mr-3",model:{value:t.isFixed,callback:function(e){t.isFixed=e},expression:"isFixed"}},[t._v("Fixed")]),t._v(" "),l("b-check",{staticClass:"d-inline-block mr-3",model:{value:t.isSelectable,callback:function(e){t.isSelectable=e},expression:"isSelectable"}},[t._v("Selectable")]),t._v(" "),l("b-check",{staticClass:"d-inline-block mr-3",model:{value:t.isDark,callback:function(e){t.isDark=e},expression:"isDark"}},[t._v("Dark")]),t._v(" "),l("b-check",{staticClass:"d-inline-block mr-3",model:{value:t.isFootClone,callback:function(e){t.isFootClone=e},expression:"isFootClone"}},[t._v("Footer")]),t._v(" "),l("label",[t._v("\n      Header/footer:\n      "),l("b-select",{staticClass:"d-inline-block w-auto",attrs:{size:"sm",options:t.headerStyleOptions},model:{value:t.headerStyle,callback:function(e){t.headerStyle=e},expression:"headerStyle"}})],1)],1),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[l("b-form-group",[t._v("\n        Per page:  \n        "),l("b-select",{staticClass:"d-inline-block w-auto",attrs:{size:"sm",options:t.perPageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),t._v(" "),l("div",{staticClass:"col"},[l("b-form-group",[l("b-input",{staticClass:"d-inline-block w-auto float-sm-right",attrs:{size:"sm",placeholder:"Search..."},on:{input:function(e){return t.filter(e)}}})],1)],1)]),t._v(" "),l("div",{staticClass:"table-responsive"},[l("b-table",{attrs:{items:t.jsonData,"sort-icon-left":t.isSortIconLeft,fields:t.tableFields,"sticky-header":t.isStickyHeader,stacked:t.isStacked,striped:t.isStriped,hover:t.isHoverable,bordered:t.isBordered,borderless:t.isBorderless,outlined:t.isOutlined,small:t.isSmall,fixed:t.isFixed,selectable:t.isSelectable,dark:t.isDark,"foot-clone":t.isFootClone,"head-variant":t.headerStyle,"current-page":t.currentPage,"per-page":t.perPage}})],1),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm text-sm-left text-center mb-3 mb-sm-0"},[t.totalPages?l("span",{staticClass:"text-muted"},[t._v("Page "+t._s(t.currentPage)+" of "+t._s(t.totalPages))]):t._e()]),t._v(" "),l("div",{staticClass:"col-sm"},[t.totalItems?l("b-pagination",{staticClass:"justify-content-center justify-content-sm-end",attrs:{"total-rows":t.totalItems,"per-page":t.perPage,size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],1)]),t._v(" "),l("hr",{staticClass:"container-m-nx border-light my-4"}),t._v(" "),l("h6",{staticClass:"text-muted small font-weight-bold py-3 my-4"},[t._v("\n    Contextual classes\n  ")]),t._v(" "),t._m(1),t._v(" "),l("hr",{staticClass:"container-m-nx border-light my-4"}),t._v(" "),l("h6",{staticClass:"text-muted small font-weight-bold py-3 my-4"},[t._v("\n    Within card\n  ")]),t._v(" "),l("b-card",{attrs:{"no-body":"",header:"Table within card"}},[l("table",{staticClass:"table card-table"},[l("thead",{staticClass:"thead-light"},[l("tr",[l("th",[t._v("#")]),t._v(" "),l("th",[t._v("First Name")]),t._v(" "),l("th",[t._v("Last Name")]),t._v(" "),l("th",[t._v("Username")])])]),t._v(" "),l("tbody",[l("tr",[l("th",{attrs:{scope:"row"}},[t._v("1")]),t._v(" "),l("td",[t._v("Mark")]),t._v(" "),l("td",[t._v("Otto")]),t._v(" "),l("td",[t._v("@mdo")])]),t._v(" "),l("tr",[l("th",{attrs:{scope:"row"}},[t._v("2")]),t._v(" "),l("td",[t._v("Jacob")]),t._v(" "),l("td",[t._v("Thornton")]),t._v(" "),l("td",[t._v("@fat")])]),t._v(" "),l("tr",[l("th",{attrs:{scope:"row"}},[t._v("3")]),t._v(" "),l("td",[t._v("Larry")]),t._v(" "),l("td",[t._v("the Bird")]),t._v(" "),l("td",[t._v("@twitter")])])])])]),t._v(" "),l("hr",{staticClass:"container-m-nx border-light my-4"}),t._v(" "),l("h6",{staticClass:"text-muted small font-weight-bold py-3 my-4"},[t._v("\n    Responsive tables\n  ")]),t._v(" "),t._m(2)],1)},s=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("h4",{staticClass:"font-weight-bold py-3 mb-4"},[l("span",{staticClass:"text-muted font-weight-light"},[t._v("Tables /")]),t._v(" Bootstrap\n  ")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"demo-vertical-spacing"},[l("table",{staticClass:"table"},[l("thead",[l("tr",[l("th",[t._v("Type")]),t._v(" "),l("th",[t._v("Column heading")]),t._v(" "),l("th",[t._v("Column heading")]),t._v(" "),l("th",[t._v("Column heading")])])]),t._v(" "),l("tbody",[l("tr",{staticClass:"table-active"},[l("th",{attrs:{scope:"row"}},[t._v("Active")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",[l("th",{attrs:{scope:"row"}},[t._v("Default")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",{staticClass:"table-primary"},[l("th",{attrs:{scope:"row"}},[t._v("Primary")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",{staticClass:"table-secondary"},[l("th",{attrs:{scope:"row"}},[t._v("Secondary")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",{staticClass:"table-success"},[l("th",{attrs:{scope:"row"}},[t._v("Success")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",{staticClass:"table-danger"},[l("th",{attrs:{scope:"row"}},[t._v("Danger")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",{staticClass:"table-warning"},[l("th",{attrs:{scope:"row"}},[t._v("Warning")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",{staticClass:"table-info"},[l("th",{attrs:{scope:"row"}},[t._v("Info")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",{staticClass:"table-dark"},[l("th",{attrs:{scope:"row"}},[t._v("Dark")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])])])]),t._v(" "),l("table",{staticClass:"table table-dark"},[l("thead",[l("tr",[l("th",[t._v("#")]),t._v(" "),l("th",[t._v("Column heading")]),t._v(" "),l("th",[t._v("Column heading")]),t._v(" "),l("th",[t._v("Column heading")])])]),t._v(" "),l("tbody",[l("tr",{staticClass:"bg-primary"},[l("th",{attrs:{scope:"row"}},[t._v("1")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",[l("th",{attrs:{scope:"row"}},[t._v("2")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",{staticClass:"bg-secondary"},[l("th",{attrs:{scope:"row"}},[t._v("3")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",[l("th",{attrs:{scope:"row"}},[t._v("4")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",{staticClass:"bg-success"},[l("th",{attrs:{scope:"row"}},[t._v("5")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",[l("th",{attrs:{scope:"row"}},[t._v("6")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",{staticClass:"bg-danger"},[l("th",{attrs:{scope:"row"}},[t._v("7")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",[l("th",{attrs:{scope:"row"}},[t._v("8")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",{staticClass:"bg-warning"},[l("th",{attrs:{scope:"row"}},[t._v("9")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",[l("th",{attrs:{scope:"row"}},[t._v("10")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])]),t._v(" "),l("tr",{staticClass:"bg-info"},[l("th",{attrs:{scope:"row"}},[t._v("11")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")]),t._v(" "),l("td",[t._v("Column content")])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"demo-vertical-spacing"},[l("div",{staticClass:"table-responsive"},[l("table",{staticClass:"table mb-0"},[l("thead",[l("tr",[l("th",[t._v("#")]),t._v(" "),l("th",[t._v("Table heading")]),t._v(" "),l("th",[t._v("Table heading")]),t._v(" "),l("th",[t._v("Table heading")]),t._v(" "),l("th",[t._v("Table heading")]),t._v(" "),l("th",[t._v("Table heading")]),t._v(" "),l("th",[t._v("Table heading")])])]),t._v(" "),l("tbody",[l("tr",[l("th",{attrs:{scope:"row"}},[t._v("1")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")])]),t._v(" "),l("tr",[l("th",{attrs:{scope:"row"}},[t._v("2")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")])]),t._v(" "),l("tr",[l("th",{attrs:{scope:"row"}},[t._v("3")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")])])])])]),t._v(" "),l("div",{staticClass:"table-responsive"},[l("table",{staticClass:"table table-bordered mb-0"},[l("thead",[l("tr",[l("th",[t._v("#")]),t._v(" "),l("th",[t._v("Table heading")]),t._v(" "),l("th",[t._v("Table heading")]),t._v(" "),l("th",[t._v("Table heading")]),t._v(" "),l("th",[t._v("Table heading")]),t._v(" "),l("th",[t._v("Table heading")]),t._v(" "),l("th",[t._v("Table heading")])])]),t._v(" "),l("tbody",[l("tr",[l("th",{attrs:{scope:"row"}},[t._v("1")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")])]),t._v(" "),l("tr",[l("th",{attrs:{scope:"row"}},[t._v("2")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")])]),t._v(" "),l("tr",[l("th",{attrs:{scope:"row"}},[t._v("3")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")]),t._v(" "),l("td",[t._v("Table cell")])])])])])])}],n=(l("d81d"),l("fb6a"),l("4de4"),l("c975"),l("a15b"),{name:"tables-bootstrap",metaInfo:{title:"Bootstrap - Tables"},data:function(){return{jsonData:[],originalJsonData:[],perPageOptions:[10,20,30,40,50],perPage:10,currentPage:1,headerStyleOptions:[{text:"Default",value:null},{text:"Light",value:"light"},{text:"Dark",value:"dark"}],isStickyHeader:!1,isSortable:!1,isSortIconLeft:!1,isStacked:!1,isStriped:!1,isHoverable:!1,isBordered:!1,isBorderless:!1,isOutlined:!1,isSmall:!1,isFixed:!1,isSelectable:!1,isDark:!1,isFootClone:!1,headerStyle:null}},computed:{totalItems:function(){return this.jsonData.length},totalPages:function(){return Math.floor(this.totalItems/this.perPage)||(this.totalItems?1:0)},tableFields:function(){var t=this;return this.jsonData[0]?Object.keys(this.jsonData[0]).map((function(e){return{key:e,sortable:t.isSortable}})):[]}},created:function(){var t=this,e=new XMLHttpRequest;e.open("GET","".concat(this.publicUrl,"json/table-data.json")),e.onload=function(){var l=JSON.parse(e.response);t.jsonData=l,t.originalJsonData=l.slice(0)},e.send()},methods:{filter:function(t){var e=t.toLowerCase(),l=this.originalJsonData.filter((function(t){return-1!==Object.keys(t).map((function(e){return String(t[e])})).join("|").toLowerCase().indexOf(e)||!e}));this.jsonData=l}}}),o=n,v=l("2877"),c=Object(v["a"])(o,a,s,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0cc434.1f356f40.js.map