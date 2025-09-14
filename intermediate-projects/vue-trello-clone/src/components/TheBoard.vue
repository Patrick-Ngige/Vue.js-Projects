<script setup>
import { useBoardStore } from '@/stores/boardStore'
import BoardColumn from './BoardColumn.vue'

//store instance
const boardStore = useBoardStore()
</script>

<template>
  <div class="board">
    <!-- //looping through the columns in the store -->
    <BoardColumn v-for="column in boardStore.getColumns" :key="column.id" :column="column" />
  </div>
</template>

<style scoped>
.board {
  display: flex;
  overflow-x: auto;
  padding: 20px;
  height: 100vh;
  background-color: #0079bf;
}
</style>
