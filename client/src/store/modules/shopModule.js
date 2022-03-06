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
      {
        id: 4,
        type: "video",
        name: "RTX 2070",
        hashRate: 0.0004,
        price: 1400,
      },
      {
        id: 5,
        type: "video",
        name: "RTX 2080",
        hashRate: 0.0005,
        price: 1700,
      },
      {
        id: 6,
        type: "video",
        name: "RTX 3060",
        hashRate: 0.00035,
        price: 1200,
      },
      {
        id: 7,
        type: "video",
        name: "RTX 3070",
        hashRate: 0.0006,
        price: 2000,
      },
      {
        id: 8,
        type: "video",
        name: "RTX 3080",
        hashRate: 0.001,
        price: 3000,
      },
    ],
  },
  actions: {
    buyGPU({ commit, state }, idx) {
      return commit("buyGPU", state.productList[idx], { root: true });
    },
  },
};
