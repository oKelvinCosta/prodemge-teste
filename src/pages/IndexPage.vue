<template>
  <q-page class="index">
    <div class="row">
      <h4>Página Inicial</h4>
    </div>
    <q-table
      flat
      bordered
      title="Contratos"
      :rows="rows"
      :columns="columns"
      row-key="codCliente"
      :filter="filter"
    >
      <!-- Input Pesquisar -->
      <template v-slot:top-right>
        <q-select
          outlined
          dense
          label="Filtrar por Cliente"
          v-model="filter"
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          :options="options"
          @filter="filterFn"
          style="width: 300px"
          clearable
          @clear="clearFilter"
        />
      </template>

      <!-- Input Pesquisar -->

      <!-- Código -->
      <template v-slot:body-cell-codCliente="props">
        <q-td :props="props">
          <div>
            <q-badge :label="props.row.codCliente" />
          </div>
        </q-td>
      </template>
      <!-- Código -->

      <!-- Cliente -->
      <template v-slot:body-cell-cliente="props">
        <q-td :props="props">
          <div class="my-table-details">
            <b>{{ props.row.cliente }}</b>
          </div>
        </q-td>
      </template>
      <!-- Cliente -->

      <!-- Btn detalhes -->
      <!-- Tem acesso as propriedades da linha, por isso usa uma variavel qualquer -->
      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <RouterLink :to="detalhePage + props.row.id">
            <q-btn
              outline
              dense
              color="primary"
              icon="poll"
              label="detalhes"
              class="q-pl-sm q-pr-sm"
            />
          </RouterLink>
        </q-td>
      </template>
      <!-- Btn detalhes -->
    </q-table>
  </q-page>
</template>

<script>
var stringOptions = [];
var options = ref(stringOptions);
</script>

<script setup>
import { ref } from "vue";
const columns = [
  {
    name: "codCliente",
    label: "Código",
    align: "left",
    field: "codCliente",
    sortable: true,
  },
  {
    name: "cliente",
    label: "Cliente",
    align: "left",
    field: "cliente",
    sortable: true,
  },
  {
    name: "descricao",
    label: "Descrição",
    align: "left",
    field: "descricao",
  },
  {
    name: "dataAssinatura",
    label: "Início",
    align: "center",
    field: "dataAssinatura",
    sortable: true,
  },
  {
    name: "dataFim",
    label: "Fim",
    align: "center",
    field: "dataFim",
    sortable: true,
  },
  {
    name: "action",
    label: "Ação",
    align: "center",
  },
];

defineOptions({
  name: "IndexPage",
  data() {
    return {
      filter: ref(""),
      rows: [],
      detalhePage: `/detalhes/`,
      options,
      filterFn(val, update, abort) {
        update(() => {
          const needle = val.toLowerCase();
          options.value = stringOptions.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        });
      },
      apiClientes: {
        clientes: [
          {
            id: 1,
            nome: "Prefeitura de Belo Horizonte",
            codCliente: "PBH01",
          },
          {
            id: 2,
            nome: "Corpo de Bombeiros de Minas Gerais",
            codCliente: "BOM01",
          },
        ],
      },
      apiContratos: {
        contratos: [
          {
            id: 1,
            descricao: "Comunicação",
            cliente: "Prefeitura de Belo Horizonte",
            codCliente: "PBH01",
            dataAssinatura: "01/01/2024",
            dataFim: "01/01/2025",
            itens: [
              {
                descricao: "email",
                detalhe:
                  "Quantidade de contas de e-mail com 1gb de armazenamento base.",
                cota: 300,
              },
              {
                descricao: "espaco_extra",
                detalhe:
                  "Quantidade de Gigabytes extras disponíveis para alocação em contas de e-mail.",
                cota: 100,
              },
              {
                descricao: "videoconferencia",
                detalhe:
                  "Quantidade de contas de e-mail que podem realizar videoconferência.",
                cota: 30,
              },
            ],
            relatorios: [
              {
                data: "01/2024",
                itens: [
                  {
                    descricao: "email",
                    uso: 180,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 20,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 12,
                  },
                ],
              },
              {
                data: "02/2024",
                itens: [
                  {
                    descricao: "email",
                    uso: 234,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 27,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 15,
                  },
                ],
              },
              {
                data: "03/2024",
                itens: [
                  {
                    descricao: "email",
                    uso: 278,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 33,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 21,
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            descricao: "Comunicação",
            cliente: "Corpo de Bombeiros de Minas Gerais",
            codCliente: "BOM01",
            dataAssinatura: "01/01/2023",
            dataFim: "01/01/2027",
            itens: [
              {
                descricao: "email",
                detalhe:
                  "Quantidade de contas de e-mail com 1gb de armazenamento base.",
                cota: 8000,
              },
              {
                descricao: "espaco_extra",
                detalhe:
                  "Quantidade de Gigabytes extras disponíveis para alocação em contas de e-mail.",
                cota: 800,
              },
              {
                descricao: "videoconferencia",
                detalhe:
                  "Quantidade de contas de e-mail que podem realizar videoconferência.",
                cota: 200,
              },
            ],
            relatorios: [
              {
                data: "01/2023",
                itens: [
                  {
                    descricao: "email",
                    uso: 1320,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 20,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 20,
                  },
                ],
              },
              {
                data: "02/2023",
                itens: [
                  {
                    descricao: "email",
                    uso: 2475,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 20,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 20,
                  },
                ],
              },
              {
                data: "03/2023",
                itens: [
                  {
                    descricao: "email",
                    uso: 3109,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 50,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 25,
                  },
                ],
              },
              {
                data: "04/2023",
                itens: [
                  {
                    descricao: "email",
                    uso: 3848,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 62,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 33,
                  },
                ],
              },
              {
                data: "05/2023",
                itens: [
                  {
                    descricao: "email",
                    uso: 4331,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 57,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 28,
                  },
                ],
              },
              {
                data: "06/2023",
                itens: [
                  {
                    descricao: "email",
                    uso: 4126,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 55,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 26,
                  },
                ],
              },
              {
                data: "07/2023",
                itens: [
                  {
                    descricao: "email",
                    uso: 4523,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 55,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 26,
                  },
                ],
              },
              {
                data: "08/2023",
                itens: [
                  {
                    descricao: "email",
                    uso: 5002,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 58,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 26,
                  },
                ],
              },
              {
                data: "09/2023",
                itens: [
                  {
                    descricao: "email",
                    uso: 5342,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 60,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 30,
                  },
                ],
              },
              {
                data: "10/2023",
                itens: [
                  {
                    descricao: "email",
                    uso: 5597,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 60,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 30,
                  },
                ],
              },
              {
                data: "11/2023",
                itens: [
                  {
                    descricao: "email",
                    uso: 5829,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 60,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 30,
                  },
                ],
              },
              {
                data: "12/2023",
                itens: [
                  {
                    descricao: "email",
                    uso: 6154,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 60,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 35,
                  },
                ],
              },
              {
                data: "01/2024",
                itens: [
                  {
                    descricao: "email",
                    uso: 6221,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 60,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 40,
                  },
                ],
              },
              {
                data: "02/2024",
                itens: [
                  {
                    descricao: "email",
                    uso: 6358,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 70,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 40,
                  },
                ],
              },
              {
                data: "03/2024",
                itens: [
                  {
                    descricao: "email",
                    uso: 6511,
                  },
                  {
                    descricao: "espaco_extra",
                    uso: 72,
                  },
                  {
                    descricao: "videoconferencia",
                    uso: 40,
                  },
                ],
              },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    this.getContrato();
    this.getClientes();
  },
  methods: {
    clearFilter() {
      this.filter = ""; // Limpa o valor do filtro
    },
    getClientes() {
      this.$axios
        .get("api.prodemge.gov.br/clientes")
        .then((res) => {
          // Resposta viria por aqui se a API fosse verdadeira
        })
        .catch((err) => {
          // Como não é possível acessar a API, carregarei com dados falsos
          // Organizo em um array simples
          this.apiClientes.clientes.map(function (param, i) {
            stringOptions[i] = param.nome;
          });
        });
    },
    getContrato() {
      this.$axios
        .get("api.prodemge.gov.br/contratos")
        .then((res) => {
          // Resposta viria por aqui se a API fosse verdadeira
        })
        .catch((err) => {
          // Como não é possível acessar a API, carregarei com dados falsos
          this.rows = this.apiContratos.contratos;
        });
    },
  },
});
</script>
