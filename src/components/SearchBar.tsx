import React, { useState, useEffect } from 'react';

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [input, setInput] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => onSearch(input), 250);
    return () => clearTimeout(handler);
  }, [input, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search anime..."
      value={input}
      onChange={e => setInput(e.target.value)}
      className="border p-2 rounded w-full"
    />
  );
}
