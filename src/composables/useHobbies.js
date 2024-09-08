import { ref, computed } from 'vue'
import { hobbies } from '@/utils/hobbies'

const buttons = ref([
  {
    name: 'Сериалы',
    selected: true
  },
  {
    name: 'Еда',
    selected: false
  },
  {
    name: 'Литература',
    selected: false
  },
  {
    name: 'Музыка',
    selected: false
  },
  {
    name: 'Теннис',
    selected: false
  },
  {
    name: 'Путешествия',
    selected: false
  }
])

function choose(name) {
  buttons.value = buttons.value.map((item) =>
    name === item.name ? { ...item, selected: true } : { ...item, selected: false }
  )
}

const hobby = computed(() => {
  const name = buttons.value.find((item) => item.selected).name
  return hobbies.find((item) => item.name === name)
})

export function useHobbies() {
  return {
    buttons,
    choose,
    hobby
  }
}
