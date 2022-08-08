<template>
  <div class="v-table">
    <div class="v-table__body-wrapper">
      <table class="responsive-table">
        <thead>
          <tr>
            <th v-for="col in cols" class="v-table__cell">{{ col }}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="v-table__row" v-for="(row, index) in rows" :key="index">
            <td v-for="col in cols" class="v-table__cell">{{ (row as any)[(col as any)] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts" setup>

defineProps({
  rows: {
    type: Array,
    default: () => [
      { column1: 'row1column1', column2: 'row1column2', column3: 'row1column3' },
      { column1: 'row2column1', column2: 'row2column2', column3: 'row2column3' },
      { column1: 'row3column1', column2: 'row3column2', column3: 'row3column3' }
    ]
  },
  cols: {
    type: Array,
    default: () => ['column1', 'column2', 'column3']
  }
})
</script>

<style src="./VTable.scss" />