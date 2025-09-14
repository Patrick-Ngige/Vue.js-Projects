<script setup>
import { ref } from 'vue'
import { useBoardStore } from '@/stores/boardStore'

const props = defineProps({
  column: {
    type: Object,
    required: true,
  },
})

//store instance
const boardStore = useBoardStore()

//local state for the new card's content
const newCardContent = ref('')

function handleAddCard() {
  //avoiding empty cards
  if (newCardContent.value.trim() === '') {
    return
  }

  //calling the action from the store
  boardStore.addCard({
    columnId: props.column.id,
    cardContent: newCardContent.value,
  })

  //clearing the input after submitting
  newCardContent.value = ''
}
</script>

<template>
  <div class="column">
    <h2 class="column-title">{{ column.title }}</h2>
    <div class="card-list">
      <div v-for="card in column.cards" :key="card.id" class="card">
        {{ card.content }}
      </div>
    </div>

    <form @submit.prevent="handleAddCard" class="add-card-form">
      <textarea
        v-model="newCardContent"
        placeholder="Enter new card..."
        rows="3"
        class="card-composer"
      ></textarea>
      <button type="submit" class="add-card-btn">Add Card</button>
    </form>
  </div>
</template>

<style scoped>
.column {
  background-color: #ebecf0;
  border-radius: 3px;
  width: 33.33%;
  margin: 0 10px;
  padding: 10px;
  /* flex-shrink: 0; Prevents columns from shrinking */
}
.column-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px;
}
.card {
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  padding: 10px;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.add-card-form {
  margin-top: 10px;
}

.card-composer {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
  resize: vertical;
}

.add-card-btn {
  background-color: #5aac44;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 8px;
}

.add-card-btn:hover {
  background-color: #61c547;
}
</style>
