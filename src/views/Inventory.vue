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
</template>

<script>
    export default {
        name: "Inventory",
        data() {
            return{
                GpuInventory: []
            }
        },
        mounted() {
            this.GpuInventory = this.getGpuList
        },
        methods: {
            startMining() {
                setInterval(() => {
                    this.$store.commit('updateETHBalance', 0.00002)
                }, 1000)
            }
        },
        computed: {
            getGpuList() {
                return this.$store.getters.showGpuList
            },
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