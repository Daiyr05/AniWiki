import axios from 'axios';

const API_BASE_URL = 'https://aniwikibackend-production.up.railway.app/api/anime';


export const getPopularAnime = async () => {
  const response = await axios.get(`${API_BASE_URL}/popular`);
  return response.data.data; // <== double .data
};

export const searchAnime = async (query: string) => {
  const response = await axios.get(`${API_BASE_URL}/search`, {
    params: { q: query },
  });
  return response.data.data;
};

export const getAnimeById = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data.data;
};
