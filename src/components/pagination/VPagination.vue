<template>
  <div class="box--pagination">
    <div class="box--pagination-count">
      {{ count }} items
    </div>
    <div class="box--pagination-size">
      <v-select id="select_page_size" name="s-page-size" :options="options" size="sm" @change="onChangePageSize">
      </v-select>
    </div>
    <div class="box--pagination-pages">
      <ul class="pagination">
        <li>
          <a class="pagination--item"></a>
        </li>
        <li v-for="(page, index) in pages">
          <a class="pagination--item" :class="{ 'active': currentPage == page }" @click="onClickPage(page)">{{ page
          }}</a>
        </li>
        <li>
          <a class="pagination--item"></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style src="./VPagination.scss" lang="scss">
</style>
<script lang="ts">
import { defineComponent } from "vue";
import { VSelect } from '@/components/index'

export default defineComponent({
  name: "VPagination",
  components: { VSelect },
  props: {
    count: {
      type: Number,
      default: 0,
    },
    page: {
      type: Number,
      default: 1,
    },
    size: {
      type: Number,
      default: 5,
    }
  },
  data() {
    return {
      currentPage: 1,
      currentSize: 5,
      options: [{ label: '5 items', value: 5 }, { label: '10 items', value: 10 }, { label: '50 items', value: 50 }, { label: '100 items', value: 100 }],
    };
  },
  computed: {
    pages(): number[] {
      const pages = [];
      const count = this.count;
      const page = this.page;
      const size = this.size;
      const totalPages = Math.ceil(count / size);
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }
  },
  methods: {
    onClickPage(page: number) {
      this.currentPage = page;
      this.$emit("onChangePagination", { page: page, page_size: this.currentSize });
    },
    onChangePageSize(size: number) {
      this.currentSize = size;
      this.$emit("onChangePagination", { page: this.currentPage, page_size: size });
    }
  }
});

</script>























































<style lang="scss" src="./VPagination.scss" />
