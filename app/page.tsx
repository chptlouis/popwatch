import { getTopRatedMovies, getTrendingMovies } from "./services/tmdb";
import Carousel from "./components/carousel";
import MovieSlider from "./components/movieslider";

export default async function Home() {
  const topRatedMovies = await getTopRatedMovies();
  const trendingMovies = await getTrendingMovies();
  const trendingMoviesPosters = topRatedMovies?.map((movie: any) => movie.backdrop_path);

  return (
    <div>
      <main>
        <Carousel trendingMoviesPosters={trendingMoviesPosters} />
        <div className="pt-12">
          <MovieSlider movies={trendingMovies} sliderText="Tendances" />
        </div>
        <div className="pt-12">
          <MovieSlider movies={topRatedMovies} sliderText="Les mieux notés" />
        </div>
      </main>
    </div>
  );
}
