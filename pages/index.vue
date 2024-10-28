<script setup>
import jukebox from '~/assets/image/jukebox.png'
import myPortfolio from '~/assets/image/myPortfolio.png'
import jukeboxMobile from '~/assets/image/jukeboxMobile.png'
import myPortfolioMobile from '~/assets/image/myPortfolioMobile.png'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const { t } = useI18n()

useSeoMeta({
  title: t('seo.title'),
  ogTitle: t('seo.title'),
  description: t('seo.description'),
  ogDescription: t('seo.description'),
  twitterCard: 'summary_large_image',
})

const config = {
  itemsToShow: 1.5,
  snapAlign: 'center',
  wrapAround: true,
  breakpoints: {
    1200: {
      itemsToShow: 2,
      snapAlign: 'start',
    },
  },
}

const isOpenMenu = ref(false)
const isMobile = ref(true)

const experiences = computed(() => [
  {
    title: t('sectionAboutMe.experienceTwo.title'),
    period: t('sectionAboutMe.experienceTwo.period'),
    description: t('sectionAboutMe.experienceTwo.description')
  },
  {
    title: t('sectionAboutMe.experienceOne.title'),
    period: t('sectionAboutMe.experienceOne.period'),
    description: t('sectionAboutMe.experienceOne.description')
  }
])

const projects = ref([
  {
    title: 'Jukebox Ag',
    typeUrl: 'jukebox',
    image: jukebox,
    imageMobile: jukeboxMobile,
  },
  {
    title: 'Meu Portfólio',
    repositoryUrl: 'myPortfolio',
    image: myPortfolio,
    imageMobile: myPortfolioMobile,
  }
])

const icons = ref([
  'logos:vue',
  'logos:nuxt-icon',
  'logos:react',
  'logos:nextjs-icon',
  'logos:laravel',
  'logos:dotnet',
  'logos:docker-icon',
  'logos:flutter',
  'logos:mysql',
  'logos:postgresql',
  'logos:supabase-icon',
  'logos:firebase',
  'logos:html-5',
  'logos:git-icon',
  'logos:tailwindcss-icon'
])

const urls = {
  github: 'https://github.com/LuanHSL',
  linkedin: 'https://www.linkedin.com/in/luanhsl/',
  whatsapp: 'https://api.whatsapp.com/send?phone=5543991000444',
  email: 'mailto:luansilvalemes@gmail.com',
  upwork: 'https://www.upwork.com/freelancers/~0184221bdaed532169',
  jukebox: 'https://jukebox.ag',
  myPortfolio: 'https://github.com/LuanHSL/my-portfolio',
}


const scrollTo = (id) => {
  if (isMobile.value) {
    toggleMenu()
  }
  const element = document.getElementById(id)
  element.scrollIntoView({ behavior: 'smooth' })
}

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}

const openNewTab = (typeSocialMedia) => {
  const url = urls[typeSocialMedia]
  window.open(url, '_blank')
}

const checkIsMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = `/${t('curriculum')}`
  link.download = t('curriculum')
  link.click()
}

onMounted(() => {
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
  const body = document.querySelector('body');
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
  }
})

</script>

<template>
  <div class="flex flex-col items-center bg-white dark:bg-black">
    <section id="hero" class="flex flex-col justify-between relative w-full max-w-screen-2xl py-3 px-6 min-h-screen md:px-14 md:py-12 md:flex-row md:items-center">
      <Icon
        v-if="isMobile"
        name="material-symbols:menu-rounded"
        class="text-4xl text-black dark:text-white"
        @click="toggleMenu"
      />

      <div
        v-if="isOpenMenu"
        class="z-10 fixed top-0 left-0 w-full min-h-screen backdrop-blur-sm bg-white/50 dark:bg-black/50"
        @click="toggleMenu"
      />
      <nav
        class="fixed top-0 left-0 z-20 w-full py-3 px-6 drop-shadow-black bg-white dark:bg-black dark:drop-shadow-white md:flex md:justify-center md:drop-shadow-none md:dark:drop-shadow-none "
        :class="{
          'block': isOpenMenu,
          'hidden': !isOpenMenu
        }"
      >
        <div class="flex justify-between md:absolute md:right-14 md:top-1.5">
          <Icon
            v-if="isMobile"
            name="material-symbols:close"
            class="text-4xl text-black dark:text-white"
            @click="toggleMenu"
          />

          <div class="flex items-center gap-4">
            <SelectLanguage />
            <ButtonDarkMode />
          </div>
        </div>

        <ul class="flex flex-col items-center gap-10 my-20 md:flex-row md:my-0">
          <li v-if="!isMobile">
            <a
              class="cursor-pointer font-semibold text-black dark:text-white"
              @click="scrollTo('hero')"
            >
              {{ $t('sectionHero.title') }}
            </a>
          </li>
          <li>
            <a
              class="cursor-pointer font-semibold text-black dark:text-white"
              @click="scrollTo('about')"
            >
              {{ $t('sectionAboutMe.title') }}
            </a>
          </li>
          <li>
            <a
              class="cursor-pointer font-semibold text-black dark:text-white"
              @click="scrollTo('projects')"
            >
              {{ $t('sectionProjects.title') }}
            </a>
          </li>
          <li>
            <a
              class="cursor-pointer font-semibold text-black dark:text-white"
              @click="scrollTo('contact')"
            >
              {{ $t('sectionContact.title') }}
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <h1 class="mb-10 text-black text-2xl dark:text-white md:text-3xl">{{ $t('sectionHero.greetings') }}</h1>
        <h2 class="text-black text-3xl dark:text-white md:text-4xl">{{ $t('sectionHero.apresentation') }}</h2>
        <h2 class="text-black font-semibold text-4xl dark:text-white md:text-5xl md:mb-10">{{ $t('sectionHero.occupation') }}</h2>

        <div v-if="!isMobile" class="flex flex-col gap-6 mb-10">
          <div class="flex gap-4 mb-20">
            <Button
              icon-name="grommet-icons:github"
              container-class="rounded-full p-4"
              icon-class="text-4xl"
              @click="openNewTab('github')"
            />
            <Button
              icon-name="grommet-icons:linkedin"
              container-class="rounded-full p-4"
              icon-class="text-4xl"
              @click="openNewTab('linkedin')"
            />
          </div>
          <Button
            :title="$t('button.downloadCV')"
            icon-name="material-symbols:download-2"
            icon-class="order-last"
            container-class="rounded-3xl px-4 py-2 w-fit"
            @click="downloadCV"
          />
        </div>
      </div>

      <img
        class="w-1/2 max-w-[800px] self-end md:self-center md:ml-6"
        src="https://avatars.githubusercontent.com/u/61790737?v=4"
        alt=""
      >

      <div v-if="isMobile" class="flex flex-col items-center gap-6 mb-10">
        <div class="flex gap-4">
          <Button
            icon-name="grommet-icons:github"
            container-class="rounded-full p-4"
            icon-class="text-2xl"
            @click="openNewTab('github')"
          />
          <Button
            icon-name="grommet-icons:linkedin"
            container-class="rounded-full p-4"
            icon-class="text-2xl"
            @click="openNewTab('linkedin')"
          />
        </div>
        <Button
          :title="$t('button.downloadCV')"
          icon-name="material-symbols:download-2"
          icon-class="order-last"
          @click="downloadCV"
        />
      </div>
    </section>

    <section id="about" class="relative w-full max-w-screen-2xl py-3 px-6 md:py-12">
      <h2 class="text-black font-bold text-center text-2xl dark:text-white md:text-start md:text-3xl">
        {{ $t('sectionAboutMe.title') }}
      </h2>
      <h2 class="text-black text-center mt-4 text-xl dark:text-white md:text-2xl">
        {{ $t('sectionAboutMe.subtitle') }}
      </h2>

      <Divider class="-ml-12 my-4 md:my-8" />
      <div
        v-for="experience in experiences"
        :key="experience.title"
      >
        <h3 class="text-black font-semibold text-lg dark:text-white">
          {{ experience.title }}
        </h3>
        <p class="text-black font-extralight text-sm dark:text-white">
          {{ experience.period }}
        </p>
        <p
          class="text-black text-sm dark:text-white"
          v-html="experience.description"
        />
        <Divider class="-ml-12 my-4 md:my-8" />
      </div>
    </section>

    <section id="projects" class="w-full max-w-screen-2xl py-3 px-6 md:py-12">
      <h2 class="text-black font-bold text-center text-2xl mb-6 dark:text-white md:text-start md:text-3xl">{{ $t('sectionProjects.title') }}</h2>

      <carousel v-bind="config">
        <slide v-for="(project, index) in projects" :key="`project_${index}`">
          <div class="relative">
            <img
              :src="isMobile ? project.imageMobile : project.image"
              :alt="project.title"
              class="px-2"
            >
            <div class="absolute top-0 left-2 w-[calc(100%-1rem)] h-full bg-black/50 flex flex-col justify-center items-center gap-3">
              <Button
                v-if="project.typeUrl"
                :title="$t('button.seeDeploy')"
                text-class="text-xs"
                icon-name="material-symbols:open-in-new"
                @click="openNewTab(project.typeUrl)"
              />
              <Button
                v-if="project.repositoryUrl"
                :title="$t('button.seeCode')"
                text-class="text-xs"
                icon-name="material-symbols:code"
                @click="openNewTab(project.repositoryUrl)"
              />
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>

      <h3 class="text-black font-bold text-center text-xl my-6 dark:text-white md:text-start md:text-3xl">{{ $t('sectionProjects.subtitle') }}</h3>

      <div class="grid grid-cols-4 gap-5 justify-items-center md:grid-cols-6">
        <Icon
          v-for="icon in icons"
          class="text-4xl"
          :name="icon"
        />
      </div>
    </section>
    
    <section id="contact" class="flex flex-col justify-between w-full max-w-screen-2xl py-3 px-6 min-h-screen md:py-12">
      <div>
        <h2 class="text-black font-bold text-center text-2xl dark:text-white md:text-start md:text-3xl">{{ $t('sectionContact.title') }}</h2>
        <h3 class="mt-6 text-black leading-none dark:text-white md:text-center md:text-xl">{{ $t('sectionContact.subtitle') }}</h3>
      </div>

      <div class="flex flex-col items-center gap-8 mt-20 md:flex-row md:justify-center">
        <Button
          icon-name="grommet-icons:whatsapp"
          icon-class="text-4xl"
          container-class="py-6 px-14 rounded-full"
          @click="openNewTab('whatsapp')"
        />
        <Button
          icon-name="simple-icons:upwork"
          icon-class="text-4xl"
          container-class="py-6 px-14 rounded-full"
          @click="openNewTab('upwork')"
        />
        <Button
          icon-name="ic:baseline-mail"
          icon-class="text-4xl"
          container-class="py-6 px-14 rounded-full"
          @click="openNewTab('email')"
        />
      </div>

      <footer>
        <Divider class="-ml-12 my-4 md:my-8" />
        <p
          class="text-black font-extralight text-xs dark:text-white md:text-sm md:text-center"
          v-html="`${$t('sectionFooter.developerBy')}<br>${$t('sectionFooter.cnpj')}<br>${$t('sectionFooter.copyright')}`"
        />
      </footer>
    </section>
  </div>
</template>
