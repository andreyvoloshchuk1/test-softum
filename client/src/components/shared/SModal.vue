<template>
  <teleport to="body">
    <div class="modal" v-if="isOpen">
      <div class="modal__content">
        <slot></slot>
        <div class="modal__close" @click="$emit('close-modal')"></div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "SModal",

  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },

  emits: ['close-modal']
}
</script>

<style lang="scss" scoped>
  .modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);

    &__content {
      position: relative;
      padding: 40px;
      background-color: #fff;
      border-radius: 20px;
    }

    &__close {
      position: absolute;
      top: 20px;
      right: 20px;
      display: block;
      width: 20px;
      height: 20px;
      cursor: pointer;

      &:before, &:after {
        content: '';
        position: absolute;
        top: 50%;
        width: 20px;
        height: 1px;
        display: block;
        background-color: #000;
        border-radius: 6px;
      }

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }
    }
  }
</style>