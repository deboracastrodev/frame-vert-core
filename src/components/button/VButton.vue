<template>
  <button
    :class="[setSizeClass, setStatus]"
    :disabled="disabled"
    type="button"
    v-bind="$attrs"
  >
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
    status: {
      type: String,
      default: "primary",
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    style_type: {
      type: String,
      default: "solid",
    },
  },
  computed: {
    setSizeClass(): string {
      return `v-btn--${this.size}`;
    },
    setStatus(): string {
      return `v-btn__${this.style_type}--${this.status}`;
    },
  },
});
</script>

<style src="./VButton.scss" lang="scss" />
