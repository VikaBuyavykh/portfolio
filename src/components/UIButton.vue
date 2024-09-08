<script setup>
defineProps({
  isSmall: Boolean,
  isActive: Boolean
})
</script>

<template>
  <button class="button" :class="{ 'button-small': isSmall, 'button-active': isActive }">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/extensions.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';

.button {
  @extend %resetInputsAndBtns;
  padding: 24px 32px;
  border: 1px solid $primary;
  @include u1($text, center);
  cursor: pointer;
  transition: all 0.2s ease;

  &-small {
    padding: 12px 16px;
  }

  &-active {
    background-color: $primary;
  }

  &:hover {
    transform: scale(0.95);
    background-color: rgba($primary, 0.3);
  }
}
</style>
