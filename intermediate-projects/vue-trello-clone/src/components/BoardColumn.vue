// src/components/BoardColumn.vue
<script setup>
defineProps({
  column: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="column">
    <h2 class="column-title">{{ column.title }}</h2>
    <div class="card-list">
      <div v-for="card in column.cards" :key="card.id" class="card">
        {{ card.content }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.column {
  background-color: #ebecf0;
  border-radius: 3px;
  width: 300px;
  margin: 0 10px;
  padding: 10px;
  flex-shrink: 0; /* Prevents columns from shrinking */
}
.column-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px;
}
.card {
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  padding: 10px;
  margin-bottom: 8px;
  font-size: 0.9rem;
}
</style>
