<template>
    <ul class="gpu-list">
        <li v-for="gpu in gpuArray" :key="gpu.id" class="gpu-item">
            <h2>
                {{gpu.title}}
            </h2>
            <p>
                Хэш-рейт: {{gpu.hash}}
            </p>
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
                        hash: 0.2
                    },
                    {
                        id: 1,
                        title: 'RX 580',
                        hash: 0.3
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    ul{
        padding: 0;
    }
li{
    list-style-type: none;
}
</style>