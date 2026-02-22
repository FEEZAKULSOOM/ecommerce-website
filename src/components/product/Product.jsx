import React from 'react';
import "./Product.css";
import { useDispatch } from 'react-redux';
import { AddItem } from '../../redux/cartSlice';

function Product({ products, title = "Featured Products", limit = null }) {
    let dispatch = useDispatch();

    // Determine which products to display
    const productsToShow = limit ? products.slice(0, limit) : products;

    return (
        <div className="products-section">
            {title && <h2 className="products-title">{title}</h2>}
            <div className="products-grid">
                {productsToShow.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-image-container">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                            />
                            {product.rating >= 4.5 && (
                                <span className="product-badge">Best Seller</span>
                            )}
                        </div>

                        <div className="product-info">
                            <h3 className="product-brand">{product.brand}</h3>
                            <h4 className="product-name">{product.name}</h4>
                            <p className="product-description">{product.description}</p>

                            <div className="product-rating">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < Math.floor(product.rating) ? "star-filled" : "star-empty"}>
                                        ★
                                    </span>
                                ))}
                                <span className="rating-number">({product.rating})</span>
                            </div>

                            <div className="product-price">
                                <span className="current-price">RS {product.price}</span>
                                <span className="original-price">RS {(product.price * 1.2).toFixed(2)}</span>
                                <span className="discount">20% OFF</span>
                            </div>

                            <button
                                className="add-to-cart-btn"
                                onClick={() => {
                                    dispatch(AddItem(product));
                                    alert("🟧 Item Added Successfyully...")

                                }}

                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;