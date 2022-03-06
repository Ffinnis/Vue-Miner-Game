<template>
  <div class="inventory page">
    <h1 v-show="inventoryList.length === 0">You haven't any gpu</h1>
    <b-row cols="5" style="gap: 15px 0">
      <b-col v-for="(item, idx) in inventoryList" :key="idx + item.name">
        <b-card :title="item.name">
          <b-card-text> {{ item.hashRate }} </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-row cols="1" class="align-items-center mt-5">
      <b-col>
        <b-button
          v-show="!isMining"
          @click="startMining"
          variant="outline-success"
          >Начать майнить</b-button
        >
      </b-col>
      <b-col>
        <b-button v-show="isMining" @click="stopMining" variant="outline-danger"
          >Закончить майнить</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Inventory",
  computed: {
    inventoryList: function () {
      return this.$store.state.user.videoList;
    },
    allHash: function () {
      return this.inventoryList
        .map((item) => item.hashRate)
        .reduce((prev, current) => {
          return prev + current;
        })
        .toFixed(5);
    },
  },
  data() {
    return {
      loop: null,
      isMining: false,
    };
  },
  methods: {
    startMining() {
      const miningLoop = setInterval(() => {
        return this.$store.commit("mining", this.allHash);
      }, 1000);
      this.isMining = true;
      return (this.loop = miningLoop);
    },
    stopMining() {
      this.isMining = false;
      return clearTimeout(this.loop);
    },
  },
};
</script>

<style scoped></style>
