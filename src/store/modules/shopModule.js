export const shopModule = {
  state: {
    productList: [
      {
        id: 0,
        type: "video",
        name: "RX 560",
        hashRate: 0.0001,
        price: 300,
      },
      {
        id: 1,
        type: "video",
        name: "RX 570",
        hashRate: 0.00015,
        price: 500,
      },
      {
        id: 2,
        type: "video",
        name: "RX 580",
        hashRate: 0.0002,
        price: 750,
      },
      {
        id: 3,
        type: "video",
        name: "RTX 2060",
        hashRate: 0.0003,
        price: 1000,
      },
    ],
  },
  actions: {
    buyGPU({ commit, state }, idx) {
      return commit("buyGPU", state.productList[idx], { root: true });
    },
  },
};
