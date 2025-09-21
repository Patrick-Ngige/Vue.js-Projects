// src/views/ProductView.vue
<script setup>
// We'll add our product data and logic here in the next step
</script>

<template>
  <div class="bg-gray-100 min-h-screen font-sans">
    <div class="container mx-auto p-8">
      <!-- Main Product Layout: Grid with 2 columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Column 1: Image Gallery -->
        <div>
          <div class="bg-white rounded-lg shadow-lg p-4">
            <img
              src="https://i.imgur.com/f2h4jWp.jpeg"
              alt="Main Product Image"
              class="w-full h-auto rounded-lg"
            />
          </div>
          <!-- Thumbnail images -->
          <div class="grid grid-cols-4 gap-4 mt-4">
            <div class="bg-white rounded-lg shadow p-2 cursor-pointer border-2 border-blue-500">
              <img
                src="https://i.imgur.com/f2h4jWp.jpeg"
                alt="Thumbnail 1"
                class="w-full h-auto rounded"
              />
            </div>
            <div class="bg-white rounded-lg shadow p-2 cursor-pointer">
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
            </div>
          </div>
        </div>

        <!-- Column 2: Product Details -->
        <div>
          <h1 class="text-4xl font-bold text-gray-800 mb-2">Acoustic Guitar</h1>
          <p class="text-gray-500 text-sm mb-4">By Fender</p>

          <p class="text-3xl font-semibold text-blue-600 mb-6">$499.99</p>

          <p class="text-gray-700 leading-relaxed mb-6">
            Experience the rich, full-bodied sound of this masterfully crafted acoustic guitar.
            Perfect for both beginners and seasoned players, it features a solid spruce top and
            mahogany back and sides for a balanced tone.
          </p>

          <div class="flex items-center mb-6">
            <label for="quantity" class="font-bold mr-4">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value="1"
              class="w-20 p-2 border border-gray-300 rounded-lg text-center"
            />
          </div>

          <button
            class="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
