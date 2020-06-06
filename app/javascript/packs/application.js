require("@rails/ujs").start();
require("turbolinks").start();

import TurbolinksAdapter from "vue-turbolinks";
import Vue from "vue/dist/vue.esm";
import Checkout from "../views/checkout";

Vue.use(TurbolinksAdapter);
Vue.component("checkout", Checkout);

document.addEventListener("turbolinks:load", () => {
  const app = new Vue({
    el: "[data-checkout='vue']",
  });
});
