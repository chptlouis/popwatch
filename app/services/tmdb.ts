const API_URL='https://api.themoviedb.org/3'
const API_KEY=process.env.NEXT_PUBLIC_API_KEY

export const getNowPlayingMovies = async (page: any) => {
    try {
        const response = await fetch(
            `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=fr-FR&page=${page}`
        );
        const responseBody = await response.json();
        console.log(page);
        return responseBody.results;
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to fetch now playing movies');
    }
}

export const getTrendingMovies = async () => {
    try {
        const response = await fetch(
            `${API_URL}/trending/movie/week?api_key=${API_KEY}&language=fr-FR`
        );
        const responseBody = await response.json();
        return responseBody.results;
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to fetch trending movies');
    }
}

export const getTopRatedMovies = async () => {
    try {
        const response = await fetch(
            `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=fr-FR`
        );
        const responseBody = await response.json();
        return responseBody.results;
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to fetch top rated movies');
    }
}

export const getMovieDetails = async (id: string) => {
    try {
        const response = await fetch(
            `${API_URL}/movie/${id}?api_key=${API_KEY}&language=fr-FR`
        );
        const responseBody = await response.json();
        return responseBody;
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to fetch movie details');
    }
}

export const getMovieCredits = async (id: string) => {
    try {
        const response = await fetch(
            `${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=fr-FR`
        );
        const responseBody = await response.json();
        return responseBody.cast.slice(0, 8);
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to fetch movie credits');
    }
}

export const getGenres = async () => {
    try {
        const response = await fetch(
            `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=fr-FR`
        );
        const responseBody = await response.json();
        return responseBody.genres;
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to fetch genres');
    }
}

export const getMoviesByGenre = async (id: string) => {
    try {
        const response = await fetch(
            `${API_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&page=1&sort_by=vote_average.desc&vote_count.gte=100&with_genres=${id}&with_origin_country=US&`
        );
        const responseBody = await response.json();
        return responseBody.results;
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to fetch movies by genre');
    }
}

export const getGenreById = async (id: string) => {
    try {
        const response = await fetch(
            `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=fr-FR`
        );
        const responseBody = await response.json();
        return responseBody.genres.find((genre: any) => genre.id === parseInt(id));
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to fetch genre by id');
    }
}

export const getRecommendedMovies = async (id: string) => {
    try {
        const response = await fetch(
            `${API_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=fr-FR`
        );
        const responseBody = await response.json();
        return responseBody.results;
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to fetch recommended movies');
    }
}