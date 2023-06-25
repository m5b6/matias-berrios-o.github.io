import { createApp } from "vue";
import App from "./App.vue";
import bootstrap from "bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "bootstrap-icons/font/bootstrap-icons.css";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(bootstrap);
app.use(gsap);

gsap.registerPlugin(ScrollTrigger);

app.mount("#app");
