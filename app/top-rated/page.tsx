import MovieCard from "../components/moviecard";
import { getTopRatedMovies } from "../services/tmdb";

export default async function TopRated() {
    const topRatedMovies = await getTopRatedMovies();
    console.log('topratedmovies :', topRatedMovies);
    return (
        <main className="min-h-screen">
            <div className="container mx-auto py-12 md:py-16 px-4 sm:px-6 max-w-[1400px]">
                <div
                className="bg-white/5 rounded-lg md:rounded-2xl lg:rounded-3xl 
                p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl"
                >
                    <h1 className="font-poppins text-3xl md:text-4xl ml-4 mb-8 font-bold text-white">Les mieux notés</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {topRatedMovies?.map((movie: any, index: number) => (
                            <a href={`/movie/${movie.id}`} key={index}>
                                <MovieCard movie={movie} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}