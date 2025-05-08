import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-100 px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-800">SkinTalk</h1>
      <ul className="flex gap-6 text-sm text-gray-700">
        <li>
          <a href="/" className="hover:text-purple-600">
            Home
          </a>
        </li>
        <li>
          <a href="/tips" className="hover:text-purple-600">
            Tips & Guides
          </a>
        </li>
        <li>
          <a href="/trends" className="hover:text-purple-600">
            Trends & News
          </a>
        </li>
        <li>
          <a href="/types" className="hover:text-purple-600">
            Skin Types
          </a>
        </li>
        <li>
          <a href="/reviews" className="hover:text-purple-600">
            Product Reviews
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
