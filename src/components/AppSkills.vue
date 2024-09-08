<script setup>
import htmlIcon from '@/assets/icons/html5.svg'
import cssIcon from '@/assets/icons/css3.svg'
import sassIcon from '@/assets/icons/sass.svg'
import tailwindIcon from '@/assets/icons/tailwind-css.svg'
import bemIcon from '@/assets/icons/bem.svg'
import figmaIcon from '@/assets/icons/figma.svg'
import vscodeIcon from '@/assets/icons/vscode.svg'
import gitIcon from '@/assets/icons/git.svg'
import githubIcon from '@/assets/icons/github.svg'
import expressIcon from '@/assets/icons/express.svg'
import mongodbIcon from '@/assets/icons/mongodb.svg'
import postmanIcon from '@/assets/icons/postman.svg'
import jsIcon from '@/assets/icons/js.svg'
import nodeIcon from '@/assets/icons/node-js.svg'
import axiosIcon from '@/assets/icons/axios.svg'
import vueIcon from '@/assets/icons/vue.svg'
import reactIcon from '@/assets/icons/react.svg'
import viteIcon from '@/assets/icons/vite.svg'
import webpackIcon from '@/assets/icons/webpack.svg'
</script>

<template>
  <section id="skills" class="skills">
    <ul class="skills--container">
      <li class="skills--title-box"><h2 class="skills--title">Hard skills</h2></li>
      <li class="skills--section">
        <h3 class="skills--name">Верстка</h3>
        <p class="skills--text">
          Макеты верстаю по Figme с расширением Perfect Pixel. Со всей нежностью использую
          препроцессор SASS(предпочитаю SCSS). Могу и люблю верстать по БЭМ, хотя подход Atomic CSS
          (Tailwind) знаком и люб мне тоже
        </p>
        <ul class="skills--list">
          <li class="skills--list-item"><img :src="htmlIcon" alt="Icon of html" /></li>
          <li class="skills--list-item"><img :src="cssIcon" alt="Icon of css" /></li>
          <li class="skills--list-item"><img :src="sassIcon" alt="Icon of sass" /></li>
          <li class="skills--list-item"><img :src="tailwindIcon" alt="Icon of tailwind-css" /></li>
          <li class="skills--list-item"><img :src="bemIcon" alt="Icon of bem" /></li>
          <li class="skills--list-item"><img :src="figmaIcon" alt="Icon of figma" /></li>
        </ul>
      </li>
      <li class="skills--section">
        <h3 class="skills--name">Инструменты</h3>
        <p class="skills--text">
          Студенты Практикума пишут на Реакте: я не исключение. Однако после выпуска открыла для
          себя Vue. Последние полгода пишу именно на нем. В качестве сборщика предпочитаю Vite, имею
          опыт базовой настройки Webpack и Gulp. В работе с запросами пользуюсь Axios
        </p>
        <ul class="skills--list">
          <li class="skills--list-item"><img :src="jsIcon" alt="Icon of js" /></li>
          <li class="skills--list-item"><img :src="nodeIcon" alt="Icon of node-js" /></li>
          <li class="skills--list-item"><img :src="axiosIcon" alt="Icon of axios" /></li>
          <li class="skills--list-item"><img :src="vueIcon" alt="Icon of vue" /></li>
          <li class="skills--list-item"><img :src="reactIcon" alt="Icon of react" /></li>
          <li class="skills--list-item"><img :src="viteIcon" alt="Icon of vite" /></li>
          <li class="skills--list-item"><img :src="webpackIcon" alt="Icon of webpack" /></li>
        </ul>
      </li>
      <li class="skills--section">
        <h3 class="skills--name">Среда</h3>
        <p class="skills--text">
          В качестве редактора кода использую VSCode. Система контроля версий Git и платформа Github
          - знаю, умею, практикую
        </p>
        <ul class="skills--list">
          <li class="skills--list-item"><img :src="vscodeIcon" alt="Icon of vscode" /></li>
          <li class="skills--list-item"><img :src="gitIcon" alt="Icon of git" /></li>
          <li class="skills--list-item"><img :src="githubIcon" alt="Icon of github" /></li>
        </ul>
      </li>
      <li class="skills--section">
        <h3 class="skills--name">Backend</h3>
        <p class="skills--text">
          В Яндекс.Практикуме успела познакомиться с основами бекэнда. И хотя все ВМ, к которым были
          подрублены проекты в Яндексе, отключены (сейчас я пользуюсь сервисами генерации REST API),
          репозитории с собственным кодом бекэнда работ запушены на GH
        </p>
        <ul class="skills--list">
          <li class="skills--list-item"><img :src="expressIcon" alt="Icon of express" /></li>
          <li class="skills--list-item"><img :src="mongodbIcon" alt="Icon of mongodb" /></li>
          <li class="skills--list-item"><img :src="postmanIcon" alt="Icon of postman" /></li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/extensions.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';

.skills {
  @include size(100%, auto);
  background-color: $base;
  padding-block: 120px 60px;

  @include media_xl {
    padding-block: 80px 40px;
  }

  @include media_lg {
    padding-block: 40px 20px;
  }

  &--container {
    @extend %sizing;
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);
    gap: 56px;

    @include media_xl {
      grid-template: repeat(3, auto) / repeat(2, 1fr);
      gap: 48px;
    }

    @include media_lg {
      gap: 36px;
    }

    @include media_sm {
      grid-template: repeat(5, auto) / 1fr;
    }
  }

  &--title-box {
    grid-row-end: span 2;

    @include media_xl {
      grid-area: 1 / 1 / 2 / 3;
    }

    @include media_sm {
      grid-column: 1 / 2;
    }
  }

  &--title {
    @include h2($text, left);

    @include media_xl {
      @include h3($text, left);
    }
  }

  &--section {
    @include flex(column, start, start, 20px);

    @include media_sm {
      gap: 16px;
    }
  }

  &--name {
    @include h3($text, left);

    @include media_xl {
      @include h4($text, left);
    }
  }

  &--text {
    @include t1($light-grey, left);
  }

  &--list {
    display: grid;
    list-style-type: none;
    grid-template: 1fr / repeat(7, 1fr);
    gap: 8px;

    &-item {
      img {
        @include size(36px, 36px);

        @include media_xxl {
          @include size(32px, 32px);
        }

        @include media_lg {
          @include size(28px, 28px);
        }
      }
    }
  }
}
</style>
