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
            currencyLTC: 0,
            currencyXMR: 0,
            BTCBalance: 0,
            ETHBalance: 0,
            LTCBalance: 0,
            XMRBalance: 0
        }
    },
    mutations: {
        updateCurrencyBTC(state, currency) {
            state.currencyBTC = currency
        },
        updateCurrencyLTC(state, currency) {
            state.currencyLTC = currency
        },
        updateCurrencyXMR(state, currency) {
            state.currencyXMR = currency
        },
        updateLTCBalance(state, num) {
            state.LTCBalance += num
        },
        removeLTCBalance(state, num) {
            state.LTCBalance -= num
        },
        updateXMRBalance(state, num) {
            state.XMRBalance += num
        },
        removeXMRBalance(state, num) {
            state.XMRBalance -= num
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
        showCurrentLTC: state => {
            return state.currencyLTC
        },
        showCurrentXMR: state => {
            return state.currencyXMR
        },
        showBTCBalance: state => {
            return state.BTCBalance
        },
        showETHBalance: state => {
            return state.ETHBalance
        },
        showLTCBalance: state => {
            return state.LTCBalance
        },
        showXMRBalance: state => {
            return state.XMRBalance
        }
    }
})



createApp(App).use(store).use(router).mount('#app')

