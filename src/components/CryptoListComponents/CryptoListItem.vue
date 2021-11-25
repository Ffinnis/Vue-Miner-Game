<template>
  <b-col class="crypto-list-item">
    <div class="item-name">
      <h3>{{ name }}</h3>
    </div>
    <div class="price-container">
      <b-spinner v-if="!price" />
      <span v-else>{{ price }}$</span>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "CryptoListItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
