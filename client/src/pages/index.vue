<template>
  <section class="section">
    <div class="section__container section__container_border-bottom">Добро пожаловать</div>
    <div class="section__container section__container_full-height">
      <s-button @click="openModal">Выбрать дату</s-button>
    </div>
  </section>
  <s-modal :is-open="isModalOpen" @close-modal="closeModal" >
    <datepicker
        :value="date"
        :lower-limit="lowerLimit"
        :upper-limit="upperLimit"
        @change="handleDateChange"
    />
    <s-select
        :list="exchangeRatesList"
        @change="handleExchange"
    />
    <s-button :disabled="isError" @click="handleExchangeFetch">Проверить</s-button>
  </s-modal>
</template>

<script>
import Datepicker from "../components/Datepicker.vue"

import modal from "../composables/modal.js"
import datepicker from '../composables/datepicker.js'
import exchangeRates from "../composables/exchange_rates.js"

export default {
  name: "index",

  components: {
    Datepicker
  },

  setup () {
    const {
      isModalOpen,
      openModal,
      closeModal
    } = modal()

    const {
      date,
      isError,
      lowerLimit,
      upperLimit,
      handleDateChange
    } = datepicker()

    const {
      exchange,
      exchangeRatesList,
      handleExchange,
      handleExchangeFetch
    } = exchangeRates(date)

    return {
      isModalOpen,
      openModal,
      closeModal,
      date,
      lowerLimit,
      upperLimit,
      isError,
      handleDateChange,
      exchange,
      exchangeRatesList,
      handleExchange,
      handleExchangeFetch
    }
  },
}
</script>

<style lang="scss" scoped>

</style>