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
        <div class="col-12 col-sm-6 col-md-7 col-lg-8">
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
        <div class="col-12 col-sm-6 col-md-5 col-lg-4">
          <q-card flat bordered>
            <q-card-section class="q-pt-lg">
              <apexchart
                type="pie"
                width="350"
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
        <div class="col-12 col-sm-6 col-md-7 col-lg-8">
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
        <div class="col-12 col-sm-6 col-md-5 col-lg-4">
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
        <div class="col-12 col-sm-6 col-md-7 col-lg-8">
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
        <div class="col-12 col-sm-6 col-md-5 col-lg-4">
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
  </div>
</template>

<script>
const colors = {
  red: "#cf7680",
  gray: "#959595",
  darkGray: "#4c4c4c",
};

export default {
  name: "DetalhesContrato",
  data() {
    return {
      // Recebe Detalhes do Contrato
      contratoDetalhes: [],

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
        series: [50 / 100, 100],
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
          labels: ["Usado", "Cota"],
          responsive: [
            {
              breakpoint: 850,
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
          ],
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
          labels: ["Usado", "Cota"],
          responsive: [
            {
              breakpoint: 500,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
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
          labels: ["Usado", "Cota"],
          responsive: [
            {
              breakpoint: 500,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
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
          // Como não é possível acessar a API, carregarei com dados falsos
          // Procura no objeto os dados no qual o ID do contrato equivale ao ID parametro da função
          this.contratoDetalhes = this.apiContratos.contratos.find(
            ({ id }) => id == idDaUrl
          );
          let relatorios = this.contratoDetalhes.relatorios;

          this.chartEmailP.series[0] =
            relatorios[relatorios.length - 1].itens[0].uso;
          this.chartEmailP.series[1] = this.contratoDetalhes.itens[0].cota;

          this.chartEmailP.series[0] =
            relatorios[relatorios.length - 1].itens[0].uso;
          this.chartEmailP.series[1] = this.contratoDetalhes.itens[0].cota;

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
};
</script>
