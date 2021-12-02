<template>
  <select v-model="value">
    <option v-for="item in list">{{ item }}</option>
  </select>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: "SSelector",

  props: {
    list: {
      type: Array,
      required: true
    }
  },

  setup (props, { emit }) {
    const value = ref(props.list[0])

    watch(value, (val) => {
      emit('change', val)
    })

    return {
      value
    }
  }
}
</script>

<style scoped>

</style>