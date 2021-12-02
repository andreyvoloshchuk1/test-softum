import { createStore as _createStore } from 'vuex'
import axios from '../utils/axios'

const store = {
    state () {
        return {
            exchangeList: []
        }
    },
    mutations: {
        SET_EXCHANGE_LIST (state, payload) {
            state.exchangeList = payload
        }
    },

    actions: {
        async fetchExchangeList ({ commit }, payload) {
            const data1 = await axios('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            console.log(data1)
            const data = await axios('https://api.privatbank.ua/p24api/exchange_rates?json&date=01.12.2014')
            console.log(data)
            // commit('SET_EXCHANGE_LIST', payload)
        }
    }
}

export function createStore() {
    return _createStore(store)
}