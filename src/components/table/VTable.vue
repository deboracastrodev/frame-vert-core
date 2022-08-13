<template>
  <div class="v-table">
    <div class="v-table__body-wrapper">
      <table class="responsive-table">
        <thead>
          <tr>
            <th v-for="col in headers" class="v-table__cell" :class="[{
              'sortable': col.sortable,
              'none': col.sortable && col.sortType === 'none',
              'desc': col.sortable && col.sortType === 'desc',
              'asc': col.sortable && col.sortType === 'asc',
              // eslint-disable-next-line max-len
            }]"> {{ col.label }}</th>
          </tr>
        </thead>
        <tbody>
          <template v-for=" (item, index) in data" :key="index">
            <tr class="v-table__row" @click="clickRow(item)">
              <td v-for="col in             headers" class="v-table__cell">
                <slot v-if="slots[`item-${col.prop}`]" :name="`item-${col.prop}`" v-bind="item" />
                <template v-else>
                  {{ generateColumnContent(col.prop, item as any) }}
                </template>
              </td>
            </tr>
          </template>

        </tbody>
      </table>
    </div>
  </div>
</template>
<style src="./VTable.scss" lang="scss">
</style>
<script lang="ts">
import { defineComponent, PropType, useSlots } from 'vue';
import { generateColumnContent } from '../../utils';

export interface IHeader {
  label: string;
  personalizaded?: boolean;
  sortable?: boolean;
  prop: string;
  sortType?: 'none' | 'desc' | 'asc';
}

export default defineComponent({
  name: 'VTable',
  props: {
    data: {
      type: Array,
      required: true,
    },
    headers: {
      type: Array as PropType<Array<IHeader>>,
      required: true,
    },
  },
  emits: ['click-row'],
  setup(props, { emit }) {
    const slots = useSlots();
    const clickRow = (item: any) => {
      emit('click-row', item);
    };
    return {
      slots,
      clickRow,
      generateColumnContent
    };
  }
});
</script>
