<template>
    <h2>
        BTC: {{getCurrencyBTC}}$
    </h2>
    <h2>
        ETH: {{getCurrencyETH}}$
    </h2>
</template>
<script>


    export default {
        name: "Crypto",
        mounted() {
            const socket = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=2870b6c1edbd2584698c23d68b313efe41e59c14545d83f9943e90351c51c42b')

            socket.onopen = () => {
                let subRequest = {
                    "action": "SubAdd",
                    "subs": ["0~Binance~BTC~USDT", "0~Binance~ETH~USDT"]
                };
                socket.send(JSON.stringify(subRequest))
            }

            socket.onmessage = (msg) => {
                let message = JSON.parse(msg.data)
                if(message.FSYM === 'ETH') {
                    this.$store.commit('updateCurrencyETH', message.P)
                }
                if(message.FSYM === 'BTC') {
                    this.$store.commit('updateCurrencyBTC', message.P)
                }
                console.log(message)
            }



        },
        computed: {
            getCurrencyBTC() {
                return this.$store.getters.showCurrentBTC
            },
            getCurrencyETH() {
                return this.$store.getters.showCurrentETH
            }
        }

    }
</script>

<style scoped>

</style>