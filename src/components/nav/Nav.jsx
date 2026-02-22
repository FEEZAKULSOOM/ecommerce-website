// ============================================
// NAVIGATION COMPONENT - OPTIMIZED VERSION
// Header with logo, search, cart, and navigation links
// ============================================

import React, { useState } from 'react';
import { SiShopee } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"; // Removed useDispatch (not used)
import { products } from '../../DummyData';
import './Nav.css';

/**
 * Nav Component - Main navigation bar
 * Features:
 * - Logo with link to home
 * - Search bar with product search
 * - Cart icon with item count
 * - Navigation links with active state highlighting
 */
function Nav() {
    // ============ REDUX HOOKS ============
    // Get cart items count from Redux store
    // useDispatch was removed as it wasn't being used
    const items = useSelector(state => state.cart); // Changed let to const (best practice)

    // ============ ROUTER HOOKS ============
    const location = useLocation(); // For active link highlighting
    const navigate = useNavigate();  // For navigation after search

    // ============ LOCAL STATE ============
    const [searchTerm, setSearchTerm] = useState('');

    // ============ SEARCH HANDLER ============
    /**
     * Processes search form submission
     * @param {Event} e - Form submit event
     */
    const handleSearch = (e) => {
        e.preventDefault();

        // Validate search term
        if (!searchTerm.trim()) {
            alert('Please enter a search term');
            return;
        }

        // Case-insensitive search across product fields
        const results = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (results.length > 0) {
            // Store results in sessionStorage for shop page
            sessionStorage.setItem('searchResults', JSON.stringify(results));
            sessionStorage.setItem('searchTerm', searchTerm);

            // Navigate to shop page with search query
            navigate('/shop?search=' + encodeURIComponent(searchTerm));

            // Highlight matching products after navigation
            setTimeout(() => {
                const productCards = document.querySelectorAll('.product-card');

                // Removed unused 'found' variable
                productCards.forEach(card => {
                    const productName = card.querySelector('.product-name')?.textContent || '';

                    if (productName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        // Add highlight and scroll to product
                        card.classList.add('search-highlight');

                        card.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });

                        // Remove highlight after 3 seconds
                        setTimeout(() => {
                            card.classList.remove('search-highlight');
                        }, 3000);
                    }
                });
            }, 500); // Delay to ensure shop page loads
        } else {
            // No results found
            alert('🟧 No matching products found! Please try another search.');
            setSearchTerm('');
        }
    };

    return (
        <div className='nav'>
            {/* Top Navigation Bar */}
            <div className="top-nav">
                {/* Logo with home link */}
                <Link to="/">
                    <div className="logo">
                        <span>S-Hive</span>
                        <SiShopee />
                    </div>
                </Link>

                {/* Search Form */}
                <form className='search-box' onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder='Search Items...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        aria-label="Search products" // Accessibility improvement
                    />
                    <button type="submit" aria-label="Search">
                        <FaSearch />
                    </button>
                </form>

                {/* Cart Icon with Item Count */}
                <Link to="/cart">
                    <div className="cart-box">
                        <BsCartFill />
                        <span>{items.length}</span>
                    </div>
                </Link>
            </div>

            {/* Bottom Navigation Links */}
            <div className="bottom-nav">
                <Link to="/">
                    <li className={location.pathname === "/" ? "active-link" : ""}>
                        Home
                    </li>
                </Link>
                <Link to="/shop">
                    <li className={location.pathname === "/shop" ? "active-link" : ""}>
                        Shop
                    </li>
                </Link>
                <Link to="/cart">
                    <li className={location.pathname === "/cart" ? "active-link" : ""}>
                        Cart
                    </li>
                </Link>
                <Link to="/contact">
                    <li className={location.pathname === "/contact" ? "active-link" : ""}>
                        Contact
                    </li>
                </Link>
            </div>
        </div>
    );
}

export default Nav;