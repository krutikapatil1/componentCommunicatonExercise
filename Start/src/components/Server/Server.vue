<template>
  <li
    class="list-group-item"
    @click="serverSelected()"
  >Server #{{ server.id }}, state: {{server.state}}</li>
</template>

<script>
import { eventBus } from "../../main";
export default {
  props: ["server"],
  methods: {
    serverSelected() {
      eventBus.serverSelected(this.server);
    }
  }
};
</script>

<style>
</style>
