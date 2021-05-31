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
            currencyDOGE: 0,
            BTCBalance: 0,
            ETHBalance: 0,
            LTCBalance: 0,
            XMRBalance: 0,
            DOGEBalance: 0,
            gpuList: [],
            hash: 0,
            timer: null,
            bankBalance: 0,
            timerBank: null
        }
    },
    mutations: {
        bankTimer(state, func) {
            state.timerBank = setInterval(func, 60000)
        },
        createTimer(state, func) {
            state.timer = setInterval(func, 1000)
        },
        addHash(state, odd) {
            state.hash += odd
        },
        updateGpuList(state, obj) {
            state.gpuList.push(obj)
        },
        updateCurrencyBTC(state, currency) {
            state.currencyBTC = currency
        },
        updateCurrencyDOGE(state, currency) {
            state.currencyDOGE = currency
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
        updateDOGEBalance(state, num) {
            state.DOGEBalance += num
        },
        removeDOGEBalance(state, num) {
            state.DOGEBalance -= num
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
        addBankBalance(state, num) {
            state.bankBalance += num
        },
        removeBankBalance(state, num) {
            state.bankBalance -= num
        }
    },
    getters: {
        showBankBalance: state => {
            return state.bankBalance
        },
        showTimer: state => {
            return state.timer
        },
        showBankTimer: state => {
            return state.timerBank
        },
        showHash: state => {
            return state.hash
        },
        showGpuList: state => {
            return state.gpuList
        },
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
        showCurrentDOGE: state => {
            return state.currencyDOGE
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
        },
        showDOGEBalance: state => {
            return state.DOGEBalance
        }
    }
})



createApp(App).use(store).use(router).mount('#app')

