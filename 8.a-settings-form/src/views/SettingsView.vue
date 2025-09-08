<script setup>
// import { language } from '@vue/eslint-config-prettier/skip-formatting'
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

<template>
  <div class="page-content">
    <h1>Application Settings</h1>

    <form class="settings-form">
      <!-- checkbox  -->
      <div class="form-group">
        <label>
          <input type="checkbox" v-model="settings.enableNotifications" />
          Enable Notifications
        </label>
      </div>

      <!-- Theme Radio Buttons  -->
      <div class="form-group">
        <p>Theme:</p>
        <label>
          <input type="radio" value="light" v-model="settings.theme" />
          Light
        </label>
        <label>
          <input type="radio" value="dark" v-model="settings.theme" />
          Dark
        </label>
      </div>

      <!-- Language Dropdown -->
      <div class="form-group">
        <label for="language-select">Language:</label>
        <select id="language-select" v-model="settings.language">
          <!-- rendering options dynamically with v-for  -->
          <option v-for="lang in languageOptions" :key="lang.value" :value="lang.value">
            {{ lang.text }}
          </option>
        </select>
      </div>
    </form>

    <hr />

    <!-- displaying live data  -->
    <div class="live-data">
      <h2>Live Settings Data:</h2>
      <pre>{{ settings }}</pre>
    </div>
  </div>
</template>
