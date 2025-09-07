<script setup>
defineProps({
  todo: {
    type: object,
    required: true,
  },
})
</script>

<template>
  <li :class="{ completed: todo.completed }">{{ todo.text }}</li>
</template>

<style scoped>
li {
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: all 0.2s;
}

li:hover {
  background-color: #f9f9f9;
}

li.completed {
  text-decoration: line-through;
  color: #999;
}
</style>
