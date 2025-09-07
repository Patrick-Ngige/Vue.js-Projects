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
