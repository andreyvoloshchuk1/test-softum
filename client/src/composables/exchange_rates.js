import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { ref } from "vue"

export default function (date) {
    const store = useStore()
    const router = useRouter()
    const exchangeRatesList = ['USD', 'EUR', 'RUB', 'PLN', 'GBP']
    const exchange = ref(exchangeRatesList[0])
    const handleExchange = (value) => {
        exchange.value = value
    }

    const handleExchangeFetch = async () => {
        const formattedDate = `${date.value.getDate()}.${date.value.getMonth() + 1}.${date.value.getFullYear()}`
        await store.dispatch('fetchExchangeList', { date: formattedDate, exchange: exchange.value })

        if (store.state.exchangeList) {
            router.push('/result')
        }
    }

    return {
        exchange,
        exchangeRatesList,
        handleExchange,
        handleExchangeFetch
    }
}