<template>
  <button :class="[setSizeClass, setStatus]">
    <div v-if="icon" class="v-btn--img">
      <img :src="setIcon" />
    </div>
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
      required: true,
    },
    icon: {
      type: String,
      required: false,
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
    setIcon(): string {
      return `/static/icons/${this.icon}.svg`;
    },
  },
});
</script>

<style src="./VButton.scss" />
