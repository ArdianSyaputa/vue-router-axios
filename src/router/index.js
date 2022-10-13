// import {createRouter, createWebHistory, RouterLink } from "vue-router";
import JakartaView from "../view/JakartaView.vue";
import JawabaratView from "../view/JawabaratView.vue";
import JawatengahView from "../view/JawatengahView.vue";
import JawatimurView from "../view/JawatimurView.vue";
import BaliView from "../view/BaliView.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)
const routes =[
    {
        path: "/",
        name: "home",
        component: JakartaView,

    },
    {
        path: "/about",
        name: "about",
        component: JawabaratView,

    },
    {
        path: "/detail",
        name: "detail",
        component: JawatengahView,

    },
    {
        path: "/product",
        name: "product",
        component: JawatimurView,

    },
    {
        path: "/contact",
        name: "contact",
        component: BaliView,

    },
]
// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes,
// });

const router = new Router({
    routes,
    mode: "history",
});

export default router;