exports.ids = [13];
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
var add = __webpack_require__(16).default
module.exports.__inject__ = function (context) {
  add("26ee9881", content, true, context)
};

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=d6fd745e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<footer><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-md-6 wow fadeIn\"><div class=\"term_condition\"><ul><li><a href=\"#\">About</a></li> <li><a href=\"#\">Privacy policy</a></li></ul></div></div> <div class=\"col-md-6 wow fadeIn\"><div class=\"social\"><ul class=\"justify-content-end\"><li><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-youtube\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-instagram\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-tiktok\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-linkedin-in\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-pinterest-p\"></i></a></li></ul></div></div></div></div></footer> <a id=\"button\" style=\"text-decoration: none;\"></a>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=d6fd745e&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Support.vue?vue&type=template&id=8d01247e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"support pt-4\"><div class=\"container\"><div class=\"row py-\"><div class=\"col-md-6 m-auto\"><div class=\"big_title wow fadeIn\"><h2>FunFlix HD SUPPORT </h2> <h1>The help you need, when you need it</h1></div></div></div> <div class=\"row py-4\"><div class=\"col-md-6\"><div class=\"support_content wow fadeIn\"><img src=\"/images/div.mb-8 (2).png\" alt class=\"img-fluid\"> <h1>Community</h1> <p>Connect with a community of brands, partners, and fellow merchants who understand FunFlix HD.</p> <a href=\"#\" class=\"btn btn-read\">Join <i class=\"fa-solid fa-angle-right\"></i></a></div></div> <div class=\"col-md-6\"><div class=\"support_content wow fadeIn\"><img src=\"/images/div.mb-8 (3).png\" alt class=\"img-fluid\"> <h1>Help center</h1> <p>Find answers with a dedicated helpdesk resource full of articles and videos from our Support team.</p> <a href=\"#\" class=\"btn btn-read\">Join <i class=\"fa-solid fa-angle-right\"></i></a></div></div></div></div></section> <section class=\"grow_business\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-12 m-auto text-center\"><div class=\"grow_content wow fadeIn\"><a href=\"https://fansgame.online\" target=\"_blank\"><img src=\"/images/ads_banner.gif\" loading=\"lazy\" alt class=\"img-fluid\"></a></div></div></div></div></section>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Support.vue?vue&type=template&id=8d01247e&

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
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(15);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(min-width:991px){.s-form[data-v-54de6b9c]{width:40%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(16).default
module.exports.__inject__ = function (context) {
  add("f7a1c63c", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_style_index_0_id_7177b782_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_style_index_0_id_7177b782_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_style_index_0_id_7177b782_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_style_index_0_id_7177b782_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_style_index_0_id_7177b782_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(15);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".load-more-btn[data-v-7177b782]{background-color:#3498db;border:none;color:#fff;cursor:pointer;padding:10px 15px;transition:background-color .3s}.load-more-btn[data-v-7177b782]:disabled{background-color:#95a5a6;cursor:not-allowed}.load-more-btn span[data-v-7177b782]{display:inline-block;transition:opacity .3s}.load-more-btn:disabled span[data-v-7177b782]:first-child{opacity:0}.load-more-btn:disabled span[data-v-7177b782]:last-child{opacity:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Videos.vue?vue&type=template&id=7177b782&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"apps_second\" data-v-7177b782>", "</div>", [_vm._ssrNode("<div class=\"container-fluid\" data-v-7177b782>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-7177b782>", "</div>", [_vm._ssrNode("<div class=\"col-md-12\" data-v-7177b782>", "</div>", [_vm._ssrNode("<a class=\"t_link\" data-v-7177b782>Popular Movies </a> "), _vm._ssrNode("<div class=\"row\" data-v-7177b782>", "</div>", [_vm._ssrNode("<div class=\"col-md-10\" data-v-7177b782>", "</div>", [_vm._ssrNode("<div class=\"apps_s_grid\" data-v-7177b782>", "</div>", _vm._l(_vm.items, function (item) {
    return _vm._ssrNode("<div class=\"apps_box_two\" data-v-7177b782>", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": '/videos/watch?slug=' + item.pro_slug
      }
    }, [_c('div', {
      staticClass: "s_img_box"
    }, [_c('img', {
      staticClass: "img-fluid img_banner",
      attrs: {
        "src": item.thumnail_img,
        "loading": "lazy",
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "d_box"
    }, [_c('h3', [_vm._v(_vm._s(item.product_name))]), _vm._v(" "), _c('div', {
      staticClass: "d-flex align-items-center"
    }, [_c('nuxt-link', {
      staticClass: "btn_download",
      attrs: {
        "to": '/videos/watch?slug=' + item.pro_slug
      }
    }, [_vm._v("Download")])], 1)])])], 1);
  }), 0), _vm._ssrNode(" "), _c('center', [_c('button', {
    staticClass: "load-more-btn",
    attrs: {
      "disabled": _vm.loading
    },
    on: {
      "click": _vm.loadMore
    }
  }, [!_vm.loading && _vm.hasMorePages ? _c('span', [_vm._v("Load More")]) : _c('span', [_vm._v("Loading...")])]), _vm._v(" "), !_vm.loading && !_vm.hasMorePages ? _c('p', [_vm._v("No more ")]) : _vm._e()])], 2), _vm._ssrNode(" <div class=\"col-md-2\" data-v-7177b782><div class=\"ads_sec\" data-v-7177b782><div class=\"ads_img\" data-v-7177b782><a href=\"#\" data-v-7177b782><img src=\"/images/Neutral_Modern Elegant_Watch_Instagram_Post.png\" alt data-v-7177b782></a></div> <div class=\"ads_img\" data-v-7177b782><a href=\"#\" data-v-7177b782><img src=\"/images/Neutral_Modern Elegant_Watch_Instagram_Post.png\" alt data-v-7177b782></a></div></div></div>")], 2)], 2)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Videos.vue?vue&type=template&id=7177b782&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Videos.vue?vue&type=script&lang=js&
/* harmony default export */ var Videosvue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false,
      currentPage: 1,
      hasMorePages: true,
      items: []
    };
  },
  methods: {
    async fetchItems(page) {
      try {
        const response = await this.$axios.get(`/unauthenticate/defaultShowingMoviesHome`, {
          params: {
            page: page
          }
        });
        const newProducts = response.data;
        if (newProducts.length === 0) {
          this.hasMorePages = false;
        }
        this.items = this.items.concat(newProducts);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    async loadMore() {
      if (this.loading) return;
      this.currentPage++;
      this.fetchItems(this.currentPage);
    }
  },
  async mounted() {
    this.fetchItems(this.currentPage);
  }
});
// CONCATENATED MODULE: ./components/Videos.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Videosvue_type_script_lang_js_ = (Videosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Videos.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Videosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7177b782",
  "14e885fc"
  
)

/* harmony default export */ var Videos = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(16).default
module.exports.__inject__ = function (context) {
  add("2b3caa07", content, true, context)
};

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_videodetails_vue_vue_type_style_index_0_id_4db7cf4c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_videodetails_vue_vue_type_style_index_0_id_4db7cf4c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_videodetails_vue_vue_type_style_index_0_id_4db7cf4c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_videodetails_vue_vue_type_style_index_0_id_4db7cf4c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_videodetails_vue_vue_type_style_index_0_id_4db7cf4c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(15);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".load-more-btn[data-v-4db7cf4c]{background-color:#3498db;border:none;color:#fff;cursor:pointer;padding:10px 15px;transition:background-color .3s}.load-more-btn[data-v-4db7cf4c]:disabled{background-color:#95a5a6;cursor:not-allowed}.load-more-btn span[data-v-4db7cf4c]{display:inline-block;transition:opacity .3s}.load-more-btn:disabled span[data-v-4db7cf4c]:first-child{opacity:0}.load-more-btn:disabled span[data-v-4db7cf4c]:last-child{opacity:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/videos/videodetails.vue?vue&type=template&id=4db7cf4c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('TopBar'), _vm._ssrNode(" <br data-v-4db7cf4c> <br data-v-4db7cf4c> <div class=\"essential_ cat_banner\" data-v-4db7cf4c><div class=\"container-fluid\" data-v-4db7cf4c><div class=\"row\" data-v-4db7cf4c><div class=\"col-md-12\" data-v-4db7cf4c><div class=\"essential_box\" style=\"min-height: 30vh;display: block;\" data-v-4db7cf4c><div class=\"row\" data-v-4db7cf4c><div class=\"col-md-12\" data-v-4db7cf4c><div class=\"row essential_d\" data-v-4db7cf4c><div class=\"col-md-7 d-flex align-items-center\" data-v-4db7cf4c><h1 class=\"m-0 ms-3\" data-v-4db7cf4c>" + _vm._ssrEscape(_vm._s(_vm.categoryname)) + "</h1></div> <div class=\"col-md-5\" data-v-4db7cf4c><div class=\"essential_d_store_link text-center\" data-v-4db7cf4c><a href=\"#\" data-v-4db7cf4c><img src=\"//images/Play.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-4db7cf4c></a> <a href=\"#\" data-v-4db7cf4c><img src=\"//images/Apple.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-4db7cf4c></a></div> <p class=\"text-end me-3\" data-v-4db7cf4c>Download FunFlix HD app for watching popular netflix movies and series for\r\n                                            free.</p></div></div></div></div></div></div></div></div></div> "), _vm._ssrNode("<div class=\"apps_second cat_apps_view app_page cat_page\" data-v-4db7cf4c>", "</div>", [_vm._ssrNode("<div class=\"container-fluid\" data-v-4db7cf4c>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-4db7cf4c>", "</div>", [_vm._ssrNode("<div class=\"col-md-10\" data-v-4db7cf4c>", "</div>", [_vm._ssrNode("<div class=\"apps_s_grid mt-0\" data-v-4db7cf4c>", "</div>", _vm._l(_vm.items, function (item) {
    return _vm._ssrNode("<div class=\"apps_box_two\" data-v-4db7cf4c>", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": '/videos/watch?slug=' + item.pro_slug
      }
    }, [_c('div', {
      staticClass: "s_img_box"
    }, [_c('img', {
      staticClass: "img-fluid img_banner",
      attrs: {
        "src": item.thumnail_img,
        "loading": "lazy",
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "d_box"
    }, [_c('h3', [_vm._v(_vm._s(item.product_name))]), _vm._v(" "), _c('div', {
      staticClass: "d-flex align-items-center"
    }, [_c('nuxt-link', {
      staticClass: "btn_download",
      attrs: {
        "to": '/videos/watch?slug=' + item.pro_slug
      }
    }, [_vm._v("Download")])], 1)])])], 1);
  }), 0), _vm._ssrNode(" "), _c('center', [_c('button', {
    staticClass: "load-more-btn",
    attrs: {
      "disabled": _vm.loading
    },
    on: {
      "click": _vm.loadMore
    }
  }, [!_vm.loading && _vm.hasMorePages ? _c('span', [_vm._v("Load More")]) : _c('span', [_vm._v("Loading...")])]), _vm._v(" "), !_vm.loading && !_vm.hasMorePages ? _c('p', [_vm._v("No more ")]) : _vm._e()])], 2), _vm._ssrNode(" <div class=\"col-md-2\" data-v-4db7cf4c><div class=\"ads_sec mt-0\" data-v-4db7cf4c><div class=\"ads_img\" data-v-4db7cf4c><a href=\"#\" data-v-4db7cf4c><img src=\"/images/Neutral_Modern Elegant_Watch_Instagram_Post.png\" alt data-v-4db7cf4c></a></div> <div class=\"ads_img\" data-v-4db7cf4c><a href=\"#\" data-v-4db7cf4c><img src=\"/images/Neutral_Modern Elegant_Watch_Instagram_Post.png\" alt data-v-4db7cf4c></a></div></div></div>")], 2)])]), _vm._ssrNode(" "), _c('Support'), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/videos/videodetails.vue?vue&type=template&id=4db7cf4c&scoped=true&

// EXTERNAL MODULE: ./components/TopBar.vue + 4 modules
var TopBar = __webpack_require__(37);

// EXTERNAL MODULE: ./components/Support.vue + 2 modules
var Support = __webpack_require__(38);

// EXTERNAL MODULE: ./components/Footer.vue + 2 modules
var Footer = __webpack_require__(36);

// EXTERNAL MODULE: ./components/Videos.vue + 4 modules
var Videos = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/videos/videodetails.vue?vue&type=script&lang=js&




/* harmony default export */ var videodetailsvue_type_script_lang_js_ = ({
  components: {
    TopBar: TopBar["a" /* default */],
    Support: Support["a" /* default */],
    Footer: Footer["a" /* default */],
    Videos: Videos["a" /* default */]
  },
  data() {
    return {
      categoryname: '',
      popularCategorys: [],
      showLoader: false,
      fullUrl: '',
      loading: false,
      currentPage: 1,
      hasMorePages: true,
      items: []
    };
  },
  head: {
    title: 'Watch HD Movie'
  },
  watch: {
    async $route(to, from) {
      try {
        //const slug = this.$route.query.slug;
        this.showLoader = true;
        const response = await this.$axios.get('/unauthenticate/findCategorys', {
          params: {
            slug: this.$route.query.slug
          }
        });
        this.showLoader = false;
        this.items = response.data.result;
        this.categoryname = response.data.categoryname;
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    }
  },
  async mounted() {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
    this.laadCategory(this.currentPage);
    this.fetchItems(this.currentPage);
  },
  methods: {
    async laadCategory(page) {
      try {
        const response = await this.$axios.get('/unauthenticate/findCategorys', {
          params: {
            slug: this.$route.query.slug,
            page: page
          }
        });
        this.categoryname = response.data.categoryname;
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    },
    async fetchItems(page) {
      try {
        const response = await this.$axios.get('/unauthenticate/findCategorys', {
          params: {
            slug: this.$route.query.slug,
            page: page
          }
        });
        this.categoryname = response.data.categoryname;
        const newProducts = response.data.result;
        if (newProducts.length === 0) {
          this.hasMorePages = false;
        }
        this.items = this.items.concat(newProducts);
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    },
    async loadMore() {
      if (this.loading) return;
      this.currentPage++;
      this.fetchItems(this.currentPage);
    },
    shareLink() {
      const path = window.location.href;
      // console.log(path);
      this.fullUrl = path;
    }

    //end 
  }
});
// CONCATENATED MODULE: ./pages/videos/videodetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var videos_videodetailsvue_type_script_lang_js_ = (videodetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/videos/videodetails.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  videos_videodetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4db7cf4c",
  "43c71ad7"
  
)

/* harmony default export */ var videodetails = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=videodetails.js.map