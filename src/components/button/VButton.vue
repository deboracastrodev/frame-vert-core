<template>
  <button :class="[setSizeClass, setStatus]">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VButton",
  props: {
    size: {
      type: String,
      default: "md",
    },
    outline: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "helper",
    },
  },
  computed: {
    setSizeClass(): string {
      return `v-btn--${this.size}`;
    },
    setStatus(): string {
      const status = this.outline
        ? `v-btn__outline--${this.status}`
        : `v-btn--${this.status}`;
      return status;
    },
  },
});
</script>



<style src="./VButton.scss" />
