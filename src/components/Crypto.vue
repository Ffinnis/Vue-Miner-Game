<template>
    <div v-if="checkMainCrypto" class="main-crypto">
        <h2>
            BTC: {{getCurrencyBTC}}$
        </h2>
        <h2>
            ETH: {{getCurrencyETH}}$
        </h2>
        <Balance v-bind:check-other-crypto="false" v-bind:check-main-crypto="true"/>
    </div>
    <div v-if="checkOtherCrypto" class="other-crypto">
        <h2>
            LTC: {{getCurrencyLTC}}$
        </h2>
        <h2>
            Monero: {{getCurrencyXMR}}$
        </h2>
        <Balance v-bind:check-other-crypto="true" v-bind:check-main-crypto="false"/>
    </div>
</template>
<script>


    import Balance from "./Balance";
    export default {
        name: "Crypto",
        components: {Balance},
        props: {
            checkMainCrypto: Boolean,
            checkOtherCrypto: Boolean
        },
        mounted() {
            const socket = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=2870b6c1edbd2584698c23d68b313efe41e59c14545d83f9943e90351c51c42b')

            socket.onopen = () => {
                let subRequest = {
                    "action": "SubAdd",
                    "subs": ["0~Binance~BTC~USDT", "0~Binance~ETH~USDT", "0~Coinbase~LTC~USD", "5~CCCAGG~XMR~USD"]
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
                if(message.FSYM === 'LTC') {
                    this.$store.commit('updateCurrencyLTC', message.P)
                }
                if(message.FROMSYMBOL === 'XMR') {
                    this.$store.commit('updateCurrencyXMR', message.PRICE)
                }
                console.log()
            }



        },
        computed: {
            getCurrencyBTC() {
                return this.$store.getters.showCurrentBTC
            },
            getCurrencyETH() {
                return this.$store.getters.showCurrentETH
            },
            getCurrencyLTC() {
                return this.$store.getters.showCurrentLTC
            },
            getCurrencyXMR() {
                return this.$store.getters.showCurrentXMR
            }
        }

    }
</script>

<style scoped>

</style>