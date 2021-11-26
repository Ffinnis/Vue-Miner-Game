<template>
  <b-button
    @click="
      type === 'Buy'
        ? buyCrypto({ name: name, amount: amount })
        : sellCrypto({ name: name, amount: amount })
    "
    >{{ type === "Buy" ? "Купить" : "Продать" }} {{ name }}</b-button
  >
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CryptoListItemTradeButton",
  props: {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions(["buyCrypto", "sellCrypto"]),
  },
};
</script>

<style scoped></style>
