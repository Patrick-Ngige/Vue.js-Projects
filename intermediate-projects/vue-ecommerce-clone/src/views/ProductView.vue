// src/views/ProductView.vue
<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const product = ref({
  id: 'prod-1',
  name: 'Acoustic Guitar',
  brand: 'Fender',
  price: 499.99,
  description: '...',
  images: [
    {
      id: 1,
      url: new URL('../assets/images/guitar.jpg', import.meta.url).href,
      alt: 'Guitar front view',
    },
    {
      id: 2,
      url: new URL('../assets/images/guitar1.jpg', import.meta.url).href,
      alt: 'Guitar front view',
    },
    {
      id: 3,
      url: new URL('../assets/images/guitar2.jpg', import.meta.url).href,
      alt: 'Guitar front view',
    },
  ],
})

const selectedImage = ref(product.value.images[0])

function changeImage(image) {
  selectedImage.value = image
}

//getting the cart store instance
const cartStore = useCartStore()

//local state for this component
const quantity = ref(1)
const itemAdded = ref(false)

//function to handle the button clicks
function handleAddToCart() {
  cartStore.add(product.value, quantity.value)

  //confirmation message
  itemAdded.value = true

  //hiding the message after 2 seconds
  setTimeout(() => {
    itemAdded.value = false
  }, 2000)
}
</script>

<template>
  <div class="bg-gray-100 min-h-screen font-sans">
    <div class="container mx-auto p-8">
      <!-- Main Product Layout: Grid with 2 columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Column 1: Image Gallery -->
        <!-- <img :src="selectedImage.url" :alt="selectedImage.alt" class="w-full h-auto rounded-lg" /> -->
        <div>
          <div class="bg-white rounded-lg shadow-lg p-4">
            <img
              :src="selectedImage.url"
              :alt="selectedImage.alt"
              class="w-full h-auto rounded-lg"
            />
          </div>
          <!-- Thumbnail images -->
          <div class="grid grid-cols-4 gap-4 mt-4">
            <div
              v-for="image in product.images"
              :key="image.id"
              @click="changeImage(image)"
              class="bg-white rounded-lg shadow p-2 cursor-pointer"
              :class="{ 'border-2 border-blue-500': selectedImage.id === image.id }"
            >
              <img :src="image.url" :alt="image.alt" class="w-full h-auto rounded" />
            </div>
            <!-- <div class="bg-white rounded-lg shadow p-2 cursor-pointer">
              <img
                src="https://i.imgur.com/gT3hGq5.jpeg"
                alt="Thumbnail 2"
                class="w-full h-auto rounded"
              />
            </div>
            <div class="bg-white rounded-lg shadow p-2 cursor-pointer">
              <img
                src="https://i.imgur.com/sI1hV5G.jpeg"
                alt="Thumbnail 3"
                class="w-full h-auto rounded"
              />
            </div> -->
          </div>
        </div>

        <!-- Column 2: Product Details -->
        <div>
          <h1 class="text-4xl font-bold text-gray-800 mb-2">{{ product.price }}</h1>
          <p class="text-gray-500 text-sm mb-4">{{ product.brand }}</p>

          <p class="text-3xl font-semibold text-blue-600 mb-6">{{ product.price }}</p>

          <p class="text-gray-700 leading-relaxed mb-6">
            {{ product.description }}
          </p>

          <div class="flex items-center mb-6">
            <label for="quantity" class="font-bold mr-4">Quantity:</label>
            <input
              type="number"
              id="quantity"
              v-model.number="quantity"
              min="1"
              class="w-20 p-2 border border-gray-300 rounded-lg text-center"
            />
          </div>

          <button
            @click="handleAddToCart"
            class="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <span :class="{ 'opacity-0': itemAdded }"> Add to Cart </span>
            <span v-if="itemAdded" class="absolute inset-0 flex items-center justify-center">
              Added!
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
