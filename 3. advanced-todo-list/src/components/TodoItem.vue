<script setup>
defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

// declare the emit to let vue know that this component sends a toggle complete event
defineEmits(['toggle-complete', 'delete-todo'])
</script>

<template>
  <li>
    <span
      @click="$emit('toggle-complete', todo.id)"
      :class="{ completed: todo.completed }"
      class="todo-text"
    >
      {{ todo.text }}
    </span>

    <button @click="$emit('delete-todo', todo.id)" class="delete-btn">
      &times;
      <!--delete icon-->
    </button>
  </li>
</template>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: all 0.2s;
}

.todo-text {
  cursor: pointer;
  flex-grow: 1; /*allows the text to take up the available space */
}

li:hover {
  background-color: #f9f9f9;
}

.todo-text.completed {
  text-decoration: line-through;
  color: #999;
}

.delete-btn {
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  opacity: 0;
  transition: opacity 0.2s;
}

li:hover .delete-btn {
  opacity: 1;
}
</style>
