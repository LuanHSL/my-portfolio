<script setup>
const goTo = (id) => {
  toggleMenu()
  const element = document.getElementById(id)
  element.scrollIntoView({ behavior: 'smooth' })
}

const isOpenMenu = ref(false)

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}

onMounted(() => {
  const body = document.querySelector('body');
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
  }
})

</script>

<template>
  <div class="bg-white dark:bg-black">
    <section class="flex flex-col relative py-3 px-6 h-screen">
      <Icon
        name="material-symbols:menu-rounded"
        class="text-4xl text-black dark:text-white md:hidden"
        @click="toggleMenu"
      />

      <div
        v-if="isOpenMenu"
        class="fixed top-0 left-0 w-full h-screen backdrop-blur-sm bg-white/50 dark:bg-black/50"
        @click="toggleMenu"
      />
      <nav
        class="fixed top-0 left-0 w-full py-3 px-6 drop-shadow-black bg-white dark:bg-black dark:drop-shadow-white"
        :class="{
          'block': isOpenMenu,
          'hidden': !isOpenMenu
        }"
      >
        <div class="flex justify-between">
          <Icon
            name="material-symbols:close"
            class="text-4xl text-black dark:text-white"
            @click="toggleMenu"
          />

          <ButtonDarkMode />
        </div>

        <ul class="flex flex-col items-center gap-10 my-20">
          <li>
            <a
              class="font-semibold text-black dark:text-white"
              @click="goTo('about')"
            >
              Sobre Mim
            </a>
          </li>
          <li>
            <a
              class="font-semibold text-black dark:text-white"
              @click="goTo('projects')"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              class="font-semibold text-black dark:text-white"
              @click="goTo()"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <h1 class="mt-40 text-black text-2xl dark:text-white">{{ $t('welcome') }}</h1>
      <h2 class="text-black text-4xl dark:text-white">Sou Luan!</h2>
      <h2 class="text-black text-4xl dark:text-white">Desenvolvedor Web</h2>

      <img class="w-1/2 self-end" src="https://avatars.githubusercontent.com/u/61790737?v=4" alt="">

      <div class="flex flex-col items-center gap-2">
        <div class="flex gap-2">
          <p>Github</p>
          <p>Linkedin</p>
        </div>
        <Button
          title="Entre em contato"
        />
      </div>
    </section>

    <section id="about" class="py-3 px-6 h-screen">
      <h2 class="text-black text-2xl dark:text-white">Sobre Mim</h2>
    </section>

    <section id="projects" class="py-3 px-6 h-screen">
      <h2 class="text-black text-2xl dark:text-white">Projetos</h2>
    </section>
  </div>
</template>
