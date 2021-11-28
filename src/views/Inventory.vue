<template>
  <div class="inventory page">
    <b-row cols="5" style="gap: 15px 0">
      <b-col v-for="(item, idx) in inventoryList" :key="idx + item.name">
        <b-card :title="item.name">
          <b-card-text> {{ item.hashRate }} </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-button @click="startMining" variant="outline-success"
      >Начать майнить</b-button
    >
    <b-button @click="stopMining" variant="outline-danger"
      >Закончить майнить</b-button
    >
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
    };
  },
  methods: {
    startMining() {
      const miningLoop = setInterval(() => {
        return this.$store.commit("mining", this.allHash);
      }, 1000);
      return (this.loop = miningLoop);
    },
    stopMining() {
      return clearTimeout(this.loop);
    },
  },
};
</script>

<style scoped></style>
