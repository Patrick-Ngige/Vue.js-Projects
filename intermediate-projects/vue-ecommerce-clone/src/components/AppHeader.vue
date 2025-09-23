// src/components/AppHeader.vue
<script setup>
import { storeToRefs } from 'pinia' // 1. Import storeToRefs
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

// 2. Destructure 'totalItems' from the store.
// storeToRefs makes sure it remains reactive.
const { totalItems } = storeToRefs(cartStore)
</script>

<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-8 py-4 flex justify-between items-center">
      <!-- ... (Logo and Nav) ... -->

      <!-- Cart Icon with Badge -->
      <div class="relative cursor-pointer">
        <!-- ... (SVG Icon) ... -->

        <!-- 3. Use the 'totalItems' ref directly -->
        <span
          v-if="totalItems > 0"
          class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
        >
          {{ totalItems }}
        </span>
      </div>
    </div>
  </header>
</template>
