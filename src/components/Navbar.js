import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
          <nav className="navBar">
            <ul>
            <li>
              <Link to="/" className="bookstore">
                Bookstore-CMS
             </Link>
            </li>
            <li>
              <Link to="/" className="books">
                Books
              </Link>
            </li>
            <li>
              <Link to="/categories" className="categories">
               Categories
              </Link>
            </li>
            </ul>
          </nav>
        </div>
      );
    };
    
    export default Navbar;