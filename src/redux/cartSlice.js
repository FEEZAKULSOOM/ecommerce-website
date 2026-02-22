// ============================================
// CART SLICE
// Manages shopping cart items across the application
// ============================================

// LINE 1: Import createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// LINE 3: Create a cart slice
// cartSlice contains all cart-related logic and state
const cartSlice = createSlice({
    // LINE 5: name property - prefix for action types
    // Generated action types: "cart/AddItem", "cart/RemoveItem"
    name: "cart",

    // LINE 7: initialState - empty array (no items in cart)
    // Cart state is simply an array of product objects
    initialState: [],

    // LINE 9: reducers object - functions to update cart state
    reducers: {
        // LINE 11: AddItem reducer - adds a product to cart
        // Parameters:
        // - state: current cart array (can be modified directly)
        // - action: payload contains product object to add
        AddItem: (state, action) => {
            // push() adds new item to the end of cart array
            // Thanks to Immer, this mutable syntax is safe
            state.push(action.payload);
        },

        // LINE 15: RemoveItem reducer - removes a product from cart
        // Parameters:
        // - state: current cart array
        // - action: payload contains product ID to remove
        RemoveItem: (state, action) => {
            // filter() creates new array without the removed item
            // Return value replaces the entire state
            // Keep items where id does NOT match action.payload
            return state.filter((item) => item.id !== action.payload);
        }
    }
});

// LINE 23: Export action creators for use in components
// Components import these to add/remove items from cart
export const {
    AddItem,    // For adding products to cart
    RemoveItem  // For removing products from cart
} = cartSlice.actions;

// LINE 26: Export the reducer for use in store configuration
// This is imported in store.js as cartReducer
export default cartSlice.reducer;