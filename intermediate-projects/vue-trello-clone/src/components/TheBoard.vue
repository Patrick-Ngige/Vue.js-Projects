// src/components/TheBoard.vue
<script setup>
import { useBoardStore } from '@/stores/boardStore'
import BoardColumn from './BoardColumn.vue'

// Get the store instance
const boardStore = useBoardStore()
</script>

<template>
  <div class="board">
    <!-- Loop through the columns from the store's getter -->
    <BoardColumn v-for="column in boardStore.getColumns" :key="column.id" :column="column" />
  </div>
</template>

<style scoped>
.board {
  display: flex;
  overflow-x: auto; /* Allows horizontal scrolling */
  padding: 20px;
  height: 100vh;
  background-color: #0079bf; /* Trello blue */
}
</style>
