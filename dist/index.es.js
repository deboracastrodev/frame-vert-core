import { defineComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, createCommentVNode, renderSlot, Fragment, renderList, toDisplayString } from "vue";
var VButton_scss_vue_type_style_index_0_src_6e5341db_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = defineComponent({
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
const _hoisted_1$1 = {
  key: 0,
  class: "v-btn--img"
};
const _hoisted_2$1 = ["src"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass([_ctx.setSizeClass, _ctx.setStatus])
  }, [
    _ctx.icon ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
      createElementVNode("img", { src: _ctx.setIcon }, null, 8, _hoisted_2$1)
    ])) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var VButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var VTable_scss_vue_type_style_index_0_src_52ffde09_lang = "";
const _sfc_main = defineComponent({
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
const _hoisted_1 = { class: "v-table" };
const _hoisted_2 = { class: "v-table__body-wrapper" };
const _hoisted_3 = { class: "responsive-table" };
const _hoisted_4 = { class: "v-table__cell" };
const _hoisted_5 = { class: "v-table__cell" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      createElementVNode("table", _hoisted_3, [
        createElementVNode("thead", null, [
          createElementVNode("tr", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.cols, (col) => {
              return openBlock(), createElementBlock("th", _hoisted_4, toDisplayString(col), 1);
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
var VTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { VButton, VTable };
