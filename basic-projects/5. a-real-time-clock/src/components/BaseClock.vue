<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

//ref to hold current time string
const currentTime = ref(new Date().toLocaleTimeString())

//variable holding the ID of the interval
let timerId = null

onMounted(() => {
  console.log('Clock component have been mounted! Starting timer.')

  // starting a timer that updates the time every second
  timerId = setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString()
  }, 1000)
})

//onUnmounted running before the component is removed from the page
onUnmounted(() => {
  console.log('Clock component is being unmounted! Stopping timer.')

  // stopping the timer to prevent memory leaks
  clearInterval(timerId)
})
</script>

<template>
  <div class="clock-widget">
    <h2>The Current time is:</h2>
    <p>{{ currentTime }}</p>
  </div>
</template>

<style scoped>
.clock-widget {
  padding: 20px;
  border: 2px solid #42b983;
  border-radius: 8px;
  text-align: center;
  background-color: #f0fdf4;
}

h2 {
  margin: 0 0 10px;
  font-weight: 600;
}

p {
  font-family: 'Courier New', Courier, monospace;
  font-size: 2em;
  color: #333;
  margin: 0;
}
</style>
