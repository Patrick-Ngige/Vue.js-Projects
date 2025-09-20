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

<style scoped>
.new-column-form {
  flex-shrink: 0;
  width: 300px;
  margin: 0px 10px;
}
.new-column-input {
  background-color: hsla(0, 0, 100%, 0.24);
  border: none;
  border-radius: 3px;
  color: white;
  padding: 10px;
  width: 100px;
  box-sizing: border-box;
  font-size: 1rem;
}
.new-column-input::placeholder {
  color: hsla(0, 0, 100%, 0.7);
}
.add-column-btn {
  background-color: #5aac44;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 8px;
}
</style>
