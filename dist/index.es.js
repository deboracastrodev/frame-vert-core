import { defineComponent, openBlock, createElementBlock, Fragment, createCommentVNode, createElementVNode, renderList, toDisplayString } from "vue";
var VTable_scss_vue_type_style_index_0_src_52ffde09_lang = "";
const _hoisted_1 = { class: "v-table" };
const _hoisted_2 = { class: "v-table__body-wrapper" };
const _hoisted_3 = { class: "responsive-table" };
const _hoisted_4 = { class: "v-table__cell" };
const _hoisted_5 = { class: "v-table__cell" };
const _sfc_main = /* @__PURE__ */ defineComponent({
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
        createElementVNode("div", _hoisted_1, [
          createElementVNode("div", _hoisted_2, [
            createElementVNode("table", _hoisted_3, [
              createElementVNode("thead", null, [
                createElementVNode("tr", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.cols, (col) => {
                    return openBlock(), createElementBlock("th", _hoisted_4, toDisplayString(col), 1);
                  }), 256))
                ])
              ]),
              createElementVNode("tbody", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.rows, (row, index) => {
                  return openBlock(), createElementBlock("tr", {
                    class: "v-table__row",
                    key: index
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
export { _sfc_main as default };
