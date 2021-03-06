import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Pharmacies from "./views/Pharmacies.vue";
import Medications from "./views/Medications.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import SignUp from "./views/SignUp.vue";
import PharmacyAdmin from "./views/PharmacyAdmin.vue";
import RegistederUser from "./views/RegistederUser.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/pharmacies",
      component: Pharmacies,
    },
    {
      path: "/medications",
      component: Medications,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/logout",
      component: Logout,
    },
    {
      path: "/signup",
      component: SignUp,
    },
    {
      path: "/pharmacyadmin",
      component: PharmacyAdmin,
    },
    {
      path: "/registederuser/:id",
      component: RegistederUser,
    },
  ],
  mode: "history",
});
