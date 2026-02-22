// ============================================
// CART COMPONENT
// Displays user's shopping cart with items and total price
// ============================================

// LINE 1: Import React library (required for JSX)
import React from 'react';

// LINE 2: Import component-specific styles
import "./Cart.css";

// LINE 3: Import CartCard component - displays individual cart items
import CartCard from '../../components/cartCard/CartCard';

// LINE 4: Import useSelector hook to access Redux store state
import { useSelector } from 'react-redux';

// LINE 5: Import Link component for navigation without page refresh
import { Link } from 'react-router-dom';

// LINE 6: Import empty cart icon from react-icons
import { BsCartX } from 'react-icons/bs';

// LINE 7: Import shopping bag icon for shop now button
import { FaShoppingBag } from 'react-icons/fa';

/**
 * Cart Component - Displays shopping cart contents
 * Features:
 * - Shows all items in cart with CartCard components
 * - Calculates and displays total price
 * - Shows empty cart state with call-to-action
 * - Responsive design with CSS styling
 */
function Cart() {
    // ============ REDUX STATE ACCESS ============

    // LINE 21: useSelector hook to get cart state from Redux store
    // 'state.cart' assumes your Redux store has a 'cart' reducer
    // Returns array of cart items (empty array if no items)
    let items = useSelector(state => state.cart);

    // ============ TOTAL PRICE CALCULATION ============

    // LINE 25: Calculate total price using reduce method
    // reduce() iterates through all items and accumulates total
    // 'a' is accumulator (starts at 0), 'b' is current item
    // Adds each item's price to running total
    let totalPrice = items.reduce((a, b) => a + b.price, 0);

    // LINE 26: Debug log - shows cart contents in console
    // JSON.stringify with null,2 formats the output nicely
    // Helpful for debugging but can be removed in production


    // ============ RENDER ============
    return (
        // LINE 31: Main container with 'cart' class for styling
        <div className="cart">

            {/* 
            ============ CONDITIONAL RENDERING ============
            Check if cart is empty (items.length <= 0)
            Two possible UI states:
            1. Empty cart - show message and shop now button
            2. Cart with items - show items and total price
            */}

            {items.length <= 0 ? (
                /* ===== EMPTY CART STATE ===== */
                // LINE 38: Container for empty cart message
                <div className="empty-cart">

                    {/* LINE 39: Empty cart icon from react-icons */}
                    <BsCartX className="empty-cart-icon" />

                    {/* LINE 40: Heading for empty cart */}
                    <h2>Your cart is empty</h2>

                    {/* LINE 41: Descriptive message */}
                    <p>Looks like you haven't added anything to your cart yet.</p>

                    {/* LINE 42: Link to shop page (client-side navigation) */}
                    <Link to="/shop">
                        {/* LINE 43: Button with shopping bag icon */}
                        <button className="shop-now-btn">
                            <FaShoppingBag /> Shop Now
                        </button>
                    </Link>
                </div>
            ) : (
                /* ===== CART WITH ITEMS STATE ===== */
                // LINE 49: React fragment to group multiple elements
                <>
                    {/* 
                    ============ CART ITEMS LIST ============
                    Map through each item in cart and render CartCard
                    */}
                    {items.map((item, index) => (
                        // LINE 53: CartCard component for individual item
                        // key={index} - not ideal (see note below)
                        // item={item} - passes item data to CartCard
                        <CartCard key={item.id} item={item} />
                    ))}

                    {/* 
                    ============ PRICE SUMMARY SECTION ============
                    Displays total items count and total price
                    */}
                    {/* LINE 58: Container for price summary */}
                    <div className="price-section">
                        {/* LINE 59: Total products count */}
                        <span>Total Products: {items.length}</span>

                        {/* LINE 60: Total price with RS currency prefix */}
                        <span>Total Price: RS {totalPrice}</span>
                    </div>
                </>
            )}
        </div>
    );
}

// LINE 66: Export component for use in other files
export default Cart;