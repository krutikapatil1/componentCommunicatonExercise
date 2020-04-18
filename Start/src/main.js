import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
  methods: {
    serverSelected(serverSelected) {
      this.$emit("serverWasSelected", serverSelected);
    },
  },
});
new Vue({
  el: "#app",
  render: (h) => h(App),
});
