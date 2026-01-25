import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FeaturesView from "@/views/FeaturesView.vue";
import DownloadView from "@/views/DownloadView.vue";
import FaqView from "@/views/FaqView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/features",
      name: "features",
      component: FeaturesView,
    },
    {
      path: "/downloads",
      name: "downloads",
      component: DownloadView,
    },
    {
      path: "/faq",
      name: "/faq",
      component: FaqView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
