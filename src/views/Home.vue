<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="wrapper">
      <Crypto />
      <Balance />
    </div>
    <button>
      Click
    </button>
  </div>
</template>

<script>
// @ is an alias to /src

import Crypto from "../components/Crypto";
import Balance from "../components/Balance";
export default {
  name: 'Home',
  components: {Balance, Crypto},
}
</script>
