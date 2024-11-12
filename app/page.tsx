import { getTopRatedMovies } from "./services/tmdb";
import Carousel from "./components/carousel";

export default async function Home() {
  const topRatedMovies = await Promise.all([
    getTopRatedMovies(),
  ])
  const trendingMoviesPosters = topRatedMovies[0]?.map((movie: any) => movie.backdrop_path);

  return (
    <div>
      <main>
        <Carousel trendingMoviesPosters={trendingMoviesPosters} />
      </main>
    </div>
  );
}
