<template>
  <div style="width: 50%; padding-left: 20%">
    <h1>Componente tabela</h1>
    <v-table
      :rows="[
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
      ]"
      :cols="['column1', 'column2', 'column3']"
    />
    <div class="d-flex">
      <v-button icon="close" status="helper"
        >Erro: 402 favor falar com desenvolvedor
      </v-button>
      <v-button icon="alert" status="warning">Aviso</v-button>
      <v-button icon="check" status="success">Sucesso</v-button>
      <v-button icon="info" status="primary">Padrão</v-button>
    </div>
    <br />
    <v-tab>
      <template #header>
        <v-tab-header tabTo="tab1" actived>Exemplo 1</v-tab-header>
        <v-tab-header tabTo="tab2">Exemplo 2</v-tab-header>
      </template>
      <div>
        <v-tab-content contentId="tab1">
          <h2>Le po pul</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            numquam laboriosam debitis, cupiditate dolores tenetur libero?
            Provident, dicta iste expedita animi dolorum, temporibus excepturi
            maxime, ea dolorem eveniet consequuntur rerum!
          </p>
        </v-tab-content>
        <v-tab-content contentId="tab2">
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sint
            sunt suscipit molestiae nemo laudantium, facere itaque atque
            dolorum, quo quasi est. Possimus explicabo alias aspernatur eveniet,
            voluptas vel aperiam!
          </p>
        </v-tab-content>
      </div>
    </v-tab>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VTable from "./components/table/VTable.vue";
import VButton from "./components/button/VButton.vue";
import VTab from "./components/tab/VTab.vue";
import VTabContent from "./components/tab/VTabContent.vue";
import VTabHeader from "./components/tab/VTabHeader.vue";
import VTabHeader from "./components/tab/VTabHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    VTable,
    VButton,
    VTab,
    VTabContent,
    VTabHeader,
  },
});
</script>
<style lang="scss">
.d-flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
/>
