import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Dashboard from "/@pages/Dashboard.vue";
import Forms from "/@pages/Forms.vue";
import Tables from "/@pages/Tables.vue";
import UIElements from "/@pages/UIElements.vue";
import Login from "/@pages/Login.vue";
import Modal from "/@pages/Modal.vue";
import Card from "/@pages/Card.vue";
import Blank from "/@pages/Blank.vue";
// import NotFound from "/@pages/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import('/@layout/index.vue'),
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/forms",
        name: "Forms",
        component: Forms,
      },
      {
        path: "/cards",
        name: "Cards",
        component: Card,
      },
      {
        path: "/tables",
        name: "Tables",
        component: Tables,
      },
      {
        path: "/ui-elements",
        name: "UIElements",
        component: UIElements,
      },
      {
        path: "/modal",
        name: "Modal",
        component: Modal,
      },
      {
        path: "/blank",
        name: "Blank",
        component: Blank,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
