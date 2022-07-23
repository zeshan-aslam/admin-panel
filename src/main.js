import { createApp } from "vue";
import Home from "./components/Home.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css"
import BootstrapVue3 from "bootstrap-vue-3";
const app = createApp(Home);
app.use(router);
app.use(BootstrapVue3);
app.mount("#app");
