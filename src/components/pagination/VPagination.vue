<template>
  <div class="box--pagination">
    <div class="box--pagination-count">
      {{ count }} items
    </div>

    <div class="box--pagination-pages">
      <div class="box--pagination-pages-size">
        <v-select id="select_page_size" name="select_page_size" :options="sizeOptions" size="sm" v-model="pageSize">
        </v-select>
      </div>
      <div class="box--pagination-pages-itens">
        <ol class="pagination">
          <li class="pagination_li" :class="!hasPrev && 'disabled'" @click="goPrev">
            <a class="pagination_li--item"></a>
          </li>
          <li class="pagination_li" v-for="(button, idx) in buttons" :key="idx" @click="page = button.page">
            <a class="pagination_li--item" :class="{ 'active': button.active }">{{ button.ellipsis ? '...' : button.page
            }}</a>
          </li>
          <li class="pagination_li" :class="!hasNext && 'disabled'" @click="goNext">
            <a class="pagination_li--item"></a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, PropType } from "vue";
import { VSelect } from '@/components/index'
import usePaginator from './usePagination'
import { ISelectOptions } from "../form/select/VSelect.vue";

export default defineComponent({
  name: "VPagination",
  components: { VSelect },
  props: {
    count: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    sizeDefault: {
      type: Number,
      default: 5,
    },
    sizeOptions: {
      type: Array as PropType<Array<ISelectOptions>>,
      default: () => [
        {
          value: "5",
          label: "5 items",
        },
        {
          value: "10",
          label: "10 items",
        },
        {
          value: "30",
          label: "30 items",
        },
        {
          value: "50",
          label: "50 items",
        },
        {
          value: "100",
          label: "100 items",
        },
      ],
    },
    qtdeButtonsPaginate: {
      type: Number,
      default: 8,
    },
  },
  emits: ["onChangePagination"],
  setup(props, { emit }) {

    const { page, pageSize, hasPrev, hasNext, goPrev, goNext, buttons, numPages, numItems } = usePaginator({
      pageSize: props.sizeDefault,
      numButtons: props.qtdeButtonsPaginate,
    })

    watch(() => props.count, (count) => {
      numItems.value = count;
    });

    watch([page, pageSize], ([newPage, newPageSize]) => {
      emit('onChangePagination', { page: newPage, page_size: newPageSize });
    })

    return { hasPrev, hasNext, pageSize, goPrev, goNext, buttons, page, numPages };
  }
});

</script>

<style src="./VPagination.scss" lang="scss">
</style>

















































































































































<style lang="scss" src="./VPagination.scss" />
