exports.ids = [5];
exports.modules = {

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(17).default
module.exports.__inject__ = function (context) {
  add("26ee9881", content, true, context)
};

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=128d3676&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<footer><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-md-6 wow fadeIn\"><div class=\"term_condition\"><ul><li><a href=\"#\">About</a></li> <li><a href=\"#\">Privacy policy</a></li></ul></div></div> <div class=\"col-md-6 wow fadeIn\"><div class=\"social\"><ul class=\"justify-content-end\"><li><a href=\"https://www.facebook.com/funflixhd/\" target=\"_blank\"><i class=\"fa-brands fa-facebook\"></i></a></li></ul></div></div></div></div></footer> <a id=\"button\" style=\"text-decoration: none;\"></a>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=128d3676&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "acc9c476"
  
)

/* harmony default export */ var Footer = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/TopBar.vue?vue&type=template&id=54de6b9c&scoped=true&lang=en&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div bis_skin_checked=\"1\" class=\"top_bar _nav\" data-v-54de6b9c>", "</div>", [_vm._ssrNode("<div bis_skin_checked=\"1\" class=\"container-fluid\" data-v-54de6b9c>", "</div>", [_vm._ssrNode("<div bis_skin_checked=\"1\" class=\"row\" data-v-54de6b9c>", "</div>", [_vm._ssrNode("<div bis_skin_checked=\"1\" class=\"col-md-12\" data-v-54de6b9c>", "</div>", [_vm._ssrNode("<nav class=\"navbar navbar-expand-sm bg-body-tertiary navbar bg-body-tertiary fixed-top\" data-v-54de6b9c>", "</nav>", [_vm._ssrNode("<div class=\"container-fluid\" data-v-54de6b9c>", "</div>", [_c('nuxt-link', {
    staticClass: "navbar-brand navbar_brand",
    attrs: {
      "to": "/"
    }
  }, [_c('h6', [_vm._v("FunFlix HD")])]), _vm._ssrNode(" <button type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\" data-v-54de6b9c><span class=\"navbar-toggler-icon\" data-v-54de6b9c></span></button> "), _vm._ssrNode("<div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\" data-v-54de6b9c>", "</div>", [_vm._ssrNode("<ul class=\"nav_oplin navbar-nav ms-auto mb-lg-0 navbar-nav me-auto mb-2 mb-lg-0\" data-v-54de6b9c>", "</ul>", _vm._l(_vm.categories, function (category) {
    return _vm._ssrNode("<li class=\"nav-item dropdown\" data-v-54de6b9c>", "</li>", [_vm._ssrNode("<a href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"nav-link\" data-v-54de6b9c><div data-v-54de6b9c><i" + _vm._ssrClass(null, category.file) + " data-v-54de6b9c></i>" + _vm._ssrEscape("\r\n                                                " + _vm._s(category.name) + "\r\n                                            ") + "</div> <i class=\"fa-solid fa-caret-down\" data-v-54de6b9c></i></a> "), category.children.length > 0 ? _vm._ssrNode("<ul class=\"dropdown-menu\" data-v-54de6b9c>", "</ul>", _vm._l(category.children, function (childCategory) {
      return _vm._ssrNode("<li data-v-54de6b9c>", "</li>", [childCategory.parent_id === 1 ? _c('nuxt-link', {
        staticClass: "dropdown-item",
        attrs: {
          "to": '/category/category-list?slug=' + childCategory.slug
        }
      }, [_vm._v(_vm._s(childCategory.name))]) : _vm._e(), _vm._ssrNode(" "), childCategory.parent_id === 2 ? _c('nuxt-link', {
        staticClass: "dropdown-item",
        attrs: {
          "to": '/games/games-list?slug=' + childCategory.slug
        }
      }, [_vm._v(_vm._s(childCategory.name))]) : _vm._e(), _vm._ssrNode(" "), childCategory.parent_id === 3 ? _c('nuxt-link', {
        staticClass: "dropdown-item",
        attrs: {
          "to": '/videos/videodetails?slug=' + childCategory.slug
        }
      }, [_vm._v(_vm._s(childCategory.name))]) : _vm._e(), _vm._ssrNode(" "), childCategory.parent_id === 4 ? _c('nuxt-link', {
        staticClass: "dropdown-item",
        attrs: {
          "to": '/course/coursedetails?slug=' + childCategory.slug
        }
      }, [_vm._v(_vm._s(childCategory.name))]) : _vm._e()], 2);
    }), 0) : _vm._e()], 2);
  }), 0), _vm._ssrNode(" <form class=\"d-flex s-form\" data-v-54de6b9c><input id=\"search\" placeholder=\"Search Movies,Software,Games,Tutorial...\"" + _vm._ssrAttr("value", _vm.searchInput) + " class=\"form-control\" data-v-54de6b9c> <input type=\"hidden\" class=\"parent\" data-v-54de6b9c> <input type=\"hidden\" class=\"selected_slug\" data-v-54de6b9c> <button type=\"submit\" class=\"btn btn-outline-success d-flex align-items-center\" data-v-54de6b9c><i class=\"fa-solid fa-magnifying-glass\" data-v-54de6b9c></i></button></form> <div style=\"display:none\" data-v-54de6b9c><form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-54de6b9c><input type=\"text\" class=\"parent\" data-v-54de6b9c> <input type=\"text\" class=\"selected_slug\" data-v-54de6b9c> <button type=\"submit\" class=\"btn btn-success px-5 w-100 clickbtn\" data-v-54de6b9c><i class=\"bx bx-check-circle mr-1\" data-v-54de6b9c></i> Submit</button></form></div>")], 2)], 2)])])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TopBar.vue?vue&type=template&id=54de6b9c&scoped=true&lang=en&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopBar.vue?vue&type=script&lang=js&
/* harmony default export */ var TopBarvue_type_script_lang_js_ = ({
  data() {
    return {
      categories: [],
      searchInput: [],
      parent: ''
    };
  },
  mounted() {
    this.fetchCategories();
    this.initAutocomplete();
  },
  methods: {
    searchurl() {
      let parent_id = $(".parent").val();
      let selected_slug = $(".selected_slug").val();
      if (parent_id == 1 || parent_id == 2) {
        //  alert(selected_slug);
        this.$router.push('/category/download?slug=' + selected_slug);
      }
      if (parent_id == 3) {
        //alert(parent_id);
        this.$router.push('/videos/watch?slug=' + selected_slug);
      }
      if (parent_id == 4) {
        this.$router.push('/course/download?slug=' + selected_slug);
      }
    },
    forSearchurl() {
      let parent_id = $(".parent").val();
      let selected_slug = $(".selected_slug").val();
      console.log("parentID " + parent_id);
      console.log("Slug " + selected_slug);
      if (parent_id == 1 || parent_id == 2) {
        this.$router.push('/category/download?slug=' + selected_slug);
      }
      if (parent_id == 3) {
        this.$router.push('/videos/watch?slug=' + selected_slug);
      }
      if (parent_id == 4) {
        this.$router.push('/course/download?slug=' + selected_slug);
      }
    },
    retrunUrl() {
      this.$router.push({
        name: '/videos/watch',
        params: {
          slug: ui.item.slug
        }
      });
    },
    async fetchCategories() {
      try {
        const response = await this.$axios.get('/unauthenticate/getCategoryList');
        this.categories = response.data;
        //console.log(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    ///unauthenticate/autocomplete

    async initAutocomplete() {
      const vm = this; // Store a reference to the Vue instance
      $('#search').autocomplete({
        source: async (request, response) => {
          try {
            const apiResponse = await this.$axios.get(`/unauthenticate/autocomplete?q=${request.term}`);
            const transformedData = apiResponse.data.map(item => ({
              label: item.label,
              value: item.id,
              slug: item.slug,
              parent_id: item.parent_id
            }));
            response(transformedData);
          } catch (error) {
            console.error(error);
          }
        },
        minLength: 3,
        // Set a minimum length for triggering autocomplete
        select: function (event, ui) {
          const selectedId = `parent ID: ${ui.item.parent_id}---- slug: ${ui.item.slug}----id: ${ui.item.value}`;
          console.log(selectedId);
          const parentid = ui.item.parent_id;
          $(".parent").val(parentid);
          $(".selected_slug").val(ui.item.slug);
          $(".clickbtn").click();
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./components/TopBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopBarvue_type_script_lang_js_ = (TopBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/TopBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TopBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "54de6b9c",
  "11b58528"
  
)

/* harmony default export */ var TopBar = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Support.vue?vue&type=template&id=34ae9877&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"support pt-4\"><div class=\"container\"><div class=\"row py-4\"><div class=\"col-md-12\"><div class=\"support_content wow fadeIn\"><h1>FunFlixHD</h1> <p>Dive into the world of entertainment and education at FunFlixHD.com! \r\n      Explore the latest movies, cutting-edge software, thrilling games, \r\n      and enriching courses. Your gateway to endless possibilities for leisure and learning awaits!</p></div></div></div></div></section> <section class=\"grow_business\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-12 m-auto text-center\"><div class=\"grow_content wow fadeIn\"><a href=\"https://fansgame.online\" target=\"_blank\"><img src=\"/images/ads_banner.gif\" loading=\"lazy\" alt class=\"img-fluid\"></a></div></div></div></div></section>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Support.vue?vue&type=template&id=34ae9877&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Support.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "46d3cbd6"
  
)

/* harmony default export */ var Support = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_54de6b9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_54de6b9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_54de6b9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_54de6b9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_54de6b9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(min-width:991px){.s-form[data-v-54de6b9c]{width:40%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/course/download.vue?vue&type=template&id=7c028d78&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('TopBar'), _vm._ssrNode(" <br> <br> <div class=\"essential_ cat_banner\"><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"essential_box\" style=\"min-height: 30vh;display: block;\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"row essential_d\"><div class=\"col-md-7 d-flex align-items-center\"><h1 class=\"m-0 ms-3\">" + _vm._ssrEscape(_vm._s(_vm.product_name)) + "</h1></div> <div class=\"col-md-5\"><div class=\"essential_d_store_link text-center\"><a href=\"#\"><img src=\"/images/Play.png\" loading=\"lazy\" alt class=\"img-fluid\"></a> <a href=\"#\"><img src=\"/images/Apple.png\" loading=\"lazy\" alt class=\"img-fluid\"></a></div> <p class=\"text-end me-3\">Download FunFlix HD app for watching popular netflix\r\n                                            movies and series for free.</p></div></div></div></div></div></div></div></div></div> "), _vm._ssrNode("<div class=\"apps_second cat_apps_view apps_view_box app_page\">", "</div>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-4\">", "</div>", [_vm._ssrNode("<div class=\"app_icon_details\">", "</div>", [_vm._ssrNode("<br> <button type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#share\" class=\"_btn_share mt-3\"><i class=\"fa-solid fa-share-nodes\"></i>Share</button> <a" + _vm._ssrAttr("href", _vm.download_link) + " target=\"_blank\" class=\"btn_download\">Download</a> <span>Total Download: 9999</span> "), _vm._ssrNode("<div id=\"share\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" class=\"modal fade\">", "</div>", [_vm._ssrNode("<div class=\"modal-dialog modal-dialog-centered\">", "</div>", [_vm._ssrNode("<div class=\"modal-content\">", "</div>", [_vm._ssrNode("<div class=\"modal-body\">", "</div>", [_vm._ssrNode("<div class=\"share_options\">", "</div>", [_vm._ssrNode("<div class=\"d-flex justify-content-end\"><div><button type=\"button\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\"></button></div></div> "), _vm._ssrNode("<div>", "</div>", [_c('center', [_c('h3', {
    attrs: {
      "id": "copymsg"
    }
  })]), _vm._ssrNode(" <h6 style=\"color: #000;\">Share this with your social Community</h6> <div class=\"socials\"><a href=\"https:/web.whatsapp.com\" target=\"_blank\"><img src=\"/images/whatsapp-100.png\" alt></a> <a href=\"https://www.messenger.com/\" target=\"_blank\"><img src=\"/images/facebook-messenger-100.png\" alt></a> <a href=\"https://web.telegram.org/\" target=\"_blank\"><img src=\"/images/telegram.png\" alt></a></div>")], 2), _vm._ssrNode(" <div class=\"copy_link\"><h6 style=\"color: #000;\">Or copy link : </h6> <div class=\"input_box\"><input type=\"text\" id=\"linkInput\"" + _vm._ssrAttr("value", _vm.downloadlink) + "> <button type=\"button\">Copy </button></div></div>")], 2)])])])])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-8\">", "</div>", [_vm._ssrNode("<div class=\"app_de\"><div class=\"card\"><div class=\"card-header\"><h5>Description</h5></div> <div class=\"card-body\"><p class=\"description\"></p></div></div></div> <div class=\"ads_img mt-3\"><img src=\"/images/ads_size/ads_long.jpeg\" loading=\"lazy\" alt class=\"img-fluid\"></div> "), _vm._ssrNode("<div class=\"app_list_\">", "</div>", [_vm._ssrNode("<h6>People also view </h6> "), _vm._ssrNode("<div class=\"essential_grid _apps mb-2\">", "</div>", _vm._l(_vm.popularCategorys, function (product) {
    return _vm._ssrNode("<div class=\"apps_box_two\">", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": '/category/download?slug=' + product.pro_slug,
        "target": "_blank"
      }
    }, [_c('div', {
      staticClass: "s_img_box"
    }, [_c('div', {
      staticClass: "blur_box",
      staticStyle: {
        "background-image": "var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/media_encoder.jpg)"
      }
    }), _vm._v(" "), _c('img', {
      staticClass: "img-fluid",
      attrs: {
        "src": product.thumnail_img,
        "loading": "lazy",
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "d_box"
    }, [_c('h3', [_vm._v(_vm._s(product.product_name))]), _vm._v(" "), _c('div', {
      staticClass: "d-flex align-items-center"
    }, [_c('nuxt-link', {
      staticClass: "btn_download",
      attrs: {
        "to": '/category/download?slug=' + product.pro_slug,
        "target": "_blank"
      }
    }, [_vm._v("Download")])], 1)])])], 1);
  }), 0)], 2)], 2)], 2)])]), _vm._ssrNode(" "), _c('Support'), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/course/download.vue?vue&type=template&id=7c028d78&

// EXTERNAL MODULE: ./components/TopBar.vue + 4 modules
var TopBar = __webpack_require__(37);

// EXTERNAL MODULE: ./components/Support.vue + 2 modules
var Support = __webpack_require__(38);

// EXTERNAL MODULE: ./components/Footer.vue + 2 modules
var Footer = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/course/download.vue?vue&type=script&lang=js&



/* harmony default export */ var downloadvue_type_script_lang_js_ = ({
  components: {
    TopBar: TopBar["a" /* default */],
    Support: Support["a" /* default */],
    Footer: Footer["a" /* default */]
  },
  data() {
    return {
      downloadlink: '',
      popularCategorys: [],
      showLoader: false,
      product_name: '',
      description: '',
      thumnail_img: '',
      download_link: '',
      fullUrl: ''
    };
  },
  head: {
    title: 'Download Course'
  },
  watch: {
    async $route(to, from) {
      try {
        //const slug = this.$route.query.slug;
        this.showLoader = true;
        const response = await this.$axios.get('/unauthenticate/getProductrow', {
          params: {
            slug: this.$route.query.slug
          }
        });
        this.showLoader = false;
        this.product_name = response.data.product_name;
        this.thumnail_img = response.data.thumnail_img;
        this.download_link = response.data.download_link;
        $(".description").html(response.data.description);
        this.popularProduct(response.data.category_slug);
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
    const paramSlug = this.$route.query.slug;
    console.log("paramSlug: " + paramSlug);
    this.fetchData();
  },
  methods: {
    copyLink() {
      $("#copymsg").html();
      // Select the input field
      const linkInput = document.getElementById('linkInput');
      linkInput.select();
      try {
        document.execCommand('copy');
        $("#copymsg").html("Link copied!");
      } catch (err) {
        console.error('Unable to copy to clipboard:', err);
        $("#copymsg").html("Copy to clipboard failed. Please copy the link manually.");
      }
    },
    shareLink(download_link) {
      console.log("download_link: " + download_link);
      this.downloadlink = download_link;
    },
    async fetchData() {
      try {
        const response = await this.$axios.get('/unauthenticate/getProductrow', {
          params: {
            slug: this.$route.query.slug
          }
        });
        this.product_name = response.data.product_name;
        this.thumnail_img = response.data.thumnail_img;
        this.download_link = response.data.download_link;
        $(".description").html(response.data.description);
        this.popularProduct(response.data.category_slug);
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    },
    async popularProduct(category_slug) {
      console.log("caregory slug: " + category_slug);
      try {
        const response = await this.$axios.get('/unauthenticate/findCategorys', {
          params: {
            slug: category_slug
          }
        });
        this.popularCategorys = response.data.result;
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    }

    //end 
  }
});
// CONCATENATED MODULE: ./pages/course/download.vue?vue&type=script&lang=js&
 /* harmony default export */ var course_downloadvue_type_script_lang_js_ = (downloadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/course/download.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  course_downloadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4333ccd6"
  
)

/* harmony default export */ var download = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=download.js.map