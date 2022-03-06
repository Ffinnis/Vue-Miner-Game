<template>
  <div class="home page">
    <crypto-list />
    <create-crypto v-if="this.$store.state.crypto.cryptoList.length < 2" />
  </div>
</template>

<script>
import { socket } from "@/utils/socketHandler";
export default {
  name: "Home",
  created() {
    return socket;
  },
  components: {
    CryptoList: () => import("@/components/CryptoListComponents/CryptoList"),
    CreateCrypto: () => import("@/components/CreateCrypto"),
  },
};
</script>
