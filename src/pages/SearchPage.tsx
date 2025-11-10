import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchAnime } from '../redux/animeSlice';
import { RootState, AppDispatch } from '../redux/store';
import SearchBar from '../components/SearchBar';
import AnimeCard from '../components/AnimeCard';
import SkeletonCard from '../components/SkeletonCard';
import EmptyState from '../components/EmptyState';

export default function SearchPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { results, page, totalPages, loading } = useSelector((state: RootState) => state.anime);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) dispatch(searchAnime({ query, page: 1 }));
  }, [query, dispatch]);

  const handlePageChange = (newPage: number) => {
    dispatch(searchAnime({ query, page: newPage }));
  };

  // Take only the first 6 results
  const displayedResults = results.slice(0, 6);

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 flex flex-col items-center" style={{ background: 'linear-gradient(135deg, #f6d365, #fda085)' }}>
      <h1 className="text-4xl font-bold mb-6 text-white text-center drop-shadow-lg">Anime Search</h1>
      
      <div className="w-full px-4">
        <SearchBar onSearch={setQuery} />
      </div>

      {loading ? (
  // Skeleton loaders while loading
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 w-full px-4">
    {[...Array(6)].map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
) : results.length === 0 && query ? (
  // Empty state when search has no results
  <EmptyState 
    message="No anime found. Try searching for 'Naruto', 'One Piece', or 'Attack on Titan'!" 
    showGif={false}
  />
) : results.length === 0 ? (
  // Initial state before any search - shows anime GIF
  <EmptyState 
    message="Search for anime by title, genre, or keyword to get started!"
    showGif={true}
  />
) : (
  // Results grid
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 w-full px-4">
    {displayedResults.map((anime, index) => (
      <div 
        key={anime.mal_id} 
        style={{ 
          animation: `fadeIn 0.5s ease-in ${index * 0.1}s both` 
        }}
      >
        <AnimeCard anime={anime} />
      </div>
    ))}
  </div>
)}

      {results.length > 0 && (
        <div className="flex gap-4 mt-6 items-center justify-center text-white">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-lg disabled:opacity-50 hover:bg-white/30 transition-all duration-300 font-semibold shadow-lg"
          >
            ← Prev
          </button>
          <span className="font-bold text-lg bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
            {page} / {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-lg disabled:opacity-50 hover:bg-white/30 transition-all duration-300 font-semibold shadow-lg"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}