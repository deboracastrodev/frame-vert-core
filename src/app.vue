<template>
  <div style="width: 50%; padding-left: 20%">
    <h1>Componente tabela</h1>
    <v-table :rows="[
      {
        column1: 'row1column1',
        column2: 'row1column2',
        column3: 'row1column3',
      },
      {
        column1: 'row2column1',
        column2: 'row2column2',
        column3: 'row2column3',
      },
      {
        column1: 'row3column1',
        column2: 'row3column2',
        column3: 'row3column3',
      },
    ]" :cols="['column1', 'column2', 'column3']" />
  </div>
  <div style="width: 50%; padding-left: 20%">
    <h1>Componente botão</h1>
    <h2>Grande</h2>
    <v-button size="lg" status="default">Default</v-button>
    <h2>Médio</h2>
    <v-button size="md" status="helper">Helper</v-button>
    <h2>Pequeno</h2>
    <v-button size="sm" status="warning">warning</v-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VTable from "./components/table/VTable.vue";
import VButton from "./components/button/VButton.vue";

export default defineComponent({
  name: "App",
  components: {
    VTable,
    VButton,
  },
});
</script>
