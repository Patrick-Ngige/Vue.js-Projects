// src/App.vue

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue' // 1. Import the header component
</script>

<template>
  <div>
    <!-- 2. Add the header component here -->
    <AppHeader />

    <!-- The RouterView will render the current page (ProductView) below the header -->
    <main>
      <RouterView />
    </main>
  </div>
</template>
