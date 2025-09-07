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
</style>
