<script setup>

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  inverseTheme: {
    type: Boolean,
    default: false
  },
  iconName: {
    type: String,
    default: ''
  },
  containerClass: {
    type: String,
    default: 'rounded-3xl px-4 py-2'
  },
  textClass: {
    type: String,
    default: ''
  },
  iconClass: {
    type: String,
    default: 'text-lg'
  },
})

const emit = defineEmits(['click'])

const onClick = () => {
  emit('click')
}
</script>

<template>
  <button
    class="flex items-center gap-2 border"
    :class="[
      {
        'border-white text-white bg-black dark:border-black dark:text-black dark:bg-white hover:scale-105': inverseTheme,
        'border-black text-black bg-white dark:border-white dark:text-white dark:bg-black hover:scale-105': !inverseTheme
      },
      containerClass
    ]"
    @click="onClick"
  >
    <Icon
      v-if="iconName"
      :name="iconName"
      :class="iconClass"
    />
    <span v-if="title" :class="textClass">
      {{ title }}
    </span>
  </button>
</template>