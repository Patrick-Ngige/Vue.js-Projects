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

        <!-- Cart Icon with Badge  -->
        <div class="relative cursor-pointer">
          <!-- SVG Icon for the shopping cart  -->

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 text-gray-600"
            fill="none"
            view-box="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>

          <!-- badge: displays the totalItems getter from the store  -->
          <span
            v-if="cartStore.totalItems > 0"
            class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
          >
            {{ cartStore.totalItems }}
          </span>
        </div>
      </div>
    </div>
  </header>
</template>
