import { createStore as _createStore } from 'vuex'
import { axios } from '../utils/axios'

const store = {
    state () {
        return {
            isLoading: false,
            exchange: '',
            exchangeList: {}
        }
    },
    mutations: {
        SET_EXCHANGE (state, payload) {
            state.exchange = payload
        },
        SET_EXCHANGE_LIST (state, payload) {
            state.exchangeList = payload
        },
        SET_EXCHANGE_TO_DEFAULT (state) {
            state.exchange = ''
            state.exchangeList = {}
        },
        SET_LOADING (state, payload) {
            state.isLoading = payload
        }
    },

    actions: {
        async fetchExchangeList ({ commit }, payload) {
            try {
                const { data } = await axios(`/api/p24api/exchange_rates?json&date=${payload.date}`)
                commit('SET_EXCHANGE', payload.exchange)
                commit('SET_EXCHANGE_LIST', data)
            } catch (e) {
                console.log(e)
                commit('SET_EXCHANGE_TO_DEFAULT')
            }
        }
    }
}

export function createStore(plugins) {
    return _createStore({ ...store, ...plugins })
}