import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], // an array to hold {product, quantity } objects
  }),

  actions: {
    add(product, quantity = 1) {
      //confirm the product is not in the cart
      const existingItem = this.items.find((item) => item.product.id === product.id)

      if (existingItem) {
        //increase the quantity
        existingItem.quantity += quantity
      } else {
        this.items.push({ product: product, quantity: quantity })
      }
    },
  },

  getters: {
    //a getter to calculate the total number of items in the cart
    totalItems(state) {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },

    //a getter to calculate the total price of all items in the cart
    totalPrice(state) {
      return state.items
        .reduce((total, item) => {
          return total + item.product.price * item.quantity
        }, 0)
        .toFixed(2) //format to 2 decimal places
    },
  },
})
