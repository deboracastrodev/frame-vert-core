import { defineComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, createCommentVNode, renderSlot, Fragment, renderList, toDisplayString } from "vue";
var VButton_scss_vue_type_style_index_0_src_6e5341db_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = defineComponent({
  name: "VButton",
  props: {
    size: {
      type: String,
      default: "md"
    },
    outline: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: "helper",
      required: true
    },
    icon: {
      type: String,
      required: false
    }
  },
  computed: {
    setSizeClass() {
      return `v-btn--${this.size}`;
    },
    setStatus() {
      const status = this.outline ? `v-btn__outline--${this.status}` : `v-btn--${this.status}`;
      return status;
    },
    setIcon() {
      return `/static/icons/${this.icon}.svg`;
    }
  }
});
const _hoisted_1$2 = {
  key: 0,
  class: "v-btn--img"
};
const _hoisted_2$2 = ["src"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass([_ctx.setSizeClass, _ctx.setStatus])
  }, [
    _ctx.icon ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
      createElementVNode("img", { src: _ctx.setIcon }, null, 8, _hoisted_2$2)
    ])) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var VButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var VTable_scss_vue_type_style_index_0_src_52ffde09_lang = "";
const _sfc_main$1 = defineComponent({
  name: "VTable",
  props: {
    rows: {
      type: Array,
      required: true
    },
    cols: {
      type: Array,
      required: true
    }
  }
});
const _hoisted_1$1 = { class: "v-table" };
const _hoisted_2$1 = { class: "v-table__body-wrapper" };
const _hoisted_3$1 = { class: "responsive-table" };
const _hoisted_4$1 = { class: "v-table__cell" };
const _hoisted_5 = { class: "v-table__cell" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("div", _hoisted_2$1, [
      createElementVNode("table", _hoisted_3$1, [
        createElementVNode("thead", null, [
          createElementVNode("tr", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.cols, (col) => {
              return openBlock(), createElementBlock("th", _hoisted_4$1, toDisplayString(col), 1);
            }), 256))
          ])
        ]),
        createElementVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rows, (row, index) => {
            return openBlock(), createElementBlock("tr", {
              class: "v-table__row",
              key: index
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.cols, (col) => {
                return openBlock(), createElementBlock("td", _hoisted_5, toDisplayString(row[col]), 1);
              }), 256))
            ]);
          }), 128))
        ])
      ])
    ])
  ]);
}
var VTable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var VPagination_scss_vue_type_style_index_0_src_3245b22b_lang = "";
const _sfc_main = defineComponent({
  name: "VPagination",
  props: {
    count: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    pages() {
      const pages = [];
      const count = this.count;
      this.page;
      const size = this.size;
      const totalPages = Math.ceil(count / size);
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }
  },
  methods: {
    onClickPage(page) {
      this.currentPage = page;
      this.$emit("change", page);
    }
  }
});
const _hoisted_1 = { class: "pagination" };
const _hoisted_2 = /* @__PURE__ */ createElementVNode("li", null, [
  /* @__PURE__ */ createElementVNode("a", { class: "pagination--item" })
], -1);
const _hoisted_3 = ["onClick"];
const _hoisted_4 = /* @__PURE__ */ createElementVNode("li", null, [
  /* @__PURE__ */ createElementVNode("a", { class: "pagination--item" })
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ul", _hoisted_1, [
    _hoisted_2,
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.pages, (page, index) => {
      return openBlock(), createElementBlock("li", null, [
        createElementVNode("a", {
          class: normalizeClass(["pagination--item", { "active": _ctx.currentPage == page }]),
          onClick: ($event) => _ctx.onClickPage(page)
        }, toDisplayString(page), 11, _hoisted_3)
      ]);
    }), 256)),
    _hoisted_4
  ]);
}
var VPagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { VButton, VPagination, VTable };
