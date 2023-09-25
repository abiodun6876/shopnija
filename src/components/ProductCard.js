import React from 'react';
import './ProductCard.css'; // Create a CSS file for styling

function ProductCard({ product }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= product.rating ? 'fas fa-star' : 'far fa-star';
      stars.push(<i key={i} className={starClass}></i>);
    }
    return stars;
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <div className="product-label">{product.category}</div>
        <div className="product-title">{product.title}</div>
        <div className="star-rating">{renderStars()}</div>
        <div className="product-discount">{product.discount}</div>
        <div className="product-price">#{product.price.toFixed(2)}</div>
        <br/>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
