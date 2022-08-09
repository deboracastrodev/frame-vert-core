<template>
  <div class="box box--select input-size-{{size}}">
    <div>
      <div class="input-group">
        <label :for="id">{{ label }}</label>
        <select name="{{name}}" id="{{id}}" :required="required" :disabled="disable" @change="selectChange($event)">
          <option value="">Select</option>
          <option v-for="option in options" :value="option.value" :selected="option.value == selected"
            aria-checked="false">{{ option.label }}</option>
        </select>
      </div>
    </div>
  </div>
</template>
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