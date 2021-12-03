<template>
  <div class="datepicker">
    <vue-datepicker
        v-model="selectedDate"
    />
    <div v-if="isError" class="error">Неверная дата</div>
  </div>
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
        error: isError.value
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

<style lang="scss" scoped>
.datepicker {
  position: relative;
  margin-bottom: 30px;
}

:deep(.v3dp__input_wrapper) {
  input {
    padding: 10px 20px;
    text-align: center;
    border: 1px solid $base-color;
    border-radius: 10px;
    cursor: pointer;
  }
}

.error {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 6px);
  text-align: center;
  color: $error-color;
}
</style>