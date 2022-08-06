import { defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, renderList, toDisplayString, normalizeClass, renderSlot } from "vue";
var VTable_scss_vue_type_style_index_0_src_52ffde09_lang = "";
const _hoisted_1$1 = { class: "v-table" };
const _hoisted_2$1 = { class: "v-table__body-wrapper" };
const _hoisted_3 = { class: "responsive-table" };
const _hoisted_4 = { class: "v-table__cell" };
const _hoisted_5 = { class: "v-table__cell" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    rows: {
      type: Array,
      default: () => [
        { column1: "row1column1", column2: "row1column2", column3: "row1column3" },
        { column1: "row2column1", column2: "row2column2", column3: "row2column3" },
        { column1: "row3column1", column2: "row3column2", column3: "row3column3" }
      ]
    },
    cols: {
      type: Array,
      default: () => ["column1", "column2", "column3"]
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createCommentVNode(" create a hmtl for a table component "),
        createElementVNode("div", _hoisted_1$1, [
          createElementVNode("div", _hoisted_2$1, [
            createElementVNode("table", _hoisted_3, [
              createElementVNode("thead", null, [
                createElementVNode("tr", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.cols, (col) => {
                    return openBlock(), createElementBlock("th", _hoisted_4, toDisplayString(col), 1);
                  }), 256))
                ])
              ]),
              createElementVNode("tbody", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.rows, (row, index2) => {
                  return openBlock(), createElementBlock("tr", {
                    class: "v-table__row",
                    key: index2
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.cols, (col) => {
                      return openBlock(), createElementBlock("td", _hoisted_5, toDisplayString(row[col]), 1);
                    }), 256))
                  ]);
                }), 128))
              ])
            ])
          ])
        ])
      ], 2112);
    };
  }
});
var VButton_scss_vue_type_style_index_0_src_6e5341db_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
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
      console.log(this.icon);
      return `/static/icons/${this.icon}.svg`;
    }
  }
});
const _hoisted_1 = {
  key: 0,
  class: "v-btn--img"
};
const _hoisted_2 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass([_ctx.setSizeClass, _ctx.setStatus])
  }, [
    _ctx.icon ? (openBlock(), createElementBlock("div", _hoisted_1, [
      createElementVNode("img", { src: _ctx.setIcon }, null, 8, _hoisted_2)
    ])) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var VButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var index = { VTable: _sfc_main$1, VButton };
export { index as default };
