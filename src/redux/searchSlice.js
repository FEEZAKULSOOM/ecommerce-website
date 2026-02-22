// ============================================
// SEARCH SLICE
// Manages search-related state across the application
// ============================================

// LINE 1: Import createSlice from Redux Toolkit
// createSlice simplifies creating Redux reducers and actions
import { createSlice } from "@reduxjs/toolkit";

// LINE 3: Create a search slice
// searchSlice contains all search-related logic and state
const searchSlice = createSlice({
    // LINE 5: name property - used as prefix for action types
    // Generated action types will be like "search/setSearchTerm"
    name: "search",

    // LINE 7: initialState - default values for search state
    // This object defines the shape of the search state
    initialState: {
        // LINE 8: searchTerm - the current search query string
        // Example: "phone", "laptop", "shoes"
        searchTerm: "",

        // LINE 9: searchResults - array of products matching search
        // Initially empty array, populated when search is performed
        searchResults: [],

        // LINE 10: isSearching - boolean flag for loading state
        // true when search is in progress, false when done
        isSearching: false
    },

    // LINE 13: reducers object - contains all state update functions
    // Each function handles a specific action
    reducers: {
        // LINE 15: setSearchTerm reducer - updates the search term
        // Parameters:
        // - state: current state (can be directly modified thanks to Immer)
        // - action: object with payload containing new search term
        setSearchTerm: (state, action) => {
            // Update searchTerm with value from action.payload
            state.searchTerm = action.payload;
        },

        // LINE 19: setSearchResults reducer - updates search results
        // Parameters:
        // - state: current state
        // - action: payload contains array of matching products
        setSearchResults: (state, action) => {
            // Update searchResults with filtered products array
            state.searchResults = action.payload;
        },

        // LINE 23: setIsSearching reducer - updates searching status
        // Parameters:
        // - state: current state
        // - action: payload contains boolean (true/false)
        setIsSearching: (state, action) => {
            // Update isSearching flag (for loading spinners, etc.)
            state.isSearching = action.payload;
        },

        // LINE 27: clearSearch reducer - resets all search state to defaults
        // Parameters: none (action not needed)
        clearSearch: (state) => {
            // Reset searchTerm to empty string
            state.searchTerm = "";

            // Reset searchResults to empty array
            state.searchResults = [];

            // Reset isSearching to false
            state.isSearching = false;
        }
    }
});

// LINE 37: Export action creators for use in components
// These are automatically generated from the reducers
// Components import these to dispatch actions
export const {
    setSearchTerm,     // For updating search query
    setSearchResults,  // For setting search results
    setIsSearching,    // For showing/hiding loading state
    clearSearch        // For clearing all search state
} = searchSlice.actions;

// LINE 44: Export the reducer for use in store configuration
// This is imported in store.js as searchReducer
export default searchSlice.reducer;