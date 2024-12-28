// Navbar.jsx

import  { useState } from 'react';

const Navbar = () => {
 

 

  return (
    <nav className="bg-[#2D74E7] p-4 rounded-full mt-4">
      <div className="container mx-auto flex justify-between  items-center">
        <div className="text-white font-semibold hover:font-bold text-2xl cursor-pointer">Blue Bird</div>

        {/* Navbar Links */}
        <div>
          
          <a href="/" className="text-white hover:font-bold cursor-pointer py-2 px-4 w-[90px]" >
            Home
          </a>
          <a href="/blogs" className="text-white hover:font-bold cursor-pointer py-2 px-4 w-[110px]" >
           Blogs
          </a>
          <a href="/createPost" className="text-white hover:font-bold cursor-pointer py-2 px-4 w-[130px]">
           CreateBlog
          </a>
          <a href="/about" className="text-white hover:font-bold cursor-pointer py-2 px-4 w-[100px]">
            About
          </a>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


