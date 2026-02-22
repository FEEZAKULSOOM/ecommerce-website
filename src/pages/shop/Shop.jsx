// ============================================
// SHOP PAGE COMPONENT
// Handles category browsing and search results display
// ============================================

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Category from '../../components/category/Category';
import Product from '../../components/product/Product';
import { products } from '../../DummyData';
import './Shop.css';

/**
 * Shop Component - Main shop page with category filtering and search functionality
 * Features:
 * - Category-based product filtering
 * - Search results display from homepage search
 * - URL parameter handling for search queries
 * - Visual highlighting of search matches
 * - Navigation between category views
 */
const Shop = () => {
    // ============ REACT ROUTER HOOKS ============
    // useNavigate: Programmatic navigation
    // useLocation: Access current URL parameters
    const navigate = useNavigate();
    const location = useLocation();

    // ============ STATE MANAGEMENT ============
    // selectedCategory: Currently active filter ("All" or specific category)
    const [selectedCategory, setSelectedCategory] = useState("All");

    // showFiltered: Controls UI mode (false = category grid, true = products view)
    const [showFiltered, setShowFiltered] = useState(false);

    // searchResults: Stores filtered products from search (null = no active search)
    const [searchResults, setSearchResults] = useState(null);

    // searchTerm: Stores original search query for display and highlighting
    const [searchTerm, setSearchTerm] = useState('');

    // ============ EFFECT 1: CHECK FOR SEARCH RESULTS ============
    // Runs on mount and when URL changes
    // Checks two sources: sessionStorage (from homepage) and URL parameters
    useEffect(() => {
        // SOURCE 1: Check sessionStorage (search from homepage)
        const storedResults = sessionStorage.getItem('searchResults');
        const storedTerm = sessionStorage.getItem('searchTerm');

        if (storedResults && storedTerm) {
            // Parse stored data and update state
            setSearchResults(JSON.parse(storedResults));
            setSearchTerm(storedTerm);
            setShowFiltered(true);

            // Clean up sessionStorage to prevent stale data on refresh
            sessionStorage.removeItem('searchResults');
            sessionStorage.removeItem('searchTerm');
        }

        // SOURCE 2: Check URL parameters (direct links with ?search=query)
        const params = new URLSearchParams(location.search);
        const searchQuery = params.get('search');

        if (searchQuery) {
            setSearchTerm(searchQuery);

            // Perform case-insensitive search across multiple product fields
            const results = products.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase())
            );

            setSearchResults(results);
            setShowFiltered(true);
        }
    }, [location]); // Re-run when URL changes

    // ============ HANDLER: CATEGORY SELECTION ============
    // Called when user clicks a category in the grid
    const handleCategorySelect = (categoryName) => {
        setSelectedCategory(categoryName);  // Update selected category
        setShowFiltered(true);               // Switch to products view
        setSearchResults(null);              // Clear any existing search results
    };

    // ============ HANDLER: BACK TO CATEGORIES ============
    // Returns to category grid view and resets all filters
    const handleBackToCategories = () => {
        setShowFiltered(false);      // Switch to category grid view
        setSearchResults(null);       // Clear search results
        setSelectedCategory("All");    // Reset to "All" category
        navigate('/shop');             // Navigate to clean URL (remove search params)
    };

    // ============ HELPER: GET DISPLAY PRODUCTS ============
    // Determines which products to show based on current state
    const getDisplayProducts = () => {
        // Priority 1: Search results (if any)
        if (searchResults) {
            return searchResults;
        }
        // Priority 2: All products (if "All" selected)
        else if (selectedCategory === "All") {
            return products;
        }
        // Priority 3: Filtered by specific category
        else {
            return products.filter(product => product.category === selectedCategory);
        }
    };

    // ============ HELPER: GET PAGE TITLE ============
    // Generates appropriate title based on current view
    const getTitle = () => {
        // Case 1: Showing search results
        if (searchResults) {
            return `Search Results for "${searchTerm}"`;
        }
        // Case 2: Showing all products
        else if (selectedCategory === "All") {
            return "All Products";
        }
        // Case 3: Showing specific category
        else {
            return selectedCategory;
        }
    };

    // Execute helpers to get current display data
    const displayProducts = getDisplayProducts();

    // ============ EFFECT 2: SEARCH HIGHLIGHTING ============
    // Temporarily highlights product cards that match search term
    useEffect(() => {
        // Only run if we have search results and a search term
        if (searchResults && searchTerm) {
            // Small delay ensures DOM is fully rendered
            setTimeout(() => {
                // Find all product cards in the DOM
                const productCards = document.querySelectorAll('.product-card');

                // Loop through each card
                productCards.forEach(card => {
                    // Get product name text (safely using optional chaining)
                    const productName = card.querySelector('.product-name')?.textContent || '';

                    // Check if product name matches search term (case-insensitive)
                    if (productName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        // Add highlight class
                        card.classList.add('search-highlight');

                        // Auto-remove highlight after 3 seconds
                        setTimeout(() => {
                            card.classList.remove('search-highlight');
                        }, 3000);
                    }
                });
            }, 100); // 100ms delay for DOM render
        }
    }, [searchResults, searchTerm]); // Re-run when search results or term change

    // ============ RENDER ============
    return (
        <div className="shop-page">
            {/* CONDITIONAL RENDERING: Two UI modes based on showFiltered */}

            {!showFiltered ? (
                /* ===== MODE 1: CATEGORY GRID VIEW ===== */
                <>
                    {/* Page header */}
                    <div className="shop-header">
                        <h1 className="shop-title">Shop by Category</h1>
                        <p className="shop-subtitle">Browse our wide range of products</p>
                    </div>

                    {/* Category grid component - passes click handler */}
                    <Category onCategorySelect={handleCategorySelect} />
                </>
            ) : (
                /* ===== MODE 2: FILTERED PRODUCTS VIEW ===== */
                <>
                    <div className="shop-header">
                        {/* Back button - returns to category grid */}
                        <button
                            className="back-button"
                            onClick={handleBackToCategories}
                            aria-label="Back to categories"
                        >
                            ← Back to Categories
                        </button>

                        {/* Title container with dynamic content */}
                        <div className="shop-title-container">
                            {/* Dynamic title based on view */}
                            <h1 className="shop-title">{getTitle()}</h1>

                            {/* Product count */}
                            <p className="shop-subtitle">
                                {displayProducts.length} products found
                            </p>
                        </div>
                    </div>

                    {/* Product grid component - displays filtered products */}
                    {/* Empty title prop because we're using page header instead */}
                    <Product products={displayProducts} title="" />
                </>
            )}
        </div>
    );
};

export default Shop;