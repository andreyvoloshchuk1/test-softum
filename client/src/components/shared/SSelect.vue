<template>
  <select class="select" v-model="value">
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

<style lang="scss" scoped>
  .select {
    width: 100%;
    padding: 10px 20px;
    margin: 0 0 20px;
    border: 1px solid $base-color;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;

    option {
      display: block;
      padding: 18px 0;
    }
  }
</style>