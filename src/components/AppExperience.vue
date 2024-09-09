<script setup>
import { list } from '@/utils/experienceList'
</script>

<template>
  <section id="experience" class="experience">
    <div class="experience--container">
      <p class="experience--section">Опыт</p>
      <h2 class="experience--title">Мой путь в разработке</h2>
      <ul class="experience--list">
        <li v-for="item in list" :key="item.number" class="experience--list-item">
          <span class="experience--list-item-number">{{ item.number }}</span>
          <h3 class="experience--list-item-title">
            <a :href="item.link" :target="item.target" :style="{ color: item.color }">{{
              item.company
            }}</a
            >, {{ item.post }}
          </h3>
          <p class="experience--list-item-text">{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/extensions.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';

.experience {
  @include size(100%, auto);
  padding-block: 120px;
  background-color: $base;

  @include media_xl {
    padding-block: 80px;
  }

  @include media_lg {
    padding-block: 40px;
  }

  &--container {
    @extend %sizing;
    @include flex(column, start, stretch, 8px);
  }

  &--section {
    @include u2($light-grey, left);
  }

  &--title {
    margin-bottom: 32px;
    @include h2($text, left);

    @include media_xl {
      @include h3($text, left);
      margin-bottom: 16px;
    }
  }

  &--list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @include media_lg {
      grid-template: repeat(3, auto) / repeat(2, 1fr);
    }

    @include media_md {
      grid-template: repeat(5, auto) / 1fr;
    }

    @include media_sm {
      gap: 22px;
    }

    &-item {
      @include flex(column, start, start, 0);

      &-number {
        @include l1($light-grey, left);

        @include media_xl {
          @include l2($light-grey, left);
        }
      }

      &-title {
        @include h3($text, left);
        margin-bottom: 22px;

        @include media_lg {
          @include h4($text, left);
          margin-bottom: 12px;
        }

        a {
          text-decoration: none;
          @extend %hoverOpacity;
        }
      }

      &-text {
        @include t1($light-grey, left);

        @include media_md {
          @include t2($light-grey, left);
        }
      }
    }
  }
}
</style>
