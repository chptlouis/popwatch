const API_URL='https://api.themoviedb.org/3'
const API_KEY=process.env.NEXT_PUBLIC_API_KEY

export const getTrendingMovies = async () => {
    const response = await fetch(
        `${API_URL}/trending/movie/week?api_key=${API_KEY}&language=fr-FR`
    );
    const responseBody = await response.json();
    return responseBody.results;
}

export const getTopRatedMovies = async () => {
    const response = await fetch(
        `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=fr-FR&page=1`
    );
    const responseBody = await response.json();
    return responseBody.results;
}

export const getMovieDetails = async (id: string) => {
    const response = await fetch(
        `${API_URL}/movie/${id}?api_key=${API_KEY}&language=fr-FR`
    );
    const responseBody = await response.json();
    return responseBody;
}

export const getMovieCredits = async (id: string) => {
    const response = await fetch(
        `${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=fr-FR`
    );
    const responseBody = await response.json();
    return responseBody.cast.slice(0, 8);
}

export const getGenres = async () => {
    const response = await fetch(
        `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=fr-FR`
    );
    const responseBody = await response.json();
    return responseBody.genres;
}

export const getMoviesByGenre = async (id: string) => {
    const response = await fetch(
        `${API_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&page=1&sort_by=vote_average.desc&vote_count.gte=100&with_genres=${id}&with_origin_country=US&`
    );
    const responseBody = await response.json();
    return responseBody.results;
}

export const getGenreById = async (id: string) => {
    const response = await fetch(
        `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=fr-FR`
    );
    const responseBody = await response.json();
    return responseBody.genres.find((genre: any) => genre.id === parseInt(id));
}