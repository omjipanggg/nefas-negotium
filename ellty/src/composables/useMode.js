import { ref, watchEffect } from 'vue'

const isDark = ref(false)

export function useDarkMode() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value = localStorage.theme ? localStorage.theme === 'dark' : prefersDark

  watchEffect(() => {
    document.documentElement.dataset.theme = isDark.value ? 'dark' : 'light'
    localStorage.theme = isDark.value ? 'dark' : 'light'
  })

  return { isDark }
}
