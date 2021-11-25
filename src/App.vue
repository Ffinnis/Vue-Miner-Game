<template>
  <div id="app">
    <the-header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    TheHeader: () => import("@/components/UI/TheHeader.vue"),
  },
};
</script>
