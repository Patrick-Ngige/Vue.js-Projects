<script setup>
import { ref } from 'vue'
import TodoItem from './components/TodoItem.vue'

const newTaskText = ref('')
const todos = ref([
  { id: 1, text: 'Learn Vue Basics', completed: true },
  { id: 2, text: 'Start with simple projects', completed: false },
])

function addTask() {
  if (newTaskText.value.trim() === '') return
  todos.value.unshift({
    id: Date.now(),
    text: newTaskText.value,
    completed: false,
  })
}

function toggleComplete(todo) {
  todo.completed = !todo.completed
}
</script>

<template>
  <div class="todo-app">
    <h1>My To-Do List</h1>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTaskText" placeholder="Add a new task..." />
      <button type="submit">Add Task</button>
    </form>

    <ul>
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @click="toggleComplete(todo)" />
    </ul>
  </div>
</template>

<style scoped>
.todo-app {
  max-width: 500px;
  margin: 50px auto;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
}
</style>
