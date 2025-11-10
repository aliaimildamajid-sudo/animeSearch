import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full bg-gray-900 text-white py-2 z-50">
      <div className="max-w-7xl mx-auto text-center px-6">
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Anime Search App by aliaimildamajid@gmail.com | Powered by <a href="https://jikan.moe/" className="underline hover:text-white">Jikan API</a>
        </p>
      </div>
    </footer>
  );
}