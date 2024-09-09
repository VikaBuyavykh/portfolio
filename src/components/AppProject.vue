<script setup>
import { computed } from 'vue'

const props = defineProps({
  img: String,
  bigImg: String,
  alt: String,
  name: String,
  desc: String,
  techs: Array,
  deploy: String,
  rep: String,
  layout: [String, null]
})

const imgPath = computed(
  () => new URL(`/src/assets/images/projects/${props.img}`, import.meta.url).href
)
const bigImgPath = computed(
  () => new URL(`/src/assets/images/projects/${props.bigImg}`, import.meta.url).href
)
</script>

<template>
  <li class="project">
    <a :href="deploy" target="_blank" class="project--image">
      <picture>
        <source :srcset="imgPath" media="(max-width: 1000px)" />
        <img :src="bigImgPath" :alt="alt" />
      </picture>
    </a>
    <div class="project--info">
      <h3 class="project--name">{{ name }}</h3>
      <p class="project--desc">{{ desc }}</p>
      <p class="project--techs">Стек: {{ techs.join(', ') }}</p>
      <ul class="project--links">
        <li><a :href="deploy">Деплой</a></li>
        <li><a :href="rep">Репозиторий</a></li>
        <li v-if="layout"><a :href="layout">Макет</a></li>
      </ul>
    </div>
  </li>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/extensions.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';

.project {
  grid-row-end: span 4;
  box-shadow: 0 0 20px rgba($primary, 0.2);
  border-radius: 0;
  @include flex(column, start, stretch, 0);
  transition:
    transform 0.2s,
    box-shadow 0.2s ease;

  @include media_sm {
    grid-row-end: span 1;
  }

  &:has(.project--image:hover) {
    transform: scale(0.99);
    box-shadow: 0 0 17px rgba($primary, 0.4);
  }

  &--image {
    width: 100%;
    aspect-ratio: 4 / 3;
    cursor: pointer;
    position: relative;

    picture {
      img {
        position: absolute;
        @include size(100%, 100%);
        object-fit: cover;
        object-position: top;
      }
    }
  }

  &--info {
    padding-block: 24px;
    padding-inline: 4%;
    flex-grow: 1;
    border-block-start: 0.2px solid rgba($primary, 0.2);
    background-color: $level-1;
    @include flex(column, start, start, 8px);

    @include media_xl {
      padding-block: 16px;
    }
  }

  &--name {
    @include h4($text, left);

    @include media_xl {
      @include h5($text, left);
    }

    @include media_md {
      @include h6($text, left);
    }
  }

  &--desc {
    @include t3($light-grey, stretch);

    @include media_xl {
      @include t5($light-grey, left);
    }
  }

  &--techs {
    margin-block-start: 4px;
    width: 100%;
    @include t3($light-grey, left);
  }

  &--links {
    width: 100%;
    margin-block-start: auto;
    list-style-type: none;
    @include flex(row, end, center, 0);

    @include media_sm {
      margin-block-start: 8px;
      justify-content: center;
    }

    li {
      border-inline-end: 1px solid $primary;
      padding-inline: 8px;

      &:last-of-type {
        border: none;
        padding-inline-end: 0;
      }

      a {
        @include t3($primary, left);
        text-decoration: none;
        @extend %hoverOpacity;

        @include media_xl {
          @include t5($primary, left);
        }
      }
    }
  }
}
</style>
