<template>
  <b-col class="crypto-list-item pt-2 pb-2" sm>
    <b-row class="main justify-content-between align-items-center">
      <b-col>
        <div class="item-name">
          <h3>{{ name }}</h3>
        </div>
        <div class="price-container mt-3 mb-3">
          <b-spinner v-if="!price" />
          <div class="price" v-else>
            Price: <span ref="price-ref">{{ price }}</span
            >$
          </div>
        </div>
      </b-col>
      <b-col>
        <crypto-list-item-trade-button :name="name" type="Buy" :amount="4" />
        <crypto-list-item-trade-button :name="name" type="Sell" :amount="4" />
      </b-col>
      <b-col class="flex-grow-0">
        <b-icon @click="deleteCrypto" icon="trash" style="cursor: pointer" />
      </b-col>
    </b-row>

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
  components: {
    CryptoListItemTradeButton: () => import("./CryptoListItemTradeButton"),
  },
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
      required: true,
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
  watch: {
    price: {
      handler: function (val, oldVal) {
        this.$nextTick(() => {
          if (val < oldVal) {
            return (this.$refs["price-ref"].style.color = "red");
          }
          return (this.$refs["price-ref"].style.color = "green");
        });
      },
    },
  },
};
</script>

<style scoped>
.crypto-list-item {
  border: 1px solid #cac0c0;
}
</style>
