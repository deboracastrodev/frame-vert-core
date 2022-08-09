<template>
  <div class="v-select">
    <div class="v-select--label">
      <label :for="id">{{ label }}</label>
    </div>
    <div class="v-selec--content">
      <select :class="`v-select--input v-select--size-${size}`" :name="name" :id="id" :required="required"
        :disabled="disable" @change="selectChange($event)">
        <option value="" v-if="placeholder">{{ placeholder }}</option>
        <option v-for="option in options" :value="option.value" :selected="option.value == selected"
          aria-checked="false">
          {{ option.label }}</option>
      </select>
    </div>
  </div>
</template>
<style src="./VSelect.scss" lang="scss">
</style>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VSelect",
  props: {
    id: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: [],
    },
    required: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "lg",
    },
  },
  methods: {
    selectChange(event: any): void {
      this.$emit("change", event.target.value);
    },
  },
  data(): any {
    return {
      selected: this.value,
    };
  },
  watch: {
    value(newValue: any): void {
      this.selected = newValue;
    },
  },
});
</script>