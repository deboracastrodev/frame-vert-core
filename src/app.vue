<template>
  <div style="width: 50%; padding-left: 10%">
    <h1>Componentes</h1>
    <h4>Tabela</h4>
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
    <h4>Botões</h4>
    <div class="d-flex">
      <v-button icon="close" status="helper" @click="onClickButton"
        >Erro: 402 favor falar com desenvolvedor
      </v-button>
      <v-button icon="alert" status="warning" @click="onClickButtonWarning"
        >Aviso</v-button
      >
      <v-button icon="check" status="success">Sucesso</v-button>
      <v-button icon="info" status="primary">Padrão</v-button>
    </div>
    <br />
    <v-tab :eixo="typeTab">
      <template #header>
        <v-tab-header tabTo="tab1" :eixo="typeTab" actived
          >Exemplo 1</v-tab-header
        >
        <v-tab-header tabTo="tab2" :eixo="typeTab">Exemplo 2</v-tab-header>
      </template>
      <div>
        <v-tab-content :eixo="typeTab" contentId="tab1">
          <h2>Le po pul</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            numquam laboriosam debitis, cupiditate dolores tenetur libero?
            Provident, dicta iste expedita animi dolorum, temporibus excepturi
            maxime, ea dolorem eveniet consequuntur rerum!
          </p>
        </v-tab-content>
        <v-tab-content :eixo="typeTab" contentId="tab2">
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
    <br />
    <h4>Paginação</h4>
    <div>
      <v-pagination
        :count="pagination.count"
        :page="pagination.page"
        :size="pagination.size"
        @change="onChange"
      >
      </v-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { VTable, VButton, VPagination } from "./index";
import VTab from "./components/tab/VTab.vue";
import VTabContent from "./components/tab/VTabContent.vue";
import VTabHeader from "./components/tab/VTabHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    VTable,
    VButton,
    VTab,
    VTabContent,
    VTabHeader,
    VPagination,
  },
  data() {
    return {
      typeTab: "x",
    };
  },
  setup() {
    function onChange(item: any) {
      console.log(item);
    }

    const pagination = reactive({
      count: 50,
      page: 1,
      size: 5,
    });

    return {
      onChange,
      pagination,
    };
  },
  methods: {
    onClickButton() {
      alert("Erro: 402 favor falar com desenvolvedor");
    },
    onClickButtonWarning() {
      alert("Aviso");
    },
  },
});
</script>
<style lang="scss">
.d-flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
