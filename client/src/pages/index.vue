<template>
  <div class="content">
    <section class="main">
      <div class="main__header">Добро пожаловать</div>
      <div class="main__btn">
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
      <s-button @click="handleExchangeCheck">Проверить</s-button>
    </s-modal>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import Datepicker from "../components/Datepicker.vue";

import modalOpen from "../composables/modalOpen.js";

export default {
  name: "index",

  components: {
    Datepicker
  },

  setup () {
    const { isModalOpen, openModal, closeModal } = modalOpen()

    const date = ref(new Date())
    const isError = ref(false)
    const lowerLimit = new Date(new Date(date.value.getTime()).setFullYear(new Date().getFullYear() - 2))
    const upperLimit = date.value
    const handleDateChange = ({ value, error }) => {
      date.value = value
      isError.value = error
    }

    const store = useStore()
    const exchangeRatesList = ['USD', 'EUR', 'RUB', 'PLN', 'GBP']
    const exchange = ref(exchangeRatesList[0])
    const handleExchange = (value) => {
      exchange.value = value
    }
    const handleExchangeCheck = () => {
      store.dispatch('fetchExchangeList')
    }

    return {
      isModalOpen,
      openModal,
      closeModal,
      date,
      lowerLimit,
      upperLimit,
      isError,
      handleDateChange,
      exchangeRatesList,
      handleExchange,
      handleExchangeCheck
    }
  },
}
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 320px;
    border: 1px solid $base-color;
    border-radius: 20px;

    &__header {
      width: 100%;
      padding: 20px;
      border-bottom: 1px solid $base-color;
      text-align: center;
    }

    &__btn {
      padding: 20px;
    }
  }
</style>