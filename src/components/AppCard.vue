<script setup>
import { computed } from 'vue'

const props = defineProps({
  img: String,
  alt: String,
  title: String
})

const imgPath = computed(
  () => new URL(`/src/assets/images/hobbies/${props.img}`, import.meta.url).href
)
</script>

<template>
  <li class="card">
    <img class="card--image" :alt="alt" :src="imgPath" />
    <span class="card--text">{{ title }}</span>
  </li>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/extensions.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';

.card {
  @include size(100%, auto);
  @include flex(column, start, start, 4px);

  &--image {
    @include size(100%, 416px);
    @extend %pic;

    @include media_lg {
      height: 360px;
    }

    @include media_sm {
      height: 320px;
    }

    @include media_xs {
      height: 260px;
    }
  }

  &--text {
    @include t3($dark-grey, left);
  }
}
</style>
