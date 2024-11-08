const API_URL='https://api.themoviedb.org/3'
const API_KEY=process.env.NEXT_PUBLIC_API_KEY

export const getTrendingMovies = async () => {
    const response = await fetch(
        `${API_URL}/trending/movie/day?api_key=${API_KEY}&language=fr-FR`
    );
    const responseBody = await response.json();
    console.log(responseBody.results);
    return responseBody.results;
}