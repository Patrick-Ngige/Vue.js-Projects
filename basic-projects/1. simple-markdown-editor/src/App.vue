<script setup>
import { ref, computed } from 'vue'
import { marked } from 'marked'

const markdownText = ref('#Hello, Markdown!\n\nType somthong here.')

const renderedHtml = computed(() => {
  return marked(markdownText.value)
})
</script>

<template>
  <div class="editor-container">
    <textarea class="editor-input" v-model="markdownText"></textarea>
    <div class="editor-preview" v-html="renderedHtml"></div>
  </div>
</template>

<style scoped>
.editor-container {
  display: flex;
  height: 100vh;
  font-family: sans-serif;
}

.editor-input,
.editor-preview {
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}

.editor-input {
  border: none;
  border-right: 1px solid #ccc;
  background-color: #f7f7f7;
  font-size: 16px;
  resize: none;
}

.editor-input:focus {
  outline: none;
}

.editor-preview {
  background: #ffffff;
}

.editor-preview :deep(h1) {
  border-bottom: 1px solid #ddd;
}

.editor-preview :deep(pre) {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 4px;
}
</style>
