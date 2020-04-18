<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please select a server</p>
    <p v-else>Server #{{server.id}} selected, State: {{server.state}}</p>
    <hr />
    <button @click="resetToNormal">Reset to Normal</button>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  data() {
    return {
      server: null
    };
  },
  methods: {
    resetToNormal() {
      this.server.state = "Normal";
    }
  },
  created() {
    eventBus.$on("serverWasSelected", serverSelected => {
      this.server = serverSelected;
    });
  }
};
</script>

<style>
</style>
