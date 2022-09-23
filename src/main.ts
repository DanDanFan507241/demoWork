import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import vant from "vant";
import "./mock/mockServer";

import "vant/lib/index.css";
import "./assets/base.css";

const app = createApp(App);

app.use(router).use(vant);

app.mount("#app");
