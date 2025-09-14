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
