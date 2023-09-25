import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

function CategoryCard({ title, imageUrl, link }) {
  return (
    <div className="category-card">
      <Link to={link} className="category-link">
        <img src={imageUrl} alt={title} className="category-image" />
        <h5 className="title">{title}</h5>
      </Link>
    </div>
  );
}

export default CategoryCard;
