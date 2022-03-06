<template>
  <div class="shop page">
    <h1>Shop</h1>
    <products-list />
  </div>
</template>

<script>
export default {
  name: "Shop",
  components: {
    ProductsList: () => import("@/components/ShopComponents/ProductsList"),
  },
  async created() {
    await this.$store.dispatch("setProductList");
  },
};
</script>

<style scoped></style>
