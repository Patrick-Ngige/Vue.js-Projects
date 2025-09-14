<script setup>
defineProps({
  columns: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="column">
    <h2 class="column-title">{{ columns.title }}</h2>
    <div class="card-list">
      <div v-for="card in columns.cards" :key="card.id" class="card">
        {{ card.content }}
      </div>
    </div>
  </div>
</template>
