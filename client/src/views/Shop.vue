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
  data() {
    return {
      productList: this.$store.state.user.shop.productList,
    };
  },
};
</script>

<style scoped></style>
