<template>
  <div style="width: 50%; padding-left: 10%">
    <h1>Componentes</h1>
    <h4>Tabela</h4>
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
    <h4>Botões</h4>
    <div class="d-flex">
      <v-button icon="close" status="helper" @click="onClickButton">Erro: 402 favor falar com desenvolvedor
      </v-button>
      <v-button icon="alert" status="warning" @click="onClickButtonWarning">Aviso</v-button>
      <v-button icon="check" status="success">Sucesso</v-button>
      <v-button icon="info" status="primary">Padrão</v-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VTable, VButton } from "./index";

export default defineComponent({
  name: "App",
  components: {
    VTable,
    VButton,
  },
  methods: {
    onClickButton() {
      alert("Erro: 402 favor falar com desenvolvedor");
    },
    onClickButtonWarning() {
      alert("Aviso");
    },
  }
});
</script>
<style lang="scss">
.d-flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
/>
