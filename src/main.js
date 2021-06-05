import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store";
import VCalendar from 'v-calendar';

Vue.config.productionTip = false;

Vue.use(VCalendar, {
  componentPrefix: 'vc'
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
