<script setup>

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  inverseTheme: {
    type: Boolean,
    default: false
  },
  iconName: {
    type: String,
    default: ''
  },
  textClass: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click'])

const onClick = () => {
  emit('click')
}
</script>

<template>
  <button
    class="flex items-center gap-2 border rounded-3xl px-4 py-2"
    :class="{
      'border-white text-white bg-black dark:border-black dark:text-black dark:bg-white': inverseTheme,
      'border-black text-black bg-white dark:border-white dark:text-white dark:bg-black': !inverseTheme
    }"
    @click="onClick"
  >
    <Icon
      v-if="iconName"
      :name="iconName"
      class="text-lg"
      :class="{
        'text-white dark:text-black': inverseTheme,
        'text-black dark:text-white': !inverseTheme
      }"
    />
    <span :class="textClass">
      {{ title }}
    </span>
  </button>
</template>