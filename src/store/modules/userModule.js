export const userModule = {
  state: {
    balance: 10000000,
    cryptoList: [],
  },
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
};
