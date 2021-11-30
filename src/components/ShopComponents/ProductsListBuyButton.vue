<template>
  <b-button class="w-25" @click="buyGPU(id)" variant="success"
    >{{ price }}$</b-button
  >
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProductsListBuyButton",
  props: {
    price: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapActions(["buyGPU"]),
  },
};
</script>

<style scoped></style>
