import React from 'react';
import "./CartCard.css";
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/cartSlice';

function CartCard({ item }) {
    let dispatch = useDispatch();
    if (!item) return null;

    // Use a reliable placeholder service
    const imageUrl = item.image || `https://picsum.photos/80/80?random=${item.id || Math.random()}`;
    const productName = item.name || "Product";
    const productPrice = item.price ? `RS ${item.price}/-` : "RS 0/-";

    return (
        <div className='cart-card'>
            <div className="left-card">
                <img src={imageUrl} alt={productName} />
                <div className="name-price">
                    <span className="product-name">{productName}</span>
                    <span className="product-price">{productPrice}</span>
                </div>
            </div>
            <div className="right-card">
                <button className="remove-btn" onClick={() => {
                    dispatch(RemoveItem(item.id))
                    alert("🟧 Item Removed Successfyully...")
                }}>
                    Remove <FaTrashAlt />
                </button>
            </div>
        </div>
    );
}

export default CartCard;