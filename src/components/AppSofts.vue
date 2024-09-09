<script setup>
import { ref } from 'vue'
import UIDialog from '@/components/UIDialog.vue'

const dialog = ref()

function openDialog() {
  dialog.value.openDialog()
}
</script>

<template>
  <section class="softs">
    <div class="softs--container">
      <div class="softs--info">
        <h2 class="softs--title">Soft skills</h2>
        <p class="softs--text">
          Здесь я со своей субъективной колокольни могла бы рассказать о том, какая я замечательная,
          умная, стрессоустойчивая и далее по списку. Но я поступлю иначе – позволю сказать за себя
          другим людям. Моей экс-команде.
        </p>
        <p class="softs--text">
          В последний день работы на предыдущем месте коллеги оставили свои мысли обо мне на
          стикерах в Miro. Мне не стыдно поделиться этими стикерами с вами.
          <span>Клинкните по скрину</span>, чтобы приблизить.
        </p>
        <p class="softs--text">
          Отмечу лишь, что самые часто встречающися качества -
          <span>ответственность, искренность и доброта.</span>
        </p>
      </div>
      <picture class="softs--image">
        <source srcset="/src/assets/images/brief.jpg" media="(max-width: 1000px)" />
        <img
          @click="openDialog"
          src="/src/assets/images/brief.jpg"
          alt="Скрин доски Миро со стикерами"
        />
      </picture>
    </div>
    <UIDialog ref="dialog">
      <img
        @click.stop
        class="softs--dialog-image"
        src="/src/assets/images/brief.jpg"
        alt="Скрин доски Миро со стикерами"
      />
    </UIDialog>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/extensions.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';

.softs {
  @include size(100%, auto);
  padding-block: 80px;
  background-color: $peach-accent;

  @include media_xl {
    padding-block: 60px;
  }

  @include media_lg {
    padding-block: 40px;
  }

  &--container {
    @extend %sizing;
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    gap: 56px;

    @include media_lg {
      width: 100%;
      grid-template: repeat(2, auto) / 1fr;
      gap: 36px;
    }
  }

  &--info {
    @include flex(column, start, start, 24px);

    @include media_lg {
      width: 90%;
      margin-inline: auto;
    }
  }

  &--title {
    @include h2($level-1, left);

    @include media_xl {
      @include h3($level-1, left);
    }
  }

  &--text {
    @include t1($level-1, left);

    span {
      color: $primary;
    }
  }

  &--image {
    @include size(100%, auto);
    @include flex(row, center, center, 0);

    @include media_lg {
      width: 90%;
      margin-inline: auto;
      padding-block: 24px;
      background-color: rgba($dark-grey, 0.1);
    }

    img {
      @include size(70%, auto);
      object-fit: contain;
      object-position: center;
      filter: grayscale(1);
      transition: all 0.2s ease;
      cursor: pointer;

      &:hover {
        filter: grayscale(0);
      }
    }
  }

  &--dialog-image {
    position: relative;
    max-width: 80vw;
    max-height: 80vh;
    object-fit: contain;
    object-position: center;
  }
}
</style>
