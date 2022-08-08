<template>
  <div class="box">
    <div class="tab--x">
      <slot name="header"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VTab",
  props: {
    eixo: {
      type: String,
      default: "x",
    },
  },
  methods: {
    activeTab(): void {
      const tabHead = event.path[1].children;
      for (let item of tabHead) item.classList.remove("active");
      event.target.classList.add("active");
      this.showContentTab(
        event?.target.dataset.tabTo,
        event?.target.dataset.tabType
      );
    },
    showContentTab(contentId: String, typeTab: String): void {
      const tabContents = document.getElementsByClassName("tab--content");
      for (let item of tabContents) {
        if (typeTab == item.dataset.tabContentType) item.style.display = "none";

        if (contentId == item.getAttribute("id")) {
          console.log(contentId == item.getAttribute("id"));
          item.style.display = "block";
        }
      }
    },
  },
});
</script>

<style src="./VTab.scss" />
