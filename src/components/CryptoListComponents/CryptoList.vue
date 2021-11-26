<template>
  <b-row cols="2" style="gap: 1rem">
    <CryptoListItem
      v-for="(crypto, idx) in getCryptoList"
      :key="idx + crypto.crypto"
      :name="crypto.crypto"
      :price="Number(crypto.price)"
      :index="idx"
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
