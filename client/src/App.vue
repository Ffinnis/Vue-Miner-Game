<template>
  <div id="app">
    <the-header />
    <user-popover />
    <div class="container">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    TheHeader: () => import("@/components/UI/TheHeader.vue"),
    UserPopover: () => import("@/components/UI/UserPopover.vue"),
  },
};
</script>
