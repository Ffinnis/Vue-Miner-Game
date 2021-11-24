import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    crypto: {
      subscribe_filter_asset_id: ["BTC"],
      subscribe_filter_symbol_id: ["COINBASE_SPOT_BTC_USD$"],
      cryptoList: [
        {
          name: "BTC",
          price: null,
        },
      ],
    },
  },
  mutations: {
    createCrypto(state, payload) {
      const idx = state.crypto.subscribe_filter_asset_id.findIndex(
        (item) => item === payload.crypto
      );
      if (idx !== -1) {
        return (state.crypto.cryptoList[idx].price = payload.price);
      }
      state.crypto.subscribe_filter_asset_id.push(payload.crypto);
      state.crypto.subscribe_filter_symbol_id.push(
        `COINBASE_SPOT_${payload.crypto}_USD$`
      );
      return state.crypto.cryptoList.push(payload);
    },
  },
  actions: {
    async createCrypto(context, payload) {
      context.commit("createCrypto", payload);
    },
  },
  modules: {},
});
