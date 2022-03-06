<template>
  <b-list-group>
    <b-spinner
      variant="primary"
      label="Spinning"
      v-show="!productList.length"
    />
    <b-list-group-item
      class="product-item"
      v-for="item in productList"
      :key="item.id + item.name"
    >
      <b-row cols="3">
        <b-col>
          <h3 class="product-title">{{ item.name }}</h3>
        </b-col>
        <b-col>
          <p>{{ item.hash }}Mh/s</p>
        </b-col>
        <b-col class="d-flex justify-content-end">
          <products-list-buy-button :id="item.id" :price="item.price" />
        </b-col>
      </b-row>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: "ProductsList",
  computed: {
    productList() {
      return this.$store.state.user.shop.productList;
    },
  },
  components: {
    ProductsListBuyButton: () => import("./ProductsListBuyButton"),
  },
};
</script>

<style scoped></style>
