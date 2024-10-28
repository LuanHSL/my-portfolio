<script setup>

const { t, setLocale } = useI18n()

const availableLocales = computed(() => [
  {
    title: t('languageOptions.pt'),
    locale: 'pt',
  },
  {
    title: t('languageOptions.en'),
    locale: 'en',
  }
])

const language = ref(null)

watch(language, (newValue, oldValue) => {
  setLanguage(language.value)
  if (oldValue) {
  }
})

const setLanguage = (locale) => {
  localStorage.setItem('language', locale)
  setLocale(language.value)
}

onMounted(() => {
  language.value = localStorage.getItem('language') == 'en' ? 'en' : 'pt'
})
</script>

<template>
  <select
    v-model="language"
    name="language"
    class="rounded-3xl text-xs h-full p-1.5 outline-none bg-black dark:bg-white text-white dark:text-black"
  >
    <option
      v-for="locale in availableLocales"
      :key="locale.locale"
      :value="locale.locale"
      class="text-xs"
    >
      {{ locale.title }}
    </option>
  </select>
</template>