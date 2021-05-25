import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            currentBalance: 10,
            currencyBTC: 0,
            currencyETH: 0,
            BTCBalance: 0,
            ETHBalance: 0
        }
    },
    mutations: {
        updateCurrencyBTC(state, currency) {
            state.currencyBTC = currency
        },
        updateCurrencyETH(state, currency) {
            state.currencyETH = currency
        },
        updateCurrencyBalance(state, sum) {
            state.currentBalance -= sum
        },
        updateBTCBalance(state, num) {
            state.BTCBalance += num
        },
        AddBalance(state, num) {
            state.currentBalance += num
        },
        removeBtcBalance(state, num) {
            state.BTCBalance -= num
        },
        updateETHBalance(state, num) {
            state.ETHBalance += num
        },
        removeEthBalance(state, num) {
            state.ETHBalance -= num
        },
    },
    getters: {
        showCurrentBalance: state => {
            return state.currentBalance
        },
        showCurrentBTC: state => {
            return state.currencyBTC
        },
        showCurrentETH: state => {
            return state.currencyETH
        },
        showBTCBalance: state => {
            return state.BTCBalance
        },
        showETHBalance: state => {
            return state.ETHBalance
        }
    }
})



createApp(App).use(store).use(router).mount('#app')

