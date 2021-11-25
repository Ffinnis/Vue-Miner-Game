<template>
  <b-row>
    <CryptoListItem
      v-for="(crypto, idx) in getCryptoList"
      :key="idx + crypto.crypto"
      :name="crypto.crypto"
      :price="Number(crypto.price)"
    />
  </b-row>
</template>

<script>
export default {
  name: "CryptoList",
  components: {
    CryptoListItem: () => import("./CryptoListItem"),
  },
  computed: {
    getCryptoList: function () {
      return this.$store.state.crypto.cryptoList;
    },
  },
};
</script>

<style scoped></style>
