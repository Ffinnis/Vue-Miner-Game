<template>
  <div class="user-popover">
    <div class="user-img__container">
      <img id="user-popover" src="@/assets/img/profile-user.png" alt="user" />
    </div>
    <b-popover target="user-popover" triggers="hover" placement="bottom">
      <h5>User Balance: {{ userBalance }}$</h5>
      <div class="user-actives">
        <h5 v-if="userActives.length === 0">You haven't any actives</h5>
        <b-list-group v-else>
          <b-list-group-item
            v-for="(item, idx) in userActives"
            :key="idx + item.name"
          >
            <h5>Active name: {{ item.name }}</h5>
            <h5>Amount: {{ item.amount.toFixed(6) }}</h5>
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-popover>
  </div>
</template>

<script>
export default {
  name: "UserPopover",
  computed: {
    userBalance: function () {
      return this.$store.state.user.balance.toFixed(2);
    },
    userActives: function () {
      return this.$store.state.user.cryptoList;
    },
  },
};
</script>

<style scoped lang="scss">
.user-popover {
  position: fixed;
  width: 100vw;
  .user-img__container {
    position: relative;
    width: 40px;
    height: 40px;
    left: 15%;
    top: 15px;
    img {
      object-fit: cover;
      position: absolute;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
}
</style>
