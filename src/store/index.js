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
          crypto: "BTC",
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
    deleteCrypto(state, idx) {
      state.crypto.subscribe_filter_asset_id.splice(idx, 1);
      state.crypto.subscribe_filter_symbol_id.splice(idx, 1);
      setTimeout(() => {
        return state.crypto.cryptoList.splice(idx, 1);
      }, 0);
    },
  },
  actions: {
    createCrypto(context, payload) {
      return context.commit("createCrypto", payload);
    },
    deleteCrypto(context, idx) {
      return context.commit("deleteCrypto", idx);
    },
  },
  modules: {},
});
