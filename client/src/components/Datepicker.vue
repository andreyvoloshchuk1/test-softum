<template>
  <vue-datepicker
      v-model="selectedDate"
  />
  <div v-if="isError">Неверная дата</div>
</template>

<script>
import vueDatepicker from 'vue3-datepicker'
import { computed, ref, watch } from "vue";

export default {
  name: "Datepicker",

  props: {
    value: {
      type: Object,
      default: {}
    },

    upperLimit: {
      type: Object,
      default: {}
    },

    lowerLimit: {
      type: Object,
      default: {}
    },
  },

  components: {
    vueDatepicker
  },

  setup (props, { emit }) {
    const selectedDate = ref(props.value)
    const isError = computed(() => selectedDate.value > props.upperLimit || selectedDate.value <= props.lowerLimit)

    watch(selectedDate, (value) => {
      emit('change', {
        value,
        isError: isError.value
      })
    })

    return {
      selectedDate,
      isError
    }
  },

  emits: ['change']
}
</script>

<style scoped>

</style>