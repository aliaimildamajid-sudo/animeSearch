import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimeDetail, getAnimeRecommendations } from '../redux/animeSlice';
import { RootState, AppDispatch } from '../redux/store';
import AnimeCard from '../components/AnimeCard';

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { selected, recommendations, loading } = useSelector((state: RootState) => state.anime);
  const [recPage, setRecPage] = useState(0);

  useEffect(() => {
    if (id) {
      dispatch(getAnimeDetail(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    // Fetch recommendations based on episode count after selected anime is loaded
    if (selected && selected.episodes) {
      dispatch(getAnimeRecommendations(selected.episodes));
    }
    window.scrollTo(0, 0);
  }, [selected, dispatch]);

  if (loading || !selected) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f6d365, #fda085)' }}>
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  // Get 3 recommendations per page
  const recsPerPage = 3;
  const startIndex = recPage * recsPerPage;
  // Filter out the current anime from recommendations
  const filteredRecs = recommendations.filter(rec => rec.mal_id !== selected.mal_id);
  const displayedRecs = filteredRecs.slice(startIndex, startIndex + recsPerPage);
  const totalRecPages = Math.ceil(filteredRecs.length / recsPerPage);

  const handleRecPageChange = (newPage: number) => {
    setRecPage(newPage);
    document.getElementById('recommendations')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center" style={{ background: 'linear-gradient(135deg, #f6d365, #fda085)' }}>
      {/* Detail Section */}
      <div className="w-full max-w-5xl px-6 mb-12">
        <div className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src={selected.images.jpg.large_image_url || selected.images.jpg.image_url} 
              alt={selected.title} 
              className="rounded-xl object-cover shadow-md w-full"
            />
          </div>
          
          <div className="md:w-2/3 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{selected.title}</h1>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-600"><strong>Score:</strong> ⭐ {selected.score || 'N/A'}</p>
                  <p className="text-gray-600"><strong>Episodes:</strong> 📺 {selected.episodes || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600"><strong>Status:</strong> {selected.status}</p>
                  <p className="text-gray-600"><strong>Type:</strong> {selected.type}</p>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-bold text-gray-800 mb-2">Synopsis</h3>
                <p className="text-gray-700 leading-relaxed">{selected.synopsis}</p>
              </div>

              {selected.genres && selected.genres.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {selected.genres.map((genre: any) => (
                    <span 
                      key={genre.mal_id} 
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              to="/" 
              className="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors"
            >
              ← Back to Search
            </Link>
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      {filteredRecs.length > 0 && (
        <div id="recommendations" className="w-full max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-white mb-2 text-center drop-shadow-lg">
            Recommended Anime
          </h2>
          <p className="text-white/90 text-center mb-6">
            Anime with around {selected.episodes} episodes
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {displayedRecs.map((rec: any) => (
              <AnimeCard 
                key={rec.mal_id} 
                anime={{
                  mal_id: rec.mal_id,
                  title: rec.title,
                  images: rec.images,
                  synopsis: rec.synopsis,
                  score: rec.score
                }} 
              />
            ))}
          </div>

          {/* Pagination for Recommendations */}
          {totalRecPages > 1 && (
            <div className="flex gap-4 items-center justify-center text-white">
              <button
                onClick={() => handleRecPageChange(recPage - 1)}
                disabled={recPage === 0}
                className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-lg disabled:opacity-50 hover:bg-white/30 transition-all duration-300 font-semibold shadow-lg"
              >
                ← Prev
              </button>
              <span className="font-bold text-lg bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                {recPage + 1} / {totalRecPages}
              </span>
              <button
                onClick={() => handleRecPageChange(recPage + 1)}
                disabled={recPage === totalRecPages - 1}
                className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-lg disabled:opacity-50 hover:bg-white/30 transition-all duration-300 font-semibold shadow-lg"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}