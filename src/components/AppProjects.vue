<script setup>
import { projects } from '@/utils/projects'
import UIButton from '@/components/UIButton.vue'
import AppProject from '@/components/AppProject.vue'
</script>

<template>
  <section id="projects" class="projects">
    <ul class="projects--list">
      <li class="projects--title-box">
        <h2 class="projects--title">Проектные работы</h2>
      </li>
      <AppProject
        v-for="project in projects"
        :key="project.name"
        :img="project.img.small"
        :big-img="project.img.big"
        :alt="project.img.alt"
        :name="project.name"
        :desc="project.desc"
        :techs="project.techs"
        :deploy="project.links.deploy"
        :rep="project.links.rep"
        :layout="project.links.layout"
      />
      <li class="projects--button-box">
        <a href="https://github.com/VikaBuyavykh" target="_blank"
          ><UIButton is-small>Git Hub</UIButton></a
        >
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/extensions.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';

.projects {
  @include size(100%, auto);
  padding-block: 60px 120px;
  background-color: $base;

  @include media_xl {
    padding-block: 40px 80px;
  }

  @include media_lg {
    padding-block: 20px 40px;
  }

  &--list {
    @extend %sizing;
    display: grid;
    grid-template: repeat(9, auto) / repeat(2, 1fr);
    gap: 24px;

    @include media_sm {
      grid-template: repeat(5, auto) / 1fr;
    }
  }

  &--title {
    margin-block-start: 24px;
    @include h2($text, left);

    @include media_xl {
      @include h3($text, left);
    }
  }

  &--button-box {
    margin-block-end: 20px;
    justify-self: center;
    align-self: center;

    @include media_sm {
      margin-block-end: 0;
    }
  }
}
</style>
