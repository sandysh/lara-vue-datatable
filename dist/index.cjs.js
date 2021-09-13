'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  props: {
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    dataList: {
      type: [Array, Object],
      default: function _default() {
        return [];
      }
    },
    styles: {
      type: String
    },
    dbcolumns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    options: {
      type: Object
    },
    buttons: {
      type: Array
    }
  },
  methods: {
    transmitEvent: function transmitEvent(action, data) {
      this.$parent.$emit('action', {
        action: action,
        data: data
      });
    },
    has: function has(col) {
      return this.dataList.forEach(function (i) {
        var keys = Object.keys(i);
        console.log(keys);
        return keys.find(function (key) {
          return key === col;
        });
      });
    }
  }
};

function normalizeComponent(compiledTemplate, injectStyle, defaultExport, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, isShadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof isShadowMode === 'function') {
        createInjectorSSR = createInjector;
        createInjector = isShadowMode;
        isShadowMode = false;
    }
    // Vue.extend constructor export interop
    const options = typeof defaultExport === 'function' ? defaultExport.options : defaultExport;
    // render functions
    if (compiledTemplate && compiledTemplate.render) {
        options.render = compiledTemplate.render;
        options.staticRenderFns = compiledTemplate.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (injectStyle) {
                injectStyle.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (injectStyle) {
        hook = isShadowMode
            ? function () {
                injectStyle.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
            }
            : function (context) {
                injectStyle.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return defaultExport;
}

/* script */
const __vue_script__ = script;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script.__file = "DataTable.vue";

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container mt-5"},[_c('table',{staticClass:"table",class:_vm.styles},[_c('thead',[_c('tr',_vm._l((_vm.columns),function(column,index){return _c('th',{key:index,attrs:{"scope":"col"}},[_vm._v(_vm._s(column))])}),0)]),_vm._v(" "),_c('tbody',_vm._l((_vm.dataList.data),function(data,index){return _c('tr',{key:index},[_vm._l((_vm.dbcolumns),function(col,indx){return _c('td',{key:indx},[_vm._v(_vm._s(data[_vm.dbcolumns[indx]]))])}),_vm._v(" "),_c('td',_vm._l((_vm.buttons),function(button,ind){return _c('button',{key:ind,class:button.class,on:{"click":function($event){_vm.transmitEvent(button.action, data);}}},[_vm._v("\n          "+_vm._s(button.label)+"\n        ")])}),0)],2)}),0)])])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var DataTable = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$1 = {
  props: {
    pagination: {
      type: [Array, Object],
      required: true
    },
    offset: {
      type: Number,
      default: 4
    }
  },
  computed: {
    pagesNumber: function pagesNumber() {
      if (!this.pagination.to) {
        return [];
      }

      var from = this.pagination.current_page - this.offset;

      if (from < 1) {
        from = 1;
      }

      var to = from + this.offset * 2;

      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }

      var pagesArray = [];

      for (var page = from; page <= to; page++) {
        pagesArray.push(page);
      }

      return pagesArray;
    }
  },
  methods: {
    changePage: function changePage(page) {
      this.pagination.current_page = page;
      this.$emit('paginate');
    }
  }
};

/* script */
const __vue_script__$1 = script$1;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$1.__file = "Pagination.vue";

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ul',{staticClass:"pagination"},[(_vm.pagination.current_page > 1)?_c('li',{staticClass:"page-item"},[_c('a',{staticClass:"page-link",attrs:{"href":"javascript:void(0)","aria-label":"Previous"},on:{"click":function($event){$event.preventDefault();_vm.changePage(_vm.pagination.current_page - 1);}}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("«")])])]):_vm._e(),_vm._v(" "),_vm._l((_vm.pagesNumber),function(page,index){return _c('li',{key:index,staticClass:"page-item",class:{'active': page == _vm.pagination.current_page}},[_c('a',{staticClass:"page-link",attrs:{"href":"javascript:void(0)"},on:{"click":function($event){$event.preventDefault();_vm.changePage(page);}}},[_vm._v(_vm._s(page))])])}),_vm._v(" "),(_vm.pagination.current_page < _vm.pagination.last_page)?_c('li',{staticClass:"page-item"},[_c('a',{staticClass:"page-link",attrs:{"href":"javascript:void(0)","aria-label":"Next"},on:{"click":function($event){$event.preventDefault();_vm.changePage(_vm.pagination.current_page + 1);}}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("»")])])]):_vm._e()],2)])};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Pagination = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

//
//
//
//
//
//
var script$2 = {
  props: {
    options: {
      type: Object,
      default: function _default() {
        return {
          default: 10,
          lengths: [10, 20, 30, 40, 50]
        };
      }
    }
  },
  watch: {
    options: {
      handler: function handler(val) {
        this.options.default = val.default;
        this.$emit('paginate');
      },
      deep: true
    }
  }
};

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
const HEAD = document.head || document.getElementsByTagName('head')[0];
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$2 = script$2;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$2.__file = "TableLength.vue";

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.options.default),expression:"options.default"}],staticClass:"record-size-dropdown",attrs:{"aria-label":"Default select example"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.options, "default", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);}}},_vm._l((_vm.options.lengths),function(opt,index){return _c('option',{key:index,domProps:{"value":opt,"selected":_vm.options.default === opt}},[_vm._v(_vm._s(opt))])}),0)};
var __vue_staticRenderFns__$2 = [];

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-4e47dff3_0", { source: ".record-size-dropdown{width:10%;float:left}.search-bar{float:right}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  

  
  var TableLength = normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    createInjector,
    undefined
  );

//
//
//
//
var script$3 = {
  data: function data() {
    return {
      searchInput: ''
    };
  }
};

/* script */
const __vue_script__$3 = script$3;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$3.__file = "Search.vue";

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{attrs:{"type":"text"},on:{"keyup":function($event){_vm.$emit('get-users', $event.target.value);}}})};
var __vue_staticRenderFns__$3 = [];

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Search = normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("lara-vue-datatable", DataTable);
}
var plugin = {
  install: install
};
var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

var index = {
  DataTable: DataTable
};

exports.install = install;
exports.default = index;
exports.DataTable = DataTable;
exports.Pagination = Pagination;
exports.TableLength = TableLength;
exports.Search = Search;
