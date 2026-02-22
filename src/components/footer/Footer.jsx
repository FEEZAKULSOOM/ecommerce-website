// ============================================
// FOOTER COMPONENT - OPTIMIZED VERSION
// Site footer with brand info, categories, and navigation links
// ============================================

import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Added useLocation
import { AiFillHeart } from 'react-icons/ai';
import {
    GiShoppingCart,
    GiKitchenKnives,
    GiHighHeel,
    GiTennisRacket,
    GiLipstick
} from 'react-icons/gi';
import { FaTv, FaTshirt } from 'react-icons/fa';
import './Footer.css';

/**
 * Footer Component - Displays site footer
 * Features:
 * - Brand logo and tagline
 * - Clickable category links
 * - Complete navigation links with active state
 * - Copyright with current year
 * - Smooth scroll to top functionality
 */
const Footer = () => {
    const location = useLocation(); // Get current path for active links

    /**
     * scrollToTop - Smoothly scrolls page to top
     * Used when clicking navigation links
     */
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">

                {/* ===== SECTION 1: BRAND ===== */}
                <div className="footer-section brand">
                    <div className="footer-logo">
                        <GiShoppingCart className="logo-icon" />
                        <span>S-Hive</span>
                    </div>
                    <p className="footer-tagline">
                        Shop across 6 categories with exclusive discounts.
                    </p>
                </div>

                {/* ===== SECTION 2: CATEGORIES (Now Clickable) ===== */}
                <div className="footer-section">
                    <h4>Categories</h4>
                    <ul>
                        {/* Each category links to shop with category filter */}
                        <Link to="/shop" onClick={scrollToTop}>
                            <li><GiKitchenKnives /> Kitchen</li>
                        </Link>
                        <Link to="/shop" onClick={scrollToTop}>
                            <li><FaTv /> Electronics</li>
                        </Link>
                        <Link to="/shop" onClick={scrollToTop}>
                            <li><FaTshirt /> Fashion</li>
                        </Link>
                        <Link to="/shop" onClick={scrollToTop}>
                            <li><GiHighHeel /> Shoes</li>
                        </Link>
                        <Link to="/shop" onClick={scrollToTop}>
                            <li><GiLipstick /> Beauty</li>
                        </Link>
                        <Link to="/shop" onClick={scrollToTop}>
                            <li><GiTennisRacket /> Sports</li>
                        </Link>
                    </ul>
                </div>

                {/* ===== SECTION 3: QUICK LINKS (Complete) ===== */}
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        {/* Home link with active state */}
                        <Link to="/" onClick={scrollToTop}>
                            <li className={location.pathname === "/" ? "footer-active-link" : ""}>
                                Home
                            </li>
                        </Link>

                        {/* Shop link with active state */}
                        <Link to="/shop" onClick={scrollToTop}>
                            <li className={location.pathname === "/shop" ? "footer-active-link" : ""}>
                                Shop
                            </li>
                        </Link>

                        {/* Cart link with active state */}
                        <Link to="/cart" onClick={scrollToTop}>
                            <li className={location.pathname === "/cart" ? "footer-active-link" : ""}>
                                Cart
                            </li>
                        </Link>

                        {/* Contact link with active state */}
                        <Link to="/contact" onClick={scrollToTop}>
                            <li className={location.pathname === "/contact" ? "footer-active-link" : ""}>
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>

            {/* ===== BOTTOM BAR ===== */}
            <div className="footer-bottom">
                <p>© {currentYear} S-Hive. All rights reserved.</p>
                <p>
                    Made with
                    <AiFillHeart style={{
                        color: '#FF6B00',
                        fontSize: '14px',
                        margin: '0 4px'  // Added margin for spacing
                    }} />
                    in Pakistan.
                </p>
            </div>
        </footer>
    );
};

export default Footer;