<template>
  <!-- Breadcumb -->
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/" label="Início" />
      <q-breadcrumbs-el label="Detalhes" />
    </q-breadcrumbs>
  </div>
  <!-- Breadcumb -->
</template>

<script>
export default {
  name: "DetalhesContrato",
  data() {
    return {
      // Recebe Detalhes do Contrato
      contratoDetalhes: [],
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chartOptions: {
        chart: {
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
          text: "Product Trends by Month",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
        },
      },
      seriesB: [44, 55, 13, 43, 22],
      chartOptionsB: {
        title: {
          text: "Pizza",
          align: "left",
        },
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
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
    };
  },
  async mounted() {
    // Pega ID da URL
    const idUrl = this.$route.params.id;
    await this.getDetalhe(idUrl);
  },
  methods: {
    // Depois de ter o ID da URL, pega a informação com base no ID
    async getDetalhe(id) {
      console.log(`getDetalhe`);

      this.$axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          this.contratoDetalhes = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    },
  },
};
</script>
