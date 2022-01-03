(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea23f76a"],{4651:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"media align-items-center py-3 mb-3"},[e("img",{staticClass:"d-block ui-w-100 rounded-circle",attrs:{src:t.publicUrl+"img/avatars/"+t.userData.avatar,alt:""}}),t._v(" "),e("div",{staticClass:"media-body ml-4"},[e("h4",{staticClass:"font-weight-bold mb-0"},[t._v(t._s(t.userData.name)+" "),e("span",{staticClass:"text-muted font-weight-normal"},[t._v("@"+t._s(t.userData.username))])]),t._v(" "),e("div",{staticClass:"text-muted mb-2"},[t._v("ID: "+t._s(t.userData.id))]),t._v(" "),e("b-btn",{attrs:{variant:"primary",size:"sm"}},[t._v("Edit")]),t._v(" \n      "),e("b-btn",{attrs:{variant:"default",size:"sm"}},[t._v("Profile")]),t._v(" \n      "),e("b-btn",{attrs:{variant:"default icon-btn",size:"sm"}},[e("i",{staticClass:"ion ion-md-mail"})])],1)]),t._v(" "),e("b-card",{staticClass:"mb-4",attrs:{"no-body":""}},[e("b-card-body",[e("table",{staticClass:"table user-view-table m-0"},[e("tbody",[e("tr",[e("td",[t._v("Registered:")]),t._v(" "),e("td",[t._v(t._s(t.userData.registered))])]),t._v(" "),e("tr",[e("td",[t._v("Latest activity:")]),t._v(" "),e("td",[t._v(t._s(t.userData.latest_activity))])]),t._v(" "),e("tr",[e("td",[t._v("Verified:")]),t._v(" "),e("td",[t.userData.verified?e("span",[e("span",{staticClass:"ion ion-md-checkmark text-primary"}),t._v("  Yes")]):e("span",[e("span",{staticClass:"ion ion-md-close text-light"}),t._v("  No")])])]),t._v(" "),e("tr",[e("td",[t._v("Role:")]),t._v(" "),e("td",[1===t.userData.role?e("span",[t._v("User")]):t._e(),t._v(" "),2===t.userData.role?e("span",[t._v("Author")]):t._e(),t._v(" "),3===t.userData.role?e("span",[t._v("Staff")]):t._e(),t._v(" "),4===t.userData.role?e("span",[t._v("Admin")]):t._e()])]),t._v(" "),e("tr",[e("td",[t._v("Status:")]),t._v(" "),e("td",[1===t.userData.status?e("b-badge",{attrs:{variant:"outline-success"}},[t._v("Active")]):t._e(),t._v(" "),2===t.userData.status?e("b-badge",{attrs:{variant:"outline-danger"}},[t._v("Banned")]):t._e(),t._v(" "),3===t.userData.status?e("b-badge",{attrs:{variant:"outline-default"}},[t._v("Deleted")]):t._e()],1)])])])]),t._v(" "),e("hr",{staticClass:"border-light m-0"}),t._v(" "),e("div",{staticClass:"table-responsive"},[e("b-table",{staticClass:"card-table m-0",attrs:{items:t.userData.permissions},scopedSlots:t._u([{key:"cell(read)",fn:function(t){return[e("span",{staticClass:"ion",class:{"ion-md-checkmark text-primary":t.item.read,"ion-md-close text-light":!t.item.read}})]}},{key:"cell(write)",fn:function(t){return[e("span",{staticClass:"ion",class:{"ion-md-checkmark text-primary":t.item.write,"ion-md-close text-light":!t.item.write}})]}},{key:"cell(create)",fn:function(t){return[e("span",{staticClass:"ion",class:{"ion-md-checkmark text-primary":t.item.create,"ion-md-close text-light":!t.item.create}})]}},{key:"cell(delete)",fn:function(t){return[e("span",{staticClass:"ion",class:{"ion-md-checkmark text-primary":t.item.delete,"ion-md-close text-light":!t.item.delete}})]}}])})],1)],1),t._v(" "),e("b-card",{attrs:{"no-body":""}},[e("div",{staticClass:"row no-gutters row-bordered"},[e("div",{staticClass:"d-flex col-md align-items-center"},[e("a",{staticClass:"card-body d-block text-body",attrs:{href:"javascript:void(0)"}},[e("div",{staticClass:"text-muted small line-height-1"},[t._v("Posts")]),t._v(" "),e("div",{staticClass:"text-xlarge"},[t._v(t._s(t.formatInt(t.userData.posts)))])])]),t._v(" "),e("div",{staticClass:"d-flex col-md align-items-center"},[e("a",{staticClass:"card-body d-block text-body",attrs:{href:"javascript:void(0)"}},[e("div",{staticClass:"text-muted small line-height-1"},[t._v("Followers")]),t._v(" "),e("div",{staticClass:"text-xlarge"},[t._v(t._s(t.formatInt(t.userData.followers)))])])]),t._v(" "),e("div",{staticClass:"d-flex col-md align-items-center"},[e("a",{staticClass:"card-body d-block text-body",attrs:{href:"javascript:void(0)"}},[e("div",{staticClass:"text-muted small line-height-1"},[t._v("Following")]),t._v(" "),e("div",{staticClass:"text-xlarge"},[t._v(t._s(t.formatInt(t.userData.following)))])])])]),t._v(" "),e("hr",{staticClass:"border-light m-0"}),t._v(" "),e("b-card-body",[e("table",{staticClass:"table user-view-table m-0"},[e("tbody",[e("tr",[e("td",[t._v("Username:")]),t._v(" "),e("td",[t._v(t._s(t.userData.username))])]),t._v(" "),e("tr",[e("td",[t._v("Name:")]),t._v(" "),e("td",[t._v(t._s(t.userData.name))])]),t._v(" "),e("tr",[e("td",[t._v("E-mail:")]),t._v(" "),e("td",[t._v(t._s(t.userData.email))])]),t._v(" "),e("tr",[e("td",[t._v("Company:")]),t._v(" "),e("td",[t._v(t._s(t.userData.company))])])])]),t._v(" "),e("h6",{staticClass:"mt-4 mb-3"},[t._v("Social links")]),t._v(" "),e("table",{staticClass:"table user-view-table m-0"},[e("tbody",[t.userData.info.twitter?e("tr",[e("td",[t._v("Twitter:")]),t._v(" "),e("td",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.userData.info.twitter))])])]):t._e(),t._v(" "),t.userData.info.facebook?e("tr",[e("td",[t._v("Facebook:")]),t._v(" "),e("td",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.userData.info.facebook))])])]):t._e(),t._v(" "),t.userData.info.google?e("tr",[e("td",[t._v("Google+:")]),t._v(" "),e("td",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.userData.info.google))])])]):t._e(),t._v(" "),t.userData.info.linkedin?e("tr",[e("td",[t._v("LinkedIn:")]),t._v(" "),e("td",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.userData.info.linkedin))])])]):t._e(),t._v(" "),t.userData.info.instagram?e("tr",[e("td",[t._v("Instagram:")]),t._v(" "),e("td",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.userData.info.instagram))])])]):t._e()])]),t._v(" "),e("h6",{staticClass:"mt-4 mb-3"},[t._v("Personal info")]),t._v(" "),e("table",{staticClass:"table user-view-table m-0"},[e("tbody",[t.userData.info.birthday?e("tr",[e("td",[t._v("Birthday:")]),t._v(" "),e("td",[t._v(t._s(t.userData.info.birthday))])]):t._e(),t._v(" "),t.userData.info.country?e("tr",[e("td",[t._v("Country:")]),t._v(" "),e("td",[t._v(t._s(t.userData.info.country))])]):t._e(),t._v(" "),t.userData.info.languages.length?e("tr",[e("td",[t._v("Languages:")]),t._v(" "),e("td",[t._v(t._s(t.userData.info.languages.join(", ")))])]):t._e()])]),t._v(" "),e("h6",{staticClass:"mt-4 mb-3"},[t._v("Contacts")]),t._v(" "),e("table",{staticClass:"table user-view-table m-0"},[e("tbody",[t.userData.info.phone?e("tr",[e("td",[t._v("Phone:")]),t._v(" "),e("td",[t._v(t._s(t.userData.info.phone))])]):t._e(),t._v(" "),t.userData.info.website?e("tr",[e("td",[t._v("Website:")]),t._v(" "),e("td",[t._v(t._s(t.userData.info.website))])]):t._e()])]),t._v(" "),e("h6",{staticClass:"mt-4 mb-3"},[t._v("Interests")]),t._v(" "),e("table",{staticClass:"table user-view-table m-0"},[e("tbody",[t.userData.info.music.length?e("tr",[e("td",[t._v("Favorite music:")]),t._v(" "),e("td",[t._v(t._s(t.userData.info.music.join(", ")))])]):t._e(),t._v(" "),t.userData.info.movies.length?e("tr",[e("td",[t._v("Favorite movies:")]),t._v(" "),e("td",[t._v(t._s(t.userData.info.movies.join(", ")))])]):t._e()])])])],1)],1)},i=[],r=e("6612"),n={name:"pages-user-view",metaInfo:{title:"User view - Pages"},data:function(){return{userData:{avatar:"5-small.png",name:"Nelle Maxwell",username:"nmaxwell",email:"nmaxwell@mail.com",company:"Company Ltd.",id:3425433,registered:"01/23/2017",latest_activity:"01/23/2018",verified:!0,role:1,status:1,permissions:[{module:"Users",read:!0,write:!1,create:!1,delete:!1},{module:"Articles",read:!0,write:!0,create:!0,delete:!1},{module:"Staff",read:!1,write:!1,create:!1,delete:!1}],posts:25,followers:534,following:236,info:{birthday:"May 3, 1995",country:"Canada",languages:["English"],phone:"+0 (123) 456 7891",website:"",music:["Rock","Alternative","Electro","Drum & Bass","Dance"],movies:["The Green Mile","Pulp Fiction","Back to the Future","WALL·E","Django Unchained","The Truman Show","Home Alone","Seven Pounds"],twitter:"https://twitter.com/user",facebook:"https://www.facebook.com/user",google:"",linkedin:"",instagram:"https://www.instagram.com/user"}}}},methods:{formatInt:function(t){return r(t).format("0,0")}}},o=n,l=(e("fc58"),e("2877")),v=Object(l["a"])(o,s,i,!1,null,null,null);a["default"]=v.exports},5214:function(t,a,e){},fc58:function(t,a,e){"use strict";e("5214")}}]);
//# sourceMappingURL=chunk-ea23f76a.a8ae780d.js.map