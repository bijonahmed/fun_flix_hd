(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{377:function(t,e,r){var content=r(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(170).default)("26ee9881",content,!0,{sourceMap:!1})},378:function(t,e,r){"use strict";var l=r(74),component=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",[e("footer",[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 wow fadeIn"},[e("div",{staticClass:"term_condition"},[e("ul",[e("li",[e("a",{attrs:{href:"#"}},[t._v("About")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Privacy policy")])])])])]),t._v(" "),e("div",{staticClass:"col-md-6 wow fadeIn"},[e("div",{staticClass:"social"},[e("ul",{staticClass:"justify-content-end"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-brands fa-facebook"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-brands fa-twitter"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-brands fa-youtube"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-brands fa-instagram"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-brands fa-tiktok"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-brands fa-linkedin-in"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-brands fa-pinterest-p"})])])])])])])])]),t._v(" "),e("a",{staticStyle:{"text-decoration":"none"},attrs:{id:"button"}})])}],!1,null,null,null);e.a=component.exports},379:function(t,e,r){"use strict";r(44);var l=r(6),n=(r(76),r(75),r(51),{data:function(){return{categories:[],searchInput:[],parent:""}},mounted:function(){this.fetchCategories(),this.initAutocomplete()},methods:{searchurl:function(){var t=$(".parent").val(),e=$(".selected_slug").val();1!=t&&2!=t||this.$router.push("/category/download?slug="+e),3==t&&this.$router.push("/videos/watch?slug="+e),4==t&&this.$router.push("/course/download?slug="+e)},forSearchurl:function(){var t=$(".parent").val(),e=$(".selected_slug").val();console.log("parentID "+t),console.log("Slug "+e),1!=t&&2!=t||this.$router.push("/category/download?slug="+e),3==t&&this.$router.push("/videos/watch?slug="+e),4==t&&this.$router.push("/course/download?slug="+e)},retrunUrl:function(){this.$router.push({name:"/videos/watch",params:{slug:ui.item.slug}})},fetchCategories:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/unauthenticate/getCategoryList");case 3:r=e.sent,t.categories=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching categories:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},initAutocomplete:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t,$("#search").autocomplete({source:function(e,n){return(r=r||Object(l.a)(regeneratorRuntime.mark((function e(r,l){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/unauthenticate/autocomplete?q=".concat(r.term));case 3:n=e.sent,o=n.data.map((function(t){return{label:t.label,value:t.id,slug:t.slug,parent_id:t.parent_id}})),l(o),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)},minLength:3,select:function(t,e){var r="parent ID: ".concat(e.item.parent_id,"---- slug: ").concat(e.item.slug,"----id: ").concat(e.item.value);console.log(r);var l=e.item.parent_id;$(".parent").val(l),$(".selected_slug").val(e.item.slug),$(".clickbtn").click()}});case 2:case"end":return e.stop()}}),e)})))()}}}),o=n,c=(r(381),r(74)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"top_bar _nav",attrs:{bis_skin_checked:"1"}},[e("div",{staticClass:"container-fluid",attrs:{bis_skin_checked:"1"}},[e("div",{staticClass:"row",attrs:{bis_skin_checked:"1"}},[e("div",{staticClass:"col-md-12",attrs:{bis_skin_checked:"1"}},[e("nav",{staticClass:"navbar navbar-expand-sm bg-body-tertiary navbar bg-body-tertiary fixed-top"},[e("div",{staticClass:"container-fluid"},[e("nuxt-link",{staticClass:"navbar-brand navbar_brand",attrs:{to:"/"}},[e("h6",[t._v("FunFlix HD")])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"nav_oplin navbar-nav ms-auto mb-lg-0 navbar-nav me-auto mb-2 mb-lg-0"},t._l(t.categories,(function(r){return e("li",{key:r.id,staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link",attrs:{href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[e("div",[e("i",{class:r.file}),t._v("\r\n                                                "+t._s(r.name)+"\r\n                                            ")]),t._v(" "),e("i",{staticClass:"fa-solid fa-caret-down"})]),t._v(" "),r.children.length>0?e("ul",{staticClass:"dropdown-menu"},t._l(r.children,(function(r){return e("li",{key:r.id},[1===r.parent_id?e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/category/category-list?slug="+r.slug}},[t._v(t._s(r.name))]):t._e(),t._v(" "),2===r.parent_id?e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/games/games-list?slug="+r.slug}},[t._v(t._s(r.name))]):t._e(),t._v(" "),3===r.parent_id?e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/videos/videodetails?slug="+r.slug}},[t._v(t._s(r.name))]):t._e(),t._v(" "),4===r.parent_id?e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/course/coursedetails?slug="+r.slug}},[t._v(t._s(r.name))]):t._e()],1)})),0):t._e()])})),0),t._v(" "),e("form",{staticClass:"d-flex s-form",on:{submit:function(e){return e.preventDefault(),t.searchurl()}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"form-control",attrs:{id:"search",placeholder:"Search Movies,Software,Games,Tutorial..."},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),t._v(" "),e("input",{staticClass:"parent",attrs:{type:"hidden"}}),t._v(" "),e("input",{staticClass:"selected_slug",attrs:{type:"hidden"}}),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticStyle:{display:"none"}},[e("form",{staticClass:"forms-sample",attrs:{id:"formrest",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.forSearchurl()}}},[e("input",{staticClass:"parent",attrs:{type:"text"}}),t._v(" "),e("input",{staticClass:"selected_slug",attrs:{type:"text"}}),t._v(" "),t._m(2)])])])],1)])])])])])])}),[function(){var t=this._self._c;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this._self._c;return t("button",{staticClass:"btn btn-outline-success d-flex align-items-center",attrs:{type:"submit"}},[t("i",{staticClass:"fa-solid fa-magnifying-glass"})])},function(){var t=this._self._c;return t("button",{staticClass:"btn btn-success px-5 w-100 clickbtn",attrs:{type:"submit"}},[t("i",{staticClass:"bx bx-check-circle mr-1"}),this._v(" Submit")])}],!1,null,"54de6b9c",null);e.a=component.exports},380:function(t,e,r){"use strict";var l=r(74),component=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"support pt-4"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row py-"},[e("div",{staticClass:"col-md-6 m-auto"},[e("div",{staticClass:"big_title wow fadeIn"},[e("h2",[t._v("FunFlix HD SUPPORT ")]),t._v(" "),e("h1",[t._v("The help you need, when you need it")])])])]),t._v(" "),e("div",{staticClass:"row py-4"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"support_content wow fadeIn"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/div.mb-8 (2).png",alt:""}}),t._v(" "),e("h1",[t._v("Community")]),t._v(" "),e("p",[t._v("Connect with a community of brands, partners, and fellow merchants who understand FunFlix HD.")]),t._v(" "),e("a",{staticClass:"btn btn-read",attrs:{href:"#"}},[t._v("Join "),e("i",{staticClass:"fa-solid fa-angle-right"})])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"support_content wow fadeIn"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/div.mb-8 (3).png",alt:""}}),t._v(" "),e("h1",[t._v("Help center")]),t._v(" "),e("p",[t._v("Find answers with a dedicated helpdesk resource full of articles and videos from our Support team.")]),t._v(" "),e("a",{staticClass:"btn btn-read",attrs:{href:"#"}},[t._v("Join "),e("i",{staticClass:"fa-solid fa-angle-right"})])])])])])]),t._v(" "),e("section",{staticClass:"grow_business"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 m-auto text-center"},[e("div",{staticClass:"grow_content wow fadeIn"},[e("a",{attrs:{href:"https://fansgame.online",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/ads_banner.gif",loading:"lazy",alt:""}})])])])])])])])}],!1,null,null,null);e.a=component.exports},381:function(t,e,r){"use strict";r(377)},382:function(t,e,r){var l=r(169)((function(i){return i[1]}));l.push([t.i,"@media(min-width:991px){.s-form[data-v-54de6b9c]{width:40%}}",""]),l.locals={},t.exports=l},383:function(t,e,r){var content=r(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(170).default)("f7a1c63c",content,!0,{sourceMap:!1})},384:function(t,e,r){var content=r(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(170).default)("569b8f14",content,!0,{sourceMap:!1})},385:function(t,e,r){"use strict";r(383)},386:function(t,e,r){var l=r(169)((function(i){return i[1]}));l.push([t.i,".load-more-btn[data-v-7177b782]{background-color:#3498db;border:none;color:#fff;cursor:pointer;padding:10px 15px;transition:background-color .3s}.load-more-btn[data-v-7177b782]:disabled{background-color:#95a5a6;cursor:not-allowed}.load-more-btn span[data-v-7177b782]{display:inline-block;transition:opacity .3s}.load-more-btn:disabled span[data-v-7177b782]:first-child{opacity:0}.load-more-btn:disabled span[data-v-7177b782]:last-child{opacity:1}",""]),l.locals={},t.exports=l},387:function(t,e,r){"use strict";var l=r(6),n=(r(51),r(75),{data:function(){return{loading:!1,currentPage:1,hasMorePages:!0,items:[]}},methods:{fetchItems:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function r(){var l,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.get("/unauthenticate/defaultShowingMoviesHome",{params:{page:t}});case 3:l=r.sent,0===(n=l.data).length&&(e.hasMorePages=!1),e.items=e.items.concat(n),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),console.error("Error fetching categories:",r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},loadMore:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loading){e.next=2;break}return e.abrupt("return");case 2:t.currentPage++,t.fetchItems(t.currentPage);case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.fetchItems(t.currentPage);case 1:case"end":return e.stop()}}),e)})))()}}),o=(r(385),r(74)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"apps_second"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("a",{staticClass:"t_link"},[t._v("Popular Movies ")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"apps_s_grid"},t._l(t.items,(function(r){return e("div",{key:r.id,staticClass:"apps_box_two"},[e("nuxt-link",{attrs:{to:"/videos/watch?slug="+r.pro_slug}},[e("div",{staticClass:"s_img_box"},[e("img",{staticClass:"img-fluid img_banner",attrs:{src:r.thumnail_img,loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"d_box"},[e("h3",[t._v(t._s(r.product_name))]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("nuxt-link",{staticClass:"btn_download",attrs:{to:"/videos/watch?slug="+r.pro_slug}},[t._v("Download")])],1)])])],1)})),0),t._v(" "),e("center",[e("button",{staticClass:"load-more-btn",attrs:{disabled:t.loading},on:{click:t.loadMore}},[!t.loading&&t.hasMorePages?e("span",[t._v("Load More")]):e("span",[t._v("Loading...")])]),t._v(" "),t.loading||t.hasMorePages?t._e():e("p",[t._v("No more ")])])],1),t._v(" "),t._m(0)])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"ads_sec"},[t("div",{staticClass:"ads_img"},[t("a",{attrs:{href:"#"}},[t("img",{attrs:{src:"/images/Neutral_Modern Elegant_Watch_Instagram_Post.png",alt:""}})])]),this._v(" "),t("div",{staticClass:"ads_img"},[t("a",{attrs:{href:"#"}},[t("img",{attrs:{src:"/images/Neutral_Modern Elegant_Watch_Instagram_Post.png",alt:""}})])])])])}],!1,null,"7177b782",null);e.a=component.exports},388:function(t,e,r){"use strict";r(384)},389:function(t,e,r){var l=r(169)((function(i){return i[1]}));l.push([t.i,"",""]),l.locals={},t.exports=l},390:function(t,e,r){"use strict";r(92);var l={data:function(){return{showLoader:!0}},mounted:function(){var t=this;setTimeout((function(){t.showLoader=!1}),1e3)}},n=(r(388),r(74)),component=Object(n.a)(l,(function(){var t=this;return(0,t._self._c)("div",{directives:[{name:"show",rawName:"v-show",value:t.showLoader,expression:"showLoader"}],staticClass:"loader"},[t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"load_box"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/logo_loader.png",loading:"lazy",alt:""}}),t._v(" "),e("h6",[t._v("BRICS")]),t._v(" "),e("h6",{staticStyle:{"font-weight":"300"}},[t._v("Loading...")])])}],!1,null,"317bba16",null);e.a=component.exports},410:function(t,e,r){"use strict";r.r(e);var l=r(6),n=(r(51),r(92),{data:function(){return{showLoader:!0,slides:[]}},mounted:function(){var t=this;setTimeout((function(){t.showLoader=!1}),1e3),this.getSlides(),this.$nextTick((function(){$(".owl-carousel").owlCarousel({loop:!0,nav:!1,dots:!0,margin:8,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1},600:{items:1},768:{items:2},992:{items:3},1200:{items:6},1500:{items:6}}})}))},methods:{sliderVideoWatch:function(){console.log("slider...")},getSlides:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.slides=[{href:"videos/watch?slug=Movie-1",images:"/slider_image/01.jpg"},{href:"/videos/watch?slug=Movie-2",images:"/slider_image/02.jpg"},{href:"details.html",images:"/slider_image/03.jpg"},{href:"details.html",images:"/slider_image/04.jpg"},{href:"details.html",images:"/slider_image/05.jpg"},{href:"details.html",images:"/slider_image/06.jpg"},{href:"details.html",images:"/slider_image/07.jpg"},{href:"details.html",images:"/slider_image/08.jpg"},{href:"details.html",images:"/slider_image/09.jpg"},{href:"details.html",images:"/slider_image/10.jpg"}]);case 1:case"end":return e.stop()}}),e)})))()}}}),o=r(74),c=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("br"),t._v(" "),e("div",{staticClass:"slider_sec"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showLoader,expression:"showLoader"}],attrs:{id:"loader-main"}},[e("div",{attrs:{id:"loader"}})]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("br"),t._v(" "),e("div",{staticClass:"carousel_slider"},[e("div",{staticClass:"owl-carousel _slide"},t._l(t.slides,(function(r,l){return e("div",{key:l,staticClass:"img_slide"},[e("img",{staticClass:"img-fluid",attrs:{src:r.images,alt:"",loading:"lazy"},on:{click:function(e){return t.sliderVideoWatch()}}})])})),0)])])])])])])}),[],!1,null,null,null).exports,d=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"slider",attrs:{bis_skin_checked:"1"}},[e("div",{staticClass:"slide-track",attrs:{bis_skin_checked:"1"}},[e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])]),t._v(" "),e("div",{staticClass:"slide",attrs:{bis_skin_checked:"1"}},[e("h6",[e("span",{staticStyle:{color:"gold"}},[t._v(" ☆ "),e("span")]),t._v(" Free Download ")])])])])])}],!1,null,null,null).exports,_=r(379),v=r(380),m=r(378),h={components:{TopBar:_.a,Support:v.a,Footer:m.a},data:function(){return{products:[]}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/unauthenticate/defaultShowingProduct");case 3:r=e.sent,t.products=r.data,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},computed:{}},f=Object(o.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"apps_first"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"apps_f_grid"},t._l(t.products,(function(r){return e("div",{key:r.id,staticClass:"apps_box_one"},[e("nuxt-link",{attrs:{to:"/category/download?slug="+r.pro_slug}},[e("div",{staticClass:"aap_fst_tle"},[e("div",{staticClass:"img_box"},[e("img",{staticClass:"img-fluid",attrs:{src:r.thumnail_img,loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"m_align"},[e("h3",[t._v(t._s(r.product_name))]),t._v(" "),e("p",[e("span",[t._v(t._s(r.category_name))])])]),t._v(" "),e("div")])])],1)})),0)]),t._v(" "),t._m(1)])])])])])])}),[function(){var t=this._self._c;return t("a",{staticClass:"t_link",attrs:{href:"category.html"}},[this._v("Top Free Apps "),t("i",{staticClass:"fa-solid fa-angle-right"})])},function(){var t=this._self._c;return t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"ads_sec"},[t("div",{staticClass:"ads_img_long"},[t("a",{attrs:{href:"https://pec-shopping.com"}},[t("img",{attrs:{src:"/images/Neutral_Modern Elegant_Watch_Instagram_Post.png",alt:""}})])])])])}],!1,null,null,null).exports,C=r(390),w=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"essential_"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"essential_box"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"essential_d"},[e("h1",[t._v("Essentail apps")]),t._v(" "),e("p",[t._v("Turn your favorite photos and videos into works of art with these great apps")]),t._v(" "),e("a",{attrs:{href:"category.html"}},[t._v("See all ")]),t._v(" "),e("img",{staticClass:"img-fluid",attrs:{src:"/images/ads_size/long_ads.gif",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"essential_grid _apps"},[e("div",{staticClass:"apps_box_two"},[e("a",{attrs:{href:"app_details.html"}},[e("div",{staticClass:"s_img_box"},[e("div",{staticClass:"blur_box",staticStyle:{"background-image":"var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(/images/software_images/media encoder.jpg)"}}),t._v(" "),e("img",{staticClass:"img-fluid",attrs:{src:"/images/software_images/media encoder.jpg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"d_box"},[e("h3",[t._v("!Telegram Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quibusdam.")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("a",{staticClass:"btn_download",attrs:{href:"javascript:"}},[t._v("Download")])])])])]),t._v(" "),e("div",{staticClass:"apps_box_two"},[e("a",{attrs:{href:"app_details.html"}},[e("div",{staticClass:"s_img_box"},[e("div",{staticClass:"blur_box",staticStyle:{"background-image":"var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(/images/software_images/centos7.jpg)"}}),t._v(" "),e("img",{staticClass:"img-fluid",attrs:{src:"/images/software_images/centos7.jpg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"d_box"},[e("h3",[t._v("YouTube")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("a",{staticClass:"btn_download",attrs:{href:"app_details.html"}},[t._v("Download")])])])])]),t._v(" "),e("div",{staticClass:"apps_box_two"},[e("a",{attrs:{href:"app_details.html"}},[e("div",{staticClass:"s_img_box"},[e("div",{staticClass:"blur_box",staticStyle:{"background-image":"var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(/images/software_images/download-adobe-photoshop-cs-8-0.jpg)"}}),t._v(" "),e("img",{staticClass:"img-fluid",attrs:{src:"/images/software_images/download-adobe-photoshop-cs-8-0.jpg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"d_box"},[e("h3",[t._v("Telegram")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("a",{staticClass:"btn_download",attrs:{href:"app_details.html"}},[t._v("Download")])])])])]),t._v(" "),e("div",{staticClass:"apps_box_two"},[e("a",{attrs:{href:"app_details.html"}},[e("div",{staticClass:"s_img_box"},[e("div",{staticClass:"blur_box",staticStyle:{"background-image":"var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(/images/software_images/rons-water-bundle-large.jpg)"}}),t._v(" "),e("img",{staticClass:"img-fluid",attrs:{src:"/images/software_images/rons-water-bundle-large.jpg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"d_box"},[e("h3",[t._v("YouTube")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("a",{staticClass:"btn_download",attrs:{href:"app_details.html"}},[t._v("Download")])])])])]),t._v(" "),e("div",{staticClass:"apps_box_two"},[e("a",{attrs:{href:"app_details.html"}},[e("div",{staticClass:"s_img_box"},[e("div",{staticClass:"blur_box",staticStyle:{"background-image":"var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(/images/software_images/download-adobe-photoshop-cs-8-0.jpg)"}}),t._v(" "),e("img",{staticClass:"img-fluid",attrs:{src:"/images/software_images/download-adobe-photoshop-cs-8-0.jpg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"d_box"},[e("h3",[t._v("Telegram")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("a",{staticClass:"btn_download",attrs:{href:"app_details.html"}},[t._v("Download")])])])])]),t._v(" "),e("div",{staticClass:"apps_box_two"},[e("a",{attrs:{href:"app_details.html"}},[e("div",{staticClass:"s_img_box"},[e("div",{staticClass:"blur_box",staticStyle:{"background-image":"var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(/images/software_images/rons-water-bundle-large.jpg)"}}),t._v(" "),e("img",{staticClass:"img-fluid",attrs:{src:"/images/software_images/rons-water-bundle-large.jpg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"d_box"},[e("h3",[t._v("YouTube")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("a",{staticClass:"btn_download",attrs:{href:"app_details.html"}},[t._v("Download")])])])])])])])])])])])])])])}],!1,null,null,null).exports,x=r(387),k=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"apps_second"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("a",{staticClass:"t_link",attrs:{href:"category.html"}},[t._v("Popular Courses "),e("i",{staticClass:"fa-solid fa-angle-right"})]),t._v(" "),e("div",{staticClass:"apps_s_grid _apps"},[e("div",{staticClass:"apps_box_two"},[e("a",{attrs:{href:"course_list.html"}},[e("div",{staticClass:"s_img_box"},[e("div",{staticClass:"blur_box",staticStyle:{"background-image":"var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/media encoder.jpg)"}}),t._v(" "),e("img",{staticClass:"img-fluid",attrs:{src:"/images/software_images/media encoder.jpg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"d_box"},[e("h3",[t._v("Telegram")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("a",{staticClass:"btn_download",attrs:{href:"course_list.html"}},[t._v("Download")])])])])]),t._v(" "),e("div",{staticClass:"apps_box_two"},[e("a",{attrs:{href:"course_list.html"}},[e("div",{staticClass:"s_img_box"},[e("div",{staticClass:"blur_box",staticStyle:{"background-image":"var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/centos7.jpg)"}}),t._v(" "),e("img",{staticClass:"img-fluid",attrs:{src:"/images/software_images/centos7.jpg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"d_box"},[e("h3",[t._v("YouTube")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("a",{staticClass:"btn_download",attrs:{href:"course_list.html"}},[t._v("Download")])])])])]),t._v(" "),e("div",{staticClass:"apps_box_two"},[e("a",{attrs:{href:"course_list.html"}},[e("div",{staticClass:"s_img_box"},[e("div",{staticClass:"blur_box",staticStyle:{"background-image":"var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/download-adobe-photoshop-cs-8-0.jpg)"}}),t._v(" "),e("img",{staticClass:"img-fluid",attrs:{src:"/images/software_images/download-adobe-photoshop-cs-8-0.jpg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"d_box"},[e("h3",[t._v("Telegram")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("a",{staticClass:"btn_download",attrs:{href:"course_list.html"}},[t._v("Download")])])])])]),t._v(" "),e("div",{staticClass:"apps_box_two"},[e("a",{attrs:{href:"course_list.html"}},[e("div",{staticClass:"s_img_box"},[e("div",{staticClass:"blur_box",staticStyle:{"background-image":"var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/rons-water-bundle-large.jpg)"}}),t._v(" "),e("img",{staticClass:"img-fluid",attrs:{src:"/images/software_images/rons-water-bundle-large.jpg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"d_box"},[e("h3",[t._v("YouTube")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("a",{staticClass:"btn_download",attrs:{href:"course_list.html"}},[t._v("Download")])])])])]),t._v(" "),e("div",{staticClass:"apps_box_two"},[e("a",{attrs:{href:"course_list.html"}},[e("div",{staticClass:"s_img_box"},[e("div",{staticClass:"blur_box",staticStyle:{"background-image":"var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/th_Ene76PNllk6ODlJsM9lJ6Nch7VMCuST8.png)"}}),t._v(" "),e("img",{staticClass:"img-fluid",attrs:{src:"/images/software_images/th_Ene76PNllk6ODlJsM9lJ6Nch7VMCuST8.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"d_box"},[e("h3",[t._v("Telegram")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("a",{staticClass:"btn_download",attrs:{href:"course_list.html"}},[t._v("Download")])])])])]),t._v(" "),e("div",{staticClass:"apps_box_two"},[e("a",{attrs:{href:"course_list.html"}},[e("div",{staticClass:"s_img_box"},[e("div",{staticClass:"blur_box",staticStyle:{"background-image":"var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/speed_Adobe-Photoshop-CS6.jpg)"}}),t._v(" "),e("img",{staticClass:"img-fluid",attrs:{src:"/images/software_images/speed_Adobe-Photoshop-CS6.jpg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"d_box"},[e("h3",[t._v("YouTube")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("a",{staticClass:"btn_download",attrs:{href:"course_list.html"}},[t._v("Download")])])])])]),t._v(" "),e("div",{staticClass:"apps_box_two"},[e("a",{attrs:{href:"course_list.html"}},[e("div",{staticClass:"s_img_box"},[e("div",{staticClass:"blur_box",staticStyle:{"background-image":"var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/th_Ene76PNllk6ODlJsM9lJ6Nch7VMCuST8.png)"}}),t._v(" "),e("img",{staticClass:"img-fluid",attrs:{src:"/images/software_images/th_Ene76PNllk6ODlJsM9lJ6Nch7VMCuST8.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"d_box"},[e("h3",[t._v("Telegram")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("a",{staticClass:"btn_download",attrs:{href:"course_list.html"}},[t._v("Download")])])])])]),t._v(" "),e("div",{staticClass:"apps_box_two"},[e("a",{attrs:{href:"course_list.html"}},[e("div",{staticClass:"s_img_box"},[e("div",{staticClass:"blur_box",staticStyle:{"background-image":"var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/speed_Adobe-Photoshop-CS6.jpg)"}}),t._v(" "),e("img",{staticClass:"img-fluid",attrs:{src:"/images/software_images/speed_Adobe-Photoshop-CS6.jpg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"d_box"},[e("h3",[t._v("YouTube")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("a",{staticClass:"btn_download",attrs:{href:"course_list.html"}},[t._v("Download")])])])])])])])])])])])}],!1,null,null,null).exports,y={components:{Slider:c,Loader:C.a,NewsSlider:d,TopFreeApps:f,TopBar:_.a,EssentialApps:w,Videos:x.a,Courses:k,Support:v.a,Footer:m.a}},S=Object(o.a)(y,(function(){var t=this,e=t._self._c;return e("div",[e("TopBar"),t._v(" "),e("Slider"),t._v(" "),e("Videos"),t._v(" "),e("Support"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=S.exports}}]);