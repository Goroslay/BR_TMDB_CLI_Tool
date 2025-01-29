import { apiClient } from "../utils/client.js";

const endpoints = {
  playing: "/movie/now_playing",
  popular: "/movie/popular",
  top: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

export async function fetchMovies(type) {
  const endpoint = endpoints[type];
  if (!endpoint) {
    throw new Error(`Tipo no válido: ${type}. Usa playing, popular, top o upcoming.`);
  }

  const response = await apiClient.get(endpoint);
  return response.data.results;
}
