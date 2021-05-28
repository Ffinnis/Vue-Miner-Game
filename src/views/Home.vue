<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="wrapper">
      <Crypto v-bind:check-other-crypto="false" v-bind:check-main-crypto="true"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Crypto from "../components/Crypto";
export default {
  name: 'Home',
  components: {Crypto},
}
</script>
