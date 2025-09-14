import { defineStore } from 'pinia'

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
})
