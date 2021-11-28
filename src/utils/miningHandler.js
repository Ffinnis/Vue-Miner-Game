import store from "@/store/index";

export default class MiningHandler {
  constructor(hash) {
    this.hash = hash;
  }

  miningLoop = setInterval(() => {
    return store.commit("mining", this.hash);
  }, 1000);

  startMining() {
    return this.miningLoop;
  }

  stopMining() {
    return clearInterval(this.miningLoop);
  }
}
