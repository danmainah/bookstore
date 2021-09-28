import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
          <nav className="navBar">
            <ul>
            <li>
              <Link to="/" >
                Bookstore-CMS
             </Link>
            </li>
            <li>
              <Link to="/">
                Books
              </Link>
            </li>
            <li>
              <Link to="/categories" >
               Categories
              </Link>
            </li>
            </ul>
          </nav>
        </div>
      );
    };
    
    export default Navbar;