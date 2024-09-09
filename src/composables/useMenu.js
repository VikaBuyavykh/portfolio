import { ref } from 'vue'
import { debounce } from '@/utils/debounce.js'

const isHeaderTransparent = ref(true)

function menuHandler() {
  const header = document.querySelector('header')
  const footer = document.querySelector('footer')
  const contactsLink = document.querySelector('.navigation--link[href="#contacts"]')

  // прозрачность
  if (window.scrollY === 0) {
    isHeaderTransparent.value = true
  } else {
    isHeaderTransparent.value = false
  }
  // выделение пунктов

  document.querySelectorAll('section').forEach((sec) => {
    let menuLink = document.querySelector(`.navigation--link[href="#${sec.id}"]`)
    if (menuLink) {
      if (
        window.scrollY + header.offsetHeight >= sec.offsetTop &&
        window.scrollY + header.offsetHeight < sec.offsetTop + sec.offsetHeight
      ) {
        if (
          window.scrollY + window.innerHeight >=
          footer.offsetTop + footer.offsetHeight - header.offsetHeight
        ) {
          menuLink.classList.remove('navigation--link-active')
          contactsLink.classList.add('navigation--link-active')
        } else {
          contactsLink.classList.remove('navigation--link-active')
          menuLink.classList.add('navigation--link-active')
        }
      } else {
        menuLink.classList.remove('navigation--link-active')
      }
    }
  })
}

const debouncedMenuHandler = debounce(menuHandler, 50)

export function useMenu() {
  return {
    isHeaderTransparent,
    debouncedMenuHandler
  }
}
