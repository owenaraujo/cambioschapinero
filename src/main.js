import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueNumberFormat from "vue-number-format";
import "@/assets/css/tailwind.css";
const app = createApp(App);
app.use(VueNumberFormat, { prefix: "", decimal: ",", thousand: "." });

app.use(router);

app.mount("#app");
