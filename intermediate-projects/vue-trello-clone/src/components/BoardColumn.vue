<script setup>
import { ref, computed } from 'vue'
import { useBoardStore } from '@/stores/boardStore'
import draggable from 'vuedraggable' //draggable library

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

// 2. CREATE A WRITABLE COMPUTED PROPERTY
// This finds the column in the store that matches our prop's ID.
// When v-model tries to "set" a new value, it will update the store directly.
const columnModel = computed({
  get: () => boardStore.board.columns.find((col) => col.id === props.column.id),
  // set: (newColumnData) => {
  // This part is less critical for vuedraggable but good practice.
  // In essence, vuedraggable modifies the 'cards' array on the object directly.
  // },
})

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

function handleDeleteCard(cardId) {
  boardStore.deleteCard({
    columnId: props.column.id,
    cardId: cardId,
  })
}
</script>

<template>
  <div class="column">
    <h2 class="column-title">{{ column.title }}</h2>
    <!-- <div class="card-list"> -->
    <!-- <div v-for="card in column.cards" :key="card.id" class="card">
        {{ card.content }}
      </div> -->

    <!-- replacing the v-for div with the draggable component  -->
    <draggable
      v-model="columnModel.cards"
      group="cards"
      item-key="id"
      class="card-list"
      ghost-class="ghost"
      animation="200"
    >
      <template #item="{ element: card }">
        <div class="card">
          <span>{{ card.content }} </span>
          <button @click="handleDeleteCard(card.id)" class="delete-card-btn">&times;</button>
        </div>
      </template>
    </draggable>
    <!-- </div> -->

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
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.add-card-form {
  margin-top: 10px;
}

.delete-card-btn {
  background: none;
  border: none;
  color: #6b778c;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  padding: 0px 5px;
  line-height: 1;
  opacity: 0;
  transition: opacity 0.2s;
}

.card:hover .delete-card-btn {
  opacity: 1;
}

.delete-card-btn:hover {
  color: red;
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

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.card-list {
  min-height: 50px; /** provides a drop zone even when a column is empty */
}
</style>
