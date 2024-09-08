<script setup>
import { diplomas } from '@/utils/diplomas'
</script>

<template>
  <section class="education">
    <div class="education--container">
      <div class="education--info">
        <h2 class="education--title">Образование</h2>
        <ul class="education--list">
          <li v-for="diploma in diplomas" :key="diploma.name" class="education--item">
            <h3 class="education--item-name">{{ diploma.name }}</h3>
            <span class="education--item-date">{{ diploma.date }}</span>
            <p class="education--item-post">{{ diploma.post }}</p>
          </li>
        </ul>
      </div>
      <picture class="education--image">
        <source srcset="/src/assets/images/diploma.jpg" media="(max-width: 1000px)" />
        <img src="/src/assets/images/diploma-big.jpg" alt="Фото Виктории с дипломом в руках" />
      </picture>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/extensions.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';

.education {
  @include size(100%, auto);
  background-color: $peach-accent;

  &--container {
    @include size(100%, auto);
    max-width: 1440px;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include media_sm {
      grid-template: 1fr 350px / 1fr;
    }
  }

  &--info {
    @include size(80%, auto);
    margin-inline: auto;
    padding-block: 80px;
    @include flex(column, start, stretch, 24px);

    @include media_lg {
      padding-block: 40px;
    }

    @include media_sm {
      width: 90%;
    }
  }

  &--title {
    @include h2($level-1, left);

    @include media_xl {
      @include h3($level-1, left);
    }
  }

  &--list {
    @include flex(column, start, end, 0);
    list-style-type: none;
  }

  &--item {
    padding-block: 16px;
    @include flex(column, start, end, 0);
    border-bottom: 1px rgba($light-grey, 0.4) solid;

    &:last-child {
      border: none;
    }

    &-name {
      @include u2($primary, right);
    }

    &-date {
      display: block;
      @include t5($light-grey, right);
    }

    &-post {
      @include t1($level-1, right);

      @include media_lg {
        @include t2($level-1, right);
      }
    }
  }

  &--image {
    @include size(100%, 100%);
    position: relative;

    img {
      position: absolute;
      @include size(100%, 100%);
      @extend %pic;
    }
  }
}
</style>
