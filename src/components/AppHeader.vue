<script setup>
import UINavigation from '@/components/UINavigation.vue'

const props = defineProps({
  isPopupVisible: Boolean,
  isHeaderTransparent: Boolean
})

const emit = defineEmits(['changePopupVisibility'])

function handleClick() {
  emit('changePopupVisibility', !props.isPopupVisible)
}
</script>

<template>
  <header class="header" :class="{ 'header-transparent': isHeaderTransparent }">
    <div class="header--container">
      <h2 class="header--name">Виктория Буявых</h2>
      <div class="header--popup" :class="{ 'header--popup-visible': isPopupVisible }">
        <UINavigation @change-popup-visibility="$emit('changePopupVisibility')" />
      </div>
      <div
        @click="handleClick"
        id="nav-icon6"
        class="header--button"
        :class="{ 'header--button-cross': isPopupVisible }"
      >
        <span></span>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/extensions.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';

.header {
  position: fixed;
  inset: 0 0 auto 0;
  background-color: $base;
  z-index: 1;

  &-transparent {
    background-color: transparent;
  }

  &--popup {
    @include media_sm {
      display: none;

      &-visible {
        display: block;
        animation: openPopup 0.5s ease;
        position: fixed;
        inset: 0;
        padding: 107px 24px 40px;
        background-color: $base;
      }
    }
  }

  &--container {
    @extend %sizing;
    @include flex(row, space-between, center, 36px);
  }

  &--name {
    padding-block: 24px;
    @include h6($text, left);
  }

  &--button {
    display: none;
    @include size(24px, auto);
    position: relative;
    transition-duration: 1s;
    cursor: pointer;

    & span {
      @include size(24px, 3px);
      background-color: $text;
      border-radius: 20px;
      position: absolute;
      transition-duration: 0.25s;
      transition-delay: 0.25s;
    }

    & span:before {
      left: 0;
      position: absolute;
      top: -6px;
      @include size(24px, 3px);
      background-color: $text;
      content: '';
      border-radius: 20px;
      transition-duration: 0.25s;
      transition:
        transform 0.25s,
        top 0.25s 0.25s;
    }

    & span:after {
      left: 0;
      position: absolute;
      top: 6px;
      @include size(24px, 3px);
      background-color: $text;
      content: '';
      border-radius: 20px;
      transition-duration: 0.25s;
      transition:
        transform 0.25s,
        top 0.25s 0.25s;
    }

    &.header--button-cross span {
      transition-duration: 0.1s;
      transition-delay: 0.25s;
      background: transparent;
    }

    &.header--button-cross span:before {
      transition:
        top 0.25s,
        transform 0.25s 0.25s;
      top: 0px;
      transform: rotateZ(-45deg);
    }

    &.header--button-cross span:after {
      transition:
        top 0.4s,
        transform 0.25s 0.25s;
      top: 0px;
      transform: rotateZ(45deg);
    }

    @include media_sm {
      display: block;
    }
  }
}

@keyframes openPopup {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
