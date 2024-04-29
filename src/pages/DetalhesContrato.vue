<template>
  <div class="detalhesPage">
    <!-- Breadcumb -->
    <div class="q-py-lg">
      <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" to="/" label="Início" />
        <q-breadcrumbs-el label="Detalhes" />
      </q-breadcrumbs>
    </div>
    <!-- Breadcumb -->
    <h4>Detalhes Contrato</h4>

    <!-- Info Cliente -->
    <div class="row q-mb-lg q-gutter-md" id="cliente">
      <div>
        <q-card flat bordered>
          <q-card-section class="info_cliente q-pa-lg">
            <div>
              <div class="q-badge q-pa-xs q-mr-md q-mt-sm">
                {{ contratoDetalhes.codCliente }}
              </div>
            </div>
            <div>
              <div class="cliente">
                <h6>{{ contratoDetalhes.cliente }}</h6>
              </div>
              <div class="descricao">{{ contratoDetalhes.descricao }}</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div>
        <q-card flat bordered>
          <q-card-section class="q-pa-lg">
            <div>
              <b class="q-pr-sm">Início:</b
              >{{ contratoDetalhes.dataAssinatura }}
            </div>
            <div><b class="q-pr-sm">Fim:</b>{{ contratoDetalhes.dataFim }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- Info Cliente -->

    <!-- Row Email -->
    <div>
      <div class="row q-mb-sm">
        <h6>E-mail</h6>
      </div>
      <div class="row q-mb-lg q-col-gutter-lg">
        <div class="col-12 col-md-7 col-lg-8">
          <q-card flat bordered>
            <q-card-section class="q-pt-lg">
              <apexchart
                type="line"
                height="350"
                :options="chartEmailL.chartOptions"
                :series="chartEmailL.series"
              ></apexchart>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-5 col-lg-4">
          <q-card flat bordered>
            <q-card-section class="q-pt-lg">
              <apexchart
                type="pie"
                width="380"
                :options="chartEmailP.chartOptions"
                :series="chartEmailP.series"
              ></apexchart>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!-- Row Email -->

    <!-- Row EspacoExtra -->
    <div>
      <div class="row q-mb-sm">
        <h6>Espaço Extra</h6>
      </div>

      <div class="row q-mb-lg q-col-gutter-lg">
        <div class="col-12 col-md-12 col-lg-8">
          <q-card flat bordered>
            <q-card-section class="q-pt-lg">
              <apexchart
                type="line"
                height="350"
                :options="chartEspacoExtraL.chartOptions"
                :series="chartEspacoExtraL.series"
              ></apexchart>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-12 col-lg-4">
          <q-card flat bordered>
            <q-card-section class="q-pt-lg">
              <apexchart
                type="pie"
                width="350"
                :options="chartEspacoExtraP.chartOptions"
                :series="chartEspacoExtraP.series"
              ></apexchart>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!-- Row EspacoExtra -->

    <!-- Row Videoconferencia -->
    <div>
      <div class="row q-mb-sm">
        <h6>Videoconferência</h6>
      </div>

      <div class="row q-mb-lg q-col-gutter-lg">
        <div class="col-12 col-md-12 col-lg-8">
          <q-card flat bordered>
            <q-card-section class="q-pt-lg">
              <apexchart
                type="line"
                height="350"
                :options="chartVideoconferenciaL.chartOptions"
                :series="chartVideoconferenciaL.series"
              ></apexchart>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-12 col-lg-4">
          <q-card flat bordered>
            <q-card-section class="q-pt-lg">
              <apexchart
                type="pie"
                width="350"
                :options="chartVideoconferenciaP.chartOptions"
                :series="chartVideoconferenciaP.series"
              ></apexchart>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!-- Row Videoconferencia -->

    <!-- Row Relatórios -->
    <div>
      <div class="row q-my-xl">
        <q-table
          class="col"
          flat
          bordered
          title="Relatórios"
          :rows="relatorios"
          :columns="columns"
          row-key="data"
          :filter="filter"
          :loading="loading"
        >
          <!-- Carregamento -->
          <template v-slot:loading>
            <q-inner-loading showing color="primary" />
          </template>
          <!-- Carregamento -->

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="data" :props="props">
                {{ props.row.data }}
              </q-td>
              <q-td
                v-for="item in props.row.itens"
                :key="item.descricao"
                :props="props"
              >
                <span
                  v-if="
                    contratoDetalhes.itens.find(
                      ({ descricao }) => descricao == item.descricao
                    ).cota -
                      item.uso >
                    1
                  "
                  ><b style="color: green">{{ item.uso }}</b
                  >/{{
                    contratoDetalhes.itens.find(
                      ({ descricao }) => descricao == item.descricao
                    ).cota
                  }}</span
                >
                <span v-else
                  ><b style="color: red">{{ item.uso }}</b
                  >/{{
                    contratoDetalhes.itens.find(
                      ({ descricao }) => descricao == item.descricao
                    ).cota
                  }}</span
                >
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
    <!-- Row Relatórios -->
  </div>
</template>

<script>
// let dataBR = '01/2023';
// dataBR.split('/');
// let formatada = dataBR.split('/')[1]+'-'+dataBR.split('/')[0];
// let da = new Date(formatada).getTime();

function comparaData(d) {
  let dataBR = d;
  dataBR.split("/");
  // fica um array assim: [02, 2024]
  let formatada = dataBR.split("/")[1] + "-" + dataBR.split("/")[0];
  // Insiro da forma EUA: 2024-02
  let da = new Date(formatada).getTime();
  return da;
}

const colors = {
  red: "#cf7680",
  gray: "#5fc778",
  darkGray: "#4c4c4c",
};

const responsiveP = [
  {
    breakpoint: 1600,
    options: {
      chart: {
        width: 350,
      },
      legend: {
        position: "bottom",
      },
    },
  },
  {
    breakpoint: 1440,
    options: {
      chart: {
        width: 350,
      },
      legend: {
        position: "bottom",
      },
    },
  },
  {
    breakpoint: 1200,
    options: {
      chart: {
        width: 300,
      },
      legend: {
        position: "bottom",
      },
    },
  },
  {
    breakpoint: 1024,
    options: {
      chart: {
        width: 350,
      },
      legend: {
        position: "right",
      },
    },
  },
  {
    breakpoint: 850,
    options: {
      chart: {
        width: 300,
      },
      legend: {
        position: "right",
      },
    },
  },
  {
    breakpoint: 576,
    options: {
      chart: {
        width: 300,
      },
      legend: {
        position: "right",
      },
    },
  },
  {
    breakpoint: 360,
    options: {
      chart: {
        width: 260,
      },
      legend: {
        position: "right",
      },
    },
  },
];
</script>

<script setup>
import { ref } from "vue";

const rows = [
  {
    data: "08/2024",
    itens: [
      {
        descricao: `email`,
        uso: 1000,
      },
      {
        descricao: `video`,
        uso: 500,
      },
    ],
  },
  {
    data: "12/2026",
    itens: [
      {
        descricao: `email`,
        uso: 1000,
      },
      {
        descricao: `video`,
        uso: 500,
      },
    ],
  },
  {
    data: "01/2025",
    itens: [
      {
        descricao: `email`,
        uso: 1000,
      },
      {
        descricao: `video`,
        uso: 500,
      },
    ],
  },
];

const columns = [
  {
    name: "data",
    label: "Data",
    align: "center",
    field: "data",
    sortable: true,
    sort: (a, b) => comparaData(a) - comparaData(b),
  },
  {
    name: "email",
    label: "Uso E-mail",
    align: "center",
    field: "email",
    sortable: true,
  },
  {
    name: "espaco_extra",
    label: "Uso Espaço Extra",
    align: "center",
    field: "espaco_extra",
    sortable: true,
  },
  {
    name: "videoconferencia",
    label: "Uso de Videoconferência",
    align: "center",
    field: "videoconferencia",
    sortable: true,
  },
];

defineOptions({
  name: "DetalhesContrato",
  data() {
    return {
      filter: ref(""),
      loading: ref(false),
      // Recebe Detalhes do Contrato
      contratoDetalhes: [],
      relatorios: [],

      // Gráficos de linha
      chartEmailL: {
        series: [
          {
            name: "Uso de E-mail",
            data: [1],
          },
        ],
        chartOptions: {
          colors: [colors.red],
          chart: {
            foreColor: colors.darkGray,
            fontFamily: "Roboto, Arial, sans-serif",
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: true,
          },
          stroke: {
            curve: "straight",
          },
          title: {
            text: "Cotas de E-mail usadas",
            align: "left",
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5,
            },
          },
          xaxis: {
            categories: [`x`],
          },
        },
      },
      chartEspacoExtraL: {
        series: [
          {
            name: "Uso de Espaço Extra",
            data: [1],
          },
        ],
        chartOptions: {
          colors: [colors.red],
          chart: {
            foreColor: colors.darkGray,
            fontFamily: "Roboto, Arial, sans-serif",
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: true,
          },
          stroke: {
            curve: "straight",
          },
          title: {
            text: "Cotas de Espaço Extra usadas",
            align: "left",
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5,
            },
          },
          xaxis: {
            categories: [`x`],
          },
        },
      },
      chartVideoconferenciaL: {
        series: [
          {
            name: "Uso de Videoconferencia",
            data: [1],
          },
        ],
        chartOptions: {
          colors: [colors.red],
          chart: {
            foreColor: colors.darkGray,
            fontFamily: "Roboto, Arial, sans-serif",
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: true,
          },
          stroke: {
            curve: "straight",
          },
          title: {
            text: "Cotas de Videoconferencia usadas",
            align: "left",
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5,
            },
          },
          xaxis: {
            categories: [`x`],
          },
        },
      },
      // Graficos de pizza
      chartEmailP: {
        series: [2300, 8000 - 2300],
        chartOptions: {
          title: {
            text: `Uso de Email`,
          },
          colors: [colors.red, colors.gray],
          chart: {
            foreColor: colors.darkGray,
            fontFamily: "Roboto, Arial, sans-serif",
            width: 380,
            type: "pie",
          },
          labels: ["Usado", "Disponível"],
          responsive: responsiveP,
        },
      },
      chartEspacoExtraP: {
        series: [50, 100],
        chartOptions: {
          title: {
            text: `Uso de Espaço Extra`,
          },
          colors: [colors.red, colors.gray],
          chart: {
            foreColor: colors.darkGray,
            fontFamily: "Roboto, Arial, sans-serif",
            width: 380,
            type: "pie",
          },
          labels: ["Usado", "Disponível"],
          responsive: responsiveP,
        },
      },
      chartVideoconferenciaP: {
        series: [10, 100],
        chartOptions: {
          title: {
            text: `Uso de Videoconferencia`,
          },
          colors: [colors.red, colors.gray],
          chart: {
            foreColor: colors.darkGray,
            fontFamily: "Roboto, Arial, sans-serif",
            width: 380,
            type: "pie",
          },
          labels: ["Usado", "Disponível"],
          responsive: responsiveP,
        },
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
      REL: [
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
      ],
    };
  },
  async mounted() {
    // Pega ID da URL
    const idUrl = this.$route.params.id;
    this.getDetalhe(idUrl);
  },
  methods: {
    // Depois de ter o ID da URL, pega a informação com base no ID
    async getDetalhe(idDaUrl) {
      await this.$axios
        .get(`api.prodemge.gov.br/contratos/${idDaUrl}`)
        .then((res) => {
          // Resposta viria por aqui se a API fosse verdadeira
        })
        .catch((err) => {

          this.loading = ref(true);
          setTimeout(() => {
            this.loading = ref(false);

          }, 1500);

          // Como não é possível acessar a API, carregarei com dados falsos
          // Procura no objeto os dados no qual o ID do contrato equivale ao ID parametro da função
          this.contratoDetalhes = this.apiContratos.contratos.find(
            ({ id }) => id == idDaUrl
          );


          let relatorios = this.contratoDetalhes.relatorios;

          this.relatorios = relatorios;

          //uso
          this.chartEmailP.series[0] =
            relatorios[relatorios.length - 1].itens[0].uso;
          // disponivel
          this.chartEmailP.series[1] =
            this.contratoDetalhes.itens[0].cota - this.chartEmailP.series[0];

          //uso
          this.chartEspacoExtraP.series[0] =
            relatorios[relatorios.length - 1].itens[1].uso;
          // disponivel
          this.chartEspacoExtraP.series[1] =
            this.contratoDetalhes.itens[1].cota -
            this.chartEspacoExtraP.series[0];

          //uso
          this.chartVideoconferenciaP.series[0] =
            relatorios[relatorios.length - 1].itens[2].uso;
          // disponivel
          this.chartVideoconferenciaP.series[1] =
            this.contratoDetalhes.itens[2].cota -
            this.chartVideoconferenciaP.series[0];

          for (let i = 0; i < relatorios.length; i++) {
            // Meses em que houve uso
            this.chartEmailL.chartOptions.xaxis.categories[i] =
              relatorios[i].data;

            this.chartEspacoExtraL.chartOptions.xaxis.categories[i] =
              relatorios[i].data;

            this.chartVideoconferenciaL.chartOptions.xaxis.categories[i] =
              relatorios[i].data;

            // Valor usado em cada mês
            this.chartEmailL.series[0].data[i] = relatorios[i].itens.find(
              ({ descricao }) => descricao == `email`
            ).uso;

            this.chartEspacoExtraL.series[0].data[i] = relatorios[i].itens.find(
              ({ descricao }) => descricao == `espaco_extra`
            ).uso;

            this.chartVideoconferenciaL.series[0].data[i] = relatorios[
              i
            ].itens.find(
              ({ descricao }) => descricao == `videoconferencia`
            ).uso;
          }

          // Teste conteúdo mockado
          // let kel = this.REL[0].itens.find(({descricao}) => descricao == `email`);
        });
    },
  },
});
</script>
