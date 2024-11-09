import { getTrendingMovies } from "./services/tmdb";
import Carousel from "./components/carousel";

export default async function Home() {
  const trendingMovies = await Promise.all([
    getTrendingMovies()
  ])
  const trendingMoviesPosters = trendingMovies[0].map((movie: any) => movie.backdrop_path);

  return (
    <div>
      <main>
        <Carousel trendingMoviesPosters={trendingMoviesPosters} />
      </main>
    </div>
  );
}
