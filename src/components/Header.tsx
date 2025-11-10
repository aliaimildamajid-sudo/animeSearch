import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-md py-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <Link to="/search" className="text-2xl font-bold text-white hover:text-yellow-300 transition-colors">
          Anime Search
        </Link>
        <nav className="flex gap-6">
          <Link to="/home" className="text-white hover:text-yellow-300 transition-colors font-semibold">
            About Alia
          </Link>
          <Link to="/search" className="text-white hover:text-yellow-300 transition-colors font-semibold">
            Search Anime
          </Link>
        </nav>
      </div>
    </header>
  );
}