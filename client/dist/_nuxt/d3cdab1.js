(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{377:function(t,e,n){var content=n(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("26ee9881",content,!0,{sourceMap:!1})},378:function(t,e,n){"use strict";var r=n(74),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",[e("footer",[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 wow fadeIn"},[e("div",{staticClass:"term_condition"},[e("ul",[e("li",[e("a",{attrs:{href:"#"}},[t._v("About")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Privacy policy")])])])])]),t._v(" "),e("div",{staticClass:"col-md-6 wow fadeIn"},[e("div",{staticClass:"social"},[e("ul",{staticClass:"justify-content-end"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-brands fa-facebook"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-brands fa-twitter"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-brands fa-youtube"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-brands fa-instagram"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-brands fa-tiktok"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-brands fa-linkedin-in"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-brands fa-pinterest-p"})])])])])])])])]),t._v(" "),e("a",{staticStyle:{"text-decoration":"none"},attrs:{id:"button"}})])}],!1,null,null,null);e.a=component.exports},379:function(t,e,n){"use strict";n(44);var r=n(6),o=(n(76),n(75),n(51),{data:function(){return{categories:[],searchInput:[],parent:""}},mounted:function(){this.fetchCategories(),this.initAutocomplete()},methods:{searchurl:function(){var t=$(".parent").val(),e=$(".selected_slug").val();1!=t&&2!=t||this.$router.push("/category/download?slug="+e),3==t&&this.$router.push("/videos/watch?slug="+e),4==t&&this.$router.push("/course/download?slug="+e)},forSearchurl:function(){var t=$(".parent").val(),e=$(".selected_slug").val();console.log("parentID "+t),console.log("Slug "+e),1!=t&&2!=t||this.$router.push("/category/download?slug="+e),3==t&&this.$router.push("/videos/watch?slug="+e),4==t&&this.$router.push("/course/download?slug="+e)},retrunUrl:function(){this.$router.push({name:"/videos/watch",params:{slug:ui.item.slug}})},fetchCategories:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/unauthenticate/getCategoryList");case 3:n=e.sent,t.categories=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching categories:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},initAutocomplete:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t,$("#search").autocomplete({source:function(e,o){return(n=n||Object(r.a)(regeneratorRuntime.mark((function e(n,r){var o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/unauthenticate/autocomplete?q=".concat(n.term));case 3:o=e.sent,l=o.data.map((function(t){return{label:t.label,value:t.id,slug:t.slug,parent_id:t.parent_id}})),r(l),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)},minLength:3,select:function(t,e){var n="parent ID: ".concat(e.item.parent_id,"---- slug: ").concat(e.item.slug,"----id: ").concat(e.item.value);console.log(n);var r=e.item.parent_id;$(".parent").val(r),$(".selected_slug").val(e.item.slug),$(".clickbtn").click()}});case 2:case"end":return e.stop()}}),e)})))()}}}),l=o,c=(n(381),n(74)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"top_bar _nav",attrs:{bis_skin_checked:"1"}},[e("div",{staticClass:"container-fluid",attrs:{bis_skin_checked:"1"}},[e("div",{staticClass:"row",attrs:{bis_skin_checked:"1"}},[e("div",{staticClass:"col-md-12",attrs:{bis_skin_checked:"1"}},[e("nav",{staticClass:"navbar navbar-expand-sm bg-body-tertiary navbar bg-body-tertiary fixed-top"},[e("div",{staticClass:"container-fluid"},[e("nuxt-link",{staticClass:"navbar-brand navbar_brand",attrs:{to:"/"}},[e("h6",[t._v("FunFlix HD")])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"nav_oplin navbar-nav ms-auto mb-lg-0 navbar-nav me-auto mb-2 mb-lg-0"},t._l(t.categories,(function(n){return e("li",{key:n.id,staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link",attrs:{href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[e("div",[e("i",{class:n.file}),t._v("\r\n                                                "+t._s(n.name)+"\r\n                                            ")]),t._v(" "),e("i",{staticClass:"fa-solid fa-caret-down"})]),t._v(" "),n.children.length>0?e("ul",{staticClass:"dropdown-menu"},t._l(n.children,(function(n){return e("li",{key:n.id},[1===n.parent_id?e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/category/category-list?slug="+n.slug}},[t._v(t._s(n.name))]):t._e(),t._v(" "),2===n.parent_id?e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/games/games-list?slug="+n.slug}},[t._v(t._s(n.name))]):t._e(),t._v(" "),3===n.parent_id?e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/videos/videodetails?slug="+n.slug}},[t._v(t._s(n.name))]):t._e(),t._v(" "),4===n.parent_id?e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/course/coursedetails?slug="+n.slug}},[t._v(t._s(n.name))]):t._e()],1)})),0):t._e()])})),0),t._v(" "),e("form",{staticClass:"d-flex s-form",on:{submit:function(e){return e.preventDefault(),t.searchurl()}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"form-control",attrs:{id:"search",placeholder:"Search Movies,Software,Games,Tutorial..."},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),t._v(" "),e("input",{staticClass:"parent",attrs:{type:"hidden"}}),t._v(" "),e("input",{staticClass:"selected_slug",attrs:{type:"hidden"}}),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticStyle:{display:"none"}},[e("form",{staticClass:"forms-sample",attrs:{id:"formrest",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.forSearchurl()}}},[e("input",{staticClass:"parent",attrs:{type:"text"}}),t._v(" "),e("input",{staticClass:"selected_slug",attrs:{type:"text"}}),t._v(" "),t._m(2)])])])],1)])])])])])])}),[function(){var t=this._self._c;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this._self._c;return t("button",{staticClass:"btn btn-outline-success d-flex align-items-center",attrs:{type:"submit"}},[t("i",{staticClass:"fa-solid fa-magnifying-glass"})])},function(){var t=this._self._c;return t("button",{staticClass:"btn btn-success px-5 w-100 clickbtn",attrs:{type:"submit"}},[t("i",{staticClass:"bx bx-check-circle mr-1"}),this._v(" Submit")])}],!1,null,"54de6b9c",null);e.a=component.exports},380:function(t,e,n){"use strict";var r=n(74),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"support pt-4"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row py-"},[e("div",{staticClass:"col-md-6 m-auto"},[e("div",{staticClass:"big_title wow fadeIn"},[e("h2",[t._v("FunFlix HD SUPPORT ")]),t._v(" "),e("h1",[t._v("The help you need, when you need it")])])])]),t._v(" "),e("div",{staticClass:"row py-4"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"support_content wow fadeIn"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/div.mb-8 (2).png",alt:""}}),t._v(" "),e("h1",[t._v("Community")]),t._v(" "),e("p",[t._v("Connect with a community of brands, partners, and fellow merchants who understand FunFlix HD.")]),t._v(" "),e("a",{staticClass:"btn btn-read",attrs:{href:"#"}},[t._v("Join "),e("i",{staticClass:"fa-solid fa-angle-right"})])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"support_content wow fadeIn"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/div.mb-8 (3).png",alt:""}}),t._v(" "),e("h1",[t._v("Help center")]),t._v(" "),e("p",[t._v("Find answers with a dedicated helpdesk resource full of articles and videos from our Support team.")]),t._v(" "),e("a",{staticClass:"btn btn-read",attrs:{href:"#"}},[t._v("Join "),e("i",{staticClass:"fa-solid fa-angle-right"})])])])])])]),t._v(" "),e("section",{staticClass:"grow_business"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 m-auto text-center"},[e("div",{staticClass:"grow_content wow fadeIn"},[e("a",{attrs:{href:"https://fansgame.online",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/ads_banner.gif",loading:"lazy",alt:""}})])])])])])])])}],!1,null,null,null);e.a=component.exports},381:function(t,e,n){"use strict";n(377)},382:function(t,e,n){var r=n(169)((function(i){return i[1]}));r.push([t.i,"@media(min-width:991px){.s-form[data-v-54de6b9c]{width:40%}}",""]),r.locals={},t.exports=r},392:function(t,e,n){var content=n(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("7d8f56b4",content,!0,{sourceMap:!1})},400:function(t,e,n){"use strict";n(392)},401:function(t,e,n){var r=n(169)((function(i){return i[1]}));r.push([t.i,".eseheight[data-v-21c74bf3]{display:block;min-height:30vh}.load-more-btn[data-v-21c74bf3]{background-color:#3498db;border:none;color:#fff;cursor:pointer;padding:10px 15px;transition:background-color .3s}.load-more-btn[data-v-21c74bf3]:disabled{background-color:#95a5a6;cursor:not-allowed}.load-more-btn span[data-v-21c74bf3]{display:inline-block;transition:opacity .3s}.load-more-btn:disabled span[data-v-21c74bf3]:first-child{opacity:0}.load-more-btn:disabled span[data-v-21c74bf3]:last-child{opacity:1}",""]),r.locals={},t.exports=r},417:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(92),n(75),n(51),n(379)),l=n(380),c=n(378),d={components:{TopBar:o.a,Support:l.a,Footer:c.a},data:function(){return{downloadlink:"",loading:!1,showLoader:!1,categoryname:"",page:1,items:[]}},watch:{$route:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.$route.query.slug,n.showLoader=!0,t.next=5,n.$axios.get("/unauthenticate/findCategorys",{params:{slug:n.$route.query.slug}});case 5:e=t.sent,n.showLoader=!1,n.items=e.data.result,n.categoryname=e.data.categoryname,t.next=13;break;case 11:t.prev=11,t.t0=t.catch(0);case 13:case"end":return t.stop()}}),t,null,[[0,11]])})))()}},head:{title:"Category List"},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return setTimeout((function(){t.showLoader=!1}),1e3),e.next=3,t.loadMore();case 3:t.fetchcatData();case 4:case"end":return e.stop()}}),e)})))()},methods:{copyLink:function(){$("#copymsg").html(),document.getElementById("linkInput").select();try{document.execCommand("copy"),$("#copymsg").html("Link copied!")}catch(t){console.error("Unable to copy to clipboard:",t),$("#copymsg").html("Copy to clipboard failed. Please copy the link manually.")}},fetchcatData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/unauthenticate/findCategorys",{params:{slug:t.$route.query.slug}});case 3:n=e.sent,t.items=n.data.result,t.categoryname=n.data.categoryname,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()},loadMore:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loading){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t.loading=!0,e.next=6,t.$axios.get("/unauthenticate/catloadMorePagination",{params:{slug:t.$route.query.slug,page:t.page+1}});case 6:n=e.sent,t.items=t.items.concat(n.data.data),t.page++,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error("Error loading more data",e.t0);case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})))()},sharelink:function(t){console.log("download_link: "+t),this.downloadlink=t}}},v=(n(400),n(74)),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("TopBar"),t._v(" "),e("br"),e("br"),t._v(" "),e("div",{staticClass:"essential_ cat_banner"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"essential_box eseheight"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"row essential_d"},[e("div",{staticClass:"col-md-7 d-flex align-items-center"},[e("h1",{staticClass:"m-0 ms-3"},[t._v(t._s(t.categoryname))])]),t._v(" "),t._m(0)])])])])])])])]),t._v(" "),e("section",{staticClass:"n_apps"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-10"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showLoader,expression:"showLoader"}],attrs:{id:"loader-main"}},[e("div",{attrs:{id:"loader"}})]),t._v(" "),e("div",{staticClass:"n_apps_grid"},t._l(t.items,(function(n,r){return e("div",{key:r,staticClass:"n_apps_view"},[e("img",{staticClass:"img-fluid v_app_img",attrs:{src:n.thumnail_img,loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"n_view"},[e("nuxt-link",{attrs:{to:"/category/download?slug="+n.pro_slug}},[t._v(t._s(n.p_name))]),t._v(" "),e("div",{staticClass:"m_apps_btns"},[e("div",{staticClass:"btn-group"},[e("div",{},[e("nuxt-link",{staticClass:"btn_download btn-sm",attrs:{to:"/category/download?slug="+n.pro_slug,type:"button"}},[e("img",{attrs:{src:"/images/btn_download.png",alt:""}})])],1),t._v(" "),e("div",{},[e("button",{staticClass:"btn_search btn-sm share_btns",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#share"},on:{click:function(e){return t.sharelink(n.download_link)}}},[e("img",{attrs:{src:"/images/share-100.png",alt:""}})])])])])],1)])})),0),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"text-center"},[e("button",{staticClass:"load-more-btn text-center",attrs:{disabled:t.loading},on:{click:t.loadMore}},[t.loading?e("span",[t._v("Loading...")]):e("span",[t._v("Load More")])])])]),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"share",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body"},[e("div",{staticClass:"share_options"},[t._m(2),t._v(" "),e("div",[e("center",[e("h3",{attrs:{id:"copymsg"}})]),t._v(" "),e("h6",{staticStyle:{color:"#000"}},[t._v("Share this with your social Community")]),t._v(" "),t._m(3)],1),t._v(" "),e("div",{staticClass:"copy_link"},[e("h6",{staticStyle:{color:"#000"}},[t._v("Or copy link : ")]),t._v(" "),e("div",{staticClass:"input_box"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.downloadlink,expression:"downloadlink"}],attrs:{type:"text",id:"linkInput"},domProps:{value:t.downloadlink},on:{input:function(e){e.target.composing||(t.downloadlink=e.target.value)}}}),t._v(" "),e("button",{attrs:{type:"button"},on:{click:function(e){return t.copyLink()}}},[t._v("Copy ")])])])])])])])]),t._v(" "),e("Support"),t._v(" "),e("Footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"essential_d_store_link text-center"},[e("a",{attrs:{href:"#"}},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/Play.png",loading:"lazy",alt:""}})]),t._v(" "),e("a",{attrs:{href:"#"}},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/Apple.png",loading:"lazy",alt:""}})])]),t._v(" "),e("p",{staticClass:"text-end me-3"},[t._v("Download FunFlix HD app for watching popular Netflix movies and series for free.")])])},function(){var t=this._self._c;return t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"ads_sec mt-0 cat_page_ads",staticStyle:{"padding-right":"40px",position:"relative"}},[t("div",{staticClass:"ads_img"},[t("a",{attrs:{href:"#"}},[t("img",{attrs:{src:"/images/Neutral_Modern Elegant_Watch_Instagram_Post.png",alt:""}})])]),this._v(" "),t("div",{staticClass:"ads_img"},[t("iframe",{staticStyle:{width:"300px",height:"250px"},attrs:{src:"//s0.2mdn.net/dfp/1754321/4628264607/1695719733125/300 x 250/index.html",width:"300",height:"250",frameborder:"0",scrolling:"no",allowfullscreen:"true"}})])])])},function(){var t=this._self._c;return t("div",{staticClass:"d-flex justify-content-end"},[t("div",[t("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"socials"},[e("a",{attrs:{href:"https:/web.whatsapp.com",target:"_blank"}},[e("img",{attrs:{src:"/images/whatsapp-100.png",alt:""}})]),t._v(" "),e("a",{attrs:{href:"https://www.messenger.com/",target:"_blank"}},[e("img",{attrs:{src:"/images/facebook-messenger-100.png",alt:""}})]),t._v(" "),e("a",{attrs:{href:"https://web.telegram.org/",target:"_blank"}},[e("img",{attrs:{src:"/images/telegram.png",alt:""}})])])}],!1,null,"21c74bf3",null);e.default=component.exports}}]);