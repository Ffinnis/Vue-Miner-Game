<template>
    <h2>
        {{getCurrencyBalance}}$
    </h2>
    <h2>
        {{getBTCBalance}} BTC
    </h2>
    <h2>
        {{getETHBalance}} ETH
    </h2>
    <div class="wrapper">
        <label>
            <input min="0.00001" v-model="value" type="number">
        </label>
        <div class="trade-wrapper">
            <button @click="BuyBTC">
                Купить Биткоин
            </button>
            <button @click="SellBTC">
                Продать Биткоин
            </button>
            <button @click="BuyETH">
                Купить Эфир
            </button>
            <button @click="SellETH">
                Продать Эфир
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "balance",
        data() {
            return {
                value: 0
            }
        },
        methods: {
            BuyBTC() {
                let value = parseFloat(this.value)
                let balance = this.getCurrencyBalance
                let sum = this.getCurrencyBTC * value
                if( sum > balance) {
                    alert('У вас недостаточный баланс')
                } else {
                    this.$store.commit('updateCurrencyBalance', sum)
                    this.$store.commit('updateBTCBalance', value)
                }
            },
            BuyETH() {
                let value = parseFloat(this.value)
                let balance = this.getCurrencyBalance
                let sum = this.getCurrencyETH * value
                if( sum > balance) {
                    alert('У вас недостаточный баланс')
                } else {
                    this.$store.commit('updateCurrencyBalance', sum)
                    this.$store.commit('updateETHBalance', value)
                }
            },
            SellBTC() {
                let value = parseFloat(this.value)
                let BtcBalance = this.getBTCBalance
                let sum = this.getCurrencyBTC * value
                if(BtcBalance <= 0) {
                    alert('У вас нет биткоинов')
                }
                if(BtcBalance < value) {
                    alert('У вас недостаточно Биткоинов')
                } else {
                    this.$store.commit('AddBalance', sum)
                    this.$store.commit('removeBtcBalance', value)
                }
            },
            SellETH() {
                let value = parseFloat(this.value)
                let EthBalance = this.getETHBalance
                let sum = this.getCurrencyETH * value
                if(EthBalance <= 0) {
                    alert('У вас нет эфира')
                }
                if(EthBalance < value) {
                    alert('У вас недостаточно Эфира')
                } else {
                    this.$store.commit('AddBalance', sum)
                    this.$store.commit('removeEthBalance', value)
                }
            }
        },
        computed: {
            getCurrencyBalance() {
                return this.$store.getters.showCurrentBalance.toFixed(5)
            },
            getCurrencyBTC() {
                return this.$store.getters.showCurrentBTC
            },
            getBTCBalance() {
                return this.$store.getters.showBTCBalance.toFixed(5)
            },
            getCurrencyETH() {
                return this.$store.getters.showCurrentETH
            },
            getETHBalance() {
                return this.$store.getters.showETHBalance.toFixed(5)
            },
        }
    }
</script>

<style scoped>
.wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
button{
    width: 100px;
    margin-top: 10px;
    margin-bottom: 10px;
}
    .trade-wrapper{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }
</style>