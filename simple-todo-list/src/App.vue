<template>
  <div class="todo-app">
    <h1>My TODO List</h1>

    <form @submit.prevent="addTask">
      <input type="text" v-model="newTaskText" placeholder="Add a new task...">
      <button type="submit">Add Task</button>
    </form>

    <ul>
      <!-- the items to be rendered here  -->
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text  }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTaskText = ref('');

// creating the object to hold the todo infos 
const todos = ref([
  { id: 1, text: 'Learning Vue Basics', completed: true },
  { id: 2, text: 'Start off with simple projects', completed: false },
])

// the addTask method to add the item to the list and clear the input field 
function addTask() { 
  // validation to avoid empty tasks/inputs
  if ( newTaskText.value.trim() === '' ) {
    return
  }

  // new todo list 
  const newTodo = {
    id: Date.now(), // using timestamp as id
    text: newTaskText.value,
    completed: false
  }

  //add new object to the beginning of an array
  todos.value.unshift(newTodo)

  //clearing the input field after submitting
  newTaskText.value('')

 }

</script>


