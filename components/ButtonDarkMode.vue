<script setup>
const isDarkMode = ref(false)

const toggleDarkMode = () => {
  const body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    body.classList.remove('dark')
    localStorage.removeItem('theme')
  } else {
    body.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
  isDarkMode.value = !isDarkMode.value
}

onMounted(() => {
  isDarkMode.value = localStorage.getItem('theme') === 'dark'
})

</script>

<template>
  <Button
    :title="isDarkMode ? $t('button.light') : $t('button.dark')"
    :icon-name="isDarkMode ? 'material-symbols:clear-day-rounded' : 'material-symbols:nightlight'"
    inverseTheme
    text-class="text-xs"
    @click="toggleDarkMode"
  />
</template>