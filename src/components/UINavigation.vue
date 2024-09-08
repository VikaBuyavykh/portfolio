<script setup>
import { links } from '@/utils/navLinks'

defineEmits(['changePopupVisibility'])
</script>

<template>
  <nav class="navigation">
    <a
      v-for="link in links"
      @click="$emit('changePopupVisibility', false)"
      :key="link.text"
      :href="link.link"
      class="navigation--link"
      >{{ link.text }}</a
    >
  </nav>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/extensions.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';

.navigation {
  @include flex(row, center, center, 50px);

  @include media_lg {
    gap: 32px;
  }

  @include media_md {
    gap: 16px;
  }

  @include media_sm {
    flex-direction: column;
    align-items: end;
    gap: 0;
  }

  &--link {
    padding-block: 24px;
    @include t4($text, left);
    text-decoration: none;
    text-wrap: nowrap;
    transition:
      color 0.3s,
      background-color 0.3s ease;

    &:hover {
      color: rgba($text, 0.5);
    }

    @include media_sm {
      padding-block: 16px;
    }

    &-active {
      background-color: $primary;
      padding-inline: 24px;
      animation: pick 0.3s linear;
    }
  }
}

@keyframes pick {
  from {
    padding-inline: 0;
  }
  to {
    padding-inline: 24px;
  }
}
</style>
