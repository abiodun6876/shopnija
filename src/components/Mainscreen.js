
import React, { useState } from 'react';
import './ProductList.css'; // Create a CSS file for styling
import ProductCard from './ProductCard'; // Create a ProductCard component
import SearchBar from './SearchBar'; // Import the SearchBar component
import './SearchBar.css'; // Create a CSS file for styling
import CategoryCard from './CategoryCard'; // Create a CategoryCard component

import './CategoryCard.css'; // Import the CSS file


function Mainscreen() {
  // Define your product data (e.g., an array of products)
  const products = [


//product list with discount and categories 1 colume
    {
        id: 1,
        title: 'Clearance',
        category: 'New Arrivals',
        discount: '-20%',
        image: 'images/Clearance.gif', // Provide image paths
        link: '/clearannce', // Define the link 
        price: 150.0, // Add the 'price' property
      },
  
      {
          id: 2,
          title: 'food-cupboard',
          category: 'New Arrivals',
          discount: '-20%',
          image: 'images/food-cupboard_260x144v2.png', // Provide image paths
          link: '/food-cupboard', // Define the link 
          price: 150.0, // Add the 'price' property
        },
  
        {
          id: 3,
          title: 'women-fashion',
          category: 'New Arrivals',
          discount: '-20%',
          image: 'images/womens-clothing_260x144.png', // Provide image paths
          link: '/women-fashion', // Define the link 
          price: 150.0, // Add the 'price' property
        },
  
  
        {
          id: 4,
          title: 'mens-clothing',
          category: 'New Arrivals',
          discount: '-20%',
          image: 'images/mens-clothing_260x144.png', // Provide image paths
          link: '/mens-clothing', // Define the link 
          price: 150.0, // Add the 'price' property
        },











//product list with discount and categories 2 colum

    {
      id: 5,
      title: 'official-store',
      category: 'New Arrivals',
      discount: '-20%',
      image: 'images/official-stores_300x240.gif', // Provide image paths
      link: '/official-store', // Define the link 
      price: 150.0, // Add the 'price' property
    },

    {
        id: 6,
        title: 'phones-tablet',
        category: 'New Arrivals',
        discount: '-20%',
        image: 'images/phone.jpg', // Provide image paths
        link: '/phones-tablet', // Define the link 
        price: 150.0, // Add the 'price' property
      },

      {
        id: 7,
        title: 'generator',
        category: 'New Arrivals',
        discount: '-20%',
        image: 'images/generator.gif', // Provide image 
        link: '/generator', // Define the link 
        price: 150.0, // Add the 'price' property
      },


      {
        id: 8,
        title: 'groceries ',
        category: 'New Arrivals',
        discount: '-20%',
        image: 'images/groceries_300x240v2.png', // Provide image 
        link: '/groceries', // Define the link 
        price: 150.0, // Add the 'price' property
      },
    
    // Add more product objects as needed
  ];



  const categories = [
    {
        id: 1,
      title: 'health-beauty',
      imageUrl: 'images/health-beauty.jpg',
      link: '/health-beauty', // Define the link to the category page
      price: 150.0, // Add the 'price' property
    },
    {
        id: 2,
      title: 'home-office',
      imageUrl: 'images/home-office.jpg',
      link: '/MTN5G',
      price: 150.0, // Add the 'price' property
    },
    {
        id: 3,
      title: 'appliances',
      imageUrl: 'images/appliances.jpg',
      link: '/generators',
      price: 150.0, // Add the 'price' property
    },
    {
        id: 4,
      title: 'Groceries',
      imageUrl: 'images/groceries_300x240v2.png',
      link: '/groceries',
      price: 150.0, // Add the 'price' property
    },

    {
        id: 5,
      title: 'Fashion',
      imageUrl: 'images/fashion_300x240.png',
      link: '/fashion', // Define the link to the category page
      price: 150.0, // Add the 'price' property
    },
    {
        id: 6,
      title: 'Phones & Tablets',
      imageUrl: 'images/phone.jpg',
      link: '/phones-tablets',
      price: 150.0, // Add the 'price' property
    },
   
    {
        id: 7,
      title: 'computing',
      imageUrl: 'images/video-games.jpg',
      link: '/Computing',
      price: 150.0, // Add the 'price' property
    },

    {
        id: 8,
      title: 'electronic',
      imageUrl: 'images/electronic.jpg',
      link: '/electronic', // Define the link to the category page
      price: 150.0, // Add the 'price' property
    },
    {
        id: 9,
      title: 'video-games',
      imageUrl: 'images/video-games.jpg',
      link: '/video-games',
      price: 150.0, // Add the 'price' property
    },
    // Add more categories as needed 
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
    <br/>
      <SearchBar onSearch={handleSearch} />
      <br />
     
     <h1>Product Categories</h1>
{/*categories */}

{categories.map((category, index) => (
        <CategoryCard key={index} {...category} />
      ))}

      
      <br />
      {/*Productlists */}
      <h1>Top selling items</h1>
      <br/>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Mainscreen;