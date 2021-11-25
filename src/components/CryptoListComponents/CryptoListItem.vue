<template>
  <b-col class="crypto-list-item">
    <div class="item-name">
      <h3>{{ name }}</h3>
    </div>
    <div class="price-container">
      <b-spinner v-if="!price" />
      <span v-else>{{ price }}$</span>
    </div>
    <b-icon @click="deleteCrypto" icon="trash" style="cursor: pointer" />
    <b-modal id="bv-error-modal" ref="bv-error-modal" hide-footer hide-header>
      <div class="d-block text-center">
        <h3>Error! You can't delete last crypto</h3>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('bv-error-modal')"
        >Close Me</b-button
      >
    </b-modal>
  </b-col>
</template>

<script>
import { deleteSocket } from "@/utils/socketHandler";
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
    index: {
      type: Number,
    },
  },
  methods: {
    deleteCrypto() {
      if (this.$store.state.crypto.cryptoList.length > 1) {
        return deleteSocket(this.index);
      }
      return this.$refs["bv-error-modal"].show();
    },
  },
};
</script>

<style scoped></style>
