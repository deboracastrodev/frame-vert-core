<template>
  <div class="v-select">
    <div class="v-select--label" v-if="label">
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
<script lang="ts" setup>
import { watch, defineProps, ref, PropType } from "vue";

export interface ISelectOptions {
  value: any
  label: string
}

defineProps({
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
    type: Array as PropType<Array<ISelectOptions>>,
    default: () => [],
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
  modelValue: {
    type: [String, Number],
    default: "",
  },
})

const emit = defineEmits<{
  (e: 'onChange', selected: any): void
  (e: 'update:modelValue', selected: any): void
}>()

const selected = ref<any>(null);

watch(["modelValue"], (modelValue) => {
  if (modelValue !== selected.value) {
    selected.value = modelValue;
  }
})

function selectChange(event: any): void {
  selected.value = event.target.value;
  emit("onChange", selected.value);
  emit("update:modelValue", selected.value);
}

</script>