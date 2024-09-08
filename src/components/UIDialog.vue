<script setup>
import { ref } from 'vue'

const dialog = ref()

function openDialog() {
  dialog.value.showModal()
}

function closeDialog() {
  dialog.value.close()
}

defineExpose({
  openDialog
})
</script>

<template>
  <dialog ref="dialog" class="dialog" @click="closeDialog">
    <slot @click.stop></slot>
  </dialog>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/extensions.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';

.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  @extend %resetInputsAndBtns;
  cursor: pointer;
  transition:
    display 0.7s allow-discrete,
    overlay 0.5s allow-discrete,
    opacity 0.5s ease;
  opacity: 0;

  &[open] {
    opacity: 1;

    @starting-style {
      opacity: 0;
    }
  }

  &::backdrop {
    backdrop-filter: blur(5px);
  }
}
</style>
