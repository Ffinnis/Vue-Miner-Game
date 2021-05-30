<template>
    <h1>
        Inventory
    </h1>
    <ul>
        <li v-for="gpu in GpuInventory" :key="gpu.id">
            {{gpu.title}}
            <p>
                Hash: {{gpu.hash}} ETH
            </p>
        </li>
    </ul>
    <button @click="startMining">
        Начать майнинг
    </button>
    <button @click="stopMining">
        stop майнинг
    </button>
</template>

<script>
    export default {
        name: "Inventory",
        data() {
            return{
                GpuInventory: [],
            }
        },
        mounted() {
            this.GpuInventory = this.getGpuList
        },
        methods: {
            startMining() {
                this.$store.commit('createTimer', this.addETH)
            },
            addETH() {
                this.$store.commit('updateETHBalance', this.getHash)
            },
            stopMining() {
                clearInterval(this.getTimer)
            },
        },
        computed: {
            getGpuList() {
                return this.$store.getters.showGpuList
            },
            getHash() {
                return this.$store.getters.showHash
            },
            getTimer() {
                return this.$store.getters.showTimer
            }
        }
    }
</script>

<style scoped>
li{
    list-style-type: none;
    padding: 10px 20px;
    border: 1px solid #2c3e50;
}
    ul{
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 30px 10px;
    }
</style>