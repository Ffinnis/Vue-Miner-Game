import axios from "axios";
export const shopModule = {
  state: {
    productList: [],
  },
  mutations: {
    setProductList(state, list) {
      return (state.productList = list);
    },
  },
  actions: {
    buyGPU({ commit, state }, idx) {
      return commit("buyGPU", state.productList[idx], { root: true });
    },
    async setProductList({ commit }) {
      const list = await axios.get("http://localhost:5000/gpu");
      return commit("setProductList", list.data);
    },
  },
};
