import Vue from "vue";
import VueRouter from "vue-router";

// import pages
import Dashboard from "../components/DashboardLayout.vue";

Vue.use(VueRouter);

const routes = [{ path: "/dashboard", component: Dashboard }];

const router = new VueRouter({
  routes,
});

export default router;
