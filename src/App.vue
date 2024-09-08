<script setup>
import { onUnmounted, ref } from 'vue'
import { useMenu } from '@/composables/useMenu.js'
import { useHobbies } from '@/composables/useHobbies.js'
import AppHeader from '@/components/AppHeader.vue'
import AppCover from '@/components/AppCover.vue'
import AppExperience from '@/components/AppExperience.vue'
import AppEducation from '@/components/AppEducation.vue'
import AppSkills from '@/components/AppSkills.vue'
import AppProjects from '@/components/AppProjects.vue'
import AppAbout from '@/components/AppAbout.vue'
import AppSofts from '@/components/AppSofts.vue'
import AppFooter from '@/components/AppFooter.vue'

//меню в шапке

const { debouncedMenuHandler, isHeaderTransparent } = useMenu()

const isPopupVisible = ref(false)
function changePopupVisibility(value) {
  isPopupVisible.value = value
}

window.addEventListener('scroll', debouncedMenuHandler)

onUnmounted(() => {
  window.removeEventListener('scroll', debouncedMenuHandler)
})

//увлечения

const { buttons, choose, hobby } = useHobbies()
</script>

<template>
  <div class="page">
    <AppHeader
      @change-popup-visibility="changePopupVisibility"
      :is-popup-visible="isPopupVisible"
      :is-header-transparent="isHeaderTransparent"
    />
    <main class="main">
      <AppCover />
      <AppExperience />
      <AppEducation />
      <AppSkills />
      <AppProjects />
      <AppSofts />
      <AppAbout :buttons :hobby @choose="choose" />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/extensions.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/fonts.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

.page {
  @include size(100%, auto);
  min-height: 100vh;
  min-width: 280px;
  @include flex(column, start, center, 0px);
  scroll-snap-type: y mandatory;

  section,
  footer {
    scroll-margin-top: 50px;
    scroll-snap-align: start;
  }
}

.main {
  @include size(100%, auto);
  @include flex(column, start, center, 0px);
}

//скрытие

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
}

//анимация

.fade-enter-active {
  animation: 0.5s fade forwards ease;
}

.fade-leave-active {
  animation: 0.5s fade reverse ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
