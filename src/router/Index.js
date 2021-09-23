import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/Index"),
    meta: {
      requiresAuth: false,
      title: "Home",
    },
    children: [
      // services
      {
        path: "services",
        name: "services",
        component: () => import("@/views/services/Index"),
        meta: {
          requiresAuth: false,
          title: "Services",
        },
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;