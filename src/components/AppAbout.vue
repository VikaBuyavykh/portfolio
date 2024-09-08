<script setup>
import AppCard from '@/components/AppCard.vue'
import UIButton from '@/components/UIButton.vue'

defineProps({
  buttons: Array,
  hobby: Object
})

defineEmits(['choose'])
</script>

<template>
  <section id="about" class="about">
    <div class="about--container">
      <h2 class="about--title">О себе</h2>
      <p class="about--text">
        Кодинг – главная страсть последних полутора лет. Едиснтвенное желание – бесконечно
        совершенствоваться: сейчас я изучаю TypeScript, планирую пощупать SSR и потестить Nuxt, хочу
        прогрузиться в тему сложных анимаций, а в перспективе года было бы супер начать изучение
        одного из языков серверной разработки.
      </p>
      <p class="about--text">
        Ниже определила категории земных удовольствий, к которым я имею слабость, и оставила по
        четверке фаворитов на каждую.
      </p>
      <ul class="about--buttons">
        <li v-for="(item, index) in buttons" :key="index" class="about-button">
          <UIButton @click="$emit('choose', item.name)" :is-active="item.selected" is-small>{{
            item.name
          }}</UIButton>
        </li>
      </ul>
      <TransitionGroup name="list">
        <template v-if="hobby">
          <p class="about--text about--text-hobby">{{ hobby.text }}</p>
          <ul class="about--cards">
            <AppCard
              v-for="card in hobby.list"
              :key="card.title"
              :img="card.img"
              :alt="card.alt"
              :title="card.title"
            />
          </ul>
        </template>
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/extensions.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

.about {
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
    @include flex(column, start, stretch, 24px);
  }

  &--title {
    @include h2($text, left);

    @include media_xl {
      @include h3($text, left);
    }
  }

  &--text {
    width: 70%;
    @include t1($light-grey, left);
  }

  &--buttons {
    margin-block: 40px 24px;
    @include flex(row, start, center, 24px);
    flex-wrap: wrap;

    @include media_lg {
      margin-block: 16px 12px;
    }
  }

  &--cards {
    @include size(100%, auto);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @include media_md {
      grid-template: repeat(2, 1fr) / repeat(2, 1fr);
      gap: 32px;
    }

    @include media_sm {
      grid-template: repeat(2, 1fr) / repeat(2, 1fr);
      gap: 16px;
    }
  }
}
</style>
