import React, { useState } from 'react';
import './ProductList.css'; // Create a CSS file for styling
import ProductCard from './ProductCard'; // Create a ProductCard component
import SearchBar from './SearchBar'; // Import the SearchBar component
import './SearchBar.css'; // Create a CSS file for styling
import './CategoryCard.css'; // Import the CSS file

function HealthBeauty() {
  // Define your product data (e.g., an array of products)
  const products = [
    //product list with discount and categories 1 colume
    {
      id: 1,
      title: 'NIVEA Radiant & Beauty Even Glow Body Lotion For Women - 400ml',
     
      discount: '-20%',
      image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/4213401/1.jpg?9222', // Provide image paths
      price: 2500.0, // Add the price
      rating: 4.5, // Add the rating
    },

    {
      id: 2,
      title: 'NIVEA Radiant & Beauty Body Lotion bundle: Advanced Care and Even Glow - 400ml',
      category: 'New Arrivals',
      discount: '-20%',
      image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/1713401/1.jpg?7572', // Provide image paths
      price: 15000.0, // Add the price
      rating: 4.2, // Add the rating
    },

    {
      id: 3,
      title: 'Mizani Coconut Souffle Light Moisturizing Hairdress',
     
      discount: '-20%',
      image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/3934942/1.jpg?9342', // Provide image paths
      price: 15000.0, // Add the price
      rating: 4.8, // Add the rating
    },

    {
      id: 4,
      title: 'NIVEA Watimagbo Pack- Perfect & Radiant Body Lotion - 400ml (Pack of 3)',
      
      discount: '-20%',
      image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/9023401/1.jpg?5824', // Provide image paths
      price: 768.0, // Add the price
      rating: 4.0, // Add the rating
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
          <br />
      <SearchBar onSearch={handleSearch} />
      <br />
      <br />
      {/* Product Lists */}
      <h1>Health & Beauty</h1>
      <br />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default HealthBeauty;
