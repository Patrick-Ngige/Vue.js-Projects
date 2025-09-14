import { defineStore } from 'pinia'

//defineStore('storeName', { ... })
export const useAuthStore = defineStore('auth', {
  // State: the core data of the store
  state: () => ({
    isLoggedIn: false,
    username: null,
  }),

  // Getters: computed properties for the store
  getters: {
    //receives the state as its first argument.
    formattedWelcomeMessage(state) {
      if (state.username) {
        return `Welcome back, ${state.username}!`
      }
      return 'Welcome!'
    },
  },

  // Actions: methods that modify the state
  actions: {
    login(name) {
      //setting the state
      this.isLoggedIn = true
      this.username = name
      console.log(`User '${this.username}' logged in.`)
    },

    logout() {
      this.isLoggedIn = false
      this.username = null
      console.log('User logged out.')
    },
  },
})
