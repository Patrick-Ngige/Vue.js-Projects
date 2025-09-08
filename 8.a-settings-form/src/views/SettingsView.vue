<script setup>
import { language } from '@vue/eslint-config-prettier/skip-formatting'
import { ref } from 'vue'

//reactive object holding all form data
const settings = ref({
  enableNotifications: true,
  theme: 'light',
  language: 'en',
})
</script>
