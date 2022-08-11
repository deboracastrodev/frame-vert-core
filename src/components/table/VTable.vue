<template>
  <div class="v-table">
    <div class="v-table__body-wrapper">
      <table class="responsive-table">
        <thead>
          <tr>
            <th v-for="col in headers" class="v-table__cell">{{ col }}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="v-table__row" v-for="(row, index) in data" :key="index">
            <td v-for="col in headers" class="v-table__cell">{{ (row as any)[(col as any)] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VTable',
  props: {
    data: {
      type: Array,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style src="./VTable.scss" lang="scss" />