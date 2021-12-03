<template>
  <section class="section">
    <div class="section__container section__container_border-bottom">Результат</div>
    <div class="section__container section__container_full-height">
      <table class="result">
        <thead>
        <tr>
          <th></th>
          <th scope="col">значение1</th>
          <th scope="col">значение2</th>
          <th scope="col">значение3</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in exchangeTable">
          <th scope="row">{{ item.key }}</th>
          <td>{{ item.value }}</td>
          <td>{{ item.sum }}</td>
          <td>{{ item.isOdd }}</td>
        </tr>
        </tbody>
      </table>
      <s-button @click="$router.push('/')">
        Вернуться на главную
      </s-button>
    </div>
  </section>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: "result",

  setup () {
    const store = useStore()
    const router = useRouter()

    const rate = store.state.exchangeList.exchangeRate || []
    const currentExchangeList = rate.find(arr => arr.currency === store.state.exchange)

    if (!currentExchangeList) return router.push('/')

    const table = Object.keys(currentExchangeList).reduce((acc, key) => {
      const tableStack = ['saleRateNB', 'purchaseRateNB', 'saleRate', 'purchaseRate']
      if (tableStack.includes(key)) {
        const value = currentExchangeList[key]
        const sum = [...`${value}`.replace(/\D/g,'')].reduce((acc, v) => {
          acc += +v
          return acc
        }, 0)
        const isOdd = !(sum % 2)

        acc[key] = {
          key,
          value,
          sum,
          isOdd
        }
      }
      return acc
    }, {})

    return {
      exchange: store.state.exchange,
      exchangeTable: table
    }
  },
}
</script>

<style lang="scss" scoped>
.result {
  border-collapse: collapse;
  max-width: 100%;
  margin: 0 0 20px;
  font-weight: normal;

  td, th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: $base-color;
    color: white;
  }
}

@media only screen and (max-width: 600px) {
  .result {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    font-size: 14px;
  }
}
</style>