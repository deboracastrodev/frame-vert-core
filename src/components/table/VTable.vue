<template>
  <!-- create a hmtl for a table component -->
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
<style src="./VTable.scss">
</style>
<!-- <style lang="css">
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

.v-table table {
  border-spacing: 0;
}

.v-table thead {
  color: #00747a;
  font-weight: 500;
}

.v-table thead tr {
  font-weight: 700;
}

.v-table__header-wrapper {
  overflow: hidden;
  width: 100%;
}

.v-table__header {
  table-layout: fixed;
  border-collapse: separate;
  background-color: #e6f1f2;
  width: 100%;
}

.v-table .v-table__header .v-table__cell {
  padding: 8px 0;
  min-width: 0;
  box-sizing: border-box;
  text-overflow: ellipsis;
  vertical-align: middle;
  position: relative;
  text-align: left;
  z-index: 1;
  font-size: .8125rem;
}

.v-table__body-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.v-table__body {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.v-table tbody {
  vertical-align: middle;
  border-color: inherit;
}

.v-table .v-table__row {
  border-bottom: solid .063rem #e9e9e9;
  text-decoration: none;
  line-height: 1rem;
}

.v-table .v-table__body .v-table__cell {
  box-sizing: border-box;
  vertical-align: middle;
  font-weight: 400;
  padding: 1rem 0;
}

.v-table--enable-row-hover .v-table__body tr:hover>td.v-table__cell {
  background-color: rgba(230, 241, 242, .4);
}
</style> -->