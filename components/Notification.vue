<template>
  <Transition name="slide-fade">
    <div v-if="show" class="notification" @click="onNotificationClick">
      <div :class="['notification-card', notificationStyle]">
        <p class="notification-message">{{ message }}</p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps({
  show: { type: Boolean, default: false },
  title: { type: String, default: '' },
  message: { type: String, default: '' },
  type: { type: String, default: 'info' },
  duration: { type: Number, default: 5 },
  onTimerEnd: { type: Function, default: () => {} }
})

const durationLeft = ref(props.duration)
const timer = ref(undefined)

const onNotificationClick = () => {
  props.onTimerEnd(false)
}

const notificationStyle = computed(() => {
  if (props.type === 'warn') return 'notification-warn'
  if (props.type === 'info') return 'notification-info'
  if (props.type === 'success') return 'notification-success'
  return 'notification-error'
})

watch([props], () => {
  if (props.show === true) {
    durationLeft.value = 0
    timer.value = setInterval(() => {
      durationLeft.value++
      if (durationLeft.value >= props.duration) {
        props.onTimerEnd(false)
      }
    }, 1000)
  }
  if (props.show === false) {
    clearInterval(timer.value)
  }
})

onUnmounted(() => {
  clearInterval(timer.value)
})
</script>

