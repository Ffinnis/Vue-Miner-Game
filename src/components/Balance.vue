<template>
    <h2>
        {{getCurrencyBalance}}$
    </h2>
    <div v-if="checkMainCrypto" class="main-crypto">
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
    </div>
    <div v-if="checkOtherCrypto" class="other-crypto">
        <h2>
            {{getLTCBalance}} LTC
        </h2>
        <h2>
            {{getXMRBalance}} Monero
        </h2>
        <div class="wrapper">
            <label>
                <input min="0.00001" v-model="value" type="number">
            </label>
            <div class="trade-wrapper">
                <button @click="BuyLTC">
                    Купить LTC
                </button>
                <button @click="SellLTC">
                    Продать LTC
                </button>
                <button @click="BuyXMR">
                    Купить Monero
                </button>
                <button @click="SellXMR">
                    Продать Monero
                </button>
            </div>
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
        props: {
            checkMainCrypto: Boolean,
            checkOtherCrypto: Boolean
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
            BuyLTC() {
                let value = parseFloat(this.value)
                let balance = this.getCurrencyBalance
                let sum = this.getCurrencyLTC * value
                if( sum > balance) {
                    alert('У вас недостаточный баланс')
                } else {
                    this.$store.commit('updateCurrencyBalance', sum)
                    this.$store.commit('updateLTCBalance', value)
                }
            },
            BuyXMR() {
                let value = parseFloat(this.value)
                let balance = this.getCurrencyBalance
                let sum = this.getCurrencyXMR * value
                if( sum > balance) {
                    alert('У вас недостаточный баланс')
                } else {
                    this.$store.commit('updateCurrencyBalance', sum)
                    this.$store.commit('updateXMRBalance', value)
                }
            },
            SellXMR() {
                let value = parseFloat(this.value)
                let XMRBalance = this.getXMRBalance
                let sum = this.getCurrencyXMR * value
                if(XMRBalance <= 0) {
                    alert('У вас нет лайткоинов')
                }
                if(XMRBalance < value) {
                    alert('У вас недостаточно лайткоинов')
                } else {
                    this.$store.commit('AddBalance', sum)
                    this.$store.commit('removeXMRBalance', value)
                }
            },
            SellLTC() {
                let value = parseFloat(this.value)
                let LTCBalance = this.getLTCBalance
                let sum = this.getCurrencyLTC * value
                if(LTCBalance <= 0) {
                    alert('У вас нет лайткоинов')
                }
                if(LTCBalance < value) {
                    alert('У вас недостаточно лайткоинов')
                } else {
                    this.$store.commit('AddBalance', sum)
                    this.$store.commit('removeLTCBalance', value)
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
            getCurrencyLTC() {
                return this.$store.getters.showCurrentLTC
            },
            getLTCBalance() {
                return this.$store.getters.showLTCBalance.toFixed(5)
            },
            getCurrencyXMR() {
                return this.$store.getters.showCurrentXMR
            },
            getXMRBalance() {
                return this.$store.getters.showXMRBalance.toFixed(5)
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