<script setup>
import { language } from '@vue/eslint-config-prettier/skip-formatting'
import { ref } from 'vue'

//reactive object holding all form data
const settings = ref({
  enableNotifications: true,
  theme: 'light',
  language: 'en',
})

//options for select dropdown
const languageOptions = [
  { Text: 'English', value: 'en' },
  { Text: 'Spanish', value: 'es' },
  { Text: 'French', value: 'fr' },
]
</script>
