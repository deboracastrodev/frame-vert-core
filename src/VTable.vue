<template>
  <!-- create a hmtl for a table component -->
  <div class="v-table">
    <div class="v-table__header-wrapper">
      <table class="v-table__header">
        <thead>
          <tr>
            <th v-for="col in cols">{{ col }}</th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="v-table__body-wrapper">
      <table class="table">
        <tbody>
          <tr v-for="row in rows">
            <td v-for="col in cols">{{ row[col] }}</td>
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
<style lang="css">
.v-table {
  position: relative;
  overflow-y: auto;
  box-sizing: border-box;
  flex: 1;
  font-size: 0.813rem;
  text-align: left;
  height: fit-content;
  width: 100%;
  color: #606266;
  background-color: #ffffff;
}

.v-table__header-wrapper {
  overflow: hidden;
  width: 100%;
}

.v-table__header {
  table-layout: fixed;
  border-collapse: separate;
}
</style>