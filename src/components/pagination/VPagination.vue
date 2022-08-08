<template>
  <ul class="pagination">
    <li>
      <a class="pagination--item"></a>
    </li>
    <li v-for="(page, index) in pages">
      <a class="pagination--item" :class="{ 'active': currentPage == page }" @click="onClickPage(page)">{{ page }}</a>
    </li>
    <li>
      <a class="pagination--item"></a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VPagination",
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
    },
    cols: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentPage: 1,
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
      this.$emit("change", page);
    }
  }
});

</script>




















<style lang="scss" src="./VPagination.scss" />
