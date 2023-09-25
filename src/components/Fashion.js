import React, { useState } from 'react';
import './ProductList.css'; // Create a CSS file for styling
import ProductCard from './ProductCard'; // Create a ProductCard component
import SearchBar from './SearchBar'; // Import the SearchBar component
import './SearchBar.css'; // Create a CSS file for styling
import './CategoryCard.css'; // Import the CSS file

function Fashion() {
  // Define your product data (e.g., an array of products)
  const products = [
    //product list with discount and categories 1 colume
    {
      id: 1,
      title: 'ADIDAS Adilette Aqua Slides Men',
     
      discount: '-20%',
      image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/9904491/1.jpg?0618', // Provide image paths
      price: 2500.0, // Add the price
      rating: 4.5, // Add the rating
    },

    {
      id: 2,
      title: 'Women Bead Chain Sequins Strip Multi Layer',
      category: 'New Arrivals',
      discount: '-20%',
      image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/6814911/1.jpg?3090', // Provide image paths
      price: 15000.0, // Add the price
      rating: 4.2, // Add the rating
    },

    {
      id: 3,
      title: 'Men Loafers Shoe - Black',
     
      discount: '-20%',
      image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/035059/1.jpg?8702', // Provide image paths
      price: 6400.0, // Add the price
      rating: 4.8, // Add the rating
    },

    {
      id: 4,
      title: 'Women Shoes Ladies Shoes Sneakers Women',
      
      discount: '-20%',
      image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/6552412/1.jpg?2394', // Provide image paths
      price: 180.0, // Add the price
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
      <h1>Best & Amazing Fashion</h1>
      <br />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Fashion;
