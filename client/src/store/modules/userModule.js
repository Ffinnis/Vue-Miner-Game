import { shopModule } from "./shopModule";

export const userModule = {
  state: {
    balance: 10000,
    cryptoList: [],
    videoList: [],
  },

  //TODO I need to refactor this
  mutations: {
    buyCrypto(state, payload) {
      const idx = state.cryptoList.findIndex(
        (item) => item.name === payload.name
      );
      const price = payload.price * payload.amount;
      if (idx !== -1) {
        if (price > state.balance) {
          return alert("You haven't enough money");
        }
        state.balance -= price;
        return (state.cryptoList[idx].amount += payload.amount);
      }
      if (price > state.balance) {
        return alert("You haven't enough money");
      }
      state.balance -= price;
      return state.cryptoList.push(payload);
    },
    sellCrypto(state, payload) {
      console.log(payload);
      const idx = state.cryptoList.findIndex(
        (item) => item.name === payload.name
      );
      const price = payload.price * payload.amount;
      if (idx !== -1) {
        if (state.cryptoList[idx].amount < payload.amount) {
          return alert("You haven't enough crypto");
        }
        state.balance += price;
        return (state.cryptoList[idx].amount -= payload.amount);
      }
      return alert("This crypto doesn't exist");
    },
    buyGPU(state, payload) {
      if (state.balance < payload.price) {
        return alert("You have not enough money");
      }
      state.balance -= payload.price;
      payload.hash = payload.hash / 100000;
      return state.videoList.push(payload);
    },
    mining(state, hashRate) {
      let ETHIndex = state.cryptoList.findIndex((item) => item.name === "ETH");
      if (ETHIndex !== -1) {
        return (state.cryptoList[ETHIndex].amount += Number(hashRate));
      }
      state.cryptoList.push({
        name: "ETH",
        amount: Number(0),
      });
      ETHIndex = state.cryptoList.findIndex((item) => item.name === "ETH");
      return (state.cryptoList[ETHIndex].amount += Number(hashRate));
    },
  },
  actions: {
    buyCrypto({ commit, rootState }, payload) {
      payload.price = rootState.crypto.cryptoList.find(
        (item) => item.crypto === payload.name
      ).price;
      return commit("buyCrypto", payload);
    },
    sellCrypto({ commit, rootState }, payload) {
      payload.price = rootState.crypto.cryptoList.find(
        (item) => item.crypto === payload.name
      ).price;
      return commit("sellCrypto", payload);
    },
  },
  modules: {
    shop: shopModule,
  },
};
