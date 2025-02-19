import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center py-5 px-4 h-14">
        
        {/* Logo Section */}
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-500 px-1 rounded">&lt;</span>
          Pass
          <span className="px-1 text-green-500 rounded">OP/&gt;</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-4">
          <li><a className="hover:font-bold" href="/">Home</a></li>
          <li><a className="hover:font-bold" href="/about">About</a></li>
          <li><a className="hover:font-bold" href="/contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
