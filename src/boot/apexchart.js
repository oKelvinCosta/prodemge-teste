// Daqui não temos acesso ao Vue, entao precisamos importar
// import Vue from "vue";
// Mas aqui funcionou sem importar Vue

import VueApexCharts from "vue3-apexcharts";
import { boot } from 'quasar/wrappers'

// const app = createApp(App); // Nao funciona aqui
export default boot(({ app }) => {
  app.use(VueApexCharts);
  // The app.use(VueApexCharts) will make <apexchart> component available everywhere.

})
