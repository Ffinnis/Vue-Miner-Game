<template>
    <h1>
        Inventory
    </h1>
    <ul>
        <li v-for="gpu in GpuInventory" :key="gpu.id">
            {{gpu.title}}
        </li>
    </ul>
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
    padding: 0;
}
    ul{
        padding: 0;
    }
</style>