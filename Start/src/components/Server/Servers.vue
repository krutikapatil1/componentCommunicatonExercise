<template>
  <!-- <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server v-for="server in servers" :id="server.id"></app-server>
    </ul>
  </div>-->
  <div class="col-xs-12 col-sm-6">
    <app-server v-for="server in servers" :server="server" style="cursor: pointer"></app-server>
  </div>
</template>

<script>
import Server from "./Server.vue";
export default {
  data() {
    return {
      servers: [
        { id: 1, state: "Normal" },
        { id: 2, state: "Off" },
        { id: 3, state: "Start up" },
        { id: 4, state: "Critical" }
      ]
    };
  },
  components: {
    appServer: Server
  }
};
</script>

<style>
</style>
