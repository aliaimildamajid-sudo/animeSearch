import React from 'react';
import { Link } from 'react-router-dom';

interface AnimeCardProps {
  anime: {
    mal_id: number;
    title: string;
    images: { jpg: { image_url: string } };
    synopsis: string;
    score?: number;
  };
}

export default function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Image */}
      <img
        src={anime.images.jpg.image_url}
        alt={anime.title}
        className="w-full h-48 object-cover"
      />
      
      {/* Info */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{anime.title}</h2>
        <p className="text-gray-600 text-sm line-clamp-1 mb-3">{anime.synopsis || 'No description available.'}</p>
        
        {/* Score and View Details */}
        <div className="flex justify-between items-center">
          {anime.score && (
            <span className="text-yellow-500 font-semibold">⭐ {anime.score}</span>
          )}
          <Link 
  to={`/detail/${anime.mal_id}`} 
  className="text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-colors"
>
  View Details →
</Link>
        </div>
      </div>
    </div>
  );
}