<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import("@/components/UI/Header.vue"),
  },
};
</script>
