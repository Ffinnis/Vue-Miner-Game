<template>
    <h2>
        Текущий баланс: {{getBalance}}$
    </h2>
    <h2>
        Баланс на банковском счёте: {{getBankBalance}}$
    </h2>
    <label>
        <input v-model="depositValue" type="number" class="deposit">
    </label>
    <button @click="takeDeposit" class="doDeposit">
        Сделать депозит (10% в минуту)
    </button>
    <button @click="pickDeposit" class="doDeposit">
        Снять депозит
    </button>
</template>

<script>
    export default {
        name: "BankFunction",
        data() {
            return {
                depositValue: 0
            }
        },
        methods: {
            takeDeposit() {
                let value = parseInt(this.depositValue)
                if(value<this.getBankBalance) {
                    alert('Вы ввели слишком большую сумму')
                } else {
                    this.$store.commit('addBankBalance', value)
                    this.$store.commit('updateCurrencyBalance', value)
                    this.$store.commit('bankTimer', this.yearProfit)
                }
            },
            pickDeposit() {
                let value = parseInt(this.depositValue)
                if(value>this.getBankBalance) {
                    alert('Вы ввели слишком большую сумму')
                } else {
                    this.$store.commit('removeBankBalance', value)
                    this.$store.commit('AddBalance', value)
                }
            },
            yearProfit() {
                this.$store.commit('addBankBalance', this.getBankBalance*0.1)
            }
        },
        computed: {
            getBalance() {
                return this.$store.getters.showCurrentBalance;
            },
            getBankBalance() {
                return this.$store.getters.showBankBalance;
            }
        }
    }
</script>

<style scoped>

</style>