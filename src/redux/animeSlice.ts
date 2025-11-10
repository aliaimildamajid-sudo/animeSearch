import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAnime, fetchAnimeById } from '../api/anime';

interface AnimeState {
  results: any[];
  page: number;
  totalPages: number;
  loading: boolean;
  selected: any | null;
  recommendations: any[];
}

const initialState: AnimeState = {
  results: [],
  page: 1,
  totalPages: 1,
  loading: false,
  selected: null,
  recommendations: []
};

export const searchAnime = createAsyncThunk(
  'anime/search',
  async ({ query, page }: { query: string; page: number }) => {
    return fetchAnime(query, page);
  }
);

export const getAnimeDetail = createAsyncThunk(
  'anime/detail',
  async (id: string) => {
    return fetchAnimeById(id);
  }
);

export const getAnimeRecommendations = createAsyncThunk(
  'anime/recommendations',
  async (episodes: number) => {
    // Search for anime with similar episode count (±5 episodes range)
    const minEpisodes = Math.max(1, episodes - 5);
    const maxEpisodes = episodes + 5;
    
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?min_episodes=${minEpisodes}&max_episodes=${maxEpisodes}&order_by=popularity&limit=9`
    );
    const data = await response.json();
    return data.data;
  }
);

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(searchAnime.pending, state => { state.loading = true })
      .addCase(searchAnime.fulfilled, (state, action) => {
        state.results = action.payload.data;
        state.page = action.payload.pagination.current_page;
        state.totalPages = action.payload.pagination.last_visible_page;
        state.loading = false;
      })
      .addCase(searchAnime.rejected, state => { state.loading = false })
      .addCase(getAnimeDetail.pending, state => { state.loading = true })
      .addCase(getAnimeDetail.fulfilled, (state, action) => {
        state.selected = action.payload.data;
        state.loading = false;
      })
      .addCase(getAnimeDetail.rejected, state => { state.loading = false })
      .addCase(getAnimeRecommendations.pending, state => { 
        state.loading = true;
      })
      .addCase(getAnimeRecommendations.fulfilled, (state, action) => {
        state.recommendations = action.payload;
        state.loading = false;
      })
      .addCase(getAnimeRecommendations.rejected, state => { 
        state.loading = false;
        state.recommendations = [];
      });
  }
});

export default animeSlice.reducer;