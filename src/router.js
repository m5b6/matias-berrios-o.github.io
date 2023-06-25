import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import PhotoView from "@/views/PhotoView.vue";

const routes = [
  { path: "/", component: MainView },
  { path: "/photos", component: PhotoView },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
