<template>
    <h1>Other Crypto</h1>
    <div class="wrapper">
        <Crypto v-bind:check-main-crypto="false" v-bind:check-other-crypto="true"/>
    </div>
</template>

<script>
    import Crypto from "../components/Crypto";
    export default {
        name: "OtherCrypto",
        components: {Crypto}
    }
</script>

<style scoped>

</style>