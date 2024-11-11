const API_URL='https://api.themoviedb.org/3'
const API_KEY=process.env.NEXT_PUBLIC_API_KEY

export const getTrendingMovies = async () => {
    const response = await fetch(
        `${API_URL}/trending/movie/week?api_key=${API_KEY}&language=fr-FR`
    );
    const responseBody = await response.json();
    console.log(responseBody.results);
    return responseBody.results;
}

export const getTopRatedMovies = async () => {
    const response = await fetch(
        `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=fr-FR&page=1`
    );
    const responseBody = await response.json();
    console.log('getTopRatedMovies : ', responseBody.results);
    return responseBody.results;
}

export const getMovieDetails = async (id: string) => {
    const response = await fetch(
        `${API_URL}/movie/${id}?api_key=${API_KEY}&language=fr-FR`
    );
    const responseBody = await response.json();
    console.log('getMovieDetails : ', responseBody);
    return responseBody;
}

export const getMovieCredits = async (id: string) => {
    const response = await fetch(
        `${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=fr-FR`
    );
    const responseBody = await response.json();
    console.log('getMovieCredits : ', responseBody);
    return responseBody.cast.slice(0, 8);
}