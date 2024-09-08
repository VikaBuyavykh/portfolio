<script setup></script>

<template>
  <section class="cover">
    <div class="cover--container">
      <picture class="cover--image">
        <source srcset="/src/assets/images/photo2.jpg" media="(max-width: 1000px)" />
        <img src="/src/assets/images/photo2-big.jpg" alt="Фото Виктории" />
      </picture>
      <div class="cover--text-box">
        <h1 class="cover--title">Привет!<br />Я – Вика. Junior Frontend Developer</h1>
        <span class="cover--place">Москва | Екатеринбург</span>
        <p class="cover--text">
          Ответственный, увлеченный и очень нежный разработчик. Занимаюсь кодингом полтора года.
          Мечтаю об интересных проектах и классной команде
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/extensions.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';

.cover {
  @include size(100%, auto);
  background-image: linear-gradient(0.25turn, $base 37.5%, $level-1 37.5% 100%);

  @include media_xl {
    background: $base;
  }

  &--container {
    margin-inline: auto;
    @extend %sizing;
    padding-block: 140px;
    display: grid;
    grid-template-columns: 1.5fr 2fr;

    @include media_xl {
      padding-block: 100px 40px;
    }

    @include media_xl {
      grid-template-columns: 1fr 2fr;
    }

    @include media_sm {
      width: 100%;
      grid-template: 1.25fr 1fr / 1fr;
      gap: 24px;
    }
  }

  &--image {
    @include size(100%, 100%);
    position: relative;
    transform: translateY(70px);

    img {
      position: absolute;
      @include size(100%, 100%);
      filter: brightness(80%);
      @extend %pic;
    }

    @include media_xl {
      transform: translateY(0);
    }
  }

  &--text-box {
    @include size(100%, auto);
    padding-inline: 5%;
    @include flex(column, top, left, 32px);

    @include media_xl {
      gap: 16px;
    }

    @include media_sm {
      width: 90%;
      margin-inline: auto;
      padding-inline: 0;
    }
  }

  &--title {
    @include h1($text, left);

    @include media_lg {
      @include h2($text, left);
    }

    @include media_sm {
      @include h3($text, left);
    }
  }

  &--place {
    @include h3($light-grey, left);
    text-transform: uppercase;

    @include media_lg {
      @include h4($light-grey, left);
    }
  }

  &--text {
    @include t1($text, left);

    @include media_lg {
      @include t2($text, left);
    }
  }
}
</style>
