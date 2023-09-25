import React from 'react';
import './Footer.css'; // Create a CSS file for styling

function Footer() {
 // Define your list of categories with corresponding links
 const categories = [
    { name: 'health-beauty', link: '/healthBeauty' },
    { name: 'home-office', link: '/home-office' },
    { name: 'appliances', link: '/appliances' },
    { name: 'Groceries', link: '/groceries' },
    { name: 'computing', link: '/computing' },
    { name: 'electronic', link: '/electronic' },
    { name: 'video-games', link: '/video-games' },
  ];

  return (
    <footer className="footer" style={{ backgroundColor: '#060b26' }}>
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Products</h3>
    
            

          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <a href={category.link} style={{ color: 'white', textDecoration: 'none' }}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>

            
        </div>


        {/* Column 4 */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
