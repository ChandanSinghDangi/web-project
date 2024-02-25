// Navbar.jsx

import  { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Blog Site</div>

        {/* Hamburger Menu for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          
          <a href="/" className="text-white hover:bg-gray-600 py-2 px-4 block lg:inline" onClick={toggleMenu}>
            Home
          </a>
          <a href="/blogs" className="text-white hover:bg-gray-600 py-2 px-4 block lg:inline" onClick={toggleMenu}>
           Blogs
          </a>
          <a href="/createPost" className="text-white hover:bg-gray-600 py-2 px-4 block lg:inline" onClick={toggleMenu}>
           CreateBlog
          </a>
          <a href="/about" className="text-white hover:bg-gray-600 py-2 px-4 block lg:inline" onClick={toggleMenu}>
            About
          </a>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
