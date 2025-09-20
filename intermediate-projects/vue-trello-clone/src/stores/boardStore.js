import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'

export const useBoardStore = defineStore('board', {
  state: () => ({
    board: {
      id: 'board-1',
      columns: [
        {
          id: 'col-1',
          title: 'To Do',
          cards: [
            { id: 'card-1', content: 'Design the database schema' },
            { id: 'card-2', content: 'Set uo project repository' },
          ],
        },
        {
          id: 'col-2',
          title: 'In Progress',
          cards: [{ id: 'card-3', content: 'Develop the authentication module' }],
        },
        {
          id: 'col-3',
          title: 'Done',
          cards: [],
        },
      ],
    },
  }),

  getters: {
    //getter to get the columns array directly
    getColumns(state) {
      return state.board.columns
    },
  },

  actions: {
    addCard({ columnId, cardContent }) {
      //finding the column using its  ID
      const column = this.board.columns.find((col) => col.id === columnId)

      if (column) {
        //creating a new card object
        const newCard = {
          id: uuid(), //generating a unique ID
          content: cardContent,
        }
        //adding the new card to the column list
        column.cards.push(newCard)
      }
    },

    deleteCard({ columnId, cardId }) {
      const column = this.board.columns.find((col) => col.id === columnId)

      if (column) {
        const cardIndex = column.cards.findIndex((card) => card.id === cardId)

        //when card is found, remove from array
        if (cardIndex !== -1) {
          column.cards.splice(cardIndex, 1)
        }
      }
    },

    // ADD THIS NEW ACTION
    addColumn(columnTitle) {
      const newColumn = {
        id: uuid(),
        title: columnTitle,
        cards: [], // A new column starts with an empty array of cards
      }
      this.board.columns.push(newColumn)
    },
  },
})
