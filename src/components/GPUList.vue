<template>
    <ul class="gpu-list">
        <li v-for="gpu in gpuArray" :key="gpu.id" class="gpu-item">
            <h2>
                {{gpu.title}}
            </h2>
            <p>
                Хэш-рейт: {{gpu.hash}} ETH
            </p>
            <h3>
                Цена: {{gpu.price}}$
            </h3>
            <button v-on:click="propsObj = gpu" @click="buyGpu" class="buy-card">
                Купить
            </button>
            <div>
                {{getHash}}
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "GPUList",

        data() {
            return{
                gpuArray: [
                    {
                        id: 0,
                        title: 'RX 480',
                        hash: 0,
                        price: 400
                    },
                    {
                        id: 1,
                        title: 'RX 580',
                        hash: 0.00002,
                        price: 550,
                    }
                ],
                propsObj: {}
            }
        },
        methods: {
            buyGpu() {
                this.$store.commit('updateGpuList', this.propsObj)
                this.$store.commit('addHash', this.getGpuList[this.getGpuList.length - 1].hash)
            }
        },
        computed: {
            getGpuList() {
                return this.$store.getters.showGpuList
            },
            getHash() {
                return this.$store.getters.showHash.toFixed(5)
            }
        }
    }
</script>

<style scoped>
    ul{
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
    }
li{
    list-style-type: none;
    border: 1px solid #2c3e50;
    padding: 10px 20px;
}
</style>