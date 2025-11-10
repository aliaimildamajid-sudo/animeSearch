import axios from 'axios';

const BASE_URL = 'https://api.jikan.moe/v4';

export const fetchAnime = async (query: string, page: number) => {
  const response = await axios.get(`${BASE_URL}/anime`, {
    params: { q: query, page }
  });
  return response.data;
};

export const fetchAnimeById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/anime/${id}`);
  return response.data;
};
