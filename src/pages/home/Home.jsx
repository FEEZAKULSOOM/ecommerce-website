// ============================================
// HOME PAGE COMPONENT - Main landing page with hero slider and category filtering
// ============================================

// React Core Imports - Hooks for state management, side effects, and DOM references
import React, { useState, useEffect, useRef } from 'react';



// Icon imports from react-icons library - Game Icons (gi) and Font Awesome (fa) packs
import {
    GiKitchenKnives,    // Kitchen/cutlery icon
    GiHighHeel,         // High heel shoe icon  
    GiLipstick,         // Lipstick/beauty icon
    GiTennisRacket      // Sports/tennis icon
} from 'react-icons/gi';

import {
    FaTv,              // Television/electronics icon
    FaTshirt            // T-shirt/fashion icon
} from 'react-icons/fa';

// Component-specific styles
import "./Home.css";

// Child components
import Category from '../../components/category/Category.jsx';  // Category filter component
import Product from '../../components/product/Product.jsx';      // Product grid component

// Data import - product array from dummy data file
import { products } from '../../DummyData.js';

/**
 * Home Component - Renders the main landing page
 * Features:
 * - Auto-rotating hero image slider with category badges
 * - Category selection with smooth scroll to products
 * - Filtered product display based on selected category
 */
function Home() {
    // ============ STATE MANAGEMENT ============

    /**
     * currentSlide: Tracks which hero image is currently visible (0-5)
     * setCurrentSlide: Updates the slide index
     */
    const [currentSlide, setCurrentSlide] = useState(0);

    /**
     * selectedCategory: Currently active category for filtering products
     * Default: "All" shows all products
     */
    const [selectedCategory, setSelectedCategory] = useState("All");

    // ============ DOM REFERENCES ============

    /**
     * productsRef: Reference to products section DOM element
     * Used for smooth scrolling when category is selected
     */
    const productsRef = useRef(null);

    // ============ SLIDER DATA CONFIGURATION ============

    /**
     * slides: Array of 6 category slides for the hero slider
     * Each object contains:
     * - id: Unique identifier
     * - category: Display name
     * - image: Background image URL (Unsplash high-quality images)
     * - icon: React component for visual representation
     * - color: Theme color (consistent orange brand color)
     */
    const slides = [
        {
            id: 1,
            category: "Kitchen",
            image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            icon: <GiKitchenKnives />,
            color: "#FF6B00"  // Brand orange
        },
        {
            id: 2,
            category: "Electronics",
            image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            icon: <FaTv />,
            color: "#FF6B00"
        },
        {
            id: 3,
            category: "Sports",
            image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            icon: <GiTennisRacket />,
            color: "#FF6B00"
        },
        {
            id: 4,
            category: "Fashion",
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            icon: <FaTshirt />,
            color: "#FF6B00"
        },
        {
            id: 5,
            category: "Shoes",
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=2012&q=80",
            icon: <GiHighHeel />,
            color: "#FF6B00"
        },
        {
            id: 6,
            category: "Beauty",
            image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2087&q=80",
            icon: <GiLipstick />,
            color: "#FF6B00"
        }
    ];

    // ============ SIDE EFFECTS ============

    /**
     * Auto-slider effect
     * Sets up interval to advance slide every 3 seconds
     * Cleanup function prevents memory leaks on unmount
     * Dependency array [slides.length] ensures effect updates if slide count changes
     */
    useEffect(() => {
        const timer = setInterval(() => {
            // Functional update ensures we have latest state
            // Modulo operator creates infinite loop (0->1->2->3->4->5->0)
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000); // 3-second interval

        // Cleanup function - clears interval when component unmounts
        return () => clearInterval(timer);
    }, [slides.length]); // Re-run if number of slides changes

    // ============ EVENT HANDLERS ============

    /**
     * Direct navigation to specific slide (used by navigation dots)
     * @param {number} index - Target slide index
     */
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    /**
     * Advance to next slide with wrap-around
     * Functional update ensures latest state
     */
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    /**
     * Go to previous slide with wrap-around
     * Formula: (prev - 1 + length) % length handles negative values
     * Example: If at index 0, (0 - 1 + 6) % 6 = 5 (last slide)
     */
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    /**
     * Handles category selection from Category component
     * @param {string} category - Selected category name
     * 
     * Process:
     * 1. Updates selectedCategory state
     * 2. Short delay to allow re-render
     * 3. Smooth scroll to products section
     */
    const handleCategorySelect = (category) => {
        // Update category state
        setSelectedCategory(category);

        // Small delay ensures DOM updates before scrolling
        setTimeout(() => {
            // Check if ref exists (defensive programming)
            if (productsRef.current) {
                // Smooth scroll to products section
                productsRef.current.scrollIntoView({
                    behavior: 'smooth',  // Smooth animation
                    block: 'start'        // Align to top of viewport
                });
            }
        }, 100); // 100ms delay for render completion
    };

    // ============ DATA PROCESSING ============

    /**
     * Filter products based on selected category
     * If "All" -> return entire products array
     * If specific category -> filter by category property
     * 
     * @returns {Array} Filtered product array
     */
    const filteredProducts = selectedCategory === "All"
        ? products  // Show all products
        : products.filter(product => product.category === selectedCategory); // Show only matching category

    // ============ RENDER ============
    return (
        <div>
            {/* 
            ============ HERO SECTION ============
            Split layout: Left side static text, Right side dynamic image slider
            */}
            <div className="hero-section">
                {/* Decorative orange background glow effect */}
                <div className="hero-glow"></div>

                {/* LEFT CONTENT - Static promotional text */}
                <div className="hero-content">
                    {/* Main headline with line break and highlighted span */}
                    <h1 className="hero-title">
                        SHOP SMART <br />
                        <span>UP TO 20% OFF</span>
                    </h1>

                    {/* Category tags - visual representation of all categories */}
                    <div className="hero-subtitle">
                        <span className="category-tag">
                            <GiKitchenKnives /> Kitchen
                        </span>
                        <span className="category-tag">
                            <FaTv /> Electronics
                        </span>
                        <span className="category-tag">
                            <GiTennisRacket /> Sports
                        </span>
                        <span className="category-tag">
                            <FaTshirt /> Fashion
                        </span>
                        <span className="category-tag">
                            <GiHighHeel /> Shoes
                        </span>
                        <span className="category-tag">
                            <GiLipstick /> Beauty
                        </span>
                    </div>

                    {/* Promotional description */}
                    <p className="hero-description">
                        Shop across 6 categories with exclusive discounts.
                        Limited time offer!
                    </p>
                </div>

                {/* 
                ============ RIGHT SIDE - IMAGE SLIDER ============
                Dynamic slider with current category badge, images, navigation, and floating icons
                */}
                <div className="hero-slider">
                    {/* Current Category Badge - shows icon and name of active slide */}
                    <div
                        className="slider-badge"
                        style={{ background: slides[currentSlide].color }} // Dynamic color from slide data
                    >
                        {slides[currentSlide].icon}
                        <span>{slides[currentSlide].category}</span>
                    </div>

                    {/* Main Slider Images Container */}
                    <div className="slider-container">
                        {/* Map through all slides to create image elements */}
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id} // Unique key for React reconciliation
                                // Conditional class: only current slide gets 'active' class (visible)
                                className={`slider-image ${index === currentSlide ? 'active' : ''}`}
                                style={{
                                    backgroundImage: `url(${slide.image})`, // Set background image
                                    borderColor: slide.color // Border color matches category
                                }}
                            >
                                {/* Colored gradient overlay for visual effect */}
                                <div
                                    className="image-overlay"
                                    style={{
                                        background: `linear-gradient(135deg, ${slide.color}40, transparent)`
                                        // '40' adds hex opacity (25% opacity)
                                    }}
                                ></div>
                            </div>
                        ))}
                    </div>

                    {/* 
                    ============ SLIDER NAVIGATION DOTS ============
                    Visual indicators and click navigation
                    */}
                    <div className="slider-dots">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                // Conditional class for active dot styling
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)} // Click to navigate
                                style={{
                                    backgroundColor: index === currentSlide
                                        ? slide.color  // Active dot: category color
                                        : 'rgba(255,255,255,0.3)' // Inactive: semi-transparent white
                                }}
                                aria-label={`Go to slide ${index + 1}: ${slide.category}`} // Accessibility
                            />
                        ))}
                    </div>

                    {/* 
                    ============ NAVIGATION ARROWS ============
                    Previous and next buttons
                    */}
                    <button
                        className="slider-arrow prev"
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        ❮ {/* Left arrow HTML entity */}
                    </button>
                    <button
                        className="slider-arrow next"
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        ❯ {/* Right arrow HTML entity */}
                    </button>

                    {/* 
                    ============ DECORATIVE FLOATING ICONS ============
                    Visual enhancement - icons float around slider
                    Positioned with CSS classes icon1 through icon6
                    */}
                    <div className="floating-icon icon1">
                        <GiKitchenKnives />
                    </div>
                    <div className="floating-icon icon2">
                        <FaTv />
                    </div>
                    <div className="floating-icon icon3">
                        <GiTennisRacket />
                    </div>
                    <div className="floating-icon icon4">
                        <FaTshirt />
                    </div>
                    <div className="floating-icon icon5">
                        <GiHighHeel />
                    </div>
                    <div className="floating-icon icon6">
                        <GiLipstick />
                    </div>
                </div>
            </div>

            {/* 
            ============ CATEGORY FILTER COMPONENT ============
            Passes:
            - onCategorySelect: Handler for category clicks
            - hideAll={true}: Likely hides "All" categories button
            */}
            <Category
                onCategorySelect={handleCategorySelect}
                hideAll={true}
            />

            {/* 
            ============ PRODUCTS SECTION ============
            ref={productsRef}: Attaches ref for scroll targeting
            */}
            <div ref={productsRef}>
                <Product
                    // Filtered products based on selected category
                    products={filteredProducts}
                    // Dynamic title based on selection
                    title={selectedCategory === "All"
                        ? "Trending Products"  // Default title
                        : `${selectedCategory} Products`  // Category-specific title
                    }
                    limit={7}  // Show only 7 products (homepage optimization)
                />
            </div>
        </div>
    );
}

export default Home;