// ============================================
// REDUX STORE CONFIGURATION
// This file creates and configures the central Redux store
// ============================================

// LINE 1: Import configureStore from Redux Toolkit
// configureStore is a helper function that sets up the store with good defaults
// It automatically combines reducers, adds middleware, and enables Redux DevTools
import { configureStore } from "@reduxjs/toolkit";

// LINE 2: Import cart reducer from cartSlice file
// cartReducer handles all cart-related state (items, add/remove)
import cartReducer from "./cartSlice";

// LINE 3: Import search reducer from searchSlice file
// searchReducer handles all search-related state (term, results, searching status)
import searchReducer from "./searchSlice";  // ✅ ADD THIS

// LINE 5: Create and export the Redux store
// store is the central object that holds the entire application state
export const store = configureStore({
    // LINE 7: reducer object - combines all slice reducers
    // Each key becomes a property in the global state object
    reducer: {
        // LINE 8: cart property - managed by cartReducer
        // Access in components: state.cart
        cart: cartReducer,

        // LINE 9: search property - managed by searchReducer
        // Access in components: state.search
        search: searchReducer  // ✅ ADD THIS
    }
});
// Note: configureStore automatically adds:
// - Thunk middleware for async actions
// - Redux DevTools integration
// - Proper error handling