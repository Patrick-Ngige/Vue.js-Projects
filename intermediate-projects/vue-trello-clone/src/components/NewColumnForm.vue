<script setup>
import { ref } from 'vue'
import { useBoardStore } from '@/stores/boardStore'

const boardStore = useBoardStore()
const newColumnTitle = ref('')

function handleAddColumn() {
  if (newColumnTitle.value.trim() === '') return
  boardStore.addColumn(newColumnTitle.value)
  newColumnTitle.value = ''
}
</script>

<template>
  <form @submit.prevent="handleAddColumn" class="new-column-form">
    <input
      type="text"
      v-model="newColumnTitle"
      placeholder="+ Add another column"
      class="new-column-input"
    />
    <button type="submit" class="add-column-btn">Add Column</button>
  </form>
</template>
