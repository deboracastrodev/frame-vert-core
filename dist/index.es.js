var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { defineComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, createCommentVNode, renderSlot, Fragment, renderList, toDisplayString, ref, watch, computed, resolveComponent, createVNode } from "vue";
var VButton_scss_vue_type_style_index_0_src_6e5341db_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = defineComponent({
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
      default: "primary",
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
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
const _hoisted_1$3 = ["disabled"];
const _hoisted_2$3 = {
  key: 0,
  class: "v-btn--img"
};
const _hoisted_3$3 = ["src"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass([_ctx.setSizeClass, _ctx.setStatus]),
    disabled: _ctx.disabled
  }, [
    _ctx.icon ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
      createElementVNode("img", { src: _ctx.setIcon }, null, 8, _hoisted_3$3)
    ])) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$3);
}
var VButton = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
var VTable_scss_vue_type_style_index_0_src_52ffde09_lang = "";
const _sfc_main$2 = defineComponent({
  name: "VTable",
  props: {
    data: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    }
  }
});
const _hoisted_1$2 = { class: "v-table" };
const _hoisted_2$2 = { class: "v-table__body-wrapper" };
const _hoisted_3$2 = { class: "responsive-table" };
const _hoisted_4$2 = { class: "v-table__cell" };
const _hoisted_5$2 = { class: "v-table__cell" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createElementVNode("div", _hoisted_2$2, [
      createElementVNode("table", _hoisted_3$2, [
        createElementVNode("thead", null, [
          createElementVNode("tr", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.headers, (col) => {
              return openBlock(), createElementBlock("th", _hoisted_4$2, toDisplayString(col), 1);
            }), 256))
          ])
        ]),
        createElementVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data, (row, index) => {
            return openBlock(), createElementBlock("tr", {
              class: "v-table__row",
              key: index
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.headers, (col) => {
                return openBlock(), createElementBlock("td", _hoisted_5$2, toDisplayString(row[col]), 1);
              }), 256))
            ]);
          }), 128))
        ])
      ])
    ])
  ]);
}
var VTable = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
var VSelect_scss_vue_type_style_index_0_src_4a2786ac_lang = "";
const _hoisted_1$1 = { class: "v-select" };
const _hoisted_2$1 = {
  key: 0,
  class: "v-select--label"
};
const _hoisted_3$1 = ["for"];
const _hoisted_4$1 = { class: "v-selec--content" };
const _hoisted_5$1 = ["name", "id", "required", "disabled"];
const _hoisted_6$1 = {
  key: 0,
  value: ""
};
const _hoisted_7$1 = ["value", "selected"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    },
    required: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "lg"
    },
    modelValue: {
      type: [String, Number],
      default: ""
    }
  },
  emits: ["onChange", "update:modelValue"],
  setup(__props, { emit }) {
    const selected = ref(null);
    watch(["modelValue"], (modelValue) => {
      if (modelValue !== selected.value) {
        selected.value = modelValue;
      }
    });
    function selectChange(event) {
      selected.value = event.target.value;
      emit("onChange", selected.value);
      emit("update:modelValue", selected.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        __props.label ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createElementVNode("label", { for: __props.id }, toDisplayString(__props.label), 9, _hoisted_3$1)
        ])) : createCommentVNode("v-if", true),
        createElementVNode("div", _hoisted_4$1, [
          createElementVNode("select", {
            class: normalizeClass(`v-select--input v-select--size-${__props.size}`),
            name: __props.name,
            id: __props.id,
            required: __props.required,
            disabled: __props.disable,
            onChange: _cache[0] || (_cache[0] = ($event) => selectChange($event))
          }, [
            __props.placeholder ? (openBlock(), createElementBlock("option", _hoisted_6$1, toDisplayString(__props.placeholder), 1)) : createCommentVNode("v-if", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option) => {
              return openBlock(), createElementBlock("option", {
                value: option.value,
                selected: option.value == selected.value,
                "aria-checked": "false"
              }, toDisplayString(option.label), 9, _hoisted_7$1);
            }), 256))
          ], 42, _hoisted_5$1)
        ])
      ]);
    };
  }
});
const defaultOptions = {
  page: 1,
  pageSize: 5,
  numItems: 0,
  numButtons: 5
};
var usePaginator = (userOptions) => {
  const options = __spreadValues(__spreadValues({}, defaultOptions), userOptions);
  const _page = ref(options.page);
  const pageSize = ref(options.pageSize);
  const numItems = ref(options.numItems);
  const numButtons = ref(options.numButtons);
  const page = computed({
    get: () => _page.value,
    set: (val) => {
      if (val > 0 && val <= numPages.value) {
        _page.value = val;
      }
    }
  });
  const numPages = computed(() => Math.ceil(numItems.value / pageSize.value));
  watch([pageSize, numItems], () => {
    if (page.value > numPages.value) {
      page.value = numPages.value;
    }
  });
  const slice = computed(() => {
    const start = (page.value - 1) * pageSize.value;
    const end = Math.min(start + pageSize.value, numItems.value);
    return [start, end];
  });
  const hasPrev = computed(() => page.value > 1);
  const hasNext = computed(() => page.value < numPages.value);
  const goPrev = () => {
    if (hasPrev.value)
      [
        page.value--
      ];
    return page.value;
  };
  const goNext = () => {
    if (hasNext.value) {
      page.value++;
    }
    return page.value;
  };
  const goStart = () => {
    page.value = 1;
    return 1;
  };
  const goEnd = () => {
    page.value = numPages.value;
    return numPages.value;
  };
  const buttons = computed(() => {
    if (numPages.value <= numButtons.value) {
      return fullButtons(page.value, numPages.value);
    } else {
      return partialButtons(page.value, numPages.value, numButtons.value);
    }
  });
  return {
    page,
    pageSize,
    numItems,
    numButtons,
    numPages,
    slice,
    hasPrev,
    hasNext,
    goPrev,
    goNext,
    goStart,
    goEnd,
    buttons
  };
};
function fullButtons(page, numPages) {
  return consecutiveSlots(1, page).concat({ page, active: true, ellipsis: false }).concat(consecutiveSlots(page + 1, numPages + 1));
}
function partialButtons(page, numPages, numButtons) {
  let slotsLeft = 0, slotsRight = 0;
  const halvedButtons = Math.floor(numButtons / 2);
  if (page <= halvedButtons) {
    slotsLeft = page - 1;
    slotsRight = numButtons - slotsLeft - 1;
  } else if (page >= numPages - halvedButtons) {
    slotsRight = numPages - page;
    slotsLeft = numButtons - slotsRight - 1;
  } else if (numButtons % 2 === 0) {
    slotsLeft = halvedButtons - 1;
    slotsRight = halvedButtons;
  } else {
    slotsLeft = halvedButtons;
    slotsRight = halvedButtons;
  }
  const pagesPrev = page - 1;
  const pagesNext = numPages - page;
  let list = [];
  if (pagesPrev <= slotsLeft) {
    list = consecutiveSlots(1, pagesPrev + 1);
  } else if (slotsLeft > 0) {
    const ellipsis = slotsLeft === 2 ? 2 : Math.ceil(slotsLeft / 2);
    const remaining = slotsLeft - ellipsis;
    let ellipsisPage = Math.ceil(pagesPrev / 2);
    if (pagesPrev % 2 === 0) {
      ellipsisPage++;
    }
    list = consecutiveSlots(1, ellipsis).concat({ page: ellipsisPage, active: false, ellipsis: true }).concat(consecutiveSlots(page - remaining, page));
  }
  list.push({ page, active: true, ellipsis: false });
  if (pagesNext <= slotsRight) {
    list = list.concat(consecutiveSlots(page + 1, numPages + 1));
  } else if (slotsRight > 0) {
    const ellipsis = slotsRight === 2 ? 1 : Math.floor(slotsRight / 2) + 1;
    const remaining = slotsRight - ellipsis;
    const ellipsisPage = page + Math.ceil(pagesNext / 2);
    list = list.concat(consecutiveSlots(page + 1, page + ellipsis)).concat({ page: ellipsisPage, active: false, ellipsis: true }).concat(consecutiveSlots(numPages - remaining + 1, numPages + 1));
  }
  return list;
}
function consecutiveSlots(startIdx, endIdx) {
  const result = [];
  for (let idx = startIdx; idx < endIdx; idx++) {
    result.push({ page: idx, active: false, ellipsis: false });
  }
  return result;
}
var VPagination_scss_vue_type_style_index_0_src_3245b22b_lang = "";
var VPagination_scss_vue_type_style_index_1_src_3245b22b_lang = "";
const _sfc_main = defineComponent({
  name: "VPagination",
  components: { VSelect: _sfc_main$1 },
  props: {
    count: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 5
    }
  },
  emits: ["onChangePagination"],
  setup(props, { emit }) {
    const options = [
      {
        value: "5",
        label: "5 items"
      },
      {
        value: "10",
        label: "10 items"
      },
      {
        value: "30",
        label: "30 items"
      },
      {
        value: "50",
        label: "50 items"
      },
      {
        value: "100",
        label: "100 items"
      }
    ];
    const { page, pageSize, hasPrev, hasNext, goPrev, goNext, buttons, numPages, numItems } = usePaginator({
      pageSize: props.size,
      numButtons: 5
    });
    watch(() => props.count, (count) => {
      numItems.value = count;
    });
    watch([page, pageSize], ([newPage, newPageSize]) => {
      emit("onChangePagination", { page: newPage, page_size: newPageSize });
    });
    return { options, hasPrev, hasNext, pageSize, goPrev, goNext, buttons, page, numPages };
  }
});
const _hoisted_1 = { class: "box--pagination" };
const _hoisted_2 = { class: "box--pagination-count" };
const _hoisted_3 = { class: "box--pagination-pages" };
const _hoisted_4 = { class: "box--pagination-pages-size" };
const _hoisted_5 = { class: "box--pagination-pages-itens" };
const _hoisted_6 = { class: "pagination" };
const _hoisted_7 = /* @__PURE__ */ createElementVNode("a", { class: "pagination_li--item" }, null, -1);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = ["onClick"];
const _hoisted_10 = /* @__PURE__ */ createElementVNode("a", { class: "pagination_li--item" }, null, -1);
const _hoisted_11 = [
  _hoisted_10
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_select = resolveComponent("v-select");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, toDisplayString(_ctx.count) + " items ", 1),
    createElementVNode("div", _hoisted_3, [
      createElementVNode("div", _hoisted_4, [
        createVNode(_component_v_select, {
          id: "select_page_size",
          name: "select_page_size",
          options: _ctx.options,
          size: "sm",
          modelValue: _ctx.pageSize,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.pageSize = $event)
        }, null, 8, ["options", "modelValue"])
      ]),
      createElementVNode("div", _hoisted_5, [
        createElementVNode("ol", _hoisted_6, [
          createElementVNode("li", {
            class: normalizeClass(["pagination_li", !_ctx.hasPrev && "disabled"]),
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.goPrev && _ctx.goPrev(...args))
          }, _hoisted_8, 2),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.buttons, (button, idx) => {
            return openBlock(), createElementBlock("li", {
              class: "pagination_li",
              key: idx,
              onClick: ($event) => _ctx.page = button.page
            }, [
              createElementVNode("a", {
                class: normalizeClass(["pagination_li--item", { "active": button.active }])
              }, toDisplayString(button.ellipsis ? "..." : button.page), 3)
            ], 8, _hoisted_9);
          }), 128)),
          createElementVNode("li", {
            class: normalizeClass(["pagination_li", !_ctx.hasNext && "disabled"]),
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.goNext && _ctx.goNext(...args))
          }, _hoisted_11, 2)
        ])
      ])
    ])
  ]);
}
var VPagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { VButton, VPagination, VTable };
