<template>
  <router-view v-slot="{ Component }">
    <div class="content">
      <component :is="Component" />
    </div>
  </router-view>
</template>

<script>

</script>

<style lang="scss">
@import "./assets/scss/reset";

body {
  font-family: Helvetica, sans-serif;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  border-radius: 20px;

  &__container {
    width: 100%;
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;

    &_border-bottom {
      border-bottom: 1px solid $base-color;
    }

    &_full-height {
      height: calc(100vh - 62px);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
