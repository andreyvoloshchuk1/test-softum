<template>
  <button class="btn" :disabled="disabled || loading" :class="{ spinning: loading }">
    <p v-if="!loading">
      <slot></slot>
    </p>
  </button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: "SButton",

  props: {
    disabled: {
      type: Boolean,
      default: false
    },

    text: {
      type: Boolean,
      default: ''
    }
  },

  setup () {
    const store = useStore()

    const loading = computed(() => store.state.isLoading)

    return {
      loading
    }
  }
}
</script>

<style lang="scss" scoped>
$borderRadius: 4px;


.btn {
  position: relative;
  width: 100%;
  max-width: 280px;
  min-height: 50px;
  display: inline-block;
  padding: 10px 20px;
  margin: 0 auto;
  line-height: 1.4;
  background: $base-color;
  border: 0;
  border-radius: $borderRadius;
  color: lighten($white-color, 15%);
  outline: none;
  transition: padding-right .3s ease;
  font-weight: 700;
  text-align: center;
}

.btn:hover:not([disabled]) {
  box-shadow: 0 0 2px darken($white-color, 10%) inset, 0px 1px 0 lighten($base-color, 10%);
  color: lighten(#fff, 20%);
}

.btn.spinning {
  background-color: $base-color;
}

.btn.spinning:before {
  content: "";
  width: 0px;
  height: 0px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  position: absolute;
  border: 2px solid $base-color;
  border-right: 3px solid $base-color;
  animation: rotate360 .5s infinite linear, exist .1s forwards ease ;
}

.btn[disabled] {
  background-color: rgba($base-color, 0.6);
}

@keyframes rotate360 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes exist {
  100% {
    width: 15px;
    height: 15px;
    margin: -8px 5px 0 0;
  }
}
</style>