const API_KEY = "26a806d14edd65dd2feebdc7ee206edf"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results;
};

export const searchMovies = async (query) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        query: query.trim(),
    });
    const response = await fetch(`${BASE_URL}/search/movie?${params}`);
    if (!response.ok) {
        throw new Error(`Movie search failed: ${response.status}`);
    }
    const data = await response.json()
    return data.results;
};
