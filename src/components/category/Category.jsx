// ============================================
// CATEGORY COMPONENT
// Displays clickable category cards for product filtering
// File: src/components/category/Category.jsx
// ============================================

// LINE 1: Import React library (required for JSX syntax)
import React from 'react';

// LINE 2: Import grid/All icon from Font Awesome
// Used for the "All" category to show all products
import { FaThLarge } from 'react-icons/fa';

// LINE 3-7: Import category icons from Game Icons pack (gi)
// Each icon represents a specific product category
import {
    GiKitchenKnives,     // Kitchen category icon (knife/cutlery)
    GiHighHeel,          // Shoes category icon (high heel shoe)
    GiLipstick,          // Beauty category icon (lipstick)
    GiTennisRacket       // Sports category icon (tennis racket)
} from 'react-icons/gi';

// LINE 8-9: Import category icons from Font Awesome pack (fa)
import {
    FaTv,                // Electronics category icon (television)
    FaTshirt             // Fashion category icon (t-shirt)
} from 'react-icons/fa';

// LINE 10: Import component-specific styles
import './Category.css';

/**
 * Category Component - Renders a grid of clickable category cards
 * @param {Object} props - Component props
 * @param {Function} props.onCategorySelect - Callback function when category is clicked
 * @param {boolean} props.hideAll - Whether to hide the "All" category (default: false)
 */
const Category = ({ onCategorySelect, hideAll = false }) => {
    // ============ CATEGORIES DATA ARRAY ============
    // Contains all category information for rendering
    // Each object represents one category card
    const categories = [
        // LINE 18: Kitchen category
        {
            id: 1,                                  // Unique identifier for React key
            name: "Kitchen",                         // Display name
            icon: <GiKitchenKnives />,               // React icon component
            color: "#FF6B00",                         // Orange brand color
            image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"  // Background image
        },

        // LINE 19: Electronics category
        {
            id: 2,
            name: "Electronics",
            icon: <FaTv />,
            color: "#FF6B00",
            image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },

        // LINE 20: Sports category
        {
            id: 3,
            name: "Sports",
            icon: <GiTennisRacket />,
            color: "#FF6B00",
            image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },

        // LINE 21: Fashion category
        {
            id: 4,
            name: "Fashion",
            icon: <FaTshirt />,
            color: "#FF6B00",
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },

        // LINE 22: Shoes category
        {
            id: 5,
            name: "Shoes",
            icon: <GiHighHeel />,
            color: "#FF6B00",
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=2012&q=80"
        },

        // LINE 23: Beauty category
        {
            id: 6,
            name: "Beauty",
            icon: <GiLipstick />,
            color: "#FF6B00",
            image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2087&q=80"
        },

        // LINE 24-30: All categories (shows all products)
        {
            id: 7,                                   // ID 7 for "All" category
            name: "All",                              // Display name
            icon: <FaThLarge />,                      // Grid icon representing "all"
            color: "#FF6B00",                          // Same orange brand color
            image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=600&auto=format&fit=crop&q=60"  // Shopping/image
        }
    ];

    // ============ FILTER CATEGORIES BASED ON PROPS ============
    // LINE 36-39: Determine which categories to display
    // If hideAll is true: Remove the "All" category (filter out where name !== "All")
    // If hideAll is false: Show all categories (no filtering)
    // 
    // Used in:
    // - Home page: hideAll={true} (hides "All" since Home shows all by default)
    // - Shop page: hideAll={false} (shows "All" for category filtering)
    const displayedCategories = hideAll
        ? categories.filter(cat => cat.name !== "All")  // Remove "All" category
        : categories;                                   // Keep all categories

    // ============ RENDER COMPONENT ============
    return (
        // LINE 42: Main container for categories section
        <div className="categories-section">

            {/* LINE 43: Categories grid container - holds all category cards */}
            <div className="categories-grid">

                {/* 
                LINE 44: Map through displayedCategories array
                Creates a category card for each category in the array
                */}
                {displayedCategories.map((category) => (
                    // LINE 45: Individual category card with unique key
                    <div
                        key={category.id}  // React needs unique key for each element
                        className="category-card"
                        // LINE 47: Dynamic border top color from category.color
                        style={{ borderTop: `3px solid ${category.color}` }}
                        // LINE 48: Click handler - calls parent function with category name
                        onClick={() => onCategorySelect(category.name)}
                    >
                        {/* ===== CATEGORY ICON ===== */}
                        {/* LINE 50: Icon container with dynamic color */}
                        <div className="category-icon" style={{ color: category.color }}>
                            {category.icon}  {/* Render the specific category icon */}
                        </div>

                        {/* LINE 52: Category name heading */}
                        <h3>{category.name}</h3>

                        {/* ===== CATEGORY IMAGE ===== */}
                        {/* LINE 54: Image container */}
                        <div className="category-image">
                            {/* Category background image */}
                            <img
                                src={category.image}      // Image URL from category object
                                alt={category.name}       // Accessibility: describes image
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// LINE 61: Export component for use in other files
export default Category;