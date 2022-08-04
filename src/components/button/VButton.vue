<template>
  <!-- <button class="v-btn--helper"></button> <br /> -->
  <button :class="[setSizeClass, setStatus]"><slot /></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

enum EStatus {
  helper = "helper",
  wargning = "wargning",
  success = "success",
  default = "default",
}

enum ESize {
  sm = "v-btn-sm",
  md = "v-btn-md",
  lg = "v-btn-lg",
}

export default defineComponent({
  name: "VButton",
  props: {
    size: {
      default: "md",
      validator: (item: string) => Object.keys(ESize).includes(item),
    },
    outline: {
      type: Boolean,
      default: false,
    },
    status: {
      default: "helper",
      validator: (item: string) => Object.keys(EStatus).includes(item),
    },
  },
  computed: {
    setSizeClass(): string {
      return ESize[this.size];
    },
    setStatus(): string {
      const status = this.outline
        ? `v-btn__outline--${EStatus[this.status]}`
        : `v-btn--${EStatus[this.status]}`;
      return status;
    },
  },
});
</script>

<style src="./VButton.scss" />
