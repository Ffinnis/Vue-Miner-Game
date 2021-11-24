<template>
  <div class="home">
    <b-button @click="addCrypto('ETH')">Нажми</b-button>
  </div>
</template>

<script>
import { createNewSocket } from "@/utils/socketHandler";
export default {
  name: "Home",
  methods: {
    addCrypto(name) {
      return createNewSocket(name);
    },
  },
};
</script>
