<template>

  <v-table :rows="[
    { column1: 'row1column1', column2: 'row1column2', column3: 'row1column3' },
    { column1: 'row2column1', column2: 'row2column2', column3: 'row2column3' },
    { column1: 'row3column1', column2: 'row3column2', column3: 'row3column3' }
  ]" :cols="['column1', 'column2', 'column3']" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VTable from './VTable.vue'

export default defineComponent({
  name: 'App',
  components: {
    VTable
  },
})
</script>
