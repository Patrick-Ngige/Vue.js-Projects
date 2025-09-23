<script>
import { useCartStore } from '@/stores/cartStore'

//cartStore instance
const cartStore = useCartStore()
</script>

<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-8 py-4 flex justify-between items-center">
      <!-- logo/brand name  -->
      <div class="text-2xl font-bold text-gray-800">VueShop</div>

      <!-- Navigation & Cart  -->
      <div class="flex items-center space-x-8">
        <nav class="hidden md:flex space-x-6">
          <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
          <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">Shop</a>
          <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">About</a>
        </nav>
      </div>
    </div>
  </header>
</template>
