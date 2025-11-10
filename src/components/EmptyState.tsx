import React from 'react';

interface EmptyStateProps {
  message?: string;
  showGif?: boolean;
}

export default function EmptyState({ 
  message = "Start searching for your favorite anime above!",
  showGif = true
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      {showGif ? (
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzBkNmE4ZmE4ZjE3YzRlNzQwZmRjOGQ4ZjBhZjE3YzRhZjE3YzRlNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KztT2c4u8mYYUiMKdJ/giphy.gif"
          alt="Anime searching"
          className="w-64 h-64 object-cover rounded-2xl shadow-2xl mb-6 animate-bounce"
        />
      ) : (
        <div className="text-8xl mb-4 animate-pulse">😢</div>
      )}
      <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
        {showGif ? "Find Your Anime" : "No Results Found"}
      </h3>
      <p className="text-white/90 text-center max-w-md text-lg px-4">
        {message}
      </p>
    </div>
  );
}